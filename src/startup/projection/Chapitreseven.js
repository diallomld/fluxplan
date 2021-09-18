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

const Chapitresevenp = () => {
 
  const editObject = {
    taux: 0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

 


  //pour le Ca
  const [CA, setCA] = React.useState(0);
  const [mnta2, setmntA2] = React.useState(0);
  const [mnta3, setmntA3] = React.useState(0);

  // Achat marchandise
  const [A, setA] = React.useState(0)
  const [A2, setA2] = React.useState(0)
  const [A2, setA2] = React.useState(0)

  // Marge brute
  const [MB, setMB] = React.useState(0)
  const [MB2, setMB2] = React.useState(0)
  const [MB3, setMB3] = React.useState(0)

  // pour charges exploitation
  const [B, setB] = React.useState(0)
  const [B2, setB2] = React.useState(0)
  const [B3, setB3] = React.useState(0)
  const [C, setC] = React.useState(0)
  const [C2, setC2] = React.useState(0)
  const [C3, setC3] = React.useState(0)
  const [D, setD] = React.useState(0)
  const [D2, setD2] = React.useState(0)
  const [D3, setD3] = React.useState(0)




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
    setEditTable(prevision[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPrevision = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .doc(idDoc)
      .set(
        {
          taux: editTable.taux,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          taux:0
        })
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePrevision = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
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
      .collection("compte-resultat-previsionnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = []
        let tmnta2 = 0
        let tmnta3 = 0
        let a2 = 0
        let a3 = 0
        let mb1 = 0
        let mb2 = 0
        let mb3 = 0
        let b2 = 0
        let b3 = 0
        let c2 = 0
        let c3 = 0
        let d2 = 0
        let d3 = 0
        data.forEach((doc) => {
          dat.push({
            taux: doc.data().taux,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          
          //le chiffre d'affaires
          tmnta2 = CA+ CA*(doc.data().taux/100)
          setmntA2(tmnta2)
          tmnta3 = tmnta2+ tmnta2*(doc.data().taux/100)
          setmntA3(tmnta3)
          
          /**
           * POUR ACHAT MARCHANDISE/MATIERE PREMIERE
           */

           a2 = A+ A*(doc.data().taux/100)
           setA2(a2)
           a3 = a2+ a2*(doc.data().taux/100)
           setA3(a3)

          /*Marge Brute (MB) */
          mb1 = CA-A
          mb2 = mb1 + mb1*(doc.data().taux/100)
          mb3 = mb2 + mb2*(doc.data().taux/100)

          setMB(mb1)
          setMB2(mb2)
          setMB3(mb3)

          /*pour charge exploitation */

          b2 = B + B*(doc.data().taux/100)
          setB2(b2)
          b3 = b2+ b2*(doc.data().taux/100)
          setB3(b3)
          c2 = C + C*(doc.data().taux/100)
          setC2(c2)
          c3 = c2+ c2*(doc.data().taux/100)
          setC3(c3)
          d2 = D + D*(doc.data().taux/100)
          setD2(d2)
          d3 = d2+ d2*(doc.data().taux/100)
          setD3(d3)



        })

        setPrevision(dat);
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
      .collection("compte-resultat-previsionnel")
      .add({
        taux: editTable.taux,
        userId: userId,
      })
      .then(() => {
        setEditTable({
          taux:0
        })
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

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
      })
      .catch((err) => console.log(err));
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
        let totaltransport = 0
        let totalservice = 0
        data.forEach((doc) => {
          
          totalachat = (Number(doc.data().mcmnt)*Number(doc.data().mcnbre))+(Number(doc.data().carburantmnt)*Number(doc.data().carburantnbre))+(Number(doc.data().pemnt)*Number(doc.data().penbre))+(Number(doc.data().fournituremnt)*Number(doc.data().fourniturenbre))+(Number(doc.data().eaumnt)*Number(doc.data().eaunbre))+(Number(doc.data().electricitemnt)*Number(doc.data().electricitenbre))+(Number(doc.data().pmomnt)*Number(doc.data().pmonbre))+(Number(doc.data().epsmnt)*Number(doc.data().epsnbre))+(Number(doc.data().tmemnt)*Number(doc.data().tmenbre))+(Number(doc.data().emballagemnt)*Number(doc.data().emballagenbre))
          totaltransport = (Number(doc.data().tavmnt)*Number(doc.data().tavnbre))+(Number(doc.data().tpmnt)*Number(doc.data().tpnbre))+(Number(doc.data().tplismnt)*Number(doc.data().tplisnbre))+(Number(doc.data().voyagemnt)*Number(doc.data().voyagenbre))+(Number(doc.data().tamnt)*Number(doc.data().tanbre))
          totalservice = (Number(doc.data().traitancemnt)*Number(doc.data().traitancenbre))+(Number(doc.data().locationmnt)*Number(doc.data().locationnbre))+(Number(doc.data().entretienmnt)*Number(doc.data().entretiennbre))+(Number(doc.data().maintenancemnt)*Number(doc.data().maintenancenbre))+(Number(doc.data().assurancemnt)*Number(doc.data().assurancenbre))+(Number(doc.data().etudemnt)*Number(doc.data().etudenbre))+(Number(doc.data().docmnt)*Number(doc.data().docnbre))+(Number(doc.data().pubmnt)*Number(doc.data().pubnbre))+(Number(doc.data().telmnt)*Number(doc.data().telnbre))+(Number(doc.data().internetmnt)*Number(doc.data().internetnbre))+(Number(doc.data().fraismnt)*Number(doc.data().fraisnbre))+(Number(doc.data().commissionmnt)*Number(doc.data().commissionnbre))+(Number(doc.data().honorairemnt)*Number(doc.data().honorairenbre))+(Number(doc.data().formationmnt)*Number(doc.data().formationnbre))+(Number(doc.data().redevancemnt)*Number(doc.data().redevancenbre))+(Number(doc.data().receptionmnt)*Number(doc.data().receptionnbre))+(Number(doc.data().missionmnt)*Number(doc.data().missionnbre))
          setB(totalachat)
          setC(totaltransport)
          setD(totalservice)

        });
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getChargeExploit()
    getTotalCa()
    getDate()
    //setTotal(0)
  }, [toggle])
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
      {prevision.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:20}}> Comptes de résultat prévisionnels sur 3 ans</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ minWidth: 300}}>Libelle</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Taux variation</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Taux variation</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 150 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {prevision.map((item, index) => {
                      return (
                        <>
                        <TableRow>
                            <TableCell><b>Chiffre d'affaires (CA)</b></TableCell>
                            <TableCell>{CA}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{mnta2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{mnta3}</TableCell>
                            <TableCell>{Number(mnta2+mnta3)}</TableCell>
                            <TableCell rowSpan="20">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deletePrevision(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats marchandises/matières premières</TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{Number(0)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Marge Brute (MB)</b></TableCell>
                            <TableCell>{MB}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{MB2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{MB3}</TableCell>
                            <TableCell>{Number(MB3+MB2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres achats</TableCell>
                            <TableCell>{B}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{B2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{B3}</TableCell>
                            <TableCell>{Number(B2+B3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transport</TableCell>
                            <TableCell>{C}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{C2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{C3}</TableCell>
                            <TableCell>{Number(C2+C3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Services extérieurs</TableCell>
                            <TableCell>{D}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{D2}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{D3}</TableCell>
                            <TableCell>{Number(D2+D3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôts et taxes </TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{item.taux}</TableCell>
                            <TableCell>{0}</TableCell>
                            <TableCell>{Number(0)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Valeur Ajoutée (VA)</b></TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{Number(item.ca2)+Number(item.autreproduit2)}</TableCell>
                            <TableCell>{Number(item.ca3)+Number(item.autreproduit3)}</TableCell>
                            <TableCell>{totalProduit}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats marchandises & Matières premières</TableCell>
                            <TableCell>{item.am1}</TableCell>
                            <TableCell>{item.am2}</TableCell>
                            <TableCell>{item.am3}</TableCell>
                            <TableCell>{Number(item.am1)+Number(item.am2)+Number(item.am3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Achats produits accessoires</TableCell>
                            <TableCell>{item.ap1}</TableCell>
                            <TableCell>{item.ap2}</TableCell>
                            <TableCell>{item.ap3}</TableCell>
                            <TableCell>{Number(item.ap1)+Number(item.ap2)+Number(item.ap3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>MARGE BRUTE</b></TableCell>
                            <TableCell>{totalBrut1}</TableCell>
                            <TableCell>{totalBrut2}</TableCell>
                            <TableCell>{totalBrut3}</TableCell>
                            <TableCell>{totalBrut}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres achats</TableCell>
                            <TableCell>{item.autreAchat1}</TableCell>
                            <TableCell>{item.autreAchat2}</TableCell>
                            <TableCell>{item.autreAchat3}</TableCell>
                            <TableCell>{Number(item.autreAchat1)+Number(item.autreAchat2)+Number(item.autreAchat3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transport</TableCell>
                            <TableCell>{item.transport1}</TableCell>
                            <TableCell>{item.transport2}</TableCell>
                            <TableCell>{item.transport3}</TableCell>
                            <TableCell>{Number(item.transport1)+Number(item.transport2)+Number(item.transport3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Services extérieurs</TableCell>
                            <TableCell>{item.se1}</TableCell>
                            <TableCell>{item.se2}</TableCell>
                            <TableCell>{item.se3}</TableCell>
                            <TableCell>{Number(item.se1)+Number(item.se2)+Number(item.se3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>Total Consommations Intermédiaires</b></TableCell>
                            <TableCell>{totalConsomable1}</TableCell>
                            <TableCell>{totalConsomable2}</TableCell>
                            <TableCell>{totalConsomable3}</TableCell>
                            <TableCell>{totalConsomable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>VALEUR AJOUTEE (VA)</b></TableCell>
                            <TableCell>{Number(totalBrut1)-Number(totalConsomable1)}</TableCell>
                            <TableCell>{Number(totalBrut2)-Number(totalConsomable2)}</TableCell>
                            <TableCell>{Number(totalBrut3)-Number(totalConsomable3)}</TableCell>
                            <TableCell>{totalBrut-totalConsomable}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôts et taxes</TableCell>
                            <TableCell>{item.impot1}</TableCell>
                            <TableCell>{item.impot2}</TableCell>
                            <TableCell>{item.impot3}</TableCell>
                            <TableCell>{totalImpot}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Frais de personnel</TableCell>
                            <TableCell>{item.fraisp1}</TableCell>
                            <TableCell>{item.fraisp2}</TableCell>
                            <TableCell>{item.fraisp3}</TableCell>
                            <TableCell>{totalFrais}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>EXCEDENT BRUT D'EXPLOITATION (EBE)</b></TableCell>
                            <TableCell>{totalExedent1}</TableCell>
                            <TableCell>{totalExedent2}</TableCell>
                            <TableCell>{totalExedent3}</TableCell>
                            <TableCell>{totalExedent}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Reprise sur Provisions</TableCell>
                            <TableCell>{item.reprise1}</TableCell>
                            <TableCell>{item.reprise2}</TableCell>
                            <TableCell>{item.reprise3}</TableCell>
                            <TableCell>{totalReprise}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dotation aux Amortissements</TableCell>
                            <TableCell>{item.dotation1}</TableCell>
                            <TableCell>{item.dotation2}</TableCell>
                            <TableCell>{item.dotation3}</TableCell>
                            <TableCell>{totalDotation}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT D'EXPLOITATION</b></TableCell>
                            <TableCell>{totalExploit1}</TableCell>
                            <TableCell>{totalExploit2}</TableCell>
                            <TableCell>{totalExploit3}</TableCell>
                            <TableCell>{totalExploit}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Produits Financiers</TableCell>
                            <TableCell>{item.p1}</TableCell>
                            <TableCell>{item.p2}</TableCell>
                            <TableCell>{item.p3}</TableCell>
                            <TableCell>{totalP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Frais Financiers</TableCell>
                            <TableCell>{item.frais1}</TableCell>
                            <TableCell>{item.frais2}</TableCell>
                            <TableCell>{item.frais3}</TableCell>
                            <TableCell>{totalFraisf}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT FINANCIER</b></TableCell>
                            <TableCell>{totalFinancier1}</TableCell>
                            <TableCell>{totalFinancier2}</TableCell>
                            <TableCell>{totalFinancier3}</TableCell>
                            <TableCell>{totalFinancier}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Produits HAO</TableCell>
                            <TableCell>{item.phao1}</TableCell>
                            <TableCell>{item.phao2}</TableCell>
                            <TableCell>{item.phao3}</TableCell>
                            <TableCell>{Number(item.phao1)+Number(item.phao2)+Number(item.phao3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Charges HAO</TableCell>
                            <TableCell>{item.chargehao1}</TableCell>
                            <TableCell>{item.chargehao2}</TableCell>
                            <TableCell>{item.chargehao3}</TableCell>
                            <TableCell>{Number(item.chargehao1)+Number(item.chargehao2)+Number(item.chargehao3)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>RESULTAT HORS ACTIVITES ORDINAIRES</b></TableCell>
                            <TableCell>{(Number(item.phao1))-(Number(item.chargehao1))}</TableCell>
                            <TableCell>{(Number(item.phao2))-(Number(item.chargehao2))}</TableCell>
                            <TableCell>{(Number(item.phao3))-(Number(item.chargehao3))}</TableCell>
                            <TableCell>{totalOrdinaire}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b> RESULTAT BRUT</b></TableCell>
                            <TableCell>{totalResultatBrut1}</TableCell>
                            <TableCell>{totalResultatBrut2}</TableCell>
                            <TableCell>{totalResultatBrut3}</TableCell>
                            <TableCell>{totalResultatBrut}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impôt BIC</TableCell>
                            <TableCell>{item.impot1}</TableCell>
                            <TableCell>{item.impot2}</TableCell>
                            <TableCell>{item.impot3}</TableCell>
                            <TableCell>{totalBic}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b> RESULTAT NET</b></TableCell>
                            <TableCell>{totalResultatBrut1-item.impot1}</TableCell>
                            <TableCell>{totalResultatBrut2-item.impot2}</TableCell>
                            <TableCell>{totalResultatBrut3-item.impot3}</TableCell>
                            <TableCell>{totalResultatBrut-totalBic}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>CASH Flow</b></TableCell>
                            <TableCell>{(totalResultatBrut1-item.impot1)+item.dotation1}</TableCell>
                            <TableCell>{(totalResultatBrut2-item.impot2)+item.dotation2}</TableCell>
                            <TableCell>{(totalResultatBrut3-item.impot3)+item.dotation3}</TableCell>
                            <TableCell>{(totalResultatBrut-totalBic)+totalDotation}</TableCell>
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
                    <StyledTableCell style={{ maxWidth: 400}}>Libelle</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 1</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 2</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Annee 3</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 200 }}>Total</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 70 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow>
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>.....elements.......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
                          <TableCell>......500000......</TableCell>
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
              onSubmit={editPrevision}
            >
              <div className="input">
                
                <TextField
                  variant="outlined"
                  margin="normal"
                  autoFocus
                  fullWidth
                  id="taux"
                  label="Taux de variation en %"
                  name="taux"
                  type="number"
                  value={editTable.taux}
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
                    id="taux"
                    label="Taux de variation en %"
                    name="taux"
                    type="number"
                    value={editTable.taux}
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
    </div>
  );
};

export default Chapitresevenp
