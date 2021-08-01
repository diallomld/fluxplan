import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Emprunt = ()=>{
  
    const { userId } = useGlobalContext();
    const [mode, setMode] = React.useState([]);

    const [duree, setDuree] = React.useState(0)
    const [taux, setTaux] = React.useState(0)
    const [capital1, setCapital1] = React.useState(0)
    const [capital2, setCapital2] = React.useState(0)
    const [capital3, setCapital3] = React.useState(0)
    const [amort1, setAmort1] = React.useState(0)
    const [amort2, setAmort2] = React.useState(0)
    const [amort3, setAmort3] = React.useState(0)
    const [interet1, setinteret1] = React.useState(0)
    const [interet2, setinteret2] = React.useState(0)
    const [interet3, setinteret3] = React.useState(0)
    const [echeance1, setecheance1] = React.useState(0)
    const [echeance2, setecheance2] = React.useState(0)
    const [echeance3, setecheance3] = React.useState(0)
    
    const getDate = () => {
        return firebasee
          .firestore()
          .collection("caracteristique-emprunt")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
    
            let tamort1=0
            let tamort2=0
            let tamort3=0
            let tinteret1 = 0
            let tinteret2 = 0
            let tinteret3 = 0
            let techeance1 = 0
            let techeance2 = 0
            let techeance3 = 0
            let tcapital2 = 0
            let tcapital3 = 0
            let tauxpercent = 0
    
            data.forEach((doc) => {
              dat.push({
                taux: doc.data().taux,
                duree: doc.data().duree,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              setDuree(Number(doc.data().duree))
              setTaux(Number(doc.data().taux))
              tauxpercent = Number(doc.data().taux)/100
              /**ANNEE 1 */
              tamort1 = (capital1/Number(doc.data().duree))*12
              tinteret1 = capital1*tauxpercent
    
              setAmort1(tamort1)
              setinteret1(tinteret1)
    
              techeance1 = tamort1+tinteret1
              setecheance1(techeance1)
              /**ANNEE 2 */
              tcapital2 = capital1-amort1
              setCapital2(tcapital2)
              tamort2 = (tcapital2/Number(doc.data().duree))*12
              setAmort2(tamort2)
    
              tinteret2 = tcapital2*tauxpercent
              setinteret2(tinteret2)
              techeance2 = tamort2+tinteret2
              setecheance2(techeance2)
    
              /**ANNEE 3 */
              tcapital3 = tcapital2-tamort2
              setCapital3(tcapital3)
              tamort3 = (tcapital3/Number(doc.data().duree))*12
              setAmort3(tamort3)
    
              tinteret3 = tcapital3*tauxpercent
              setinteret3(tinteret3)
              techeance3 = tamort3+tinteret3
              setecheance3(techeance3)
    
            });
            setMode(dat);
          })
          .catch((err) => console.log(err));
      };
    const getEmprunt = () => {
    return firebasee
        .firestore()
        .collection("mode-financement-projet")
        .where("userId", "==", userId)
        .get()
        .then((data) => {
        data.forEach((doc) => {
            
            setCapital1(Number(doc.data().emprunt))
            
        });
        })
        .catch((err) => console.log(err));
    };
  React.useEffect(() => {
    getEmprunt()
    getDate();
  }, []);

  return(
    <>
        Montant du financement  : {capital1}(E)…FCFA<br/>
        Durée de remboursement : {duree}(d) mois<br/>
        Taux d’intérêt {taux}(t)..% <br/><br/>
        {mode.length > 0 ? (
             
            <table>
                <thead>
                    <tr>
                        <th>Année</th>
                        <th>Capital début période</th>
                        <th>Amortissement</th>
                        <th>Intérêts </th>
                        <th>Échéance</th>
                    </tr>
                </thead>
                <tbody>
                    {mode.map((item, index) => {
                    return (
                        <>
                         <tr hover tabIndex={-1}>
                          
                          <td><b>Année 1</b></td>
                          <td>{capital1}</td>
                          <td>{amort1}</td>
                          <td>{interet1}</td>
                          <td>{echeance1}</td>
                        </tr>
                        <tr hover tabIndex={-1}>
                            <td><b>Année 2</b></td>
                            <td>{capital2}</td>
                            <td>{amort2}</td>
                            <td>{interet2}</td>
                            <td>{echeance2}</td>
                        </tr>
                        <tr hover tabIndex={-1}>
                            <td><b>Année 3</b></td>
                            <td>{capital3}</td>
                            <td>{amort3}</td>
                            <td>{interet3}</td>
                            <td>{echeance3}</td>
                        </tr>
                        </>
                    );
                    })}
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default Emprunt