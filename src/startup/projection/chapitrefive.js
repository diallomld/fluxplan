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
  const [errorElements, setErrorElements] = React.useState(true);
  const [errorAnnee1, setErrorAnnee1] = React.useState(true);
  const [errorAnnee2, setErrorAnnee2] = React.useState(true);
  const [errorAnnee3, setErrorAnnee3] = React.useState(true);

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
      case 'elements':
          if (value.length >=3) {
            //console.log("elements " + value);
            setErrorElements(true)
          } else {
            //console.error("prevision non valide");
            setErrorElements(false)
          }
          break;
          case 'annee1':
            if (value.match(/^[0-9\b]{3,}$/)) {
              //console.log("montant" + value);
              setErrorAnnee1(true)
            } else {
              //console.error("montant non valide "); 
              setErrorAnnee1(false)
          }
        break;
          case 'annee2':
            if (value.match(/^[0-9\b]{3,}$/)) {
              //console.log("montant" + value);
              setErrorAnnee2(true)
            } else {
              //console.error("montant non valide "); 
              setErrorAnnee2(false)
          }
        break;
          case 'annee3':
            if (value.match(/^[0-9\b]{3,}$/)) {
              //console.log("montant" + value);
              setErrorAnnee3(true)
            } else {
              //console.error("montant non valide "); 
              setErrorAnnee3(false)
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
        setEditTable({
          elements:"",
          annee1:"",
          annee2:"",
          annee3:"",
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
        data.forEach((doc) => {
          dat.push({
            elements: doc.data().elements,
            annee1: doc.data().annee1,
            annee2: doc.data().annee2,
            annee3: doc.data().annee3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPrevision(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    elements: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    annee1: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee2: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee3: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
   })
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("prevision-annne3")
      .add({
          elements: values.elements,
          annee1: values.annee1,
          annee2: values.annee2,
          annee3: values.annee3,
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
                  required
                  fullWidth
                  id="elements"
                  label="Les elements"
                  name="elements"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.elements}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorElements? false: true}
                  helperText={!errorElements? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="annee1"
                  label="Chiffre d'affaires Annee 1"
                  name="annee1"
                  value={editTable.annee1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorAnnee1? false: true}
                  helperText={!errorAnnee1? 'Veuillez entrer un montant valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="annee2"
                  label="Chiffre d'affaires Annee 2"
                  name="annee2"
                  value={editTable.annee2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorAnnee2? false: true}
                  helperText={!errorAnnee2? 'Veuillez entrer un montant valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="annee3"
                  label="Chiffre d'affaires Annee 3"
                  name="annee3"
                  value={editTable.annee3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorAnnee3? false: true}
                  helperText={!errorAnnee3? 'Veuillez entrer un montant valide':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={errorAnnee1 || errorAnnee2 || errorAnnee3 ? false: true}

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
                    id="elements"
                    label="Les elements"
                    name="elements"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="elements" />}
                    error={props.errors.elements&&props.touched.elements}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="annee1"
                    label="Chiffre d'affaires Annee 1"
                    name="annee1"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="annee1" />}
                    error={props.errors.annee1&&props.touched.annee1}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="annee2"
                    label="Chiffre d'affaires Annee 2"
                    name="annee2"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="annee2" />}
                    error={props.errors.annee2&&props.touched.annee2}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="annee3"
                    label="Chiffre d'affaires Annee 3"
                    name="annee3"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="annee3" />}
                    error={props.errors.annee3&&props.touched.annee3}
                  />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.annee1|| props.errors.elements|| props.errors.annee2|| props.errors.annee3 ? true: false}
                    
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

export default Chapitrefivep
