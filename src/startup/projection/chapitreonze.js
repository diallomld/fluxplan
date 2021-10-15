import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
import Add from '@material-ui/icons/Add';
import CheckCircle from "@material-ui/icons/CheckCircle";
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

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

const Chapitreonze = () => {
  
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  const [immobilisation, setImmobilisation] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [resultat, setResultat] = React.useState(0);
  const [emprunt, setEmprunt] = React.useState(0);
  const [brut, setBrut] = React.useState(0);
  const [capital, setCapital] = React.useState(0);
  const [amort, setAmort] = React.useState(0);
  const [fournisseur, setFournisseur] = React.useState(0);
  const [creance, setCreance] = React.useState(0);
  const [tresorerie, setTresorerie] = React.useState(0);
  const [autre, setAutre] = React.useState(0);

  const [totalPassif, setTotalPassif] = React.useState(0)

  const [totalActif, setTotalActif] = React.useState(0)

  // investissement
  const [totalIcorp, settotalIcorp] = React.useState(0)
  const [totalIincpor, setotalIincpor] = React.useState(0)
  const [totalIf, setotalIf] = React.useState(0)

  // amortissement
  
  const [tamort, setTAmort] = React.useState(0)
  const [tamortCorp, setAmortCorp] = React.useState(0)

  //Resultat Net (RN)

  //pour le Ca
  const [CA, setCA] = React.useState(0);
  const [mnta2, setmntA2] = React.useState(0);
  const [mnta3, setmntA3] = React.useState(0);

  // Achat marchandise
  const [A, setA] = React.useState(0)
  const [A2, setA2] = React.useState(0)
  const [A3, setA3] = React.useState(0)

  // Marge brute
  const [MB, setMB] = React.useState(0)
  const [MB2, setMB2] = React.useState(0)
  const [MB3, setMB3] = React.useState(0)

  // pour charges exploitation
  const [B, setB] = React.useState(0)
  const [B2, setB2] = React.useState(0)
  const [B3, setB3] = React.useState(0)
  const [C, setC] = React.useState(0)
  const [C2, setC2] = React.useState(0)
  const [C3, setC3] = React.useState(0)
  const [D, setD] = React.useState(0)
  const [D2, setD2] = React.useState(0)
  const [D3, setD3] = React.useState(0)
  const [E, setE] = React.useState(0)
  const [E2, setE2] = React.useState(0)
  const [E3, setE3] = React.useState(0)
  const [F, setF] = React.useState(0)
  const [F2, setF2] = React.useState(0)
  const [F3, setF3] = React.useState(0)
  const [H, setH] = React.useState(0)
  const [H2, setH2] = React.useState(0)
  const [H3, setH3] = React.useState(0)
  const [I, setI] = React.useState(0)
  const [I2, setI2] = React.useState(0)
  const [I3, setI3] = React.useState(0)

  // amortissement
  const [G, setG] = React.useState(0)
  const [G2, setG2] = React.useState(0)
  const [G3, setG3] = React.useState(0)

  // Valeur ajoutee
  const [VA, setVA] = React.useState(0)
  const [VA2, setVA2] = React.useState(0)
  const [VA3, setVA3] = React.useState(0)
  // exedent brut exploitation
  const [EBE, setEBE] = React.useState(0)
  const [EBE2, setEBE2] = React.useState(0)
  const [EBE3, setEBE3] = React.useState(0)
  // resultat d'exploitation
  const [REX, setREX] = React.useState(0)
  const [REX2, setREX2] = React.useState(0)
  const [REX3, setREX3] = React.useState(0)
  
  // frais financier
  const [capital1, setCapital1] = React.useState(0)
  const [capital2, setCapital2] = React.useState(0)
  const [capital3, setCapital3] = React.useState(0)
  const [amort1, setAmort1] = React.useState(0)
  const [amort2, setAmort2] = React.useState(0)
  const [amort3, setAmort3] = React.useState(0)
  const [interet1, setinteret1] = React.useState(0)
  const [interet2, setinteret2] = React.useState(0)
  const [interet3, setinteret3] = React.useState(0)
  
  // resultat financier
  const [RF, setRF] = React.useState(0)
  const [RF2, setRF2] = React.useState(0)
  const [RF3, setRF3] = React.useState(0)

  // resultat avant impot
  const [RAI, setRAI] = React.useState(0)
  const [RAI2, setRAI2] = React.useState(0)
  const [RAI3, setRAI3] = React.useState(0)
  // impot sur le benefice
  const [IB, setIB] = React.useState(0)
  const [IB2, setIB2] = React.useState(0)
  const [IB3, setIB3] = React.useState(0)
  //Resultat Net (RN)
  const [RN, setRN] = React.useState(0)
  const [RN2, setRN2] = React.useState(0)
  const [RN3, setRN3] = React.useState(0)


  /** fin*/


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  const getIncorp = () => {
    setLoad(false)
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
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };
  const getCorp = () => {
    setLoad(true)
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
        setToggle(!toggle)
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };
  const getFinance = () => {
    getCorp()
    getIncorp()
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
        setLoad(false)
        setToggle(!toggle)
        
      })
      .catch((err) => console.log(err));
  };
  const getStock = () => {
    setLoad(true)
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
        setStock(totalmontant)
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };
  const getEmprunt = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("mode-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let temprunt = 0
        data.forEach((doc) => {
          temprunt= Number(doc.data().emprunt)
        });
        setEmprunt(temprunt)
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };
  const getCapital = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("besoin-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let capital = 0
        data.forEach((doc) => {
          capital = Number(doc.data().apport)
        });
        setCapital(capital)
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };

  const getTotalCa = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let tabCa = [];
        let tCa = 0
        data.forEach((doc) => {
          let som = 0;

          som = Number(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))*Number(doc.data().prix)
         
          tabCa.push(som)
        });
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setCA(tCa)
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };
  const getResultat = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = []
        let tmnta2 = 0
        let tmnta3 = 0
        let a2 = 0
        let a3 = 0
        let mb1 = 0
        let mb2 = 0
        let mb3 = 0
        let ebe1 = 0
        let ebe2 = 0
        let ebe3 = 0
        let b2 = 0
        let b3 = 0
        let c2 = 0
        let c3 = 0
        let d2 = 0
        let d3 = 0
        let e2 = 0
        let e3 = 0
        let f2 = 0
        let f3 = 0
        let g2 = 0
        let g3 = 0
        let va = 0
        let va2 = 0
        let va3 = 0
        let rex1 = 0
        let rex2 = 0
        let rex3 = 0
        let h1 = 0
        let h2 = 0
        let h3 = 0
        let rf1 = 0
        let rf2 = 0
        let rf3 = 0
        let rai1 = 0
        let rai2 = 0
        let rai3 = 0
        let i2 = 0
        let i3 = 0
        let a = 0
        let tauximpot = 0
        let ib1 = 0
        let ib2 = 0
        let ib3 = 0
        let rn1 = 0
        let rn2 = 0
        let rn3 = 0

        data.forEach((doc) => {
          dat.push({
            taux: doc.data().taux,
            tauximpot: doc.data().tauximpot,
            marchandise: doc.data().marchandise,
            produitfinancie: doc.data().produitfinancie,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tauximpot = Math.round(Number(doc.data().tauximpot)/100)
          //le chiffre d'affaires
          tmnta2 = CA+ CA*(Number(doc.data().taux)/100)
          setmntA2(tmnta2)
          tmnta3 = tmnta2+ tmnta2*(Number(doc.data().taux)/100)
          setmntA3(tmnta3)
          
          /**
           * POUR ACHAT MARCHANDISE/MATIERE PREMIERE
           */
           a = Number(doc.data().marchandise)
           a2 = a+ a*(Number(doc.data().taux)/100)
           a3 = a2+ a2*(Number(doc.data().taux)/100)
           setA(a)
           setA2(a2)
           setA3(a3)

          /*Marge Brute (MB) */
          mb1 = CA-a
          mb2 = mb1 + mb1*(Number(doc.data().taux)/100)
          mb3 = mb2 + mb2*(Number(doc.data().taux)/100)

          setMB(mb1)
          setMB2(mb2)
          setMB3(mb3)
          

          /*pour charge exploitation */

          b2 = B + B*(Number(doc.data().taux)/100)
          setB2(b2)
          b3 = b2+ b2*(Number(doc.data().taux)/100)
          setB3(b3)
          c2 = C + C*(Number(doc.data().taux)/100)
          setC2(c2)
          c3 = c2+ c2*(Number(doc.data().taux)/100)
          setC3(c3)
          d2 = D + D*(Number(doc.data().taux)/100)
          setD2(d2)
          d3 = d2+ d2*(Number(doc.data().taux)/100)
          setD3(d3)
          e2 = E + E*(Number(doc.data().taux)/100)
          setE2(e2)
          e3 = e2+ e2*(Number(doc.data().taux)/100)
          setE3(e3)
          f2 = F + F*(Number(doc.data().taux)/100)
          setF2(f2)
          f3 = f2 + f2*(Number(doc.data().taux)/100)
          setF3(f3)
          g2 = G + G*(Number(doc.data().taux)/100)
          setG2(g2)
          g3 = g2 + g2*(Number(doc.data().taux)/100)
          setG3(g3)
          
          h1 = Number(doc.data().produitfinancie)
          setH(h1)
          h2 = h1 + h1*(Number(doc.data().taux)/100)
          setH2(h2)
          h3 = h2 + h2*(Number(doc.data().taux)/100)
          setH3(h3)
          
          i2 = I + I*(Number(doc.data().taux)/100)
          setI2(i2)
          i3 = i2 + i2*(Number(doc.data().taux)/100)
          setI3(i3)



          /*Valeur Ajoutee */
          
          va = mb1-(B+C+D+E)
          va2 = va + va*(Number(doc.data().taux)/100)
          va3 = va2 + va2*(Number(doc.data().taux)/100)
          setVA(va)
          setVA2(va2)
          setVA3(va3)
          
          /*exedent brute exploitation (EBE) */
          ebe1 = va-F
          ebe2 = ebe1 + ebe1*(Number(doc.data().taux)/100)
          ebe3 = ebe2 + ebe2*(Number(doc.data().taux)/100)

          setEBE(ebe1)
          setEBE2(ebe2)
          setEBE3(ebe3)

          /*resultat d'exploitation (REX) */
          rex1 = ebe1-G
          rex2 = rex1 + rex1*(Number(doc.data().taux)/100)
          rex3 = rex2 + rex2*(Number(doc.data().taux)/100)

          setREX(rex1)
          setREX2(rex2)
          setREX3(rex3)
          /*resultat financier (RF) */
          rf1 = h1-I
          rf2 = rf1 + rf1*(Number(doc.data().taux)/100)
          rf3 = rf2 + rf2*(Number(doc.data().taux)/100)

          setRF(rf1)
          setRF2(rf2)
          setRF3(rf3)
          /*resultat avant impot (RAI) */
          rai1 = rex1-rf1
          rai2 = rai1 + rai1*(Number(doc.data().taux)/100)
          rai3 = rai2 + rai2*(Number(doc.data().taux)/100)

          setRAI(rai1)
          setRAI2(rai2)
          setRAI3(rai3)
          /*impot sur le benefice (IB) */
          ib1 = rai1*tauximpot
          ib2 = ib1 + ib1*(Number(doc.data().taux)/100)
          ib3 = ib2 + ib2*(Number(doc.data().taux)/100)

          setIB(ib1)
          setIB2(ib2)
          setIB3(ib3)
          /*resultat net (RN) */
          rn1 = rai1-ib1
          rn2 = rn1 + rn1*(Number(doc.data().taux)/100)
          rn3 = rn2 + rn2*(Number(doc.data().taux)/100)
          /*
          if (rn1<0) {
            rn1 = -rn1
          }
          if (rn2<0) {
            rn2 = -rn2
          }
          if (rn3<0) {
            rn3 = -rn3
          }*/
          setRN(rn1)
          setRN2(rn2)
          setRN3(rn3)

        })
        setLoad(false)
        setToggle(!toggle);
        console.log("toogle toggle")
        })
        .catch((err) => console.log(err));
  };

  const getIncorpAmort = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("incorporelle")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalamort = 0
        data.forEach((doc) => {
          totalamort = Math.round(Number(doc.data().fraismontant)/Number(doc.data().fraisduree)+Number(doc.data().brevetmontant)/Number(doc.data().brevetduree)+Number(doc.data().licencemontant)/Number(doc.data().licenceduree)+Number(doc.data().logicielmontant)/Number(doc.data().logicielduree)+Number(doc.data().sitemontant)/Number(doc.data().siteduree)+Number(doc.data().marquemontant)/Number(doc.data().marqueduree)+Number(doc.data().droitmontant)/Number(doc.data().droitduree)+Number(doc.data().autremontant)/Number(doc.data().autreduree))
          //setG(totalamort)
          setTAmort(totalamort)
        });
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };
  const getCorpAmort = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("corporelle")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalamort = 0
        data.forEach((doc) => {
          totalamort =Math.round(Number(doc.data().batimentmontant)/Number(doc.data().batimentduree)+Number(doc.data().amenagementmontant)/Number(doc.data().amenagementduree)+Number(doc.data().splitmontant)/Number(doc.data().splitduree)+Number(doc.data().ordibureaumontant)/Number(doc.data().ordibureauduree)+Number(doc.data().ordiportablemontant)/Number(doc.data().ordiportableduree)+Number(doc.data().ondulairemontant)/Number(doc.data().ondulaireduree)+Number(doc.data().imprimantemontant)/Number(doc.data().imprimanteduree)+Number(doc.data().photocopiemontant)/Number(doc.data().photocopieduree)+Number(doc.data().videomontant)/Number(doc.data().videoduree)+Number(doc.data().stabilisateurmontant)/Number(doc.data().stabilisateurduree)+Number(doc.data().voituremontant)/Number(doc.data().voitureduree)+Number(doc.data().tricyclemontant)/Number(doc.data().tricycleduree)+Number(doc.data().motomontant)/Number(doc.data().motoduree)+Number(doc.data().bureaumontant)/Number(doc.data().bureauduree)+Number(doc.data().placardmontant)/Number(doc.data().placardduree)+Number(doc.data().tablemontant)/Number(doc.data().tableduree)+Number(doc.data().fauteuilmontant)/Number(doc.data().fauteuilduree)+Number(doc.data().chaisemontant)/Number(doc.data().chaiseduree)+Number(doc.data().autremontant)/Number(doc.data().autreduree)+Number(doc.data().materieletmobiliermontant)/Number(doc.data().materieletmobilierduree))
        });
        
        setAmortCorp(totalamort)
        setLoad(false)
        setToggle(!toggle)
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getCapital()
    getIncorp();
    getCorp()
    getFinance()
    getTotalCa()
    setBrut(totalIf+totalIincpor+totalIcorp)
    getResultat()
    getIncorpAmort()
    getCorpAmort()
    setAmort(tamort+ tamortCorp)
    setImmobilisation(brut-RN)
    getStock()
    getEmprunt()
    setTotalPassif(capital+RN+emprunt+fournisseur+autre)
  },[toggle]);
  return (
    <>
      <div className="chapitretwo">
          <div className="tab">
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <caption style={{ color: 'black', fontSize: 30 }}> Bilans prévisionnels Actif</caption>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ minWidth: 200 }}>Actif</StyledTableCell>
                      <StyledTableCell>Annee 0</StyledTableCell>
                      <StyledTableCell>Annee 1</StyledTableCell>
                      <StyledTableCell>Annee 2</StyledTableCell>
                      <StyledTableCell>Annee 3</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Passif</StyledTableCell>
                      <StyledTableCell>Annee 0</StyledTableCell>
                      <StyledTableCell>Annee 1</StyledTableCell>
                      <StyledTableCell>Annee 2</StyledTableCell>
                      <StyledTableCell>Annee 3</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover role="checkbox">
                      <TableCell>Immobilisations</TableCell>
                      <TableCell>{immobilisation}</TableCell>
                      <TableCell>{immobilisation}</TableCell>
                      <TableCell>{immobilisation}</TableCell>
                      <TableCell>{immobilisation}</TableCell>
                      <TableCell>Capital</TableCell>
                      <TableCell>{capital}</TableCell>
                      <TableCell>{capital}</TableCell>
                      <TableCell>{capital}</TableCell>
                      <TableCell>{capital}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox">
                      <TableCell>Brut</TableCell>
                      <TableCell>{brut}</TableCell>
                      <TableCell>{brut}</TableCell>
                      <TableCell>{brut}</TableCell>
                      <TableCell>{brut}</TableCell>
                      <TableCell>Résultat</TableCell>
                      <TableCell>{RN}</TableCell>
                      <TableCell>{RN}</TableCell>
                      <TableCell>{RN2}</TableCell>
                      <TableCell>{RN3}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox">
                      <TableCell>Amortissements</TableCell>
                      <TableCell>{amort}</TableCell>
                      <TableCell>{amort}</TableCell>
                      <TableCell>{amort}</TableCell>
                      <TableCell>{amort}</TableCell>
                      <TableCell>Emprunts</TableCell>
                      <TableCell>{emprunt}</TableCell>
                      <TableCell>{emprunt}</TableCell>
                      <TableCell>{emprunt}</TableCell>
                      <TableCell>{emprunt}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox">
                      <TableCell>Stocks</TableCell>
                      <TableCell>{stock}</TableCell>
                      <TableCell>{stock}</TableCell>
                      <TableCell>{stock}</TableCell>
                      <TableCell>{stock}</TableCell>
                      <TableCell rowSpan="1">Fournisseurs</TableCell>
                      <TableCell>{fournisseur}</TableCell>
                      <TableCell>{fournisseur}</TableCell>
                      <TableCell>{fournisseur}</TableCell>
                      <TableCell>{fournisseur}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox">
                      <TableCell>Créances</TableCell>
                      <TableCell>{creance}</TableCell>
                      <TableCell>{creance}</TableCell>
                      <TableCell>{creance}</TableCell>
                      <TableCell>{creance}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox">
                      <TableCell>Trésorerie actif</TableCell>
                      <TableCell>{(immobilisation+stock+creance)-(capital+RN+emprunt+fournisseur+autre)}</TableCell>
                      <TableCell>{}</TableCell>
                      <TableCell>{}</TableCell>
                      <TableCell>{}</TableCell>
                      <TableCell>Autres dettes à CT</TableCell>
                      <TableCell>{autre}</TableCell>
                      <TableCell>{autre}</TableCell>
                      <TableCell>{autre}</TableCell>
                      <TableCell>{autre}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" style={{ backgroundColor: "#18A4F6" }}>
                      <TableCell><b>TOTAL</b></TableCell>
                      <TableCell><b>{immobilisation+stock+amort+creance}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                      <TableCell><b>TOTAL</b></TableCell>
                      <TableCell><b>{(capital+RN+emprunt+fournisseur+autre)}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                      <TableCell><b>{}</b></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
            </TableContainer>
            </Paper>
          </div>
      </div>
    </>
  );
};

export default Chapitreonze
