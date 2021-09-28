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
  const initialvalues = {
    capitala0: 0,
    capitala1: 0,
    capitala2: 0,
    capitala3: 0,
    fournisseura0: 0,
    fournisseura1: 0,
    fournisseura2: 0,
    fournisseura3: 0,
    autrea0: 0,
    autrea1: 0,
    autrea2: 0,
    autrea3: 0,
  };
  const editObject = {
    brut0: 0,
    brut1: 0,
    brut2: 0,
    brut3: 0,
    amort0: 0,
    amort1: 0,
    amort2: 0,
    amort3: 0,
    creance0: 0,
    creance1: 0,
    creance2: 0,
    creance3: 0,
    tresorerie0: 0,
    tresorerie1: 0,
    tresorerie2: 0,
    tresorerie3: 0,
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

  const [immobilisation, setImmobilisation] = React.useState(0);
  const [stock, setStock] = React.useState(0);
  const [resultat, setResultat] = React.useState(0);
  const [emprunt, setEmprunt] = React.useState(0);


  const [totalpassifa0, setTotalpassifa0] = React.useState()
  const [totalpassifa1, setTotalpassifa1] = React.useState()
  const [totalpassifa2, setTotalpassifa2] = React.useState()
  const [totalpassifa3, setTotalpassifa3] = React.useState()

  const [totalactifa0, setTotalactifa0] = React.useState()
  const [totalactifa1, setTotalactifa1] = React.useState()
  const [totalactifa2, setTotalactifa2] = React.useState()
  const [totalactifa3, setTotalactifa3] = React.useState()

  // investissement
  const [totalIcorp, settotalIcorp] = React.useState(0)
  const [totalIincpor, setotalIincpor] = React.useState(0)
  const [totalIf, setotalIf] = React.useState(0)


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
  const handleModif = (id, index) => {
    setEditTable(bilan[index])
    setShow(!show);
    if (show) {
      setIdDoc("");
    } else {
      setIdDoc(id);
    }
  };
  const handleModif2 = (id, index) => {
    setCredential(passif[index])
    setShow2(!show2);
    console.log("edit handle")
    if (show2) {
      setIdDoc2("");
    } else {
      setIdDoc2(id);
    }
  };
  const editBilanPassif = (e) => {
    e.preventDefault();
    setLoad2(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("bilan-previsionnel-passif")
      .doc(idDoc2)
      .set(
        {
          capitala0: credential.capitala0,
          capitala1: credential.capitala1,
          capitala2: credential.capitala2,
          capitala3: credential.capitala3,
          fournisseura0: credential.fournisseura0,
          fournisseura1: credential.fournisseura1,
          fournisseura2: credential.fournisseura2,
          fournisseura3: credential.fournisseura3,
          autrea0: credential.autrea0,
          autrea1: credential.autrea1,
          autrea2: credential.autrea2,
          autrea3: credential.autrea3,
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
  const editBilanActif = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("bilan-previsionnel-actif")
      .doc(idDoc)
      .set(
        {
          brut0: editTable.brut0,
          brut1: editTable.brut1,
          brut2: editTable.brut2,
          brut3: editTable.brut3,
          amort0: editTable.amort0,
          amort1: editTable.amort1,
          amort2: editTable.amort2,
          amort3: editTable.amort3,
          creance0: editTable.creance0,
          creance1: editTable.creance1,
          creance2: editTable.creance2,
          creance3: editTable.creance3,
          tresorerie0: editTable.tresorerie0,
          tresorerie1: editTable.tresorerie1,
          tresorerie2: editTable.tresorerie2,
          tresorerie3: editTable.tresorerie3,
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
  const deleteBilanPassif = (id) => {
    setLoad2(true)
    firebasee
      .firestore()
      .collection("bilan-previsionnel-passif")
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
  const deletePrevisionActif = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("bilan-previsionnel-actif")
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
      .collection("bilan-previsionnel-passif")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];

        let tpassifa0 = 0
        let tpassifa1 = 0
        let tpassifa2 = 0
        let tpassifa3 = 0

        data.forEach((doc) => {

          dat.push({

            capitala0: doc.data().capitala0,
            capitala1: doc.data().capitala1,
            capitala2: doc.data().capitala2,
            capitala3: doc.data().capitala3,
            fournisseura0: doc.data().fournisseura0,
            fournisseura1: doc.data().fournisseura1,
            fournisseura2: doc.data().fournisseura2,
            fournisseura3: doc.data().fournisseura3,
            autrea0: doc.data().autrea0,
            autrea1: doc.data().autrea1,
            autrea2: doc.data().autrea2,
            autrea3: doc.data().autrea3,

            docIdd: doc.id,
          });

          tpassifa0 = Number(doc.data().capitala0) + Number(doc.data().fournisseura0) + Number(doc.data().autrea0)
          tpassifa1 = Number(doc.data().capitala1) + Number(doc.data().fournisseura1) + Number(doc.data().autrea1)
          tpassifa2 = Number(doc.data().capitala2) + Number(doc.data().fournisseura2) + Number(doc.data().autrea2)
          tpassifa3 = Number(doc.data().capitala3) + Number(doc.data().fournisseura3) + Number(doc.data().autrea3)

          setTotalpassifa0(tpassifa0)
          setTotalpassifa1(tpassifa1)
          setTotalpassifa2(tpassifa2)
          setTotalpassifa3(tpassifa3)

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
      .collection("bilan-previsionnel-actif")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let tactifa0 = 0
        let tactifa1 = 0
        let tactifa2 = 0
        let tactifa3 = 0

        data.forEach((doc) => {

          dat.push({
            brut0: doc.data().brut0,
            brut1: doc.data().brut1,
            brut2: doc.data().brut2,
            brut3: doc.data().brut3,
            amort0: doc.data().amort0,
            amort1: doc.data().amort1,
            amort2: doc.data().amort2,
            amort3: doc.data().amort3,
            creance0: doc.data().creance0,
            creance1: doc.data().creance1,
            creance2: doc.data().creance2,
            creance3: doc.data().creance3,
            tresorerie0: doc.data().tresorerie0,
            tresorerie1: doc.data().tresorerie1,
            tresorerie2: doc.data().tresorerie2,
            tresorerie3: doc.data().tresorerie3,
            docIdd: doc.id,
          });

          tactifa0 = Number(doc.data().brut0) + Number(doc.data().amort0) + Number(doc.data().creance0) + Number(doc.data().tresorerie0)
          tactifa1 = Number(doc.data().brut1) + Number(doc.data().amort1) + Number(doc.data().creance1) + Number(doc.data().tresorerie1)
          tactifa2 = Number(doc.data().brut2) + Number(doc.data().amort2) + Number(doc.data().creance2) + Number(doc.data().tresorerie2)
          tactifa3 = Number(doc.data().brut3) + Number(doc.data().amort3) + Number(doc.data().creance3) + Number(doc.data().tresorerie3)

          setTotalactifa0(tactifa0)
          setTotalactifa1(tactifa1)
          setTotalactifa2(tactifa2)
          setTotalactifa3(tactifa3)

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
      .collection("bilan-previsionnel-passif")
      .add({
        capitala0: credential.capitala0,
        capitala1: credential.capitala1,
        capitala2: credential.capitala2,
        capitala3: credential.capitala3,
        fournisseura0: credential.fournisseura0,
        fournisseura1: credential.fournisseura1,
        fournisseura2: credential.fournisseura2,
        fournisseura3: credential.fournisseura3,
        autrea0: credential.autrea0,
        autrea1: credential.autrea1,
        autrea2: credential.autrea2,
        autrea3: credential.autrea3,
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
      .collection("bilan-previsionnel-actif")
      .add({
        brut0: editTable.brut0,
        brut1: editTable.brut1,
        brut2: editTable.brut2,
        brut3: editTable.brut3,
        amort0: editTable.amort0,
        amort1: editTable.amort1,
        amort2: editTable.amort2,
        amort3: editTable.amort3,
        creance0: editTable.creance0,
        creance1: editTable.creance1,
        creance2: editTable.creance2,
        creance3: editTable.creance3,
        tresorerie0: editTable.tresorerie0,
        tresorerie1: editTable.tresorerie1,
        tresorerie2: editTable.tresorerie2,
        tresorerie3: editTable.tresorerie3,
        userId: userId,
      })
      .then(() => {
        //props.resetForm()
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

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
        
      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };

  React.useEffect(() => {
    getDate();
    getDate2()
    getFinance()
    setImmobilisation(totalIf+totalIincpor+totalIcorp)
    //setTotal(0)
  }, [toggle, toggle2]);
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
            <DialogContentText style={{ marginLeft: 50 + '%', color: 'green' }}>
              <VerifiedUserRoundedIcon />
            </DialogContentText>
          </DialogContent>
          <DialogActions disableSpacing={true}>
            <Button autoFocus onClick={handleClose} style={{ marginRight: 25 + '%', backgroundColor: '#18A4F6', color: 'white', fontSize: 20 }}
              endIcon={<CheckCircle />}
              size="large"
            >
              Je confirme
            </Button>
          </DialogActions>
        </Dialog>
        {bilan.length > 0 ? (
          <div className="tab">

            <Table stickyHeader aria-label="sticky table">
              <caption style={{ color: 'black', fontSize: 30 }}> Bilans prévisionnels Actif</caption>
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ minWidth: 300 }}>Actif</StyledTableCell>
                  <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 0</StyledTableCell>
                  <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 1</StyledTableCell>
                  <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 2</StyledTableCell>
                  <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 3</StyledTableCell>
                  <StyledTableCell style={{ maxWidth: 300 }} colSpan="3">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {besoin.map((item, index) => {
                  return (
                    <div key={index}>
                      <TableRow hover role="checkbox">
                        <TableCell>Immobilisations</TableCell>
                        <TableCell>{immobilisation}</TableCell>
                        <TableCell>{immobilisation}</TableCell>
                        <TableCell>{immobilisation}</TableCell>
                        <TableCell>{immobilisation}</TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox">
                        <TableCell>Brut</TableCell>
                        <TableCell>{item.brut0}</TableCell>
                        <TableCell>{item.brut1}</TableCell>
                        <TableCell>{item.brut2}</TableCell>
                        <TableCell>{item.brut3}</TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox">
                        <TableCell>Amortissements</TableCell>
                        <TableCell>{item.amort0}</TableCell>
                        <TableCell>{item.amort1}</TableCell>
                        <TableCell>{item.amort2}</TableCell>
                        <TableCell>{item.amort3}</TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox">
                        <TableCell>Stocks</TableCell>
                        <TableCell>{stock}</TableCell>
                        <TableCell>{stock}</TableCell>
                        <TableCell>{stock}</TableCell>
                        <TableCell>{stock}</TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox">
                        <TableCell>Créances</TableCell>
                        <TableCell>{item.creance0}</TableCell>
                        <TableCell>{item.creance1}</TableCell>
                        <TableCell>{item.creance2}</TableCell>
                        <TableCell>{item.creance3}</TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox">
                        <TableCell>Trésorerie actif</TableCell>
                        <TableCell>{item.tresorerie0}</TableCell>
                        <TableCell>{item.tresorerie1}</TableCell>
                        <TableCell>{item.tresorerie2}</TableCell>
                        <TableCell>{item.tresorerie3}</TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" style={{ backgroundColor: "#18A4F6" }}>
                        <TableCell><b>TOTAL</b></TableCell>
                        <TableCell><b>{totalactifa0+immobilisation+stock}</b></TableCell>
                        <TableCell><b>{totalactifa1}</b></TableCell>
                        <TableCell><b>{totalactifa2}</b></TableCell>
                        <TableCell><b>{totalactifa3}</b></TableCell>
                      </TableRow>
                    </div>
                  )
                }
                )}
              </TableBody>
            </Table>

          </div>
        ) : (
          <div className="tab">
            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <caption style={{ color: 'black', fontSize: 30 }} >Cette partie n'a pas encore été remplit</caption>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell rowSpan="2" style={{ minWidth: 400 }}>Actif</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 0</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 1</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 2</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 300 }} colSpan="3">Annee 3</StyledTableCell>
                      <StyledTableCell style={{ maxWidth: 300 }} colSpan="3">Action</StyledTableCell>
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
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>

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
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        )}

        {load ? (<CircularProgress variant="indeterminate" style={{ marginTop: 10 }} />) : (
          <>
            <div className="plus">
              {!show && (
                <Button className="plus-icon"
                  style={{ color: 'white', marginTop: 10, background: '#18A4F6' }}
                  onClick={() => setShow(!show)}
                  endIcon={<Add />}>
                  Ajouter
                </Button>
              )}
            </div>
          </>
        )}
        <div>
          {idDoc ? (
            <>
              <Card>
                <CardContent>

                  <form
                    noValidate
                    className={`${!show && "show"}`}
                    onSubmit={editBilanActif}
                  >
                    <div className="input">

                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="brut0"
                        label="Brut Année 0"
                        name="brut0"
                        autoFocus
                        type="number"
                        value={editTable.brut0}
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
                        id="brut1"
                        label="Brut Année 1"
                        name="brut1"
                        autoFocus
                        type="number"
                        value={editTable.brut1}
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
                        id="brut2"
                        label="Brut Année 2"
                        name="brut2"
                        autoFocus
                        type="number"
                        value={editTable.brut2}
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
                        id="brut3"
                        label="Brut Année 3"
                        name="brut3"
                        autoFocus
                        type="number"
                        value={editTable.brut3}
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
                        id="amort0"
                        label="Amortissement Année 0"
                        name="amort0"
                        autoFocus
                        type="number"
                        value={editTable.amort0}
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
                        id="amort1"
                        label="Amortissement Année 1"
                        name="amort1"
                        autoFocus
                        type="number"
                        value={editTable.amort1}
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
                        id="amort2"
                        label="Amortissement Année 2"
                        name="amort2"
                        autoFocus
                        type="number"
                        value={editTable.amort2}
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
                        id="amort3"
                        label="Amortissement Année 3"
                        name="amort3"
                        autoFocus
                        type="number"
                        value={editTable.amort3}
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
                        id="creance0"
                        label="Créances Année 0"
                        name="creance0"
                        autoFocus
                        type="number"
                        value={editTable.creance0}
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
                        id="creance1"
                        label="Créances Année 1"
                        name="creance1"
                        autoFocus
                        type="number"
                        value={editTable.creance1}
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
                        id="creance2"
                        label="Créances Année 2"
                        name="creance2"
                        autoFocus
                        type="number"
                        value={editTable.creance2}
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
                        id="creance3"
                        label="Créances Année 3"
                        name="creance3"
                        autoFocus
                        type="number"
                        value={editTable.creance3}
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
                        id="tresorerie0"
                        label="Trésorerie actif Année 0"
                        name="tresorerie0"
                        autoFocus
                        type="number"
                        value={editTable.tresorerie0}
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
                        id="tresorerie1"
                        label="Trésorerie actif Année 1"
                        name="tresorerie1"
                        autoFocus
                        type="number"
                        value={editTable.tresorerie1}
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
                        id="tresorerie2"
                        label="Trésorerie actif Année 2"
                        name="tresorerie2"
                        autoFocus
                        type="number"
                        value={editTable.tresorerie2}
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
                        id="tresorerie3"
                        label="Trésorerie actif Année 3"
                        name="tresorerie3"
                        autoFocus
                        type="number"
                        value={editTable.tresorerie3}
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
                        endIcon={<Edit />}
                        style={{ color: 'white', background: '#18A4F6' }}

                      >
                        Modifier
                      </Button>
                    </div>
                  </form>

                </CardContent>
              </Card>
            </>
          ) : (
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
                  id="brut0"
                  label="Brut Année 0"
                  name="brut0"
                  autoFocus
                  type="number"
                  value={editTable.brut0}
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
                  id="brut1"
                  label="Brut Année 1"
                  name="brut1"
                  autoFocus
                  type="number"
                  value={editTable.brut1}
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
                  id="brut2"
                  label="Brut Année 2"
                  name="brut2"
                  autoFocus
                  type="number"
                  value={editTable.brut2}
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
                  id="brut3"
                  label="Brut Année 3"
                  name="brut3"
                  autoFocus
                  type="number"
                  value={editTable.brut3}
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
                  id="amort0"
                  label="Amortissement Année 0"
                  name="amort0"
                  autoFocus
                  type="number"
                  value={editTable.amort0}
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
                  id="amort1"
                  label="Amortissement Année 1"
                  name="amort1"
                  autoFocus
                  type="number"
                  value={editTable.amort1}
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
                  id="amort2"
                  label="Amortissement Année 2"
                  name="amort2"
                  autoFocus
                  type="number"
                  value={editTable.amort2}
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
                  id="amort3"
                  label="Amortissement Année 3"
                  name="amort3"
                  autoFocus
                  type="number"
                  value={editTable.amort3}
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
                  id="creance0"
                  label="Créances Année 0"
                  name="creance0"
                  autoFocus
                  type="number"
                  value={editTable.creance0}
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
                  id="creance1"
                  label="Créances Année 1"
                  name="creance1"
                  autoFocus
                  type="number"
                  value={editTable.creance1}
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
                  id="creance2"
                  label="Créances Année 2"
                  name="creance2"
                  autoFocus
                  type="number"
                  value={editTable.creance2}
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
                  id="creance3"
                  label="Créances Année 3"
                  name="creance3"
                  autoFocus
                  type="number"
                  value={editTable.creance3}
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
                  id="tresorerie0"
                  label="Trésorerie actif Année 0"
                  name="tresorerie0"
                  autoFocus
                  type="number"
                  value={editTable.tresorerie0}
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
                  id="tresorerie1"
                  label="Trésorerie actif Année 1"
                  name="tresorerie1"
                  autoFocus
                  type="number"
                  value={editTable.tresorerie1}
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
                  id="tresorerie2"
                  label="Trésorerie actif Année 2"
                  name="tresorerie2"
                  autoFocus
                  type="number"
                  value={editTable.tresorerie2}
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
                  id="tresorerie3"
                  label="Trésorerie actif Année 3"
                  name="tresorerie3"
                  autoFocus
                  type="number"
                  value={editTable.tresorerie3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  />
                      <Button
                        type="submit"
                        className="plus-icon"
                        style={{ width: 300 }}
                        endIcon={<SaveIcon />}
                        style={{ color: 'white', background: '#18A4F6' }}
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
            <DialogContentText style={{ marginLeft: 50 + '%', color: 'green' }}>
              <VerifiedUserRoundedIcon />
            </DialogContentText>
          </DialogContent>
          <DialogActions disableSpacing={true}>
            <Button autoFocus onClick={handleClose} style={{ marginRight: 25 + '%', backgroundColor: '#18A4F6', color: 'white', fontSize: 20 }}
              endIcon={<CheckCircle />}
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
                  <caption style={{ color: 'black', fontSize: 30 }}> Bilans prévisionnels Passif</caption>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ minWidth: 300 }}>Passif</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 0</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {passif.map((item, index) => {
                      return (
                        <>
                          <TableRow hover role="checkbox" tabIndex={-1}>

                            <TableCell>Capital</TableCell>
                            <TableCell>{item.capitala0}</TableCell>
                            <TableCell>{item.capitala1}</TableCell>
                            <TableCell>{item.capitala2}</TableCell>
                            <TableCell>{item.capitala3}</TableCell>
                            <TableCell rowSpan="5">
                              <div className="delete">
                                <div className="edit">
                                  <EditIcon onClick={() => handleModif2(item.docIdd, index)} />
                                </div>
                                <div className="delet">
                                  <DeleteIcon onClick={() => deleteBilanPassif(item.docIdd)} />
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Résultat</TableCell>
                            <TableCell>{resultat}</TableCell>
                            <TableCell>{resultat}</TableCell>
                            <TableCell>{resultat}</TableCell>
                            <TableCell>{resultat}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Emprunts</TableCell>
                            <TableCell>{emprunt}</TableCell>
                            <TableCell>{emprunt}</TableCell>
                            <TableCell>{emprunt}</TableCell>
                            <TableCell>{emprunt}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Fournisseurs</TableCell>
                            <TableCell>{item.fournisseura0}</TableCell>
                            <TableCell>{item.fournisseura1}</TableCell>
                            <TableCell>{item.fournisseura2}</TableCell>
                            <TableCell>{item.fournisseura3}</TableCell>
                          </TableRow>
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Autres dettes à CT</TableCell>
                            <TableCell>{item.autrea0}</TableCell>
                            <TableCell>{item.autrea1}</TableCell>
                            <TableCell>{item.autrea2}</TableCell>
                            <TableCell>{item.autrea3}</TableCell>
                          </TableRow>
                          
                          <TableRow hover role="checkbox" tabIndex={-1} style={{ backgroundColor: "#1A88F0" }}>
                            <TableCell><b>TOTAL</b></TableCell>
                            <TableCell><b>{totalpassifa0+resultat+emprunt}</b></TableCell>
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
                  <caption style={{ color: 'black', fontSize: 30 }} >Cette partie n'a pas encore été remplit</caption>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ minWidth: 300 }}>Passif</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 0</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                      <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
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

        {load2 ? (<CircularProgress variant="indeterminate" style={{ marginTop: 10 }} />) : (
          <>
            <div className="plus">
              {!show2 && (
                <Button className="plus-icon"
                  style={{ color: 'white', marginTop: 10, background: '#18A4F6' }}
                  onClick={() => setShow2(!show2)}
                  endIcon={<Add />}>
                  Ajouter
                </Button>
              )}
            </div>
          </>
        )}
        <div>
          {idDoc2 ? (
            <>
              <Card>
                <CardContent>

                  <form
                    noValidate
                    className={`${!show2 && "show"}`}
                    onSubmit={editBilanPassif}
                  >
                    <div className="input">

                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="capitala0"
                        label="Capital Année 0"
                        name="capitala0"
                        autoFocus
                        type="number"
                        value={credential.capitala0}
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
                        id="fournisseura0"
                        label="Fournisseurs Année 0"
                        name="fournisseura0"
                        autoFocus
                        type="number"
                        value={credential.fournisseura0}
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
                        id="fournisseura1"
                        label="Fournisseurs Année 1"
                        name="fournisseura1"
                        autoFocus
                        type="number"
                        value={credential.fournisseura1}
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
                        id="fournisseura2"
                        label="Fournisseurs Année 2"
                        name="fournisseura2"
                        autoFocus
                        type="number"
                        value={credential.fournisseura2}
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
                        id="fournisseura3"
                        label="Fournisseurs Année 3"
                        name="fournisseura3"
                        autoFocus
                        type="number"
                        value={credential.fournisseura3}
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
                        id="autrea0"
                        label="Autres dettes à CT Année 0"
                        name="autrea0"
                        autoFocus
                        type="number"
                        value={credential.autrea0}
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
                        id="autrea1"
                        label="Autres dettes à CT Année 1"
                        name="autrea1"
                        autoFocus
                        type="number"
                        value={credential.autrea1}
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
                        id="autrea2"
                        label="Autres dettes à CT Année 2"
                        name="autrea2"
                        autoFocus
                        type="number"
                        value={credential.autrea2}
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
                        id="autrea3"
                        label="Autres dettes à CT Année 3"
                        name="autrea3"
                        autoFocus
                        type="number"
                        value={credential.autrea3}
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
                        endIcon={<Edit />}
                        style={{ color: 'white', background: '#18A4F6' }}

                      >
                        Modifier
                      </Button>
                    </div>
                  </form>

                </CardContent>
              </Card>
            </>
          ) : (
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
                        id="capitala0"
                        label="Capital Année 0"
                        name="capitala0"
                        autoFocus
                        type="number"
                        value={credential.capitala0}
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
                        id="fournisseura0"
                        label="Fournisseurs Année 0"
                        name="fournisseura0"
                        autoFocus
                        type="number"
                        value={credential.fournisseura0}
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
                        id="fournisseura1"
                        label="Fournisseurs Année 1"
                        name="fournisseura1"
                        autoFocus
                        type="number"
                        value={credential.fournisseura1}
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
                        id="fournisseura2"
                        label="Fournisseurs Année 2"
                        name="fournisseura2"
                        autoFocus
                        type="number"
                        value={credential.fournisseura2}
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
                        id="fournisseura3"
                        label="Fournisseurs Année 3"
                        name="fournisseura3"
                        autoFocus
                        type="number"
                        value={credential.fournisseura3}
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
                        id="autrea0"
                        label="Autres dettes à CT Année 0"
                        name="autrea0"
                        autoFocus
                        type="number"
                        value={credential.autrea0}
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
                        id="autrea1"
                        label="Autres dettes à CT Année 1"
                        name="autrea1"
                        autoFocus
                        type="number"
                        value={credential.autrea1}
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
                        id="autrea2"
                        label="Autres dettes à CT Année 2"
                        name="autrea2"
                        autoFocus
                        type="number"
                        value={credential.autrea2}
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
                        id="autrea3"
                        label="Autres dettes à CT Année 3"
                        name="autrea3"
                        autoFocus
                        type="number"
                        value={credential.autrea3}
                        onChange={handleChange}
                        style={{ width: 200, marginRight: 10 }}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                        }}
                      />
                      <Button
                        type="submit"
                        className="plus-icon"
                        style={{ width: 300 }}
                        endIcon={<SaveIcon />}
                        onClick={() => setShow2(!show2)}
                        style={{ color: 'white', background: '#18A4F6' }}
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
