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
    quantite: "",
    prix: "",
  };
  const editObject = {
    produits: "",
    quantite: "",
    prix: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [total, setTotal] = React.useState(0);
  const [totalCa, setTotalCa] = React.useState(0);
  const [errorProduits, setErrorProduits] = React.useState(true);
  const [errorQuantite, setErrorQuantite] = React.useState(true);
  const [errorPrix, setErrorPrix] = React.useState(true);
  let test = 0;
  let testCa = 0;

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
        case 'quantite':
            if (value.match(/^[0-9\b]{1,15}$/)) {
            //console.log("quantites " + value);
            setErrorQuantite(true)
            } else {
            //console.error("quantites non valide");
            setErrorQuantite(false)
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
        case 'prix':
            if (value.match(/^[0-9\b]{3,15}$/)) {
                //console.log("produits" + value);
                setErrorPrix(true)
            } else {
                //console.error("produits non valide "); 
                setErrorPrix(false)
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
          quantite: editTable.quantite,
          prix: editTable.prix,
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
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            produits: doc.data().produits,
            quantite: doc.data().quantite,
            prix: doc.data().prix,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          //console.log("montant "+ Number(doc.data().montant) + total)
          testCa = testCa + (Number(doc.data().quantite))*Number(doc.data().prix)
        });
        setPrevision(dat);
        setTotalCa(testCa)
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    produits: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    prix: Yup.string().required("Entrer un prix unitaire valide").matches(/^[0-9\b]{3,15}$/,"Entrer un prix unitaire valide"),
    quantite: Yup.number().positive("Entrer une quantié positive et valide").required("ce champ est obligatoire")
})
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("prevision-annne1")
      .add({
        produits: values.produits,
        quantite: values.quantite,
        prix: values.prix,
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
    console.log("col")
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
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite}</TableCell>
                            <TableCell>{item.quantite * 12}</TableCell>
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
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix * 12} FCFA</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Chiffre d'affaire</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{item.prix*item.quantite}</TableCell>
                            <TableCell>{(item.prix*item.quantite)*12} FCFA</TableCell>
                        </TableRow>
                      </>
                      );
                    })}
                      <TableRow hover role="checkbox">
                          <TableCell colSpan="2" style={{color: 'black', fontSize:18}}>Total chiffres d'affaires</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell>{totalCa}</TableCell>
                          <TableCell colSpan="2" style={{color: 'black', fontSize:20}}>{totalCa*12} FCFA</TableCell>
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
                  id="prix"
                  label="prix"
                  name="prix"
                  autoComplete="prix"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.prix}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                  error={errorPrix? false: true}
                  helperText={!errorPrix? 'Entrer un prix valide':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="quantite"
                  label="quantite"
                  name="quantite"
                  autoComplete="quantite"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.quantite}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
                  error={errorQuantite? false: true}
                  helperText={!errorQuantite? 'Entrer une quantite valide':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={(errorProduits|| errorQuantite || errorPrix) ? false: true}

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
          <Card variant="outlined">
            <CardContent>
               <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}
            
          >
            {(props) => (
              <Form className={`${!show && "show"}`}>
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
                    id="quantite"
                    label="quantite"
                    name="quantite"
                    autoComplete="quantite"
                    InputLabelProps= {{
                      shrink: true,
                    }}
                    //onChange={handleChange}
                    style={{ width: 200, margin: 30 }}
                    helperText={<ErrorMessage name="quantite" />}
                    error={props.errors.quantite&&props.touched.quantite}
                  />
                
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="prix"
                    label="prix"
                    name="prix"
                    autoComplete="prix"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                    InputLabelProps= {{
                      shrink: true,
                    }}
                    //onChange={handleChange}
                    style={{ width: 200, margin: 30 }}
                    helperText={<ErrorMessage name="prix" />}
                    error={props.errors.prix&&props.touched.prix}
                  />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.quantite || props.errors.prix || props.errors.produits ? true: false}
                    
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
