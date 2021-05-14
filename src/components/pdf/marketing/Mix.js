import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Mix = ()=>{
  
    const { userId } = useGlobalContext();
    const [mix, setMix] = React.useState([]);

    const getDate = () => {
        //setLoad(true)
        return firebasee
          .firestore()
          .collection("mix-marketing")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                produit: doc.data().produit,
                prix: doc.data().prix,
                distribution: doc.data().distribution,
                communication: doc.data().communication,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setMix(dat);
            //setLoad(false)
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {mix.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Politique de produit</th>
                    <th>Politique de prix</th>
                    <th>Politique de distribution</th>
                    <th>Politique de communication</th>
                </tr>
                </thead>
                <tbody>
                    {mix.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.produit}</td>
                            <td>{item.prix}</td>
                            <td>{item.distribution}</td>
                            <td>{item.communication}</td>
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

export default Mix