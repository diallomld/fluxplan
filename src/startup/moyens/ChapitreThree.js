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
import useMediaQuery from '@material-ui/core/useMediaQuery';
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

const ChapitreThreeMoyen = () => {
  const editObject = {
    batimentqte:0,
    batimentcout:0,
    batimentmontant:0,
    batimentdate:"",
    batimentduree:0,
    amenagementqte:0,
    amenagementcout:0,
    amenagementmontant:0,
    amenagementdate:"",
    amenagementduree:0,
    splitqte:0,
    splitcout:0,
    splitmontant:0,
    splitdate:"",
    splitduree:0,
    ordibureauqte:0,
    ordibureaucout:0,
    ordibureaumontant:0,
    ordibureaudate:"",
    ordibureauduree:0,
    ordiportableqte:0,
    ordiportablecout:0,
    ordiportablemontant:0,
    ordiportabledate:"",
    ordiportableduree:0,
    ondulaireqte:0,
    ondulairecout:0,
    ondulairemontant:0,
    ondulairedate:"",
    ondulaireduree:0,
    ondulaireqte:0,
    ondulairecout:0,
    ondulairemontant:0,
    ondulairedate:"",
    ondulaireduree:0,
    imprimanteqte:0,
    imprimantecout:0,
    imprimantemontant:0,
    imprimantedate:"",
    imprimanteduree:0,
    photocopieqte:0,
    photocopiecout:0,
    photocopiemontant:0,
    photocopiedate:"",
    photocopieduree:0,
    videoqte: 0,
    videocout: 0,
    videomontant:0,
    videodate:"",
    videoduree:0,
    stabilisateurqte:0,
    stabilisateurcout:0,
    stabilisateurmontant:0,
    stabilisateurdate:"",
    stabilisateurduree:0,
    voitureqte:0,
    voiturecout:0,
    voituremontant:0,
    voituredate:"",
    voitureduree:0,
    tricycleqte:0,
    tricyclecout:0,
    tricyclemontant:0,
    tricycledate:"",
    tricycleduree:0,
    motoqte:0,
    motocout: 0,
    motomontant:0,
    motodate: "",
    motoduree:0,
    bureauqte:0,
    bureaucout:0,
    bureaumontant:0,
    bureaudate:"",
    bureauduree:0,
    placardqte:0,
    placardcout:0,
    placardmontant:0,
    placarddate:"",
    placardduree:0,
    tableqte: 0,
    tablecout:0,
    tablemontant:0,
    tabledate:"",
    tableduree:0,
    fauteuilqte:0,
    fauteuilcout:0,
    fauteuilmontant:0,
    fauteuildate:"",
    fauteuilduree:0,
    chaiseqte:0,
    chaisecout:0,
    chaisemontant:0,
    chaisedate:"",
    chaiseduree:0,
    autreqte:0,
    autrecout:0,
    autremontant:0,
    autredate:"",
    autreduree:0,
    materieletmobilierqte:0,
    materieletmobiliercout:0,
    materieletmobiliermontant:0,
    materieletmobilierdate:"",
    materieletmobilierduree:0,

  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [corporelle, setCorporelle] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [tqte, setQte] = React.useState(0)
  const [tcout, setCout] = React.useState(0)
  const [tmontant, setMontant] = React.useState(0)
  const [tduree, setDuree] = React.useState(0)
  const [tamort, setAmort] = React.useState(0)

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
    setEditTable(corporelle[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editIncorp = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("corporelle")
      .doc(idDoc)
      .set(
        {
            batimentqte:editTable.batimentqte,
            batimentcout:editTable.batimentcout,
            batimentmontant:editTable.batimentmontant,
            batimentdate:editTable.batimentdate,
            batimentduree:editTable.batimentduree,
            amenagementqte:editTable.amenagementqte,
            amenagementcout:editTable.amenagementcout,
            amenagementmontant:editTable.amenagementmontant,
            amenagementdate:editTable.amenagementdate,
            amenagementduree:editTable.amenagementduree,
            splitqte:editTable.splitqte,
            splitcout:editTable.splitcout,
            splitmontant:editTable.splitmontant,
            splitdate:editTable.splitdate,
            splitduree:editTable.splitduree,
            ordibureauqte:editTable.ordibureauqte,
            ordibureaucout:editTable.ordibureaucout,
            ordibureaumontant:editTable.ordibureaumontant,
            ordibureaudate:editTable.ordibureaudate,
            ordibureauduree:editTable.ordibureauduree,
            ordiportableqte:editTable.ordiportableqte,
            ordiportablecout:editTable.ordiportablecout,
            ordiportablemontant:editTable.ordiportablemontant,
            ordiportabledate:editTable.ordiportabledate,
            ordiportableduree:editTable.ordiportableduree,
            ondulaireqte:editTable.ondulaireqte,
            ondulairecout:editTable.ondulairecout,
            ondulairemontant:editTable.ondulairemontant,
            ondulairedate:editTable.ondulairedate,
            ondulaireduree:editTable.ondulaireduree,
            ondulaireqte:editTable.ondulaireqte,
            ondulairecout:editTable.ondulairecout,
            ondulairemontant:editTable.ondulairemontant,
            ondulairedate:editTable.ondulairedate,
            ondulaireduree:editTable.ondulaireduree,
            imprimanteqte:editTable.imprimanteqte,
            imprimantecout:editTable.imprimantecout,
            imprimantemontant:editTable.imprimantemontant,
            imprimantedate:editTable.imprimantedate,
            imprimanteduree:editTable.imprimanteduree,
            photocopieqte:editTable.photocopieqte,
            photocopiecout:editTable.photocopiecout,
            photocopiemontant:editTable.photocopiemontant,
            photocopiedate:editTable.photocopiedate,
            photocopieduree:editTable.photocopieduree,
            videoqte:editTable.videoqte,
            videocout:editTable.videocout,
            videomontant:editTable.videomontant,
            videodate:editTable.videodate,
            videoduree:editTable.videoduree,
            stabilisateurqte:editTable.stabilisateurqte,
            stabilisateurcout:editTable.stabilisateurcout,
            stabilisateurmontant:editTable.stabilisateurmontant,
            stabilisateurdate:editTable.stabilisateurdate,
            stabilisateurduree:editTable.stabilisateurduree,
            voitureqte:editTable.voitureqte,
            voiturecout:editTable.voiturecout,
            voituremontant:editTable.voituremontant,
            voituredate:editTable.voituredate,
            voitureduree:editTable.voitureduree,
            tricycleqte:editTable.tricycleqte,
            tricyclecout:editTable.tricyclecout,
            tricyclemontant:editTable.tricyclemontant,
            tricycledate:editTable.tricycledate,
            tricycleduree:editTable.tricycleduree,
            motoqte:editTable.motoqte,
            motocout:editTable.motocout,
            motomontant:editTable.motomontant,
            motodate:editTable.motodate,
            motoduree:editTable.motoduree,
            bureauqte:editTable.bureauqte,
            bureaucout:editTable.bureaucout,
            bureaumontant:editTable.bureaumontant,
            bureaudate:editTable.bureaudate,
            bureauduree:editTable.bureauduree,
            placardqte:editTable.placardqte,
            placardcout:editTable.placardcout,
            placardmontant:editTable.placardmontant,
            placarddate:editTable.placarddate,
            placardduree:editTable.placardduree,
            tableqte:editTable.tableqte,
            tablecout:editTable.tablecout,
            tablemontant:editTable.tablemontant,
            tabledate:editTable.tabledate,
            tableduree:editTable.tableduree,
            fauteuilqte:editTable.fauteuilqte,
            fauteuilcout:editTable.fauteuilcout,
            fauteuilmontant:editTable.fauteuilmontant,
            fauteuildate:editTable.fauteuildate,
            fauteuilduree:editTable.fauteuilduree,
            chaiseqte:editTable.chaiseqte,
            chaisecout:editTable.chaisecout,
            chaisemontant:editTable.chaisemontant,
            chaisedate:editTable.chaisedate,
            chaiseduree:editTable.chaiseduree,
            autreqte:editTable.autreqte,
            autrecout:editTable.autrecout,
            autremontant:editTable.autremontant,
            autredate:editTable.autredate,
            autreduree:editTable.autreduree,
            materieletmobilierqte:editTable.materieletmobilierqte,
            materieletmobiliercout:editTable.materieletmobiliercout,
            materieletmobiliermontant:editTable.materieletmobiliermontant,
            materieletmobilierdate:editTable.materieletmobilierdate,
            materieletmobilierduree:editTable.materieletmobilierduree,
            userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        setEditTable({
            ca:0,
            charges:0,
            resultatNet:0,
            cashFlow:0,
            pointMort:0,
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteIncorp = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("corporelle")
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
        setCorporelle(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("corporelle")
      .add({
            batimentqte:editTable.batimentqte,
            batimentcout:editTable.batimentcout,
            batimentmontant:editTable.batimentmontant,
            batimentdate:editTable.batimentdate,
            batimentduree:editTable.batimentduree,
            amenagementqte:editTable.amenagementqte,
            amenagementcout:editTable.amenagementcout,
            amenagementmontant:editTable.amenagementmontant,
            amenagementdate:editTable.amenagementdate,
            amenagementduree:editTable.amenagementduree,
            splitqte:editTable.splitqte,
            splitcout:editTable.splitcout,
            splitmontant:editTable.splitmontant,
            splitdate:editTable.splitdate,
            splitduree:editTable.splitduree,
            ordibureauqte:editTable.ordibureauqte,
            ordibureaucout:editTable.ordibureaucout,
            ordibureaumontant:editTable.ordibureaumontant,
            ordibureaudate:editTable.ordibureaudate,
            ordibureauduree:editTable.ordibureauduree,
            ordiportableqte:editTable.ordiportableqte,
            ordiportablecout:editTable.ordiportablecout,
            ordiportablemontant:editTable.ordiportablemontant,
            ordiportabledate:editTable.ordiportabledate,
            ordiportableduree:editTable.ordiportableduree,
            ondulaireqte:editTable.ondulaireqte,
            ondulairecout:editTable.ondulairecout,
            ondulairemontant:editTable.ondulairemontant,
            ondulairedate:editTable.ondulairedate,
            ondulaireduree:editTable.ondulaireduree,
            ondulaireqte:editTable.ondulaireqte,
            ondulairecout:editTable.ondulairecout,
            ondulairemontant:editTable.ondulairemontant,
            ondulairedate:editTable.ondulairedate,
            ondulaireduree:editTable.ondulaireduree,
            imprimanteqte:editTable.imprimanteqte,
            imprimantecout:editTable.imprimantecout,
            imprimantemontant:editTable.imprimantemontant,
            imprimantedate:editTable.imprimantedate,
            imprimanteduree:editTable.imprimanteduree,
            photocopieqte:editTable.photocopieqte,
            photocopiecout:editTable.photocopiecout,
            photocopiemontant:editTable.photocopiemontant,
            photocopiedate:editTable.photocopiedate,
            photocopieduree:editTable.photocopieduree,
            videoqte:editTable.videoqte,
            videocout:editTable.videocout,
            videomontant:editTable.videomontant,
            videodate:editTable.videodate,
            videoduree:editTable.videoduree,
            stabilisateurqte:editTable.stabilisateurqte,
            stabilisateurcout:editTable.stabilisateurcout,
            stabilisateurmontant:editTable.stabilisateurmontant,
            stabilisateurdate:editTable.stabilisateurdate,
            stabilisateurduree:editTable.stabilisateurduree,
            voitureqte:editTable.voitureqte,
            voiturecout:editTable.voiturecout,
            voituremontant:editTable.voituremontant,
            voituredate:editTable.voituredate,
            voitureduree:editTable.voitureduree,
            tricycleqte:editTable.tricycleqte,
            tricyclecout:editTable.tricyclecout,
            tricyclemontant:editTable.tricyclemontant,
            tricycledate:editTable.tricycledate,
            tricycleduree:editTable.tricycleduree,
            motoqte:editTable.motoqte,
            motocout:editTable.motocout,
            motomontant:editTable.motomontant,
            motodate:editTable.motodate,
            motoduree:editTable.motoduree,
            bureauqte:editTable.bureauqte,
            bureaucout:editTable.bureaucout,
            bureaumontant:editTable.bureaumontant,
            bureaudate:editTable.bureaudate,
            bureauduree:editTable.bureauduree,
            placardqte:editTable.placardqte,
            placardcout:editTable.placardcout,
            placardmontant:editTable.placardmontant,
            placarddate:editTable.placarddate,
            placardduree:editTable.placardduree,
            tableqte:editTable.tableqte,
            tablecout:editTable.tablecout,
            tablemontant:editTable.tablemontant,
            tabledate:editTable.tabledate,
            tableduree:editTable.tableduree,
            fauteuilqte:editTable.fauteuilqte,
            fauteuilcout:editTable.fauteuilcout,
            fauteuilmontant:editTable.fauteuilmontant,
            fauteuildate:editTable.fauteuildate,
            fauteuilduree:editTable.fauteuilduree,
            chaiseqte:editTable.chaiseqte,
            chaisecout:editTable.chaisecout,
            chaisemontant:editTable.chaisemontant,
            chaisedate:editTable.chaisedate,
            chaiseduree:editTable.chaiseduree,
            autreqte:editTable.autreqte,
            autrecout:editTable.autrecout,
            autremontant:editTable.autremontant,
            autredate:editTable.autredate,
            autreduree:editTable.autreduree,
            materieletmobilierqte:editTable.materieletmobilierqte,
            materieletmobiliercout:editTable.materieletmobiliercout,
            materieletmobiliermontant:editTable.materieletmobiliermontant,
            materieletmobilierdate:editTable.materieletmobilierdate,
            materieletmobilierduree:editTable.materieletmobilierduree,
            userId: userId,
      })
      .then(() => {
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  React.useEffect(() => {
    getDate();
  }, [toggle]);
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
      {corporelle.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Immobilisations corporelles </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Quantité</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Coût unitaire</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Date d’acquisition</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Durée amortissement (en an)</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Amortissement annuel</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><b>Terrain</b></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><b>N/A</b></TableCell>
                        <TableCell><b>N/A</b></TableCell>
                    </TableRow>
                  {corporelle.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>Bâtiment</TableCell>
                              <TableCell>{item.batimentqte}</TableCell>
                              <TableCell>{item.batimentcout}</TableCell>
                              <TableCell>{item.batimentmontant}</TableCell>
                              <TableCell>{item.batimentdate}</TableCell>
                              <TableCell>{item.batimentduree}</TableCell>
                              <TableCell>{Number(item.batimentmontant/item.batimentduree)}</TableCell>
                              <TableCell rowSpan="24">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteIncorp(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Aménagement</TableCell>
                            <TableCell>{item.amenagementqte}</TableCell>
                            <TableCell>{item.amenagementcout}</TableCell>
                            <TableCell>{item.amenagementmontant}</TableCell>
                            <TableCell>{item.amenagementdate}</TableCell>
                            <TableCell>{item.amenagementduree}</TableCell>
                            <TableCell>{Number(item.amenagementmontant/item.amenagementduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Split </TableCell>
                            <TableCell>{item.splitqte}</TableCell>
                            <TableCell>{item.splitcout}</TableCell>
                            <TableCell>{item.splitmontant}</TableCell>
                            <TableCell>{item.splitdate}</TableCell>
                            <TableCell>{item.splitduree}</TableCell>
                            <TableCell>{Number(item.splitmontant/item.splitduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell><b>Bâtiment, installation et agencement</b> </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Ordinateur bureau </TableCell>
                            <TableCell>{item.ordibureauqte}</TableCell>
                            <TableCell>{item.ordibureaucout}</TableCell>
                            <TableCell>{item.ordibureaumontant}</TableCell>
                            <TableCell>{item.ordibureaudate}</TableCell>
                            <TableCell>{item.ordibureauduree}</TableCell>
                              <TableCell>{Number(item.ordibureaumontant/item.ordibureauduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Ordinateur portable </TableCell>
                            <TableCell>{item.ordiportableqte}</TableCell>
                            <TableCell>{item.ordiportablecout}</TableCell>
                            <TableCell>{item.ordiportablemontant}</TableCell>
                            <TableCell>{item.ordiportabledate}</TableCell>
                            <TableCell>{item.ordiportableduree}</TableCell>
                              <TableCell>{Number(item.ordiportablemontant/item.ordiportableduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Ondulaire </TableCell>
                            <TableCell>{item.ondulaireqte}</TableCell>
                            <TableCell>{item.ondulairecout}</TableCell>
                            <TableCell>{item.ondulairemontant}</TableCell>
                            <TableCell>{item.ondulairedate}</TableCell>
                            <TableCell>{item.ondulaireduree}</TableCell>
                              <TableCell>{Number(item.ondulairemontant/item.ondulaireduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Imprimante </TableCell>
                            <TableCell>{item.imprimanteqte}</TableCell>
                            <TableCell>{item.imprimantecout}</TableCell>
                            <TableCell>{item.imprimantemontant}</TableCell>
                            <TableCell>{item.imprimantedate}</TableCell>
                            <TableCell>{item.imprimanteduree}</TableCell>
                            <TableCell>{Number(item.imprimantemontant/item.imprimanteduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Photocopieuse </TableCell>
                            <TableCell>{item.photocopieqte}</TableCell>
                            <TableCell>{item.photocopiecout}</TableCell>
                            <TableCell>{item.photocopiemontant}</TableCell>
                            <TableCell>{item.photocopiedate}</TableCell>
                            <TableCell>{item.photocopieduree}</TableCell>
                            <TableCell>{Number(item.photocopiemontant/item.photocopieduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Vidéo projecteur </TableCell>
                            <TableCell>{item.videoqte}</TableCell>
                            <TableCell>{item.videocout}</TableCell>
                            <TableCell>{item.videomontant}</TableCell>
                            <TableCell>{item.videodate}</TableCell>
                            <TableCell>{item.videoduree}</TableCell>
                            <TableCell>{Number(item.videomontant/item.videoduree)}</TableCell>
                        </TableRow>

                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Stabilisateur </TableCell>
                            <TableCell>{item.stabilisateurqte}</TableCell>
                            <TableCell>{item.stabilisateurcout}</TableCell>
                            <TableCell>{item.stabilisateurmontant}</TableCell>
                            <TableCell>{item.stabilisateurdate}</TableCell>
                            <TableCell>{item.stabilisateurduree}</TableCell>
                            <TableCell>{Number(item.stabilisateurmontant/item.stabilisateurduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Voiture </TableCell>
                            <TableCell>{item.voitureqte}</TableCell>
                            <TableCell>{item.voiturecout}</TableCell>
                            <TableCell>{item.voituremontant}</TableCell>
                            <TableCell>{item.voituredate}</TableCell>
                            <TableCell>{item.voitureduree}</TableCell>
                            <TableCell>{Number(item.voituremontant/item.voitureduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Stabilisateur </TableCell>
                            <TableCell>{item.stabilisateurqte}</TableCell>
                            <TableCell>{item.stabilisateurcout}</TableCell>
                            <TableCell>{item.stabilisateurmontant}</TableCell>
                            <TableCell>{item.stabilisateurdate}</TableCell>
                            <TableCell>{item.stabilisateurduree}</TableCell>
                            <TableCell>{Number(item.stabilisateurmontant/item.stabilisateurduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Voiture </TableCell>
                            <TableCell>{item.voitureqte}</TableCell>
                            <TableCell>{item.voiturecout}</TableCell>
                            <TableCell>{item.voituremontant}</TableCell>
                            <TableCell>{item.voituredate}</TableCell>
                            <TableCell>{item.voitureduree}</TableCell>
                            <TableCell>{Number(item.voituremontant/item.voitureduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Tricycle </TableCell>
                            <TableCell>{item.tricycleqte}</TableCell>
                            <TableCell>{item.tricyclecout}</TableCell>
                            <TableCell>{item.tricyclemontant}</TableCell>
                            <TableCell>{item.tricycledate}</TableCell>
                            <TableCell>{item.tricycleduree}</TableCell>
                            <TableCell>{Number(item.tricyclemontant/item.tricycleduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Moto </TableCell>
                            <TableCell>{item.motoqte}</TableCell>
                            <TableCell>{item.motocout}</TableCell>
                            <TableCell>{item.motomontant}</TableCell>
                            <TableCell>{item.motodate}</TableCell>
                            <TableCell>{item.motoduree}</TableCell>
                            <TableCell>{Number(item.motomontant/item.motoduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Bureau </TableCell>
                            <TableCell>{item.bureauqte}</TableCell>
                            <TableCell>{item.bureaucout}</TableCell>
                            <TableCell>{item.bureaumontant}</TableCell>
                            <TableCell>{item.bureaudate}</TableCell>
                            <TableCell>{item.bureauduree}</TableCell>
                            <TableCell>{Number(item.bureaumontant/item.bureauduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Placard </TableCell>
                            <TableCell>{item.placardqte}</TableCell>
                            <TableCell>{item.placardcout}</TableCell>
                            <TableCell>{item.placardmontant}</TableCell>
                            <TableCell>{item.placarddate}</TableCell>
                            <TableCell>{item.placardduree}</TableCell>
                            <TableCell>{Number(item.placardmontant/item.placardduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Table </TableCell>
                            <TableCell>{item.tableqte}</TableCell>
                            <TableCell>{item.tablecout}</TableCell>
                            <TableCell>{item.tablemontant}</TableCell>
                            <TableCell>{item.tabledate}</TableCell>
                            <TableCell>{item.tableduree}</TableCell>
                            <TableCell>{Number(item.tablemontant/item.tableduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Fauteuil </TableCell>
                            <TableCell>{item.fauteuilqte}</TableCell>
                            <TableCell>{item.fauteuilcout}</TableCell>
                            <TableCell>{item.fauteuilmontant}</TableCell>
                            <TableCell>{item.fauteuildate}</TableCell>
                            <TableCell>{item.fauteuilduree}</TableCell>
                            <TableCell>{Number(item.fauteuilmontant/item.fauteuilduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Chaises </TableCell>
                            <TableCell>{item.chaiseqte}</TableCell>
                            <TableCell>{item.chaisecout}</TableCell>
                            <TableCell>{item.chaisemontant}</TableCell>
                            <TableCell>{item.chaisedate}</TableCell>
                            <TableCell>{item.chaiseduree}</TableCell>
                            <TableCell>{Number(item.chaisemontant/item.chaiseduree)}</TableCell>
                        </TableRow>
                        
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Autres </TableCell>
                            <TableCell>{item.autreqte}</TableCell>
                            <TableCell>{item.autrecout}</TableCell>
                            <TableCell>{item.autremontant}</TableCell>
                            <TableCell>{item.autredate}</TableCell>
                            <TableCell>{item.autreduree}</TableCell>
                              <TableCell>{Number(item.autremontant/item.autreduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell><b>Matériels et mobiliers</b> </TableCell>
                            <TableCell>{item.materieletmobilierqte}</TableCell>
                            <TableCell>{item.materieletmobiliercout}</TableCell>
                            <TableCell>{item.materieletmobiliermontant}</TableCell>
                            <TableCell>{item.materieletmobilierdate}</TableCell>
                            <TableCell>{item.materieletmobilierduree}</TableCell>
                            <TableCell>{Number(item.materieletmobiliermontant/item.materieletmobilierduree)}</TableCell>
                        </TableRow>
                        </>
                      );
                    })}
                    <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell><b>Total</b> </TableCell>
                        <TableCell>{tqte}</TableCell>
                        <TableCell>{tcout}</TableCell>
                        <TableCell>{tmontant}</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{tduree}</TableCell>
                        <TableCell>{tamort}</TableCell>
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
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Quantité</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Coût unitaire</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Date d’acquisition</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Durée amortissement (en an)</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Amortissement annuel</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
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
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editIncorp}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="batimentqte"
                  label="Quantité Batiment"
                  name="batimentqte"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.batimentqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="batimentcout"
                  label="Cout Batiment"
                  name="batimentcout"
                  rowsMax={10}
                  rows="5"
                  value={editTable.batimentcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="batimentmontant"
                  label="Montant Batiment"
                  name="batimentmontant"
                  rowsMax={10}
                  rows="5"
                  value={editTable.batimentmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="batimentdate"
                  label="Date d’acquisition Batiment"
                  name="batimentdate"
                  rowsMax={10}
                  rows="5"
                  value={editTable.batimentdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="batimentduree"
                  label="Durée amortissement batiment"
                  name="batimentduree"
                  rowsMax={10}
                  rows="5"
                  value={editTable.batimentduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="amenagementqte"
                  label="Quantité Aménagement"
                  name="amenagementqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.amenagementqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="amenagementcout"
                  label="Cout Aménagement"
                  name="amenagementcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.amenagementcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="amenagementmontant"
                  label="Montant Aménagement"
                  name="amenagementmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.amenagementmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="amenagementdate"
                  label="Date d’acquisition Aménagement"
                  name="amenagementdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.amenagementdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="amenagementduree"
                  label="Durée amortissement (en an) Aménagement"
                  name="amenagementduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.amenagementduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="splitqte"
                  label="Quantité Split"
                  name="splitqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.splitqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="splitcout"
                  label="Cout Split"
                  name="splitcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.splitcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="splitmontant"
                  label="Montant Split"
                  name="splitmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.splitmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="splitdate"
                  label="Date Split"
                  name="splitdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.splitdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="splitduree"
                  label="Durée Split"
                  name="splitduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.splitduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordibureauqte"
                  label="Quantité Ordinateur bureau"
                  name="ordibureauqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordibureauqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordibureaucout"
                  label="Cout Ordinateur bureau"
                  name="ordibureaucout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordibureaucout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordibureaumontant"
                  label="Montant Ordinateur bureau"
                  name="ordibureaumontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordibureaumontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordibureaudate"
                  label="Date Ordinateur bureau"
                  name="ordibureaudate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordibureaudate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordibureauduree"
                  label="Durée Ordinateur bureau"
                  name="ordibureauduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordibureauduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordiportableqte"
                  label="Quantité Ordinateur portable"
                  name="ordiportableqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordiportableqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordiportablecout"
                  label="Cout Ordinateur portable"
                  name="ordiportablecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordiportablecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordiportablemontant"
                  label="Montant Ordinateur portable"
                  name="ordiportablemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordiportablemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordiportabledate"
                  label="Date Ordinateur portable"
                  name="ordiportabledate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordiportabledate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ordiportableduree"
                  label="Durée Ordinateur portable"
                  name="ordiportableduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ordiportableduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ondulaireqte"
                  label="Quantité Ondulaire"
                  name="ondulaireqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.ondulaireqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ondulairecout"
                  label="Cout Ondulaire"
                  name="ondulairecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ondulairecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ondulairemontant"
                  label="Montant Ondulaire"
                  name="ondulairemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ondulairemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ondulairedate"
                  label="Date Ondulaire"
                  name="ondulairedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ondulairedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="ondulaireduree"
                  label="Durée Ondulaire"
                  name="ondulaireduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ondulaireduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="imprimanteqte"
                  label="Quantité Imprimante"
                  name="imprimanteqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.imprimanteqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="imprimantecout"
                  label="Cout Imprimante"
                  name="imprimantecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.imprimantecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="imprimantemontant"
                  label="Montant Imprimante"
                  name="imprimantemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.imprimantemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="imprimantedate"
                  label="Date Imprimante"
                  name="imprimantedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.imprimantedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="imprimanteduree"
                  label="Durée Imprimante"
                  name="imprimanteduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.imprimanteduree}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="photocopieqte"
                  label="Quantité photocopie"
                  name="photocopieqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.photocopieqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="photocopiecout"
                  label="Cout photocopie"
                  name="photocopiecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.photocopiecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="photocopiemontant"
                  label="Montant photocopie"
                  name="photocopiemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.photocopiemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="photocopiedate"
                  label="Date photocopie"
                  name="photocopiedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.photocopiedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="photocopieduree"
                  label="Durée d’amortissement photocopieuse"
                  name="photocopieduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.photocopieduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="videoqte"
                  label="Quantité Vidéo projecteur"
                  name="videoqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.videoqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="videocout"
                  label="Cout Unitaire Vidéo projecteur"
                  name="videocout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.videocout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="videomontant"
                  label="Montant Vidéo projecteur"
                  name="videomontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.videomontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="videodate"
                  label="Date Vidéo projecteur"
                  name="videodate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.videodate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="videoduree"
                  label="Durée d’amortissement Vidéo projecteur"
                  name="videoduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.videoduree}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="stabilisateurqte"
                  label="Quantité Stabilisateur"
                  name="stabilisateurqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.stabilisateurqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="stabilisateurcout"
                  label="Cout Unitaire Stabilisateur"
                  name="stabilisateurcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.stabilisateurcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="stabilisateurmontant"
                  label="Montant Stabilisateur"
                  name="stabilisateurmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.stabilisateurmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="stabilisateurdate"
                  label="Date Stabilisateur"
                  name="stabilisateurdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.stabilisateurdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="stabilisateurduree"
                  label="Durée d’amortissement Stabilisateur"
                  name="stabilisateurduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.stabilisateurduree}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="voitureqte"
                  label="Quantité voiture"
                  name="voitureqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.voitureqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="voiturecout"
                  label="Cout Unitaire voiture"
                  name="voiturecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.voiturecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="voituremontant"
                  label="Montant voiture"
                  name="voituremontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.voituremontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="voituredate"
                  label="Date voiture"
                  name="voituredate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.voituredate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="voitureduree"
                  label="Durée d’amortissement voiture"
                  name="voitureduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.voitureduree}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tricycleqte"
                  label="Quantité tricycle"
                  name="tricycleqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.tricycleqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tricyclecout"
                  label="Cout Unitaire tricycle"
                  name="tricyclecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tricyclecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tricyclemontant"
                  label="Montant tricycle"
                  name="tricyclemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tricyclemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tricycledate"
                  label="Date tricycle"
                  name="tricycledate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tricycledate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tricycleduree"
                  label="Durée d’amortissement tricycle"
                  name="tricycleduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tricycleduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="motoqte"
                  label="Quantité moto"
                  name="motoqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.motoqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="motocout"
                  label="Cout Unitaire moto"
                  name="motocout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.motocout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="motomontant"
                  label="Montant moto"
                  name="motomontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.motomontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="motodate"
                  label="Date moto"
                  name="motodate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.motodate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="motoduree"
                  label="Durée d’amortissement moto"
                  name="motoduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.motoduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bureauqte"
                  label="Quantité bureau"
                  name="bureauqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.bureauqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bureaucout"
                  label="Cout Unitaire bureau"
                  name="bureaucout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.bureaucout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bureaumontant"
                  label="Montant bureau"
                  name="bureaumontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.bureaumontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bureaudate"
                  label="Date bureau"
                  name="bureaudate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.bureaudate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="bureauduree"
                  label="Durée d’amortissement bureau"
                  name="bureauduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.bureauduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="placardqte"
                  label="Quantité placard"
                  name="placardqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.placardqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="placardcout"
                  label="Cout Unitaire placard"
                  name="placardcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.placardcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="placardmontant"
                  label="Montant placard"
                  name="placardmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.placardmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="placarddate"
                  label="Date placard"
                  name="placarddate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.placarddate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="placardduree"
                  label="Durée d’amortissement placard"
                  name="placardduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.placardduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tableqte"
                  label="Quantité table"
                  name="tableqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.tableqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tablecout"
                  label="Cout Unitaire table"
                  name="tablecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tablecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tablemontant"
                  label="Montant table"
                  name="tablemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tablemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tabledate"
                  label="Date table"
                  name="tabledate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tabledate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="tableduree"
                  label="Durée d’amortissement table"
                  name="tableduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.tableduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fauteuilqte"
                  label="Quantité fauteuil"
                  name="fauteuilqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.fauteuilqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fauteuilcout"
                  label="Cout Unitaire fauteuil"
                  name="fauteuilcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.fauteuilcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fauteuilmontant"
                  label="Montant fauteuil"
                  name="fauteuilmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.fauteuilmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fauteuildate"
                  label="Date fauteuil"
                  name="fauteuildate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.fauteuildate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fauteuilduree"
                  label="Durée d’amortissement fauteuil"
                  name="fauteuilduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.fauteuilduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="chaiseqte"
                  label="Quantité chaise"
                  name="chaiseqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.chaiseqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="chaisecout"
                  label="Cout Unitaire chaise"
                  name="chaisecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.chaisecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="chaisemontant"
                  label="Montant chaise"
                  name="chaisemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.chaisemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="chaisedate"
                  label="Date chaise"
                  name="chaisedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.chaisedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="chaiseduree"
                  label="Durée d’amortissement chaise"
                  name="chaiseduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.chaiseduree}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autreqte"
                  label="Quantité autre"
                  name="autreqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.autreqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autrecout"
                  label="Cout Unitaire autre"
                  name="autrecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.autrecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autremontant"
                  label="Montant autre"
                  name="autremontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.autremontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autredate"
                  label="Date autre"
                  name="autredate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.autredate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autreduree"
                  label="Durée d’amortissement autre"
                  name="autreduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.autreduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="materieletmobilierqte"
                  label="Quantité Matériels et mobiliers"
                  name="materieletmobilierqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.materieletmobilierqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="materieletmobiliercout"
                  label="Cout Unitaire Matériels et mobiliers"
                  name="materieletmobiliercout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.materieletmobiliercout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="materieletmobiliermontant"
                  label="Montant Matériels et mobiliers"
                  name="materieletmobiliermontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.materieletmobiliermontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="materieletmobilierdate"
                  label="Date Matériels et mobiliers"
                  name="materieletmobilierdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.materieletmobilierdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="materieletmobilierduree"
                  label="Durée d’amortissement Matériels et mobiliers"
                  name="materieletmobilierduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.materieletmobilierduree}
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
                    fullWidth
                    id="batimentqte"
                    label="Quantité Batiment"
                    name="batimentqte"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.batimentqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="batimentcout"
                    label="Cout Batiment"
                    name="batimentcout"
                    rowsMax={10}
                    rows="5"
                    value={editTable.batimentcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="batimentmontant"
                    label="Montant Batiment"
                    name="batimentmontant"
                    rowsMax={10}
                    rows="5"
                    value={editTable.batimentmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="batimentdate"
                    label="Date d’acquisition Batiment"
                    name="batimentdate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.batimentdate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="batimentduree"
                    label="Durée amortissement batiment"
                    name="batimentduree"
                    rowsMax={10}
                    rows="5"
                    value={editTable.batimentduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="amenagementqte"
                    label="Quantité Aménagement"
                    name="amenagementqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.amenagementqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="amenagementcout"
                    label="Cout Aménagement"
                    name="amenagementcout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.amenagementcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="amenagementmontant"
                    label="Montant Aménagement"
                    name="amenagementmontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.amenagementmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="amenagementdate"
                    label="Date d’acquisition Aménagement"
                    name="amenagementdate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.amenagementdate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="amenagementduree"
                    label="Durée amortissement (en an) Aménagement"
                    name="amenagementduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.amenagementduree}
                    onChange={handleChange}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="splitqte"
                    label="Quantité Split"
                    name="splitqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.splitqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="splitcout"
                    label="Cout Split"
                    name="splitcout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.splitcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="splitmontant"
                    label="Montant Split"
                    name="splitmontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.splitmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="splitdate"
                    label="Date Split"
                    name="splitdate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.splitdate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="splitduree"
                    label="Durée Split"
                    name="splitduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.splitduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordibureauqte"
                    label="Quantité Ordinateur bureau"
                    name="ordibureauqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordibureauqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordibureaucout"
                    label="Cout Ordinateur bureau"
                    name="ordibureaucout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordibureaucout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordibureaumontant"
                    label="Montant Ordinateur bureau"
                    name="ordibureaumontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordibureaumontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordibureaudate"
                    label="Date Ordinateur bureau"
                    name="ordibureaudate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordibureaudate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordibureauduree"
                    label="Durée Ordinateur bureau"
                    name="ordibureauduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordibureauduree}
                    onChange={handleChange}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordiportableqte"
                    label="Quantité Ordinateur portable"
                    name="ordiportableqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordiportableqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordiportablecout"
                    label="Cout Ordinateur portable"
                    name="ordiportablecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordiportablecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordiportablemontant"
                    label="Montant Ordinateur portable"
                    name="ordiportablemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordiportablemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordiportabledate"
                    label="Date Ordinateur portable"
                    name="ordiportabledate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordiportabledate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ordiportableduree"
                    label="Durée Ordinateur portable"
                    name="ordiportableduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ordiportableduree}
                    onChange={handleChange}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ondulaireqte"
                    label="Quantité Ondulaire"
                    name="ondulaireqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.ondulaireqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ondulairecout"
                    label="Cout Ondulaire"
                    name="ondulairecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ondulairecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ondulairemontant"
                    label="Montant Ondulaire"
                    name="ondulairemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ondulairemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ondulairedate"
                    label="Date Ondulaire"
                    name="ondulairedate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ondulairedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="ondulaireduree"
                    label="Durée Ondulaire"
                    name="ondulaireduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.ondulaireduree}
                    onChange={handleChange}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imprimanteqte"
                    label="Quantité Imprimante"
                    name="imprimanteqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.imprimanteqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imprimantecout"
                    label="Cout Imprimante"
                    name="imprimantecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.imprimantecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imprimantemontant"
                    label="Montant Imprimante"
                    name="imprimantemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.imprimantemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imprimantedate"
                    label="Date Imprimante"
                    name="imprimantedate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.imprimantedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="imprimanteduree"
                    label="Durée Imprimante"
                    name="imprimanteduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.imprimanteduree}
                    onChange={handleChange}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="photocopieqte"
                    label="Quantité photocopie"
                    name="photocopieqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.photocopieqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="photocopiecout"
                    label="Cout photocopie"
                    name="photocopiecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.photocopiecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="photocopiemontant"
                    label="Montant photocopie"
                    name="photocopiemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.photocopiemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="photocopiedate"
                    label="Date photocopie"
                    name="photocopiedate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.photocopiedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="photocopieduree"
                    label="Durée d’amortissement photocopieuse"
                    name="photocopieduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.photocopieduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="videoqte"
                    label="Quantité Vidéo projecteur"
                    name="videoqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.videoqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="videocout"
                    label="Cout Unitaire Vidéo projecteur"
                    name="videocout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.videocout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="videomontant"
                    label="Montant Vidéo projecteur"
                    name="videomontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.videomontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="videodate"
                    label="Date Vidéo projecteur"
                    name="videodate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.videodate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="videoduree"
                    label="Durée d’amortissement Vidéo projecteur"
                    name="videoduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.videoduree}
                    onChange={handleChange}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="stabilisateurqte"
                    label="Quantité Stabilisateur"
                    name="stabilisateurqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.stabilisateurqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="stabilisateurcout"
                    label="Cout Unitaire Stabilisateur"
                    name="stabilisateurcout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.stabilisateurcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="stabilisateurmontant"
                    label="Montant Stabilisateur"
                    name="stabilisateurmontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.stabilisateurmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="stabilisateurdate"
                    label="Date Stabilisateur"
                    name="stabilisateurdate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.stabilisateurdate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="stabilisateurduree"
                    label="Durée d’amortissement Stabilisateur"
                    name="stabilisateurduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.stabilisateurduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="voitureqte"
                    label="Quantité voiture"
                    name="voitureqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.voitureqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="voiturecout"
                    label="Cout Unitaire voiture"
                    name="voiturecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.voiturecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="voituremontant"
                    label="Montant voiture"
                    name="voituremontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.voituremontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="voituredate"
                    label="Date voiture"
                    name="voituredate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.voituredate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="voitureduree"
                    label="Durée d’amortissement voiture"
                    name="voitureduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.voitureduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tricycleqte"
                    label="Quantité tricycle"
                    name="tricycleqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.tricycleqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tricyclecout"
                    label="Cout Unitaire tricycle"
                    name="tricyclecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tricyclecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tricyclemontant"
                    label="Montant tricycle"
                    name="tricyclemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tricyclemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tricycledate"
                    label="Date tricycle"
                    name="tricycledate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tricycledate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tricycleduree"
                    label="Durée d’amortissement tricycle"
                    name="tricycleduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tricycleduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="motoqte"
                    label="Quantité moto"
                    name="motoqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.motoqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="motocout"
                    label="Cout Unitaire moto"
                    name="motocout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.motocout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="motomontant"
                    label="Montant moto"
                    name="motomontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.motomontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="motodate"
                    label="Date moto"
                    name="motodate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.motodate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="motoduree"
                    label="Durée d’amortissement moto"
                    name="motoduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.motoduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bureauqte"
                    label="Quantité bureau"
                    name="bureauqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.bureauqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bureaucout"
                    label="Cout Unitaire bureau"
                    name="bureaucout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.bureaucout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bureaumontant"
                    label="Montant bureau"
                    name="bureaumontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.bureaumontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bureaudate"
                    label="Date bureau"
                    name="bureaudate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.bureaudate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="bureauduree"
                    label="Durée d’amortissement bureau"
                    name="bureauduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.bureauduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="placardqte"
                    label="Quantité placard"
                    name="placardqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.placardqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="placardcout"
                    label="Cout Unitaire placard"
                    name="placardcout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.placardcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="placardmontant"
                    label="Montant placard"
                    name="placardmontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.placardmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="placarddate"
                    label="Date placard"
                    name="placarddate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.placarddate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="placardduree"
                    label="Durée d’amortissement placard"
                    name="placardduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.placardduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tableqte"
                    label="Quantité table"
                    name="tableqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.tableqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tablecout"
                    label="Cout Unitaire table"
                    name="tablecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tablecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tablemontant"
                    label="Montant table"
                    name="tablemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tablemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tabledate"
                    label="Date table"
                    name="tabledate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tabledate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tableduree"
                    label="Durée d’amortissement table"
                    name="tableduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.tableduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fauteuilqte"
                    label="Quantité fauteuil"
                    name="fauteuilqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.fauteuilqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fauteuilcout"
                    label="Cout Unitaire fauteuil"
                    name="fauteuilcout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.fauteuilcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fauteuilmontant"
                    label="Montant fauteuil"
                    name="fauteuilmontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.fauteuilmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fauteuildate"
                    label="Date fauteuil"
                    name="fauteuildate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.fauteuildate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="fauteuilduree"
                    label="Durée d’amortissement fauteuil"
                    name="fauteuilduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.fauteuilduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="chaiseqte"
                    label="Quantité chaise"
                    name="chaiseqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.chaiseqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="chaisecout"
                    label="Cout Unitaire chaise"
                    name="chaisecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.chaisecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="chaisemontant"
                    label="Montant chaise"
                    name="chaisemontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.chaisemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="chaisedate"
                    label="Date chaise"
                    name="chaisedate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.chaisedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="chaiseduree"
                    label="Durée d’amortissement chaise"
                    name="chaiseduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.chaiseduree}
                    onChange={handleChange}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autreqte"
                    label="Quantité autre"
                    name="autreqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.autreqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autrecout"
                    label="Cout Unitaire autre"
                    name="autrecout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.autrecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autremontant"
                    label="Montant autre"
                    name="autremontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.autremontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autredate"
                    label="Date autre"
                    name="autredate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.autredate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autreduree"
                    label="Durée d’amortissement autre"
                    name="autreduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.autreduree}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="materieletmobilierqte"
                    label="Quantité Matériels et mobiliers"
                    name="materieletmobilierqte"
                    rowsMax={10}
                    rows="5"
                    value={editTable.materieletmobilierqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="materieletmobiliercout"
                    label="Cout Unitaire Matériels et mobiliers"
                    name="materieletmobiliercout"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.materieletmobiliercout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="materieletmobiliermontant"
                    label="Montant Matériels et mobiliers"
                    name="materieletmobiliermontant"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.materieletmobiliermontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="materieletmobilierdate"
                    label="Date Matériels et mobiliers"
                    name="materieletmobilierdate"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.materieletmobilierdate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="materieletmobilierduree"
                    label="Durée d’amortissement Matériels et mobiliers"
                    name="materieletmobilierduree"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.materieletmobilierduree}
                    onChange={handleChange}
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
  );
};

export default ChapitreThreeMoyen
