import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const CoutProjet = ()=>{
  
    const { userId } = useGlobalContext();
    const [cout, setCout] = React.useState([]);

    const [totalIcorp, settotalIcorp] = React.useState(0)
    const [totalIincpor, setotalIincpor] = React.useState(0)
    const [totalIf, setotalIf] = React.useState(0)
    const [totalStock, setotalStock] = React.useState(0)
    const [totalCharge, setotalCharge] = React.useState(0)

    const getIncorp = () => {
        return firebasee
          .firestore()
          .collection("incorporelle")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let totalmontant = 0
            data.forEach((doc) => {
              
                totalmontant =Number(doc.data().fraismontant)+Number(doc.data().brevetmontant)+Number(doc.data().licencemontant)+Number(doc.data().logicielmontant)+Number(doc.data().sitemontant)+Number(doc.data().marquemontant)+Number(doc.data().droitmontant)+Number(doc.data().autremontant) 
              
                setotalIincpor(totalmontant)
    
            });
          })
          .catch((err) => console.log(err));
      };
      const getCorp = () => {
        
        return firebasee
          .firestore()
          .collection("corporelle")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let totalmontant = 0
            data.forEach((doc) => {
              
                totalmontant =Number(doc.data().batimentmontant)+Number(doc.data().amenagementmontant)+Number(doc.data().splitmontant)+Number(doc.data().ordibureaumontant)+Number(doc.data().ordiportablemontant)+Number(doc.data().ondulairemontant)+Number(doc.data().imprimantemontant)+Number(doc.data().photocopiemontant)+Number(doc.data().videomontant)+Number(doc.data().stabilisateurmontant)+Number(doc.data().voituremontant)+Number(doc.data().tricyclemontant)+Number(doc.data().motomontant)+Number(doc.data().bureaumontant)+Number(doc.data().placardmontant)+Number(doc.data().tablemontant)+Number(doc.data().fauteuilmontant)+Number(doc.data().chaisemontant)+Number(doc.data().autremontant)+Number(doc.data().materieletmobiliermontant) 
              
                settotalIcorp(totalmontant)
    
            });
            
          })
          .catch((err) => console.log(err));
      };
      const getFinance = () => {
        
        return firebasee
          .firestore()
          .collection("immobilisation-financiere")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let totalmontant = 0
            data.forEach((doc) => {
              
                totalmontant =Number(doc.data().localmontant)+Number(doc.data().electricitemontant)+Number(doc.data().eaumontant)+Number(doc.data().telephonemontant)+Number(doc.data().autremontant)
              
                setotalIf(totalmontant)
    
            });
            
          })
          .catch((err) => console.log(err));
      };
      const getStock = () => {
        
        return firebasee
          .firestore()
          .collection("stock-marchandise")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let totalmontant = 0
            data.forEach((doc) => {
                totalmontant += Number(doc.data().montant)
            });
            setotalStock(totalmontant)
          })
          .catch((err) => console.log(err));
      };
      const getCharge = () => {
        
        return firebasee
          .firestore()
          .collection("charge-exploitation")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let totalmontant = 0
            data.forEach((doc) => {
                totalmontant = (Number(doc.data().mcmnt))+(Number(doc.data().carburantmnt))+(Number(doc.data().pemnt))+(Number(doc.data().fournituremnt))+(Number(doc.data().eaumnt))+(Number(doc.data().electricitemnt))+(Number(doc.data().pmomnt))+(Number(doc.data().epsmnt))+(Number(doc.data().tmemnt))+(Number(doc.data().emballagemnt))+Number(doc.data().tavmnt)+Number(doc.data().tpmnt)+Number(doc.data().tplismnt)+Number(doc.data().voyagemnt)+Number(doc.data().tamnt)+Number(doc.data().traitancemnt)+Number(doc.data().locationmnt)+Number(doc.data().entretienmnt)+Number(doc.data().maintenancemnt)+Number(doc.data().assurancemnt)+Number(doc.data().etudemnt)+Number(doc.data().docmnt)+Number(doc.data().pubmnt)+Number(doc.data().telmnt)+Number(doc.data().fraismnt)+Number(doc.data().internetmnt)+Number(doc.data().commissionmnt)+Number(doc.data().honorairemnt)+Number(doc.data().formationmnt)+Number(doc.data().redevancemnt)+Number(doc.data().receptionmnt)+Number(doc.data().missionmnt)
            });
            setotalCharge(totalmontant)
            setToggle(true)
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getIncorp()
    getCorp()
    getFinance()
    getStock()
    getCharge()
  }, []);

  return(
    <>
        {(totalIcorp >0 && totalStock>0 && totalCharge>0 && totalIf>0 && totalIincpor>0) ? (
            <table>
                <thead>
                    <tr>
                        <th style={{minWidth:300}}>Désignation </th>
                        <th style={{minWidth:150}}>Montant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr hover role="checkbox" tabIndex={-1}>
                          
                        <td><b>Investissements</b> </td>
                        <td></td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                        <td>Immobilisations incorporelles </td>
                        <td>{totalIincpor}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                        <td>Immobilisations corporelles  </td>
                        <td>{totalIcorp}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                        <td>Immobilisations financières </td>
                        <td>{totalIf}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                      <td><b>Total Investissements</b> </td>
                      <td>{totalIincpor+totalIcorp+totalIf}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                      <td> </td>
                      <td></td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                      <td><b>Besoin en Fonds de Roulement (BFR)</b> </td>
                      <td></td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                      <td>Stock de marchandises/matières première de démarrage ou renforcement </td>
                      <td>{totalStock}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                      <td>Charges d’exploitation de démarrage </td>
                      <td>{totalCharge}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                        <td><b>Total BFR</b> </td>
                        <td>{totalStock+totalCharge}</td>
                    </tr>
                    <tr hover role="checkbox" tabIndex={-1}>
                        <td><b>Coût total du projet</b> </td>
                        <td>{totalIincpor+totalIcorp+totalIf+totalStock+totalCharge}</td>
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default CoutProjet