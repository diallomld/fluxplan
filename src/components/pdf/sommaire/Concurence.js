import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const ConcurenceSommaire = ()=>{
  
    const { userId } = useGlobalContext();
    const [concurence, setConcurrence] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("concurrence-avantage")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                
                concurrence: doc.data().concurrence,
                avantage: doc.data().avantage,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setConcurrence(dat);
          })
          .catch((err) => console.log(err));
    };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
    { concurence.length>0 ? (
            
            concurence.map((item, index) => {
                return (
                    <>
                        <p>-{item.concurrence}</p>
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

export default ConcurenceSommaire