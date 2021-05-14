import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Fournisseur = ()=>{
  
    const { userId } = useGlobalContext();
    const [fournisseur, setFournisseur] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("fournisseur")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nom: doc.data().nom,
                achat: doc.data().achat,
                localisation: doc.data().localisation,
                produit: doc.data().produit,
                mode: doc.data().mode,
                delai: doc.data().delai,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setFournisseur(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {fournisseur.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Nom fournisseur </th>
                    <th>Localisation </th>
                    <th>Produits </th>
                    <th>% des achats</th>
                    <th>Mode de règlement</th>
                    <th>Délais de règlement</th>
                </tr>
                </thead>
                <tbody>
                    {fournisseur.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.localisation}</td>
                            <td>{item.produit}</td>
                            <td>{item.achat}</td>
                            <td>{item.mode}</td>
                            <td>{item.delai}</td>
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

export default Fournisseur