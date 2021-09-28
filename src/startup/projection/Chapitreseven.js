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

import { makeStyles,withStyles } from '@material-ui/core/styles';
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

const Chapitresevenp = () => {
 
  const editObject = {
    taux: 0,
    tauximpot: 0,
    marchandise:0,
    produitfinancie:0
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

 


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
  
  const [tamort, setAmort] = React.useState(0)
  const [tamortCorp, setAmortCorp] = React.useState(0)

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

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setEditTable({
      ...editTable,
      [name]: value,
    });
  };
  const handleModif = (id,index) => {
    setEditTable(prevision[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPrevision = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .doc(idDoc)
      .set(
        {
          taux: editTable.taux,
          tauximpot: editTable.tauximpot,
          marchandise: editTable.marchandise,
          produitfinancie: editTable.produitfinancie,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          taux:0
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePrevision = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted")
        setLoad(false)
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const getDate = () => {
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
          tauximpot = Number(doc.data().tauximpot)/100
          //le chiffre d'affaires
          tmnta2 = CA+ CA*(doc.data().taux/100)
          setmntA2(tmnta2)
          tmnta3 = tmnta2+ tmnta2*(doc.data().taux/100)
          setmntA3(tmnta3)
          
          /**
           * POUR ACHAT MARCHANDISE/MATIERE PREMIERE
           */
           a = Number(doc.data().marchandise)
           a2 = a+ a*(doc.data().taux/100)
           a3 = a2+ a2*(doc.data().taux/100)
           setA(a)
           setA2(a2)
           setA3(a3)

          /*Marge Brute (MB) */
          mb1 = CA-a
          mb2 = mb1 + mb1*(doc.data().taux/100)
          mb3 = mb2 + mb2*(doc.data().taux/100)

          setMB(mb1)
          setMB2(mb2)
          setMB3(mb3)
          

          /*pour charge exploitation */

          b2 = B + B*(doc.data().taux/100)
          setB2(b2)
          b3 = b2+ b2*(doc.data().taux/100)
          setB3(b3)
          c2 = C + C*(doc.data().taux/100)
          setC2(c2)
          c3 = c2+ c2*(doc.data().taux/100)
          setC3(c3)
          d2 = D + D*(doc.data().taux/100)
          setD2(d2)
          d3 = d2+ d2*(doc.data().taux/100)
          setD3(d3)
          e2 = E + E*(doc.data().taux/100)
          setE2(e2)
          e3 = e2+ e2*(doc.data().taux/100)
          setE3(e3)
          f2 = F + F*(doc.data().taux/100)
          setF2(f2)
          f3 = f2 + f2*(doc.data().taux/100)
          setF3(f3)
          g2 = G + G*(doc.data().taux/100)
          setG2(g2)
          g3 = g2 + g2*(doc.data().taux/100)
          setG3(g3)
          
          h1 = Number(doc.data().produitfinancie)
          setH(h1)
          h2 = h1 + h1*(doc.data().taux/100)
          setH2(h2)
          h3 = h2 + h2*(doc.data().taux/100)
          setH3(h3)
          
          i2 = I + I*(doc.data().taux/100)
          setI2(i2)
          i3 = i2 + i2*(doc.data().taux/100)
          setI3(i3)



          /*Valeur Ajoutee */
          
          va = mb1-(B+C+D+E)
          va2 = va + va*(doc.data().taux/100)
          va3 = va2 + va2*(doc.data().taux/100)
          setVA(va)
          setVA2(va2)
          setVA3(va3)
          
          /*exedent brute exploitation (EBE) */
          ebe1 = va-F
          ebe2 = ebe1 + ebe1*(doc.data().taux/100)
          ebe3 = ebe2 + ebe2*(doc.data().taux/100)

          setEBE(ebe1)
          setEBE2(ebe2)
          setEBE3(ebe3)

          /*resultat d'exploitation (REX) */
          rex1 = ebe1-G
          rex2 = rex1 + rex1*(doc.data().taux/100)
          rex3 = rex2 + rex2*(doc.data().taux/100)

          setREX(rex1)
          setREX2(rex2)
          setREX3(rex3)
          /*resultat financier (RF) */
          rf1 = h1-I
          rf2 = rf1 + rf1*(doc.data().taux/100)
          rf3 = rf2 + rf2*(doc.data().taux/100)

          setRF(rf1)
          setRF2(rf2)
          setRF3(rf3)
          /*resultat avant impot (RAI) */
          rai1 = rex1-rf1
          rai2 = rai1 + rai1*(doc.data().taux/100)
          rai3 = rai2 + rai2*(doc.data().taux/100)

          setRAI(rai1)
          setRAI2(rai2)
          setRAI3(rai3)
          /*impot sur le benefice (IB) */
          ib1 = rai1*tauximpot
          ib2 = ib1 + ib1*(doc.data().taux/100)
          ib3 = ib2 + ib2*(doc.data().taux/100)

          setIB(ib1)
          setIB2(ib2)
          setIB3(ib3)
          /*resultat net (RN) */
          rn1 = rai1-ib1
          rn2 = rn1 + rn1*(doc.data().taux/100)
          rn3 = rn2 + rn2*(doc.data().taux/100)

          setRN(rn1)
          setRN2(rn2)
          setRN3(rn3)

        })

        setPrevision(dat);
        setLoad(false)
        })
        .catch((err) => console.log(err));
      setToggle(!toggle);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .add({
        taux: editTable.taux,
        tauximpot: editTable.tauximpot,
        marchandise: editTable.marchandise,
        produitfinancie: editTable.produitfinancie,
        userId: userId,
      })
      .then(() => {
        setEditTable({
          taux:0
        })
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

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
      })
      .catch((err) => console.log(err));
  };
  const getChargeExploit = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("charge-exploitation")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalachat = 0
        let totaltransport = 0
        let totalservice = 0
        let impot = 0
        let personnel = 0
        data.forEach((doc) => {
          
          totalachat = (Number(doc.data().mcmnt)*Number(doc.data().mcnbre))+(Number(doc.data().carburantmnt)*Number(doc.data().carburantnbre))+(Number(doc.data().pemnt)*Number(doc.data().penbre))+(Number(doc.data().fournituremnt)*Number(doc.data().fourniturenbre))+(Number(doc.data().eaumnt)*Number(doc.data().eaunbre))+(Number(doc.data().electricitemnt)*Number(doc.data().electricitenbre))+(Number(doc.data().pmomnt)*Number(doc.data().pmonbre))+(Number(doc.data().epsmnt)*Number(doc.data().epsnbre))+(Number(doc.data().tmemnt)*Number(doc.data().tmenbre))+(Number(doc.data().emballagemnt)*Number(doc.data().emballagenbre))
          totaltransport = (Number(doc.data().tavmnt)*Number(doc.data().tavnbre))+(Number(doc.data().tpmnt)*Number(doc.data().tpnbre))+(Number(doc.data().tplismnt)*Number(doc.data().tplisnbre))+(Number(doc.data().voyagemnt)*Number(doc.data().voyagenbre))+(Number(doc.data().tamnt)*Number(doc.data().tanbre))
          totalservice = (Number(doc.data().traitancemnt)*Number(doc.data().traitancenbre))+(Number(doc.data().locationmnt)*Number(doc.data().locationnbre))+(Number(doc.data().entretienmnt)*Number(doc.data().entretiennbre))+(Number(doc.data().maintenancemnt)*Number(doc.data().maintenancenbre))+(Number(doc.data().assurancemnt)*Number(doc.data().assurancenbre))+(Number(doc.data().etudemnt)*Number(doc.data().etudenbre))+(Number(doc.data().docmnt)*Number(doc.data().docnbre))+(Number(doc.data().pubmnt)*Number(doc.data().pubnbre))+(Number(doc.data().telmnt)*Number(doc.data().telnbre))+(Number(doc.data().internetmnt)*Number(doc.data().internetnbre))+(Number(doc.data().fraismnt)*Number(doc.data().fraisnbre))+(Number(doc.data().commissionmnt)*Number(doc.data().commissionnbre))+(Number(doc.data().honorairemnt)*Number(doc.data().honorairenbre))+(Number(doc.data().formationmnt)*Number(doc.data().formationnbre))+(Number(doc.data().redevancemnt)*Number(doc.data().redevancenbre))+(Number(doc.data().receptionmnt)*Number(doc.data().receptionnbre))+(Number(doc.data().missionmnt)*Number(doc.data().missionnbre))
          impot = Number(doc.data().impotsmnt)*12
          personnel = Number(doc.data().personnelmnt)*12
          setB(totalachat)
          setC(totaltransport)
          setD(totalservice)
          setE(impot)
          setF(personnel)

        });
      })
      .catch((err) => console.log(err));
  };

  const getIncorp = () => {
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
          setAmort(totalamort)
        });
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
        let totalamort = 0
        let tg = 0
        data.forEach((doc) => {
          totalamort =Math.round(Number(doc.data().batimentmontant)/Number(doc.data().batimentduree)+Number(doc.data().amenagementmontant)/Number(doc.data().amenagementduree)+Number(doc.data().splitmontant)/Number(doc.data().splitduree)+Number(doc.data().ordibureaumontant)/Number(doc.data().ordibureauduree)+Number(doc.data().ordiportablemontant)/Number(doc.data().ordiportableduree)+Number(doc.data().ondulairemontant)/Number(doc.data().ondulaireduree)+Number(doc.data().imprimantemontant)/Number(doc.data().imprimanteduree)+Number(doc.data().photocopiemontant)/Number(doc.data().photocopieduree)+Number(doc.data().videomontant)/Number(doc.data().videoduree)+Number(doc.data().stabilisateurmontant)/Number(doc.data().stabilisateurduree)+Number(doc.data().voituremontant)/Number(doc.data().voitureduree)+Number(doc.data().tricyclemontant)/Number(doc.data().tricycleduree)+Number(doc.data().motomontant)/Number(doc.data().motoduree)+Number(doc.data().bureaumontant)/Number(doc.data().bureauduree)+Number(doc.data().placardmontant)/Number(doc.data().placardduree)+Number(doc.data().tablemontant)/Number(doc.data().tableduree)+Number(doc.data().fauteuilmontant)/Number(doc.data().fauteuilduree)+Number(doc.data().chaisemontant)/Number(doc.data().chaiseduree)+Number(doc.data().autremontant)/Number(doc.data().autreduree)+Number(doc.data().materieletmobiliermontant)/Number(doc.data().materieletmobilierduree))
        });
        
        setAmortCorp(totalamort)
      })
      .catch((err) => console.log(err));
  };
  const getFraisFinancier = () => {
    return firebasee
      .firestore()
      .collection("caracteristique-emprunt")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];

        let tamort1=0
        let tamort2=0
        let tamort3=0
        let tinteret1 = 0
        let tinteret2 = 0
        let tinteret3 = 0
        let tcapital2 = 0
        let tcapital3 = 0
        let tauxpercent = 0
        let totalinteret = 0

        data.forEach((doc) => {
          dat.push({
            taux: doc.data().taux,
            duree: doc.data().duree,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tauxpercent = Number(doc.data().taux)/100
          /**ANNEE 1 */
          
          console.log("getFraisFinancier capital1"+ capital1)
          tamort1 = (capital1/Number(doc.data().duree))*12
          tinteret1 = capital1*tauxpercent

          setAmort1(tamort1)
          setinteret1(tinteret1)

          /**ANNEE 2 */
          tcapital2 = capital1-tamort1
          setCapital2(tcapital2)
          tamort2 = (tcapital2/Number(doc.data().duree))*12
          setAmort2(tamort2)

          tinteret2 = tcapital2*tauxpercent
          setinteret2(tinteret2)

          /**ANNEE 3 */
          tcapital3 = tcapital2-tamort2
          setCapital3(tcapital3)
          tamort3 = (tcapital3/Number(doc.data().duree))*12
          setAmort3(tamort3)

          tinteret3 = tcapital3*tauxpercent
          setinteret3(tinteret3)
          totalinteret = tinteret1+tinteret2+tinteret3
          setI(totalinteret)

        });
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
        let captal = 0
        data.forEach((doc) => {
          
            captal = Number(doc.data().emprunt)
            setCapital1(captal)
            console.log("getemprunt capital1"+ captal)
        });
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getChargeExploit()
    getTotalCa()
    getIncorp()
    getCorp()
    getEmprunt()
    getFraisFinancier()
    setG(tamort+ tamortCorp)
    getDate()
    //setTotal(0)
  }, [toggle])
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>
          <p><h3>L'opperation a eté effectué avec success</h3></p>
          </DialogContentText>
          <DialogContentText style={{ marginLeft:50+'%', color:'green' }}>
            <VerifiedUserRoundedIcon/>
          </DialogContentText>
        </DialogContent>
        <DialogActions disableSpacing={true}>
          <Button autoFocus onClick={handleClose} style={{ marginRight:25+'%', backgroundColor:'#18A4F6', color:'white', fontSize:20 }}
            endIcon={<CheckCircle/>}
            size="large"
          >
            Je confirme
          </Button>
        </DialogActions>
      </Dialog>
      {prevision.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:20}}> Comptes de résultat prévisionnels sur 3 ans</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>Chiffre d'affaire</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Montant Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Taux variation</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Montant Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Taux variation</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Montant Annee 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prevision.map((item, index) => {
                      return (
                        <>
                        <TableRow>
                            <TableCell><b>Chiffre d'affaires (CA)</b></TableCell>
                            <TableCell>{CA}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{mnta2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{mnta3}</TableCell>
                            <TableCell rowSpan="20">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deletePrevision(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats marchandises/matières premières</TableCell>
                            <TableCell>{A}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{A2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{A3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Marge Brute (MB)</b></TableCell>
                            <TableCell>{MB}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{MB2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{MB3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres achats</TableCell>
                            <TableCell>{B}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{B2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{B3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transport</TableCell>
                            <TableCell>{C}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{C2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{C3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Services extérieurs</TableCell>
                            <TableCell>{D}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{D2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{D3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôts et taxes </TableCell>
                            <TableCell>{E}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{E2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{E3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Valeur Ajoutée (VA)</b></TableCell>
                            <TableCell>{VA}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{VA2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{VA3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Charge de personnel </TableCell>
                            <TableCell>{F}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{F2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{F3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Excédent Brut d'Exploitation (EBE)</b></TableCell>
                            <TableCell>{EBE}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{EBE2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{EBE3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Amortissement </TableCell>
                            <TableCell>{G}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(G2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(G3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Résultat d'Exploitation (REX)</b></TableCell>
                            <TableCell>{REX}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(REX2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(REX3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Produits Financiers</TableCell>
                            <TableCell>{H}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{H2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{H3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Frais Financiers</TableCell>
                            <TableCell>{Math.round(I)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(I2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(I3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Résultat Financier (RF)</b></TableCell>
                            <TableCell>{RF}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RF2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RF3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Résultat Avant Impôt (RAI)</b></TableCell>
                            <TableCell>{Math.round(RAI)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RAI2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RAI3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôt sur le bénéfice</TableCell>
                            <TableCell>{Math.round(IB)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(IB2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(IB3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Résultat Net (RN)</b></TableCell>
                            <TableCell>{Math.round(RN)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RN2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RN3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Amortissement </TableCell>
                            <TableCell>{G}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(G2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(G3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Cash-Flow</b></TableCell>
                            <TableCell>{Math.round(RN+G)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RN2+G2)}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{Math.round(RN3+G3)}</TableCell>
                        </TableRow>
                        
                             
                        </>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
        </div>
      ) : (
        <div className="tab">
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}} >Cette partie n'a pas encore été remplit</caption>
                <TableHead>
                 <TableRow>
                    <StyledTableCell style={{ maxWidth: 400}}>Libelle</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Total</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 70 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" style={{marginTop:10}}/>): (
        <>
        <div className="plus">
          {!show && (
            <Button className="plus-icon" 
              style={{color: 'white', marginTop:10, background:'#18A4F6'}} 
              onClick={() => setShow(!show)} 
              endIcon={<Add/>}>
              Ajouter
            </Button>
          )}
        </div>
        </>
        )}
      <div>
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editPrevision}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="taux"
                  label="Taux de variation en %"
                  name="taux"
                  type="number"
                  value={editTable.taux}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="tauximpot"
                  label="taux d'imposition en %"
                  name="tauximpot"
                  type="number"
                  value={editTable.tauximpot}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="marchandise"
                  label="marchandise"
                  name="marchandise"
                  type="number"
                  value={editTable.marchandise}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="produitfinancie"
                  label="produits financié"
                  name="produitfinancie"
                  type="number"
                  value={editTable.produitfinancie}
                  onChange={handleChange}
                />
                
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}

                >
                  Modifier
                </Button>
              </div>
            </form>
            
        </CardContent>
        </Card>
        </>
        ): (
          <>
          <Card variant="outlined" className={`${!show && "show"}`}>
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="input">
                 
                  <TextField
                    variant="outlined"
                    margin="normal"
                    autoFocus
                    fullWidth
                    id="taux"
                    label="Taux de variation en %"
                    name="taux"
                    type="number"
                    value={editTable.taux}
                    onChange={handleChange}
                  />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="tauximpot"
                  label="taux d'imposition en %"
                  name="tauximpot"
                  type="number"
                  value={editTable.tauximpot}
                  onChange={handleChange}
                />
                  <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="marchandise"
                  label="marchandise"
                  name="marchandise"
                  type="number"
                  value={editTable.marchandise}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="produitfinancie"
                  label="produits financié"
                  name="produitfinancie"
                  type="number"
                  value={editTable.produitfinancie}
                  onChange={handleChange}
                />
                   <Button
                    type="submit"
                    className="plus-icon"
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}}
                  >
                    Enregistrer
                </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </>
        )}
      </div>
    </div>
  );
};

export default Chapitresevenp
