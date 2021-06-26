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

const ChapitreSixsommaire = () => {
  const editObject = {
    investissement: 0,
    bfr: 0,
    apport: 0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [besoin, setBesoin] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [totalBesoin, setTotalBesoin] = React.useState(0)
  const [cout, setCout] = React.useState(0)

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
    setEditTable(besoin[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editConcurrence = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("besoin-financement")
      .doc(idDoc)
      .set(
        {
          investissement: editTable.investissement,
          bfr: editTable.bfr,
          apport: editTable.apport,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        setEditTable({
            investissement:0,
            bfr:0,
            apport:0,
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteBesoin = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("besoin-financement")
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
      .collection("besoin-financement")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];

        let tcout = 0
        let tbesoin = 0
        data.forEach((doc) => {
          dat.push({
            investissement: doc.data().investissement,
            bfr: doc.data().bfr,
            apport: doc.data().apport,
            id: doc.data().userId,
            docIdd: doc.id,
          });

          tcout = Number(doc.data().investissement) + Number(doc.data().bfr)

          setCout(tcout)

          tbesoin = Number(cout-doc.data().apport)

          setTotalBesoin(tbesoin)

        });
        setBesoin(dat);
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
      .collection("besoin-financement")
      .add({
            investissement: editTable.investissement,
            bfr: editTable.bfr,
            apport: editTable.apport,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            concurrence:"",
            avantage:"",
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
      {besoin.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Besoin de financement de (montant)</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:250}}>Désignation</StyledTableCell>
                    <StyledTableCell style={{minWidth:250}}>Montant</StyledTableCell>
                    <StyledTableCell style={{minWidth:250}}>%</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {besoin.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>Investissements</TableCell>
                              <TableCell>{item.investissement}</TableCell>
                              <TableCell>{Math.round(Number(item.investissement/cout)*100)}%</TableCell>
                              <TableCell rowSpan="5">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteBesoin(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell>Besoin en Fonds de Roulement (BFR)</TableCell>
                              <TableCell>{item.bfr}</TableCell>
                              <TableCell>{Math.round(Number(item.bfr/cout)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell><b>Coût du projet</b></TableCell>
                              <TableCell><b>{cout}</b></TableCell>
                              <TableCell>100 %</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell>Apport personnel</TableCell>
                              <TableCell>{item.apport}</TableCell>
                              <TableCell>{Math.round(Number(item.apport/cout)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell><b>Besoin de financement</b></TableCell>
                              <TableCell><b>{totalBesoin}</b></TableCell>
                              <TableCell>{Math.round(Number(totalBesoin/cout)*100)}%</TableCell>
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
                    <StyledTableCell style={{minWidth:250}}>Désignation</StyledTableCell>
                    <StyledTableCell style={{minWidth:250}}>Montant</StyledTableCell>
                    <StyledTableCell style={{minWidth:250}}>%</StyledTableCell>
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
              onSubmit={editConcurrence}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="investissement"
                  label="Investissements"
                  name="investissement"
                  autoFocus
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.investissement}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="bfr"
                  label="Besoin en Fonds de Roulement (BFR)"
                  name="bfr"
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.bfr}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  
                  fullWidth
                  id="apport"
                  label="Apport personnel"
                  name="apport"
                  multiline
                  rowsMax={10}
                  rows="7"
                  value={editTable.apport}
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
                        
                        fullWidth
                        id="investissement"
                        label="Investissements"
                        name="investissement"
                        autoFocus
                        multiline
                        rowsMax={10}
                        rows="7"
                        value={editTable.investissement}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="bfr"
                        label="Besoin en Fonds de Roulement (BFR)"
                        name="bfr"
                        multiline
                        rowsMax={10}
                        rows="7"
                        value={editTable.bfr}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        
                        fullWidth
                        id="apport"
                        label="Apport personnel"
                        name="apport"
                        multiline
                        rowsMax={10}
                        rows="7"
                        value={editTable.apport}
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

export default ChapitreSixsommaire
