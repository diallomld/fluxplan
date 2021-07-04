import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const MarcheSommaire = ()=>{
  
    const { userId } = useGlobalContext();
    const [marche, setMarche] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("marche-vise")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                marche: doc.data().marche,
                taille: doc.data().taille,
                tandance: doc.data().tandance,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setMarche(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
    { marche.length>0 ? (
            
            marche.map((item, index) => {
                return (
                    <>
                        <li><b>Marché visé : </b>{item.besoin}</li>
                        <li><b>Taille du marché : </b>{item.taille}</li>
                        <li><b>Tandance : </b>{item.tandance}</li>
                    </>
                )
            })
        ):(
            <p>Cette partie n'a pas encore été remplis</p>
        )
    }
    </>
  )

}

export default MarcheSommaire