import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Avantage = ()=>{
  
    const { userId } = useGlobalContext();
    const [avantage, setAvantage] = React.useState([]);

    const getDate = () => {
        //setLoad(true)
        return firebasee
          .firestore()
          .collection("avantage")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                avantage: doc.data().avantage,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
    
            setAvantage(dat);
            //setLoad(false)
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        { avantage.length>0 ? (
            
            avantage.map((item, index) => {
                return (
                    <>
                    <p key={index}> - {item.avantage}</p>
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

export default Avantage