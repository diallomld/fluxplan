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

const Chapitrefivep = () => {
  const initialvalues = {
    elements: "",
    annee1: "",
    annee2: "",
    annee3: "",
  };
  const editObject = {
    elements: "",
    annee1: "",
    annee2: "",
    annee3: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  
  const [Totala1, setTotala1] = React.useState(0);
  const [Totala2, setTotala2] = React.useState(0);
  const [Totala3, setTotala3] = React.useState(0);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };
  const initForm = () => {
    setEditTable({
      elements: "",
      annee1: "",
      annee2: "",
      annee3: "",
    })
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
      .collection("prevision-annne3")
      .doc(idDoc)
      .set(
        {
          elements: editTable.elements,
          annee1: editTable.annee1,
          annee2: editTable.annee2,
          annee3: editTable.annee3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        initForm()
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
      .collection("prevision-annne3")
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
      .collection("prevision-annne3")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let ta1 = 0
        let ta2 = 0
        let ta3 = 0
        data.forEach((doc) => {
          dat.push({
            elements: doc.data().elements,
            annee1: doc.data().annee1,
            annee2: doc.data().annee2,
            annee3: doc.data().annee3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          ta1+=Number(doc.data().annee1)
          ta2+=Number(doc.data().annee2)
          ta3+=Number(doc.data().annee3)
        });
        console.log("anne 2 "+ta2)
        setTotala1(ta1)
        setTotala2(ta2)
        setTotala3(ta3)
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
      .collection("prevision-annne3")
      .add({
          elements: editTable.elements,
          annee1: editTable.annee1,
          annee2: editTable.annee2,
          annee3: editTable.annee3,
          userId: userId,
      })
      .then(() => {
        initForm()
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
                <caption style={{color: 'black', fontSize:30}}> Chiffres d’affaires prévisionnels sur 3 ans</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ maxWidth: 400}}>Elements</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 60 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 60 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 60 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prevision.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.elements}</TableCell>
                              <TableCell>{item.annee1}</TableCell>
                              <TableCell>{item.annee1}</TableCell>
                              <TableCell>{item.annee3}</TableCell>
                              <TableCell>
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
                      );
                    })}
                    <TableRow style={{backgroundColor:'#18A4F6', color:'black'}}>
                        <TableCell>Total</TableCell>
                        <TableCell>{Totala1}</TableCell>
                        <TableCell>{Totala2}</TableCell>
                        <TableCell>{Totala3}</TableCell>
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
                    <StyledTableCell style={{ minWidth: 300 }}>prevision</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Annee 1</StyledTableCell> 
                    <StyledTableCell style={{ minWidth: 100 }}>Annee 2</StyledTableCell> 
                    <StyledTableCell style={{ minWidth: 100 }}>Annee 3</StyledTableCell> 
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
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
                  fullWidth
                  id="elements"
                  label="Les elements"
                  name="elements"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.elements}
                  onChange={handleChange}
                  />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="annee1"
                  label="Chiffre d'affaires Annee 1"
                  name="annee1"
                  value={editTable.annee1}
                  onChange={handleChange}
                  />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="annee2"
                  label="Chiffre d'affaires Annee 2"
                  name="annee2"
                  value={editTable.annee2}
                  onChange={handleChange}
                  />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="annee3"
                  label="Chiffre d'affaires Annee 3"
                  name="annee3"
                  value={editTable.annee3}
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
                      id="elements"
                      label="Les elements"
                      name="elements"
                      autoFocus
                      multiline
                      rows="5"
                      value={editTable.elements}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="annee1"
                      label="Chiffre d'affaires Annee 1"
                      name="annee1"
                      value={editTable.annee1}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="annee2"
                      label="Chiffre d'affaires Annee 2"
                      name="annee2"
                      value={editTable.annee2}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="annee3"
                      label="Chiffre d'affaires Annee 3"
                      name="annee3"
                      value={editTable.annee3}
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

export default Chapitrefivep
