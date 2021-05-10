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

const Chapitreneuf = () => {
  
  const initialvalues = {
    ca1: 0,
    ca2: 0,
    ca3: 0,
    cv1: 0,
    cv2: 0,
    cv3: 0,
    cf1: 0,
    cf2: 0,
    cf3: 0,
  };
  const editObject = {
    ca1: 0,
    ca2: 0,
    ca3: 0,
    cv1: 0,
    cv2: 0,
    cv3: 0,
    cf1: 0,
    cf2: 0,
    cf3: 0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [seuil, setSeuil] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [mcv1, setMcv1] = React.useState(0);
  const [mcv2, setMcv2] = React.useState(0);
  const [mcv3, setMcv3] = React.useState(0);

  const [tmcv1, setTmcv1] = React.useState(0);
  const [tmcv2, setTmcv2] = React.useState(0);
  const [tmcv3, setTmcv3] = React.useState(0);
  
  const [sr1, setSr1] = React.useState(0);
  const [sr2, setSr2] = React.useState(0);
  const [sr3, setSr3] = React.useState(0);


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
    setEditTable(seuil[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editseuil = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("seuil-rentabilite")
      .doc(idDoc)
      .set(
        {
          ca1: editTable.ca1,
          ca2: editTable.ca2,
          ca3: editTable.ca3,
          cv1: editTable.cv1,
          cv2: editTable.cv2,
          cv3: editTable.cv3,
          cf1: editTable.cf1,
          cf2: editTable.cf2,
          cf3: editTable.cf3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteseuil = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("seuil-rentabilite")
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
      .collection("seuil-rentabilite")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let tmcv1 = 0
        let tmcv2 = 0
        let tmcv3 = 0
        let ttmcv1 = 0
        let ttmcv2 = 0
        let ttmcv3 = 0

        let tsr1 =0
        let tsr2 =0
        let tsr3 =0

        data.forEach((doc) => {
          dat.push({
            ca1: doc.data().ca1,
            ca2: doc.data().ca2,
            ca3: doc.data().ca3,
            cv1: doc.data().cv1,
            cv2: doc.data().cv2,
            cv3: doc.data().cv3,
            cf1: doc.data().cf1,
            cf2: doc.data().cf2,
            cf3: doc.data().cf3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          //console.log("montant "+ Number(doc.data().montant) + total)
          //test = test + Number(doc.data().montant)
          tmcv1 = Number(doc.data().ca1)-Number(doc.data().cv1)
          tmcv2 = Number(doc.data().ca2)-Number(doc.data().cv2)
          tmcv3 = Number(doc.data().ca3)-Number(doc.data().cv3)

          setMcv1(tmcv1)
          setMcv2(tmcv2)
          setMcv3(tmcv3)

          ttmcv1 = tmcv1/Number(doc.data().ca1)
          ttmcv2 = tmcv2/Number(doc.data().ca2)
          ttmcv3 = tmcv3/Number(doc.data().ca2)

          setTmcv1(ttmcv1)
          setTmcv2(ttmcv2)
          setTmcv3(ttmcv3)

          if(tmcv1 ==0 ){
            tsr1 = 0
          }else{
            
            tsr1 = Number(doc.data().cf1)/ttmcv1
          }
          if(tmcv2 ==0 ){
            tsr2 = 0
          }else{
            
            tsr2 = Number(doc.data().cf2)/ttmcv2
          }
          if(tmcv3 ==0 ){
            tsr3 = 0
          }else{
            tsr3 = Number(doc.data().cf3)/ttmcv3
          }

          setSr1(tsr1)
          setSr2(tsr2)
          setSr3(tsr3)

        });
        setSeuil(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("seuil-rentabilite")
      .add({
          ca1: values.ca1,
          ca2: values.ca2,
          ca3: values.ca3,
          cv1: values.cv1,
          cv2: values.cv2,
          cv3: values.cv3,
          cf1: values.cf1,
          cf2: values.cf2,
          cf3: values.cf3,
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
      {seuil.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Seuil de rentabilité</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>DESIGNATION</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 2</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                  {seuil.map((item, index) => {
                      return (
                          <>
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            
                                <TableCell><b>Chiffre d'affaires (CA)</b></TableCell>
                                <TableCell>{item.ca1}</TableCell>
                                <TableCell>{item.ca2}</TableCell>
                                <TableCell>{item.ca3}</TableCell>
                                <TableCell rowSpan="8">
                                    <div className="delete">
                                    <div className="edit">
                                        <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                    </div>
                                    <div className="delet">
                                        <DeleteIcon onClick={() => deleteseuil(item.docIdd)} />
                                    </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Charges variables (CV)</TableCell>
                                <TableCell>{item.cv1}</TableCell>
                                <TableCell>{item.cv2}</TableCell>
                                <TableCell>{item.cv3}</TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Marge sur Coût Variable (MCV=CA-CV)</b></TableCell>
                                <TableCell><b>{mcv1}</b></TableCell>
                                <TableCell><b>{mcv2}</b></TableCell>
                                <TableCell><b>{mcv3}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Taux de Marge sur Coût Variable (TMCV=MCV/CA)</b></TableCell>
                                <TableCell><b>{Math.round(tmcv1)}</b></TableCell>
                                <TableCell><b>{Math.round(tmcv2)}</b></TableCell>
                                <TableCell><b>{Math.round(tmcv3)}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Charges fixes (CF)</TableCell>
                                <TableCell>{item.cf1}</TableCell>
                                <TableCell>{item.cf2}</TableCell>
                                <TableCell>{item.cf3}</TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Seuil de rentabilité (SR=CF/TMCV)</b></TableCell>
                                <TableCell><b>{Math.round(sr1*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round(sr2*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round(sr3*100)/100}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Point mort en quantité (SR/prix moyen)</b></TableCell>
                                <TableCell><b>{Math.round((sr1/387.5)*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round((sr2/387.5)*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round((sr3/387.5)*100)/100}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Point mort en nombre de jours de CA (SR/(CA/360)</b></TableCell>
                                <TableCell><b>{Math.round(sr1/(Number(item.ca1)/360))}</b></TableCell>
                                <TableCell><b>{Math.round(sr2/(Number(item.ca2)/360))}</b></TableCell>
                                <TableCell><b>{Math.round(sr3/(Number(item.ca3)/360))}</b></TableCell>
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
                  <StyledTableCell style={{ minWidth: 300}}>DESIGNATION</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 2</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
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
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
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
      <div>
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editseuil}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="ca1"
                  label="Chiffre d'affaires (CA) Année 1"
                  name="ca1"
                  autoFocus
                  type="number"
                  value={editTable.ca1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="ca2"
                  label="Chiffre d'affaires (CA) Année 2"
                  name="ca2"
                  type="number"
                  value={editTable.ca2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="ca3"
                  label="Chiffre d'affaires (CA) Année 3"
                  name="ca3"
                  type="number"
                  value={editTable.ca3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cv1"
                  label="Charges variables (CV) Année 1"
                  name="cv1"
                  type="number"
                  value={editTable.cv1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cv2"
                  label="Charges variables (CV) Année 2"
                  name="cv2"
                  type="number"
                  value={editTable.cv2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cv3"
                  label="Charges variables (CV) Année 3"
                  name="cv3"
                  type="number"
                  value={editTable.cv3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cf1"
                  label="Charges fixes (CF) Année 1"
                  name="cf1"
                  type="number"
                  value={editTable.cf1}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cf2"
                  label="Charges fixes (CF) Année 2"
                  name="cf2"
                  type="number"
                  value={editTable.cf2}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="cf3"
                  label="Charges fixes (CF) Année 3"
                  name="cf3"
                  type="number"
                  value={editTable.cf3}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
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
            
        </CardContent>
        </Card>
        </>
        ): (
          <>
          <Card variant="outlined" className={`${!show && "show"}`}>
            <CardContent>
               <Formik initialValues={initialvalues} onSubmit={onSubmit}
            
          >
            {(props) => (
              <Form>
                <div className="input">
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="ca1"
                    label="Chiffre d'affaires (CA) Année 1"
                    name="ca1"
                    autoFocus
                    tyChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="ca2"
                    label="Chiffre d'affaires (CA) Année 2"
                    name="ca2"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="ca3"
                    label="Chiffre d'affaires (CA) Année 3"
                    name="ca3"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cv1"
                    label="Charges variables (CV) Année 1"
                    name="cv1"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cv2"
                    label="Charges variables (CV) Année 2"
                    name="cv2"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cv3"
                    label="Charges variables (CV) Année 3"
                    name="cv3"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cf1"
                    label="Charges fixes (CF) Année 1"
                    name="cf1"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cf2"
                    label="Charges fixes (CF) Année 2"
                    name="cf2"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                  <Field as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="cf3"
                    label="Charges fixes (CF) Année 3"
                    name="cf3"
                    type="number"
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                  />
                   <Button
                    type="submit"
                    className="plus-icon"
                    style={{ width: 300}}
                    endIcon={<SaveIcon/>}
                    style={{color: 'white', background:'#18A4F6'}} 
                    disabled ={props.errors.montant|| props.errors.elements ? true: false}
                    
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

export default Chapitreneuf
