import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const Avancement = ()=>{
  
    const { userId } = useGlobalContext();
    const [etat, setEtat] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("etat-avancement")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                action: doc.data().action,
                responsable: doc.data().responsable,
                date: doc.data().date,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setEtat(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {etat.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Actions accomplies</th>
                    <th>Responsable </th>
                    <th>Date </th>
                </tr>
                </thead>
                <tbody>
                    {etat.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.action}</td>
                            <td>{item.responsable}</td>
                            <td>{item.date}</td>
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

export default Avancement