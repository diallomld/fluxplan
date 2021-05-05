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
  const initialvalues = {
    ca1:"",
    ca2:"",
    ca3:"",
    autreproduit1:"",
    autreproduit2:"",
    autreproduit3:"",
    am1:"",
    am2:"",
    am3:"",
    ap1:"",
    ap2:"",
    ap3:"",
    autreAchat1:"",
    autreAchat2:"",
    autreAchat3:"",
    transport1:"",
    transport2:"",
    transport3:"",
    se1:"",
    se2:"",
    se3:"",
    impot1:"",
    impot2:"",
    impot3:"",
    fraisp1:"",
    fraisp2:"",
    fraisp3:"",
    reprise1:"",
    reprise2:"",
    reprise3:"",
    dotation1:"",
    dotation1:"",
    dotation2:"",
    dotation3:"",
    p1:"",
    p2:"",
    p3:"",
    frais1:"",
    frais2:"",
    frais3:"",
    phao1:"",
    phao2:"",
    phao3:"",
    chargehao1:"",
    chargehao2:"",
    chargehao3:"",
    impotbic1:"",
    impotbic2:"",
    impotbic3:"",
  };
  const editObject = {
    ca1:"",
    ca2:"",
    ca3:"",
    autreproduit1:"",
    autreproduit2:"",
    autreproduit3:"",
    am1:"",
    am2:"",
    am3:"",
    ap1:"",
    ap2:"",
    ap3:"",
    autreAchat1:"",
    autreAchat2:"",
    autreAchat3:"",
    transport1:"",
    transport2:"",
    transport3:"",
    se1:"",
    se2:"",
    se3:"",
    impot1:"",
    impot2:"",
    impot3:"",
    fraisp1:"",
    fraisp2:"",
    fraisp3:"",
    reprise1:"",
    reprise2:"",
    reprise3:"",
    dotation1:"",
    dotation1:"",
    dotation2:"",
    dotation3:"",
    p1:"",
    p2:"",
    p3:"",
    frais1:"",
    frais2:"",
    frais3:"",
    phao1:"",
    phao2:"",
    phao3:"",
    chargehao1:"",
    chargehao2:"",
    chargehao3:"",
    impotbic1:"",
    impotbic2:"",
    impotbic3:"",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [totalProduit, setTotalProduit] = React.useState(0);
  const [totalBrut1, setTotalBrut1] = React.useState(0);
  const [totalBrut2, setTotalBrut2] = React.useState(0);
  const [totalBrut3, setTotalBrut3] = React.useState(0);
  const [totalBrut, setTotalBrut] = React.useState(0);
  const [totalConsomable1, setTotalConsomable1] = React.useState(0);
  const [totalConsomable2, setTotalConsomable2] = React.useState(0);
  const [totalConsomable3, setTotalConsomable3] = React.useState(0);
  const [totalConsomable, setTotalConsomable] = React.useState(0);
  const [totalImpot, setTotalImpot] = React.useState(0);
  const [totalFrais, setTotalFrais] = React.useState(0);
  const [totalReprise, setTotalReprise] = React.useState(0);
  const [totalDotation, setTotalDotation] = React.useState(0);

  const [totalExedent1, setTotalExedent1] = React.useState(0);
  const [totalExedent2, setTotalExedent2] = React.useState(0);
  const [totalExedent3, setTotalExedent3] = React.useState(0);
  const [totalExedent, setTotalExedent] = React.useState(0);

  const [totalOrdinaire, setTotalOrdinaire] = React.useState(0);
  const [totalOrdinaire1, setTotalOrdinaire1] = React.useState(0);
  const [totalOrdinaire2, setTotalOrdinaire2] = React.useState(0);
  const [totalOrdinaire3, setTotalOrdinaire3] = React.useState(0);

  const [totalExploit1, setTotalExploit1] = React.useState(0);
  const [totalExploit2, setTotalExploit2] = React.useState(0);
  const [totalExploit3, setTotalExploit3] = React.useState(0);
  const [totalExploit, setTotalExploit] = React.useState(0);
  
  const [totalFinancier1, setTotalFinancier1] = React.useState(0);
  const [totalFinancier2, setTotalFinancier2] = React.useState(0);
  const [totalFinancier3, setTotalFinancier3] = React.useState(0);
  const [totalFinancier, setTotalFinancier] = React.useState(0);
  
  const [totalResultatBrut1, setTotalResultatBrut1] = React.useState(0);
  const [totalResultatBrut2, setTotalResultatBrut2] = React.useState(0);
  const [totalResultatBrut3, setTotalResultatBrut3] = React.useState(0);
  const [totalResultatBrut, setTotalResultatBrut] = React.useState(0);

  const [totalP, setTotalP] = React.useState(0);
  const [totalFraisf, setTotalFraisf] = React.useState(0);
  const [totalBic, setTotalBic] = React.useState(0);


  //const [errorElements, setErrorElements] = React.useState(true);


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
          ca1: editTable.ca1,
          ca2: editTable.ca2,
          ca3: editTable.ca3,
          autreproduit1: editTable.autreproduit1,
          autreproduit2: editTable.autreproduit2,
          autreproduit3: editTable.autreproduit3,
          am1: editTable.am1,
          am2: editTable.am2,
          am3: editTable.am3,
          ap1: editTable.ap1,
          ap2: editTable.ap2,
          ap3: editTable.ap3,
          autreAchat1: editTable.autreAchat1,
          autreAchat2: editTable.autreAchat2,
          autreAchat3: editTable.autreAchat3,
          transport1: editTable.transport1,
          transport2: editTable.transport2,
          transport3: editTable.transport3,
          se1: editTable.se1,
          se2: editTable.se2,
          se3: editTable.se3,
          impot1: editTable.impot1,
          impot2: editTable.impot2,
          impot3: editTable.impot3,
          fraisp1: editTable.fraisp1,
          fraisp2: editTable.fraisp2,
          fraisp3: editTable.fraisp3,
          reprise1: editTable.reprise1,
          reprise2: editTable.reprise2,
          reprise3: editTable.reprise3,
          dotation1: editTable.dotation1,
          dotation2: editTable.dotation2,
          dotation3: editTable.dotation3,
          p1: editTable.p1,
          p2: editTable.p2,
          p3: editTable.p3,
          frais1: editTable.frais1,
          frais2: editTable.frais2,
          frais3: editTable.frais3,
          phao1: editTable.phao1,
          phao2: editTable.phao2,
          phao3: editTable.phao3,
          chargehao1: editTable.chargehao1,
          chargehao2: editTable.chargehao2,
          chargehao3: editTable.chargehao3,
          impotbic1: editTable.impotbic1,
          impotbic2: editTable.impotbic2,
          impotbic3: editTable.impotbic3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({})
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
        let dat = [];
        data.forEach((doc) => {
          let tproduit = 0;
          let tb1 = 0;
          let tb2 = 0;
          let tb3 = 0;
          let tc1 = 0;
          let tc2 = 0;
          let tc3 = 0;
          let timpot = 0;
          let tfrais = 0;
          let treprise = 0;
          let tdotation = 0;
          let teedent1 = 0;
          let teedent2 = 0;
          let teedent3 = 0;
          let teedent = 0;
          let tff = 0;
          let tpf = 0;
          let tord1 = 0;
          let tord2 = 0;
          let tord3 = 0;
          let tord = 0;
          /*
          let texploit1 = 0;
          let texploit2 = 0;
          let texploit3 = 0;
          let texploit = 0; */
 
          tpf = Number(doc.data().p1)+Number(doc.data().p2)+Number(doc.data().p3)
          tff = Number(doc.data().frais1)+Number(doc.data().frais2)+Number(doc.data().frais3)
          setTotalFraisf(tff)
          setTotalP(tpf)

          treprise = Number(doc.data().reprise1)+Number(doc.data().reprise2)+Number(doc.data().reprise3)
          tdotation = Number(doc.data().dotation1)+Number(doc.data().dotation2)+Number(doc.data().dotation3)
          timpot = Number(doc.data().impot1)+Number(doc.data().impot2)+Number(doc.data().impot3)
          tfrais = Number(doc.data().frais1)+Number(doc.data().frais2)+Number(doc.data().frais3)
          setTotalImpot(timpot)
          setTotalFrais(tfrais)
          setTotalReprise(treprise)
          setTotalDotation(tdotation)

          setTotalBic(Number(doc.data().impot1)+Number(doc.data().impot2)+Number(doc.data().impot3))

          tc1 = Number(doc.data().autreAchat1)+Number(doc.data().se1)+Number(doc.data().transport1)
          tc2 = Number(doc.data().autreAchat2)+Number(doc.data().se2)+Number(doc.data().transport2)
          tc3 = Number(doc.data().autreAchat3)+Number(doc.data().se2)+Number(doc.data().transport2)
          
          tb1 = (Number(doc.data().ca1)+Number(doc.data().autreproduit1))-(Number(doc.data().am1)+Number(doc.data().ap1))
          tb2 = (Number(doc.data().ca2)+Number(doc.data().autreproduit2))-(Number(doc.data().am2)+Number(doc.data().ap2))
          tb3 = (Number(doc.data().ca3)+Number(doc.data().autreproduit3))-(Number(doc.data().am3)+Number(doc.data().ap3))
          tproduit = Number(doc.data().ca1)+Number(doc.data().ca2)+Number(doc.data().ca3)+Number(doc.data().autreproduit1)+Number(doc.data().autreproduit2)+Number(doc.data().autreproduit3)
          setTotalProduit(tproduit)

          tord1 = Number(doc.data().phao1)-Number(doc.data().chargehao1)
          tord2 = Number(doc.data().phao2)-Number(doc.data().chargehao2)
          tord3 = Number(doc.data().phao3)-Number(doc.data().chargehao2)
          setTotalOrdinaire1(tord1)
          setTotalOrdinaire2(tord2)
          setTotalOrdinaire3(tord3)
          setTotalOrdinaire((Number(doc.data().phao1)-Number(doc.data().chargehao1))+(Number(doc.data().phao2)-Number(doc.data().chargehao2))+(Number(doc.data().phao3)-Number(doc.data().chargehao3)))
          
          setTotalBrut1(tb1)
          setTotalBrut2(tb2)
          setTotalBrut3(tb3)
          setTotalBrut(tb1+tb2+tb3)
          
          setTotalConsomable1(tc1)
          setTotalConsomable2(tc2)
          setTotalConsomable3(tc3)
          setTotalConsomable(tc1+tc2+tc3)
          
          teedent1 = (totalBrut1-totalConsomable1)-(Number(doc.data().impot1)+Number(doc.data().frais1))
          teedent2 = (totalBrut2-totalConsomable2)-(Number(doc.data().impot2)+Number(doc.data().frais2))
          teedent3 = (totalBrut3-totalConsomable3)-(Number(doc.data().impot3)+Number(doc.data().frais3))
          teedent = (totalBrut-totalConsomable)-(totalImpot+totalFrais)

          setTotalExedent1(teedent1)
          setTotalExedent2(teedent2)
          setTotalExedent3(teedent3)
          setTotalExedent(teedent)
        
          //texploit1 = totalExedent1+ Number(doc.data().reprise1)-Number(doc.data().dotation1)

          setTotalExploit1(totalExedent1+ Number(doc.data().reprise1)-Number(doc.data().dotation1))
          setTotalExploit2(totalExedent2+ Number(doc.data().reprise2)-Number(doc.data().dotation2))
          setTotalExploit3(totalExedent3+ Number(doc.data().reprise3)-Number(doc.data().dotation3))
          setTotalExploit((totalExedent+totalReprise)-totalDotation)

          setTotalFinancier1(Number(doc.data().p1)-Number(doc.data().frais1))
          setTotalFinancier2(Number(doc.data().p2)-Number(doc.data().frais2))
          setTotalFinancier3(Number(doc.data().p3)-Number(doc.data().frais3))
          setTotalFinancier(totalP-totalFraisf)

          setTotalResultatBrut1(totalExploit1+totalFinancier1+totalOrdinaire1)
          setTotalResultatBrut2(totalExploit2+totalFinancier2+totalOrdinaire2)
          setTotalResultatBrut3(totalExploit3+totalFinancier3+totalOrdinaire3)
          setTotalResultatBrut(totalExploit+totalFinancier+totalOrdinaire)
          
          dat.push({
            ca1: doc.data().ca1,
            ca2: doc.data().ca2,
            ca3: doc.data().ca3,
            autreproduit1: doc.data().autreproduit1,
            autreproduit2: doc.data().autreproduit2,
            autreproduit3: doc.data().autreproduit3,
            am1: doc.data().am1,
            am2: doc.data().am2,
            am3: doc.data().am3,
            ap1: doc.data().ap1,
            ap2: doc.data().ap2,
            ap3: doc.data().ap3,
            autreAchat1: doc.data().autreAchat1,
            autreAchat2: doc.data().autreAchat2,
            autreAchat3: doc.data().autreAchat3,
            transport1: doc.data().transport1,
            transport2: doc.data().transport2,
            transport3: doc.data().transport3,
            se1: doc.data().se1,
            se2: doc.data().se2,
            se3: doc.data().se3,
            impot1: doc.data().impot1,
            impot2: doc.data().impot2,
            impot3: doc.data().impot3,
            fraisp1: doc.data().fraisp1,
            fraisp2: doc.data().fraisp2,
            fraisp3: doc.data().fraisp3,
            reprise1: doc.data().reprise1,
            reprise2: doc.data().reprise2,
            reprise3: doc.data().reprise3,
            dotation1: doc.data().dotation1,
            dotation2: doc.data().dotation2,
            dotation3: doc.data().dotation3,
            p1: doc.data().p1,
            p2: doc.data().p2,
            p3: doc.data().p3,
            frais1: doc.data().frais1,
            frais2: doc.data().frais2,
            frais3: doc.data().frais3,
            phao1: doc.data().phao1,
            phao2: doc.data().phao2,
            phao3: doc.data().phao3,
            chargehao1: doc.data().chargehao1,
            chargehao2: doc.data().chargehao2,
            chargehao3: doc.data().chargehao3,
            impotbic1: doc.data().impotbic1,
            impotbic2: doc.data().impotbic2,
            impotbic3: doc.data().impotbic3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPrevision(dat);
        console.table(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

 /* 
    const validationSchema = Yup.object().shape({
    elements: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    annee1: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee2: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee3: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
   }) */
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .add({
        ca1: values.ca1,
        ca2: values.ca2,
        ca3: values.ca3,
        autreproduit1: values.autreproduit1,
        autreproduit2: values.autreproduit2,
        autreproduit3: values.autreproduit3,
        am1: values.am1,
        am2: values.am2,
        am3: values.am3,
        ap1: values.ap1,
        ap2: values.ap2,
        ap3: values.ap3,
        autreAchat1: values.autreAchat1,
        autreAchat2: values.autreAchat2,
        autreAchat3: values.autreAchat3,
        transport1: values.transport1,
        transport2: values.transport2,
        transport3: values.transport3,
        se1: values.se1,
        se2: values.se2,
        se3: values.se3,
        impot1: values.impot1,
        impot2: values.impot2,
        impot3: values.impot3,
        fraisp1: values.fraisp1,
        fraisp2: values.fraisp2,
        fraisp3: values.fraisp3,
        reprise1: values.reprise1,
        reprise2: values.reprise2,
        reprise3: values.reprise3,
        dotation1: values.dotation1,
        dotation2: values.dotation2,
        dotation3: values.dotation3,
        p1: values.p1,
        p2: values.p2,
        p3: values.p3,
        frais1: values.frais1,
        frais2: values.frais2,
        frais3: values.frais3,
        phao1: values.phao1,
        phao2: values.phao2,
        phao3: values.phao3,
        chargehao1: values.chargehao1,
        chargehao2: values.chargehao2,
        chargehao3: values.chargehao3,
        impotbic1: values.impotbic1,
        impotbic2: values.impotbic2,
        impotbic3: values.impotbic3,
        userId: userId,
      })
      .then(() => {
        props.resetForm()
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  React.useEffect(() => {
    getDate();
    //setTotal(0)
  }, [toggle]);
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
                    <StyledTableCell style={{ mixWidth: 400}}>Libelle</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Total</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prevision.map((item, index) => {
                      return (
                        <>
                        <TableRow>
                            <TableCell>Chiffre d'affaires</TableCell>
                            <TableCell>{item.ca1}</TableCell>
                            <TableCell>{item.ca2}</TableCell>
                            <TableCell>{item.ca3}</TableCell>
                            <TableCell>{Number(item.ca1)+Number(item.ca2)+Number(item.ca3)}</TableCell>
                            <TableCell rowSpan="27">
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
                            <TableCell>Autres Charges</TableCell>
                            <TableCell>{item.autreproduit1}</TableCell>
                            <TableCell>{item.autreproduit1}</TableCell>
                            <TableCell>{item.autreproduit1}</TableCell>
                            <TableCell>{Number(item.autreproduit1)+Number(item.autreproduit2)+Number(item.autreproduit3)}</TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell><b>TOTAL PRODUITS</b></TableCell>
                            <TableCell>{Number(item.ca1)+Number(item.autreproduit1)}</TableCell>
                            <TableCell>{Number(item.ca2)+Number(item.autreproduit2)}</TableCell>
                            <TableCell>{Number(item.ca3)+Number(item.autreproduit3)}</TableCell>
                            <TableCell>{totalProduit}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats marchandises & Matières premières</TableCell>
                            <TableCell>{item.am1}</TableCell>
                            <TableCell>{item.am2}</TableCell>
                            <TableCell>{item.am3}</TableCell>
                            <TableCell>{Number(item.am1)+Number(item.am2)+Number(item.am3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats produits accessoires</TableCell>
                            <TableCell>{item.ap1}</TableCell>
                            <TableCell>{item.ap2}</TableCell>
                            <TableCell>{item.ap3}</TableCell>
                            <TableCell>{Number(item.ap1)+Number(item.ap2)+Number(item.ap3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>MARGE BRUTE</b></TableCell>
                            <TableCell>{totalBrut1}</TableCell>
                            <TableCell>{totalBrut2}</TableCell>
                            <TableCell>{totalBrut3}</TableCell>
                            <TableCell>{totalBrut}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres achats</TableCell>
                            <TableCell>{item.autreAchat1}</TableCell>
                            <TableCell>{item.autreAchat2}</TableCell>
                            <TableCell>{item.autreAchat3}</TableCell>
                            <TableCell>{Number(item.autreAchat1)+Number(item.autreAchat2)+Number(item.autreAchat3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transport</TableCell>
                            <TableCell>{item.transport1}</TableCell>
                            <TableCell>{item.transport2}</TableCell>
                            <TableCell>{item.transport3}</TableCell>
                            <TableCell>{Number(item.transport1)+Number(item.transport2)+Number(item.transport3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Services extérieurs</TableCell>
                            <TableCell>{item.se1}</TableCell>
                            <TableCell>{item.se2}</TableCell>
                            <TableCell>{item.se3}</TableCell>
                            <TableCell>{Number(item.se1)+Number(item.se2)+Number(item.se3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Total Consommations Intermédiaires</b></TableCell>
                            <TableCell>{totalConsomable1}</TableCell>
                            <TableCell>{totalConsomable2}</TableCell>
                            <TableCell>{totalConsomable3}</TableCell>
                            <TableCell>{totalConsomable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>VALEUR AJOUTEE (VA)</b></TableCell>
                            <TableCell>{Number(totalBrut1)-Number(totalConsomable1)}</TableCell>
                            <TableCell>{Number(totalBrut2)-Number(totalConsomable2)}</TableCell>
                            <TableCell>{Number(totalBrut3)-Number(totalConsomable3)}</TableCell>
                            <TableCell>{totalBrut-totalConsomable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôts et taxes</TableCell>
                            <TableCell>{item.impot1}</TableCell>
                            <TableCell>{item.impot2}</TableCell>
                            <TableCell>{item.impot3}</TableCell>
                            <TableCell>{totalImpot}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Frais de personnel</TableCell>
                            <TableCell>{item.fraisp1}</TableCell>
                            <TableCell>{item.fraisp2}</TableCell>
                            <TableCell>{item.fraisp3}</TableCell>
                            <TableCell>{totalFrais}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>EXCEDENT BRUT D'EXPLOITATION (EBE)</b></TableCell>
                            <TableCell>{totalExedent1}</TableCell>
                            <TableCell>{totalExedent2}</TableCell>
                            <TableCell>{totalExedent3}</TableCell>
                            <TableCell>{totalExedent}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Reprise sur Provisions</TableCell>
                            <TableCell>{item.reprise1}</TableCell>
                            <TableCell>{item.reprise2}</TableCell>
                            <TableCell>{item.reprise3}</TableCell>
                            <TableCell>{totalReprise}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dotation aux Amortissements</TableCell>
                            <TableCell>{item.dotation1}</TableCell>
                            <TableCell>{item.dotation2}</TableCell>
                            <TableCell>{item.dotation3}</TableCell>
                            <TableCell>{totalDotation}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT D'EXPLOITATION</b></TableCell>
                            <TableCell>{totalExploit1}</TableCell>
                            <TableCell>{totalExploit2}</TableCell>
                            <TableCell>{totalExploit3}</TableCell>
                            <TableCell>{totalExploit}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Produits Financiers</TableCell>
                            <TableCell>{item.p1}</TableCell>
                            <TableCell>{item.p2}</TableCell>
                            <TableCell>{item.p3}</TableCell>
                            <TableCell>{totalP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Frais Financiers</TableCell>
                            <TableCell>{item.frais1}</TableCell>
                            <TableCell>{item.frais2}</TableCell>
                            <TableCell>{item.frais3}</TableCell>
                            <TableCell>{totalFraisf}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT FINANCIER</b></TableCell>
                            <TableCell>{totalFinancier1}</TableCell>
                            <TableCell>{totalFinancier2}</TableCell>
                            <TableCell>{totalFinancier3}</TableCell>
                            <TableCell>{totalFinancier}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Produits HAO</TableCell>
                            <TableCell>{item.phao1}</TableCell>
                            <TableCell>{item.phao2}</TableCell>
                            <TableCell>{item.phao3}</TableCell>
                            <TableCell>{Number(item.phao1)+Number(item.phao2)+Number(item.phao3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Charges HAO</TableCell>
                            <TableCell>{item.chargehao1}</TableCell>
                            <TableCell>{item.chargehao2}</TableCell>
                            <TableCell>{item.chargehao3}</TableCell>
                            <TableCell>{Number(item.chargehao1)+Number(item.chargehao2)+Number(item.chargehao3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT HORS ACTIVITES ORDINAIRES</b></TableCell>
                            <TableCell>{(Number(item.phao1))-(Number(item.chargehao1))}</TableCell>
                            <TableCell>{(Number(item.phao2))-(Number(item.chargehao2))}</TableCell>
                            <TableCell>{(Number(item.phao3))-(Number(item.chargehao3))}</TableCell>
                            <TableCell>{totalOrdinaire}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b> RESULTAT BRUT</b></TableCell>
                            <TableCell>{totalResultatBrut1}</TableCell>
                            <TableCell>{totalResultatBrut2}</TableCell>
                            <TableCell>{totalResultatBrut3}</TableCell>
                            <TableCell>{totalResultatBrut}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôt BIC</TableCell>
                            <TableCell>{item.impot1}</TableCell>
                            <TableCell>{item.impot2}</TableCell>
                            <TableCell>{item.impot3}</TableCell>
                            <TableCell>{totalBic}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b> RESULTAT NET</b></TableCell>
                            <TableCell>{totalResultatBrut1-item.impot1}</TableCell>
                            <TableCell>{totalResultatBrut2-item.impot2}</TableCell>
                            <TableCell>{totalResultatBrut3-item.impot3}</TableCell>
                            <TableCell>{totalResultatBrut-totalBic}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>CASH Flow</b></TableCell>
                            <TableCell>{(totalResultatBrut1-item.impot1)+item.dotation1}</TableCell>
                            <TableCell>{(totalResultatBrut2-item.impot2)+item.dotation2}</TableCell>
                            <TableCell>{(totalResultatBrut3-item.impot3)+item.dotation3}</TableCell>
                            <TableCell>{(totalResultatBrut-totalBic)+totalDotation}</TableCell>
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
                  required
                  fullWidth
                  id="ca1"
                  label="Chiffre d'affaires Année 1"
                  name="ca1"
                  autoFocus
                  type="number"
                  value={editTable.ca1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Chiffre d'affaires Année 2"
                  id="ca2"
                  name="ca2"
                  type="number"
                  value={editTable.ca2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Chiffre d'affaires Année 3"
                  id="ca3"
                  name="ca3"
                  type="number"
                  value={editTable.ca3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 1"
                  id="autreproduit1"
                  name="autreproduit1"
                  type="number"
                  value={editTable.autreproduit1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 2"
                  id="autreproduit2"
                  name="autreproduit2"
                  type="number"
                  value={editTable.autreproduit2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 3"
                  id="autreproduit3"
                  name="autreproduit3"
                  type="number"
                  value={editTable.autreproduit3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 1"
                  id="am1"
                  name="am1"
                  type="number"
                  value={editTable.am1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 2"
                  id="am2"
                  name="am2"
                  type="number"
                  value={editTable.am2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 3"
                  id="am3"
                  name="am3"
                  type="number"
                  value={editTable.am3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 1"
                  id="ap1"
                  name="ap1"
                  type="number"
                  value={editTable.ap1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 2"
                  id="ap2"
                  name="ap2"
                  type="number"
                  value={editTable.ap2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 3"
                  id="ap3"
                  name="ap3"
                  type="number"
                  value={editTable.ap3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 1"
                  id="autreAchat1"
                  name="autreAchat1"
                  type="number"
                  value={editTable.autreAchat1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 2"
                  id="autreAchat2"
                  name="autreAchat2"
                  type="number"
                  value={editTable.autreAchat2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 3"
                  id="autreAchat3"
                  name="autreAchat3"
                  type="number"
                  value={editTable.autreAchat3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 1"
                  id="transport1"
                  name="transport1"
                  type="number"
                  value={editTable.transport1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 2"
                  id="transport2"
                  name="transport2"
                  type="number"
                  value={editTable.transport2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 3"
                  id="transport3"
                  name="transport3"
                  type="number"
                  value={editTable.transport3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 1"
                  id="se1"
                  name="se1"
                  type="number"
                  value={editTable.se1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 2"
                  id="se2"
                  name="se2"
                  type="number"
                  value={editTable.se2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 3"
                  id="se3"
                  name="se3"
                  type="number"
                  value={editTable.se3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 1"
                  id="impot1"
                  name="impot1"
                  type="number"
                  value={editTable.impot1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 2"
                  id="impot2"
                  name="impot2"
                  type="number"
                  value={editTable.impot2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 3"
                  id="impot3"
                  name="impot3"
                  type="number"
                  value={editTable.impot3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 1"
                  id="fraisp1"
                  name="fraisp1"
                  type="number"
                  value={editTable.fraisp1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 2"
                  id="fraisp2"
                  name="fraisp2"
                  type="number"
                  value={editTable.fraisp2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 3"
                  id="fraisp3"
                  name="fraisp3"
                  type="number"
                  value={editTable.fraisp3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 1"
                  id="reprise1"
                  name="reprise1"
                  type="number"
                  value={editTable.reprise1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 2"
                  id="reprise2"
                  name="reprise2"
                  type="number"
                  value={editTable.reprise2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 3"
                  id="reprise3"
                  name="reprise3"
                  type="number"
                  value={editTable.reprise3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 1"
                  id="dotation1"
                  name="dotation1"
                  type="number"
                  value={editTable.dotation1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 2"
                  id="dotation2"
                  name="dotation2"
                  type="number"
                  value={editTable.dotation2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 3"
                  id="dotation3"
                  name="dotation3"
                  type="number"
                  value={editTable.dotation3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 1"
                  id="p1"
                  name="p1"
                  type="number"
                  value={editTable.p1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 2"
                  id="p2"
                  name="p2"
                  type="number"
                  value={editTable.p2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 3"
                  id="p3"
                  name="p3"
                  type="number"
                  value={editTable.p3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 1"
                  id="frais1"
                  name="frais1"
                  type="number"
                  value={editTable.frais1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 2"
                  id="frais2"
                  name="frais2"
                  type="number"
                  value={editTable.frais2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 3"
                  id="frais3"
                  name="frais3"
                  type="number"
                  value={editTable.frais3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 1"
                  id="phao1"
                  name="phao1"
                  type="number"
                  value={editTable.phao1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 2"
                  id="phao2"
                  name="phao2"
                  type="number"
                  value={editTable.phao2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 3"
                  id="phao3"
                  name="phao3"
                  type="number"
                  value={editTable.phao3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 1"
                  id="chargehao1"
                  name="chargehao1"
                  type="number"
                  value={editTable.chargehao1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 2"
                  id="chargehao2"
                  name="chargehao2"
                  type="number"
                  value={editTable.chargehao2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 3"
                  id="chargehao3"
                  name="chargehao3"
                  type="number"
                  value={editTable.chargehao3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 1"
                  id="impot1"
                  name="impot1"
                  type="number"
                  value={editTable.impot1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 2"
                  id="impot2"
                  name="impot2"
                  type="number"
                  value={editTable.impot2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 3"
                  id="impot3"
                  name="impot3"
                  type="number"
                  value={editTable.impot3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
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
               <Formik initialValues={initialvalues} onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <div className="input">
                 

                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="ca1"
                  label="Chiffre d'affaires Année 1"
                  name="ca1"
                  autoFocus
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Chiffre d'affaires Année 2"
                  id="ca2"
                  name="ca2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Chiffre d'affaires Année 3"
                  id="ca3"
                  name="ca3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 1"
                  id="autreproduit1"
                  name="autreproduit1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 2"
                  id="autreproduit2"
                  name="autreproduit2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres produits Année 3"
                  id="autreproduit3"
                  name="autreproduit3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 1"
                  id="am1"
                  name="am1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 2"
                  id="am2"
                  name="am2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats marchandises & Matières premières Année 3"
                  id="am3"
                  name="am3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 1"
                  id="ap1"
                  name="ap1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 2"
                  id="ap2"
                  name="ap2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Achats produits accessoires Année 3"
                  id="ap3"
                  name="ap3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 1"
                  id="autreAchat1"
                  name="autreAchat1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 2"
                  id="autreAchat2"
                  name="autreAchat2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Autres achats Année 3"
                  id="autreAchat3"
                  name="autreAchat3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 1"
                  id="transport1"
                  name="transport1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 2"
                  id="transport2"
                  name="transport2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Transport Année 3"
                  id="transport3"
                  name="transport3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 1"
                  id="se1"
                  name="se1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 2"
                  id="se2"
                  name="se2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Services extérieurs Année 3"
                  id="se3"
                  name="se3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 1"
                  id="impot1"
                  name="impot1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 2"
                  id="impot2"
                  name="impot2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôts et taxes Année 3"
                  id="impot3"
                  name="impot3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 1"
                  id="fraisp1"
                  name="fraisp1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 2"
                  id="fraisp2"
                  name="fraisp2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais de personnel Année 3"
                  id="fraisp3"
                  name="fraisp3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 1"
                  id="reprise1"
                  name="reprise1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 2"
                  id="reprise2"
                  name="reprise2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Reprise sur Provisions Année 3"
                  id="reprise3"
                  name="reprise3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 1"
                  id="dotation1"
                  name="dotation1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 2"
                  id="dotation2"
                  name="dotation2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Dotation aux Amortissements Année 3"
                  id="dotation3"
                  name="dotation3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 1"
                  id="p1"
                  name="p1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 2"
                  id="p2"
                  name="p2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits Financiers Année 3"
                  id="p3"
                  name="p3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 1"
                  id="frais1"
                  name="frais1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 2"
                  id="frais2"
                  name="frais2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Frais Financiers Année 3"
                  id="frais3"
                  name="frais3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 1"
                  id="phao1"
                  name="phao1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 2"
                  id="phao2"
                  name="phao2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Produits HAO Année 3"
                  id="phao3"
                  name="phao3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 1"
                  id="chargehao1"
                  name="chargehao1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 2"
                  id="chargehao2"
                  name="chargehao2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Charges HAO Année 3"
                  id="chargehao3"
                  name="chargehao3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 1"
                  id="impot1"
                  name="impot1"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 2"
                  id="impot2"
                  name="impot2"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Impôt BIC Année 3"
                  id="impot3"
                  name="impot3"
                  type="number"
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}}
                  >
                    Enregistrer
                </Button>
                </div>
              </Form>
              )}
          </Formik>
            </CardContent>
          </Card>
        </>
        )}
      </div>
    </div>
  );
};

export default Chapitresevenp
