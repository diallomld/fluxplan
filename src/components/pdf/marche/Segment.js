import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Segment = ()=>{
  
    const { userId } = useGlobalContext();
    const [segment, setSegment] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("segment-client")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                cible: doc.data().cible,
                description: doc.data().description,
                localisation: doc.data().localisation,
                produit: doc.data().produit,
                delai: doc.data().delai,
                mode: doc.data().mode,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setSegment(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {segment.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th>Client cible</th>
                    <th style={{minWidth:200}}>Description</th>
                    <th>Localisation</th>
                    <th>Produits / Services</th>
                    <th>Mode de règlement</th>
                    <th>Délais de règlement</th> 
                </tr>
                </thead>
                <tbody>
                    {segment.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.cible}</td>
                            <td>{item.description}</td>
                            <td>{item.localisation}</td>
                            <td>{item.produit}</td>
                            <td>{item.mode}</td>
                            <td>{item.delai}</td>
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

export default Segment