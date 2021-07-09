import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const BesoinFiancementSommaire = ()=>{
  
    const { userId } = useGlobalContext();
    const [besoin, setBesoin] = React.useState([]);

    const [totalBesoin, setTotalBesoin] = React.useState(0)
    const [cout, setCout] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("besoin-financement")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
    
            let tcout = 0
            let tbesoin = 0
            data.forEach((doc) => {
              dat.push({
                investissement: doc.data().investissement,
                bfr: doc.data().bfr,
                apport: doc.data().apport,
                id: doc.data().userId,
                docIdd: doc.id,
              });
    
              tcout = Number(doc.data().investissement) + Number(doc.data().bfr)
    
              setCout(tcout)
    
              tbesoin = Number(cout-doc.data().apport)
    
              setTotalBesoin(tbesoin)
    
            });
            setBesoin(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {equipe.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:250}}>Désignation</th>
                    <th style={{minWidth:250}}>Montant</th>
                    <th style={{minWidth:250}}>%</th>
                </tr>
                </thead>
                <tbody>
                    {equipe.map((item, index) => {
                    return (
                        <>
                         <tr>
                          <td>Investissements</td>
                          <td>{item.investissement}</td>
                          <td>{Math.round(Number(item.investissement/cout)*100)}%</td>                      
                        </tr>
                        <tr>
                            <td>Besoin en Fonds de Roulement (BFR)</td>
                            <td>{item.bfr}</td>
                            <td>{Math.round(Number(item.bfr/cout)*100)}%</td>
                        </tr>
                        <tr>
                            <td><b>Coût du projet</b></td>
                            <td><b>{cout}</b></td>
                            <td>100 %</td>
                        </tr>
                        <tr>
                            <td>Apport personnel</td>
                            <td>{item.apport}</td>
                            <td>{Math.round(Number(item.apport/cout)*100)}%</td>
                        </tr>
                        <tr>
                            <td><b>Besoin de financement</b></td>
                            <td><b>{totalBesoin}</b></td>
                            <td>{Math.round(Number(totalBesoin/cout)*100)}%</td>
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

export default BesoinFiancementSommaire