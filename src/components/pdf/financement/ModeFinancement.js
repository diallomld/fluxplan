import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const ModeFiancement = ()=>{
  
    const { userId } = useGlobalContext();
    const [mode, setMode] = React.useState([]);
    
    const [totalFinancement, setTotalFinancement] = React.useState(0)
    
    const getDate = () => {
        return firebasee
          .firestore()
          .collection("mode-financement-projet")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
    
            let tf = 0
            data.forEach((doc) => {
              dat.push({
                emprunt: doc.data().emprunt,
                subvention: doc.data().subvention,
                autres: doc.data().autres,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              tf = Number(doc.data().emprunt) + Number(doc.data().subvention)+Number(doc.data().autres)
    
            });
            setTotalFinancement(tf)
            setMode(dat);
          })
          .catch((err) => console.log(err));
    };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {mode.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:250}}>Désignation</th>
                    <th style={{minWidth:250}}>Montant</th>
                    <th style={{minWidth:250}}>%</th>
                </tr>
                </thead>
                <tbody>
                    {mode.map((item, index) => {
                    return (
                        <>
                        <tr>
                          
                          <td><b>Besoin de financement</b></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                            <td>Emprunts</td>
                            <td>{item.emprunt}</td>
                            <td>{Math.round(Number((item.emprunt)/totalFinancement)*100)}%</td>
                        </tr>
                        <tr>
                            <td>Subventions</td>
                            <td>{item.subvention}</td>
                            <td>{Math.round(Number((item.subvention)/totalFinancement)*100)}%</td>
                        </tr>
                        <tr>
                            <td>Autres</td>
                            <td>{item.autres}</td>
                            <td>{Math.round(Number((item.autres)/totalFinancement)*100)}%</td>
                        </tr>
                        </>
                    );
                    })}
                    <tr>
                        <td><b>Total Financement</b></td>
                        <td><b>{totalFinancement}</b></td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default ModeFiancement