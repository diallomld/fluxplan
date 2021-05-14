import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Schema = ()=>{
  
    const { userId } = useGlobalContext();
    const [finance, setFinance] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("financement")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let test = 0
            data.forEach((doc) => {
              test = test + Number(doc.data().montant)
              dat.push({
                elements: doc.data().elements,
                montant: doc.data().montant,
                typeFinancement: doc.data().typeFinancement,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              console.log("montant "+ Number(doc.data().montant) +" total "+ total)
              setTotal(test)
            });
            setFinance(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {finance.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{ maxWidth: 300}}>Elements</th>
                    <th>Montant</th>
                    <th>%</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{fontSize:20}}><b>Financement interne</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                    {finance.map((item, index) => {
                        if (item.typeFinancement=="interne") {
                        
                            return (
                                <>
                                <tr key={index}>
                                    <td>{item.elements}</td>
                                    <td>{item.montant}</td>
                                    <td>{Math.round((item.montant/total)*100)}%</td>
                                </tr>
                                </>
                            );
                        }
                    })}
                    <tr>
                        <td style={{fontSize:20}}><b>Financement exterieur</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                  {finance.map((item, index) => {
                      if (item.typeFinancement=="exterieur" || item.typeFinancement=="externe") {
                        
                        return (
                          <tr hover role="checkbox" tabIndex={-1} key={index}>
                            
                                <td>{item.elements}</td>
                                <td>{item.montant}</td>
                                <td>{Math.round((item.montant/total)*100)}%</td>
                          </tr>
                        );
                      }
                    })}
                    <tr>
                        <td style={{color: 'black', fontSize:20}}>TOTAL</td>
                        <td style={{color: 'black', fontSize:20}}>{total} FCFA</td>
                        <td colSpan="2" style={{color: 'black', fontSize:20}}>100%</td>
                    </tr>
                    
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default Schema