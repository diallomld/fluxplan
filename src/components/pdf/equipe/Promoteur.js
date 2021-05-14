import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Promoteur = ()=>{
  
    const { userId } = useGlobalContext();
    const [promoteur, setPromoteur] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("promoteur")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
    
                accosie: doc.data().accosie,
                telephone: doc.data().telephone,
                nationalite: doc.data().nationalite,
                diplome: doc.data().diplome,
                experience: doc.data().experience,
                capital: doc.data().capital,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setPromoteur(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {promoteur.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Nom associé</th>
                    <th>Téléphone</th>
                    <th>Nationalité</th>
                    <th>Diplômes</th>
                    <th>Expériences</th>
                    <th>Capital détenu</th>
                </tr>
                </thead>
                <tbody>
                    {promoteur.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.accosie}</td>
                            <td>{item.telephone}</td>
                            <td>{item.nationalite}</td>
                            <td>{item.diplome}</td>
                            <td>{item.experience}</td>
                            <td>{item.capital}</td>
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

export default Promoteur