import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const PlanAction = ()=>{
  
    const { userId } = useGlobalContext();
    const [planaction, setPlanaction] = React.useState([]);

    const getDate = () => {
        //setLoad(true)
        return firebasee
          .firestore()
          .collection("planaction-commerial")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                objectif: doc.data().objectif,
                action: doc.data().action,
                responsable: doc.data().responsable,
                delai: doc.data().delai,
                budget: doc.data().budget,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setPlanaction(dat);
            //setLoad(false)
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {planaction.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Objectifs</th>
                    <th>Actions</th>
                    <th>Responsable</th>
                    <th>Délai</th>
                    <th>Budget</th>
                </tr>
                </thead>
                <tbody>
                    {planaction.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.objectif}</td>
                            <td>{item.action}</td>
                            <td>{item.responsable}</td>
                            <td>{item.delai}</td>
                            <td>{item.budget}</td>
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

export default PlanAction