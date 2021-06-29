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

const ChapitreFiveMoyen = () => {
  const editObject = {
    designation:"",
    qte:0,
    cout:0,
    montant:0

  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [stock, setStock] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [tqte, setQte] = React.useState(0)
  const [tcout, setCout] = React.useState(0)
  const [tmontant, setMontant] = React.useState(0)

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
    setEditTable(stock[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editStock = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("stock-marchandise")
      .doc(idDoc)
      .set(
        {
            designation: editTable.designation,
            qte: editTable.qte,
            cout: editTable.cout,
            montant: editTable.montant,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        setEditTable({
            designation:"",
            cout:0,
            montant:0,
            qte:0,
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteStock = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("stock-marchandise")
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
      .collection("stock-marchandise")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let totalqte = 0
        let totalcout = 0
        let totalmontant = 0
        data.forEach((doc) => {
          dat.push({
            designation: doc.data().designation,
            qte: doc.data().qte,
            cout: doc.data().cout,
            montant: doc.data().montant,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          
          totalqte += Number(doc.data().qte)
          totalcout += Number(doc.data().cout)
          totalmontant += Number(doc.data().montant)

          setQte(totalqte)
          setCout(totalcout)
          setMontant(totalmontant)

        });
        setStock(dat);
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
      .collection("stock-marchandise")
      .add({
            designation: editTable.designation,
            qte: editTable.qte,
            cout: editTable.cout,
            montant: editTable.montant,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            designation:"",
            cout:0,
            montant:0,
            qte:0,
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
      {stock.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Stock de marchandises/matières premières de démarrage ou renforcement </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Quantité</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Coût unitaire</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stock.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.designation}</TableCell>
                              <TableCell>{item.qte}</TableCell>
                              <TableCell>{item.cout}</TableCell>
                              <TableCell>{item.montant}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteStock(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        </>
                      );
                    })}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Total stock de démarrage/renforcement</b> </TableCell>
                            <TableCell>{tqte}</TableCell>
                            <TableCell>{tcout}</TableCell>
                            <TableCell>{tmontant}</TableCell>
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
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Quantité</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Coût unitaire</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant</StyledTableCell>
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
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editStock}
            >
              <div className="input">
                
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="designation"
                label="Designation"
                name="designation"
                autoFocus
                rowsMax={10}
                rows="8"
                value={editTable.designation}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="qte"
                label="Quantité"
                name="qte"
                rowsMax={10}
                rows="5"
                value={editTable.qte}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="cout"
                label="Coût unitaire"
                name="cout"
                rowsMax={10}
                rows="5"
                value={editTable.cout}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="montant"
                label="Montant"
                name="montant"
                rowsMax={10}
                rows="5"
                value={editTable.montant}
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
                        id="designation"
                        label="Designation"
                        name="designation"
                        autoFocus
                        rowsMax={10}
                        rows="8"
                        value={editTable.designation}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="qte"
                        label="Quantité"
                        name="qte"
                        rowsMax={10}
                        rows="5"
                        value={editTable.qte}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="cout"
                        label="Coût unitaire"
                        name="cout"
                        rowsMax={10}
                        rows="5"
                        value={editTable.cout}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="montant"
                        label="Montant"
                        name="montant"
                        rowsMax={10}
                        rows="5"
                        value={editTable.montant}
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

export default ChapitreFiveMoyen
