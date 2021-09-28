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

const Chapitreneuf = () => {
  
  const { userId } = useGlobalContext();
  const [toggle, setToggle] = React.useState(false);
  const [load, setLoad] = React.useState(false);

  const [MCV, setMCV] = React.useState(0);
  const [MCV2, setMCV2] = React.useState(0);
  const [MCV3, setMCV3] = React.useState(0);

  const [TMCV, setTMCV] = React.useState(0);
  const [TMCV2, setTMCV2] = React.useState(0);
  const [TMCV3, setTMCV3] = React.useState(0);
  
  const [SR, setSR] = React.useState(0);
  const [SR2, setSR2] = React.useState(0);
  const [SR3, setSR3] = React.useState(0);

   //pour le Ca
   const [CA, setCA] = React.useState(0);
   const [CA2, setCA2] = React.useState(0);
   const [CA3, setCA3] = React.useState(0);
 
   // Achat marchandise
   const [CV, setCV] = React.useState(0)
   const [CV2, setCV2] = React.useState(0)
   const [CV3, setCV3] = React.useState(0)
   //autre achat
   const [CF, setCF] = React.useState(0)
  const [CF2, setCF2] = React.useState(0)
  const [CF3, setCF3] = React.useState(0)


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const getDate = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {

        let tmnta2 = 0
        let tmnta3 = 0
        let a2 = 0
        let a3 = 0
        let b2 = 0
        let b3 = 0
        let a =0
        let tmvc = 0
        let tmvc2 = 0
        let tmvc3 = 0
        let ttmvc = 0
        let ttmvc2 = 0
        let ttmvc3 = 0
        let tsr = 0
        let tsr2 = 0
        let tsr3 = 0
        let ca = 0

        data.forEach((doc) => {

          //le chiffre d'affaires
          //ca = CA
          tmnta2 = CA+ CA*(doc.data().taux/100)
          setCA2(tmnta2)
          tmnta3 = tmnta2+ tmnta2*(doc.data().taux/100)
          setCA3(tmnta3)
          
          /**
           * POUR ACHAT MARCHANDISE/MATIERE PREMIERE
           */
           a = Number(doc.data().marchandise)
           a2 = a+ a*(doc.data().taux/100)
           a3 = a2+ a2*(doc.data().taux/100)
           setCV(a)
           setCV2(a2)
           setCV3(a3)
          

          /*autre achat */

          b2 = CF + CF*(doc.data().taux/100)
          setCF2(b2)
          b3 = b2+ b2*(doc.data().taux/100)
          setCF3(b3)

          tmvc = CA-a
          tmvc2 = tmnta2-a2
          tmvc3 = tmnta3-a3

          
          setMCV(tmvc)
          setMCV2(tmvc2)
          setMCV3(tmvc3)
          
          
          ttmvc = Math.round(tmvc/CA)
          ttmvc2 = Math.round(tmvc2/tmnta2)
          ttmvc3 = Math.round(tmvc3/tmnta3)

          setTMCV(ttmvc)
          setTMCV2(ttmvc2)
          setTMCV3(ttmvc3)

          if(ttmvc==0){
            tsr = 0
          }else{
            tsr= Math.round(CF/ttmvc)
          }
          if (ttmvc2==0) {
            tsr2 = 0
          } else {
            tsr2 = Math.round(b2/ttmvc2)
          }
          if (ttmvc3==0) {
            tsr2 = 0
          } else {
            tsr3 = Math.round(b3/ttmvc3)
          }

          setSR(tsr)
          setSR2(tsr2)
          setSR3(tsr3)
          
        })
        setLoad(false)
        })
        .catch((err) => console.log(err));
      setToggle(!toggle);
  };
  const getTotalCa = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let tabCa = [];
        let tCa = 0
        data.forEach((doc) => {
          let som = 0;

          som = Number(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))*Number(doc.data().prix)
         
          tabCa.push(som)
        });
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setCA(tCa)
        setLoad(false)
      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };

  const getChargeExploit = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("charge-exploitation")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let totalachat = 0
        data.forEach((doc) => {
          
          totalachat = (Number(doc.data().mcmnt)*Number(doc.data().mcnbre))+(Number(doc.data().carburantmnt)*Number(doc.data().carburantnbre))+(Number(doc.data().pemnt)*Number(doc.data().penbre))+(Number(doc.data().fournituremnt)*Number(doc.data().fourniturenbre))+(Number(doc.data().eaumnt)*Number(doc.data().eaunbre))+(Number(doc.data().electricitemnt)*Number(doc.data().electricitenbre))+(Number(doc.data().pmomnt)*Number(doc.data().pmonbre))+(Number(doc.data().epsmnt)*Number(doc.data().epsnbre))+(Number(doc.data().tmemnt)*Number(doc.data().tmenbre))+(Number(doc.data().emballagemnt)*Number(doc.data().emballagenbre))
          
          setCF(totalachat)

        });
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate()
    getTotalCa()
    getChargeExploit()
    //setTotal(0)
  }, [toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Seuil de rentabilité</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>DESIGNATION</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 2</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 150 }}>Année 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 100 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Chiffre d'affaires (CA)</b></TableCell>
                                <TableCell>{CA}</TableCell>
                                <TableCell>{CA2}</TableCell>
                                <TableCell>{CA3}</TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Charges variables (CV)</TableCell>
                                <TableCell>{CV}</TableCell>
                                <TableCell>{CV2}</TableCell>
                                <TableCell>{CV3}</TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Marge sur Coût Variable (MCV=CA-CV)</b></TableCell>
                                <TableCell><b>{MCV}</b></TableCell>
                                <TableCell><b>{MCV2}</b></TableCell>
                                <TableCell><b>{MCV3}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Taux de Marge sur Coût Variable (TMCV=MCV/CA)</b></TableCell>
                                <TableCell><b>{Math.round(TMCV)}</b></TableCell>
                                <TableCell><b>{Math.round(TMCV2)}</b></TableCell>
                                <TableCell><b>{Math.round(TMCV3)}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell>Charges fixes (CF)</TableCell>
                                <TableCell>{CF}</TableCell>
                                <TableCell>{CF2}</TableCell>
                                <TableCell>{CF3}</TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Seuil de rentabilité (SR=CF/TMCV)</b></TableCell>
                                <TableCell><b>{Math.round(SR)/100}</b></TableCell>
                                <TableCell><b>{Math.round(SR2)/100}</b></TableCell>
                                <TableCell><b>{Math.round(SR3)/100}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Point mort en quantité (SR/prix moyen)</b></TableCell>
                                <TableCell><b>{Math.round((SR/387.5)*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round((SR2/387.5)*100)/100}</b></TableCell>
                                <TableCell><b>{Math.round((SR3/387.5)*100)/100}</b></TableCell>
                            </TableRow>
                            <TableRow hover role="checkbox" tabIndex={-1}>
                            
                                <TableCell><b>Point mort en nombre de jours de CA (SR/(CA/360)</b></TableCell>
                                <TableCell><b>{Math.round(SR/CA)/360}</b></TableCell>
                                <TableCell><b>{Math.round(SR2/CA2)/360}</b></TableCell>
                                <TableCell><b>{Math.round(SR3/CA3)/360}</b></TableCell>
                            </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
        </div>
    </div>
  );
};

export default Chapitreneuf
