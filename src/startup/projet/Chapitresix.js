import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitretwo.css";
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

const Chapitresix = () => {
  const initialvalues = {
    denomination: "",
    nom: "",
    sigle: "",
    juridique: "",
    social: "",
    siege: "",
    capital: "",
    telephone: "",
    courriel: "",
  };
  const editObject = {
    denomination: "",
    nom: "",
    sigle: "",
    juridique: "",
    social: "",
    siege: "",
    capital: "",
    telephone: "",
    courriel: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [statut, setStatut] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [errorDenomination, setErrorDenomination] = React.useState(true);
  const [errorNom, setErrorNom] = React.useState(true);
  const [errorSigle, setErrorSigle] = React.useState(true);
  const [errorJuridique, setErrorJuridique] = React.useState(true);
  const [errorSocial, setErrorSocial] = React.useState(true);
  const [errorSiege, setErrorSiege] = React.useState(true);
  const [errorCapital, setErrorCapital] = React.useState(true);
  const [errorTelephone, setErrorTelephone] = React.useState(true);
  const [errorCourriel, setErrorCourriel] = React.useState(true);

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
        case 'denomination':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorDenomination(true)
          } else {
            //console.error("montant non valide "); 
            setErrorDenomination(false)
          }
        break;
        case 'nom':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorNom(true)
          } else {
            //console.error("montant non valide "); 
            setErrorNom(false)
          }
        break;
        case 'sigle':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorSigle(true)
          } else {
            //console.error("montant non valide "); 
            setErrorSigle(false)
          }
        break;
        case 'juridique':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorJuridique(true)
          } else {
            //console.error("montant non valide "); 
            setErrorJuridique(false)
          }
        break;
        case 'social':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorSocial(true)
          } else {
            //console.error("montant non valide "); 
            setErrorSocial(false)
          }
        break;
        case 'siege':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorSiege(true)
          } else {
            //console.error("montant non valide "); 
            setErrorSiege(false)
          }
        break;
        case 'capital':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorCapital(true)
          } else {
            //console.error("montant non valide "); 
            setErrorCapital(false)
          }
        break;
        case 'telephone':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorTelephone(true)
          } else {
            //console.error("montant non valide "); 
            setErrorTelephone(false)
          }
        break;
        case 'courriel':
          if (value.length > 3) {
            //console.log("montant" + value);
            setErrorCourriel(true)
          } else {
            //console.error("montant non valide "); 
            setErrorCourriel(false)
          }
        break;
      default:
        break;
    }
  };
  const handleModif = (id,index) => {
    setEditTable(statut[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editStatut = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("statutjuridique")
      .doc(idDoc)
      .set(
        {
          denomination: editTable.denomination,
          sigle: editTable.sigle,
          nom: editTable.nom,
          juridique: editTable.juridique,
          social: editTable.social,
          siege: editTable.siege,
          capital: editTable.capital,
          telephone: editTable.telephone,
          courriel: editTable.courriel,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          produit: "",
          description: "",
          revenu: "",
          model: "",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteStatut = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("statutjuridique")
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
      .collection("statutjuridique")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            denomination: doc.data().denomination,
            sigle: doc.data().sigle,
            nom: doc.data().nom,
            juridique: doc.data().juridique,
            social: doc.data().social,
            siege: doc.data().siege,
            capital: doc.data().capital,
            telephone: doc.data().telephone,
            courriel: doc.data().courriel,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setStatut(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    denomination: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    sigle: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    nom: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    juridique: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    social: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    siege: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    capital: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    telephone: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    courriel: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
 })
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("statutjuridique")
      .add({
        denomination: values.denomination,
        sigle: values.sigle,
        nom: values.nom,
        juridique: values.juridique,
        social: values.social,
        siege: values.siege,
        capital: values.capital,
        telephone: values.telephone,
        courriel: values.courriel,
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
      {statut.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:20}}>Statut Juridique</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Denomination</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Nom commercial </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Sigle </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Forme Juridique </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Objet Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Siége Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Capital Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Téléphone </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Courriel </StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {statut.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.denomination}</TableCell>
                              <TableCell>{item.nom}</TableCell>
                              <TableCell>{item.sigle}</TableCell>
                              <TableCell>{item.juridique}</TableCell>
                              <TableCell>{item.social}</TableCell>
                              <TableCell>{item.siege}</TableCell>
                              <TableCell>{item.capital}</TableCell>
                              <TableCell>{item.telephone}</TableCell>
                              <TableCell>{item.courriel}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteStatut(item.docIdd)} />
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
                    <StyledTableCell style={{minWidth:200}}>Denomination</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Nom commercial </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Sigle </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Forme Juridique </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Objet Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Siége Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Capital Social </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Téléphone </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Courriel </StyledTableCell>
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
              onSubmit={editStatut}
            >
              <div className="input">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="denomination"
                  label="Dénomination / Raison sociale"
                  name="denomination"
                  autoFocus
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.denomination}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorDenomination? false: true}
                  helperText={!errorDenomination? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="nom"
                  label="Nom commercial "
                  name="nom"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.nom}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorNom? false: true}
                  helperText={!errorNom? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="sigle"
                  label="Sigle"
                  name="sigle"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.sigle}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorSigle? false: true}
                  helperText={!errorSigle? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="juridique"
                  label="Forme juridique"
                  name="juridique"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.juridique}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorJuridique? false: true}
                  helperText={!errorJuridique? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="social"
                  label="Objet social"
                  name="social"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.social}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorSocial? false: true}
                  helperText={!errorSocial? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="siege"
                  label="Siege Social"
                  name="siege"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.siege}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorSiege? false: true}
                  helperText={!errorSiege? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="capital"
                  label="capital Social"
                  name="capital"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.capital}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorCapital? false: true}
                  helperText={!errorCapital? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="telephone"
                  label="Télephone"
                  name="telephone"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.telephone}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorTelephone? false: true}
                  helperText={!errorTelephone? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="courriel"
                  label="Courriel"
                  name="courriel"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.courriel}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorCourriel? false: true}
                  helperText={!errorCourriel? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={errorCourriel || errorTelephone || errorCapital || errorDenomination || errorJuridique || errorNom || errorSiege || errorSigle || errorSocial ? false: true}
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
                    required
                    fullWidth
                    id="denomination"
                    label="Dénomination / Raison sociale"
                    name="denomination"
                    autoFocus
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="denomination" />}
                    error={props.errors.denomination&&props.touched.denomination}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="nom"
                    label="Nom commercial "
                    name="nom"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="nom" />}
                    error={props.errors.nom&&props.touched.nom}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="sigle"
                    label="Sigle"
                    name="sigle"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="sigle" />}
                    error={props.errors.sigle&&props.touched.sigle}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="juridique"
                    label="Forme juridique"
                    name="juridique"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="juridique" />}
                    error={props.errors.juridique&&props.touched.juridique}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="social"
                    label="Objet social"
                    name="social"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="social" />}
                    error={props.errors.social&&props.touched.social}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="siege"
                    label="Siege Social"
                    name="siege"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="siege" />}
                    error={props.errors.siege&&props.touched.siege}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="capital"
                    label="capital Social"
                    name="capital"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="capital" />}
                    error={props.errors.capital&&props.touched.capital}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="telephone"
                    label="Télephone"
                    name="telephone"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="telephone" />}
                    error={props.errors.telephone&&props.touched.telephone}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="courriel"
                    label="Courriel"
                    name="courriel"
                    multiline
                    rows="2"
                    rowsMax={5}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="courriel" />}
                    error={props.errors.courriel&&props.touched.courriel}
                  />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={(props.errors.denomination || props.errors.nom || props.errors.sigle || props.errors.juridique || props.errors.siege || props.errors.telephone || props.errors.courriel || props.errors.social || props.errors.capital) ? true: false}
                    
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
  );
};

export default Chapitresix
