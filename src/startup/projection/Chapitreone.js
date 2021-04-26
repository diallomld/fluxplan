import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

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

const Chapitreonep = () => {
  const initialState = {
    elements: "",
    montant: "",
  };
  const initialvalues = {
    elements: "",
    montant: "",
  };
  const editObject = {
    elements: "",
    montant: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [cout, setCout] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [total, setTotal] = React.useState(0);
  let test = 0;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
    setEditTable({
      ...editTable,
      [name]: value,
    });
  };
  const handleModif = (id,index) => {
    setEditTable(cout[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editCout = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("cout-projet")
      .doc(idDoc)
      .set(
        {
          elements: editTable.elements,
          montant: editTable.montant,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        setLoad(false)
        setCredentital({
          elements:"",
          montant:"",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteCout = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("cout-projet")
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
  const handleSubmit = (e) => {
    setLoad(true)
    e.preventDefault();
    firebasee
      .firestore()
      .collection("cout-projet")
      .add({
          elements: credentital.elements,
          montant: credentital.montant,
          userId: userId,
      })
      .then(() => {
        console.log("add");
        setLoad(false)
        setCredentital({
          elements:"",
          montant:"",
        })
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    //<ResponsiveDialog/>
  };
  const getDate = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("cout-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            elements: doc.data().elements,
            montant: doc.data().montant,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          //console.log("montant "+ Number(doc.data().montant) + total)
          test = test + Number(doc.data().montant)
        });
        setCout(dat);
        setTotal(test)
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const validationSchema = Yup.object().shape({
    elements: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    montant: Yup.number('Entrer un nombre').required("veuillez saisir ce champ")
  })
  const onSubmit = (values, props) => {
    setShow(!show)

    setLoad(true)
    firebasee
      .firestore()
      .collection("cout-projet")
      .add({
          elements: values.elements,
          montant: values.montant,
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
            <h3><p>L'opperation a eté effectué avec success </p></h3>
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
      {cout.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ maxWidth: 300}}>Elements</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 50 }}>Montant</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cout.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.elements}</TableCell>
                              <TableCell>{item.montant}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteCout(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow>
                      <TableCell>Total Investissements</TableCell>
                      <TableCell colSpan="3">{total} FCFA</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
        </div>
      ) : (
        <div className="tab">
          <h3>Cout total du projet</h3>
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 200 }}>Elements</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Montant</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Investissements</TableCell>
                      <TableCell colSpan="3">{total} FCFA</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {cout.length <= 0 ? (
              <p>Cette partie n'a pas encore été remplit </p>
              ) :(
                <p>Cout du Projet </p>
              )
          }
        </div>
        <div className="plus">
          {!show && (
            <Button className="plus-icon" 
              style={{color: 'white', background:'#18A4F6'}} 
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
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editCout}
        >
          <div className="input">
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="elements"
              label="elements"
              name="elements"
              autoFocus
              multiline
              rows="5"
              value={editTable.elements}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="montant"
              label="montant"
              name="montant"
              autoComplete="montant"
              InputLabelProps= {{
                shrink: true,
              }}
              value={editTable.montant}
              onChange={handleChange}
              style={{ width: 200, margin: 30 }}
              InputProps={{
                startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
              }}
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
          
        ): (
          <>
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
                    id="elements"
                    label="elements"
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
                    required
                    fullWidth
                    id="montant"
                    label="montant"
                    name="montant"
                    autoComplete="montant"
                    type="number"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                    InputLabelProps= {{
                      shrink: true,
                    }}
                    //onChange={handleChange}
                    style={{ width: 200, margin: 30 }}
                    helperText={<ErrorMessage name="montant" />}
                    error={props.errors.montant&&props.touched.elements}
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
              </Form>
              )}
          </Formik>
        </>
        )}
      </div>
    </div>
  );
};

export default Chapitreonep
