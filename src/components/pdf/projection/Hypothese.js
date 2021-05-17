import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Hypothese = ()=>{
  
    const { userId } = useGlobalContext();
    const [hypothese, setHypothese] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("hypothese")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                hypothese: doc.data().hypothese,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setHypothese(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {hypothese.length > 0 ? (
            
            hypothese.map((item, index) => {
                return (
                    <>
                    - {item.hypothese}<br/>
                    </>
                );
            })
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default Hypothese