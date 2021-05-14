import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Strategie = ()=>{
  
    const { userId } = useGlobalContext();
    const [strategie, setStrategie] = React.useState([]);

    const getDate = () => {
        //setLoad(true)
        return firebasee
          .firestore()
          .collection("strategy-marketing")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                ciblage: doc.data().ciblage,
                segmentation: doc.data().segmentation,
                positionnement: doc.data().positionnement,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setStrategie(dat);
            //setLoad(false)
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {strategie.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Segmentation</th>
                    <th>Ciblage </th>
                    <th>Positionnement </th>
                </tr>
                </thead>
                <tbody>
                    {strategie.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.segmentation}</td>
                            <td>{item.ciblage}</td>
                            <td>{item.positionnement}</td>
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

export default Strategie