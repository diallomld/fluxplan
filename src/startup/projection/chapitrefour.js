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
    width: '60%',
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

const Chapitrefourp = () => {
  const initialvalues = {
    produits: "",
    //quantite: "",
    //prix: "",
    pm1: "",
    pm2: "",
    pm3: "",
    pm4: "",
    pm5: "",
    pm6: "",
    pm7: "",
    pm8: "",
    pm9: "",
    pm10: "",
    pm11: "",
    pm12: "",
    qrix: "",
    qm1: "",
    qm2: "",
    qm3: "",
    qm4: "",
    qm5: "",
    qm6: "",
    qm7: "",
    qm8: "",
    qm9: "",
    qm10: "",
    qm11: "",
    qm12: "",
  };
  const editObject = {
    produits: "",
    //quantite: "",
    //prix: "",
    pm1: "",
    pm2: "",
    pm3: "",
    pm4: "",
    pm5: "",
    pm6: "",
    pm7: "",
    pm8: "",
    pm9: "",
    pm10: "",
    pm11: "",
    pm12: "",
    qrix: "",
    qm1: "",
    qm2: "",
    qm3: "",
    qm4: "",
    qm5: "",
    qm6: "",
    qm7: "",
    qm8: "",
    qm9: "",
    qm10: "",
    qm11: "",
    qm12: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [totalQm, setTotalQm] = React.useState([]);
  const [totalPm, setTotalPm] = React.useState([]);
  const [totalCa, setTotalCa] = React.useState([]);
  const [totalCat, setTotalCat] = React.useState([]);
  //total ca
  const [tCa1, setTCa1] = React.useState(0);
  const [tCa2, setTCa2] = React.useState(0);
  const [tCa3, setTCa3] = React.useState(0);
  const [tCa4, setTCa4] = React.useState(0);
  const [tCa5, setTCa5] = React.useState(0);
  const [tCa6, setTCa6] = React.useState(0);
  const [tCa7, setTCa7] = React.useState(0);
  const [tCa8, setTCa8] = React.useState(0);
  const [tCa9, setTCa9] = React.useState(0);
  const [tCa10, setTCa10] = React.useState(0);
  const [tCa11, setTCa11] = React.useState(0);
  const [tCa12, setTCa12] = React.useState(0);
  const [errorProduits, setErrorProduits] = React.useState(true);
  // errors quantite
  const [errorQm1, setErrorQm1] = React.useState(true);
  const [errorQm2, setErrorQm2] = React.useState(true);
  const [errorQm3, setErrorQm3] = React.useState(true);
  const [errorQm4, setErrorQm4] = React.useState(true);
  const [errorQm5, setErrorQm5] = React.useState(true);
  const [errorQm6, setErrorQm6] = React.useState(true);
  const [errorQm7, setErrorQm7] = React.useState(true);
  const [errorQm8, setErrorQm8] = React.useState(true);
  const [errorQm9, setErrorQm9] = React.useState(true);
  const [errorQm10, setErrorQm10] = React.useState(true);
  const [errorQm11, setErrorQm11] = React.useState(true);
  const [errorQm12, setErrorQm12] = React.useState(true);
  // errors prix
  const [errorPm1, setErrorPm1] = React.useState(true);
  const [errorPm2, setErrorPm2] = React.useState(true);
  const [errorPm3, setErrorPm3] = React.useState(true);
  const [errorPm4, setErrorPm4] = React.useState(true);
  const [errorPm5, setErrorPm5] = React.useState(true);
  const [errorPm6, setErrorPm6] = React.useState(true);
  const [errorPm7, setErrorPm7] = React.useState(true);
  const [errorPm8, setErrorPm8] = React.useState(true);
  const [errorPm9, setErrorPm9] = React.useState(true);
  const [errorPm10, setErrorPm10] = React.useState(true);
  const [errorPm11, setErrorPm11] = React.useState(true);
  const [errorPm12, setErrorPm12] = React.useState(true);

  let tQm = 0;
  let tPm = 0;
  let tCa = 0;
  let testCa = 0;

  //calcul des totaux du ca
  let ca1=0,ca2=0,ca3=0,ca4=0,ca5=0,ca6=0,ca7=0,ca8=0,ca9=0, ca10=0, ca11=0, ca12 = 0

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
    switch (name) {
        case 'qm1':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm1(true)
            } else {
            //console.error("Qm1s non valide");
            setErrorQm1(false)
            }
        break;
        case 'qm2':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm2(true)
            } else {
            //console.error("Qm2s non valide");
            setErrorQm2(false)
            }
        break;
        case 'qm3':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm3(true)
            } else {
            //console.error("Qm3s non valide");
            setErrorQm3(false)
            }
        break;
        case 'qm4':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm4(true)
            } else {
            //console.error("Qm4s non valide");
            setErrorQm4(false)
            }
        break;
        case 'qm5':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm5(true)
            } else {
            //console.error("Qm5s non valide");
            setErrorQm5(false)
            }
        break;
        case 'qm6':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm6(true)
            } else {
            //console.error("Qm6s non valide");
            setErrorQm6(false)
            }
        break;
        case 'qm7':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm7(true)
            } else {
            //console.error("Qm7s non valide");
            setErrorQm7(false)
            }
        break;
        case 'qm8':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm8(true)
            } else {
            //console.error("Qm8s non valide");
            setErrorQm8(false)
            }
        break;
        case 'qm9':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm9(true)
            } else {
            //console.error("Qm9s non valide");
            setErrorQm9(false)
            }
        break;
        case 'qm10':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm10(true)
            } else {
            //console.error("Qm10s non valide");
            setErrorQm10(false)
            }
        break;
        case 'qm11':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm11(true)
            } else {
            //console.error("Qm11s non valide");
            setErrorQm11(false)
            }
        break;
        case 'qm12':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQm12(true)
            } else {
            //console.error("Qm12s non valide");
            setErrorQm12(false)
            }
        break;
          
        case 'pm1':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm1(true)
            } else {
            //console.error("Pm1s non valide");
            setErrorPm1(false)
            }
        break;
          
        case 'pm2':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm2(true)
            } else {
            //console.error("Pm2s non valide");
            setErrorPm2(false)
            }
        break;
        case 'pm3':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm3(true)
            } else {
            //console.error("Pm3s non valide");
            setErrorPm3(false)
            }
        break;
        case 'pm4':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm4(true)
            } else {
            //console.error("Pm4s non valide");
            setErrorPm4(false)
            }
        break;
        case 'pm5':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm5(true)
            } else {
            //console.error("Pm5s non valide");
            setErrorPm5(false)
            }
        break;
        case 'pm6':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm6(true)
            } else {
            //console.error("Pm6s non valide");
            setErrorPm6(false)
            }
        break;
        case 'pm7':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm7(true)
            } else {
            //console.error("Pm7s non valide");
            setErrorPm7(false)
            }
        break;
        case 'pm8':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm8(true)
            } else {
            //console.error("Pm8s non valide");
            setErrorPm8(false)
            }
        break;
        case 'pm9':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm9(true)
            } else {
            //console.error("Pm9s non valide");
            setErrorPm9(false)
            }
        break;
        case 'pm10':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm10(true)
            } else {
            //console.error("Pm10s non valide");
            setErrorPm10(false)
            }
        break;
        case 'pm11':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm11(true)
            } else {
            //console.error("Pm11s non valide");
            setErrorPm11(false)
            }
        break;
        case 'pm12':
            if (value.match(/^[0-9\b]{3,15}$/)) {
            //console.log("quantites " + value);
            setErrorPm12(true)
            } else {
            //console.error("Pm12s non valide");
            setErrorPm12(false)
            }
        break;

        case 'produits':
            if (value.length >= 3) {
                //console.log("produits" + value);
                setErrorProduits(true)
            } else {
                //console.error("produits non valide "); 
                setErrorProduits(false)
            }
        break;
    
      default:
        break;
    }
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
      .collection("prevision-annne1")
      .doc(idDoc)
      .set(
        {
          produits: editTable.produits,
          qm1: editTable.qm1,
          qm2: editTable.qm2,
          qm3: editTable.qm3,
          qm4: editTable.qm4,
          qm5: editTable.qm5,
          qm6: editTable.qm6,
          qm7: editTable.qm7,
          qm8: editTable.qm8,
          qm9: editTable.qm9,
          qm10: editTable.qm10,
          qm11: editTable.qm11,
          qm12: editTable.qm12,
          pm1: editTable.pm1,
          pm2: editTable.pm2,
          pm3: editTable.pm3,
          pm4: editTable.pm4,
          pm5: editTable.pm5,
          pm6: editTable.pm6,
          pm7: editTable.pm7,
          pm8: editTable.pm8,
          pm9: editTable.pm9,
          pm10: editTable.pm10,
          pm11: editTable.pm11,
          pm12: editTable.pm12,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          produits:"",
          quantite:"",
          prix:"",
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
      .collection("prevision-annne1")
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
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [0];
        let tabQte = [];
        let tabPrix = [];
        let tabCa = [];
        let tabCax = [];
        data.forEach((doc) => {
          let som = 0;
          dat.push({
            produits: doc.data().produits,
            qm1: doc.data().qm1,
            qm2: doc.data().qm2,
            qm3: doc.data().qm3,
            qm4: doc.data().qm4,
            qm5: doc.data().qm5,
            qm6: doc.data().qm6,
            qm7: doc.data().qm7,
            qm8: doc.data().qm8,
            qm9: doc.data().qm9,
            qm10: doc.data().qm10,
            qm11: doc.data().qm11,
            qm12: doc.data().qm12,
            pm1: doc.data().pm1,
            pm2: doc.data().pm2,
            pm3: doc.data().pm3,
            pm4: doc.data().pm4,
            pm5: doc.data().pm5,
            pm6: doc.data().pm6,
            pm7: doc.data().pm7,
            pm8: doc.data().pm8,
            pm9: doc.data().pm9,
            pm10: doc.data().pm10,
            pm11: doc.data().pm11,
            pm12: doc.data().pm12,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tabQte.push(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))
          tabPrix.push(Number(doc.data().pm1)+Number(doc.data().pm2)+Number(doc.data().pm3)+Number(doc.data().pm4)+Number(doc.data().pm5)+Number(doc.data().pm6)+Number(doc.data().pm7)+Number(doc.data().pm8)+Number(doc.data().pm9)+Number(doc.data().pm10)+Number(doc.data().pm11)+Number(doc.data().pm12))
          
          ca1+=(Number(doc.data().qm1)*Number(doc.data().pm1))
          ca2+=(Number(doc.data().qm2)*Number(doc.data().pm2))
          ca3+=(Number(doc.data().qm3)*Number(doc.data().pm3))
          ca4+=(Number(doc.data().qm4)*Number(doc.data().pm4))
          ca5+=(Number(doc.data().qm5)*Number(doc.data().pm5))
          ca6+=(Number(doc.data().qm6)*Number(doc.data().pm6))
          ca7+=(Number(doc.data().qm7)*Number(doc.data().pm7))
          ca8+=(Number(doc.data().qm8)*Number(doc.data().pm8))
          ca9+=(Number(doc.data().qm9)*Number(doc.data().pm9))
          ca10+=(Number(doc.data().qm10)*Number(doc.data().pm10))
          ca11+=(Number(doc.data().qm11)*Number(doc.data().pm11))
          ca12+=(Number(doc.data().qm12)*Number(doc.data().pm12))

          som = (Number(doc.data().qm1)*Number(doc.data().pm1)) + (Number(doc.data().qm2)*Number(doc.data().pm2)) + (Number(doc.data().qm3)*Number(doc.data().pm3)) + (Number(doc.data().qm4)*Number(doc.data().pm4)) + (Number(doc.data().qm5)*Number(doc.data().pm5)) + (Number(doc.data().qm6)*Number(doc.data().pm6)) + (Number(doc.data().qm7)*Number(doc.data().pm7)) + (Number(doc.data().qm8)*Number(doc.data().pm8)) + (Number(doc.data().qm9)*Number(doc.data().pm9)) + (Number(doc.data().qm10)*Number(doc.data().pm10)) + (Number(doc.data().qm11)*Number(doc.data().pm11)) + (Number(doc.data().qm12)*Number(doc.data().pm12));
          testCa = testCa + (Number(doc.data().quantite))*Number(doc.data().prix)
          tabCa.push(som)
        });
        // total ca affectation
        setTCa1(ca1)
        setTCa2(ca2)
        setTCa3(ca3)
        setTCa4(ca4)
        setTCa5(ca5)
        setTCa6(ca6)
        setTCa7(ca7)
        setTCa8(ca8)
        setTCa9(ca9)
        setTCa10(ca10)
        setTCa11(ca11)
        setTCa12(ca12)

        setTotalQm(tabQte)
        setTotalPm(tabPrix)
        setTotalCa(tabCa)
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setTotalCat(tCa)
        dat.shift()
        setPrevision(dat);
        //console.table(prevision)
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    produits: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    pm1: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm2: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm3: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm4: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm5: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm6: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm7: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm8: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm9: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm10: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm11: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    pm12: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    qm1: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm2: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm3: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm4: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm5: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm6: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm7: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm8: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm9: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm10: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm11: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
    qm12: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire"),
})
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("prevision-annne1")
      .add({
        produits: values.produits,
        qm1: values.qm1,
        qm2: values.qm2,
        qm3: values.qm3,
        qm4: values.qm4,
        qm5: values.qm5,
        qm6: values.qm6,
        qm7: values.qm7,
        qm8: values.qm8,
        qm9: values.qm9,
        qm10: values.qm10,
        qm11: values.qm11,
        qm12: values.qm12,
        pm1: values.pm1,
        pm2: values.pm2,
        pm3: values.pm3,
        pm4: values.pm4,
        pm5: values.pm5,
        pm6: values.pm6,
        pm7: values.pm7,
        pm8: values.pm8,
        pm9: values.pm9,
        pm10: values.pm10,
        pm11: values.pm11,
        pm12: values.pm12,
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
                <caption style={{color: 'black', fontSize:30}}>prevision Premiere Annee</caption>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan="2"></TableCell>
                    <StyledTableCell colSpan="13" style={{ maxWidth: 300}}>Annéé 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Produits</TableCell>
                        <TableCell>Elements</TableCell>
                        <TableCell>Mois 1</TableCell>
                        <TableCell>Mois 2</TableCell>
                        <TableCell>Mois 3</TableCell>
                        <TableCell>Mois 4</TableCell>
                        <TableCell>Mois 5</TableCell>
                        <TableCell>Mois 6</TableCell>
                        <TableCell>Mois 7</TableCell>
                        <TableCell>Mois 8</TableCell>
                        <TableCell>Mois 9</TableCell>
                        <TableCell>Mois 10</TableCell>
                        <TableCell>Mois 11</TableCell>
                        <TableCell>Mois 12</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                  {prevision.map((item, index) => {
                      return (
                          <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell rowSpan ="4">{item.produits}</TableCell>
                              
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Quantité</TableCell>
                            <TableCell>{item.qm1}</TableCell>
                            <TableCell>{item.qm2}</TableCell>
                            <TableCell>{item.qm3}</TableCell>
                            <TableCell>{item.qm4}</TableCell>
                            <TableCell>{item.qm5}</TableCell>
                            <TableCell>{item.qm6}</TableCell>
                            <TableCell>{item.qm7}</TableCell>
                            <TableCell>{item.qm8}</TableCell>
                            <TableCell>{item.qm9}</TableCell>
                            <TableCell>{item.qm10}</TableCell>
                            <TableCell>{item.qm11}</TableCell>
                            <TableCell>{item.qm12}</TableCell>
                            <TableCell>{totalQm[index]} - {index} FCFA </TableCell>
                            <TableCell rowSpan="3">
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
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Prix unitaire</TableCell>
                            <TableCell>{item.pm1}</TableCell>
                            <TableCell>{item.pm2}</TableCell>
                            <TableCell>{item.pm3}</TableCell>
                            <TableCell>{item.pm4}</TableCell>
                            <TableCell>{item.pm5}</TableCell>
                            <TableCell>{item.pm6}</TableCell>
                            <TableCell>{item.pm7}</TableCell>
                            <TableCell>{item.pm8}</TableCell>
                            <TableCell>{item.pm9}</TableCell>
                            <TableCell>{item.pm10}</TableCell>
                            <TableCell>{item.pm11}</TableCell>
                            <TableCell>{item.pm12}</TableCell>
                            <TableCell>{totalPm[index]} - {index} FCFA</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Chiffre d'affaire</TableCell>
                            <TableCell>{item.pm1*item.qm1}</TableCell>
                            <TableCell>{item.pm2*item.qm2}</TableCell>
                            <TableCell>{item.pm3*item.qm3}</TableCell>
                            <TableCell>{item.pm4*item.qm4}</TableCell>
                            <TableCell>{item.pm5*item.qm5}</TableCell>
                            <TableCell>{item.pm6*item.qm6}</TableCell>
                            <TableCell>{item.pm7*item.qm7}</TableCell>
                            <TableCell>{item.pm8*item.qm8}</TableCell>
                            <TableCell>{item.pm9*item.qm9}</TableCell>
                            <TableCell>{item.pm10*item.qm10}</TableCell>
                            <TableCell>{item.pm11*item.qm11}</TableCell>
                            <TableCell>{item.pm12*item.qm12}</TableCell>
                            <TableCell>{ totalCa[index]} FCFA</TableCell>
                        </TableRow>
                      </>
                      );
                    })}
                      <TableRow hover role="checkbox">
                          <TableCell colSpan="2" style={{color: 'black', fontSize:18}}>Total chiffres d'affaires</TableCell>
                          <TableCell>{tCa1}</TableCell>
                          <TableCell>{tCa2}</TableCell>
                          <TableCell>{tCa3}</TableCell>
                          <TableCell>{tCa4}</TableCell>
                          <TableCell>{tCa5}</TableCell>
                          <TableCell>{tCa6}</TableCell>
                          <TableCell>{tCa7}</TableCell>
                          <TableCell>{tCa8}</TableCell>
                          <TableCell>{tCa9}</TableCell>
                          <TableCell>{tCa10}</TableCell>
                          <TableCell>{tCa11}</TableCell>
                          <TableCell>{tCa12}</TableCell>
                          <TableCell colSpan="2" style={{color: 'black', fontSize:20}}>{totalCat} FCFA</TableCell>
                      </TableRow>
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
                    <TableCell colSpan="2"></TableCell>
                    <StyledTableCell colSpan="13" style={{ maxWidth: 300}}>Annéé 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Produits</TableCell>
                        <TableCell>Elements</TableCell>
                        <TableCell>Mois 1</TableCell>
                        <TableCell>Mois 2</TableCell>
                        <TableCell>Mois 3</TableCell>
                        <TableCell>Mois 4</TableCell>
                        <TableCell>Mois 5</TableCell>
                        <TableCell>Mois 6</TableCell>
                        <TableCell>Mois 7</TableCell>
                        <TableCell>Mois 8</TableCell>
                        <TableCell>Mois 9</TableCell>
                        <TableCell>Mois 10</TableCell>
                        <TableCell>Mois 11</TableCell>
                        <TableCell>Mois 12</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            
                        <TableCell rowSpan="4">produit 1</TableCell>
                            
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Quantité</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Prix</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Chiffre d'affaire</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell colSpan="2" style={{color: 'black', fontSize:15}}>Total chiffres d'affaires</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell style={{color: 'black', fontSize:30}}>..... FCFA</TableCell>
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
                  id="produits"
                  label="produits"
                  name="produits"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.produits}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorProduits? false: true}
                  helperText={!errorProduits? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm1"
                  label="Prix mois 1"
                  name="pm1"
                  autoComplete="pm1"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm1}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm1? false: true}
                  helperText={!errorPm1? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm2"
                  label="Prix mois 2"
                  name="pm2"
                  autoComplete="pm2"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm2}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm2? false: true}
                  helperText={!errorPm2? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm3"
                  label="Prix mois 3"
                  name="pm3"
                  autoComplete="pm3"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm3}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm3? false: true}
                  helperText={!errorPm3? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm4"
                  label="Prix mois 4"
                  name="pm4"
                  autoComplete="pm4"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm4}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm4? false: true}
                  helperText={!errorPm4? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm5"
                  label="Prix mois 5"
                  name="pm5"
                  autoComplete="pm5"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm5}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm5? false: true}
                  helperText={!errorPm5? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm6"
                  label="Prix mois 6"
                  name="pm6"
                  autoComplete="pm6"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm6}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm6? false: true}
                  helperText={!errorPm6? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm7"
                  label="Prix mois 7"
                  name="pm7"
                  autoComplete="pm7"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm7}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm7? false: true}
                  helperText={!errorPm7? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm8"
                  label="Prix mois 8"
                  name="pm8"
                  autoComplete="pm8"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm8}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm8? false: true}
                  helperText={!errorPm8? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm9"
                  label="Prix mois 9"
                  name="pm9"
                  autoComplete="pm9"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm9}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm9? false: true}
                  helperText={!errorPm9? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm10"
                  label="Prix mois 10"
                  name="pm10"
                  autoComplete="pm10"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm10}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm10? false: true}
                  helperText={!errorPm10? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm11"
                  label="Prix mois 11"
                  name="pm11"
                  autoComplete="pm11"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm11}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm11? false: true}
                  helperText={!errorPm11? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm12"
                  label="Prix mois 12"
                  name="pm12"
                  autoComplete="pm12"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.pm12}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPm12? false: true}
                  helperText={!errorPm12? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm1"
                  label="Quantité mois 1"
                  name="qm1"
                  autoComplete="qm1"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm1}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm1? false: true}
                  helperText={!errorQm1? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm2"
                  label="Quantité mois 2"
                  name="qm2"
                  autoComplete="qm2"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm2}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm2? false: true}
                  helperText={!errorQm2? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm3"
                  label="Quantité mois 3"
                  name="qm3"
                  autoComplete="qm3"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm3}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm3? false: true}
                  helperText={!errorQm3? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm4"
                  label="Quantité mois 4"
                  name="qm4"
                  autoComplete="qm4"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm4}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm4? false: true}
                  helperText={!errorQm4? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm5"
                  label="Quantité mois 5"
                  name="qm5"
                  autoComplete="qm5"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm5}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm5? false: true}
                  helperText={!errorQm5? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm6"
                  label="Quantité mois 6"
                  name="qm6"
                  autoComplete="qm6"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm6}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm6? false: true}
                  helperText={!errorQm6? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm7"
                  label="Quantité mois 7"
                  name="qm7"
                  autoComplete="qm7"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm7}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm7? false: true}
                  helperText={!errorQm7? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm8"
                  label="Quantité mois 8"
                  name="qm8"
                  autoComplete="qm8"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm8}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm8? false: true}
                  helperText={!errorQm8? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm9"
                  label="Quantité mois 9"
                  name="qm9"
                  autoComplete="qm9"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm9}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm9? false: true}
                  helperText={!errorQm9? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm10"
                  label="Quantité mois 10"
                  name="qm10"
                  autoComplete="qm10"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm10}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm10? false: true}
                  helperText={!errorQm10? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm11"
                  label="Quantité mois 11"
                  name="qm11"
                  autoComplete="qm11"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm11}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm11? false: true}
                  helperText={!errorQm11? 'Entrer une quantité valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm12"
                  label="Quantité mois 12"
                  name="qm12"
                  autoComplete="qm12"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.qm12}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQm12? false: true}
                  helperText={!errorQm12? 'Entrer une quantité valide':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={(errorProduits|| errorQm1 || errorQm2 || errorQm3) ? false: true}

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
               <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}
            
          >
            {(props) => (
              <Form>
                <div className="input">
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="produits"
                    label="produits"
                    name="produits"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="produits" />}
                    error={props.errors.produits&&props.touched.produits}
                  />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm1"
                  label="Prix mois 1"
                  name="pm1"
                  autoComplete="pm1"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm1" />}
                  error={props.errors.pm1&&props.touched.pm1}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm2"
                  label="Prix mois 2"
                  name="pm2"
                  autoComplete="pm2"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm2" />}
                  error={props.errors.pm2&&props.touched.pm2}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm3"
                  label="Prix mois 3"
                  name="pm3"
                  autoComplete="pm3"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm3" />}
                  error={props.errors.pm3&&props.touched.pm3}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm4"
                  label="Prix mois 4"
                  name="pm4"
                  autoComplete="pm4"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm4" />}
                  error={props.errors.pm4&&props.touched.pm4}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm5"
                  label="Prix mois 5"
                  name="pm5"
                  autoComplete="pm5"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm5" />}
                  error={props.errors.pm5&&props.touched.pm5}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm6"
                  label="Prix mois 6"
                  name="pm6"
                  autoComplete="pm6"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm6" />}
                  error={props.errors.pm6&&props.touched.pm6}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm7"
                  label="Prix mois 7"
                  name="pm7"
                  autoComplete="pm7"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm7" />}
                  error={props.errors.pm7&&props.touched.pm7}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm8"
                  label="Prix mois 8"
                  name="pm8"
                  autoComplete="pm8"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm8" />}
                  error={props.errors.pm8&&props.touched.pm8}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm9"
                  label="Prix mois 9"
                  name="pm9"
                  autoComplete="pm9"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm9" />}
                  error={props.errors.pm9&&props.touched.pm9}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm10"
                  label="Prix mois 10"
                  name="pm10"
                  autoComplete="pm10"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm10" />}
                  error={props.errors.pm10&&props.touched.pm10}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm11"
                  label="Prix mois 11"
                  name="pm11"
                  autoComplete="pm11"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm11" />}
                  error={props.errors.pm11&&props.touched.pm11}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="pm12"
                  label="Prix mois 12"
                  name="pm12"
                  autoComplete="pm12"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  helperText={<ErrorMessage name="pm12" />}
                  error={props.errors.pm12&&props.touched.pm12}
                />
                <Field as={TextField}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="qm1"
                  label="Quantité mois 1"
                  name="qm1"
                  autoComplete="qm1"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm1" />}
                  error={props.errors.qm1&&props.touched.qm1}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm2"
                  label="Quantité mois 2"
                  name="qm2"
                  autoComplete="qm2"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm2" />}
                  error={props.errors.qm2&&props.touched.qm2}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm3"
                  label="Quantité mois 3"
                  name="qm3"
                  autoComplete="qm3"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm3" />}
                  error={props.errors.qm3&&props.touched.qm3}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm4"
                  label="Quantité mois 4"
                  name="qm4"
                  autoComplete="qm4"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm4" />}
                  error={props.errors.qm4&&props.touched.qm4}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm5"
                  label="Quantité mois 5"
                  name="qm5"
                  autoComplete="qm5"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm5" />}
                  error={props.errors.qm5&&props.touched.qm5}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm6"
                  label="Quantité mois 6"
                  name="qm6"
                  autoComplete="qm6"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm6" />}
                  error={props.errors.qm6&&props.touched.qm6}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm7"
                  label="Quantité mois 7"
                  name="qm7"
                  autoComplete="qm7"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm7" />}
                  error={props.errors.qm7&&props.touched.qm7}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm8"
                  label="Quantité mois 8"
                  name="qm8"
                  autoComplete="qm8"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm8" />}
                  error={props.errors.qm8&&props.touched.qm8}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm9"
                  label="Quantité mois 9"
                  name="qm9"
                  autoComplete="qm9"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm9" />}
                  error={props.errors.qm9&&props.touched.qm9}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm10"
                  label="Quantité mois 10"
                  name="qm10"
                  autoComplete="qm10"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm10" />}
                  error={props.errors.qm10&&props.touched.qm10}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm11"
                  label="Quantité mois 11"
                  name="qm11"
                  autoComplete="qm11"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm11" />}
                  error={props.errors.qm11&&props.touched.qm11}
                />
                <Field as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="qm12"
                  label="Quantité mois 12"
                  name="qm12"
                  autoComplete="qm12"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  style={{ width: 200, margin: 30 }}
                  helperText={<ErrorMessage name="qm12" />}
                  error={props.errors.qm12&&props.touched.qm12}
                />
                
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.qm1 || props.errors.qm2 || props.errors.prix || props.errors.produits ? true: false}
                    
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

export default Chapitrefourp
