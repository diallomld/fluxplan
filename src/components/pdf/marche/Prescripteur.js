import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Prescripteur = ()=>{
  
    const { userId } = useGlobalContext();
    const [prescripteur, setPrescripteur] = React.useState([]);

    const getDate = () => {
        //setLoad(true)
        return firebasee
          .firestore()
          .collection("prescripteur")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nom: doc.data().nom,
                localisation: doc.data().localisation,
                produit: doc.data().produit,
                motif: doc.data().motif,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setPrescripteur(dat);
            //setLoad(false)
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {prescripteur.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Nom prescripteur</th>
                    <th>Localisation </th>
                    <th>Produits </th>
                    <th>Motifs</th>
                </tr>
                </thead>
                <tbody>
                    {prescripteur.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.localisation}</td>
                            <td>{item.produit}</td>
                            <td>{item.motif}</td>
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

export default Prescripteur