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

const ChapitreFourMoyen = () => {
  const editObject = {
    localqte:0,
    localcout:0,
    localmontant:0,
    localdate:"",
    localduree:0,
    electriciteqte:0,
    electricitecout:0,
    electricitemontant:0,
    electricitedate:"",
    electriciteduree:0,
    eauqte:0,
    eaucout:0,
    eaumontant:0,
    eaudate:"",
    eauduree:0,
    telephoneqte:0,
    telephonecout:0,
    telephonemontant:0,
    telephonedate:"",
    telephoneduree:0,
    autreqte:0,
    autrecout:0,
    autremontant:0,
    autredate:"",
    autreduree:0,

  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [financiere, setFinanciere] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [tqte, setQte] = React.useState(0)
  const [tcout, setCout] = React.useState(0)
  const [tmontant, setMontant] = React.useState(0)

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
    setEditTable(financiere[index])
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
      .collection("immobilisation-financiere")
      .doc(idDoc)
      .set(
        {
            localqte:editTable.localqte,
            localcout:editTable.localcout,
            localmontant:editTable.localmontant,
            localdate:editTable.localdate,
            localduree:editTable.localduree,
            electriciteqte:editTable.electriciteqte,
            electricitecout:editTable.electricitecout,
            electricitemontant:editTable.electricitemontant,
            electricitedate:editTable.electricitedate,
            electriciteduree:editTable.electriciteduree,
            eauqte:editTable.eauqte,
            eaucout:editTable.eaucout,
            eaumontant:editTable.eaumontant,
            eaudate:editTable.eaudate,
            eauduree:editTable.eauduree,
            telephoneqte:editTable.telephoneqte,
            telephonecout:editTable.telephonecout,
            telephonemontant:editTable.telephonemontant,
            telephonedate:editTable.telephonedate,
            telephoneduree:editTable.telephoneduree,
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
      .collection("immobilisation-financiere")
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
      .collection("immobilisation-financiere")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let totalqte = 0
        let totalcout = 0
        let totalmontant = 0
        data.forEach((doc) => {
          dat.push({
            localqte:doc.data().localqte,
            localcout:doc.data().localcout,
            localmontant:doc.data().localmontant,
            localdate:doc.data().localdate,
            localduree:doc.data().localduree,
            electriciteqte:doc.data().electriciteqte,
            electricitecout:doc.data().electricitecout,
            electricitemontant:doc.data().electricitemontant,
            electricitedate:doc.data().electricitedate,
            electriciteduree:doc.data().electriciteduree,
            eauqte:doc.data().eauqte,
            eaucout:doc.data().eaucout,
            eaumontant:doc.data().eaumontant,
            eaudate:doc.data().eaudate,
            eauduree:doc.data().eauduree,
            telephoneqte:doc.data().telephoneqte,
            telephonecout:doc.data().telephonecout,
            telephonemontant:doc.data().telephonemontant,
            telephonedate:doc.data().telephonedate,
            telephoneduree:doc.data().telephoneduree,
            autreqte:doc.data().autreqte,
            autrecout:doc.data().autrecout,
            autremontant:doc.data().autremontant,
            autredate:doc.data().autredate,
            autreduree:doc.data().autreduree,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          
          totalqte =Number(doc.data().localqte)+Number(doc.data().electriciteqte)+Number(doc.data().eauqte)+Number(doc.data().telephoneqte)+Number(doc.data().autreqte)
          totalcout =Number(doc.data().localcout)+Number(doc.data().electricitecout)+Number(doc.data().eaucout)+Number(doc.data().telephonecout)+Number(doc.data().autrecout)
          totalmontant =Number(doc.data().localmontant)+Number(doc.data().electricitemontant)+Number(doc.data().eaumontant)+Number(doc.data().telephonemontant)+Number(doc.data().autremontant)
          
          
          setQte(totalqte)
          setCout(totalcout)
          setMontant(totalmontant)

        });
        setFinanciere(dat);
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
      .collection("immobilisation-financiere")
      .add({
            localqte:editTable.localqte,
            localcout:editTable.localcout,
            localmontant:editTable.localmontant,
            localdate:editTable.localdate,
            localduree:editTable.localduree,
            electriciteqte:editTable.electriciteqte,
            electricitecout:editTable.electricitecout,
            electricitemontant:editTable.electricitemontant,
            electricitedate:editTable.electricitedate,
            electriciteduree:editTable.electriciteduree,
            eauqte:editTable.eauqte,
            eaucout:editTable.eaucout,
            eaumontant:editTable.eaumontant,
            eaudate:editTable.eaudate,
            eauduree:editTable.eauduree,
            telephoneqte:editTable.telephoneqte,
            telephonecout:editTable.telephonecout,
            telephonemontant:editTable.telephonemontant,
            telephonedate:editTable.telephonedate,
            telephoneduree:editTable.telephoneduree,
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
      {financiere.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Immobilisations financières </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Quantité</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Coût unitaire</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Date d’acquisition</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {financiere.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>Caution local </TableCell>
                              <TableCell>{item.localqte}</TableCell>
                              <TableCell>{item.localcout}</TableCell>
                              <TableCell>{item.localmontant}</TableCell>
                              <TableCell>{item.localdate}</TableCell>
                              <TableCell rowSpan="5">
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
                            <TableCell>Caution électricité </TableCell>
                            <TableCell>{item.electriciteqte}</TableCell>
                            <TableCell>{item.electricitecout}</TableCell>
                            <TableCell>{item.electricitemontant}</TableCell>
                            <TableCell>{item.electricitedate}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Caution eau </TableCell>
                            <TableCell>{item.eauqte}</TableCell>
                            <TableCell>{item.eaucout}</TableCell>
                            <TableCell>{item.eaumontant}</TableCell>
                            <TableCell>{item.eaudate}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Caution téléphone </TableCell>
                            <TableCell>{item.telephoneqte}</TableCell>
                            <TableCell>{item.telephonecout}</TableCell>
                            <TableCell>{item.telephonemontant}</TableCell>
                            <TableCell>{item.telephonedate}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Autres caution </TableCell>
                            <TableCell>{item.autreqte}</TableCell>
                            <TableCell>{item.autrecout}</TableCell>
                            <TableCell>{item.autremontant}</TableCell>
                            <TableCell>{item.autredate}</TableCell>
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
                    id="localqte"
                    label="Quantité Caution local"
                    name="localqte"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.localqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="localcout"
                    label="Cout Caution local"
                    name="localcout"
                    rowsMax={10}
                    rows="5"
                    value={editTable.localcout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="localmontant"
                    label="Montant Caution local"
                    name="localmontant"
                    rowsMax={10}
                    rows="5"
                    value={editTable.localmontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="localdate"
                    label="Date d'acquisition Caution local"
                    name="localdate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.localdate}
                    onChange={handleChange}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="electriciteqte"
                    label="Quantité Caution Electricité"
                    name="electriciteqte"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.electriciteqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="electricitecout"
                    label="Cout Caution Electricité"
                    name="electricitecout"
                    rowsMax={10}
                    rows="5"
                    value={editTable.electricitecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="electricitemontant"
                    label="Montant Caution Electricité"
                    name="electricitemontant"
                    rowsMax={10}
                    rows="5"
                    value={editTable.electricitemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="electricitedate"
                    label="Date d'acquisition Electricité"
                    name="electricitedate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.electricitedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="eauqte"
                    label="Quantité Eau"
                    name="eauqte"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.eauqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="eaucout"
                    label="Cout Eau"
                    name="eaucout"
                    rowsMax={10}
                    rows="5"
                    value={editTable.eaucout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="eaumontant"
                    label="Montant Eau"
                    name="eaumontant"
                    rowsMax={10}
                    rows="5"
                    value={editTable.eaumontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="eaudate"
                    label="Date d'acquisition Eau"
                    name="eaudate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.eaudate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="telephoneqte"
                    label="Quantité Caution téléphone"
                    name="telephoneqte"
                    autoFocus
                    rowsMax={10}
                    rows="5"
                    value={editTable.telephoneqte}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="telephonecout"
                    label="Cout Caution téléphone"
                    name="telephonecout"
                    rowsMax={10}
                    rows="5"
                    value={editTable.telephonecout}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="telephonemontant"
                    label="Montant Caution téléphone"
                    name="telephonemontant"
                    rowsMax={10}
                    rows="5"
                    value={editTable.telephonemontant}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="telephonedate"
                    label="Date d'acquisition Caution téléphone"
                    name="telephonedate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.telephonedate}
                    onChange={handleChange}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="autreqte"
                    label="Quantité Autres caution"
                    name="autreqte"
                    autoFocus
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
                    label="Cout Autres caution"
                    name="autrecout"
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
                    label="Montant Autres caution"
                    name="autremontant"
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
                    label="Date d'acquisition Autre Caution"
                    name="autredate"
                    rowsMax={10}
                    rows="5"
                    value={editTable.autredate}
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
                            id="localqte"
                            label="Quantité Caution local"
                            name="localqte"
                            autoFocus
                            rowsMax={10}
                            rows="5"
                            value={editTable.localqte}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="localcout"
                            label="Cout Caution local"
                            name="localcout"
                            rowsMax={10}
                            rows="5"
                            value={editTable.localcout}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="localmontant"
                            label="Montant Caution local"
                            name="localmontant"
                            rowsMax={10}
                            rows="5"
                            value={editTable.localmontant}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="localdate"
                            label="Date d'acquisition Caution local"
                            name="localdate"
                            rowsMax={10}
                            rows="5"
                            value={editTable.localdate}
                            onChange={handleChange}
                            />
                            
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="electriciteqte"
                            label="Quantité Caution Electricité"
                            name="electriciteqte"
                            autoFocus
                            rowsMax={10}
                            rows="5"
                            value={editTable.electriciteqte}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="electricitecout"
                            label="Cout Caution Electricité"
                            name="electricitecout"
                            rowsMax={10}
                            rows="5"
                            value={editTable.electricitecout}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="electricitemontant"
                            label="Montant Caution Electricité"
                            name="electricitemontant"
                            rowsMax={10}
                            rows="5"
                            value={editTable.electricitemontant}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="electricitedate"
                            label="Date d'acquisition Electricité"
                            name="electricitedate"
                            rowsMax={10}
                            rows="5"
                            value={editTable.electricitedate}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="eauqte"
                            label="Quantité Eau"
                            name="eauqte"
                            autoFocus
                            rowsMax={10}
                            rows="5"
                            value={editTable.eauqte}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="eaucout"
                            label="Cout Eau"
                            name="eaucout"
                            rowsMax={10}
                            rows="5"
                            value={editTable.eaucout}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="eaumontant"
                            label="Montant Eau"
                            name="eaumontant"
                            rowsMax={10}
                            rows="5"
                            value={editTable.eaumontant}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="eaudate"
                            label="Date d'acquisition Eau"
                            name="eaudate"
                            rowsMax={10}
                            rows="5"
                            value={editTable.eaudate}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="telephoneqte"
                            label="Quantité Caution téléphone"
                            name="telephoneqte"
                            autoFocus
                            rowsMax={10}
                            rows="5"
                            value={editTable.telephoneqte}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="telephonecout"
                            label="Cout Caution téléphone"
                            name="telephonecout"
                            rowsMax={10}
                            rows="5"
                            value={editTable.telephonecout}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="telephonemontant"
                            label="Montant Caution téléphone"
                            name="telephonemontant"
                            rowsMax={10}
                            rows="5"
                            value={editTable.telephonemontant}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="telephonedate"
                            label="Date d'acquisition Caution téléphone"
                            name="telephonedate"
                            rowsMax={10}
                            rows="5"
                            value={editTable.telephonedate}
                            onChange={handleChange}
                            />
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="autreqte"
                            label="Quantité Autres caution"
                            name="autreqte"
                            autoFocus
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
                            label="Cout Autres caution"
                            name="autrecout"
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
                            label="Montant Autres caution"
                            name="autremontant"
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
                            label="Date d'acquisition Autre Caution"
                            name="autredate"
                            rowsMax={10}
                            rows="5"
                            value={editTable.autredate}
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

export default ChapitreFourMoyen
