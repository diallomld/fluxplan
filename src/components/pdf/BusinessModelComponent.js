import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const BusinessModelComponent = ()=>{
  
    const { userId } = useGlobalContext();
    const [business, setBusiness] = React.useState([]);

    const getBusiness = () => {
        return firebasee
          .firestore()
          .collection("businessmodel")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                produit: doc.data().produit,
                model: doc.data().model,
                revenu: doc.data().revenu,
                description: doc.data().description,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setBusiness(dat);
          })
          .catch((err) => console.log(err));
      };

  React.useEffect(() => {
    getBusiness();
  }, []);

  return(
    <>
        {business.length > 0 ? (
            <table>
                <thead>
                <tr>
                <th>business/service</th>
                <th>Nom du business model</th>
                <th>Flux de revenus</th>
                <th width="200">Description des processus de paiement</th>
                </tr>
                </thead>
                <tbody>
                    {business.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.produit}</td>
                            <td>{item.model}</td>
                            <td>{item.revenu}</td>
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

export default BusinessModelComponent