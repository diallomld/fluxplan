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

const Chapitrethree = () => {
  const editObject = {
    objectif: "",
    action: "",
    responsable: "",
    delai: "",
    budget: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prescripteur, setPrescripteur] = React.useState([]);
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
    setEditTable(prescripteur[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editConcurrent = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("planaction-commerial")
      .doc(idDoc)
      .set(
        {
          objectif: editTable.objectif,
          action: editTable.action,
          responsable: editTable.responsable,
          delai: editTable.delai,
          budget: editTable.budget,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteConcurrent = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("planaction-commerial")
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
      .collection("planaction-commerial")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            objectif: doc.data().objectif,
            action: doc.data().action,
            responsable: doc.data().responsable,
            delai: doc.data().delai,
            budget: doc.data().budget,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setPrescripteur(dat);
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
      .collection("planaction-commerial")
      .add({
          objectif: editTable.objectif,
          action: editTable.action,
          responsable: editTable.responsable,
          delai: editTable.delai,
          budget: editTable.budget,
          userId: userId,
      })
      .then(() => {
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
      {prescripteur.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Plan d’actions commercial et communication</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Objectifs</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                    <StyledTableCell>Responsable</StyledTableCell>
                    <StyledTableCell>Délai</StyledTableCell>
                    <StyledTableCell>Budget</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prescripteur.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                          <TableCell>{item.objectif}</TableCell>
                          <TableCell>{item.action}</TableCell>
                          <TableCell>{item.responsable}</TableCell>
                          <TableCell>{item.delai}</TableCell>
                          <TableCell>{item.budget}</TableCell>
                          <TableCell>
                            <div className="delete">
                              <div className="edit">
                                <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                              </div>
                              <div className="delet">
                                <DeleteIcon onClick={() => deleteConcurrent(item.docIdd)} />
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
                    <StyledTableCell>Objectifs</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>
                    <StyledTableCell>Responsable</StyledTableCell>
                    <StyledTableCell>Délai</StyledTableCell>
                    <StyledTableCell>Budget</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......</TableCell>
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
              onSubmit={editConcurrent}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="objectif"
                  label="Objectifs"
                  name="objectif"
                  autoComplete="objectif"
                  value={editTable.objectif}
                  autoFocus
                  onChange={handleChange}
                  rows="8"
                  rowsMax={15}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="action"
                  label="Actions"
                  multiline
                  name="action"
                  value={editTable.action}
                  onChange={handleChange}
                  rows="8"
                  rowsMax={15}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="responsable"
                  label="Responsable"
                  name="responsable"
                  value={editTable.responsable}
                  onChange={handleChange}
                  rows="8"
                  rowsMax={15}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="delai"
                  label="Délai"
                  name="delai"
                  value={editTable.delai}
                  onChange={handleChange}
                  rows="8"
                  rowsMax={15}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  id="budget"
                  label="Budget"
                  name="budget"
                  type="number"
                  value={editTable.budget}
                  onChange={handleChange}
                  rows="5"
                  rowsMax={10}
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
                      multiline
                      id="objectif"
                      label="Objectifs"
                      name="objectif"
                      autoComplete="objectif"
                      value={editTable.objectif}
                      autoFocus
                      onChange={handleChange}
                      rows="8"
                      rowsMax={15}
                    />

                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      id="action"
                      label="Actions"
                      multiline
                      name="action"
                      value={editTable.action}
                      onChange={handleChange}
                      rows="8"
                      rowsMax={15}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      id="responsable"
                      label="Responsable"
                      name="responsable"
                      value={editTable.responsable}
                      onChange={handleChange}
                      rows="8"
                      rowsMax={15}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      id="delai"
                      label="Délai"
                      name="delai"
                      value={editTable.delai}
                      onChange={handleChange}
                      rows="8"
                      rowsMax={15}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      multiline
                      id="budget"
                      label="Budget"
                      name="budget"
                      type="number"
                      value={editTable.budget}
                      onChange={handleChange}
                      rows="5"
                      rowsMax={10}
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

export default Chapitrethree
