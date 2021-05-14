import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const BesoinComponent = ()=>{
  
    const { userId } = useGlobalContext();
    const [besoin, setBesoin] = React.useState([]);

  const getBesoin = () => {
    return firebasee
      .firestore()
      .collection("besoins")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          //setIdDoc(doc.id);
          dat.push({
            besoin: doc.data().besoin,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        //console.log("dat " + dat[0].docIdd)
        setBesoin(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getBesoin();
  }, []);

  return(
      <>
    { besoin.length>0 ? (
            
            besoin.map((item, index) => {
                return (
                    <>
                    <p key={index}> - {item.besoin}</p>
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

export default BesoinComponent