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

import MenuItem from '@material-ui/core/MenuItem';

import Autocomplete from '@material-ui/lab/Autocomplete';

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

const ChapitreTwoPlaning = () => {
  const editObject = {
    activite:"",
    mois:"",

  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [planning, setPlanning] = React.useState([]);
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
    setEditTable(planning[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPlanning = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("planning-execution-projet")
      .doc(idDoc)
      .set(
        {
            activite: editTable.activite,
            mois: editTable.mois,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        setEditTable({
            activite:"",
            mois:"",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePlanning = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("planning-execution-projet")
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
      .collection("planning-execution-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            activite: doc.data().activite,
            mois: doc.data().mois,
            id: doc.data().userId,
            docIdd: doc.id,
          });

        });
        setPlanning(dat);
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
      .collection("planning-execution-projet")
      .add({
            activite: editTable.activite,
            mois: editTable.mois,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            activite:"",
            mois:"",
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
      {planning.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Planning d’exécution du projet</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Activité </StyledTableCell>
                    <StyledTableCell>Mois 1</StyledTableCell>
                    <StyledTableCell>Mois 2</StyledTableCell>
                    <StyledTableCell>Mois 3</StyledTableCell>
                    <StyledTableCell>Mois 4</StyledTableCell>
                    <StyledTableCell>Mois 5</StyledTableCell>
                    <StyledTableCell>Mois 6</StyledTableCell>
                    <StyledTableCell>Mois 7</StyledTableCell>
                    <StyledTableCell>Mois 8</StyledTableCell>
                    <StyledTableCell>Mois 9</StyledTableCell>
                    <StyledTableCell>Mois 10</StyledTableCell>
                    <StyledTableCell>Mois 11</StyledTableCell>
                    <StyledTableCell>Mois 12</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {planning.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.activite}</TableCell>
                              {item.mois=="mois1" && (  
                                  <>       
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois2" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois3" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois4" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois5" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois6" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois7" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois8" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois9" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois10" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois11" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                <TableCell></TableCell>
                                </>
                              )}
                              {item.mois=="mois12" && (  
                                  <>       
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell style={{backgroundColor: "#18A4F6"}}></TableCell>
                                </>
                              )}
                              
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deletePlanning(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
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
                    <StyledTableCell style={{minWidth:200}}>Activité </StyledTableCell>
                    <StyledTableCell>Mois 1</StyledTableCell>
                    <StyledTableCell>Mois 2</StyledTableCell>
                    <StyledTableCell>Mois 3</StyledTableCell>
                    <StyledTableCell>Mois 4</StyledTableCell>
                    <StyledTableCell>Mois 5</StyledTableCell>
                    <StyledTableCell>Mois 6</StyledTableCell>
                    <StyledTableCell>Mois 7</StyledTableCell>
                    <StyledTableCell>Mois 8</StyledTableCell>
                    <StyledTableCell>Mois 9</StyledTableCell>
                    <StyledTableCell>Mois 10</StyledTableCell>
                    <StyledTableCell>Mois 11</StyledTableCell>
                    <StyledTableCell>Mois 12</StyledTableCell>
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
              onSubmit={editPlanning}
            >
              <div className="input">
                
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="activite"
                label="activites"
                name="activite"
                autoFocus
                rowsMax={10}
                rows="8"
                value={editTable.activite}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                type="mois"
                select
                fullWidth
                id="mois"
                label="mois"
                name="mois"
                rowsMax={10}
                rows="5"
                value={editTable.mois}
                onChange={handleChange}
                >
                    <MenuItem value="mois1">mois 1</MenuItem>
                    <MenuItem value="mois2">mois 2</MenuItem>
                    <MenuItem value="mois3">mois 3</MenuItem>
                    <MenuItem value="mois4">mois 4</MenuItem>
                    <MenuItem value="mois5">mois 5</MenuItem>
                    <MenuItem value="mois6">mois 6</MenuItem>
                    <MenuItem value="mois7">mois 7</MenuItem>
                    <MenuItem value="mois8">mois 8</MenuItem>
                    <MenuItem value="mois9">mois 9</MenuItem>
                    <MenuItem value="mois10">mois 10</MenuItem>
                    <MenuItem value="mois11">mois 11</MenuItem>
                    <MenuItem value="mois12">mois 12</MenuItem>
                </TextField>

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
                        id="activite"
                        label="activites"
                        name="activite"
                        autoFocus
                        rowsMax={10}
                        rows="8"
                        value={editTable.activite}
                        onChange={handleChange}
                      />
                      <TextField
                        variant="outlined"
                        margin="normal"
                        type="mois"
                        select
                        fullWidth
                        id="mois"
                        label="mois"
                        name="mois"
                        rowsMax={10}
                        rows="5"
                        value={editTable.mois}
                        onChange={handleChange}
                        >
                            <MenuItem value="mois1">mois 1</MenuItem>
                            <MenuItem value="mois2">mois 2</MenuItem>
                            <MenuItem value="mois3">mois 3</MenuItem>
                            <MenuItem value="mois4">mois 4</MenuItem>
                            <MenuItem value="mois5">mois 5</MenuItem>
                            <MenuItem value="mois6">mois 6</MenuItem>
                            <MenuItem value="mois7">mois 7</MenuItem>
                            <MenuItem value="mois8">mois 8</MenuItem>
                            <MenuItem value="mois9">mois 9</MenuItem>
                            <MenuItem value="mois10">mois 10</MenuItem>
                            <MenuItem value="mois11">mois 11</MenuItem>
                            <MenuItem value="mois12">mois 12</MenuItem>
                        </TextField>
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

export default ChapitreTwoPlaning
