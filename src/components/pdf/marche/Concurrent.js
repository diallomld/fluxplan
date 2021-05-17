import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Concurrent = ()=>{
  
    const { userId } = useGlobalContext();
    const [concurrent, setConcurrent] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("concurrent")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nom: doc.data().nom,
                localisation: doc.data().localisation,
                produit: doc.data().produit,
                force: doc.data().force,
                faiblesse: doc.data().faiblesse,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setConcurrent(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {concurrent.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Nom Concurrent </th>
                    <th>Localisation </th>
                    <th>Produits </th>
                    <th>Forces</th>
                    <th>Faiblesses</th>
                </tr>
                </thead>
                <tbody>
                    {concurrent.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.localisation}</td>
                            <td>{item.produit}</td>
                            <td style={{minWidth:150}}>{item.force}</td>
                            <td style={{minWidth:150}}>{item.faiblesse}</td>
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

export default Concurrent