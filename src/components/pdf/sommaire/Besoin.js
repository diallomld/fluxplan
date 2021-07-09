import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Besoin = ()=>{
  
    const { userId } = useGlobalContext();
    const [besoin, setBesoin] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("besoin-solution")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                besoin: doc.data().besoin,
                solution: doc.data().solution,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setBesoin(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
    { besoin.length>0 ? (
            
            besoin.map((item, index) => {
                return (
                    <>
                        <p>-{item.besoin}</p><br/>
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

export default Besoin