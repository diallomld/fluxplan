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

const ChapitreTwoFinancement = () => {
  const editObject = {
    apport: 0,
    versement:0,
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
  const [fond, setFond] = React.useState(0)
  const [cout, setCout] = React.useState(0)
  const [coutProjet, setCoutProjet] = React.useState(0)

  const [totalIcorp, settotalIcorp] = React.useState(0)
  const [totalIincpor, setotalIincpor] = React.useState(0)
  const [totalIf, setotalIf] = React.useState(0)
  const [totalStock, setotalStock] = React.useState(0)
  const [totalCharge, setotalCharge] = React.useState(0)

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
  const editBesoin = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("besoin-financement-projet")
      .doc(idDoc)
      .set(
        {
          apport: editTable.apport,
          versement: editTable.versement,
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
            versement:0,
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
      .collection("besoin-financement-projet")
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
      .collection("besoin-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];

        let tfond = 0
        data.forEach((doc) => {
          dat.push({
            apport: doc.data().apport,
            versement: doc.data().versement,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tfond = Number(doc.data().apport) + Number(doc.data().versement)

        });
        setFond(tfond)
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
      .collection("besoin-financement-projet")
      .add({
            apport: editTable.apport,
            versement: editTable.versement,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            investissement:0,
            bfr:0,
            apport:0,
            versement:0,
        })
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  const getIncorp = () => {
    return firebasee
      .firestore()
      .collection("incorporelle")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalmontant = 0
        data.forEach((doc) => {
          
            totalmontant =Number(doc.data().fraismontant)+Number(doc.data().brevetmontant)+Number(doc.data().licencemontant)+Number(doc.data().logicielmontant)+Number(doc.data().sitemontant)+Number(doc.data().marquemontant)+Number(doc.data().droitmontant)+Number(doc.data().autremontant) 
          
            setotalIincpor(totalmontant)

        });
      })
      .catch((err) => console.log(err));
  };
  const getCorp = () => {
    
    return firebasee
      .firestore()
      .collection("corporelle")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalmontant = 0
        data.forEach((doc) => {
          
            totalmontant =Number(doc.data().batimentmontant)+Number(doc.data().amenagementmontant)+Number(doc.data().splitmontant)+Number(doc.data().ordibureaumontant)+Number(doc.data().ordiportablemontant)+Number(doc.data().ondulairemontant)+Number(doc.data().imprimantemontant)+Number(doc.data().photocopiemontant)+Number(doc.data().videomontant)+Number(doc.data().stabilisateurmontant)+Number(doc.data().voituremontant)+Number(doc.data().tricyclemontant)+Number(doc.data().motomontant)+Number(doc.data().bureaumontant)+Number(doc.data().placardmontant)+Number(doc.data().tablemontant)+Number(doc.data().fauteuilmontant)+Number(doc.data().chaisemontant)+Number(doc.data().autremontant)+Number(doc.data().materieletmobiliermontant) 
          
            settotalIcorp(totalmontant)

        });
        
      })
      .catch((err) => console.log(err));
  };
  const getFinance = () => {
    
    return firebasee
      .firestore()
      .collection("immobilisation-financiere")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalmontant = 0
        data.forEach((doc) => {
          
            totalmontant =Number(doc.data().localmontant)+Number(doc.data().electricitemontant)+Number(doc.data().eaumontant)+Number(doc.data().telephonemontant)+Number(doc.data().autremontant)
          
            setotalIf(totalmontant)

        });
        
      })
      .catch((err) => console.log(err));
  };
  const getStock = () => {
    
    return firebasee
      .firestore()
      .collection("stock-marchandise")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalmontant = 0
        data.forEach((doc) => {
            totalmontant += Number(doc.data().montant)
        });
        setotalStock(totalmontant)
      })
      .catch((err) => console.log(err));
  };
  const getCharge = () => {
    
    return firebasee
      .firestore()
      .collection("charge-exploitation")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalmontant = 0
        data.forEach((doc) => {
            totalmontant = (Number(doc.data().mcmnt))+(Number(doc.data().carburantmnt))+(Number(doc.data().pemnt))+(Number(doc.data().fournituremnt))+(Number(doc.data().eaumnt))+(Number(doc.data().electricitemnt))+(Number(doc.data().pmomnt))+(Number(doc.data().epsmnt))+(Number(doc.data().tmemnt))+(Number(doc.data().emballagemnt))+Number(doc.data().tavmnt)+Number(doc.data().tpmnt)+Number(doc.data().tplismnt)+Number(doc.data().voyagemnt)+Number(doc.data().tamnt)+Number(doc.data().traitancemnt)+Number(doc.data().locationmnt)+Number(doc.data().entretienmnt)+Number(doc.data().maintenancemnt)+Number(doc.data().assurancemnt)+Number(doc.data().etudemnt)+Number(doc.data().docmnt)+Number(doc.data().pubmnt)+Number(doc.data().telmnt)+Number(doc.data().fraismnt)+Number(doc.data().internetmnt)+Number(doc.data().commissionmnt)+Number(doc.data().honorairemnt)+Number(doc.data().formationmnt)+Number(doc.data().redevancemnt)+Number(doc.data().receptionmnt)+Number(doc.data().missionmnt)
        });
        setotalCharge(totalmontant)
        setToggle(true)
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getIncorp()
    getCorp()
    getFinance()
    getStock()
    getCharge()
    setCoutProjet(totalStock+totalCharge+totalIincpor+totalIcorp+totalIf)
    getDate();
    setTotalBesoin(Number(coutProjet)-Number(fond))
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
                <caption style={{color: 'black', fontSize:30}}>Besoin de financement du projet</caption>
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
                              <TableCell>{totalIincpor+totalIcorp+totalIf}</TableCell>
                              <TableCell>{Math.round(Number((totalIincpor+totalIcorp+totalIf)/coutProjet)*100)}%</TableCell>
                              <TableCell rowSpan="7">
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
                              <TableCell>{totalStock+totalCharge}</TableCell>
                              <TableCell>{Math.round(Number((totalStock+totalCharge)/coutProjet)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell><b>Coût Total du projet</b></TableCell>
                              <TableCell><b>{coutProjet}</b></TableCell>
                              <TableCell>100 %</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell>Apport en capital</TableCell>
                              <TableCell>{item.apport}</TableCell>
                              <TableCell>{Math.round(Number(item.apport/coutProjet)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell>Versement en compte courant associé</TableCell>
                              <TableCell>{item.versement}</TableCell>
                              <TableCell>{Math.round(Number(item.versement/coutProjet)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell><b>Fonds propres</b></TableCell>
                              <TableCell><b>{fond}</b></TableCell>
                              <TableCell>{Math.round(Number(fond/coutProjet)*100)}%</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                              <TableCell><b>Besoin de financement</b></TableCell>
                              <TableCell><b>{totalBesoin}</b></TableCell>
                              <TableCell>{100-Math.round(Number(fond/coutProjet)*100)}%</TableCell>
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
              onSubmit={editBesoin}
            >
              <div className="input">
                
                 <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="apport"
                  label="Apport en capital"
                  name="apport"
                  multiline
                  rowsMax={10}
                  rows="5"
                  value={editTable.apport}
                  onChange={handleChange}
                />
                 <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="versement"
                  label="Versement en compte courant associé"
                  name="versement"
                  multiline
                  rowsMax={10}
                  rows="5"
                  value={editTable.versement}
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
                        autoFocus
                        fullWidth
                        id="apport"
                        label="Apport en capital"
                        name="apport"
                        multiline
                        rowsMax={10}
                        rows="5"
                        value={editTable.apport}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="versement"
                        label="Versement en compte courant associé"
                        name="versement"
                        multiline
                        rowsMax={10}
                        rows="5"
                        value={editTable.versement}
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

export default ChapitreTwoFinancement
