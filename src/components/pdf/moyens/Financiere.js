import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const ImmobFinanciere = ()=>{
  
    const { userId } = useGlobalContext();
    const [financiere, setFinanciere] = React.useState([]);

    const [tqte, setQte] = React.useState(0)
    const [tcout, setCout] = React.useState(0)
    const [tmontant, setMontant] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("immobilisation-financiere")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let totalqte = 0
            let totalcout = 0
            let totalmontant = 0
            data.forEach((doc) => {
              dat.push({
                localqte:doc.data().localqte,
                localcout:doc.data().localcout,
                localmontant:doc.data().localmontant,
                localdate:doc.data().localdate,
                localduree:doc.data().localduree,
                electriciteqte:doc.data().electriciteqte,
                electricitecout:doc.data().electricitecout,
                electricitemontant:doc.data().electricitemontant,
                electricitedate:doc.data().electricitedate,
                electriciteduree:doc.data().electriciteduree,
                eauqte:doc.data().eauqte,
                eaucout:doc.data().eaucout,
                eaumontant:doc.data().eaumontant,
                eaudate:doc.data().eaudate,
                eauduree:doc.data().eauduree,
                telephoneqte:doc.data().telephoneqte,
                telephonecout:doc.data().telephonecout,
                telephonemontant:doc.data().telephonemontant,
                telephonedate:doc.data().telephonedate,
                telephoneduree:doc.data().telephoneduree,
                autreqte:doc.data().autreqte,
                autrecout:doc.data().autrecout,
                autremontant:doc.data().autremontant,
                autredate:doc.data().autredate,
                autreduree:doc.data().autreduree,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              
              totalqte =Number(doc.data().localqte)+Number(doc.data().electriciteqte)+Number(doc.data().eauqte)+Number(doc.data().telephoneqte)+Number(doc.data().autreqte)
              totalcout =Number(doc.data().localcout)+Number(doc.data().electricitecout)+Number(doc.data().eaucout)+Number(doc.data().telephonecout)+Number(doc.data().autrecout)
              totalmontant =Number(doc.data().localmontant)+Number(doc.data().electricitemontant)+Number(doc.data().eaumontant)+Number(doc.data().telephonemontant)+Number(doc.data().autremontant)
              
              
              setQte(totalqte)
              setCout(totalcout)
              setMontant(totalmontant)
    
            });
            setFinanciere(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {financiere.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Désignation </th>
                    <th style={{minWidth:100}}>Quantité</th>
                    <th style={{minWidth:100}}>Coût unitaire</th>
                    <th style={{minWidth:100}}>Montant</th>
                    <th style={{minWidth:100}}>Date d’acquisition</th>
                </tr>
                </thead>
                <tbody>
                    {financiere.map((item, index) => {
                    return (
                        <>
                        <tr>
                          
                            <td>Caution local </td>
                            <td>{item.localqte}</td>
                            <td>{item.localcout}</td>
                            <td>{item.localmontant}</td>
                            <td>{item.localdate}</td>
                        </tr>
                        <tr>
                            <td>Caution électricité </td>
                            <td>{item.electriciteqte}</td>
                            <td>{item.electricitecout}</td>
                            <td>{item.electricitemontant}</td>
                            <td>{item.electricitedate}</td>
                        </tr>
                        <tr>
                            <td>Caution eau </td>
                            <td>{item.eauqte}</td>
                            <td>{item.eaucout}</td>
                            <td>{item.eaumontant}</td>
                            <td>{item.eaudate}</td>
                        </tr>
                        <tr>
                            <td>Caution téléphone </td>
                            <td>{item.telephoneqte}</td>
                            <td>{item.telephonecout}</td>
                            <td>{item.telephonemontant}</td>
                            <td>{item.telephonedate}</td>
                        </tr>
                        <tr>
                            <td>Autres caution </td>
                            <td>{item.autreqte}</td>
                            <td>{item.autrecout}</td>
                            <td>{item.autremontant}</td>
                            <td>{item.autredate}</td>
                        </tr>
                        </>
                    );
                    })}
                    <tr>
                        <td><b>Total</b> </td>
                        <td>{tqte}</td>
                        <td>{tcout}</td>
                        <td>{tmontant}</td>
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

export default ImmobFinanciere