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

const ChapitreOneFinancement = () => {
 
  const { userId } = useGlobalContext();
  const [toggle, setToggle] = React.useState(false);

  const [totalIcorp, settotalIcorp] = React.useState(0)
  const [totalIincpor, setotalIincpor] = React.useState(0)
  const [totalIf, setotalIf] = React.useState(0)
  const [totalStock, setotalStock] = React.useState(0)
  const [totalCharge, setotalCharge] = React.useState(0)

  const classes = useStyles();

  const theme = useTheme();

 

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
  }, [toggle])
  return (
    <div className="chapitretwo">
     {toggle==true ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Immobilisations financières </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:300}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Montant</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          
                              <TableCell><b>Investissements</b> </TableCell>
                              <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Immobilisations incorporelles </TableCell>
                            <TableCell>{totalIincpor}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Immobilisations corporelles  </TableCell>
                            <TableCell>{totalIcorp}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Immobilisations financières </TableCell>
                            <TableCell>{totalIf}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell><b>Total Investissements</b> </TableCell>
                          <TableCell>{totalIincpor+totalIcorp+totalIf}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell> </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell><b>Besoin en Fonds de Roulement (BFR)</b> </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Stock de marchandises/matières première de démarrage ou renforcement </TableCell>
                          <TableCell>{totalStock}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>Charges d’exploitation de démarrage </TableCell>
                          <TableCell>{totalCharge}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Total BFR</b> </TableCell>
                            <TableCell>{totalStock+totalCharge}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Coût total du projet</b> </TableCell>
                            <TableCell>{totalIincpor+totalIcorp+totalIf+totalStock+totalCharge}</TableCell>
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
                    <StyledTableCell style={{minWidth:300}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:150}}>Montant</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                    </TableRow>
                    
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default ChapitreOneFinancement
