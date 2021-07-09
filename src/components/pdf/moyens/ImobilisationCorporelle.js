import React from "react"

import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";

const ImobilisationCorporelle = ()=>{
  
    const { userId } = useGlobalContext();
    const [immobCorp, setImmobCorp] = React.useState([]);

    const [tqte, setQte] = React.useState(0)
    const [tcout, setCout] = React.useState(0)
    const [tmontant, setMontant] = React.useState(0)
    const [tduree, setDuree] = React.useState(0)
    const [tamort, setAmort] = React.useState(0)

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("corporelle")
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
                batimentqte:doc.data().batimentqte,
                batimentcout:doc.data().batimentcout,
                batimentmontant:doc.data().batimentmontant,
                batimentdate:doc.data().batimentdate,
                batimentduree:doc.data().batimentduree,
                amenagementqte:doc.data().amenagementqte,
                amenagementcout:doc.data().amenagementcout,
                amenagementmontant:doc.data().amenagementmontant,
                amenagementdate:doc.data().amenagementdate,
                amenagementduree:doc.data().amenagementduree,
                splitqte:doc.data().splitqte,
                splitcout:doc.data().splitcout,
                splitmontant:doc.data().splitmontant,
                splitdate:doc.data().splitdate,
                splitduree:doc.data().splitduree,
                ordibureauqte:doc.data().ordibureauqte,
                ordibureaucout:doc.data().ordibureaucout,
                ordibureaumontant:doc.data().ordibureaumontant,
                ordibureaudate:doc.data().ordibureaudate,
                ordibureauduree:doc.data().ordibureauduree,
                ordiportableqte:doc.data().ordiportableqte,
                ordiportablecout:doc.data().ordiportablecout,
                ordiportablemontant:doc.data().ordiportablemontant,
                ordiportabledate:doc.data().ordiportabledate,
                ordiportableduree:doc.data().ordiportableduree,
                ondulaireqte:doc.data().ondulaireqte,
                ondulairecout:doc.data().ondulairecout,
                ondulairemontant:doc.data().ondulairemontant,
                ondulairedate:doc.data().ondulairedate,
                ondulaireduree:doc.data().ondulaireduree,
                ondulaireqte:doc.data().ondulaireqte,
                ondulairecout:doc.data().ondulairecout,
                ondulairemontant:doc.data().ondulairemontant,
                ondulairedate:doc.data().ondulairedate,
                ondulaireduree:doc.data().ondulaireduree,
                imprimanteqte:doc.data().imprimanteqte,
                imprimantecout:doc.data().imprimantecout,
                imprimantemontant:doc.data().imprimantemontant,
                imprimantedate:doc.data().imprimantedate,
                imprimanteduree:doc.data().imprimanteduree,
                photocopieqte:doc.data().photocopieqte,
                photocopiecout:doc.data().photocopiecout,
                photocopiemontant:doc.data().photocopiemontant,
                photocopiedate:doc.data().photocopiedate,
                photocopieduree:doc.data().photocopieduree,
                videoqte:doc.data().videoqte,
                videocout:doc.data().videocout,
                videomontant:doc.data().videomontant,
                videodate:doc.data().videodate,
                videoduree:doc.data().videoduree,
                stabilisateurqte:doc.data().stabilisateurqte,
                stabilisateurcout:doc.data().stabilisateurcout,
                stabilisateurmontant:doc.data().stabilisateurmontant,
                stabilisateurdate:doc.data().stabilisateurdate,
                stabilisateurduree:doc.data().stabilisateurduree,
                voitureqte:doc.data().voitureqte,
                voiturecout:doc.data().voiturecout,
                voituremontant:doc.data().voituremontant,
                voituredate:doc.data().voituredate,
                voitureduree:doc.data().voitureduree,
                tricycleqte:doc.data().tricycleqte,
                tricyclecout:doc.data().tricyclecout,
                tricyclemontant:doc.data().tricyclemontant,
                tricycledate:doc.data().tricycledate,
                tricycleduree:doc.data().tricycleduree,
                motoqte:doc.data().motoqte,
                motocout:doc.data().motocout,
                motomontant:doc.data().motomontant,
                motodate:doc.data().motodate,
                motoduree:doc.data().motoduree,
                bureauqte:doc.data().bureauqte,
                bureaucout:doc.data().bureaucout,
                bureaumontant:doc.data().bureaumontant,
                bureaudate:doc.data().bureaudate,
                bureauduree:doc.data().bureauduree,
                placardqte:doc.data().placardqte,
                placardcout:doc.data().placardcout,
                placardmontant:doc.data().placardmontant,
                placarddate:doc.data().placarddate,
                placardduree:doc.data().placardduree,
                tableqte:doc.data().tableqte,
                tablecout:doc.data().tablecout,
                tablemontant:doc.data().tablemontant,
                tabledate:doc.data().tabledate,
                tableduree:doc.data().tableduree,
                fauteuilqte:doc.data().fauteuilqte,
                fauteuilcout:doc.data().fauteuilcout,
                fauteuilmontant:doc.data().fauteuilmontant,
                fauteuildate:doc.data().fauteuildate,
                fauteuilduree:doc.data().fauteuilduree,
                chaiseqte:doc.data().chaiseqte,
                chaisecout:doc.data().chaisecout,
                chaisemontant:doc.data().chaisemontant,
                chaisedate:doc.data().chaisedate,
                chaiseduree:doc.data().chaiseduree,
                autreqte:doc.data().autreqte,
                autrecout:doc.data().autrecout,
                autremontant:doc.data().autremontant,
                autredate:doc.data().autredate,
                autreduree:doc.data().autreduree,
                materieletmobilierqte:doc.data().materieletmobilierqte,
                materieletmobiliercout:doc.data().materieletmobiliercout,
                materieletmobiliermontant:doc.data().materieletmobiliermontant,
                materieletmobilierdate:doc.data().materieletmobilierdate,
                materieletmobilierduree:doc.data().materieletmobilierduree,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              totalqte =(Number(doc.data().batimentqte)+Number(doc.data().amenagementqte)+Number(doc.data().splitqte)+Number(doc.data().ordibureauqte)+Number(doc.data().ordiportableqte)+Number(doc.data().ondulaireqte)+Number(doc.data().imprimanteqte)+Number(doc.data().photocopieqte)+Number(doc.data().videoqte)+Number(doc.data().stabilisateurqte)+Number(doc.data().voitureqte)+Number(doc.data().tricycleqte)+Number(doc.data().motoqte)+Number(doc.data().bureauqte)+Number(doc.data().placardqte)+Number(doc.data().tableqte)+Number(doc.data().fauteuilqte)+Number(doc.data().chaiseqte)+Number(doc.data().autreqte)+Number(doc.data().materieletmobilierqte)) 
              totalcout =Number(doc.data().batimentcout)+Number(doc.data().amenagementcout)+Number(doc.data().splitcout)+Number(doc.data().ordibureaucout)+Number(doc.data().ordiportablecout)+Number(doc.data().ondulairecout)+Number(doc.data().imprimantecout)+Number(doc.data().photocopiecout)+Number(doc.data().videocout)+Number(doc.data().stabilisateurcout)+Number(doc.data().voiturecout)+Number(doc.data().tricyclecout)+Number(doc.data().motocout)+Number(doc.data().bureaucout)+Number(doc.data().placardcout)+Number(doc.data().tablecout)+Number(doc.data().fauteuilcout)+Number(doc.data().chaisecout)+Number(doc.data().autrecout)+Number(doc.data().materieletmobiliercout) 
              totalmontant =Number(doc.data().batimentmontant)+Number(doc.data().amenagementmontant)+Number(doc.data().splitmontant)+Number(doc.data().ordibureaumontant)+Number(doc.data().ordiportablemontant)+Number(doc.data().ondulairemontant)+Number(doc.data().imprimantemontant)+Number(doc.data().photocopiemontant)+Number(doc.data().videomontant)+Number(doc.data().stabilisateurmontant)+Number(doc.data().voituremontant)+Number(doc.data().tricyclemontant)+Number(doc.data().motomontant)+Number(doc.data().bureaumontant)+Number(doc.data().placardmontant)+Number(doc.data().tablemontant)+Number(doc.data().fauteuilmontant)+Number(doc.data().chaisemontant)+Number(doc.data().autremontant)+Number(doc.data().materieletmobiliermontant) 
              totalduree =Number(doc.data().batimentduree)+Number(doc.data().amenagementduree)+Number(doc.data().splitduree)+Number(doc.data().ordibureauduree)+Number(doc.data().ordiportableduree)+Number(doc.data().ondulaireduree)+Number(doc.data().imprimanteduree)+Number(doc.data().photocopieduree)+Number(doc.data().videoduree)+Number(doc.data().stabilisateurduree)+Number(doc.data().voitureduree)+Number(doc.data().tricycleduree)+Number(doc.data().motoduree)+Number(doc.data().bureauduree)+Number(doc.data().placardduree)+Number(doc.data().tableduree)+Number(doc.data().fauteuilduree)+Number(doc.data().chaiseduree)+Number(doc.data().autreduree)+Number(doc.data().materieletmobilierduree) 
              totalamort =Math.round(Number(doc.data().batimentmontant)/Number(doc.data().batimentduree)+Number(doc.data().amenagementmontant)/Number(doc.data().amenagementduree)+Number(doc.data().splitmontant)/Number(doc.data().splitduree)+Number(doc.data().ordibureaumontant)/Number(doc.data().ordibureauduree)+Number(doc.data().ordiportablemontant)/Number(doc.data().ordiportableduree)+Number(doc.data().ondulairemontant)/Number(doc.data().ondulaireduree)+Number(doc.data().imprimantemontant)/Number(doc.data().imprimanteduree)+Number(doc.data().photocopiemontant)/Number(doc.data().photocopieduree)+Number(doc.data().videomontant)/Number(doc.data().videoduree)+Number(doc.data().stabilisateurmontant)/Number(doc.data().stabilisateurduree)+Number(doc.data().voituremontant)/Number(doc.data().voitureduree)+Number(doc.data().tricyclemontant)/Number(doc.data().tricycleduree)+Number(doc.data().motomontant)/Number(doc.data().motoduree)+Number(doc.data().bureaumontant)/Number(doc.data().bureauduree)+Number(doc.data().placardmontant)/Number(doc.data().placardduree)+Number(doc.data().tablemontant)/Number(doc.data().tableduree)+Number(doc.data().fauteuilmontant)/Number(doc.data().fauteuilduree)+Number(doc.data().chaisemontant)/Number(doc.data().chaiseduree)+Number(doc.data().autremontant)/Number(doc.data().autreduree)+Number(doc.data().materieletmobiliermontant)/Number(doc.data().materieletmobilierduree))
            });
            setQte(totalqte)
            setCout(totalcout)
            setMontant(totalmontant)
            setDuree(totalduree)
            setAmort(totalamort)
            setImmobCorp(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {immobCorp.length > 0 ? (
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
                    <tr>
                        <td><b>Terrain</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>N/A</b></td>
                        <td><b>N/A</b></td>
                    </tr>
                    {immobCorp.map((item, index) => {
                    return (
                        <>
                        <tr>
                          
                          <td>Bâtiment</td>
                          <td>{item.batimentqte}</td>
                          <td>{item.batimentcout}</td>
                          <td>{item.batimentmontant}</td>
                          <td>{item.batimentdate}</td>
                          <td>{item.batimentduree}</td>
                          <td>{Number(item.batimentmontant/item.batimentduree)}</td>
                        </tr>
                        <tr>
                            <td>Aménagement</td>
                            <td>{item.amenagementqte}</td>
                            <td>{item.amenagementcout}</td>
                            <td>{item.amenagementmontant}</td>
                            <td>{item.amenagementdate}</td>
                            <td>{item.amenagementduree}</td>
                            <td>{Number(item.amenagementmontant/item.amenagementduree)}</td>
                        </tr>
                        <tr>
                            <td>Split </td>
                            <td>{item.splitqte}</td>
                            <td>{item.splitcout}</td>
                            <td>{item.splitmontant}</td>
                            <td>{item.splitdate}</td>
                            <td>{item.splitduree}</td>
                            <td>{Number(item.splitmontant/item.splitduree)}</td>
                        </tr>
                        <tr>
                            <td><b>Bâtiment, installation et agencement</b> </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Ordinateur bureau </td>
                            <td>{item.ordibureauqte}</td>
                            <td>{item.ordibureaucout}</td>
                            <td>{item.ordibureaumontant}</td>
                            <td>{item.ordibureaudate}</td>
                            <td>{item.ordibureauduree}</td>
                                <td>{Number(item.ordibureaumontant/item.ordibureauduree)}</td>
                        </tr>
                        <tr>
                            <td>Ordinateur portable </td>
                            <td>{item.ordiportableqte}</td>
                            <td>{item.ordiportablecout}</td>
                            <td>{item.ordiportablemontant}</td>
                            <td>{item.ordiportabledate}</td>
                            <td>{item.ordiportableduree}</td>
                                <td>{Number(item.ordiportablemontant/item.ordiportableduree)}</td>
                        </tr>
                        <tr>
                            <td>Ondulaire </td>
                            <td>{item.ondulaireqte}</td>
                            <td>{item.ondulairecout}</td>
                            <td>{item.ondulairemontant}</td>
                            <td>{item.ondulairedate}</td>
                            <td>{item.ondulaireduree}</td>
                                <td>{Number(item.ondulairemontant/item.ondulaireduree)}</td>
                        </tr>
                        <tr>
                            <td>Imprimante </td>
                            <td>{item.imprimanteqte}</td>
                            <td>{item.imprimantecout}</td>
                            <td>{item.imprimantemontant}</td>
                            <td>{item.imprimantedate}</td>
                            <td>{item.imprimanteduree}</td>
                            <td>{Number(item.imprimantemontant/item.imprimanteduree)}</td>
                        </tr>
                        <tr>
                            <td>Photocopieuse </td>
                            <td>{item.photocopieqte}</td>
                            <td>{item.photocopiecout}</td>
                            <td>{item.photocopiemontant}</td>
                            <td>{item.photocopiedate}</td>
                            <td>{item.photocopieduree}</td>
                            <td>{Number(item.photocopiemontant/item.photocopieduree)}</td>
                        </tr>
                        <tr>
                            <td>Vidéo projecteur </td>
                            <td>{item.videoqte}</td>
                            <td>{item.videocout}</td>
                            <td>{item.videomontant}</td>
                            <td>{item.videodate}</td>
                            <td>{item.videoduree}</td>
                            <td>{Number(item.videomontant/item.videoduree)}</td>
                        </tr>

                        <tr>
                            <td>Stabilisateur </td>
                            <td>{item.stabilisateurqte}</td>
                            <td>{item.stabilisateurcout}</td>
                            <td>{item.stabilisateurmontant}</td>
                            <td>{item.stabilisateurdate}</td>
                            <td>{item.stabilisateurduree}</td>
                            <td>{Number(item.stabilisateurmontant/item.stabilisateurduree)}</td>
                        </tr>
                        <tr>
                            <td>Voiture </td>
                            <td>{item.voitureqte}</td>
                            <td>{item.voiturecout}</td>
                            <td>{item.voituremontant}</td>
                            <td>{item.voituredate}</td>
                            <td>{item.voitureduree}</td>
                            <td>{Number(item.voituremontant/item.voitureduree)}</td>
                        </tr>
                        <tr>
                            <td>Stabilisateur </td>
                            <td>{item.stabilisateurqte}</td>
                            <td>{item.stabilisateurcout}</td>
                            <td>{item.stabilisateurmontant}</td>
                            <td>{item.stabilisateurdate}</td>
                            <td>{item.stabilisateurduree}</td>
                            <td>{Number(item.stabilisateurmontant/item.stabilisateurduree)}</td>
                        </tr>
                        <tr>
                            <td>Voiture </td>
                            <td>{item.voitureqte}</td>
                            <td>{item.voiturecout}</td>
                            <td>{item.voituremontant}</td>
                            <td>{item.voituredate}</td>
                            <td>{item.voitureduree}</td>
                            <td>{Number(item.voituremontant/item.voitureduree)}</td>
                        </tr>
                        <tr>
                            <td>Tricycle </td>
                            <td>{item.tricycleqte}</td>
                            <td>{item.tricyclecout}</td>
                            <td>{item.tricyclemontant}</td>
                            <td>{item.tricycledate}</td>
                            <td>{item.tricycleduree}</td>
                            <td>{Number(item.tricyclemontant/item.tricycleduree)}</td>
                        </tr>
                        <tr>
                            <td>Moto </td>
                            <td>{item.motoqte}</td>
                            <td>{item.motocout}</td>
                            <td>{item.motomontant}</td>
                            <td>{item.motodate}</td>
                            <td>{item.motoduree}</td>
                            <td>{Number(item.motomontant/item.motoduree)}</td>
                        </tr>
                        <tr>
                            <td>Bureau </td>
                            <td>{item.bureauqte}</td>
                            <td>{item.bureaucout}</td>
                            <td>{item.bureaumontant}</td>
                            <td>{item.bureaudate}</td>
                            <td>{item.bureauduree}</td>
                            <td>{Number(item.bureaumontant/item.bureauduree)}</td>
                        </tr>
                        <tr>
                            <td>Placard </td>
                            <td>{item.placardqte}</td>
                            <td>{item.placardcout}</td>
                            <td>{item.placardmontant}</td>
                            <td>{item.placarddate}</td>
                            <td>{item.placardduree}</td>
                            <td>{Number(item.placardmontant/item.placardduree)}</td>
                        </tr>
                        <tr>
                            <td>Table </td>
                            <td>{item.tableqte}</td>
                            <td>{item.tablecout}</td>
                            <td>{item.tablemontant}</td>
                            <td>{item.tabledate}</td>
                            <td>{item.tableduree}</td>
                            <td>{Number(item.tablemontant/item.tableduree)}</td>
                        </tr>
                        <tr>
                            <td>Fauteuil </td>
                            <td>{item.fauteuilqte}</td>
                            <td>{item.fauteuilcout}</td>
                            <td>{item.fauteuilmontant}</td>
                            <td>{item.fauteuildate}</td>
                            <td>{item.fauteuilduree}</td>
                            <td>{Number(item.fauteuilmontant/item.fauteuilduree)}</td>
                        </tr>
                        <tr>
                            <td>Chaises </td>
                            <td>{item.chaiseqte}</td>
                            <td>{item.chaisecout}</td>
                            <td>{item.chaisemontant}</td>
                            <td>{item.chaisedate}</td>
                            <td>{item.chaiseduree}</td>
                            <td>{Number(item.chaisemontant/item.chaiseduree)}</td>
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
                        <tr>
                            <td><b>Matériels et mobiliers</b> </td>
                            <td>{item.materieletmobilierqte}</td>
                            <td>{item.materieletmobiliercout}</td>
                            <td>{item.materieletmobiliermontant}</td>
                            <td>{item.materieletmobilierdate}</td>
                            <td>{item.materieletmobilierduree}</td>
                            <td>{Number(item.materieletmobiliermontant/item.materieletmobilierduree)}</td>
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

export default ImobilisationCorporelle