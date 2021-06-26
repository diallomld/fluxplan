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

const ChapitreFivesommaire = () => {
  const editObject = {
    caa1: 0,
    caa2: 0,
    caa3: 0,
    chargesa1: 0,
    chargesa2: 0,
    chargesa3: 0,
    resultatNet1: 0,
    resultatNet2: 0,
    resultatNet3: 0,
    cashFlow1: 0,
    cashFlow2: 0,
    cashFlow3: 0,
    pointMort1: 0,
    pointMort2: 0,
    pointMort3: 0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

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
    //console.log(editTable);
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
      .collection("prevision-financiere")
      .doc(idDoc)
      .set(
        {
          ca1: editTable.ca1,
          ca2: editTable.ca2,
          ca3: editTable.ca3,
          charges1: editTable.charges1,
          charges2: editTable.charges2,
          charges3: editTable.charges3,
          resultatNet1: editTable.resultatNet1,
          resultatNet2: editTable.resultatNet2,
          resultatNet3: editTable.resultatNet3,
          cashFlow1: editTable.cashFlow1,
          cashFlow2: editTable.cashFlow2,
          cashFlow3: editTable.cashFlow3,
          pointMort1: editTable.pointMort1,
          pointMort2: editTable.pointMort2,
          pointMort3: editTable.pointMort3,
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
  const deletePrevision = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("prevision-financiere")
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
      .collection("prevision-financiere")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            ca1: doc.data().ca1,
            ca2: doc.data().ca2,
            ca3: doc.data().ca3,
            charges1: doc.data().charges1,
            charges2: doc.data().charges2,
            charges3: doc.data().charges3,
            resultatNet1: doc.data().resultatNet1,
            resultatNet2: doc.data().resultatNet2,
            resultatNet3: doc.data().resultatNet3,
            cashFlow1: doc.data().cashFlow1,
            cashFlow2: doc.data().cashFlow2,
            cashFlow3: doc.data().cashFlow3,
            pointMort1: doc.data().pointMort1,
            pointMort2: doc.data().pointMort2,
            pointMort3: doc.data().pointMort3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPrevision(dat);
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
      .collection("prevision-financiere")
      .add({
            ca1: editTable.ca1,
            ca2: editTable.ca2,
            ca3: editTable.ca3,
            charges1: editTable.charges1,
            charges2: editTable.charges2,
            charges3: editTable.charges3,
            resultatNet1: editTable.resultatNet1,
            resultatNet2: editTable.resultatNet2,
            resultatNet3: editTable.resultatNet3,
            cashFlow1: editTable.cashFlow1,
            cashFlow2: editTable.cashFlow2,
            cashFlow3: editTable.cashFlow3,
            pointMort1: editTable.pointMort1,
            pointMort2: editTable.pointMort2,
            pointMort3: editTable.pointMort3,
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
      {prevision.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Prévisions financières </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}></StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Année 1</StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Année 2</StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Année 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prevision.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>Chiffre d'affaires </TableCell>
                              <TableCell>{item.ca1}</TableCell>
                              <TableCell>{item.ca2}</TableCell>
                              <TableCell>{item.ca3}</TableCell>
                              <TableCell rowSpan="5">
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                            <TableCell>Charges</TableCell>
                            <TableCell>{item.charges1}</TableCell>
                            <TableCell>{item.charges2}</TableCell>
                            <TableCell>{item.charges3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                            <TableCell>Résultat net</TableCell>
                            <TableCell>{item.resultatNet1}</TableCell>
                            <TableCell>{item.resultatNet2}</TableCell>
                            <TableCell>{item.resultatNet3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                            <TableCell>Cash-flow</TableCell>
                            <TableCell>{item.cashFlow1}</TableCell>
                            <TableCell>{item.cashFlow2}</TableCell>
                            <TableCell>{item.cashFlow3}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                            <TableCell>Point mort en quantité </TableCell>
                            <TableCell>{item.pointMort1}</TableCell>
                            <TableCell>{item.pointMort2}</TableCell>
                            <TableCell>{item.pointMort3}</TableCell>
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
                    <StyledTableCell style={{minWidth:300}}></StyledTableCell>
                    <StyledTableCell style={{maxWidth:300}}>Année 1</StyledTableCell>
                    <StyledTableCell style={{maxWidth:300}}>Année 2</StyledTableCell>
                    <StyledTableCell style={{maxWidth:300}}>Année 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Chiffre d'affaires</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Charges</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Resultat net</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Cash-flow</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Point mort en quantité </TableCell>
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
              onSubmit={editPrevision}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="ca1"
                  label="Chiffre d'affaires Année 1"
                  name="ca1"
                  autoFocus
                  rowsMax={10}
                  rows="5"
                  value={editTable.ca1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="ca2"
                  label="Chiffre d'affaires Année 2"
                  name="ca2"
                  rowsMax={10}
                  rows="5"
                  value={editTable.ca2}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="ca3"
                  label="Chiffre d'affaires Année 3"
                  name="ca3"
                  rowsMax={10}
                  rows="5"
                  value={editTable.ca3}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="charges1"
                  label="Charges Année 1"
                  name="charges1"
                  rowsMax={10}
                  rows="5"
                  value={editTable.charges1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="charges2"
                  label="Charges Année 2"
                  name="charges2"
                  rowsMax={10}
                  rows="5"
                  value={editTable.charges2}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="charges3"
                  label="Charges Année 3"
                  name="charges3"
                  rowsMax={10}
                  rows="5"
                  value={editTable.charges3}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="resultatNet1"
                  label="Résultat net 1"
                  name="resultatNet1"
                  rowsMax={10}
                  rows="5"
                  value={editTable.resultatNet1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="resultatNet2"
                  label="Résultat net 2"
                  name="resultatNet2"
                  rowsMax={10}
                  rows="5"
                  value={editTable.resultatNet2}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="resultatNet3"
                  label="Résultat net 3"
                  name="resultatNet3"
                  rowsMax={10}
                  rows="5"
                  value={editTable.resultatNet3}
                  onChange={handleChange}
                />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="pointMort1"
                  label="Point mort en quantité 1"
                  name="pointMort1"
                  rowsMax={10}
                  rows="5"
                  value={editTable.pointMort1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="pointMort2"
                  label="Point mort en quantité 2"
                  name="pointMort2"
                  rowsMax={10}
                  rows="5"
                  value={editTable.pointMort2}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="pointMort3"
                  label="Point mort en quantité 3"
                  name="pointMort3"
                  rowsMax={10}
                  rows="5"
                  value={editTable.pointMort3}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="cashFlow1"
                  label="Cash-flow 1"
                  name="cashFlow1"
                  rowsMax={10}
                  rows="5"
                  value={editTable.cashFlow1}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="cashFlow2"
                  label="Cash-flow 2"
                  name="cashFlow2"
                  rowsMax={10}
                  rows="5"
                  value={editTable.cashFlow2}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="cashFlow3"
                  label="Cash-flow 3"
                  name="cashFlow3"
                  rowsMax={10}
                  rows="5"
                  value={editTable.cashFlow3}
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
                        id="ca1"
                        label="Chiffre d'affaires Année 1"
                        name="ca1"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.ca1}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="ca2"
                        label="Chiffre d'affaires Année 2"
                        name="ca2"
                        rowsMax={10}
                        rows="5"
                        value={editTable.ca2}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="ca3"
                        label="Chiffre d'affaires Année 3"
                        name="ca3"
                        rowsMax={10}
                        rows="5"
                        value={editTable.ca3}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="charges1"
                        label="Charges Année 1"
                        name="charges1"
                        rowsMax={10}
                        rows="5"
                        value={editTable.charges1}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="charges2"
                        label="Charges Année 2"
                        name="charges2"
                        rowsMax={10}
                        rows="5"
                        value={editTable.charges2}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="charges3"
                        label="Charges Année 3"
                        name="charges3"
                        rowsMax={10}
                        rows="5"
                        value={editTable.charges3}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="resultatNet1"
                        label="Résultat net 1"
                        name="resultatNet1"
                        rowsMax={10}
                        rows="5"
                        value={editTable.resultatNet1}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="resultatNet2"
                        label="Résultat net 2"
                        name="resultatNet2"
                        rowsMax={10}
                        rows="5"
                        value={editTable.resultatNet2}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="resultatNet3"
                        label="Résultat net 3"
                        name="resultatNet3"
                        rowsMax={10}
                        rows="5"
                        value={editTable.resultatNet3}
                        onChange={handleChange}
                        />
                        
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="pointMort1"
                        label="Point mort en quantité 1"
                        name="pointMort1"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pointMort1}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="pointMort2"
                        label="Point mort en quantité 2"
                        name="pointMort2"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pointMort2}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="pointMort3"
                        label="Point mort en quantité 3"
                        name="pointMort3"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pointMort3}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="cashFlow1"
                        label="Cash-flow 1"
                        name="cashFlow1"
                        rowsMax={10}
                        rows="5"
                        value={editTable.cashFlow1}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="cashFlow2"
                        label="Cash-flow 2"
                        name="cashFlow2"
                        rowsMax={10}
                        rows="5"
                        value={editTable.cashFlow2}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="cashFlow3"
                        label="Cash-flow 3"
                        name="cashFlow3"
                        rowsMax={10}
                        rows="5"
                        value={editTable.cashFlow3}
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

export default ChapitreFivesommaire
