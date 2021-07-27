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

const Chapitreseven = () => {
  const editObject = {
    action: "",
    responsable: "",
    date: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [avancement, setAvancement] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [errorAction, setErrorAction] = React.useState(true);
  const [errorResponsable, setErrorResponsable] = React.useState(true);
  const [errorDate, setErrorDate] = React.useState(true);

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
    setEditTable(avancement[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editAvancement = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("etat-avancement")
      .doc(idDoc)
      .set(
        {
          action: editTable.action,
          responsable: editTable.responsable,
          date: editTable.date,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          action: "",
          responsable: "",
          date: "",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteAvancement = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("etat-avancement")
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
      .collection("etat-avancement")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            action: doc.data().action,
            responsable: doc.data().responsable,
            date: doc.data().date,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setAvancement(dat);
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
      .collection("etat-avancement")
      .add({
        action: editTable.action,
        responsable: editTable.responsable,
        date: editTable.date,
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
      {avancement.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Etat d’avancement du projet</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200, maxWidth:400}}>Actions accomplies</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Responsable </StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {avancement.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.action}</TableCell>
                              <TableCell>{item.responsable}</TableCell>
                              <TableCell>{item.date}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteAvancement(item.docIdd)} />
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
                    <StyledTableCell style={{minWidth:200, maxWidth:400}}>Actions accomplies</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Responsable </StyledTableCell>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
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
              onSubmit={editAvancement}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="action"
                  label="Actions accomplies"
                  name="action"
                  autoFocus
                  multiline
                  rows="5"
                  rowsMax={10}
                  value={editTable.action}
                  onChange={handleChange}
                  />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="responsable"
                  label="Responsable "
                  name="responsable"
                  multiline
                  rows="2"
                  rowsMax={5}
                  value={editTable.responsable}
                  onChange={handleChange}
                  />
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="date"
                  label="Date"
                  name="date"
                  type="date"
                  value={editTable.date}
                  onChange={handleChange}
                  />
                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}
                  disabled ={errorDate || errorResponsable || errorAction ? false: true}
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
              <form>
                <div className="input">
                  
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="action"
                    label="Actions accomplies"
                    name="action"
                    autoFocus
                    multiline
                    rows="5"
                    rowsMax={10}
                    value={editTable.action}
                    onChange={handleChange}
                    />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="responsable"
                    label="Responsable "
                    name="responsable"
                    multiline
                    rows="2"
                    rowsMax={5}
                    value={editTable.responsable}
                    onChange={handleChange}
                    />
                  
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="date"
                    label="Date"
                    name="date"
                    type="date"
                    value={editTable.date}
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
  );
};

export default Chapitreseven
