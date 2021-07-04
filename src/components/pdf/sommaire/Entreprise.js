import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const Entreprise = ()=>{
  
    const { userId } = useGlobalContext();
    const [entreprise, setEntreprise] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("entreprise")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                
                nom: doc.data().nom,
                adresse: doc.data().adresse,
                tel: doc.data().tel,
                email: doc.data().email,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setEntreprise(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
    { entreprise.length>0 ? (
            
            entreprise.map((item, index) => {
                return (
                    <>
                    <div>
                        Nom: .....{item.nom}...../ Adresse: .....{item.adresse}...../ Tél: .....{item.tel}...../ E-mail: .....{item.email}.
                    </div>
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

export default Entreprise