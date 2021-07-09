import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Stock = ()=>{
  
    const { userId } = useGlobalContext();
    const [stock, setStock] = React.useState([]);

    const [tqte, setQte] = React.useState(0)
    const [tcout, setCout] = React.useState(0)
    const [tmontant, setMontant] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("stock-marchandise")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let totalqte = 0
            let totalcout = 0
            let totalmontant = 0
            data.forEach((doc) => {
              dat.push({
                designation: doc.data().designation,
                qte: doc.data().qte,
                cout: doc.data().cout,
                montant: doc.data().montant,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              
              totalqte += Number(doc.data().qte)
              totalcout += Number(doc.data().cout)
              totalmontant += Number(doc.data().montant)
    
              setQte(totalqte)
              setCout(totalcout)
              setMontant(totalmontant)
    
            });
            setStock(dat);
          })
          .catch((err) => console.log(err));
    };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {stock.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Désignation </th>
                    <th style={{minWidth:100}}>Quantité</th>
                    <th style={{minWidth:100}}>Coût unitaire</th>
                    <th style={{minWidth:100}}>Montant</th>
                </tr>
                </thead>
                <tbody>
                    {stock.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <td>{item.designation}</td>
                                <td>{item.qte}</td>
                                <td>{item.cout}</td>
                                <td>{item.montant}</td>
                            </tr>
                        </>
                    );
                    })}
                    <tr>
                        <td><b>Total stock de démarrage/renforcement</b> </td>
                        <td>{tqte}</td>
                        <td>{tcout}</td>
                        <td>{tmontant}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default Stock