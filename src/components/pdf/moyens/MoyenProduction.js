import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const MoyenProduction = ()=>{
  
    const { userId } = useGlobalContext();
    const [moyenIncorp, setMoyenIncorp] = React.useState([]);

    const [tqte, setQte] = React.useState(0)
    const [tcout, setCout] = React.useState(0)
    const [tmontant, setMontant] = React.useState(0)
    const [tduree, setDuree] = React.useState(0)
    const [tamort, setAmort] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("incorporelle")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let totalqte = 0
            let totalcout = 0
            let totalmontant = 0
            let totalduree = 0
            let totalamort = 0
            data.forEach((doc) => {
              dat.push({
                fraisqte:doc.data().fraisqte,
                fraiscout:doc.data().fraiscout,
                fraismontant:doc.data().fraismontant,
                fraisdate:doc.data().fraisdate,
                fraisduree:doc.data().fraisduree,
                brevetqte:doc.data().brevetqte,
                brevetcout:doc.data().brevetcout,
                brevetmontant:doc.data().brevetmontant,
                brevetdate:doc.data().brevetdate,
                brevetduree:doc.data().brevetduree,
                licenceqte:doc.data().licenceqte,
                licencecout:doc.data().licencecout,
                licencemontant:doc.data().licencemontant,
                licencedate:doc.data().licencedate,
                licenceduree:doc.data().licenceduree,
                logicielqte:doc.data().logicielqte,
                logicielcout:doc.data().logicielcout,
                logicielmontant:doc.data().logicielmontant,
                logicieldate:doc.data().logicieldate,
                logicielduree:doc.data().logicielduree,
                siteqte:doc.data().siteqte,
                sitecout:doc.data().sitecout,
                sitemontant:doc.data().sitemontant,
                sitedate:doc.data().sitedate,
                siteduree:doc.data().siteduree,
                marqueqte:doc.data().marqueqte,
                marquecout:doc.data().marquecout,
                marquemontant:doc.data().marquemontant,
                marquedate:doc.data().marquedate,
                marqueduree:doc.data().marqueduree,
                droitqte:doc.data().droitqte,
                droitcout:doc.data().droitcout,
                droitmontant:doc.data().droitmontant,
                droitdate:doc.data().droitdate,
                droitduree:doc.data().droitduree,
                autreqte:doc.data().autreqte,
                autrecout:doc.data().autrecout,
                autremontant:doc.data().autremontant,
                autredate:doc.data().autredate,
                autreduree:doc.data().autreduree,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              
              totalqte =Number(doc.data().fraisqte)+Number(doc.data().brevetqte)+Number(doc.data().licenceqte)+Number(doc.data().logicielqte)+Number(doc.data().siteqte)+Number(doc.data().marqueqte)+Number(doc.data().droitqte)+Number(doc.data().autreqte)
              totalcout =Number(doc.data().fraiscout)+Number(doc.data().brevetcout)+Number(doc.data().licencecout)+Number(doc.data().logicielcout)+Number(doc.data().sitecout)+Number(doc.data().marquecout)+Number(doc.data().droitcout)+Number(doc.data().autrecout)
              totalmontant =Number(doc.data().fraismontant)+Number(doc.data().brevetmontant)+Number(doc.data().licencemontant)+Number(doc.data().logicielmontant)+Number(doc.data().sitemontant)+Number(doc.data().marquemontant)+Number(doc.data().droitmontant)+Number(doc.data().autremontant) 
              totalduree =Number(doc.data().fraisduree)+Number(doc.data().brevetduree)+Number(doc.data().licenceduree)+Number(doc.data().logicielduree)+Number(doc.data().siteduree)+Number(doc.data().marqueduree)+Number(doc.data().droitduree)+Number(doc.data().autreduree)
              totalamort = Math.round(Number(doc.data().fraismontant)/Number(doc.data().fraisduree)+Number(doc.data().brevetmontant)/Number(doc.data().brevetduree)+Number(doc.data().licencemontant)/Number(doc.data().licenceduree)+Number(doc.data().logicielmontant)/Number(doc.data().logicielduree)+Number(doc.data().sitemontant)/Number(doc.data().siteduree)+Number(doc.data().marquemontant)/Number(doc.data().marqueduree)+Number(doc.data().droitmontant)/Number(doc.data().droitduree)+Number(doc.data().autremontant)/Number(doc.data().autreduree))
             
              setQte(totalqte)
              setCout(totalcout)
              setMontant(totalmontant)
              setDuree(totalduree)
              setAmort(totalamort)
    
            });
            setMoyenIncorp(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {moyenIncorp.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Désignation </th>
                    <th style={{minWidth:100}}>Quantité</th>
                    <th style={{minWidth:100}}>Coût unitaire</th>
                    <th style={{minWidth:100}}>Montant</th>
                    <th style={{minWidth:100}}>Date d’acquisition</th>
                    <th style={{minWidth:100}}>Durée amortissement (en an)</th>
                    <th style={{minWidth:100}}>Amortissement annuel</th>
                </tr>
                </thead>
                <tbody>
                    {moyenIncorp.map((item, index) => {
                        return (
                            <>
                                <tr>
                                
                                    <td>Frais d'établissement </td>
                                    <td>{item.fraisqte}</td>
                                    <td>{item.fraiscout}</td>
                                    <td>{item.fraismontant}</td>
                                    <td>{item.fraisdate}</td>
                                    <td>{item.fraisduree}</td>
                                    <td>{Number(item.fraismontant/item.fraisduree)}</td>
                                    
                                </tr>
                                <tr>
                                    <td>Brevets </td>
                                    <td>{item.brevetqte}</td>
                                    <td>{item.brevetcout}</td>
                                    <td>{item.brevetmontant}</td>
                                    <td>{item.brevetdate}</td>
                                    <td>{item.brevetduree}</td>
                                    <td>{Number(item.brevetmontant/item.brevetduree)}</td>
                                </tr>
                                <tr>
                                    <td>Licences </td>
                                    <td>{item.licenceqte}</td>
                                    <td>{item.licencecout}</td>
                                    <td>{item.licencemontant}</td>
                                    <td>{item.licencedate}</td>
                                    <td>{item.licenceduree}</td>
                                    <td>{Number(item.licencemontant/item.licenceduree)}</td>
                                </tr>
                                <tr>
                                    <td>Logiciels </td>
                                    <td>{item.logicielqte}</td>
                                    <td>{item.logicielcout}</td>
                                    <td>{item.logicielmontant}</td>
                                    <td>{item.logicieldate}</td>
                                    <td>{item.logicielduree}</td>
                                    <td>{Number(item.logicielmontant/item.logicielduree)}</td>
                                </tr>
                                <tr>
                                    <td>Sites internet </td>
                                    <td>{item.siteqte}</td>
                                    <td>{item.sitecout}</td>
                                    <td>{item.sitemontant}</td>
                                    <td>{item.sitedate}</td>
                                    <td>{item.siteduree}</td>
                                    <td>{Number(item.sitemontant/item.siteduree)}</td>
                                </tr>
                                <tr>
                                    <td>Marques </td>
                                    <td>{item.marqueqte}</td>
                                    <td>{item.marquecout}</td>
                                    <td>{item.marquemontant}</td>
                                    <td>{item.marquedate}</td>
                                    <td>{item.marqueduree}</td>
                                    <td>{Number(item.marquemontant/item.marqueduree)}</td>
                                </tr>
                                <tr>
                                    <td>Droit au bail (pas-de-porte) </td>
                                    <td>{item.droitqte}</td>
                                    <td>{item.droitcout}</td>
                                    <td>{item.droitmontant}</td>
                                    <td>{item.droitdate}</td>
                                    <td>{item.droitduree}</td>
                                    <td>{Number(item.droitmontant/item.droitduree)}</td>
                                </tr>
                                <tr>
                                    <td>Autres </td>
                                    <td>{item.autreqte}</td>
                                    <td>{item.autrecout}</td>
                                    <td>{item.autremontant}</td>
                                    <td>{item.autredate}</td>
                                    <td>{item.autreduree}</td>
                                    <td>{Number(item.autremontant/item.autreduree)}</td>
                                </tr>
                            </>
                        );
                    })}
                        <tr hover role="checkbox" tabIndex={-1}>
                            <td><b>Total</b> </td>
                            <td>{tqte}</td>
                            <td>{tcout}</td>
                            <td>{tmontant}</td>
                            <td></td>
                            <td>{tduree}</td>
                            <td>{tamort}</td>
                        </tr>
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default MoyenProduction