import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const EquipeDirigeante = ()=>{
  
    const { userId } = useGlobalContext();
    const [equipe, setEquipe] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("equipe-dirigeante-sommaire")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                nom: doc.data().nom,
                poste: doc.data().poste,
                capital: doc.data().capital,
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
                    <th style={{minWidth:200, maxWidth:300}}>Nom et prénoms</th>
                    <th style={{minWidth:150, maxWidth:300}}>Poste</th>
                    <th style={{minWidth:100, maxWidth:300}}>% Capital</th>
                    <th style={{minWidth:200, maxWidth:300}}>Diplômes</th>
                    <th style={{minWidth:200, maxWidth:300}}>Expériences</th>  
                </tr>
                </thead>
                <tbody>
                    {equipe.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.nom}</td>
                            <td>{item.poste}</td>
                            <td>{item.capital}</td>
                            <td>{item.diplome}</td>
                            <td>{item.experience}</td>
                        </tr>
                        </>
                    );
                    })}
                </tbody>
            </table>
        ) : (
            <><p>Cette partie n'a pas encore été remplis</p><br/></>
        )}
    </>
  )

}

export default EquipeDirigeante