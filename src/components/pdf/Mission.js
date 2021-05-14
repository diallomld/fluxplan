import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const Mission = ()=>{
  
    const { userId } = useGlobalContext();
    const [mission, setMission] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("mission-vision-objectif")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                mission: doc.data().mission,
                vision: doc.data().vision,
                objectif: doc.data().objectif,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setMission(dat);
    
          })
          .catch((err) => console.log(err));
      };

  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {mission.length > 0 ? (
            <table>
                <thead>
                <tr>
                <th>Mission</th>
                <th>Vision</th>
                <th>Objectif</th>
                </tr>
                </thead>
                <tbody>
                    {mission.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.mission}</td>
                            <td>{item.vision}</td>
                            <td>{item.objectif}</td>
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

export default Mission