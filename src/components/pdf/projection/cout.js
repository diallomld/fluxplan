import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Cout = ()=>{
  
    const { userId } = useGlobalContext();
    const [cout, setCout] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    let test = 0;

    const getDate = () => {
       
        return firebasee
          .firestore()
          .collection("cout-projet")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                elements: doc.data().elements,
                montant: doc.data().montant,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              //console.log("montant "+ Number(doc.data().montant) + total)
              test = test + Number(doc.data().montant)
            });
            setCout(dat);
            setTotal(test)
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        Le coût total du projet est estimé à <b>{total}</b> FCFA reparti comme suit :
        {cout.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{ minWidth: 300}}>Elements</th>
                    <th>Montant</th>
                </tr>
                </thead>
                <tbody>
                    {cout.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.elements}</td>
                            <td>{item.montant}</td>
                        </tr>
                        </>
                    );
                    })}
                    <tr>
                    <td style={{color: 'black', fontSize:30}}>Total Investissements</td>
                    <td colSpan="3" style={{color: 'black', fontSize:30}}>{total} FCFA</td>

                    </tr>
                    
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default Cout