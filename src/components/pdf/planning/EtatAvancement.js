import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const EtatAvancementPlaning = ()=>{
  
    const { userId } = useGlobalContext();
    const [etat, setEtat] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("etat-avancement-planning")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                action: doc.data().action,
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
                    <th style={{minWidth:200}}>Actions déjà accomplies </th>
                    <th style={{minWidth:100}}>Date</th>
                    <th style={{ minWidth: 100 }}>Action</th>
                </tr>
                </thead>
                <tbody>
                    {etat.map((item, index) => {
                    return (
                        <>
                            <td>{item.action}</td>
                            <td>{item.date}</td>
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

export default EtatAvancementPlaning