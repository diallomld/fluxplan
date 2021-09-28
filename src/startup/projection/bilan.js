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

const Chapitreonze = () => {
  const initialvalues = {
    capitala1: 0,
    capitala2: 0,
    capitala3: 0,
    reservea1: 0,
    reservea2: 0,
    reservea3: 0,
    rapporta1: 0,
    rapporta2: 0,
    rapporta3: 0,
    resultata1: 0,
    resultata2: 0,
    resultata3: 0,
    subventiona1: 0,
    subventiona2: 0,
    subventiona3: 0,
    emprunta1: 0,
    emprunta2: 0,
    emprunta3: 0,
    provisiona1: 0,
    provisiona2: 0,
    provisiona3: 0,
    dettea1: 0,
    dettea2: 0,
    dettea3: 0,
    personnela1: 0,
    personnela2: 0,
    personnela3: 0,
    organismea1: 0,
    organismea2: 0,
    organismea3: 0,
    etata1: 0,
    etata2: 0,
    etata3: 0,
    detteba1: 0,
    detteba2: 0,
    detteba3: 0,
  };
  const editObject = {
    incorpbruta1: 0,
    incorpamorta1: 0,
    incorpbruta2: 0,
    incorpamorta2: 0,
    incorpbruta3: 0,
    incorpamorta3: 0,
    terrainsbruta1: 0,
    terrainsamorta1: 0,
    terrainsbruta2: 0,
    terrainsamorta2: 0,
    terrainsbruta3: 0,
    terrainsamorta3: 0,
    batimentsbruta1: 0,
    batimentsamorta1: 0,
    batimentsbruta2: 0,
    batimentsamorta2: 0,
    batimentsbruta3: 0,
    batimentsamorta3: 0,
    materielbruta1: 0,
    materielamorta1: 0,
    materielbruta2: 0,
    materielamorta2: 0,
    materielbruta3: 0,
    materielamorta3: 0,
    avancebruta1: 0,
    avanceamorta1: 0,
    avancebruta2: 0,
    avanceamorta2: 0,
    avancebruta3: 0,
    avanceamorta3: 0,
    financebruta1: 0,
    financeamorta1: 0,
    financebruta2: 0,
    financeamorta2: 0,
    financebruta3: 0,
    financeamorta3: 0,
    stockbruta1: 0,
    stockamorta1: 0,
    stockbruta2: 0,
    stockamorta2: 0,
    stockbruta3: 0,
    stockamorta3: 0,
    creancebruta1: 0,
    creanceamorta1: 0,
    creancebruta2: 0,
    creanceamorta2: 0,
    creancebruta3: 0,
    creanceamorta3: 0,
    banquebruta1: 0,
    banqueamorta1: 0,
    banquebruta2: 0,
    banqueamorta2: 0,
    banquebruta3: 0,
    banqueamorta3: 0,
    caissebruta1: 0,
    caisseamorta1: 0,
    caissebruta2: 0,
    caisseamorta2: 0,
    caissebruta3: 0,
    caisseamorta3: 0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [bilan, setBilan] = React.useState([]);
  const [passif, setPassif] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [idDoc2, setIdDoc2] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [load2, setLoad2] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [credential, setCredential] = React.useState(initialvalues);

  const [icbruta1, seticbruta1] = React.useState(0);
  const [icamorta1, seticamorta1] = React.useState(0);
  const [icbruta2, seticbruta2] = React.useState(0);
  const [icamorta2, seticamorta2] = React.useState(0);
  const [icbruta3, seticbruta3] = React.useState(0);
  const [icamorta3, seticamorta3] = React.useState(0);

  const [icneta1, seticneta1] = React.useState(0);
  const [icneta2, seticneta2] = React.useState(0);
  const [icneta3, seticneta3] = React.useState(0);

  const [acbruta1, setAcbruta1] = React.useState(0)
  const [acamorta1, setAcamorta1] = React.useState(0)
  const [acbruta2, setAcbruta2] = React.useState(0)
  const [acamorta2, setAcamorta2] = React.useState(0)
  const [acbruta3, setAcbruta3] = React.useState(0)
  const [acamorta3, setAcamorta3] = React.useState(0)

  const [acneta1, setAcneta1] = React.useState(0)
  const [acneta2, setAcneta2] = React.useState(0)
  const [acneta3, setAcneta3] = React.useState(0)
  
  const [tabruta1, setTabruta1] = React.useState(0)
  const [taamorta1, setTaamorta1] = React.useState(0)
  const [tabruta2, setTabruta2] = React.useState(0)
  const [taamorta2, setTaamorta2] = React.useState(0)
  const [tabruta3, setTabruta3] = React.useState(0)
  const [taamorta3, setTaamorta3] = React.useState(0)

  const [taneta1, setTaneta1] = React.useState(0)
  const [taneta2, setTaneta2] = React.useState(0)
  const [taneta3, setTaneta3] = React.useState(0)

  const [aibruta1, setAibruta1] = React.useState(0)
  const [aiamorta1, setAiamorta1] = React.useState(0)
  const [aineta1, setAineta1] = React.useState(0)
  const [aibruta2, setAibruta2] = React.useState(0)
  const [aiamorta2, setAiamorta2] = React.useState(0)
  const [aineta2, setAineta2] = React.useState(0)
  const [aibruta3, setAibruta3] = React.useState(0)
  const [aiamorta3, setAiamorta3] = React.useState(0)
  const [aineta3, setAineta3] = React.useState(0)
  
  const [totalbruta1, settotalbruta1] = React.useState(0)
  const [totalamorta1, settotalamorta1] = React.useState(0)
  const [totalneta1, settotalneta1] = React.useState(0)
  const [totalbruta2, settotalbruta2] = React.useState(0)
  const [totalamorta2, settotalamorta2] = React.useState(0)
  const [totalneta2, settotalneta2] = React.useState(0)
  const [totalbruta3, settotalbruta3] = React.useState(0)
  const [totalamorta3, settotalamorta3] = React.useState(0)
  const [totalneta3, settotalneta3] = React.useState(0)

  const [rsa1,setRsa1] = React.useState()
  const [rsa2,setRsa2] = React.useState()
  const [rsa3,setRsa3] = React.useState()

  const [pca1,setPca1] = React.useState()
  const [pca2,setPca2] = React.useState()
  const [pca3,setPca3] = React.useState()

  const [tpa1,setTpa1] = React.useState()
  const [tpa2,setTpa2] = React.useState()
  const [tpa3,setTpa3] = React.useState()

  const [totalpassifa1,setTotalpassifa1] = React.useState()
  const [totalpassifa2,setTotalpassifa2] = React.useState()
  const [totalpassifa3,setTotalpassifa3] = React.useState()



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
    setCredential({
      ...credential,
      [name]: value,
    });
  };
  const handleModif = (id,index) => {
    setEditTable(bilan[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const handleModif2 = (id,index) => {
    setCredential(passif[index])
    setShow2(!show2);
    console.log("edit handle")
    if(show2){
      setIdDoc2("");
    }else{
      setIdDoc2(id);
    }
  };
  const editPassif = (e) => {
    e.preventDefault();
    setLoad2(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("bilan-passif")
      .doc(idDoc2)
      .set(
        {
          capitala1: credential.capitala1,
          capitala2: credential.capitala2,
          capitala3: credential.capitala3,
          reservea1: credential.reservea1,
          reservea2: credential.reservea2,
          reservea3: credential.reservea3,
          rapporta1: credential.rapporta1,
          rapporta2: credential.rapporta2,
          rapporta3: credential.rapporta3,
          resultata1: credential.resultata1,
          resultata2: credential.resultata2,
          resultata3: credential.resultata3,
          subventiona1: credential.subventiona1,
          subventiona2: credential.subventiona2,
          subventiona3: credential.subventiona3,
          emprunta1: credential.emprunta1,
          emprunta2: credential.emprunta2,
          emprunta3: credential.emprunta3,
          provisiona1: credential.provisiona1,
          provisiona2: credential.provisiona2,
          provisiona3: credential.provisiona3,
          dettea1: credential.dettea1,
          dettea2: credential.dettea2,
          dettea3: credential.dettea3,
          personnela1: credential.personnela1,
          personnela2: credential.personnela2,
          personnela3: credential.personnela3,
          organismea1: credential.organismea1,
          organismea2: credential.organismea2,
          organismea3: credential.organismea3,
          etata1: credential.etata1,
          etata2: credential.etata2,
          etata3: credential.etata3,
          detteba1: credential.detteba1,
          detteba2: credential.detteba2,
          detteba3: credential.detteba3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        setLoad2(false)
        setCredential({
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle2(!toggle2);
    setIdDoc2("");
  };
  const editBilan = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("bilan-previsionnel")
      .doc(idDoc)
      .set(
        {
        incorpbruta1: editTable.incorpbruta1,
        incorpamorta1: editTable.incorpamorta1,
        incorpbruta2: editTable.incorpbruta2,
        incorpamorta2: editTable.incorpamorta2,
        incorpbruta3: editTable.incorpbruta3,
        incorpamorta3: editTable.incorpamorta3,
        terrainsbruta1: editTable.terrainsbruta1,
        terrainsamorta1: editTable.terrainsamorta1,
        terrainsbruta2: editTable.terrainsbruta2,
        terrainsamorta2: editTable.terrainsamorta2,
        terrainsbruta3: editTable.terrainsbruta3,
        terrainsamorta3: editTable.terrainsamorta3,
        batimentsbruta1: editTable.batimentsbruta1,
        batimentsamorta1: editTable.batimentsamorta1,
        batimentsbruta2: editTable.batimentsbruta2,
        batimentsamorta2: editTable.batimentsamorta2,
        batimentsbruta3: editTable.batimentsbruta3,
        batimentsamorta3: editTable.batimentsamorta3,
        materielbruta1: editTable.materielbruta1,
        materielamorta1: editTable.materielamorta1,
        materielbruta2: editTable.materielbruta2,
        materielamorta2: editTable.materielamorta2,
        materielbruta3: editTable.materielbruta3,
        materielamorta3: editTable.materielamorta3,
        avancebruta1: editTable.avancebruta1,
        avanceamorta1: editTable.avanceamorta1,
        avancebruta2: editTable.avancebruta2,
        avanceamorta2: editTable.avanceamorta2,
        avancebruta3: editTable.avancebruta3,
        avanceamorta3: editTable.avanceamorta3,
        financebruta1: editTable.financebruta1,
        financeamorta1: editTable.financeamorta1,
        financebruta2: editTable.financebruta2,
        financeamorta2: editTable.financeamorta2,
        financebruta3: editTable.financebruta3,
        financeamorta3: editTable.financeamorta3,
        stockbruta1: editTable.stockbruta1,
        stockamorta1: editTable.stockamorta1,
        stockbruta2: editTable.stockbruta2,
        stockamorta2: editTable.stockamorta2,
        stockbruta3: editTable.stockbruta3,
        stockamorta3: editTable.stockamorta3,
        creancebruta1: editTable.creancebruta1,
        creanceamorta1: editTable.creanceamorta1,
        creancebruta2: editTable.creancebruta2,
        creanceamorta2: editTable.creanceamorta2,
        creancebruta3: editTable.creancebruta3,
        creanceamorta3: editTable.creanceamorta3,
        banquebruta1: editTable.banquebruta1,
        banqueamorta1: editTable.banqueamorta1,
        banquebruta2: editTable.banquebruta2,
        banqueamorta2: editTable.banqueamorta2,
        banquebruta3: editTable.banquebruta3,
        banqueamorta3: editTable.banqueamorta3,
        caissebruta1: editTable.caissebruta1,
        caisseamorta1: editTable.caisseamorta1,
        caissebruta2: editTable.caissebruta2,
        caisseamorta2: editTable.caisseamorta2,
        caissebruta3: editTable.caissebruta3,
        caisseamorta3: editTable.caisseamorta3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        setLoad(false)
        setEditTable({
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePassif = (id) => {
    setLoad2(true)
    firebasee
      .firestore()
      .collection("bilan-passif")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted")
        setLoad2(false)
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle2(!toggle2);
  };
  const deletePrevision = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("bilan-previsionnel")
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
  const getDate2 = () => {
    setLoad2(true)
    return firebasee
      .firestore()
      .collection("bilan-passif")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          
          // total ressources stables passif
          let trsa1 = 0
          let trsa2 = 0
          let trsa3 = 0
          
          // total passif circulant
          let tpca1 = 0
          let tpca2 = 0
          let tpca3 = 0

          // total tresorerie passif
          let ttpa1 = 0
          let ttpa2 = 0
          let ttpa3 = 0

          //total passif
          let tpassifa1 = 0
          let tpassifa2 = 0
          let tpassifa3 = 0

          trsa1 = Number(doc.data().capitala1)+Number(doc.data().reservea1)+Number(doc.data().rapporta1)+Number(doc.data().resultata1)+Number(doc.data().subventiona1)+Number(doc.data().emprunta1)+Number(doc.data().provisiona1)
          trsa2 = Number(doc.data().capitala2)+Number(doc.data().reservea2)+Number(doc.data().rapporta2)+Number(doc.data().resultata2)+Number(doc.data().subventiona2)+Number(doc.data().emprunta2)+Number(doc.data().provisiona2)
          trsa3 = Number(doc.data().capitala3)+Number(doc.data().reservea3)+Number(doc.data().rapporta3)+Number(doc.data().resultata3)+Number(doc.data().subventiona3)+Number(doc.data().emprunta3)+Number(doc.data().provisiona3)
          setRsa1(trsa1)
          setRsa2(trsa2)
          setRsa3(trsa3)

          tpca1 = Number(doc.data().dettea1)+Number(doc.data().personnela1)+Number(doc.data().organismea1)+Number(doc.data().etata1)
          tpca2 = Number(doc.data().dettea2)+Number(doc.data().personnela2)+Number(doc.data().organismea2)+Number(doc.data().etata2)
          tpca3 = Number(doc.data().dettea3)+Number(doc.data().personnela3)+Number(doc.data().organismea3)+Number(doc.data().etata3)
          setPca1(tpca1)
          setPca2(tpca2)
          setPca3(tpca3)
          
          ttpa1 = Number(doc.data().detteba1)
          ttpa2 = Number(doc.data().detteba2)
          ttpa3 = Number(doc.data().detteba3)
          setTpa1(ttpa1)
          setTpa2(ttpa2)
          setTpa3(ttpa3)

          tpassifa1 = trsa1+tpca1+ttpa1
          tpassifa2 = trsa2+tpca2+ttpa2
          tpassifa3 = trsa3+tpca3+ttpa3

          setTotalpassifa1(tpassifa1)
          setTotalpassifa2(tpassifa2)
          setTotalpassifa3(tpassifa3)

          dat.push({
            capitala1: doc.data().capitala1,
            capitala2: doc.data().capitala2,
            capitala3: doc.data().capitala3,
            reservea1: doc.data().reservea1,
            reservea2: doc.data().reservea2,
            reservea3: doc.data().reservea3,
            rapporta1: doc.data().rapporta1,
            rapporta2: doc.data().rapporta2,
            rapporta3: doc.data().rapporta3,
            resultata1: doc.data().resultata1,
            resultata2: doc.data().resultata2,
            resultata3: doc.data().resultata3,
            subventiona1: doc.data().subventiona1,
            subventiona2: doc.data().subventiona2,
            subventiona3: doc.data().subventiona3,
            emprunta1: doc.data().emprunta1,
            emprunta2: doc.data().emprunta2,
            emprunta3: doc.data().emprunta3,
            provisiona1: doc.data().provisiona1,
            provisiona2: doc.data().provisiona2,
            provisiona3: doc.data().provisiona3,
            dettea1: doc.data().dettea1,
            dettea2: doc.data().dettea2,
            dettea3: doc.data().dettea3,
            personnela1: doc.data().personnela1,
            personnela2: doc.data().personnela2,
            personnela3: doc.data().personnela3,
            organismea1: doc.data().organismea1,
            organismea2: doc.data().organismea2,
            organismea3: doc.data().organismea3,
            etata1: doc.data().etata1,
            etata2: doc.data().etata2,
            etata3: doc.data().etata3,
            detteba1: doc.data().detteba1,
            detteba2: doc.data().detteba2,
            detteba3: doc.data().detteba3,
            docIdd: doc.id,
          });
        
        });
        setPassif(dat);
        setLoad2(false)
      })
      .catch((err) => console.log(err));
  };
  const getDate = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("bilan-previsionnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
            let tbrutica1 = 0
            let tamortica1 = 0
            let tbrutica2 = 0
            let tamortica2 = 0
            let tbrutica3 = 0
            let tamortica3 = 0

            let ticneta1=0
            let ticneta2=0
            let ticneta3=0

            // total  circulant
            let tacbruta1 = 0
            let tacamorta1 = 0
            let tacbruta2 = 0
            let tacamorta2 = 0
            let tacbruta3 = 0
            let tacamorta3 = 0
            //total net actif circulant
            let tacneta1 = 0
            let tacneta2 = 0
            let tacneta3 = 0
            // total  tresorerie actif
            let ttabruta1 = 0
            let ttaamorta1 = 0
            let ttabruta2 = 0
            let ttaamorta2 = 0
            let ttabruta3 = 0
            let ttaamorta3 = 0
            //total net tresorerie actif
            let ttaneta1 = 0
            let ttaneta2 = 0
            let ttaneta3 = 0
            // actif immobilisé
            let taibruta1=0
            let taiamorta1=0
            let taineta1=0 
            let taibruta2=0
            let taiamorta2=0
            let taineta2=0 
            let taibruta3=0
            let taiamorta3=0
            let taineta3=0 

            let netincorpa1 = 0
            let netavancea1 = 0
            let netfinancea1 = 0
            let netincorpa2 = 0
            let netavancea2 = 0
            let netfinancea2 = 0
            let netincorpa3 = 0
            let netavancea3 = 0
            let netfinancea3 = 0

            netincorpa1 = Number(doc.data().incorpbruta1)-Number(doc.data().incorpamorta1)
            netavancea1 = Number(doc.data().avancebruta1)-Number(doc.data().avanceamorta1)
            netfinancea1 = Number(doc.data().financebruta1)-Number(doc.data().financeamorta1)
            netincorpa2 = Number(doc.data().incorpbruta2)-Number(doc.data().incorpamorta2)
            netavancea2 = Number(doc.data().avancebruta2)-Number(doc.data().avanceamorta2)
            netfinancea2 = Number(doc.data().financebruta2)-Number(doc.data().financeamorta2)
            netincorpa3 = Number(doc.data().incorpbruta3)-Number(doc.data().incorpamorta3)
            netavancea3 = Number(doc.data().avancebruta3)-Number(doc.data().avanceamorta3)
            netfinancea3 = Number(doc.data().financebruta3)-Number(doc.data().financeamorta3)
            /** actif circulant debut */
            tacbruta1 = Number(doc.data().stockbruta1)+ Number(doc.data().creancebruta1)
            tacamorta1 = Number(doc.data().stockamorta1)+ Number(doc.data().creanceamorta1)
            tacbruta2 = Number(doc.data().stockbruta2)+ Number(doc.data().creancebruta2)
            tacamorta2 = Number(doc.data().stockamorta2)+ Number(doc.data().creanceamorta2)
            tacbruta3 = Number(doc.data().stockbruta3)+ Number(doc.data().creancebruta3)
            tacamorta3 = Number(doc.data().stockamorta3)+ Number(doc.data().creanceamorta3)

            tacneta1 = (Number(doc.data().stockbruta1)-Number(doc.data().stockamorta1))+(Number(doc.data().creancebruta1)-Number(doc.data().creanceamorta1))
            tacneta2 = (Number(doc.data().stockbruta2)-Number(doc.data().stockamorta2))+(Number(doc.data().creancebruta2)-Number(doc.data().creanceamorta2))
            tacneta3 = (Number(doc.data().stockbruta3)-Number(doc.data().stockamorta3))+(Number(doc.data().creancebruta3)-Number(doc.data().creanceamorta3))

            setAcbruta1(tacbruta1)
            setAcamorta1(tacamorta1)
            setAcbruta2(tacbruta2)
            setAcamorta2(tacamorta2)
            setAcbruta3(tacbruta3)
            setAcamorta3(tacamorta3)

            setAcneta1(tacneta1)
            setAcneta2(tacneta2)
            setAcneta3(tacneta3)
            /** actif circulant fin */
            /** tresoreire actif debut */
            ttabruta1 = Number(doc.data().banquebruta1)+ Number(doc.data().caissebruta1)
            ttaamorta1 = Number(doc.data().banqueamorta1)+ Number(doc.data().caisseamorta1)
            ttabruta2 = Number(doc.data().banquebruta2)+ Number(doc.data().caissebruta2)
            ttaamorta2 = Number(doc.data().banqueamorta2)+ Number(doc.data().caisseamorta2)
            ttabruta3 = Number(doc.data().banquebruta3)+ Number(doc.data().caissebruta3)
            ttaamorta3 = Number(doc.data().banqueamorta3)+ Number(doc.data().caisseamorta3)

            ttaneta1 = (Number(doc.data().banquebruta1)-Number(doc.data().banqueamorta1))+(Number(doc.data().caissebruta1)-Number(doc.data().caisseamorta1))
            ttaneta2 = (Number(doc.data().banquebruta2)-Number(doc.data().banqueamorta2))+(Number(doc.data().caissebruta2)-Number(doc.data().caisseamorta2))
            ttaneta3 = (Number(doc.data().banquebruta3)-Number(doc.data().banqueamorta3))+(Number(doc.data().caissebruta3)-Number(doc.data().caisseamorta3))

            setTabruta1(ttabruta1)
            setTaamorta1(ttaamorta1)
            setTabruta2(ttabruta2)
            setTaamorta2(ttaamorta2)
            setTabruta3(ttabruta3)
            setTaamorta3(ttaamorta3)

            setTaneta1(ttaneta1)
            setTaneta2(ttaneta2)
            setTaneta3(ttaneta3)
            /*t*tresoreire actif fin */

            ticneta1 = (Number(doc.data().terrainsbruta1)-Number(doc.data().terrainsamorta1))+(Number(doc.data().batimentsbruta1)-Number(doc.data().batimentsamorta1))+(Number(doc.data().materielbruta1)-Number(doc.data().materielamorta1))
            ticneta2 = (Number(doc.data().terrainsbruta2)-Number(doc.data().terrainsamorta2))+(Number(doc.data().batimentsbruta2)-Number(doc.data().batimentsamorta2))+(Number(doc.data().materielbruta2)-Number(doc.data().materielamorta2))
            ticneta3 = (Number(doc.data().terrainsbruta3)-Number(doc.data().terrainsamorta3))+(Number(doc.data().batimentsbruta3)-Number(doc.data().batimentsamorta3))+(Number(doc.data().materielbruta3)-Number(doc.data().materielamorta3))

            seticneta1(ticneta1)
            seticneta2(ticneta2)
            seticneta3(ticneta3)

            tbrutica1 = Number(doc.data().terrainsbruta1)+Number(doc.data().batimentsbruta1)+ Number(doc.data().materielbruta1)
            tamortica1 = Number(doc.data().terrainsamorta1)+Number(doc.data().batimentsamorta1)+ Number(doc.data().materielamorta1)
            tbrutica2 = Number(doc.data().terrainsbruta2)+Number(doc.data().batimentsbruta2)+ Number(doc.data().materielbruta2)
            tamortica2 = Number(doc.data().terrainsamorta2)+Number(doc.data().batimentsamorta2)+ Number(doc.data().materielamorta2)
            tbrutica3 = Number(doc.data().terrainsbruta3)+Number(doc.data().batimentsbruta3)+ Number(doc.data().materielbruta3)
            tamortica3 = Number(doc.data().terrainsamorta3)+Number(doc.data().batimentsamorta3)+ Number(doc.data().materielamorta3)
            
            seticbruta1(tbrutica1)
            seticamorta1(tamortica1)
            seticbruta2(tbrutica2)
            seticamorta2(tamortica2)
            seticbruta3(tbrutica3)
            seticamorta3(tamortica3)

            taibruta1 = tbrutica1*2+(Number(doc.data().incorpbruta1))+(Number(doc.data().avancebruta1))+(Number(doc.data().financebruta1))
            taiamorta1 = tamortica1*2+(Number(doc.data().incorpamorta1))+(Number(doc.data().avanceamorta1))+(Number(doc.data().financeamorta1))
            taineta1 = tamortica1*2+netincorpa1+netavancea1+netfinancea1
            taibruta2 = tbrutica2*2+(Number(doc.data().incorpbruta2))+(Number(doc.data().avancebruta2))+(Number(doc.data().financebruta2))
            taiamorta2 = tamortica2*2+(Number(doc.data().incorpamorta2))+(Number(doc.data().avanceamorta2))+(Number(doc.data().financeamorta2))
            taineta2 = tamortica2*2+netincorpa2+netavancea2+netfinancea2
            taibruta3 = tbrutica3*3+(Number(doc.data().incorpbruta3))+(Number(doc.data().avancebruta3))+(Number(doc.data().financebruta3))
            taiamorta3 = tamortica3*3+(Number(doc.data().incorpamorta3))+(Number(doc.data().avanceamorta3))+(Number(doc.data().financeamorta3))
            taineta3 = tamortica3*3+netincorpa3+netavancea3+netfinancea3

            setAibruta1(taibruta1)
            setAiamorta1(taiamorta1)
            setAineta1(taineta1)
            setAibruta2(taibruta2)
            setAiamorta2(taiamorta2)
            setAineta2(taineta2)
            setAibruta3(taibruta3)
            setAiamorta3(taiamorta3)
            setAineta3(taineta3)

            settotalbruta1(taibruta1+tacbruta1+ttabruta1)
            settotalamorta1(taiamorta1+tacamorta1+ttaamorta1)
            settotalneta1(taineta1+tacneta1+ttaneta1)
            settotalbruta2(taibruta2+tacbruta2+ttabruta2)
            settotalamorta2(taiamorta2+tacamorta2+ttaamorta2)
            settotalneta2(taineta2+tacneta2+ttaneta2)
            settotalbruta3(taibruta3+tacbruta3+ttabruta3)
            settotalamorta3(taiamorta3+tacamorta3+ttaamorta3)
            settotalneta3(taineta3+tacneta3+ttaneta3)

          dat.push({
            incorpbruta1: doc.data().incorpbruta1,
            incorpamorta1: doc.data().incorpamorta1,
            incorpbruta2: doc.data().incorpbruta2,
            incorpamorta2: doc.data().incorpamorta2,
            incorpbruta3: doc.data().incorpbruta3,
            incorpamorta3: doc.data().incorpamorta3,
            terrainsbruta1: doc.data().terrainsbruta1,
            terrainsamorta1: doc.data().terrainsamorta1,
            terrainsbruta2: doc.data().terrainsbruta2,
            terrainsamorta2: doc.data().terrainsamorta2,
            terrainsbruta3: doc.data().terrainsbruta3,
            terrainsamorta3: doc.data().terrainsamorta3,
            batimentsbruta1: doc.data().batimentsbruta1,
            batimentsamorta1: doc.data().batimentsamorta1,
            batimentsbruta2: doc.data().batimentsbruta2,
            batimentsamorta2: doc.data().batimentsamorta2,
            batimentsbruta3: doc.data().batimentsbruta3,
            batimentsamorta3: doc.data().batimentsamorta3,
            materielbruta1: doc.data().materielbruta1,
            materielamorta1: doc.data().materielamorta1,
            materielbruta2: doc.data().materielbruta2,
            materielamorta2: doc.data().materielamorta2,
            materielbruta3: doc.data().materielbruta3,
            materielamorta3: doc.data().materielamorta3, 
            avancebruta1: doc.data().avancebruta1,
            avanceamorta1: doc.data().avanceamorta1,
            avancebruta2: doc.data().avancebruta2,
            avanceamorta2: doc.data().avanceamorta2,
            avancebruta3: doc.data().avancebruta3,
            avanceamorta3: doc.data().avanceamorta3,
            financebruta1: doc.data().financebruta1,
            financeamorta1: doc.data().financeamorta1,
            financebruta2: doc.data().financebruta2,
            financeamorta2: doc.data().financeamorta2,
            financebruta3: doc.data().financebruta3,
            financeamorta3: doc.data().financeamorta3,
            stockbruta1: doc.data().stockbruta1,
            stockamorta1: doc.data().stockamorta1,
            stockbruta2: doc.data().stockbruta2,
            stockamorta2: doc.data().stockamorta2,
            stockbruta3: doc.data().stockbruta3,
            stockamorta3: doc.data().stockamorta3,
            creancebruta1: doc.data().creancebruta1,
            creanceamorta1: doc.data().creanceamorta1,
            creancebruta2: doc.data().creancebruta2,
            creanceamorta2: doc.data().creanceamorta2,
            creancebruta3: doc.data().creancebruta3,
            creanceamorta3: doc.data().creanceamorta3,
            banquebruta1: doc.data().banquebruta1,
            banqueamorta1: doc.data().banqueamorta1,
            banquebruta2: doc.data().banquebruta2,
            banqueamorta2: doc.data().banqueamorta2,
            banquebruta3: doc.data().banquebruta3,
            banqueamorta3: doc.data().banqueamorta3,
            caissebruta1: doc.data().caissebruta1,
            caisseamorta1: doc.data().caisseamorta1,
            caissebruta2: doc.data().caissebruta2,
            caisseamorta2: doc.data().caisseamorta2,
            caissebruta3: doc.data().caissebruta3,
            caisseamorta3: doc.data().caisseamorta3,
            docIdd: doc.id,
          });
        
        });
        setBilan(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const onSubmit2 = (e) => {
    e.preventDefault();
    setShow2(!show2)
    setLoad2(true)
    firebasee
      .firestore()
      .collection("bilan-passif")
      .add({
          capitala1: credential.capitala1,
          capitala2: credential.capitala2,
          capitala3: credential.capitala3,
          reservea1: credential.reservea1,
          reservea2: credential.reservea2,
          reservea3: credential.reservea3,
          rapporta1: credential.rapporta1,
          rapporta2: credential.rapporta2,
          rapporta3: credential.rapporta3,
          resultata1: credential.resultata1,
          resultata2: credential.resultata2,
          resultata3: credential.resultata3,
          subventiona1: credential.subventiona1,
          subventiona2: credential.subventiona2,
          subventiona3: credential.subventiona3,
          emprunta1: credential.emprunta1,
          emprunta2: credential.emprunta2,
          emprunta3: credential.emprunta3,
          provisiona1: credential.provisiona1,
          provisiona2: credential.provisiona2,
          provisiona3: credential.provisiona3,
          dettea1: credential.dettea1,
          dettea2: credential.dettea2,
          dettea3: credential.dettea3,
          personnela1: credential.personnela1,
          personnela2: credential.personnela2,
          personnela3: credential.personnela3,
          organismea1: credential.organismea1,
          organismea2: credential.organismea2,
          organismea3: credential.organismea3,
          etata1: credential.etata1,
          etata2: credential.etata2,
          etata3: credential.etata3,
          detteba1: credential.detteba1,
          detteba2: credential.detteba2,
          detteba3: credential.detteba3,
          userId: userId,
      })
      .then(() => {
        //props.resetForm()
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle2(!toggle2);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("bilan-previsionnel")
      .add({
        incorpbruta1: editTable.incorpbruta1,
        incorpamorta1: editTable.incorpamorta1,
        incorpbruta2: editTable.incorpbruta2,
        incorpamorta2: editTable.incorpamorta2,
        incorpbruta3: editTable.incorpbruta3,
        incorpamorta3: editTable.incorpamorta3,
        terrainsbruta1: editTable.terrainsbruta1,
        terrainsamorta1: editTable.terrainsamorta1,
        terrainsbruta2: editTable.terrainsbruta2,
        terrainsamorta2: editTable.terrainsamorta2,
        terrainsbruta3: editTable.terrainsbruta3,
        terrainsamorta3: editTable.terrainsamorta3,
        batimentsbruta1: editTable.batimentsbruta1,
        batimentsamorta1: editTable.batimentsamorta1,
        batimentsbruta2: editTable.batimentsbruta2,
        batimentsamorta2: editTable.batimentsamorta2,
        batimentsbruta3: editTable.batimentsbruta3,
        batimentsamorta3: editTable.batimentsamorta3,
        materielbruta1: editTable.materielbruta1,
        materielamorta1: editTable.materielamorta1,
        materielbruta2: editTable.materielbruta2,
        materielamorta2: editTable.materielamorta2,
        materielbruta3: editTable.materielbruta3,
        materielamorta3: editTable.materielamorta3,
        avancebruta1: editTable.avancebruta1,
        avanceamorta1: editTable.avanceamorta1,
        avancebruta2: editTable.avancebruta2,
        avanceamorta2: editTable.avanceamorta2,
        avancebruta3: editTable.avancebruta3,
        avanceamorta3: editTable.avanceamorta3,
        financebruta1: editTable.financebruta1,
        financeamorta1: editTable.financeamorta1,
        financebruta2: editTable.financebruta2,
        financeamorta2: editTable.financeamorta2,
        financebruta3: editTable.financebruta3,
        financeamorta3: editTable.financeamorta3,
        stockbruta1: editTable.stockbruta1,
        stockamorta1: editTable.stockamorta1,
        stockbruta2: editTable.stockbruta2,
        stockamorta2: editTable.stockamorta2,
        stockbruta3: editTable.stockbruta3,
        stockamorta3: editTable.stockamorta3,
        creancebruta1: editTable.creancebruta1,
        creanceamorta1: editTable.creanceamorta1,
        creancebruta2: editTable.creancebruta2,
        creanceamorta2: editTable.creanceamorta2,
        creancebruta3: editTable.creancebruta3,
        creanceamorta3: editTable.creanceamorta3,
        banquebruta1: editTable.banquebruta1,
        banqueamorta1: editTable.banqueamorta1,
        banquebruta2: editTable.banquebruta2,
        banqueamorta2: editTable.banqueamorta2,
        banquebruta3: editTable.banquebruta3,
        banqueamorta3: editTable.banqueamorta3,
        caissebruta1: editTable.caissebruta1,
        caisseamorta1: editTable.caisseamorta1,
        caissebruta2: editTable.caissebruta2,
        caisseamorta2: editTable.caisseamorta2,
        caissebruta3: editTable.caissebruta3,
        caisseamorta3: editTable.caisseamorta3,
        userId: userId,
      })
      .then(() => {
        //props.resetForm()
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  React.useEffect(() => {
    getDate();
    getDate2()
    //setTotal(0)
  }, [toggle,toggle2]);
  //console.log("pro");
  //console.log(mission);
  return (
    <>
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
      {bilan.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}> Bilans prévisionnels</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>Actif</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 300 }} colSpan="3">Action</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300 }}></StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Net</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Net</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Net</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bilan.map((item, index) => {
                      return (
                          <>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          
                              <TableCell><b>ACTIF IMMOBILISE</b></TableCell>
                              <TableCell><b>{aibruta1}</b></TableCell>
                              <TableCell><b>{aiamorta1}</b></TableCell>
                              <TableCell><b>{aineta1}</b></TableCell>
                              <TableCell><b>{aibruta2}</b></TableCell>
                              <TableCell><b>{aiamorta2}</b></TableCell>
                              <TableCell><b>{aineta2}</b></TableCell>
                              <TableCell><b>{aibruta3}</b></TableCell>
                              <TableCell><b>{aiamorta3}</b></TableCell>
                              <TableCell><b>{aineta3}</b></TableCell>
                              <TableCell rowSpan="15">
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
                          
                            <TableCell><b>Immobilisations incorporelles</b></TableCell>
                            <TableCell><b>{item.incorpbruta1}</b></TableCell>
                            <TableCell><b>{item.incorpamorta1}</b></TableCell>
                            <TableCell><b>{0}</b></TableCell>
                            <TableCell><b>{item.incorpbruta2}</b></TableCell>
                            <TableCell><b>{item.incorpamorta2}</b></TableCell>
                            <TableCell><b>{0}</b></TableCell>
                            <TableCell><b>{item.incorpbruta3}</b></TableCell>
                            <TableCell><b>{item.incorpamorta3}</b></TableCell>
                            <TableCell><b>{0}</b></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Immobilisations corporelles</b></TableCell>
                            <TableCell><b>{icbruta1}</b></TableCell>
                            <TableCell><b>{icamorta1}</b></TableCell>
                            <TableCell><b>{icneta1}</b></TableCell>
                            <TableCell><b>{icbruta2}</b></TableCell>
                            <TableCell><b>{icamorta2}</b></TableCell>
                            <TableCell><b>{icneta2}</b></TableCell>
                            <TableCell><b>{icbruta3}</b></TableCell>
                            <TableCell><b>{icamorta3}</b></TableCell>
                            <TableCell><b>{icneta3}</b></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          
                            <TableCell>Terrains</TableCell>
                            <TableCell>{item.terrainsbruta1}</TableCell>
                            <TableCell>{item.terrainsamorta1}</TableCell>
                            <TableCell>{item.terrainsbruta1-item.terrainsamorta1}</TableCell>
                            <TableCell>{item.terrainsbruta2}</TableCell>
                            <TableCell>{item.terrainsamorta2}</TableCell>
                            <TableCell>{item.terrainsbruta2-item.terrainsamorta2}</TableCell>
                            <TableCell>{item.terrainsbruta3}</TableCell>
                            <TableCell>{item.terrainsamorta3}</TableCell>
                            <TableCell>{item.terrainsbruta3-item.terrainsamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Bâtiments, installations, agencem.</TableCell>
                            <TableCell>{item.batimentsbruta1}</TableCell>
                            <TableCell>{item.batimentsamorta1}</TableCell>
                            <TableCell>{item.batimentsbruta1-item.batimentsamorta1}</TableCell>
                            <TableCell>{item.batimentsbruta2}</TableCell>
                            <TableCell>{item.batimentsamorta2}</TableCell>
                            <TableCell>{item.batimentsbruta2-item.batimentsamorta2}</TableCell>
                            <TableCell>{item.batimentsbruta3}</TableCell>
                            <TableCell>{item.batimentsamorta3}</TableCell>
                            <TableCell>{item.batimentsbruta3-item.batimentsamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Materiels et mobiliers</TableCell>
                            <TableCell>{item.materielbruta1}</TableCell>
                            <TableCell>{item.materielamorta1}</TableCell>
                            <TableCell>{item.materielbruta1-item.materielamorta1}</TableCell>
                            <TableCell>{item.materielbruta2}</TableCell>
                            <TableCell>{item.materielamorta2}</TableCell>
                            <TableCell>{item.materielbruta2-item.materielamorta2}</TableCell>
                            <TableCell>{item.materielbruta3}</TableCell>
                            <TableCell>{item.materielamorta3}</TableCell>
                            <TableCell>{item.materielbruta3-item.materielamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Avances et acomptes versés sur immobilisations</b></TableCell>
                            <TableCell>{item.avancebruta1}</TableCell>
                            <TableCell>{item.avanceamorta1}</TableCell>
                            <TableCell>{item.avancebruta1-item.avanceamorta1}</TableCell>
                            <TableCell>{item.avancebruta2}</TableCell>
                            <TableCell>{item.avanceamorta2}</TableCell>
                            <TableCell>{item.avancebruta2-item.avanceamorta2}</TableCell>
                            <TableCell>{item.avancebruta3}</TableCell>
                            <TableCell>{item.avanceamorta3}</TableCell>
                            <TableCell>{item.avancebruta3-item.avanceamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b> Immobilisations financières</b></TableCell>
                            <TableCell>{item.financebruta1}</TableCell>
                            <TableCell>{item.financeamorta1}</TableCell>
                            <TableCell>{item.financebruta1-item.financeamorta1}</TableCell>
                            <TableCell>{item.financebruta2}</TableCell>
                            <TableCell>{item.financeamorta2}</TableCell>
                            <TableCell>{item.financebruta2-item.financeamorta2}</TableCell>
                            <TableCell>{item.financebruta3}</TableCell>
                            <TableCell>{item.financeamorta3}</TableCell>
                            <TableCell>{item.financebruta3-item.financeamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                            <TableCell><b> ACTIF CIRCULANT</b></TableCell>
                            <TableCell><b>{acbruta1}</b></TableCell>
                            <TableCell><b>{acamorta1}</b></TableCell>
                            <TableCell><b>{acneta1}</b></TableCell>
                            <TableCell><b>{acbruta2}</b></TableCell>
                            <TableCell><b>{acamorta2}</b></TableCell>
                            <TableCell><b>{acneta2}</b></TableCell>
                            <TableCell><b>{acbruta3}</b></TableCell>
                            <TableCell><b>{acamorta3}</b></TableCell>
                            <TableCell><b>{acneta3}</b></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b> Stocks</b></TableCell>
                            <TableCell>{item.stockbruta1}</TableCell>
                            <TableCell>{item.stockamorta1}</TableCell>
                            <TableCell>{item.stockbruta1-item.stockamorta1}</TableCell>
                            <TableCell>{item.stockbruta2}</TableCell>
                            <TableCell>{item.stockamorta2}</TableCell>
                            <TableCell>{item.stockbruta2-item.stockamorta2}</TableCell>
                            <TableCell>{item.stockbruta3}</TableCell>
                            <TableCell>{item.stockamorta3}</TableCell>
                            <TableCell>{item.stockbruta3-item.stockamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b> Créances</b></TableCell>
                            <TableCell>{item.creancebruta1}</TableCell>
                            <TableCell>{item.creanceamorta1}</TableCell>
                            <TableCell>{item.creancebruta1-item.creanceamorta1}</TableCell>
                            <TableCell>{item.creancebruta2}</TableCell>
                            <TableCell>{item.creanceamorta2}</TableCell>
                            <TableCell>{item.creancebruta2-item.creanceamorta2}</TableCell>
                            <TableCell>{item.creancebruta3}</TableCell>
                            <TableCell>{item.creanceamorta3}</TableCell>
                            <TableCell>{item.creancebruta3-item.creanceamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                            <TableCell><b>TRESORERIE ACTIF</b></TableCell>
                            <TableCell><b>{tabruta1}</b></TableCell>
                            <TableCell><b>{taamorta1}</b></TableCell>
                            <TableCell><b>{taneta1}</b></TableCell>
                            <TableCell><b>{tabruta2}</b></TableCell>
                            <TableCell><b>{taamorta2}</b></TableCell>
                            <TableCell><b>{taneta2}</b></TableCell>
                            <TableCell><b>{tabruta3}</b></TableCell>
                            <TableCell><b>{taamorta3}</b></TableCell>
                            <TableCell><b>{taneta3}</b></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b> Banques</b></TableCell>
                            <TableCell>{item.banquebruta1}</TableCell>
                            <TableCell>{item.banqueamorta1}</TableCell>
                            <TableCell>{item.banquebruta1-item.banqueamorta1}</TableCell>
                            <TableCell>{item.banquebruta2}</TableCell>
                            <TableCell>{item.banqueamorta2}</TableCell>
                            <TableCell>{item.banquebruta2-item.banqueamorta2}</TableCell>
                            <TableCell>{item.banquebruta3}</TableCell>
                            <TableCell>{item.banqueamorta3}</TableCell>
                            <TableCell>{item.banquebruta3-item.banqueamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b> Caisses</b></TableCell>
                            <TableCell>{item.caissebruta1}</TableCell>
                            <TableCell>{item.caisseamorta1}</TableCell>
                            <TableCell>{item.banquebruta1-item.banqueamorta1}</TableCell>
                            <TableCell>{item.caissebruta2}</TableCell>
                            <TableCell>{item.caisseamorta2}</TableCell>
                            <TableCell>{item.banquebruta2-item.banqueamorta2}</TableCell>
                            <TableCell>{item.caissebruta3}</TableCell>
                            <TableCell>{item.caisseamorta3}</TableCell>
                            <TableCell>{item.banquebruta3-item.banqueamorta3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#18A4F6"}}>
                            <TableCell><b>TOTAL</b></TableCell>
                            <TableCell><b>{totalbruta1}</b></TableCell>
                            <TableCell><b>{totalamorta1}</b></TableCell>
                            <TableCell><b>{totalneta1}</b></TableCell>
                            <TableCell><b>{totalbruta2}</b></TableCell>
                            <TableCell><b>{totalamorta2}</b></TableCell>
                            <TableCell><b>{totalneta2}</b></TableCell>
                            <TableCell><b>{totalbruta3}</b></TableCell>
                            <TableCell><b>{totalamorta3}</b></TableCell>
                            <TableCell><b>{totalneta3}</b></TableCell>
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
                    <StyledTableCell rowSpan="2" style={{ minWidth: 400}}>Actif</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 300 }} colSpan="3">Action</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Net</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Net</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Brut</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Amort. Et prov</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }} colSpan="2">Net</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
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
              onSubmit={editBilan}
            >
              <div className="input">
                
              <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="incorpbruta1"
                    label="Immobilisations incorporelles Brut Année 1"
                    name="incorpbruta1"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta1}
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
                    id="incorpamorta1"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 1"
                    name="incorpamorta1"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta1}
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
                    id="incorpbruta2"
                    label="Immobilisations incorporelles Brut Année 2"
                    name="incorpbruta2"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta2}
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
                    id="incorpamorta2"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 2"
                    name="incorpamorta2"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta2}
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
                    id="incorpbruta3"
                    label="Immobilisations incorporelles Brut Année 3"
                    name="incorpbruta3"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta3}
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
                    id="incorpamorta3"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 3"
                    name="incorpamorta3"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta3}
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
                    id="terrainsbruta1"
                    label="Terrains Brut Année 1"
                    name="terrainsbruta1"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta1}
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
                    id="terrainsamorta1"
                    label="Terrains Amort. Et Prov. Année 1"
                    name="terrainsamorta1"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta1}
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
                    id="terrainsbruta2"
                    label="Terrains Brut Année 2"
                    name="terrainsbruta2"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta2}
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
                    id="terrainsamorta2"
                    label="Terrains Amort. Et Prov. Année 2"
                    name="terrainsamorta2"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta2}
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
                    id="terrainsbruta3"
                    label="Terrains Brut Année 3"
                    name="terrainsbruta3"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta3}
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
                    id="terrainsamorta3"
                    label="Terrains Amort. Et Prov. Année 3"
                    name="terrainsamorta3"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta3}
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
                    id="batimentsbruta1"
                    label="Bâtiments, installations, agencem. Brut Année 1"
                    name="batimentsbruta1"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta1}
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
                    id="batimentsamorta1"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 1"
                    name="batimentsamorta1"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta1}
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
                    id="batimentsbruta2"
                    label="Bâtiments, installations, agencem. Brut Année 2"
                    name="batimentsbruta2"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta2}
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
                    id="batimentsamorta2"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 2"
                    name="batimentsamorta2"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta2}
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
                    id="batimentsbruta3"
                    label="Bâtiments, installations, agencem. Brut Année 3"
                    name="batimentsbruta3"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta3}
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
                    id="batimentsamorta3"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 3"
                    name="batimentsamorta3"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta3}
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
                    id="materielbruta1"
                    label="Materiels et mobiliers Brut Année 1"
                    name="materielbruta1"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta1}
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
                    id="materielamorta1"
                    label="Materiels et mobiliers Amort. Et Prov. Année 1"
                    name="materielamorta1"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta1}
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
                    id="materielbruta2"
                    label="Materiels et mobiliers Brut Année 2"
                    name="materielbruta2"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta2}
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
                    id="materielamorta2"
                    label="Materiels et mobiliers Amort. Et Prov. Année 2"
                    name="materielamorta2"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta2}
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
                    id="materielbruta3"
                    label="Materiels et mobiliers Brut Année 3"
                    name="materielbruta3"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta3}
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
                    id="materielamorta3"
                    label="Materiels et mobiliers Amort. Et Prov. Année 3"
                    name="materielamorta3"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta3}
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
                    id="avancebruta1"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 1"
                    name="avancebruta1"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta1}
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
                    id="avanceamorta1"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 1"
                    name="avanceamorta1"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta1}
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
                    id="avancebruta2"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 2"
                    name="avancebruta2"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta2}
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
                    id="avanceamorta2"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 2"
                    name="avanceamorta2"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta2}
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
                    id="avancebruta3"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 3"
                    name="avancebruta3"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta3}
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
                    id="avanceamorta3"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 3"
                    name="avanceamorta3"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta3}
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
                    id="financebruta1"
                    label="  Immobilisations financières Brut Année 1"
                    name="financebruta1"
                    autoFocus
                    type="number"
                    value={editTable.financebruta1}
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
                    id="financeamorta1"
                    label="  Immobilisations financières Amort. Et Prov. Année 1"
                    name="financeamorta1"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta1}
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
                    id="financebruta2"
                    label="  Immobilisations financières Brut Année 2"
                    name="financebruta2"
                    autoFocus
                    type="number"
                    value={editTable.financebruta2}
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
                    id="financeamorta2"
                    label="  Immobilisations financières Amort. Et Prov. Année 2"
                    name="financeamorta2"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta2}
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
                    id="financebruta3"
                    label="  Immobilisations financières Brut Année 3"
                    name="financebruta3"
                    autoFocus
                    type="number"
                    value={editTable.financebruta3}
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
                    id="financeamorta3"
                    label="  Immobilisations financières Amort. Et Prov. Année 3"
                    name="financeamorta3"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta3}
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
                    id="stockbruta1"
                    label="Stocks Brut Année 1"
                    name="stockbruta1"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta1}
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
                    id="stockamorta1"
                    label="Stocks Amort. Et Prov. Année 1"
                    name="stockamorta1"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta1}
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
                    id="stockbruta2"
                    label="Stocks Brut Année 2"
                    name="stockbruta2"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta2}
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
                    id="stockamorta2"
                    label="Stocks Amort. Et Prov. Année 2"
                    name="stockamorta2"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta2}
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
                    id="stockbruta3"
                    label="Stocks Brut Année 3"
                    name="stockbruta3"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta3}
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
                    id="stockamorta3"
                    label="Stocks Amort. Et Prov. Année 3"
                    name="stockamorta3"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta3}
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
                    id="creancebruta1"
                    label="Créances Brut Année 1"
                    name="creancebruta1"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta1}
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
                    id="creanceamorta1"
                    label="Créances Amort. Et Prov. Année 1"
                    name="creanceamorta1"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta1}
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
                    id="creancebruta2"
                    label="Créances Brut Année 2"
                    name="creancebruta2"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta2}
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
                    id="creanceamorta2"
                    label="Créances Amort. Et Prov. Année 2"
                    name="creanceamorta2"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta2}
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
                    id="creancebruta3"
                    label="Créances Brut Année 3"
                    name="creancebruta3"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta3}
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
                    id="creanceamorta3"
                    label="Créances Amort. Et Prov. Année 3"
                    name="creanceamorta3"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta3}
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
                    id="banquebruta1"
                    label="Banques Brut Année 1"
                    name="banquebruta1"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta1}
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
                    id="banqueamorta1"
                    label="Banques Amort. Et Prov. Année 1"
                    name="banqueamorta1"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta1}
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
                    id="banquebruta2"
                    label="Banques Brut Année 2"
                    name="banquebruta2"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta2}
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
                    id="banqueamorta2"
                    label="Banques Amort. Et Prov. Année 2"
                    name="banqueamorta2"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta2}
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
                    id="banquebruta3"
                    label="Banques Brut Année 3"
                    name="banquebruta3"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta3}
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
                    id="banqueamorta3"
                    label="Banques Amort. Et Prov. Année 3"
                    name="banqueamorta3"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta3}
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
                    id="caissebruta1"
                    label="Caisses Brut Année 1"
                    name="caissebruta1"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta1}
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
                    id="caisseamorta1"
                    label="Caisses Amort. Et Prov. Année 1"
                    name="caisseamorta1"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta1}
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
                    id="caissebruta2"
                    label="Caisses Brut Année 2"
                    name="caissebruta2"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta2}
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
                    id="caisseamorta2"
                    label="Caisses Amort. Et Prov. Année 2"
                    name="caisseamorta2"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta2}
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
                    id="caissebruta3"
                    label="Caisses Brut Année 3"
                    name="caissebruta3"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta3}
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
                    id="caisseamorta3"
                    label="Caisses Amort. Et Prov. Année 3"
                    name="caisseamorta3"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta3}
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
               <form onSubmit={onSubmit} noValidate>
                <div className="input">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="incorpbruta1"
                    label="Immobilisations incorporelles Brut Année 1"
                    name="incorpbruta1"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta1}
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
                    id="incorpamorta1"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 1"
                    name="incorpamorta1"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta1}
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
                    id="incorpbruta2"
                    label="Immobilisations incorporelles Brut Année 2"
                    name="incorpbruta2"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta2}
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
                    id="incorpamorta2"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 2"
                    name="incorpamorta2"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta2}
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
                    id="incorpbruta3"
                    label="Immobilisations incorporelles Brut Année 3"
                    name="incorpbruta3"
                    autoFocus
                    type="number"
                    value={editTable.incorpbruta3}
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
                    id="incorpamorta3"
                    label="Immobilisations incorporelles Amort. Et Prov. Année 3"
                    name="incorpamorta3"
                    autoFocus
                    type="number"
                    value={editTable.incorpamorta3}
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
                    id="terrainsbruta1"
                    label="Terrains Brut Année 1"
                    name="terrainsbruta1"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta1}
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
                    id="terrainsamorta1"
                    label="Terrains Amort. Et Prov. Année 1"
                    name="terrainsamorta1"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta1}
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
                    id="terrainsbruta2"
                    label="Terrains Brut Année 2"
                    name="terrainsbruta2"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta2}
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
                    id="terrainsamorta2"
                    label="Terrains Amort. Et Prov. Année 2"
                    name="terrainsamorta2"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta2}
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
                    id="terrainsbruta3"
                    label="Terrains Brut Année 3"
                    name="terrainsbruta3"
                    autoFocus
                    type="number"
                    value={editTable.terrainsbruta3}
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
                    id="terrainsamorta3"
                    label="Terrains Amort. Et Prov. Année 3"
                    name="terrainsamorta3"
                    autoFocus
                    type="number"
                    value={editTable.terrainsamorta3}
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
                    id="batimentsbruta1"
                    label="Bâtiments, installations, agencem. Brut Année 1"
                    name="batimentsbruta1"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta1}
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
                    id="batimentsamorta1"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 1"
                    name="batimentsamorta1"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta1}
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
                    id="batimentsbruta2"
                    label="Bâtiments, installations, agencem. Brut Année 2"
                    name="batimentsbruta2"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta2}
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
                    id="batimentsamorta2"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 2"
                    name="batimentsamorta2"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta2}
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
                    id="batimentsbruta3"
                    label="Bâtiments, installations, agencem. Brut Année 3"
                    name="batimentsbruta3"
                    autoFocus
                    type="number"
                    value={editTable.batimentsbruta3}
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
                    id="batimentsamorta3"
                    label="Bâtiments, installations, agencem. Amort. Et Prov. Année 3"
                    name="batimentsamorta3"
                    autoFocus
                    type="number"
                    value={editTable.batimentsamorta3}
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
                    id="materielbruta1"
                    label="Materiels et mobiliers Brut Année 1"
                    name="materielbruta1"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta1}
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
                    id="materielamorta1"
                    label="Materiels et mobiliers Amort. Et Prov. Année 1"
                    name="materielamorta1"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta1}
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
                    id="materielbruta2"
                    label="Materiels et mobiliers Brut Année 2"
                    name="materielbruta2"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta2}
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
                    id="materielamorta2"
                    label="Materiels et mobiliers Amort. Et Prov. Année 2"
                    name="materielamorta2"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta2}
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
                    id="materielbruta3"
                    label="Materiels et mobiliers Brut Année 3"
                    name="materielbruta3"
                    autoFocus
                    type="number"
                    value={editTable.materielbruta3}
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
                    id="materielamorta3"
                    label="Materiels et mobiliers Amort. Et Prov. Année 3"
                    name="materielamorta3"
                    autoFocus
                    type="number"
                    value={editTable.materielamorta3}
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
                    id="avancebruta1"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 1"
                    name="avancebruta1"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta1}
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
                    id="avanceamorta1"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 1"
                    name="avanceamorta1"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta1}
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
                    id="avancebruta2"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 2"
                    name="avancebruta2"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta2}
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
                    id="avanceamorta2"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 2"
                    name="avanceamorta2"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta2}
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
                    id="avancebruta3"
                    label=" Avances et acomptes versés sur immobilisations Brut Année 3"
                    name="avancebruta3"
                    autoFocus
                    type="number"
                    value={editTable.avancebruta3}
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
                    id="avanceamorta3"
                    label=" Avances et acomptes versés sur immobilisations Amort. Et Prov. Année 3"
                    name="avanceamorta3"
                    autoFocus
                    type="number"
                    value={editTable.avanceamorta3}
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
                    id="financebruta1"
                    label="  Immobilisations financières Brut Année 1"
                    name="financebruta1"
                    autoFocus
                    type="number"
                    value={editTable.financebruta1}
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
                    id="financeamorta1"
                    label="  Immobilisations financières Amort. Et Prov. Année 1"
                    name="financeamorta1"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta1}
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
                    id="financebruta2"
                    label="  Immobilisations financières Brut Année 2"
                    name="financebruta2"
                    autoFocus
                    type="number"
                    value={editTable.financebruta2}
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
                    id="financeamorta2"
                    label="  Immobilisations financières Amort. Et Prov. Année 2"
                    name="financeamorta2"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta2}
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
                    id="financebruta3"
                    label="  Immobilisations financières Brut Année 3"
                    name="financebruta3"
                    autoFocus
                    type="number"
                    value={editTable.financebruta3}
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
                    id="financeamorta3"
                    label="  Immobilisations financières Amort. Et Prov. Année 3"
                    name="financeamorta3"
                    autoFocus
                    type="number"
                    value={editTable.financeamorta3}
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
                    id="stockbruta1"
                    label="Stocks Brut Année 1"
                    name="stockbruta1"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta1}
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
                    id="stockamorta1"
                    label="Stocks Amort. Et Prov. Année 1"
                    name="stockamorta1"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta1}
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
                    id="stockbruta2"
                    label="Stocks Brut Année 2"
                    name="stockbruta2"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta2}
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
                    id="stockamorta2"
                    label="Stocks Amort. Et Prov. Année 2"
                    name="stockamorta2"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta2}
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
                    id="stockbruta3"
                    label="Stocks Brut Année 3"
                    name="stockbruta3"
                    autoFocus
                    type="number"
                    value={editTable.stockbruta3}
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
                    id="stockamorta3"
                    label="Stocks Amort. Et Prov. Année 3"
                    name="stockamorta3"
                    autoFocus
                    type="number"
                    value={editTable.stockamorta3}
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
                    id="creancebruta1"
                    label="Créances Brut Année 1"
                    name="creancebruta1"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta1}
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
                    id="creanceamorta1"
                    label="Créances Amort. Et Prov. Année 1"
                    name="creanceamorta1"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta1}
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
                    id="creancebruta2"
                    label="Créances Brut Année 2"
                    name="creancebruta2"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta2}
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
                    id="creanceamorta2"
                    label="Créances Amort. Et Prov. Année 2"
                    name="creanceamorta2"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta2}
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
                    id="creancebruta3"
                    label="Créances Brut Année 3"
                    name="creancebruta3"
                    autoFocus
                    type="number"
                    value={editTable.creancebruta3}
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
                    id="creanceamorta3"
                    label="Créances Amort. Et Prov. Année 3"
                    name="creanceamorta3"
                    autoFocus
                    type="number"
                    value={editTable.creanceamorta3}
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
                    id="banquebruta1"
                    label="Banques Brut Année 1"
                    name="banquebruta1"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta1}
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
                    id="banqueamorta1"
                    label="Banques Amort. Et Prov. Année 1"
                    name="banqueamorta1"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta1}
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
                    id="banquebruta2"
                    label="Banques Brut Année 2"
                    name="banquebruta2"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta2}
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
                    id="banqueamorta2"
                    label="Banques Amort. Et Prov. Année 2"
                    name="banqueamorta2"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta2}
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
                    id="banquebruta3"
                    label="Banques Brut Année 3"
                    name="banquebruta3"
                    autoFocus
                    type="number"
                    value={editTable.banquebruta3}
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
                    id="banqueamorta3"
                    label="Banques Amort. Et Prov. Année 3"
                    name="banqueamorta3"
                    autoFocus
                    type="number"
                    value={editTable.banqueamorta3}
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
                    id="caissebruta1"
                    label="Caisses Brut Année 1"
                    name="caissebruta1"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta1}
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
                    id="caisseamorta1"
                    label="Caisses Amort. Et Prov. Année 1"
                    name="caisseamorta1"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta1}
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
                    id="caissebruta2"
                    label="Caisses Brut Année 2"
                    name="caissebruta2"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta2}
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
                    id="caisseamorta2"
                    label="Caisses Amort. Et Prov. Année 2"
                    name="caisseamorta2"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta2}
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
                    id="caissebruta3"
                    label="Caisses Brut Année 3"
                    name="caissebruta3"
                    autoFocus
                    type="number"
                    value={editTable.caissebruta3}
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
                    id="caisseamorta3"
                    label="Caisses Amort. Et Prov. Année 3"
                    name="caisseamorta3"
                    autoFocus
                    type="number"
                    value={editTable.caisseamorta3}
                    onChange={handleChange}
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
          </form>
            </CardContent>
          </Card>
        </>
        )}
      </div>
    </div>
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
      {passif.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}> Bilans prévisionnels</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>Passif</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {passif.map((item, index) => {
                      return (
                          <>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>RESSOURCES STABLES</b></TableCell>
                                <TableCell><b>{rsa1}</b></TableCell>
                                <TableCell><b>{rsa2}</b></TableCell>
                                <TableCell><b>{rsa3}</b></TableCell>
                                <TableCell rowSpan="16">
                                  <div className="delete">
                                    <div className="edit">
                                      <EditIcon onClick={() => handleModif2(item.docIdd, index)} />
                                    </div>
                                    <div className="delet">
                                      <DeleteIcon onClick={() => deletePassif(item.docIdd)} />
                                    </div>
                                  </div>
                                </TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Capital</TableCell>
                                <TableCell>{item.capitala1}</TableCell>
                                <TableCell>{item.capitala2}</TableCell>
                                <TableCell>{item.capitala3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Réserves</TableCell>
                                <TableCell>{item.reservea1}</TableCell>
                                <TableCell>{item.reservea2}</TableCell>
                                <TableCell>{item.reservea3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Report à nouveau</TableCell>
                                <TableCell>{item.rapporta1}</TableCell>
                                <TableCell>{item.rapporta2}</TableCell>
                                <TableCell>{item.rapporta3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Résultat net</TableCell>
                                <TableCell>{item.resultata1}</TableCell>
                                <TableCell>{item.resultata2}</TableCell>
                                <TableCell>{item.resultata3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Subventions</TableCell>
                                <TableCell>{item.subventiona1}</TableCell>
                                <TableCell>{item.subventiona2}</TableCell>
                                <TableCell>{item.subventiona3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Emprunts à moyen et long terme</TableCell>
                                <TableCell>{item.emprunta1}</TableCell>
                                <TableCell>{item.emprunta2}</TableCell>
                                <TableCell>{item.emprunta3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Provisions fin. pour risque et charge</TableCell>
                                <TableCell>{item.provisiona1}</TableCell>
                                <TableCell>{item.provisiona2}</TableCell>
                                <TableCell>{item.provisiona3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                                <TableCell><b>PASSIF CIRCULANT</b></TableCell>
                                <TableCell><b>{pca1}</b></TableCell>
                                <TableCell><b>{pca2}</b></TableCell>
                                <TableCell><b>{pca3}</b></TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Dettes fournisseurs</TableCell>
                                <TableCell>{item.dettea1}</TableCell>
                                <TableCell>{item.dettea2}</TableCell>
                                <TableCell>{item.dettea3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Personnel</TableCell>
                                <TableCell>{item.personnela1}</TableCell>
                                <TableCell>{item.personnela2}</TableCell>
                                <TableCell>{item.personnela3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Organismes sociaux </TableCell>
                                <TableCell>{item.organismea1}</TableCell>
                                <TableCell>{item.organismea2}</TableCell>
                                <TableCell>{item.organismea3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell>Etat et collectivités publiques  </TableCell>
                                <TableCell>{item.etata1}</TableCell>
                                <TableCell>{item.etata2}</TableCell>
                                <TableCell>{item.etata3}</TableCell>
                          </TableRow>
                          
                          <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                                <TableCell><b>TRESORERIE PASSIF </b></TableCell>
                                <TableCell><b>{tpa1}</b></TableCell>
                                <TableCell><b>{tpa2}</b></TableCell>
                                <TableCell><b>{tpa3}</b></TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell> Dettes bancaires à CT </TableCell>
                                <TableCell>{item.dettea1}</TableCell>
                                <TableCell>{item.dettea2}</TableCell>
                                <TableCell>{item.dettea3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#1A88F0"}}>
                                <TableCell><b>TOTAL</b></TableCell>
                                <TableCell><b>{totalpassifa1}</b></TableCell>
                                <TableCell><b>{totalpassifa2}</b></TableCell>
                                <TableCell><b>{totalpassifa3}</b></TableCell>
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
                    <StyledTableCell style={{ minWidth: 300}}>Passif</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
                  </TableRow>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}

      {load2 ? (<CircularProgress variant="indeterminate" style={{marginTop:10}}/>): (
        <>
        <div className="plus">
          {!show2 && (
            <Button className="plus-icon" 
              style={{color: 'white', marginTop:10, background:'#18A4F6'}} 
              onClick={() => setShow2(!show2)} 
              endIcon={<Add/>}>
              Ajouter
            </Button>
          )}
        </div>
        </>
        )}
      <div>
        { idDoc2 ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show2 && "show"}`}
              onSubmit={editPassif}
            >
              <div className="input">
                
                <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="capitala1"
                      label="Capital Année 1"
                      name="capitala1"
                      autoFocus
                      type="number"
                      value={credential.capitala1}
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
                      id="capitala2"
                      label="Capital Année 2"
                      name="capitala2"
                      autoFocus
                      type="number"
                      value={credential.capitala2}
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
                      id="capitala3"
                      label="Capital Année 3"
                      name="capitala3"
                      autoFocus
                      type="number"
                      value={credential.capitala3}
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
                      id="reservea1"
                      label="Réserves Année 1"
                      name="reservea1"
                      autoFocus
                      type="number"
                      value={credential.reservea1}
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
                      id="reservea2"
                      label="Réserves Année 2"
                      name="reservea2"
                      autoFocus
                      type="number"
                      value={credential.reservea2}
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
                      id="reservea3"
                      label="Réserves Année 3"
                      name="reservea3"
                      autoFocus
                      type="number"
                      value={credential.reservea3}
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
                      id="rapporta1"
                      label="Report à nouveau Année 1"
                      name="rapporta1"
                      autoFocus
                      type="number"
                      value={credential.rapporta1}
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
                      id="rapporta2"
                      label="Report à nouveau Année 2"
                      name="rapporta2"
                      autoFocus
                      type="number"
                      value={credential.rapporta2}
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
                      id="rapporta3"
                      label="Report à nouveau Année 3"
                      name="rapporta3"
                      autoFocus
                      type="number"
                      value={credential.rapporta3}
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
                      id="resultata1"
                      label="Résultat net Année 1"
                      name="resultata1"
                      autoFocus
                      type="number"
                      value={credential.resultata1}
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
                      id="resultata2"
                      label="Résultat net Année 2"
                      name="resultata2"
                      autoFocus
                      type="number"
                      value={credential.resultata2}
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
                      id="resultata3"
                      label="Résultat net Année 3"
                      name="resultata3"
                      autoFocus
                      type="number"
                      value={credential.resultata3}
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
                      id="subventiona1"
                      label="Subventions Année 1"
                      name="subventiona1"
                      autoFocus
                      type="number"
                      value={credential.subventiona1}
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
                      id="subventiona2"
                      label="Subventions Année 2"
                      name="subventiona2"
                      autoFocus
                      type="number"
                      value={credential.subventiona2}
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
                      id="subventiona3"
                      label="Subventions Année 3"
                      name="subventiona3"
                      autoFocus
                      type="number"
                      value={credential.subventiona3}
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
                      id="emprunta1"
                      label="emprunts Année 1"
                      name="emprunta1"
                      autoFocus
                      type="number"
                      value={credential.emprunta1}
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
                      id="emprunta2"
                      label="emprunts Année 2"
                      name="emprunta2"
                      autoFocus
                      type="number"
                      value={credential.emprunta2}
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
                      id="emprunta3"
                      label="emprunts Année 3"
                      name="emprunta3"
                      autoFocus
                      type="number"
                      value={credential.emprunta3}
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
                      id="provisiona1"
                      label="Provisions fin. pour risque et charge Année 1"
                      name="provisiona1"
                      autoFocus
                      type="number"
                      value={credential.provisiona1}
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
                      id="provisiona2"
                      label="Provisions fin. pour risque et charge Année 2"
                      name="provisiona2"
                      autoFocus
                      type="number"
                      value={credential.provisiona2}
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
                      id="provisiona3"
                      label="Provisions fin. pour risque et charge Année 3"
                      name="provisiona3"
                      autoFocus
                      type="number"
                      value={credential.provisiona3}
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
                      id="dettea1"
                      label="Dettes fournisseurs  Année 1"
                      name="dettea1"
                      autoFocus
                      type="number"
                      value={credential.dettea1}
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
                      id="dettea2"
                      label="Dettes fournisseurs  Année 2"
                      name="dettea2"
                      autoFocus
                      type="number"
                      value={credential.dettea2}
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
                      id="dettea3"
                      label="Dettes fournisseurs  Année 3"
                      name="dettea3"
                      autoFocus
                      type="number"
                      value={credential.dettea3}
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
                      id="personnela1"
                      label="Personnel  Année 1"
                      name="personnela1"
                      autoFocus
                      type="number"
                      value={credential.personnela1}
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
                      id="personnela2"
                      label="Personnel  Année 2"
                      name="personnela2"
                      autoFocus
                      type="number"
                      value={credential.personnela2}
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
                      id="personnela3"
                      label="Personnel  Année 3"
                      name="personnela3"
                      autoFocus
                      type="number"
                      value={credential.personnela3}
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
                      id="organismea1"
                      label="Organismes sociaux Année 1"
                      name="organismea1"
                      autoFocus
                      type="number"
                      value={credential.organismea1}
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
                      id="organismea2"
                      label="Organismes sociaux Année 2"
                      name="organismea2"
                      autoFocus
                      type="number"
                      value={credential.organismea2}
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
                      id="organismea3"
                      label="Organismes sociaux Année 3"
                      name="organismea3"
                      autoFocus
                      type="number"
                      value={credential.organismea3}
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
                      id="etata1"
                      label="Etat et collectivités publiques  Année 1"
                      name="etata1"
                      autoFocus
                      type="number"
                      value={credential.etata1}
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
                      id="etata2"
                      label="Etat et collectivités publiques  Année 2"
                      name="etata2"
                      autoFocus
                      type="number"
                      value={credential.etata2}
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
                      id="etata3"
                      label="Etat et collectivités publiques  Année 3"
                      name="etata3"
                      autoFocus
                      type="number"
                      value={credential.etata3}
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
                      id="detteba1"
                      label="Dettes bancaires à CT Année 1"
                      name="detteba1"
                      autoFocus
                      type="number"
                      value={credential.detteba1}
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
                      id="detteba2"
                      label="Dettes bancaires à CT Année 2"
                      name="detteba2"
                      autoFocus
                      type="number"
                      value={credential.detteba2}
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
                      id="detteba3"
                      label="Dettes bancaires à CT Année 3"
                      name="detteba3"
                      autoFocus
                      type="number"
                      value={credential.detteba3}
                      onChange={handleChange}
                      style={{ width: 200, marginRight: 10 }}
                      InputProps={{
                          startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                      }}
                />
                 <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow2(!show2)}
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
          <Card variant="outlined" className={`${!show2 && "show"}`}>
            <CardContent>
               <form onSubmit={onSubmit2} noValidate>
                <div className="input">
                <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="capitala1"
                      label="Capital Année 1"
                      name="capitala1"
                      autoFocus
                      type="number"
                      value={credential.capitala1}
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
                      id="capitala2"
                      label="Capital Année 2"
                      name="capitala2"
                      autoFocus
                      type="number"
                      value={credential.capitala2}
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
                      id="capitala3"
                      label="Capital Année 3"
                      name="capitala3"
                      autoFocus
                      type="number"
                      value={credential.capitala3}
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
                      id="reservea1"
                      label="Réserves Année 1"
                      name="reservea1"
                      autoFocus
                      type="number"
                      value={credential.reservea1}
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
                      id="reservea2"
                      label="Réserves Année 2"
                      name="reservea2"
                      autoFocus
                      type="number"
                      value={credential.reservea2}
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
                      id="reservea3"
                      label="Réserves Année 3"
                      name="reservea3"
                      autoFocus
                      type="number"
                      value={credential.reservea3}
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
                      id="rapporta1"
                      label="Report à nouveau Année 1"
                      name="rapporta1"
                      autoFocus
                      type="number"
                      value={credential.rapporta1}
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
                      id="rapporta2"
                      label="Report à nouveau Année 2"
                      name="rapporta2"
                      autoFocus
                      type="number"
                      value={credential.rapporta2}
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
                      id="rapporta3"
                      label="Report à nouveau Année 3"
                      name="rapporta3"
                      autoFocus
                      type="number"
                      value={credential.rapporta3}
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
                      id="resultata1"
                      label="Résultat net Année 1"
                      name="resultata1"
                      autoFocus
                      type="number"
                      value={credential.resultata1}
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
                      id="resultata2"
                      label="Résultat net Année 2"
                      name="resultata2"
                      autoFocus
                      type="number"
                      value={credential.resultata2}
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
                      id="resultata3"
                      label="Résultat net Année 3"
                      name="resultata3"
                      autoFocus
                      type="number"
                      value={credential.resultata3}
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
                      id="subventiona1"
                      label="Subventions Année 1"
                      name="subventiona1"
                      autoFocus
                      type="number"
                      value={credential.subventiona1}
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
                      id="subventiona2"
                      label="Subventions Année 2"
                      name="subventiona2"
                      autoFocus
                      type="number"
                      value={credential.subventiona2}
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
                      id="subventiona3"
                      label="Subventions Année 3"
                      name="subventiona3"
                      autoFocus
                      type="number"
                      value={credential.subventiona3}
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
                      id="emprunta1"
                      label="emprunts Année 1"
                      name="emprunta1"
                      autoFocus
                      type="number"
                      value={credential.emprunta1}
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
                      id="emprunta2"
                      label="emprunts Année 2"
                      name="emprunta2"
                      autoFocus
                      type="number"
                      value={credential.emprunta2}
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
                      id="emprunta3"
                      label="emprunts Année 3"
                      name="emprunta3"
                      autoFocus
                      type="number"
                      value={credential.emprunta3}
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
                      id="provisiona1"
                      label="Provisions fin. pour risque et charge Année 1"
                      name="provisiona1"
                      autoFocus
                      type="number"
                      value={credential.provisiona1}
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
                      id="provisiona2"
                      label="Provisions fin. pour risque et charge Année 2"
                      name="provisiona2"
                      autoFocus
                      type="number"
                      value={credential.provisiona2}
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
                      id="provisiona3"
                      label="Provisions fin. pour risque et charge Année 3"
                      name="provisiona3"
                      autoFocus
                      type="number"
                      value={credential.provisiona3}
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
                      id="dettea1"
                      label="Dettes fournisseurs  Année 1"
                      name="dettea1"
                      autoFocus
                      type="number"
                      value={credential.dettea1}
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
                      id="dettea2"
                      label="Dettes fournisseurs  Année 2"
                      name="dettea2"
                      autoFocus
                      type="number"
                      value={credential.dettea2}
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
                      id="dettea3"
                      label="Dettes fournisseurs  Année 3"
                      name="dettea3"
                      autoFocus
                      type="number"
                      value={credential.dettea3}
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
                      id="personnela1"
                      label="Personnel  Année 1"
                      name="personnela1"
                      autoFocus
                      type="number"
                      value={credential.personnela1}
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
                      id="personnela2"
                      label="Personnel  Année 2"
                      name="personnela2"
                      autoFocus
                      type="number"
                      value={credential.personnela2}
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
                      id="personnela3"
                      label="Personnel  Année 3"
                      name="personnela3"
                      autoFocus
                      type="number"
                      value={credential.personnela3}
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
                      id="organismea1"
                      label="Organismes sociaux Année 1"
                      name="organismea1"
                      autoFocus
                      type="number"
                      value={credential.organismea1}
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
                      id="organismea2"
                      label="Organismes sociaux Année 2"
                      name="organismea2"
                      autoFocus
                      type="number"
                      value={credential.organismea2}
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
                      id="organismea3"
                      label="Organismes sociaux Année 3"
                      name="organismea3"
                      autoFocus
                      type="number"
                      value={credential.organismea3}
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
                      id="etata1"
                      label="Etat et collectivités publiques  Année 1"
                      name="etata1"
                      autoFocus
                      type="number"
                      value={credential.etata1}
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
                      id="etata2"
                      label="Etat et collectivités publiques  Année 2"
                      name="etata2"
                      autoFocus
                      type="number"
                      value={credential.etata2}
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
                      id="etata3"
                      label="Etat et collectivités publiques  Année 3"
                      name="etata3"
                      autoFocus
                      type="number"
                      value={credential.etata3}
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
                      id="detteba1"
                      label="Dettes bancaires à CT Année 1"
                      name="detteba1"
                      autoFocus
                      type="number"
                      value={credential.detteba1}
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
                      id="detteba2"
                      label="Dettes bancaires à CT Année 2"
                      name="detteba2"
                      autoFocus
                      type="number"
                      value={credential.detteba2}
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
                      id="detteba3"
                      label="Dettes bancaires à CT Année 3"
                      name="detteba3"
                      autoFocus
                      type="number"
                      value={credential.detteba3}
                      onChange={handleChange}
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
                    onClick={() => setShow2(!show2)}
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
  </>
  );
};

export default Chapitreonze
