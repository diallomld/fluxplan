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
//import DialogTitle from '@material-ui/core/DialogTitle';
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

const Chapitresixp = () => {
  const initialvalues = {
    indicateurs: "",
    calcul: "",
    norme: "",
    appreciation: "",
  };
  const editObject = {
    indicateurs: "",
    calcul: "",
    norme: "",
    appreciation: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [indicateur, setIndicateur] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [errorIndicateurs, setErrorIndicateurs] = React.useState(true);
  const [errorNorme, setErrorNorme] = React.useState(true);
  const [errorAppreciation, setErrorAppreciation] = React.useState(true);

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
      case 'norme':
          if (value.length >=3) {
            //console.log("Indicateurs " + value);
            setErrorNorme(true)
          } else {
            //console.error("prevision non valide");
            setErrorNorme(false)
          }
          break;
          case 'appreciation':
            if (value.length > 3) {
              //console.log("montant" + value);
              setErrorAppreciation(true)
            } else {
              //console.error("montant non valide "); 
              setErrorAppreciation(false)
          }
        break;
          case 'indicateurs':
            if (value.length > 3) {
              //console.log("montant" + value);
              setErrorIndicateurs(true)
            } else {
              //console.error("montant non valide "); 
              setErrorIndicateurs(false)
          }
        break;
    
      default:
        break;
    }
  };
  const handleModif = (id,index) => {
    setEditTable(indicateur[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editIndicateur = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("indicateurs")
      .doc(idDoc)
      .set(
        {
          indicateurs: editTable.indicateurs,
          calcul: editTable.calcul,
          norme: editTable.norme,
          appreciation: editTable.appreciation,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          norme:"",
          appreciation:"",
          indicateurs:"",
          calcul:""
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteIndicateur = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("indicateurs")
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
      .collection("indicateurs")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            indicateurs: doc.data().indicateurs,
            calcul: doc.data().calcul,
            norme: doc.data().norme,
            appreciation: doc.data().appreciation,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setIndicateur(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    norme: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    appreciation: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    indicateurs: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
 })
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("indicateurs")
      .add({
        indicateurs: values.indicateurs,
        calcul: values.calcul,
        norme: values.norme,
        appreciation: values.appreciation,
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
      {indicateur.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:18}}> Indicateurs de mesure de rentabilité du projet</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{}}>Indicateur</StyledTableCell>
                    <StyledTableCell style={{}}>Calcul</StyledTableCell>
                    <StyledTableCell style={{}}>Norme</StyledTableCell>
                    <StyledTableCell style={{minWidth:300}}>Appreciation</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {indicateur.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.indicateurs}</TableCell>
                              <TableCell>{item.calcul}</TableCell>
                              <TableCell>{item.norme}</TableCell>
                              <TableCell>{item.appreciation}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteIndicateur(item.docIdd)} />
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
                <caption style={{color: 'black', fontSize:20}} >Cette partie n'a pas encore été remplit</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>indicateur</StyledTableCell>
                    <StyledTableCell>Calcul</StyledTableCell>
                    <StyledTableCell>Norme</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 300 }}>Appreciation</StyledTableCell> 
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>.......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......indicateurs......</TableCell>
                          <TableCell>......</TableCell>
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
              onSubmit={editIndicateur}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="indicateurs"
                  label="Indicateur"
                  name="indicateurs"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.indicateurs}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorIndicateurs? false: true}
                  helperText={!errorIndicateurs? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="calcul"
                  label="Calcul"
                  name="calcul"
                  multiline
                  rows="5"
                  value={editTable.calcul}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="norme"
                  label="Norme"
                  name="norme"
                  multiline
                  rows="5"
                  value={editTable.norme}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorNorme? false: true}
                  helperText={!errorNorme? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="appreciation"
                  label="Les appreciation du projet"
                  name="appreciation"
                  multiline
                  rows="5"
                  value={editTable.appreciation}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorAppreciation? false: true}
                  helperText={!errorAppreciation? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={errorNorme || errorAppreciation ? false: true}

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
                      autoFocus
                      id="indicateurs"
                      label="Indicateur"
                      name="indicateurs"
                      multiline
                      rows="5"
                      style={{ width: 200, marginRight: 10 }} 
                      helperText={<ErrorMessage name="indicateurs" />}
                      error={props.errors.indicateurs&&props.touched.indicateurs?true:false}
                    />
                    <Field as={TextField}
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="calcul"
                      label="Calcul"
                      name="calcul"
                      multiline
                      rows="5"
                      style={{ width: 200, marginRight: 10 }}
                    />
                    <Field as={TextField}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="norme"
                      label="Norme"
                      name="norme"
                      multiline
                      rows="5"
                      style={{ width: 200, marginRight: 10 }}
                      helperText={<ErrorMessage name="norme" />}
                      error={props.errors.norme&&props.touched.norme}
                   />
                    <Field as={TextField}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="appreciation"
                      label="Les appreciation du projet"
                      name="appreciation"
                      multiline
                      rows="5"
                      style={{ width: 200, marginRight: 10 }}
                      helperText={<ErrorMessage name="appreciation" />}
                      error={props.errors.appreciation&&props.touched.appreciation}
                    />

                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.appreciation|| props.errors.norme || props.errors.indicateurs ? true: false}
                    
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

export default Chapitresixp
