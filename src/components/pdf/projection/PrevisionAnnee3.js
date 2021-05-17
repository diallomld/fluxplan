import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const PrevisionAnnee3 = ()=>{
  
    const { userId } = useGlobalContext();
    const [prevision, setPrevision] = React.useState([]);
    const [Totala1, setTotala1] = React.useState(0);
    const [Totala2, setTotala2] = React.useState(0);
    const [Totala3, setTotala3] = React.useState(0);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("prevision-annne3")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let ta1 = 0
            let ta2 = 0
            let ta3 = 0
            data.forEach((doc) => {
              dat.push({
                elements: doc.data().elements,
                annee1: doc.data().annee1,
                annee2: doc.data().annee2,
                annee3: doc.data().annee3,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              ta1+=Number(doc.data().annee1)
              ta2+=Number(doc.data().annee2)
              ta3+=Number(doc.data().annee3)
            });
            setTotala1(ta1)
            setTotala2(ta2)
            setTotala3(ta3)
            setPrevision(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {prevision.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{ minWidth: 300}}>Elements</th>
                    <th style={{ minWidth: 100 }}>Annee 1</th>
                    <th style={{ minWidth: 100 }}>Annee 2</th>
                    <th style={{ minWidth: 100 }}>Annee 3</th>
                </tr>
                </thead>
                <tbody>
                    {prevision.map((item, index) => {
                        return (
                            <>
                            <tr key={index}>
                                <td>{item.elements}</td>
                                <td>{item.annee1}</td>
                                <td>{item.annee1}</td>
                                <td>{item.annee3}</td>
                            </tr>
                            </>
                        );
                    })}
                    <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                        <td>Total</td>
                        <td>{Totala1}</td>
                        <td>{Totala2}</td>
                        <td>{Totala3}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default PrevisionAnnee3