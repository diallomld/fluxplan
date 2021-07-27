import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import CheckCircle from "@material-ui/icons/CheckCircle";
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Add from '@material-ui/icons/Add';

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


const Chapitreone = () => {
  const initialState = {
    nature: "",
    localisation: "",
    taille: "",
    tendance: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [analyse, setAnalyse] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
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
  };
  const handleModif = (id) => {
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editAnalyse = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("analyse-marche")
      .doc(idDoc)
      .set(
        {
          nature: credentital.nature,
          localisation: credentital.localisation,
          taille: credentital.taille,
          tendance: credentital.tendance,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteAnalyse = (id) => {
    firebasee
      .firestore()
      .collection("analyse-marche")
      .doc(id)
      .delete()
      .then(() => console.log("deleted"))
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("analyse-marche")
      .add({
          nature: credentital.nature,
          localisation: credentital.localisation,
          taille: credentital.taille,
          tendance: credentital.tendance,
          userId: userId,
      })
      .then(() => {
        console.log("add");
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("Analyse marché Ajouté");
  };
  const getDate = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("analyse-marche")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nature: doc.data().nature,
            localisation: doc.data().localisation,
            taille: doc.data().taille,
            tendance: doc.data().tendance,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setAnalyse(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
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
      
      {analyse.length > 0 ? (
     <div className="tab">
          
     <Paper className={classes.root}>
       <TableContainer className={classes.container}>
         <Table stickyHeader aria-label="sticky table">
           <caption style={{color: 'black', fontSize:18}}> L'analyse du marché</caption>
           <TableHead>
             <TableRow>
              <StyledTableCell>Nature</StyledTableCell>
              <StyledTableCell>Localisation</StyledTableCell>
              <StyledTableCell style={{ minWidth: 200 }}>Taille</StyledTableCell>
              <StyledTableCell style={{ minWidth: 300 }}>Tendance</StyledTableCell> 
              <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell> 
             </TableRow>
           </TableHead>
           <TableBody>
             {analyse.map((item, index) => {
                 return (
                   <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                     
                         <TableCell>{item.nature}</TableCell>
                         <TableCell>{item.localisation}</TableCell>
                         <TableCell>{item.taille}</TableCell>
                         <TableCell>{item.tendance}</TableCell>
                         <TableCell>
                           <div className="delete">
                             <div className="edit">
                               <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                             </div>
                             <div className="delet">
                               <DeleteIcon onClick={() => deleteAnalyse(item.docIdd)} />
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
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
                     <TableCell>.......</TableCell>
               </TableRow>
               <TableRow hover role="checkbox" tabIndex={-1}>
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
                     <TableCell>...........</TableCell>
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
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editAnalyse}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="nature"
              label="Nature du marché "
              name="nature"
              autoComplete="nature"
              autoFocus
              value={credentital.nature}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="localisation"
              label="Localisation du marché"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="taille"
              label="Taille du marché "
              name="taille"
              autoFocus
              value={credentital.taille}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="tendance"
              label="Tendance du marché"
              name="tendance"
              autoFocus
              value={credentital.tendance}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />

            <Button
              type="submit"
              className="btn"
              onClick={() => setShow(!show)}
            >
              Modifier
            </Button>
          </div>
        </form>
          
        ): (

        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={handleSubmit}
        >
          <div className="input">
            
          <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="nature"
              label="Nature du marché "
              name="nature"
              autoComplete="nature"
              autoFocus
              value={credentital.nature}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="localisation"
              label="Localisation du marché"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="taille"
              label="Taille du marché "
              name="taille"
              autoFocus
              value={credentital.taille}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="tendance"
              label="Tendance du marché"
              name="tendance"
              autoFocus
              value={credentital.tendance}
              onChange={handleChange}
              rowsMax={6}
              rows="3"
            />
            <Button
                type="submit"
                className="btn"
                style={{ width: 300}}
                onClick={() => setShow(!show)}
              >
                Ajouter
            </Button>
          </div>
        </form>
        )}
    </div>
  );
};

export default Chapitreone;
