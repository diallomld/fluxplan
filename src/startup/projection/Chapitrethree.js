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

const Chapitrethreep = () => {
  const initialvalues = {
    hypothese: "",
  };
  const editObject = {
    hypothese: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [hypothese, setHypothese] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [errorHypothese, setErrorHypothese] = React.useState(true);

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
      case 'hypothese':
          if (value.length >=3) {
            //console.log("hypothese " + value);
            setErrorHypothese(true)
          } else {
            //console.error("hypothese non valide");
            setErrorHypothese(false)
          }
          break;
    
      default:
        break;
    }
  };
  const handleModif = (id,index) => {
    setEditTable(hypothese[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editHypothese = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("hypothese")
      .doc(idDoc)
      .set(
        {
          hypothese: editTable.hypothese,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          hypothese:"",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteHypothese = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("hypothese")
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
      .collection("hypothese")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            hypothese: doc.data().hypothese,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setHypothese(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    hypothese: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
   })
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("hypothese")
      .add({
          hypothese: values.hypothese,
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
      {hypothese.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>hypotheses Chiffres d’affaires prévisionnels</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ maxWidth: 300}}>hypothese</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hypothese.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.hypothese}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteHypothese(item.docIdd)} />
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
                    <StyledTableCell style={{ minWidth: 300 }}>hypothese</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
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
      <div>
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editHypothese}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="hypothese"
                  label="hypothese"
                  name="hypothese"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.hypothese}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  error={errorHypothese? false: true}
                  helperText={!errorHypothese? 'Le champ doit étre remplit avec 3 caractére minimum':''}
                />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={errorHypothese ? false: true}

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
                    id="hypothese"
                    label="hypothese"
                    name="hypothese"
                    autoFocus
                    multiline
                    rowsMax={4}
                    style={{ width: 200, marginRight: 10 }}
                    helperText={<ErrorMessage name="hypothese" />}
                    error={props.errors.hypothese&&props.touched.hypothese}
                  />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.montant|| props.errors.hypothese ? true: false}
                    
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

export default Chapitrethreep
