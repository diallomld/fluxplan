import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const SolutionComponent = ()=>{
  
    const { userId } = useGlobalContext();

    const [produit, setProduit] = React.useState([]);
  
    const getProduitProjet = () => {
      return firebasee
        .firestore()
        .collection("produitprojet")
        .where("userId", "==", userId)
        .get()
        .then((data) => {
          let dat = [];
          data.forEach((doc) => {
            //setIdDoc(doc.id);
            dat.push({
              nom: doc.data().nom,
              description: doc.data().description,
              id: doc.data().userId,
              docIdd: doc.id,
            });
          });
          //console.log("dat " + dat[0].docIdd)
          setProduit(dat);
        })
        .catch((err) => console.log(err));
    };

  React.useEffect(() => {
    getProduitProjet();
  }, []);

  return(
      <>
        {produit.length > 0 ? (
            <table>
                <thead>
                <tr>
                <th>Nom du produit/service</th>
                <th>Description du produit/service</th>
                </tr>
                </thead>
                <tbody>
                    {produit.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.description}</td>
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

export default SolutionComponent