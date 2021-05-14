import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Analyse = ()=>{
  
    const { userId } = useGlobalContext();
    const [analyse, setAnalyse] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("analyse-marche")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nature: doc.data().nature,
                localisation: doc.data().localisation,
                taille: doc.data().taille,
                tendance: doc.data().tendance,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setAnalyse(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {analyse.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Nature</th>
                    <th>Localisation</th>
                    <th>Taille</th>
                    <th>Tendance</th> 
                </tr>
                </thead>
                <tbody>
                    {analyse.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nature}</td>
                            <td>{item.localisation}</td>
                            <td>{item.taille}</td>
                            <td>{item.tendance}</td>
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

export default Analyse