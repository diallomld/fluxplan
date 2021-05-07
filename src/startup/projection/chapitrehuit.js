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

const Chapitrehuit = () => {
  const initialvalues = {
    invest0:"",
    invest1:"",
    invest2:"",
    invest3:"",
    variation0:"",
    variation1:"",
    variation2:"",
    variation3:"",
    rembourse0:"",
    rembourse1:"",
    rembourse2:"",
    rembourse3:"",
    dividende0:"",
    dividende1:"",
    dividende2:"",
    dividende3:"",
    apportp0:"",
    apportp1:"",
    apportp2:"",
    apportp3:"",
    apporta0:"",
    apporta1:"",
    apporta2:"",
    apporta3:"",
    emprunt0:"",
    emprunt1:"",
    emprunt2:"",
    emprunt3:"",
    subvention0:"",
    subvention1:"",
    subvention2:"",
    subvention3:"",
    aides0:"",
    aides1:"",
    aides2:"",
    aides3:"",
    autres0:"",
    autres1:"",
    autres2:"",
    autres3:"",
    capacite0:"",
    capacite1:"",
    capacite1:"",
    capacite2:"",

  };
  const editObject = {
    invest0:"",
    invest1:"",
    invest2:"",
    invest3:"",
    variation0:"",
    variation1:"",
    variation2:"",
    variation3:"",
    rembourse0:"",
    rembourse1:"",
    rembourse2:"",
    rembourse3:"",
    dividende0:"",
    dividende1:"",
    dividende2:"",
    dividende3:"",
    apportp0:"",
    apportp1:"",
    apportp2:"",
    apportp3:"",
    apporta0:"",
    apporta1:"",
    apporta2:"",
    apporta3:"",
    emprunt0:"",
    emprunt1:"",
    emprunt2:"",
    emprunt3:"",
    subvention0:"",
    subvention1:"",
    subvention2:"",
    subvention3:"",
    aides0:"",
    aides1:"",
    aides2:"",
    aides3:"",
    autres0:"",
    autres1:"",
    autres2:"",
    autres3:"",
    capacite0:"",
    capacite1:"",
    capacite1:"",
    capacite2:"",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [plan, setPlan] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  
  const [totalBesoin1, setTotalBesoin1] = React.useState(0);
  const [totalBesoin2, setTotalBesoin2] = React.useState(0);
  const [totalBesoin3, setTotalBesoin3] = React.useState(0);
  const [totalBesoin0, setTotalBesoin0] = React.useState(0);
  
  const [totalResource1, setTotalResource1] = React.useState(0);
  const [totalResource2, setTotalResource2] = React.useState(0);
  const [totalResource3, setTotalResource3] = React.useState(0);
  const [totalResource0, setTotalResource0] = React.useState(0);
  
  const [totalSolde1, setTotalSolde1] = React.useState(0);
  const [totalSolde2, setTotalSolde2] = React.useState(0);
  const [totalSolde3, setTotalSolde3] = React.useState(0);
  const [totalSolde0, setTotalSolde0] = React.useState(0);

 
  //const [errorElements, setErrorElements] = React.useState(true);


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
    setEditTable(plan[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPlan = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("planfinancement")
      .doc(idDoc)
      .set(
        {
          invest0: editTable.invest0,
          invest1: editTable.invest1,
          invest2: editTable.invest2,
          invest3: editTable.invest3,
          variation0: editTable.variation1,
          variation1: editTable.variation1,
          variation2: editTable.variation2,
          variation3: editTable.variation3,
          rembourse0: editTable.rembourse1,
          rembourse1: editTable.rembourse1,
          rembourse2: editTable.rembourse2,
          rembourse3: editTable.rembourse3,
          dividende0: editTable.dividende1,
          dividende1: editTable.dividende1,
          dividende2: editTable.dividende2,
          dividende3: editTable.dividende3,
          apportp0: editTable.apportp1,
          apportp1: editTable.apportp1,
          apportp2: editTable.apportp2,
          apportp3: editTable.apportp3,
          apporta0: editTable.apporta1,
          apporta1: editTable.apporta1,
          apporta2: editTable.apporta2,
          apporta3: editTable.apporta3,
          emprunt0: editTable.emprunt1,
          emprunt1: editTable.emprunt1,
          emprunt2: editTable.emprunt2,
          emprunt3: editTable.emprunt3,
          subvention0: editTable.subvention1,
          subvention1: editTable.subvention1,
          subvention2: editTable.subvention2,
          subvention3: editTable.subvention3,
          aides0: editTable.aides1,
          aides1: editTable.aides1,
          aides2: editTable.aides2,
          aides3: editTable.aides3,
          autres0: editTable.autres1,
          autres1: editTable.autres1,
          autres2: editTable.autres2,
          autres3: editTable.autres3,
          capacite0: editTable.capacite1,
          capacite1: editTable.capacite1,
          capacite2: editTable.capacite2,
          capacite3: editTable.capacite3,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({})
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteplan = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("planfinancement")
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
      .collection("planfinancement")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          let tb0 = 0;
          let tb1 = 0;
          let tb2 = 0;
          let tb3 = 0;
          let tr0 = 0;
          let tr1 = 0;
          let tr2 = 0;
          let tr3 = 0;
          let ts0 = 0;
          let ts1 = 0;
          let ts2 = 0;
          let ts3 = 0;
          
 
          tb0 = Number(doc.data().invest0)+Number(doc.data().variation0)+Number(doc.data().rembourse0)+Number(doc.data().dividende0)
          tb1 = Number(doc.data().invest1)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
          tb2 = Number(doc.data().invest2)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
          tb3 = Number(doc.data().invest3)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
          
          tr0 = Number(doc.data().apportp0)+Number(doc.data().apporta0)+Number(doc.data().emprunt0)+Number(doc.data().aides0)+Number(doc.data().autres0)+Number(doc.data().capacite0)
          tr1 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres1)+Number(doc.data().capacite1)
          tr2 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres2)+Number(doc.data().capacite2)
          tr3 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres3)+Number(doc.data().capacite3)

          setTotalBesoin0(tb0)
          setTotalBesoin1(tb1)
          setTotalBesoin2(tb2)
          setTotalBesoin3(tb3)
          
          setTotalResource0(tr0)
          setTotalResource1(tr1)
          setTotalResource2(tr2)
          setTotalResource3(tr3)
          
          ts0 = tr0-tb0
          ts1 = tr1-tb1
          ts2 = tr2-tb2
          ts3 = tr3-tb3
          
          setTotalSolde0(ts0)
          setTotalSolde1(ts1)
          setTotalSolde2(ts2)
          setTotalSolde3(ts3)
          
          dat.push({
            invest0: doc.data().invest0,
            invest1: doc.data().invest1,
            invest2: doc.data().invest2,
            invest3: doc.data().invest3,
            variation0: doc.data().variation1,
            variation1: doc.data().variation1,
            variation2: doc.data().variation2,
            variation3: doc.data().variation3,
            rembourse0: doc.data().rembourse1,
            rembourse1: doc.data().rembourse1,
            rembourse2: doc.data().rembourse2,
            rembourse3: doc.data().rembourse3,
            dividende0: doc.data().dividende1,
            dividende1: doc.data().dividende1,
            dividende2: doc.data().dividende2,
            dividende3: doc.data().dividende3,
            apportp0: doc.data().apportp1,
            apportp1: doc.data().apportp1,
            apportp2: doc.data().apportp2,
            apportp3: doc.data().apportp3,
            apporta0: doc.data().apporta1,
            apporta1: doc.data().apporta1,
            apporta2: doc.data().apporta2,
            apporta3: doc.data().apporta3,
            emprunt0: doc.data().emprunt1,
            emprunt1: doc.data().emprunt1,
            emprunt2: doc.data().emprunt2,
            emprunt3: doc.data().emprunt3,
            subvention0: doc.data().subvention1,
            subvention1: doc.data().subvention1,
            subvention2: doc.data().subvention2,
            subvention3: doc.data().subvention3,
            aides0: doc.data().aides1,
            aides1: doc.data().aides1,
            aides2: doc.data().aides2,
            aides3: doc.data().aides3,
            autres0: doc.data().autres1,
            autres1: doc.data().autres1,
            autres2: doc.data().autres2,
            autres3: doc.data().autres3,
            capacite0: doc.data().capacite1,
            capacite1: doc.data().capacite1,
            capacite2: doc.data().capacite2,
            capacite3: doc.data().capacite3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPlan(dat);
        //console.table(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

 /* 
    const validationSchema = Yup.object().shape({
    elements: Yup.string().min(3,'minimum 3 caracteres').required("veuillez saisir ce champ"),
    annee1: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee2: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
    annee3: Yup.string().required("Entrer un montant valide").matches(/^[0-9\b]{3,15}$/,"Entrer un montant valide"),
   }) */
  const onSubmit = (values, props) => {
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("planfinancement")
      .add({
        invest0: values.invest0,
        invest1: values.invest1,
        invest2: values.invest2,
        invest3: values.invest3,
        variation0: values.variation1,
        variation1: values.variation1,
        variation2: values.variation2,
        variation3: values.variation3,
        rembourse0: values.rembourse1,
        rembourse1: values.rembourse1,
        rembourse2: values.rembourse2,
        rembourse3: values.rembourse3,
        dividende0: values.dividende1,
        dividende1: values.dividende1,
        dividende2: values.dividende2,
        dividende3: values.dividende3,
        apportp0: values.apportp1,
        apportp1: values.apportp1,
        apportp2: values.apportp2,
        apportp3: values.apportp3,
        apporta0: values.apporta1,
        apporta1: values.apporta1,
        apporta2: values.apporta2,
        apporta3: values.apporta3,
        emprunt0: values.emprunt1,
        emprunt1: values.emprunt1,
        emprunt2: values.emprunt2,
        emprunt3: values.emprunt3,
        subvention0: values.subvention1,
        subvention1: values.subvention1,
        subvention2: values.subvention2,
        subvention3: values.subvention3,
        aides0: values.aides1,
        aides1: values.aides1,
        aides2: values.aides2,
        aides3: values.aides3,
        autres0: values.autres1,
        autres1: values.autres1,
        autres2: values.autres2,
        autres3: values.autres3,
        capacite0: values.capacite1,
        capacite1: values.capacite1,
        capacite2: values.capacite2,
        capacite3: values.capacite3,
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
      {plan.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:20}}>Plan de financement </caption>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 300}}></TableCell>
                    <StyledTableCell style={{ minWidth: 150}}>Année 0</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><b>Besoins</b></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                  {plan.map((item, index) => {
                      return (
                        <>
                        <TableRow>
                            <TableCell>Investissements </TableCell>
                            <TableCell>{item.invest0}</TableCell>
                            <TableCell>{item.invest1}</TableCell>
                            <TableCell>{item.invest2}</TableCell>
                            <TableCell>{item.invest3}</TableCell>
                            <TableCell rowSpan="18">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon style={{color:'blue'}} onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon style={{color:'red'}} onClick={() => deleteplan(item.docIdd)} />
                                  </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Variation du Besoin en fonds de roulement</TableCell>
                            <TableCell>{item.variation0}</TableCell>
                            <TableCell>{item.variation1}</TableCell>
                            <TableCell>{item.variation2}</TableCell>
                            <TableCell>{item.variation3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Remboursement emprunt</TableCell>
                            <TableCell>{item.rembourse0}</TableCell>
                            <TableCell>{item.rembourse1}</TableCell>
                            <TableCell>{item.rembourse2}</TableCell>
                            <TableCell>{item.rembourse3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dividende</TableCell>
                            <TableCell>{item.dividende0}</TableCell>
                            <TableCell>{item.dividende1}</TableCell>
                            <TableCell>{item.dividende2}</TableCell>
                            <TableCell>{item.dividende3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>TOTAL DES BESOINS</b></TableCell>
                            <TableCell><b>{totalBesoin0}</b></TableCell>
                            <TableCell><b>{totalBesoin1}</b></TableCell>
                            <TableCell><b>{totalBesoin2}</b></TableCell>
                            <TableCell><b>{totalBesoin3}</b></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESOURCES</b></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Apports personnel</TableCell>
                            <TableCell>{item.apportp0}</TableCell>
                            <TableCell>{item.apportp1}</TableCell>
                            <TableCell>{item.apportp2}</TableCell>
                            <TableCell>{item.apportp3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Apports des Associés</TableCell>
                            <TableCell>{item.apporta0}</TableCell>
                            <TableCell>{item.apporta1}</TableCell>
                            <TableCell>{item.apporta2}</TableCell>
                            <TableCell>{item.apporta3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Emprunts</TableCell>
                            <TableCell>{item.emprunt0}</TableCell>
                            <TableCell>{item.emprunt1}</TableCell>
                            <TableCell>{item.emprunt2}</TableCell>
                            <TableCell>{item.emprunt3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Subventions</TableCell>
                            <TableCell>{item.subvention0}</TableCell>
                            <TableCell>{item.subvention1}</TableCell>
                            <TableCell>{item.subvention2}</TableCell>
                            <TableCell>{item.subvention3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aides</TableCell>
                            <TableCell>{item.aides0}</TableCell>
                            <TableCell>{item.aides1}</TableCell>
                            <TableCell>{item.aides2}</TableCell>
                            <TableCell>{item.aides3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres</TableCell>
                            <TableCell>{item.autres0}</TableCell>
                            <TableCell>{item.autres1}</TableCell>
                            <TableCell>{item.autres2}</TableCell>
                            <TableCell>{item.autres3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Capacité d'autofinancement (hors subvention)</TableCell>
                            <TableCell>{item.capacite0}</TableCell>
                            <TableCell>{item.capacite1}</TableCell>
                            <TableCell>{item.capacite2}</TableCell>
                            <TableCell>{item.capacite3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>TOTAL DES RESSOURCES</b></TableCell>
                            <TableCell>{totalResource0}</TableCell>
                            <TableCell>{totalResource1}</TableCell>
                            <TableCell>{totalResource2}</TableCell>
                            <TableCell>{totalResource3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow style={{backgroundColor:'#18A4F6'}}>
                            <TableCell><b>SOLDE</b></TableCell>
                            <TableCell>{totalSolde0}</TableCell>
                            <TableCell>{totalSolde1}</TableCell>
                            <TableCell>{totalSolde2}</TableCell>
                            <TableCell>{totalSolde3}</TableCell>
                        </TableRow>
                        <TableRow style={{backgroundColor:'#18A4F6'}}>
                            <TableCell><b>SOLDE CUMULES</b></TableCell>
                            <TableCell>{totalSolde0}</TableCell>
                            <TableCell>{totalSolde1 + totalSolde0}</TableCell>
                            <TableCell>{totalSolde1 + totalSolde2 + totalSolde0}</TableCell>
                            <TableCell>{totalSolde1 + totalSolde2 + totalSolde0+totalSolde3}</TableCell>
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
                    <TableCell style={{ minWidth: 300}}></TableCell>
                    <StyledTableCell style={{ minWidth: 150}}>Année 0</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell><b>Besoins</b></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
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
              onSubmit={editPlan}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="invest0"
                  label="Investissements Année 0"
                  name="invest0"
                  autoFocus
                  type="number"
                  value={editTable.invest0}
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
                  id="invest1"
                  label="Investissements Année 1"
                  name="invest1"
                  autoFocus
                  type="number"
                  value={editTable.invest1}
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
                  label="Investissements Année 2"
                  id="invest2"
                  name="invest2"
                  type="number"
                  value={editTable.invest2}
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
                  label="Investissements Année 3"
                  id="invest3"
                  name="invest3"
                  type="number"
                  value={editTable.invest3}
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
                  id="variation0"
                  label="Variation du Besoin en fonds de roulement Année 0"
                  name="variation0"
                  autoFocus
                  type="number"
                  value={editTable.variation0}
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
                  id="variation1"
                  label="Variation du Besoin en fonds de roulement Année 1"
                  name="variation1"
                  autoFocus
                  type="number"
                  value={editTable.variation1}
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
                  label="Variation du Besoin en fonds de roulement Année 2"
                  id="variation2"
                  name="variation2"
                  type="number"
                  value={editTable.variation2}
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
                  label="Variation du Besoin en fonds de roulement Année 3"
                  id="variation3"
                  name="variation3"
                  type="number"
                  value={editTable.variation3}
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
                  id="rembourse0"
                  label="Remboursement emprunt Année 0"
                  name="rembourse0"
                  autoFocus
                  type="number"
                  value={editTable.rembourse0}
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
                  id="rembourse1"
                  label="Remboursement emprunt Année 1"
                  name="rembourse1"
                  autoFocus
                  type="number"
                  value={editTable.rembourse1}
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
                  label="Remboursement emprunt Année 2"
                  id="rembourse2"
                  name="rembourse2"
                  type="number"
                  value={editTable.rembourse2}
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
                  label="Remboursement emprunt Année 3"
                  id="rembourse3"
                  name="rembourse3"
                  type="number"
                  value={editTable.rembourse3}
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
                  id="dividende0"
                  label="Dividende Année 0"
                  name="dividende0"
                  autoFocus
                  type="number"
                  value={editTable.dividende0}
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
                  id="dividende1"
                  label="Dividende Année 1"
                  name="dividende1"
                  autoFocus
                  type="number"
                  value={editTable.dividende1}
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
                  label="Dividende Année 2"
                  id="dividende2"
                  name="dividende2"
                  type="number"
                  value={editTable.dividende2}
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
                  label="Dividende Année 3"
                  id="dividende3"
                  name="dividende3"
                  type="number"
                  value={editTable.dividende3}
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
                  id="apportp0"
                  label="Apports personnel Année 0"
                  name="apportp0"
                  autoFocus
                  type="number"
                  value={editTable.apportp0}
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
                  id="apportp1"
                  label="Apports personnel Année 1"
                  name="apportp1"
                  autoFocus
                  type="number"
                  value={editTable.apportp1}
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
                  label="Apports personnel Année 2"
                  id="apportp2"
                  name="apportp2"
                  type="number"
                  value={editTable.apportp2}
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
                  label="Apports personnel Année 3"
                  id="apportp3"
                  name="apportp3"
                  type="number"
                  value={editTable.apportp3}
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
                  id="apportp0"
                  label="Apports personnel Année 0"
                  name="apportp0"
                  autoFocus
                  type="number"
                  value={editTable.apportp0}
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
                  id="apportp1"
                  label="Apports personnel Année 1"
                  name="apportp1"
                  autoFocus
                  type="number"
                  value={editTable.apportp1}
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
                  label="Apports personnel Année 2"
                  id="apportp2"
                  name="apportp2"
                  type="number"
                  value={editTable.apportp2}
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
                  label="Apports personnel Année 3"
                  id="apportp3"
                  name="apportp3"
                  type="number"
                  value={editTable.apportp3}
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
                  id="apporta0"
                  label="Apports des associés Année 0"
                  name="apporta0"
                  autoFocus
                  type="number"
                  value={editTable.apporta0}
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
                  id="apporta1"
                  label="Apports des associés Année 1"
                  name="apporta1"
                  autoFocus
                  type="number"
                  value={editTable.apporta1}
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
                  label="Apports des associés Année 2"
                  id="apporta2"
                  name="apporta2"
                  type="number"
                  value={editTable.apporta2}
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
                  label="Apports des associés Année 3"
                  id="apporta3"
                  name="apporta3"
                  type="number"
                  value={editTable.apporta3}
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
                  id="emprunt0"
                  label="Emprunts Année 0"
                  name="emprunt0"
                  autoFocus
                  type="number"
                  value={editTable.emprunt0}
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
                  id="emprunt1"
                  label="Emprunts Année 1"
                  name="emprunt1"
                  autoFocus
                  type="number"
                  value={editTable.emprunt1}
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
                  label="Emprunts Année 2"
                  id="emprunt2"
                  name="emprunt2"
                  type="number"
                  value={editTable.emprunt2}
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
                  label="Emprunts Année 3"
                  id="emprunt3"
                  name="emprunt3"
                  type="number"
                  value={editTable.emprunt3}
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
                  id="subvention0"
                  label="Subventions Année 0"
                  name="subvention0"
                  autoFocus
                  type="number"
                  value={editTable.subvention0}
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
                  id="subvention1"
                  label="Subventions Année 1"
                  name="subvention1"
                  autoFocus
                  type="number"
                  value={editTable.subvention1}
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
                  label="Subventions Année 2"
                  id="subvention2"
                  name="subvention2"
                  type="number"
                  value={editTable.subvention2}
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
                  label="Subventions Année 3"
                  id="subvention3"
                  name="subvention3"
                  type="number"
                  value={editTable.subvention3}
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
                  id="aides0"
                  label="Aides Année 0"
                  name="aides0"
                  autoFocus
                  type="number"
                  value={editTable.aides0}
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
                  id="aides1"
                  label="Aides Année 1"
                  name="aides1"
                  autoFocus
                  type="number"
                  value={editTable.aides1}
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
                  label="Aides Année 2"
                  id="aides2"
                  name="aides2"
                  type="number"
                  value={editTable.aides2}
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
                  label="Aides Année 3"
                  id="aides3"
                  name="aides3"
                  type="number"
                  value={editTable.aides3}
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
                  id="autres0"
                  label="Autres Année 0"
                  name="autres0"
                  autoFocus
                  type="number"
                  value={editTable.autres0}
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
                  id="autres1"
                  label="Autres Année 1"
                  name="autres1"
                  autoFocus
                  type="number"
                  value={editTable.autres1}
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
                  label="Autres Année 2"
                  id="autres2"
                  name="autres2"
                  type="number"
                  value={editTable.autres2}
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
                  label="Autres Année 3"
                  id="autres3"
                  name="autres3"
                  type="number"
                  value={editTable.autres3}
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
                  id="capacite0"
                  label="Capacité d'autofinancement (hors subvention) Année 0"
                  name="capacite0"
                  autoFocus
                  type="number"
                  value={editTable.capacite0}
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
                  id="capacite1"
                  label="Capacité d'autofinancement (hors subvention Année 1"
                  name="capacite1"
                  autoFocus
                  type="number"
                  value={editTable.capacite1}
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
                  label="Capacité d'autofinancement (hors subvention Année 2"
                  id="capacite2"
                  name="capacite2"
                  type="number"
                  value={editTable.capacite2}
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
                  label="Capacité d'autofinancement (hors subvention Année 3"
                  id="capacite3"
                  name="capacite3"
                  type="number"
                  value={editTable.autres3}
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
                  id="invest0"
                  label="Investissements Année 0"
                  name="invest0"
                  autoFocus
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
                  id="invest1"
                  label="Investissements Année 1"
                  name="invest1"
                  autoFocus
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
                  label="Investissements Année 2"
                  id="invest2"
                  name="invest2"
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
                  label="Investissements Année 3"
                  id="invest3"
                  name="invest3"
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
                  id="variation0"
                  label="Variation du Besoin en fonds de roulement Année 0"
                  name="variation0"
                  autoFocus
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
                  id="variation1"
                  label="Variation du Besoin en fonds de roulement Année 1"
                  name="variation1"
                  autoFocus
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
                  label="Variation du Besoin en fonds de roulement Année 2"
                  id="variation2"
                  name="variation2"
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
                  label="Variation du Besoin en fonds de roulement Année 3"
                  id="variation3"
                  name="variation3"
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
                  id="rembourse0"
                  label="Remboursement emprunt Année 0"
                  name="rembourse0"
                  autoFocus
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
                  id="rembourse1"
                  label="Remboursement emprunt Année 1"
                  name="rembourse1"
                  autoFocus
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
                  label="Remboursement emprunt Année 2"
                  id="rembourse2"
                  name="rembourse2"
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
                  label="Remboursement emprunt Année 3"
                  id="rembourse3"
                  name="rembourse3"
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
                  id="dividende0"
                  label="Dividende Année 0"
                  name="dividende0"
                  autoFocus
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
                  id="dividende1"
                  label="Dividende Année 1"
                  name="dividende1"
                  autoFocus
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
                  label="Dividende Année 2"
                  id="dividende2"
                  name="dividende2"
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
                  label="Dividende Année 3"
                  id="dividende3"
                  name="dividende3"
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
                  id="apportp0"
                  label="Apports personnel Année 0"
                  name="apportp0"
                  autoFocus
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
                  id="apportp1"
                  label="Apports personnel Année 1"
                  name="apportp1"
                  autoFocus
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
                  label="Apports personnel Année 2"
                  id="apportp2"
                  name="apportp2"
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
                  label="Apports personnel Année 3"
                  id="apportp3"
                  name="apportp3"
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
                  id="apportp0"
                  label="Apports personnel Année 0"
                  name="apportp0"
                  autoFocus
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
                  id="apportp1"
                  label="Apports personnel Année 1"
                  name="apportp1"
                  autoFocus
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
                  label="Apports personnel Année 2"
                  id="apportp2"
                  name="apportp2"
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
                  label="Apports personnel Année 3"
                  id="apportp3"
                  name="apportp3"
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
                  id="apporta0"
                  label="Apports des associés Année 0"
                  name="apporta0"
                  autoFocus
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
                  id="apporta1"
                  label="Apports des associés Année 1"
                  name="apporta1"
                  autoFocus
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
                  label="Apports des associés Année 2"
                  id="apporta2"
                  name="apporta2"
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
                  label="Apports des associés Année 3"
                  id="apporta3"
                  name="apporta3"
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
                  id="emprunt0"
                  label="Emprunts Année 0"
                  name="emprunt0"
                  autoFocus
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
                  id="emprunt1"
                  label="Emprunts Année 1"
                  name="emprunt1"
                  autoFocus
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
                  label="Emprunts Année 2"
                  id="emprunt2"
                  name="emprunt2"
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
                  label="Emprunts Année 3"
                  id="emprunt3"
                  name="emprunt3"
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
                  id="subvention0"
                  label="Subventions Année 0"
                  name="subvention0"
                  autoFocus
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
                  id="subvention1"
                  label="Subventions Année 1"
                  name="subvention1"
                  autoFocus
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
                  label="Subventions Année 2"
                  id="subvention2"
                  name="subvention2"
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
                  label="Subventions Année 3"
                  id="subvention3"
                  name="subvention3"
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
                  id="aides0"
                  label="Aides Année 0"
                  name="aides0"
                  autoFocus
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
                  id="aides1"
                  label="Aides Année 1"
                  name="aides1"
                  autoFocus
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
                  label="Aides Année 2"
                  id="aides2"
                  name="aides2"
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
                  label="Aides Année 3"
                  id="aides3"
                  name="aides3"
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
                  id="autres0"
                  label="Autres Année 0"
                  name="autres0"
                  autoFocus
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
                  id="autres1"
                  label="Autres Année 1"
                  name="autres1"
                  autoFocus
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
                  label="Autres Année 2"
                  id="autres2"
                  name="autres2"
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
                  label="Autres Année 3"
                  id="autres3"
                  name="autres3"
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
                  id="capacite0"
                  label="Capacité d'autofinancement (hors subvention) Année 0"
                  name="capacite0"
                  autoFocus
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
                  id="capacite1"
                  label="Capacité d'autofinancement (hors subvention Année 1"
                  name="capacite1"
                  autoFocus
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
                  label="Capacité d'autofinancement (hors subvention Année 2"
                  id="capacite2"
                  name="capacite2"
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
                  label="Capacité d'autofinancement (hors subvention Année 3"
                  id="capacite3"
                  name="capacite3"
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

export default Chapitrehuit
