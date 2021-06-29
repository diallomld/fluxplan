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

const ChapitreSixMoyen = () => {
  const editObject = {
    mcnbre:0,
    mcmnt:0,
    carburantnbre:0,
    carburantmnt:0,
    penbre:0,
    pemnt:0,
    fourniturenbre:0,
    fournituremnt:0,
    eaunbre:0,
    eaumnt:0,
    electricitenbre:0,
    electricitemnt:0,
    pmonbre:0,
    pmomnt:0,
    epsnbre:0,
    epsmnt:0,
    tmenbre:0,
    tmemnt:0,
    emballagenbre:0,
    emballagemnt:0,
    tavnbre:0,
    tavmnt:0,
    tpnbre:0,
    tpmnt:0,
    tplisnbre:0,
    tplismnt:0,
    voyagenbre:0,
    voyagemnt:0,
    tanbre:0,
    tamnt:0,
    traitancenbre:0,
    traitancemnt:0,
    locationnbre:0,
    locationmnt:0,
    entretiennbre:0,
    entretienmnt:0,
    maintenancenbre:0,
    maintenancemnt:0,
    assurancenbre:0,
    assurancemnt:0,
    etudenbre:0,
    etudemnt:0,
    docnbre:0,
    docmnt:0,
    pubnbre:0,
    pubmnt:0,
    telnbre:0,
    telmnt:0,
    internetnbre:0,
    internetmnt:0,
    fraisnbre:0,
    fraismnt:0,
    commissionnbre:0,
    commissionmnt:0,
    honorairenbre:0,
    honorairemnt:0,
    formationnbre:0,
    formationmnt:0,
    redevancenbre:0,
    redevancemnt:0,
    receptionnbre:0,
    receptionmnt:0,
    missionnbre:0,
    missionmnt:0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [charge, setCharge] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const [tachat, setAchat] = React.useState(0)
  const [ttransport, setTransport] = React.useState(0)
  const [tservice, setService] = React.useState(0)

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  const initForm = () => {
    setEditTable({
        mcnbre:0,
        mcmnt:0,
        carburantnbre:0,
        carburantmnt:0,
        penbre:0,
        pemnt:0,
        fourniturenbre:0,
        fournituremnt:0,
        eaunbre:0,
        eaumnt:0,
        electricitenbre:0,
        electricitemnt:0,
        pmonbre:0,
        pmomnt:0,
        epsnbre:0,
        epsmnt:0,
        tmenbre:0,
        tmemnt:0,
        tavnbre:0,
        tavmnt:0,
        tpnbre:0,
        tpmnt:0,
        tplisnbre:0,
        tplismnt:0,
        voyagenbre:0,
        voyagemnt:0,
        tanbre:0,
        tamnt:0,
        traitancenbre:0,
        traitancemnt:0,
        locationnbre:0,
        locationmnt:0,
        entretiennbre:0,
        entretienmnt:0,
        maintenancenbre:0,
        maintenancemnt:0,
        assurancenbre:0,
        assurancemnt:0,
        etudenbre:0,
        etudemnt:0,
        docnbre:0,
        docmnt:0,
        pubnbre:0,
        pubmnt:0,
        telnbre:0,
        telmnt:0,
        internetnbre:0,
        internetmnt:0,
        fraisnbre:0,
        fraismnt:0,
        commissionnbre:0,
        commissionmnt:0,
        honorairenbre:0,
        honorairemnt:0,
        formationnbre:0,
        formationmnt:0,
        redevancenbre:0,
        redevancemnt:0,
        receptionnbre:0,
        receptionmnt:0,
        missionnbre:0,
        missionmnt:0,
    })
  };
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setEditTable({
      ...editTable,
      [name]: value,
    });
  };
  const handleModif = (id,index) => {
    setEditTable(charge[index])
    //console.log(editTable);
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editCharge = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("charge-exploitation")
      .doc(idDoc)
      .set(
        {
            mcnbre:editTable.mcnbre,
            mcmnt:editTable.mcmnt,
            carburantnbre:editTable.carburantnbre,
            carburantmnt:editTable.carburantmnt,
            penbre:editTable.penbre,
            pemnt:editTable.pemnt,
            fourniturenbre:editTable.fourniturenbre,
            fournituremnt:editTable.fournituremnt,
            eaunbre:editTable.eaunbre,
            eaumnt:editTable.eaumnt,
            electricitenbre:editTable.electricitenbre,
            electricitemnt:editTable.electricitemnt,
            pmonbre:editTable.pmonbre,
            pmomnt:editTable.pmomnt,
            epsnbre:editTable.epsnbre,
            epsmnt:editTable.epsmnt,
            tmenbre:editTable.tmenbre,
            tmemnt:editTable.tmemnt,
            emballagenbre:editTable.emballagenbre,
            emballagemnt:editTable.emballagemnt,
            tavnbre:editTable.tavnbre,
            tavmnt:editTable.tavmnt,
            tpnbre:editTable.tpnbre,
            tpmnt:editTable.tpmnt,
            tplisnbre:editTable.tplisnbre,
            tplismnt:editTable.tplismnt,
            voyagenbre:editTable.voyagenbre,
            voyagemnt:editTable.voyagemnt,
            tanbre:editTable.tanbre,
            tamnt:editTable.tamnt,
            traitancenbre:editTable.traitancenbre,
            traitancemnt:editTable.traitancemnt,
            locationnbre:editTable.locationnbre,
            locationmnt:editTable.locationmnt,
            entretiennbre:editTable.entretiennbre,
            entretienmnt:editTable.entretienmnt,
            maintenancenbre:editTable.maintenancenbre,
            maintenancemnt:editTable.maintenancemnt,
            assurancenbre:editTable.assurancenbre,
            assurancemnt:editTable.assurancemnt,
            etudenbre:editTable.etudenbre,
            etudemnt:editTable.etudemnt,
            docnbre:editTable.docnbre,
            docmnt:editTable.docmnt,
            pubnbre:editTable.pubnbre,
            pubmnt:editTable.pubmnt,
            telnbre:editTable.telnbre,
            telmnt:editTable.telmnt,
            internetnbre:editTable.internetnbre,
            internetmnt:editTable.internetmnt,
            fraisnbre:editTable.fraisnbre,
            fraismnt:editTable.fraismnt,
            commissionnbre:editTable.commissionnbre,
            commissionmnt:editTable.commissionmnt,
            honorairenbre:editTable.honorairenbre,
            honorairemnt:editTable.honorairemnt,
            formationnbre:editTable.formationnbre,
            formationmnt:editTable.formationmnt,
            redevancenbre:editTable.redevancenbre,
            redevancemnt:editTable.redevancemnt,
            receptionnbre:editTable.receptionnbre,
            receptionmnt:editTable.receptionmnt,
            missionnbre:editTable.missionnbre,
            missionmnt:editTable.missionmnt,
            userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit" + data);
        //setLoad(false)
        initForm()
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteCharge = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("charge-exploitation")
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
      .collection("charge-exploitation")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        let totalachat = 0
        let totaltransport = 0
        let totalservice = 0
        data.forEach((doc) => {
          dat.push({
            mcnbre:doc.data().mcnbre,
            mcmnt:doc.data().mcmnt,
            carburantnbre:doc.data().carburantnbre,
            carburantmnt:doc.data().carburantmnt,
            penbre:doc.data().penbre,
            pemnt:doc.data().pemnt,
            fourniturenbre:doc.data().fourniturenbre,
            fournituremnt:doc.data().fournituremnt,
            eaunbre:doc.data().eaunbre,
            eaumnt:doc.data().eaumnt,
            electricitenbre:doc.data().electricitenbre,
            electricitemnt:doc.data().electricitemnt,
            pmonbre:doc.data().pmonbre,
            pmomnt:doc.data().pmomnt,
            epsnbre:doc.data().epsnbre,
            epsmnt:doc.data().epsmnt,
            tmenbre:doc.data().tmenbre,
            tmemnt:doc.data().tmemnt,
            emballagenbre:doc.data().emballagenbre,
            emballagemnt:doc.data().emballagemnt,
            tavnbre:doc.data().tavnbre,
            tavmnt:doc.data().tavmnt,
            tpnbre:doc.data().tpnbre,
            tpmnt:doc.data().tpmnt,
            tplisnbre:doc.data().tplisnbre,
            tplismnt:doc.data().tplismnt,
            voyagenbre:doc.data().voyagenbre,
            voyagemnt:doc.data().voyagemnt,
            tanbre:doc.data().tanbre,
            tamnt:doc.data().tamnt,
            traitancenbre:doc.data().traitancenbre,
            traitancemnt:doc.data().traitancemnt,
            locationnbre:doc.data().locationnbre,
            locationmnt:doc.data().locationmnt,
            entretiennbre:doc.data().entretiennbre,
            entretienmnt:doc.data().entretienmnt,
            maintenancenbre:doc.data().maintenancenbre,
            maintenancemnt:doc.data().maintenancemnt,
            assurancenbre:doc.data().assurancenbre,
            assurancemnt:doc.data().assurancemnt,
            etudenbre:doc.data().etudenbre,
            etudemnt:doc.data().etudemnt,
            docnbre:doc.data().docnbre,
            docmnt:doc.data().docmnt,
            pubnbre:doc.data().pubnbre,
            pubmnt:doc.data().pubmnt,
            telnbre:doc.data().telnbre,
            telmnt:doc.data().telmnt,
            internetnbre:doc.data().internetnbre,
            internetmnt:doc.data().internetmnt,
            fraisnbre:doc.data().fraisnbre,
            fraismnt:doc.data().fraismnt,
            commissionnbre:doc.data().commissionnbre,
            commissionmnt:doc.data().commissionmnt,
            honorairenbre:doc.data().honorairenbre,
            honorairemnt:doc.data().honorairemnt,
            formationnbre:doc.data().formationnbre,
            formationmnt:doc.data().formationmnt,
            redevancenbre:doc.data().redevancenbre,
            redevancemnt:doc.data().redevancemnt,
            receptionnbre:doc.data().receptionnbre,
            receptionmnt:doc.data().receptionmnt,
            missionnbre:doc.data().missionnbre,
            missionmnt:doc.data().missionmnt,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          
          totalachat = (Number(doc.data().mcmnt)*Number(doc.data().mcnbre))+(Number(doc.data().carburantmnt)*Number(doc.data().carburantnbre))+(Number(doc.data().pemnt)*Number(doc.data().penbre))+(Number(doc.data().fournituremnt)*Number(doc.data().fourniturenbre))+(Number(doc.data().eaumnt)*Number(doc.data().eaunbre))+(Number(doc.data().electricitemnt)*Number(doc.data().electricitenbre))+(Number(doc.data().pmomnt)*Number(doc.data().pmonbre))+(Number(doc.data().epsmnt)*Number(doc.data().epsnbre))+(Number(doc.data().tmemnt)*Number(doc.data().tmenbre))+(Number(doc.data().emballagemnt)*Number(doc.data().emballagenbre))
          totaltransport = (Number(doc.data().tavmnt)*Number(doc.data().tavnbre))+(Number(doc.data().tpmnt)*Number(doc.data().tpnbre))+(Number(doc.data().tplismnt)*Number(doc.data().tplisnbre))+(Number(doc.data().voyagemnt)*Number(doc.data().voyagenbre))+(Number(doc.data().tamnt)*Number(doc.data().tanbre))
          totalservice = (Number(doc.data().traitancemnt)*Number(doc.data().traitancenbre))+(Number(doc.data().locationmnt)*Number(doc.data().locationnbre))+(Number(doc.data().entretienmnt)*Number(doc.data().entretiennbre))+(Number(doc.data().maintenancemnt)*Number(doc.data().maintenancenbre))+(Number(doc.data().assurancemnt)*Number(doc.data().assurancenbre))+(Number(doc.data().etudemnt)*Number(doc.data().etudenbre))+(Number(doc.data().docmnt)*Number(doc.data().docnbre))+(Number(doc.data().pubmnt)*Number(doc.data().pubnbre))+(Number(doc.data().telmnt)*Number(doc.data().telnbre))+(Number(doc.data().internetmnt)*Number(doc.data().internetnbre))+(Number(doc.data().fraismnt)*Number(doc.data().fraisnbre))+(Number(doc.data().commissionmnt)*Number(doc.data().commissionnbre))+(Number(doc.data().honorairemnt)*Number(doc.data().honorairenbre))+(Number(doc.data().formationmnt)*Number(doc.data().formationnbre))+(Number(doc.data().redevancemnt)*Number(doc.data().redevancenbre))+(Number(doc.data().receptionmnt)*Number(doc.data().receptionnbre))+(Number(doc.data().missionmnt)*Number(doc.data().missionnbre))
          setAchat(totalachat)
          setService(totalservice)
          setTransport(totaltransport)

        });
        setCharge(dat);
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
      .collection("charge-exploitation")
      .add({
            mcnbre:editTable.mcnbre,
            mcmnt:editTable.mcmnt,
            carburantnbre:editTable.carburantnbre,
            carburantmnt:editTable.carburantmnt,
            penbre:editTable.penbre,
            pemnt:editTable.pemnt,
            fourniturenbre:editTable.fourniturenbre,
            fournituremnt:editTable.fournituremnt,
            eaunbre:editTable.eaunbre,
            eaumnt:editTable.eaumnt,
            electricitenbre:editTable.electricitenbre,
            electricitemnt:editTable.electricitemnt,
            pmonbre:editTable.pmonbre,
            pmomnt:editTable.pmomnt,
            epsnbre:editTable.epsnbre,
            epsmnt:editTable.epsmnt,
            tmenbre:editTable.tmenbre,
            tmemnt:editTable.tmemnt,
            emballagenbre:editTable.emballagenbre,
            emballagemnt:editTable.emballagemnt,
            tavnbre:editTable.tavnbre,
            tavmnt:editTable.tavmnt,
            tpnbre:editTable.tpnbre,
            tpmnt:editTable.tpmnt,
            tplisnbre:editTable.tplisnbre,
            tplismnt:editTable.tplismnt,
            voyagenbre:editTable.voyagenbre,
            voyagemnt:editTable.voyagemnt,
            tanbre:editTable.tanbre,
            tamnt:editTable.tamnt,
            traitancenbre:editTable.traitancenbre,
            traitancemnt:editTable.traitancemnt,
            locationnbre:editTable.locationnbre,
            locationmnt:editTable.locationmnt,
            entretiennbre:editTable.entretiennbre,
            entretienmnt:editTable.entretienmnt,
            maintenancenbre:editTable.maintenancenbre,
            maintenancemnt:editTable.maintenancemnt,
            assurancenbre:editTable.assurancenbre,
            assurancemnt:editTable.assurancemnt,
            etudenbre:editTable.etudenbre,
            etudemnt:editTable.etudemnt,
            docnbre:editTable.docnbre,
            docmnt:editTable.docmnt,
            pubnbre:editTable.pubnbre,
            pubmnt:editTable.pubmnt,
            telnbre:editTable.telnbre,
            telmnt:editTable.telmnt,
            internetnbre:editTable.internetnbre,
            internetmnt:editTable.internetmnt,
            fraisnbre:editTable.fraisnbre,
            fraismnt:editTable.fraismnt,
            commissionnbre:editTable.commissionnbre,
            commissionmnt:editTable.commissionmnt,
            honorairenbre:editTable.honorairenbre,
            honorairemnt:editTable.honorairemnt,
            formationnbre:editTable.formationnbre,
            formationmnt:editTable.formationmnt,
            redevancenbre:editTable.redevancenbre,
            redevancemnt:editTable.redevancemnt,
            receptionnbre:editTable.receptionnbre,
            receptionmnt:editTable.receptionmnt,
            missionnbre:editTable.missionnbre,
            missionmnt:editTable.missionmnt,
            userId: userId,
      })
      .then(() => {
        setEditTable({
            ca:0,
            charges:0,
            resultatNet:0,
            cashFlow:0,
            pointMort:0,
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
      {charge.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Charges d’exploitation </caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{minWidth:200}}>Désignation </StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Nombre mois besoin</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant mensuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant besoin</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant annuel</StyledTableCell>
                    <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {charge.map((item, index) => {
                      return (
                        <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell> <b>Autres achats</b> </TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell><b>{tachat}</b></TableCell>
                              <TableCell></TableCell>
                              <TableCell rowSpan="39">
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deleteCharge(item.docIdd)} />
                                  </div>
                                </div>
                              </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Matières consommables </TableCell>
                            <TableCell>{item.mcnbre}</TableCell>
                            <TableCell>{item.mcmnt}</TableCell>
                            <TableCell>{item.mcnbre*item.mcmnt}</TableCell>
                            <TableCell>{item.mcmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Carburants </TableCell>
                            <TableCell>{item.carburantnbre}</TableCell>
                            <TableCell>{item.carburantmnt}</TableCell>
                            <TableCell>{item.carburantnbre*item.carburantmnt}</TableCell>
                            <TableCell>{item.carburantmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Produits d'entretien </TableCell>
                            <TableCell>{item.entretiennbre}</TableCell>
                            <TableCell>{item.entretienmnt}</TableCell>
                            <TableCell>{item.entretiennbre*item.entretienmnt}</TableCell>
                            <TableCell>{item.entretienmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Fournitures </TableCell>
                            <TableCell>{item.fourniturenbre}</TableCell>
                            <TableCell>{item.fournituremnt}</TableCell>
                            <TableCell>{item.fourniturenbre*item.fournituremnt}</TableCell>
                            <TableCell>{item.fournituremnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Eau </TableCell>
                            <TableCell>{item.eaunbre}</TableCell>
                            <TableCell>{item.eaumnt}</TableCell>
                            <TableCell>{item.eaunbre*item.eaumnt}</TableCell>
                            <TableCell>{item.eaumnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Electricité </TableCell>
                            <TableCell>{item.electricitenbre}</TableCell>
                            <TableCell>{item.electricitemnt}</TableCell>
                            <TableCell>{item.electricitenbre*item.electricitemnt}</TableCell>
                            <TableCell>{item.electricitemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Petit matériel et outillage </TableCell>
                            <TableCell>{item.pmonbre}</TableCell>
                            <TableCell>{item.pmomnt}</TableCell>
                            <TableCell>{item.pmonbre*item.pmomnt}</TableCell>
                            <TableCell>{item.pmomnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Etudes et prestation de services </TableCell>
                            <TableCell>{item.epsnbre}</TableCell>
                            <TableCell>{item.epsmnt}</TableCell>
                            <TableCell>{item.epsnbre*item.epsmnt}</TableCell>
                            <TableCell>{item.epsmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Travaux, matériels et équipements</TableCell>
                            <TableCell>{item.tmenbre}</TableCell>
                            <TableCell>{item.tmemnt}</TableCell>
                            <TableCell>{item.tmenbre*item.tmemnt}</TableCell>
                            <TableCell>{item.tmemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Emballages</TableCell>
                            <TableCell>{item.emballagenbre}</TableCell>
                            <TableCell>{item.emballagemnt}</TableCell>
                            <TableCell>{item.emballagenbre*item.emballagemnt}</TableCell>
                            <TableCell>{item.emballagemnt*12}</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell> <b>Transports</b> </TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell><b>{ttransport}</b></TableCell>
                              <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Transports sur achats/ventes</TableCell>
                            <TableCell>{item.tavnbre}</TableCell>
                            <TableCell>{item.tavmnt}</TableCell>
                            <TableCell>{item.tavnbre*item.tavmnt}</TableCell>
                            <TableCell>{item.tavmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Transports du personnel</TableCell>
                            <TableCell>{item.tpnbre}</TableCell>
                            <TableCell>{item.tpmnt}</TableCell>
                            <TableCell>{item.tpnbre*item.tpmnt}</TableCell>
                            <TableCell>{item.tpmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Transports de plis</TableCell>
                            <TableCell>{item.tplisnbre}</TableCell>
                            <TableCell>{item.tplismnt}</TableCell>
                            <TableCell>{item.tplisnbre*item.tplismnt}</TableCell>
                            <TableCell>{item.tplismnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Voyages et déplacements</TableCell>
                            <TableCell>{item.voyagenbre}</TableCell>
                            <TableCell>{item.voyagemnt}</TableCell>
                            <TableCell>{item.voyagenbre*item.voyagemnt}</TableCell>
                            <TableCell>{item.voyagemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Transports administratifs</TableCell>
                            <TableCell>{item.tanbre}</TableCell>
                            <TableCell>{item.tamnt}</TableCell>
                            <TableCell>{item.tanbre*item.tamnt}</TableCell>
                            <TableCell>{item.tamnt*12}</TableCell>
                        </TableRow>
                        <TableRow>
                              <TableCell> <b>Services extérieurs</b> </TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                              <TableCell><b>{tservice}</b></TableCell>
                              <TableCell></TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Sous-traitance</TableCell>
                            <TableCell>{item.traitancenbre}</TableCell>
                            <TableCell>{item.traitancemnt}</TableCell>
                            <TableCell>{item.traitancenbre*item.traitancemnt}</TableCell>
                            <TableCell>{item.traitancemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Location</TableCell>
                            <TableCell>{item.locationnbre}</TableCell>
                            <TableCell>{item.locationmnt}</TableCell>
                            <TableCell>{item.locationnbre*item.locationmnt}</TableCell>
                            <TableCell>{item.locationmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Entretien des biens immobiliers et mobiliers</TableCell>
                            <TableCell>{item.entretiennbre}</TableCell>
                            <TableCell>{item.entretienmnt}</TableCell>
                            <TableCell>{item.entretiennbre*item.entretienmnt}</TableCell>
                            <TableCell>{item.entretienmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Maintenance</TableCell>
                            <TableCell>{item.maintenancenbre}</TableCell>
                            <TableCell>{item.maintenancemnt}</TableCell>
                            <TableCell>{item.maintenancenbre*item.maintenancemnt}</TableCell>
                            <TableCell>{item.maintenancemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Assurance</TableCell>
                            <TableCell>{item.assurancenbre}</TableCell>
                            <TableCell>{item.assurancemnt}</TableCell>
                            <TableCell>{item.assurancenbre*item.assurancemnt}</TableCell>
                            <TableCell>{item.assurancemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Etudes et recherches</TableCell>
                            <TableCell>{item.etudenbre}</TableCell>
                            <TableCell>{item.etudemnt}</TableCell>
                            <TableCell>{item.etudenbre*item.etudemnt}</TableCell>
                            <TableCell>{item.etudemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Documentation</TableCell>
                            <TableCell>{item.docnbre}</TableCell>
                            <TableCell>{item.docmnt}</TableCell>
                            <TableCell>{item.docnbre*item.docmnt}</TableCell>
                            <TableCell>{item.docmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Publicité</TableCell>
                            <TableCell>{item.pubnbre}</TableCell>
                            <TableCell>{item.pubmnt}</TableCell>
                            <TableCell>{item.pubnbre*item.pubmnt}</TableCell>
                            <TableCell>{item.pubmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Téléphone (fixe, mobile)</TableCell>
                            <TableCell>{item.telnbre}</TableCell>
                            <TableCell>{item.telmnt}</TableCell>
                            <TableCell>{item.telnbre*item.telmnt}</TableCell>
                            <TableCell>{item.telmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Internet</TableCell>
                            <TableCell>{item.internetnbre}</TableCell>
                            <TableCell>{item.internetmnt}</TableCell>
                            <TableCell>{item.internetnbre*item.internetmnt}</TableCell>
                            <TableCell>{item.internetmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Frais Bancaires</TableCell>
                            <TableCell>{item.fraisnbre}</TableCell>
                            <TableCell>{item.fraismnt}</TableCell>
                            <TableCell>{item.fraisnbre*item.fraismnt}</TableCell>
                            <TableCell>{item.fraismnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Commissions sur achats/ventes</TableCell>
                            <TableCell>{item.commissionnbre}</TableCell>
                            <TableCell>{item.commissionmnt}</TableCell>
                            <TableCell>{item.commissionnbre*item.commissionmnt}</TableCell>
                            <TableCell>{item.commissionmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Honoraires</TableCell>
                            <TableCell>{item.honorairenbre}</TableCell>
                            <TableCell>{item.honorairemnt}</TableCell>
                            <TableCell>{item.honorairenbre*item.honorairemnt}</TableCell>
                            <TableCell>{item.honorairemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Formation du Personnel</TableCell>
                            <TableCell>{item.formationnbre}</TableCell>
                            <TableCell>{item.formationmnt}</TableCell>
                            <TableCell>{item.formationnbre*item.formationmnt}</TableCell>
                            <TableCell>{item.formationmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Redevances</TableCell>
                            <TableCell>{item.redevancenbre}</TableCell>
                            <TableCell>{item.redevancemnt}</TableCell>
                            <TableCell>{item.redevancenbre*item.redevancemnt}</TableCell>
                            <TableCell>{item.redevancemnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Réceptions</TableCell>
                            <TableCell>{item.receptionnbre}</TableCell>
                            <TableCell>{item.receptionmnt}</TableCell>
                            <TableCell>{item.receptionnbre*item.receptionmnt}</TableCell>
                            <TableCell>{item.receptionmnt*12}</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            <TableCell>Missions</TableCell>
                            <TableCell>{item.missionnbre}</TableCell>
                            <TableCell>{item.missionmnt}</TableCell>
                            <TableCell>{item.missionnbre*item.missionmnt}</TableCell>
                            <TableCell>{item.missionmnt*12}</TableCell>
                        </TableRow>
                        
                        </>
                      );
                    })}
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell><b>Total charges d’exploitation</b> </TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
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
                    <StyledTableCell style={{minWidth:100}}>Nombre mois besoin</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant mensuel</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant besoin</StyledTableCell>
                    <StyledTableCell style={{minWidth:100}}>Montant annuel</StyledTableCell>
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
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
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
              onSubmit={editCharge}
            >
              <div className="input">
                
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="mcnbre"
                label="Nombre mois besoin(Matières consommables)"
                name="mcnbre"
                autoFocus
                rowsMax={10}
                rows="5"
                value={editTable.mcnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="mcmnt"
                label="Montant mensuel(Matières consommables)"
                name="mcmnt"
                rowsMax={10}
                rows="5"
                value={editTable.mcmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="carburantnbre"
                label="Nombre mois besoin(Carburants)"
                name="carburantnbre"
                rowsMax={10}
                rows="5"
                value={editTable.carburantnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="carburantmnt"
                label="Montant mensuel(Carburants)"
                name="carburantmnt"
                rowsMax={10}
                rows="5"
                value={editTable.carburantmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="penbre"
                label="Nombre mois besoin(Produits d'entretien)"
                name="penbre"
                rowsMax={10}
                rows="5"
                value={editTable.penbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pemnt"
                label="Montant mensuel(Produits d'entretien)"
                name="pemnt"
                rowsMax={10}
                rows="5"
                value={editTable.pemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fourniturenbre"
                label="Nombre mois besoin(Fourniture)"
                name="fourniturenbre"
                rowsMax={10}
                rows="5"
                value={editTable.fourniturenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fournituremnt"
                label="Montant mensuel(Fourniture)"
                name="fournituremnt"
                rowsMax={10}
                rows="5"
                value={editTable.fournituremnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="eaunbre"
                label="Nombre mois besoin(Eau)"
                name="eaunbre"
                rowsMax={10}
                rows="5"
                value={editTable.eaunbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="eaumnt"
                label="Montant mensuel(Eau)"
                name="eaumnt"
                rowsMax={10}
                rows="5"
                value={editTable.eaumnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="electricitenbre"
                label="Nombre mois besoin(Electricité)"
                name="electricitenbre"
                rowsMax={10}
                rows="5"
                value={editTable.electricitenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="electricitemnt"
                label="Montant mensuel(Electricité)"
                name="electricitemnt"
                rowsMax={10}
                rows="5"
                value={editTable.electricitemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pmonbre"
                label="Nombre mois besoin(Petit matériel et outillage)"
                name="pmonbre"
                rowsMax={10}
                rows="5"
                value={editTable.pmonbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pmomnt"
                label="Montant mensuel(Petit matériel et outillage)"
                name="pmomnt"
                rowsMax={10}
                rows="5"
                value={editTable.pmomnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="epsnbre"
                label="Nombre mois besoin(Etudes et prestation de services)"
                name="epsnbre"
                rowsMax={10}
                rows="5"
                value={editTable.epsnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="epsmnt"
                label="Montant mensuel(Etudes et prestation de services)"
                name="epsmnt"
                rowsMax={10}
                rows="5"
                value={editTable.epsmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tmenbre"
                label="Nombre mois besoin(Travaux, matériels et équipements)"
                name="tmenbre"
                rowsMax={10}
                rows="5"
                value={editTable.tmenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tmemnt"
                label="Montant mensuel(Travaux, matériels et équipements)"
                name="tmemnt"
                rowsMax={10}
                rows="5"
                value={editTable.tmemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="emballagenbre"
                label="Nombre mois besoin(Emballage)"
                name="emballagenbre"
                rowsMax={10}
                rows="5"
                value={editTable.emballagenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="emballagemnt"
                label="Montant mensuel(Emballage)"
                name="emballagemnt"
                rowsMax={10}
                rows="5"
                value={editTable.emballagemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tavnbre"
                label="Nombre mois besoin(Transports sur achats/ventes)"
                name="tavnbre"
                rowsMax={10}
                rows="5"
                value={editTable.tavnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tavmnt"
                label="Montant mensuel(Transports sur achats/ventes)"
                name="tavmnt"
                rowsMax={10}
                rows="5"
                value={editTable.tavmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tpnbre"
                label="Nombre mois besoin(Transports du personnel)"
                name="tpnbre"
                rowsMax={10}
                rows="5"
                value={editTable.tpnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tpmnt"
                label="Montant mensuel(Transports du personnel)"
                name="tpmnt"
                rowsMax={10}
                rows="5"
                value={editTable.tpmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tplisnbre"
                label="Nombre mois besoin(Transports de plis)"
                name="tplisnbre"
                rowsMax={10}
                rows="5"
                value={editTable.tplisnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tplismnt"
                label="Montant mensuel(Transports de plis)"
                name="tplismnt"
                rowsMax={10}
                rows="5"
                value={editTable.tplismnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="voyagenbre"
                label="Nombre mois besoin(Voyages et déplacements)"
                name="voyagenbre"
                rowsMax={10}
                rows="5"
                value={editTable.voyagenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="voyagemnt"
                label="Montant mensuel(Voyages et déplacements)"
                name="voyagemnt"
                rowsMax={10}
                rows="5"
                value={editTable.voyagemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tanbre"
                label="Nombre mois besoin(Transports administratifs)"
                name="tanbre"
                rowsMax={10}
                rows="5"
                value={editTable.tanbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tamnt"
                label="Montant mensuel(Transports administratifs)"
                name="tamnt"
                rowsMax={10}
                rows="5"
                value={editTable.tamnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="traitance
                traitancenbre"
                label="Nombre mois besoin(Sous-traitance)"
                name="traitancenbre"
                rowsMax={10}
                rows="5"
                value={editTable.traitancenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="tamnt"
                label="Montant mensuel(Sous-traitance)"
                name="traitancemnt"
                rowsMax={10}
                rows="5"
                value={editTable.traitancemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="locationnbre"
                label="Nombre mois besoin(Locations)"
                name="locationnbre"
                rowsMax={10}
                rows="5"
                value={editTable.locationnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="locationmnt"
                label="Montant mensuel(Locations)"
                name="locationmnt"
                rowsMax={10}
                rows="5"
                value={editTable.locationmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="entretiennbre"
                label="Nombre mois besoin(Entretien des biens immobiliers et mobiliers)"
                name="entretiennbre"
                rowsMax={10}
                rows="5"
                value={editTable.entretiennbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="entretienmnt"
                label="Montant mensuel(Entretien des biens immobiliers et mobiliers)"
                name="entretienmnt"
                rowsMax={10}
                rows="5"
                value={editTable.entretienmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="maintenancenbre"
                label="Nombre mois besoin(Maintenance)"
                name="maintenancenbre"
                rowsMax={10}
                rows="5"
                value={editTable.maintenancenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="maintenancemnt"
                label="Montant mensuel(Maintenance)"
                name="maintenancemnt"
                rowsMax={10}
                rows="5"
                value={editTable.maintenancemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="assurancenbre"
                label="Nombre mois besoin(assurance)"
                name="assurancenbre"
                rowsMax={10}
                rows="5"
                value={editTable.assurancenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="assurancemnt"
                label="Montant mensuel(assurance)"
                name="assurancemnt"
                rowsMax={10}
                rows="5"
                value={editTable.assurancemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="etudenbre"
                label="Nombre mois besoin(Etudes et recherches)"
                name="etudenbre"
                rowsMax={10}
                rows="5"
                value={editTable.etudenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="etudemnt"
                label="Montant mensuel(Etudes et recherches)"
                name="etudemnt"
                rowsMax={10}
                rows="5"
                value={editTable.etudemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="docnbre"
                label="Nombre mois besoin(Documentation)"
                name="docnbre"
                rowsMax={10}
                rows="5"
                value={editTable.docnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="docmnt"
                label="Montant mensuel(Documentation)"
                name="docmnt"
                rowsMax={10}
                rows="5"
                value={editTable.docmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pubnbre"
                label="Nombre mois besoin(Publicité)"
                name="pubnbre"
                rowsMax={10}
                rows="5"
                value={editTable.pubnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="pubmnt"
                label="Montant mensuel(Publicité)"
                name="pubmnt"
                rowsMax={10}
                rows="5"
                value={editTable.pubmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="telnbre"
                label="Nombre mois besoin(Téléphone (fixe, mobile))"
                name="telnbre"
                rowsMax={10}
                rows="5"
                value={editTable.telnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="telmnt"
                label="Montant mensuel(Téléphone (fixe, mobile))"
                name="telmnt"
                rowsMax={10}
                rows="5"
                value={editTable.telmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="internetnbre"
                label="Nombre mois besoin(Internet)"
                name="internetnbre"
                rowsMax={10}
                rows="5"
                value={editTable.internetnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="internetmnt"
                label="Montant mensuel(Internet)"
                name="internetmnt"
                rowsMax={10}
                rows="5"
                value={editTable.internetmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fraisnbre"
                label="Nombre mois besoin(Frais Bancaires)"
                name="fraisnbre"
                rowsMax={10}
                rows="5"
                value={editTable.fraisnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="fraismnt"
                label="Montant mensuel(Frais Bancaires)"
                name="fraismnt"
                rowsMax={10}
                rows="5"
                value={editTable.fraismnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="commissionnbre"
                label="Nombre mois besoin(Commissions sur achats/ventes)"
                name="commissionnbre"
                rowsMax={10}
                rows="5"
                value={editTable.commissionnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="commissionmnt"
                label="Montant mensuel(Commissions sur achats/ventes)"
                name="commissionmnt"
                rowsMax={10}
                rows="5"
                value={editTable.commissionmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="honorairenbre"
                label="Nombre mois besoin(Honoraires)"
                name="honorairenbre"
                rowsMax={10}
                rows="5"
                value={editTable.honorairenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="honorairemnt"
                label="Montant mensuel(Honoraires)"
                name="honorairemnt"
                rowsMax={10}
                rows="5"
                value={editTable.honorairemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="formationnbre"
                label="Nombre mois besoin(Formation du personnel)"
                name="formationnbre"
                rowsMax={10}
                rows="5"
                value={editTable.formationnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="formationmnt"
                label="Montant mensuel(Formation du personnel)"
                name="formationmnt"
                rowsMax={10}
                rows="5"
                value={editTable.formationmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="redevancenbre"
                label="Nombre mois besoin(Redevances)"
                name="redevancenbre"
                rowsMax={10}
                rows="5"
                value={editTable.redevancenbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="redevancemnt"
                label="Montant mensuel(Redevances)"
                name="redevancemnt"
                rowsMax={10}
                rows="5"
                value={editTable.redevancemnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="receptionnbre"
                label="Nombre mois besoin(Receptions)"
                name="receptionnbre"
                rowsMax={10}
                rows="5"
                value={editTable.receptionnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="receptionmnt"
                label="Montant mensuel(Receptions)"
                name="receptionmnt"
                rowsMax={10}
                rows="5"
                value={editTable.receptionmnt}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="missionnbre"
                label="Nombre mois besoin(Missions)"
                name="missionnbre"
                rowsMax={10}
                rows="5"
                value={editTable.missionnbre}
                onChange={handleChange}
                />
                <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="missionmnt"
                label="Montant mensuel(Missions)"
                name="missionmnt"
                rowsMax={10}
                rows="5"
                value={editTable.missionmnt}
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
                        id="mcnbre"
                        label="Nombre mois besoin(Matières consommables)"
                        name="mcnbre"
                        autoFocus
                        rowsMax={10}
                        rows="5"
                        value={editTable.mcnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="mcmnt"
                        label="Montant mensuel(Matières consommables)"
                        name="mcmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.mcmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="carburantnbre"
                        label="Nombre mois besoin(Carburants)"
                        name="carburantnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.carburantnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="carburantmnt"
                        label="Montant mensuel(Carburants)"
                        name="carburantmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.carburantmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="penbre"
                        label="Nombre mois besoin(Produits d'entretien)"
                        name="penbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.penbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="pemnt"
                        label="Montant mensuel(Produits d'entretien)"
                        name="pemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fourniturenbre"
                        label="Nombre mois besoin(Fourniture)"
                        name="fourniturenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fourniturenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fournituremnt"
                        label="Montant mensuel(Fourniture)"
                        name="fournituremnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fournituremnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="eaunbre"
                        label="Nombre mois besoin(Eau)"
                        name="eaunbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.eaunbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="eaumnt"
                        label="Montant mensuel(Eau)"
                        name="eaumnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.eaumnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="electricitenbre"
                        label="Nombre mois besoin(Electricité)"
                        name="electricitenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.electricitenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="electricitemnt"
                        label="Montant mensuel(Electricité)"
                        name="electricitemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.electricitemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="pmonbre"
                        label="Nombre mois besoin(Petit matériel et outillage)"
                        name="pmonbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pmonbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="pmomnt"
                        label="Montant mensuel(Petit matériel et outillage)"
                        name="pmomnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pmomnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="epsnbre"
                        label="Nombre mois besoin(Etudes et prestation de services)"
                        name="epsnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.epsnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="epsmnt"
                        label="Montant mensuel(Etudes et prestation de services)"
                        name="epsmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.epsmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tmenbre"
                        label="Nombre mois besoin(Travaux, matériels et équipements)"
                        name="tmenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tmenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tmemnt"
                        label="Montant mensuel(Travaux, matériels et équipements)"
                        name="tmemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tmemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="emballagenbre"
                        label="Nombre mois besoin(Emballage)"
                        name="emballagenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.emballagenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="emballagemnt"
                        label="Montant mensuel(Emballage)"
                        name="emballagemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.emballagemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tavnbre"
                        label="Nombre mois besoin(Transports sur achats/ventes)"
                        name="tavnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tavnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tavmnt"
                        label="Montant mensuel(Transports sur achats/ventes)"
                        name="tavmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tavmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tpnbre"
                        label="Nombre mois besoin(Transports du personnel)"
                        name="tpnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tpnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tpmnt"
                        label="Montant mensuel(Transports du personnel)"
                        name="tpmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tpmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tplisnbre"
                        label="Nombre mois besoin(Transports de plis)"
                        name="tplisnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tplisnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tplismnt"
                        label="Montant mensuel(Transports de plis)"
                        name="tplismnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tplismnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="voyagenbre"
                        label="Nombre mois besoin(Voyages et déplacements)"
                        name="voyagenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.voyagenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="voyagemnt"
                        label="Montant mensuel(Voyages et déplacements)"
                        name="voyagemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.voyagemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tanbre"
                        label="Nombre mois besoin(Transports administratifs)"
                        name="tanbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tanbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tamnt"
                        label="Montant mensuel(Transports administratifs)"
                        name="tamnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.tamnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="traitance
                        traitancenbre"
                        label="Nombre mois besoin(Sous-traitance)"
                        name="traitancenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.traitancenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="tamnt"
                        label="Montant mensuel(Sous-traitance)"
                        name="traitancemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.traitancemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="locationnbre"
                        label="Nombre mois besoin(Locations)"
                        name="locationnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.locationnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="locationmnt"
                        label="Montant mensuel(Locations)"
                        name="locationmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.locationmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="entretiennbre"
                        label="Nombre mois besoin(Entretien des biens immobiliers et mobiliers)"
                        name="entretiennbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.entretiennbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="entretienmnt"
                        label="Montant mensuel(Entretien des biens immobiliers et mobiliers)"
                        name="entretienmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.entretienmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="maintenancenbre"
                        label="Nombre mois besoin(Maintenance)"
                        name="maintenancenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.maintenancenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="maintenancemnt"
                        label="Montant mensuel(Maintenance)"
                        name="maintenancemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.maintenancemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="assurancenbre"
                        label="Nombre mois besoin(assurance)"
                        name="assurancenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.assurancenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="assurancemnt"
                        label="Montant mensuel(assurance)"
                        name="assurancemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.assurancemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="etudenbre"
                        label="Nombre mois besoin(Etudes et recherches)"
                        name="etudenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.etudenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="etudemnt"
                        label="Montant mensuel(Etudes et recherches)"
                        name="etudemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.etudemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="docnbre"
                        label="Nombre mois besoin(Documentation)"
                        name="docnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.docnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="docmnt"
                        label="Montant mensuel(Documentation)"
                        name="docmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.docmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="pubnbre"
                        label="Nombre mois besoin(Publicité)"
                        name="pubnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pubnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="pubmnt"
                        label="Montant mensuel(Publicité)"
                        name="pubmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.pubmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="telnbre"
                        label="Nombre mois besoin(Téléphone (fixe, mobile))"
                        name="telnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.telnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="telmnt"
                        label="Montant mensuel(Téléphone (fixe, mobile))"
                        name="telmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.telmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="internetnbre"
                        label="Nombre mois besoin(Internet)"
                        name="internetnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.internetnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="internetmnt"
                        label="Montant mensuel(Internet)"
                        name="internetmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.internetmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraisnbre"
                        label="Nombre mois besoin(Frais Bancaires)"
                        name="fraisnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraisnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fraismnt"
                        label="Montant mensuel(Frais Bancaires)"
                        name="fraismnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.fraismnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="commissionnbre"
                        label="Nombre mois besoin(Commissions sur achats/ventes)"
                        name="commissionnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.commissionnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="commissionmnt"
                        label="Montant mensuel(Commissions sur achats/ventes)"
                        name="commissionmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.commissionmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="honorairenbre"
                        label="Nombre mois besoin(Honoraires)"
                        name="honorairenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.honorairenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="honorairemnt"
                        label="Montant mensuel(Honoraires)"
                        name="honorairemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.honorairemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="formationnbre"
                        label="Nombre mois besoin(Formation du personnel)"
                        name="formationnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.formationnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="formationmnt"
                        label="Montant mensuel(Formation du personnel)"
                        name="formationmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.formationmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="redevancenbre"
                        label="Nombre mois besoin(Redevances)"
                        name="redevancenbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.redevancenbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="redevancemnt"
                        label="Montant mensuel(Redevances)"
                        name="redevancemnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.redevancemnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="receptionnbre"
                        label="Nombre mois besoin(Receptions)"
                        name="receptionnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.receptionnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="receptionmnt"
                        label="Montant mensuel(Receptions)"
                        name="receptionmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.receptionmnt}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="missionnbre"
                        label="Nombre mois besoin(Missions)"
                        name="missionnbre"
                        rowsMax={10}
                        rows="5"
                        value={editTable.missionnbre}
                        onChange={handleChange}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="missionmnt"
                        label="Montant mensuel(Missions)"
                        name="missionmnt"
                        rowsMax={10}
                        rows="5"
                        value={editTable.missionmnt}
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

export default ChapitreSixMoyen
