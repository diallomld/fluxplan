import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Indicateur = ()=>{
  
    const { userId } = useGlobalContext();
    const [indicateur, setIndicateur] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("indicateurs")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                indicateurs: doc.data().indicateurs,
                calcul: doc.data().calcul,
                norme: doc.data().norme,
                appreciation: doc.data().appreciation,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setIndicateur(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {indicateur.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{}}>Indicateur</th>
                    <th style={{}}>Calcul</th>
                    <th style={{}}>Norme</th>
                    <th style={{minWidth:300}}>Appreciation</th>
                </tr>
                </thead>
                <tbody>
                    {indicateur.map((item, index) => {
                    return (
                        <>
                            <tr hover role="checkbox" tabIndex={-1} key={index}>
                          
                                <td>{item.indicateurs}</td>
                                <td>{item.calcul}</td>
                                <td>{item.norme}</td>
                                <td>{item.appreciation}</td>
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

export default Indicateur