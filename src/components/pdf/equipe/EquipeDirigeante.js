import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const EquipeDirigente = ()=>{
  
    const { userId } = useGlobalContext();
    const [equipe, setEquipe] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("equipe")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nom: doc.data().nom,
                poste: doc.data().poste,
                diplome: doc.data().diplome,
                experience: doc.data().experience,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setEquipe(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {equipe.length > 0 ? (
            <table>
                <thead>
                <tr>
                  <th>Nom et prénoms</th>
                  <th>Diplômes</th>
                  <th>Poste</th>
                  <th>Expériences</th>
                </tr>
                </thead>
                <tbody>
                    {equipe.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.diplome}</td>
                            <td>{item.poste}</td>
                            <td>{item.experience}</td>
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

export default EquipeDirigente