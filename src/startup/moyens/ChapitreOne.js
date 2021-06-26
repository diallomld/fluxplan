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

const ChapitreOnMoyen = () => {
  const editObject = {
    poste: "",
    sm: 0,
    sa: 0,
    date: "",
    diplome: "",
    experience:"",
    mission:"",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [humain, setHumain] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [totalMensuel, setTotalMensuel] = React.useState(0)
  const [totalAnuel, setTotalAnuel] = React.useState(0)

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
    setEditTable(humain[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editHumain = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("moyen-humain")
      .doc(idDoc)
      .set(
        {
          poste: editTable.poste,
          sm: editTable.sm,
          sa: editTable.sa,
          date: editTable.date,
          diplome: editTable.diplome,
          experience: editTable.experience,
          mission: editTable.mission,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        setEditTable({
          poste: "",
          sm: 0,
          sa: 0,
          date: "",
          diplome: "",
          experience:"",
          mission:"",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteHumain = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("moyen-humain")
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
      .collection("moyen-humain")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let tanuel = 0
        let tmensuel = 0
        data.forEach((doc) => {
          dat.push({
            poste: doc.data().poste,
            sm: doc.data().sm,
            sa: doc.data().sa,
            date: doc.data().date,
            diplome: doc.data().diplome,
            experience: doc.data().experience,
            mission: doc.data().mission,
            id: doc.data().userId,
            docIdd: doc.id,
          });

          tmensuel +=Number(doc.data().sm)
          tanuel +=Number(doc.data().sa)

          setTotalAnuel(tanuel)
          setTotalMensuel(tmensuel)

        });
        setHumain(dat);
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
      .collection("moyen-humain")
      .add({
            poste: editTable.poste,
            sm: editTable.sm,
            sa: editTable.sa,
            date: editTable.date,
            diplome: editTable.diplome,
            experience: editTable.experience,
            mission: editTable.mission,
            userId: userId,
      })
      .then(() => {
        setEditTable({
          poste: "",
          sm: 0,
          sa: 0,
          date: "",
          diplome: "",
          experience:"",
          mission:"",
        })
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
      {humain.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Moyens humains</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:100}}>Poste</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Salaire brut mensuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Salaire brut annuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Date arrivée</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Diplôme</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Expérience</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Principale mission </StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {humain.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.poste}</TableCell>
                              <TableCell>{item.sm}</TableCell>
                              <TableCell>{item.sa}</TableCell>
                              <TableCell>{item.date}</TableCell>
                              <TableCell>{item.diplome}</TableCell>
                              <TableCell>{item.experience}</TableCell>
                              <TableCell>{item.mission}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteHumain(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{totalMensuel}</TableCell>
                        <TableCell>{totalAnuel}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
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
                    <StyledTableCell style={{minWidth:100}}>Poste</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Salaire brut mensuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Salaire brut annuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Date arrivée</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Diplôme</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Expérience</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Principale mission </StyledTableCell>
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
              onSubmit={editHumain}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="poste"
                  label="poste"
                  name="poste"
                  autoFocus
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.poste}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="sm"
                  label="Salaire brut mensuel"
                  name="sm"
                  multiline
                  rowsMax={6}
                  rows="3"
                  value={editTable.sm}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="sa"
                  label="Salaire annuel mensuel"
                  name="sa"
                  multiline
                  rowsMax={6}
                  rows="3"
                  value={editTable.sa}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="date"
                  label="Date arrivée"
                  name="date"
                  multiline
                  rowsMax={6}
                  rows="3"
                  value={editTable.date}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="diplome"
                  label="Diplôme"
                  name="diplome"
                  multiline
                  rowsMax={6}
                  rows="5"
                  value={editTable.diplome}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="experience"
                  label="Expérience"
                  name="experience"
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.experience}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="mission"
                  label="Principale mission"
                  name="mission"
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.mission}
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
                      required
                      fullWidth
                      id="poste"
                      label="poste"
                      name="poste"
                      autoFocus
                      multiline
                      rowsMax={10}
                      rows="5"
                      value={editTable.poste}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="sm"
                      label="Salaire brut mensuel"
                      name="sm"
                      multiline
                      rowsMax={6}
                      rows="3"
                      value={editTable.sm}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="sa"
                      label="Salaire annuel mensuel"
                      name="sa"
                      multiline
                      rowsMax={6}
                      rows="3"
                      value={editTable.sa}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="date"
                      label="Date arrivée"
                      name="date"
                      multiline
                      rowsMax={6}
                      rows="3"
                      value={editTable.date}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="diplome"
                      label="Diplôme"
                      name="diplome"
                      multiline
                      rowsMax={6}
                      rows="5"
                      value={editTable.diplome}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="experience"
                      label="Expérience"
                      name="experience"
                      multiline
                      rowsMax={10}
                      rows="7"
                      value={editTable.experience}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="mission"
                      label="Principale mission"
                      name="mission"
                      multiline
                      rowsMax={10}
                      rows="7"
                      value={editTable.mission}
                      onChange={handleChange}
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
                </form>
            </CardContent>
          </Card>
        </>
        )}
    </div>
  );
};

export default ChapitreOnMoyen
