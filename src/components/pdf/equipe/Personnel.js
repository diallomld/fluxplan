import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Personnel = ()=>{
  
    const { userId } = useGlobalContext();
    const [personnel, setPersonnel] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("personnel")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nombre: doc.data().nombre,
                poste: doc.data().poste,
                profil: doc.data().profil,
                mission: doc.data().mission,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setPersonnel(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {personnel.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Poste</th>
                    <th>Nombre</th>
                    <th>Profil</th>
                    <th>Missions et tâches</th>
                </tr>
                </thead>
                <tbody>
                    {personnel.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                          <td>{item.poste}</td>
                          <td>{item.nombre}</td>
                          <td>{item.profil}</td>
                          <td>{item.mission}</td>
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

export default Personnel