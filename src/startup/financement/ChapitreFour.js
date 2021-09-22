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

const ChapitreFourFinancement = () => {
  const editObject = {
    taux:"",
    duree:""
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [mode, setMode] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [capital1, setCapital1] = React.useState(0)
  const [capital2, setCapital2] = React.useState(0)
  const [capital3, setCapital3] = React.useState(0)
  const [amort1, setAmort1] = React.useState(0)
  const [amort2, setAmort2] = React.useState(0)
  const [amort3, setAmort3] = React.useState(0)
  const [interet1, setinteret1] = React.useState(0)
  const [interet2, setinteret2] = React.useState(0)
  const [interet3, setinteret3] = React.useState(0)
  const [echeance1, setecheance1] = React.useState(0)
  const [echeance2, setecheance2] = React.useState(0)
  const [echeance3, setecheance3] = React.useState(0)

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
    setEditTable(mode[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editmode = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("caracteristique-emprunt")
      .doc(idDoc)
      .set(
        {
          taux: editTable.taux,
          duree: editTable.duree,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        setEditTable({
            taux:0,
            duree:0,
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletemode = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("caracteristique-emprunt")
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
        let techeance1 = 0
        let techeance2 = 0
        let techeance3 = 0
        let tcapital2 = 0
        let tcapital3 = 0
        let tauxpercent = 0

        data.forEach((doc) => {
          dat.push({
            taux: doc.data().taux,
            duree: doc.data().duree,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tauxpercent = Number(doc.data().taux)/100
          /**ANNEE 1 */
          tamort1 = (capital1/Number(doc.data().duree))*12
          tinteret1 = capital1*tauxpercent

          setAmort1(tamort1)
          setinteret1(tinteret1)

          techeance1 = tamort1+tinteret1
          setecheance1(techeance1)
          /**ANNEE 2 */
          tcapital2 = capital1-tamort1
          setCapital2(tcapital2)
          tamort2 = (tcapital2/Number(doc.data().duree))*12
          setAmort2(tamort2)

          tinteret2 = tcapital2*tauxpercent
          setinteret2(tinteret2)
          techeance2 = tamort2+tinteret2
          setecheance2(techeance2)

          /**ANNEE 3 */
          tcapital3 = tcapital2-tamort2
          setCapital3(tcapital3)
          tamort3 = (tcapital3/Number(doc.data().duree))*12
          setAmort3(tamort3)

          tinteret3 = tcapital3*tauxpercent
          setinteret3(tinteret3)
          techeance3 = tamort3+tinteret3
          setecheance3(techeance3)

        });
        setMode(dat);
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
      .collection("caracteristique-emprunt")
      .add({
            taux: editTable.taux,
            duree: editTable.duree,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            taux:0,
            duree:0,
        })
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

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
        });
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getEmprunt()
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
      {mode.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Caractéristiques de l’emprunt</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:100}}>Année</StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Capital début période</StyledTableCell>
                    <StyledTableCell>Amortissement</StyledTableCell>
                    <StyledTableCell>Intérêts </StyledTableCell>
                    <StyledTableCell>Échéance</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mode.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          
                              <TableCell><b>Année 1</b></TableCell>
                              <TableCell>{capital1}</TableCell>
                              <TableCell>{amort1}</TableCell>
                              <TableCell>{interet1}</TableCell>
                              <TableCell>{echeance1}</TableCell>
                              <TableCell rowSpan="3">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deletemode(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell><b>Année 2</b></TableCell>
                              <TableCell>{capital2}</TableCell>
                              <TableCell>{amort2}</TableCell>
                              <TableCell>{interet2}</TableCell>
                              <TableCell>{echeance2}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                              <TableCell><b>Année 3</b></TableCell>
                              <TableCell>{capital3}</TableCell>
                              <TableCell>{amort3}</TableCell>
                              <TableCell>{interet3}</TableCell>
                              <TableCell>{echeance3}</TableCell>
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
                    <StyledTableCell style={{minWidth:100}}>Année</StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Capital début période</StyledTableCell>
                    <StyledTableCell>Amortissement</StyledTableCell>
                    <StyledTableCell>Intérêts </StyledTableCell>
                    <StyledTableCell>Échéance</StyledTableCell>
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
              onSubmit={editmode}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="taux"
                  label="taux d’intérêt en %"
                  name="taux"
                  multiline
                  rowsMax={10}
                  rows="5"
                  type="number"
                  value={editTable.taux}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="duree"
                  label="Durée de remboursement (en mois) "
                  name="duree"
                  multiline
                  rowsMax={10}
                  rows="5"
                  value={editTable.duree}
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
                            label="taux d’intérêt en %"
                            name="taux"
                            multiline
                            rowsMax={10}
                            rows="5"
                            type="number"
                            value={editTable.taux}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="duree"
                            label="Durée de remboursement (en mois)"
                            name="duree"
                            multiline
                            rowsMax={10}
                            rows="5"
                            value={editTable.duree}
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
  );
};

export default ChapitreFourFinancement
