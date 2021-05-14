import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Partenaire = ()=>{
  
    const { userId } = useGlobalContext();
    const [partenaire, setPartenaire] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("partenaire")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                partenaire: doc.data().partenaire,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setPartenaire(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {partenaire.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Partenaires Clés</th>
                </tr>
                </thead>
                <tbody>
                    {partenaire.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                          <td>{item.partenaire}</td>
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

export default Partenaire