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

const Chapitrethree = () => {
  const editObject = {
    produit: "",
    description: "",
    revenu: "",
    model: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [business, setBusiness] = React.useState([]);
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
    setEditTable(business[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editBusiness = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("businessmodel")
      .doc(idDoc)
      .set(
        {
          produit: editTable.produit,
          model: editTable.model,
          revenu: editTable.revenu,
          description: editTable.description,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          produit: "",
          description: "",
          revenu: "",
          model: "",
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteProduit = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("businessmodel")
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
      .collection("businessmodel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            produit: doc.data().produit,
            model: doc.data().model,
            revenu: doc.data().revenu,
            description: doc.data().description,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setBusiness(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

 /* const validationSchema = Yup.object().shape({
    produit: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    model: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    revenu: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    description: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
 })*/
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("businessmodel")
      .add({
        produit: editTable.produit,
        model: editTable.model,
        revenu: editTable.revenu,
        description: editTable.description,
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
      {business.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Business model</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>business/service</StyledTableCell>
                    <StyledTableCell style={{minWidth:300}}>Nom du business model </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Flux de revenus </StyledTableCell>
                    <StyledTableCell style={{minWidth:400, maxWidth:400}}>Description des processus de paiement</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {business.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.produit}</TableCell>
                              <TableCell>{item.model}</TableCell>
                              <TableCell>{item.revenu}</TableCell>
                              <TableCell>{item.description}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteProduit(item.docIdd)} />
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
                    <StyledTableCell style={{minWidth:200}}>business/service</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Nom du business model </StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Flux de revenus </StyledTableCell>
                    <StyledTableCell style={{minWidth:300}}>Description des processus de paiement</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Action</StyledTableCell>
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
              onSubmit={editBusiness}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="produit"
                  label="produit/service"
                  name="produit"
                  autoFocus
                  multiline
                  rows="5"
                  rowsMax={10}
                  value={editTable.produit}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="model"
                  label="Nom du business model "
                  name="model"
                  multiline
                  rows="5"
                  rowsMax={10}
                  value={editTable.model}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="revenu"
                  label="Flux de revenus"
                  name="revenu"
                  multiline
                  rows="5"
                  rowsMax={10}
                  value={editTable.revenu}
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="description"
                  label="Description des processus de paiement"
                  name="description"
                  multiline
                  rows="7"
                  rowsMax={10}
                  value={editTable.description}
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
                      id="produit"
                      label="produit/service"
                      name="produit"
                      autoFocus
                      multiline
                      rows="5"
                      rowsMax={10}
                      value={editTable.produit}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="model"
                      label="Nom du business model "
                      name="model"
                      multiline
                      rows="5"
                      rowsMax={10}
                      value={editTable.model}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="revenu"
                      label="Flux de revenus"
                      name="revenu"
                      multiline
                      rows="5"
                      rowsMax={10}
                      value={editTable.revenu}
                      onChange={handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="description"
                      label="Description des processus de paiement"
                      name="description"
                      multiline
                      rows="7"
                      rowsMax={10}
                      value={editTable.description}
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

export default Chapitrethree
