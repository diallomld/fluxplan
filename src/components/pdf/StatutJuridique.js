import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const StatutJuridique = ()=>{
  
    const { userId } = useGlobalContext();
    const [statut, setStatut] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("statutjuridique")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                denomination: doc.data().denomination,
                sigle: doc.data().sigle,
                nom: doc.data().nom,
                juridique: doc.data().juridique,
                social: doc.data().social,
                siege: doc.data().siege,
                capital: doc.data().capital,
                telephone: doc.data().telephone,
                courriel: doc.data().courriel,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setStatut(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {statut.length > 0 ? (
            <table>
                <tbody>
                    {statut.map((item, index) => {
                    return (
                        <>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Denomination</td>
                            <td>{item.denomination}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Nom commercial</td>
                            <td>{item.nom}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Sigle</td>
                            <td>{item.sigle}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Forme Juridique</td>
                            <td>{item.juridique}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Objet Social</td>
                            <td>{item.social}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Siége Social</td>
                            <td>{item.siege}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Capital Social</td>
                            <td>{item.capital}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Téléphone</td>
                            <td>{item.telephone}</td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor:"#18A4F6", color:"white", fontSize:20}}>Courriel</td>
                            <td >{item.courriel}</td>
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

export default StatutJuridique