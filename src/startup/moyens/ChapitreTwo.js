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

const ChapitreTwoMoyen = () => {
  const editObject = {
    fraisqte:0,
    fraiscout:0,
    fraismontant:0,
    fraisdate:"",
    fraisduree:0,
    brevetqte:0,
    brevetcout:0,
    brevetmontant:0,
    brevetdate:"",
    brevetduree:0,
    licenceqte:0,
    licencecout:0,
    licencemontant:0,
    licencedate:"",
    licenceduree:0,
    logicielqte:0,
    logicielcout:0,
    logicielmontant:0,
    logicieldate:"",
    logicielduree:0,
    siteqte:0,
    sitecout:0,
    sitemontant:0,
    sitedate:"",
    siteduree:0,
    marqueqte:0,
    marquecout:0,
    marquemontant:0,
    marquedate:"",
    marqueduree:0,
    droitqte:0,
    droitcout:0,
    droitmontant:0,
    droitdate:"",
    droitduree:0,
    autreqte:0,
    autrecout:0,
    autremontant:0,
    autredate:"",
    autreduree:0,


  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [incorporelle, setIncorporelle] = React.useState([]);
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
    setEditTable(incorporelle[index])
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
      .collection("incorporelle")
      .doc(idDoc)
      .set(
        {
            fraisqte:editTable.fraisqte,
            fraiscout:editTable.fraiscout,
            fraismontant:editTable.fraismontant,
            fraisdate:editTable.fraisdate,
            fraisduree:editTable.fraisduree,
            brevetqte:editTable.brevetqte,
            brevetcout:editTable.brevetcout,
            brevetmontant:editTable.brevetmontant,
            brevetdate:editTable.brevetdate,
            brevetduree:editTable.brevetduree,
            licenceqte:editTable.licenceqte,
            licencecout:editTable.licencecout,
            licencemontant:editTable.licencemontant,
            licencedate:editTable.licencedate,
            licenceduree:editTable.licenceduree,
            logicielqte:editTable.logicielqte,
            logicielcout:editTable.logicielcout,
            logicielmontant:editTable.logicielmontant,
            logicieldate:editTable.logicieldate,
            logicielduree:editTable.logicielduree,
            siteqte:editTable.siteqte,
            sitecout:editTable.sitecout,
            sitemontant:editTable.sitemontant,
            sitedate:editTable.sitedate,
            siteduree:editTable.siteduree,
            marqueqte:editTable.marqueqte,
            marquecout:editTable.marquecout,
            marquemontant:editTable.marquemontant,
            marquedate:editTable.marquedate,
            marqueduree:editTable.marqueduree,
            droitqte:editTable.droitqte,
            droitcout:editTable.droitcout,
            droitmontant:editTable.droitmontant,
            droitdate:editTable.droitdate,
            droitduree:editTable.droitduree,
            autreqte:editTable.autreqte,
            autrecout:editTable.autrecout,
            autremontant:editTable.autremontant,
            autredate:editTable.autredate,
            autreduree:editTable.autreduree,
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
      .collection("incorporelle")
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
        setIncorporelle(dat);
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
      .collection("incorporelle")
      .add({
            fraisqte:editTable.fraisqte,
            fraiscout:editTable.fraiscout,
            fraismontant:editTable.fraismontant,
            fraisdate:editTable.fraisdate,
            fraisduree:editTable.fraisduree,
            brevetqte:editTable.brevetqte,
            brevetcout:editTable.brevetcout,
            brevetmontant:editTable.brevetmontant,
            brevetdate:editTable.brevetdate,
            brevetduree:editTable.brevetduree,
            licenceqte:editTable.licenceqte,
            licencecout:editTable.licencecout,
            licencemontant:editTable.licencemontant,
            licencedate:editTable.licencedate,
            licenceduree:editTable.licenceduree,
            logicielqte:editTable.logicielqte,
            logicielcout:editTable.logicielcout,
            logicielmontant:editTable.logicielmontant,
            logicieldate:editTable.logicieldate,
            logicielduree:editTable.logicielduree,
            siteqte:editTable.siteqte,
            sitecout:editTable.sitecout,
            sitemontant:editTable.sitemontant,
            sitedate:editTable.sitedate,
            siteduree:editTable.siteduree,
            marqueqte:editTable.marqueqte,
            marquecout:editTable.marquecout,
            marquemontant:editTable.marquemontant,
            marquedate:editTable.marquedate,
            marqueduree:editTable.marqueduree,
            droitqte:editTable.droitqte,
            droitcout:editTable.droitcout,
            droitmontant:editTable.droitmontant,
            droitdate:editTable.droitdate,
            droitduree:editTable.droitduree,
            autreqte:editTable.autreqte,
            autrecout:editTable.autrecout,
            autremontant:editTable.autremontant,
            autredate:editTable.autredate,
            autreduree:editTable.autreduree,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            ca:0,
            charges:0,
            resultatNet:0,
            cashFlow:0,
            pointMort:0,
        })
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
      {incorporelle.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Immobilisations incorporelles </caption>
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
                  {incorporelle.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>Frais d'établissement </TableCell>
                              <TableCell>{item.fraisqte}</TableCell>
                              <TableCell>{item.fraiscout}</TableCell>
                              <TableCell>{item.fraismontant}</TableCell>
                              <TableCell>{item.fraisdate}</TableCell>
                              <TableCell>{item.fraisduree}</TableCell>
                              <TableCell>{Number(item.fraismontant/item.fraisduree)}</TableCell>
                              <TableCell rowSpan="9">
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
                            <TableCell>Brevets </TableCell>
                            <TableCell>{item.brevetqte}</TableCell>
                            <TableCell>{item.brevetcout}</TableCell>
                            <TableCell>{item.brevetmontant}</TableCell>
                            <TableCell>{item.brevetdate}</TableCell>
                            <TableCell>{item.brevetduree}</TableCell>
                              <TableCell>{Number(item.brevetmontant/item.brevetduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Licences </TableCell>
                            <TableCell>{item.licenceqte}</TableCell>
                            <TableCell>{item.licencecout}</TableCell>
                            <TableCell>{item.licencemontant}</TableCell>
                            <TableCell>{item.licencedate}</TableCell>
                            <TableCell>{item.licenceduree}</TableCell>
                              <TableCell>{Number(item.licencemontant/item.licenceduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Logiciels </TableCell>
                            <TableCell>{item.logicielqte}</TableCell>
                            <TableCell>{item.logicielcout}</TableCell>
                            <TableCell>{item.logicielmontant}</TableCell>
                            <TableCell>{item.logicieldate}</TableCell>
                            <TableCell>{item.logicielduree}</TableCell>
                              <TableCell>{Number(item.logicielmontant/item.logicielduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Sites internet </TableCell>
                            <TableCell>{item.siteqte}</TableCell>
                            <TableCell>{item.sitecout}</TableCell>
                            <TableCell>{item.sitemontant}</TableCell>
                            <TableCell>{item.sitedate}</TableCell>
                            <TableCell>{item.siteduree}</TableCell>
                              <TableCell>{Number(item.sitemontant/item.siteduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Marques </TableCell>
                            <TableCell>{item.marqueqte}</TableCell>
                            <TableCell>{item.marquecout}</TableCell>
                            <TableCell>{item.marquemontant}</TableCell>
                            <TableCell>{item.marquedate}</TableCell>
                            <TableCell>{item.marqueduree}</TableCell>
                              <TableCell>{Number(item.marquemontant/item.marqueduree)}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Droit au bail (pas-de-porte) </TableCell>
                            <TableCell>{item.droitqte}</TableCell>
                            <TableCell>{item.droitcout}</TableCell>
                            <TableCell>{item.droitmontant}</TableCell>
                            <TableCell>{item.droitdate}</TableCell>
                            <TableCell>{item.droitduree}</TableCell>
                              <TableCell>{Number(item.droitmontant/item.droitduree)}</TableCell>
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
                  id="fraisqte"
                  label="Quantité Frais d'établissement"
                  name="fraisqte"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.fraisqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fraiscout"
                  label="Cout Frais d'établissement"
                  name="fraiscout"
                  rowsMax={10}
                  rows="5"
                  value={editTable.fraiscout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fraismontant"
                  label="Montant Frais d'établissement"
                  name="fraismontant"
                  rowsMax={10}
                  rows="5"
                  value={editTable.fraismontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fraisdate"
                  label="Date d’acquisition Frais d'établissement"
                  name="fraisdate"
                  rowsMax={10}
                  rows="5"
                  value={editTable.fraisdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="fraisduree"
                  label="Durée amortissement (en an) d’acquisition Frais"
                  name="fraisduree"
                  rowsMax={10}
                  rows="5"
                  value={editTable.fraisduree}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="brevetqte"
                  label="Quantité Brevets"
                  name="brevetqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.brevetqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="brevetcout"
                  label="Cout Brevets"
                  name="brevetcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.brevetcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="brevetmontant"
                  label="Montant Brevets"
                  name="brevetmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.brevetmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="brevetdate"
                  label="Date d’acquisition Brevets"
                  name="brevetdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.brevetdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="brevetduree"
                  label="Durée amortissement (en an) brevets"
                  name="brevetduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.brevetduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="licenceqte"
                  label="Quantité Licences"
                  name="licenceqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.licenceqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="licencecout"
                  label="Cout Licences"
                  name="licencecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.licencecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="licencemontant"
                  label="Montant Licences"
                  name="licencemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.licencemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="licencedate"
                  label="Date Licences"
                  name="licencedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.licencedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="licenceduree"
                  label="Durée Licences"
                  name="licenceduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.licenceduree}
                  onChange={handleChange}
                />


                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="logicielqte"
                  label="Quantité Logiciels"
                  name="logicielqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.logicielqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="logicielcout"
                  label="Cout Logiciels"
                  name="logicielcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.logicielcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="logicielmontant"
                  label="Montant Logiciels"
                  name="logicielmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.logicielmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="logicieldate"
                  label="Date Logiciels"
                  name="logicieldate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.logicieldate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="logicielduree"
                  label="Durée Logiciels"
                  name="logicielduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.logicielduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="siteqte"
                  label="Quantité Sites internet"
                  name="siteqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.siteqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="sitecout"
                  label="Cout Sites internet"
                  name="sitecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.sitecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="sitemontant"
                  label="Montant Sites internet"
                  name="sitemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.sitemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="sitedate"
                  label="Date Sites internet"
                  name="sitedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.sitedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="siteduree"
                  label="Durée Sites internet"
                  name="siteduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.siteduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="marqueqte"
                  label="Quantité Marques"
                  name="marqueqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.marqueqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="marquecout"
                  label="Cout Marques"
                  name="marquecout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.marquecout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="marquemontant"
                  label="Montant Marques"
                  name="marquemontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.marquemontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="marquedate"
                  label="Date Marques"
                  name="marquedate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.marquedate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="marqueduree"
                  label="Durée Marques"
                  name="marqueduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.marqueduree}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="droitqte"
                  label="Quantité Droit au bail"
                  name="droitqte"
                  rowsMax={10}
                  rows="5"
                  value={editTable.droitqte}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="droitcout"
                  label="Cout Droit au bail"
                  name="droitcout"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.droitcout}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="droitmontant"
                  label="Montant Droit au bail"
                  name="droitmontant"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.droitmontant}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="droitdate"
                  label="Date Droit au bail"
                  name="droitdate"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.droitdate}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="droitduree"
                  label="Durée Droit au bail"
                  name="droitduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.droitduree}
                  onChange={handleChange}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="autreqte"
                  label="Quantité Autre"
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
                  label="Cout Autre"
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
                  label="Montant Autre"
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
                  label="Date Autre"
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
                  label="Durée Autre"
                  name="autreduree"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.autreduree}
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
                        id="fraisqte"
                        label="Quantité Frais d'établissement"
                        name="fraisqte"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraisqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraiscout"
                        label="Cout Frais d'établissement"
                        name="fraiscout"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraiscout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraismontant"
                        label="Montant Frais d'établissement"
                        name="fraismontant"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraismontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraisdate"
                        label="Date d’acquisition Frais d'établissement"
                        name="fraisdate"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraisdate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraisduree"
                        label="Durée amortissement (en an) d’acquisition Frais"
                        name="fraisduree"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraisduree}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="brevetqte"
                        label="Quantité Brevets"
                        name="brevetqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.brevetqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="brevetcout"
                        label="Cout Brevets"
                        name="brevetcout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.brevetcout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="brevetmontant"
                        label="Montant Brevets"
                        name="brevetmontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.brevetmontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="brevetdate"
                        label="Date d’acquisition Brevets"
                        name="brevetdate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.brevetdate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="brevetduree"
                        label="Durée amortissement (en an) brevets"
                        name="brevetduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.brevetduree}
                        onChange={handleChange}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="licenceqte"
                        label="Quantité Licences"
                        name="licenceqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.licenceqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="licencecout"
                        label="Cout Licences"
                        name="licencecout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.licencecout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="licencemontant"
                        label="Montant Licences"
                        name="licencemontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.licencemontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="licencedate"
                        label="Date Licences"
                        name="licencedate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.licencedate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="licenceduree"
                        label="Durée Licences"
                        name="licenceduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.licenceduree}
                        onChange={handleChange}
                        />


                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="logicielqte"
                        label="Quantité Logiciels"
                        name="logicielqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.logicielqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="logicielcout"
                        label="Cout Logiciels"
                        name="logicielcout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.logicielcout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="logicielmontant"
                        label="Montant Logiciels"
                        name="logicielmontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.logicielmontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="logicieldate"
                        label="Date Logiciels"
                        name="logicieldate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.logicieldate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="logicielduree"
                        label="Durée Logiciels"
                        name="logicielduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.logicielduree}
                        onChange={handleChange}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="siteqte"
                        label="Quantité Sites internet"
                        name="siteqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.siteqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="sitecout"
                        label="Cout Sites internet"
                        name="sitecout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.sitecout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="sitemontant"
                        label="Montant Sites internet"
                        name="sitemontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.sitemontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="sitedate"
                        label="Date Sites internet"
                        name="sitedate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.sitedate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="siteduree"
                        label="Durée Sites internet"
                        name="siteduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.siteduree}
                        onChange={handleChange}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="marqueqte"
                        label="Quantité Marques"
                        name="marqueqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.marqueqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="marquecout"
                        label="Cout Marques"
                        name="marquecout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.marquecout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="marquemontant"
                        label="Montant Marques"
                        name="marquemontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.marquemontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="marquedate"
                        label="Date Marques"
                        name="marquedate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.marquedate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="marqueduree"
                        label="Durée Marques"
                        name="marqueduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.marqueduree}
                        onChange={handleChange}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="droitqte"
                        label="Quantité Droit au bail"
                        name="droitqte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.droitqte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="droitcout"
                        label="Cout Droit au bail"
                        name="droitcout"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.droitcout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="droitmontant"
                        label="Montant Droit au bail"
                        name="droitmontant"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.droitmontant}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="droitdate"
                        label="Date Droit au bail"
                        name="droitdate"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.droitdate}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="droitduree"
                        label="Durée Droit au bail"
                        name="droitduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.droitduree}
                        onChange={handleChange}
                        />

                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="autreqte"
                        label="Quantité Autre"
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
                        label="Cout Autre"
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
                        label="Montant Autre"
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
                        label="Date Autre"
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
                        label="Durée Autre"
                        name="autreduree"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.autreduree}
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

export default ChapitreTwoMoyen
