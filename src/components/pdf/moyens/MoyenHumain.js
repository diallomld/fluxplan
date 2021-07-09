import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const MoyenHumain = ()=>{
  
    const { userId } = useGlobalContext();
    const [moyen, setMoyen] = React.useState([]);

    const [totalMensuel, setTotalMensuel] = React.useState(0)
    const [totalAnuel, setTotalAnuel] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("moyen-humain")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let tanuel = 0
            let tmensuel = 0
            data.forEach((doc) => {
              dat.push({
                poste: doc.data().poste,
                sm: doc.data().sm,
                sa: doc.data().sa,
                date: doc.data().date,
                diplome: doc.data().diplome,
                experience: doc.data().experience,
                mission: doc.data().mission,
                id: doc.data().userId,
                docIdd: doc.id,
              });
    
              tmensuel +=Number(doc.data().sm)
              tanuel +=Number(doc.data().sa)
    
              setTotalAnuel(tanuel)
              setTotalMensuel(tmensuel)
    
            });
            setMoyen(dat);
          })
          .catch((err) => console.log(err));
    };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {moyen.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:100}}>Poste</th>
                    <th style={{minWidth:100}}>Salaire brut mensuel</th>
                    <th style={{minWidth:100}}>Salaire brut annuel</th>
                    <th style={{minWidth:100}}>Date arrivée</th>
                    <th style={{minWidth:100}}>Diplôme</th>
                    <th style={{minWidth:200}}>Expérience</th>
                    <th style={{minWidth:200}}>Principale mission </th>
                </tr>
                </thead>
                <tbody>
                    {moyen.map((item, index) => {
                        return (
                            <>
                            <tr>
                                <td>{item.poste}</td>
                                <td>{item.sm}</td>
                                <td>{item.sa}</td>
                                <td>{item.date}</td>
                                <td>{item.diplome}</td>
                                <td>{item.experience}</td>
                                <td>{item.mission}</td>
                            </tr>
                            </>
                        );
                    })}
                    <tr>
                        <td>Total</td>
                        <td>{totalMensuel}</td>
                        <td>{totalAnuel}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default MoyenHumain