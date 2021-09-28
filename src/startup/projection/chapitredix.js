import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useTheme } from '@material-ui/core/styles';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
  root: {
    width: '50%',
  },
  container: {
    maxHeight: 400,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#18A4F6',
    color: theme.palette.common.white,
    
    fontSize: 20,
  },
}))(TableCell);

const Chapitredix = () => {
  const { userId } = useGlobalContext();
  const [toggle, setToggle] = React.useState(false);
  /** debut Encaissement */

  //pour le Ca
  const [CA, setCA] = React.useState(0);
  const [caMensuel, setCaMensuel] = React.useState(0);
  //pour le apport
  const [apport, setApport] = React.useState(0);
  const [apportMensuel, setApportMensuel] = React.useState(0);
  //pour le versement
  const [versement, setVersement] = React.useState(0);
  const [versementMensuel, setVersementMensuel] = React.useState(0);
  //pour le emprunt
  const [emprunt, setEmprunt] = React.useState(0);
  const [empruntMensuel, setEmpruntMensuel] = React.useState(0);
  //pour le Subvention
  const [subvention, setSubvention] = React.useState(0);
  const [subventionMensuel, setSubventionMensuel] = React.useState(0);
  //pour le Autre
  const [autre, setAutre] = React.useState(0);
  const [autreMensuel, setAutreMensuel] = React.useState(0);

  // total Encaissement
  const [totalEnc, setTotalEnc] = useState(0)
  const [AV, setAV] = useState(0)
  const [ESA, setESA] = useState(0)
  const [TCA, setTCA] = useState(0)
    /** FIN Encaissement */

    /**
     * DEBUT DECAISSEMENT
     */

    // investissement
    const [totalIcorp, settotalIcorp] = React.useState(0)
    const [totalIincpor, setotalIincpor] = React.useState(0)
    const [totalIf, setotalIf] = React.useState(0)

      //get all qte
    const [totalQm, setTotalQm] = React.useState([]);
    const [tqt1, setqt1] = React.useState(0);
    const [tqt2, setqt2] = React.useState(0);
    const [tqt3, setqt3] = React.useState(0);
    const [tqt4, setqt4] = React.useState(0);
    const [tqt5, setqt5] = React.useState(0);
    const [tqt6, setqt6] = React.useState(0);
    const [tqt7, setqt7] = React.useState(0);
    const [tqt8, setqt8] = React.useState(0);
    const [tqt9, setqt9] = React.useState(0);
    const [tqt10, setqt10] = React.useState(0);
    const [tqt11, setqt11] = React.useState(0);
    const [tqt12, setqt12] = React.useState(0);
    let tCa = 0;

    const [totalCaAchat,setTotalCaAchat] = useState(0)
    const [totalCaAchatMensuel,setTotalCaAchatMensuel] = useState(0)

    
  const [autreAchat, setAutreAchat] = React.useState(0);
  const [autreAchatM, setAutreAchatM] = React.useState(0);
  
  const [transport, setTransport] = React.useState(0);
  const [transportM, setTransportM] = React.useState(0);
  const [serviceExterieur, setServiceExterieur] = React.useState(0);
  const [serviceExterieurM, setServiceExterieurM] = React.useState(0);
  const [autreCharge, setAutreCharge] = React.useState(0);
  const [autreChargeM, setAutreChargeM] = React.useState(0);
  const [impotTaxe, setImpotTaxe] = React.useState(0);
  const [impotTaxeM, setImpotTaxeM] = React.useState(0);
  const [chargePersonnel, setChargePersonnel] = React.useState(0);
  const [chargePersonnelM, setChargePersonnelM] = React.useState(0);
  const [chargeExplot, setChargeExplot] = React.useState(0);
  const [chargeExploitM, setChargeExploitM] = React.useState(0);
  const [rembourseEmprunt, setRembourseEmprunt] = React.useState(0);
  const [rembourseEmpruntM, setRembourseEmpruntM] = React.useState(0);

  const [totalDecais, setTotalDecais] = React.useState(0);
  const [totalDecaisM, setTotalDecaisM] = React.useState(0);

  


    /**
     * FIN DECAISSEMENT
     */


  const classes = useStyles();


  const getEcheance = () => {
    return firebasee
      .firestore()
      .collection("caracteristique-emprunt")
      .where("userId", "==", userId)
      .get()
      .then((data) => {

        let tamort=0
        let tinteret = 0
        let techeance = 0
        let techeanceM = 0
        let tauxpercent = 0

        data.forEach((doc) => {
          tauxpercent = Number(doc.data().taux)/100
          /**ANNEE 1 */
          tamort = (emprunt/Number(doc.data().duree))*12
          tinteret = emprunt*tauxpercent

          techeance = tamort+tinteret
          techeanceM = Math.round(techeance/12)

          setRembourseEmpruntM(techeanceM)
          
        });
      })
      .catch((err) => console.log(err));

      setToggle(!toggle)
  };
  
  const getChargeExploit = () => {
    return firebasee
      .firestore()
      .collection("charge-exploitation")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalachat = 0
        let totaltransport = 0
        let totalservice = 0
        let tautrecharge = 0
        let timpot = 0
        let tpersonnel = 0
        let tchargeexploit = 0

        data.forEach((doc) => {
          
          //tatal montant mensuel
          totalachat = (Number(doc.data().mcmnt)*Number(doc.data().mcnbre))+(Number(doc.data().carburantmnt)*Number(doc.data().carburantnbre))+(Number(doc.data().pemnt)*Number(doc.data().penbre))+(Number(doc.data().fournituremnt)*Number(doc.data().fourniturenbre))+(Number(doc.data().eaumnt)*Number(doc.data().eaunbre))+(Number(doc.data().electricitemnt)*Number(doc.data().electricitenbre))+(Number(doc.data().pmomnt)*Number(doc.data().pmonbre))+(Number(doc.data().epsmnt)*Number(doc.data().epsnbre))+(Number(doc.data().tmemnt)*Number(doc.data().tmenbre))+(Number(doc.data().emballagemnt)*Number(doc.data().emballagenbre))
          totaltransport = (Number(doc.data().tavmnt)*Number(doc.data().tavnbre))+(Number(doc.data().tpmnt)*Number(doc.data().tpnbre))+(Number(doc.data().tplismnt)*Number(doc.data().tplisnbre))+(Number(doc.data().voyagemnt)*Number(doc.data().voyagenbre))+(Number(doc.data().tamnt)*Number(doc.data().tanbre))
          totalservice = (Number(doc.data().traitancemnt)*Number(doc.data().traitancenbre))+(Number(doc.data().locationmnt)*Number(doc.data().locationnbre))+(Number(doc.data().entretienmnt)*Number(doc.data().entretiennbre))+(Number(doc.data().maintenancemnt)*Number(doc.data().maintenancenbre))+(Number(doc.data().assurancemnt)*Number(doc.data().assurancenbre))+(Number(doc.data().etudemnt)*Number(doc.data().etudenbre))+(Number(doc.data().docmnt)*Number(doc.data().docnbre))+(Number(doc.data().pubmnt)*Number(doc.data().pubnbre))+(Number(doc.data().telmnt)*Number(doc.data().telnbre))+(Number(doc.data().internetmnt)*Number(doc.data().internetnbre))+(Number(doc.data().fraismnt)*Number(doc.data().fraisnbre))+(Number(doc.data().commissionmnt)*Number(doc.data().commissionnbre))+(Number(doc.data().honorairemnt)*Number(doc.data().honorairenbre))+(Number(doc.data().formationmnt)*Number(doc.data().formationnbre))+(Number(doc.data().redevancemnt)*Number(doc.data().redevancenbre))+(Number(doc.data().receptionmnt)*Number(doc.data().receptionnbre))+(Number(doc.data().missionmnt)*Number(doc.data().missionnbre))
          
          tautrecharge = Number(doc.data().diversesnbre)*Number(doc.data().diversesmnt)
          timpot = Number(doc.data().impotsnbre)*Number(doc.data().impotsmnt)
          tpersonnel = Number(doc.data().personnelnbre)*Number(doc.data().personnelmnt)

          tchargeexploit = totalachat+totaltransport+totalservice+tautrecharge+timpot+tpersonnel

          setAutreAchatM(totalachat)
          setTransportM(totaltransport)
          setServiceExterieurM(totalservice)
          setAutreChargeM(tautrecharge)
          setImpotTaxeM(timpot)
          setChargePersonnelM(tpersonnel)

          setChargeExploitM(tchargeexploit)


        });
      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };

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
      setToggle(!toggle)
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
      setToggle(!toggle)
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
      setToggle(!toggle)
  };

  const getBesoinFinancement = () => {
    return firebasee
      .firestore()
      .collection("besoin-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {

        let tapport = 0
        let tapportM = 0
        let tversement = 0
        let tversementM = 0
        let total = 0
        data.forEach((doc) => { 

          tapport = Number(doc.data().apport)
          tversement = Number(doc.data().versement)

        });

        tapportM = Math.round(tapport/12)
        tversementM = Math.round(tversement/12)

        total = tapportM + tversementM

        setAV(total)

        console.error("encaissement 2 "+ total)

        //setTotalEnc(total)

        setApport(tapport)
        setVersement(tversement)
        setApportMensuel(tapportM)
        setVersementMensuel(tversementM)
      })
      .catch((err) => console.log(err));

    setToggle(!toggle)
  };
  const getModeFinancement = () => {
    return firebasee
      .firestore()
      .collection("mode-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        
        let temprunt = 0
        let tempruntM = 0
        let tsubvention = 0
        let tsubventionM = 0
        let tautres = 0
        let tautresM = 0
        let total = 0

        data.forEach((doc) => {

          temprunt= Number(doc.data().emprunt)
          tsubvention = Number(doc.data().subvention)
          tautres = Number(doc.data().autres)

        });

        tempruntM = Math.round(temprunt/12)
        tsubventionM = Math.round(tsubvention/12)
        tautresM = Math.round(tautres/12)

        total = tempruntM + tsubventionM + tautresM
        setESA(total)

        console.error("encaissement 1 "+ total)

        //setTotalEnc(total)

        setEmprunt(temprunt)
        setSubvention(tsubvention)
        setAutre(tautres)
        
        setEmpruntMensuel(tempruntM)
        setSubventionMensuel(tsubventionM)
        setAutreMensuel(tautresM)

      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };

  const getTotalCa = () => {
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let tabCa = [];
        let tCa = 0
        let tCaMensuel = 0
        data.forEach((doc) => {
          let som = 0;

          som = Number(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))*Number(doc.data().prix)
         
          tabCa.push(som)
        });
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        tCaMensuel = Math.round(tCa/12)
        setCA(tCa)
        setCaMensuel(tCaMensuel)

        //setTotalEnc(tCaMensuel)
        setTCA(tCaMensuel)
      })
      .catch((err) => console.log(err));

    setToggle(!toggle)
  };

  const getQte = () => {
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let tabQte = [];
        data.forEach((doc) => {
          
          tabQte.push(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))
          
          setqt1(Number(doc.data().qm1))
          setqt2(Number(doc.data().qm2))
          setqt3(Number(doc.data().qm3))
          setqt4(Number(doc.data().qm4))
          setqt5(Number(doc.data().qm5))
          setqt6(Number(doc.data().qm6))
          setqt7(Number(doc.data().qm7))
          setqt8(Number(doc.data().qm8))
          setqt9(Number(doc.data().qm9))
          setqt10(Number(doc.data().qm10))
          setqt11(Number(doc.data().qm11))
          setqt12(Number(doc.data().qm12))
        });
        // total ca affectation

        setTotalQm(tabQte)
        //console.table(prevision)
      })
      .catch((err) => console.log(err));

    setToggle(!toggle)
  };

  const getTotalAchat = () => {
    getQte()
    return firebasee
      .firestore()
      .collection("achat-prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        //let tabQte = [];
        let tabCa = [];
        let tcaachatM = 0
        data.forEach((doc) => {
          let som = 0;

          som = Number(Number(tqt1)+Number(tqt2)+Number(tqt3)+Number(tqt4)+Number(tqt5)+Number(tqt6)+Number(tqt7)+Number(tqt8)+Number(tqt9)+Number(tqt10)+Number(tqt11)+Number(tqt12))*Number(doc.data().prix)
         
          tabCa.push(som)
        });
        
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setTotalCaAchat(tCa)
        tcaachatM = Math.round(tCa/12)
        setTotalCaAchatMensuel(tcaachatM)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle)
  };
  
  React.useEffect(() => {
    getTotalCa();
    getBesoinFinancement()
    getModeFinancement()
    getFinance()
    getIncorp()
    getCorp()
    getTotalAchat()
    getChargeExploit()
    getEcheance()
    //setTotal(0)
  }, [toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
        <div className="tab">
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <caption style={{color: 'black', fontSize:20}}>Plan de trésorerie de la première année </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: 300}}></TableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 1</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 2</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 3</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 4</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 5</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 6</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 7</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 8</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 9</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 10</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 11</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 12</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow style={{backgroundColor:'#18A4F6'}}>
                                <TableCell><b>Solde de debut de mois</b></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                
                            </TableRow>
                            <TableRow style={{backgroundColor:'#18A4F6'}}>
                                <TableCell><b>Encaissements </b></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><b> Chiffre d’affaires TTC</b></TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                                <TableCell>{caMensuel}</TableCell>
                            </TableRow>
                        
                                <TableRow>
                                    <TableCell> Apport en Capital </TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                    <TableCell>{apportMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Versement en compte courant associé </TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                    <TableCell>{versementMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Emprunts  </TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                    <TableCell>{empruntMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Subventions   </TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                    <TableCell>{subventionMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autre </TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                    <TableCell>{autreMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <b> Total encaissements </b> </TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                    <TableCell>{AV+ESA+TCA}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <b> Décaissements  </b> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Investissements </TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    <TableCell>{Math.round((totalIincpor+totalIcorp+totalIf)/12)}</TableCell>
                                    
                                </TableRow>
                                <TableRow>
                                    <TableCell> Achats marchandises/mat. Premières TTC </TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                    <TableCell>{totalCaAchatMensuel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autres Achats </TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                    <TableCell>{autreAchatM}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Transports </TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                    <TableCell>{transportM}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Services extérieurs </TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                    <TableCell>{serviceExterieurM}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autres charges </TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                    <TableCell>{autreChargeM}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Impôts et taxes </TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                    <TableCell>{impotTaxeM}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Charges du personnel </TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                    <TableCell>{chargePersonnelM}</TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#87bfad"}}>
                                    <TableCell> <b>Charges d’exploitation</b> </TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                    <TableCell><b>{chargeExploitM}</b></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#87bfad"}}>
                                    <TableCell> <b>Remboursement emprunt</b> </TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{rembourseEmpruntM}</b></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b> Total décaissements </b> </TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                    <TableCell><b>{Math.round((totalIincpor+totalIcorp+totalIf)/12)+totalCaAchatMensuel+chargeExploitM+rembourseEmpruntM}</b></TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    </div>
  );
};

export default Chapitredix