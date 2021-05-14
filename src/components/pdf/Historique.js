import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const Historique = ()=>{
  
    const { userId } = useGlobalContext();
    const [historique, setHistorique] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("historique")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                description: doc.data().description,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setHistorique(dat);
          })
          .catch((err) => console.log(err));
      };

  React.useEffect(() => {
    getDate();
  }, []);

  return(
      <>
     {historique.length > 0 ? (
            <table>
                <thead>
                <tr>
                <th width="200">Description</th>
                </tr>
                </thead>
                <tbody>
                    {historique.map((item, index) => {
                    return (
                        <>
                        <tr>
                            <td key={index}>{item.description}</td>
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

export default Historique