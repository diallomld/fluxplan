import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const PrevisionFinanciere = ()=>{
  
    const { userId } = useGlobalContext();
    const [prevision, setPrevision] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("prevision-financiere")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                ca1: doc.data().ca1,
                ca2: doc.data().ca2,
                ca3: doc.data().ca3,
                charges1: doc.data().charges1,
                charges2: doc.data().charges2,
                charges3: doc.data().charges3,
                resultatNet1: doc.data().resultatNet1,
                resultatNet2: doc.data().resultatNet2,
                resultatNet3: doc.data().resultatNet3,
                cashFlow1: doc.data().cashFlow1,
                cashFlow2: doc.data().cashFlow2,
                cashFlow3: doc.data().cashFlow3,
                pointMort1: doc.data().pointMort1,
                pointMort2: doc.data().pointMort2,
                pointMort3: doc.data().pointMort3,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setPrevision(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {prevision.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}></th>
                    <th style={{minWidth:150}}>Année 1</th>
                    <th style={{minWidth:150}}>Année 2</th>
                    <th style={{minWidth:150}}>Année 3</th>
                </tr>
                </thead>
                <tbody>
                    {prevision.map((item, index) => {
                    return (
                        <>
                        <tr>
                            <td>Chiffre d'affaires </td>
                            <td>{item.ca1}</td>
                            <td>{item.ca2}</td>
                            <td>{item.ca3}</td>
                        </tr>
                        <tr>
                          
                            <td>Charges</td>
                            <td>{item.charges1}</td>
                            <td>{item.charges2}</td>
                            <td>{item.charges3}</td>
                        </tr>
                        <tr>
                          
                            <td>Résultat net</td>
                            <td>{item.resultatNet1}</td>
                            <td>{item.resultatNet2}</td>
                            <td>{item.resultatNet3}</td>
                        </tr>
                        <tr>
                          
                            <td>Cash-flow</td>
                            <td>{item.cashFlow1}</td>
                            <td>{item.cashFlow2}</td>
                            <td>{item.cashFlow3}</td>
                        </tr>
                        <tr>
                          
                            <td>Point mort en quantité </td>
                            <td>{item.pointMort1}</td>
                            <td>{item.pointMort2}</td>
                            <td>{item.pointMort3}</td>
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

export default PrevisionFinanciere