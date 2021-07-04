import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const Solution = ()=>{
  
    const { userId } = useGlobalContext();
    const [solution, setSolution] = React.useState([]);

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
            setSolution(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
    { solution.length>0 ? (
            
            solution.map((item, index) => {
                return (
                    <>
                        {item.solution}
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

export default Solution