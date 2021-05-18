import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const AnalyseRisque = ()=>{
  
    const { userId } = useGlobalContext();
    const [risque, setRisque] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("analyse-risque")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                risques: doc.data().risques,
                solutions: doc.data().solutions,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setRisque(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {cout.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{}}>Risques</th>
                    <th style={{}}>Solutions</th>
                </tr>
                </thead>
                <tbody>
                    {cout.map((item, index) => {
                    return (
                        <>
                        <tr key={index}>
                            <td>{item.risques}</td>
                            <td>{item.solutions}</td>
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

export default AnalyseRisque