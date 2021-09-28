import React from "react";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
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

const Chapitrehuit = () => {
  const { userId } = useGlobalContext();
  const [toggle, setToggle] = React.useState(false);
  /*
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
  */

 
  //INVESTISMENT

  const [totalIcorp, settotalIcorp] = React.useState(0)
  const [totalIincpor, setotalIincpor] = React.useState(0)
  const [totalIf, setotalIf] = React.useState(0)
  const [totalInvest, setTotalInvest] = React.useState(0)
  
  //BFR
  
  const [totalStock, setotalStock] = React.useState(0)
  const [totalCharge, setotalCharge] = React.useState(0)
  const [totalBFR,setTotalBFR] = React.useState(0)
  //pour le emprunt
  const [emprunt, setEmprunt] = React.useState(0);
  const [R, setR] = React.useState(0);
  const [R2, setR2] = React.useState(0);
  const [R3, setR3] = React.useState(0);
  
  // Ressources
  const [E, setE] = React.useState(0);
  const [S, setS] = React.useState(0);
  const [A, setA] = React.useState(0);
  const [V, setV] = React.useState(0);
  const [Aport, setAport] = React.useState(0);
  const [totalResource, setTotalResource] = React.useState(0);



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
      setToggle(!toggle)
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
      setToggle(!toggle)
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
      setToggle(!toggle)
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
      setToggle(!toggle)
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
      setToggle(!toggle)
  };
  const getEmprunt = () => {
    return firebasee
      .firestore()
      .collection("mode-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        
        let temprunt = 0

        data.forEach((doc) => {

          temprunt= Number(doc.data().emprunt)
          console.error("emprunt "+ temprunt)
        });
        setEmprunt(temprunt)


      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };
  const getEcheance = () => {
    return firebasee
      .firestore()
      .collection("caracteristique-emprunt")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];

        let tamort1=0
        let tamort2=0
        let tamort3=0
        let tinteret1 = 0
        let tinteret2 = 0
        let tinteret3 = 0
        let techeance1 = 0
        let techeance2 = 0
        let techeance3 = 0
        let tcapital2 = 0
        let tcapital3 = 0
        let tauxpercent = 0

        data.forEach((doc) => {

          tauxpercent = Number(doc.data().taux)/100
          /**ANNEE 1 */
          tamort1 = (emprunt/Number(doc.data().duree))*12
          tinteret1 = emprunt*tauxpercent
          console.error("taut "+Number(doc.data().taux))
          console.error("duree "+Number(doc.data().duree))
          techeance1 = tamort1+tinteret1
          setR(techeance1)
          /**ANNEE 2 */
          tcapital2 = emprunt-tamort1
          //setCapital2(tcapital2)
          tamort2 = (emprunt/Number(doc.data().duree))*12
          //setAmort2(tamort2)

          tinteret2 = tcapital2*tauxpercent
          //setinteret2(tinteret2)
          techeance2 = tamort1+tinteret2
          setR2(techeance2)

          /**ANNEE 3 */
          tcapital3 = tcapital2-tamort1
          //setCapital3(tcapital3)
          tamort3 = (emprunt/Number(doc.data().duree))*12
          //setAmort3(tamort3)

          tinteret3 = tcapital3*tauxpercent
          //setinteret3(tinteret3)
          techeance3 = tamort1+tinteret3
          setR3(techeance3)

        });
      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };
  const getBesoinFinancement = () => {
    return firebasee
      .firestore()
      .collection("besoin-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {

        let tapport = 0
        let tversement = 0
        data.forEach((doc) => { 

          tapport = Number(doc.data().apport)
          tversement = Number(doc.data().versement)

        });

        setAport(tapport)
        setV(tversement)
      })
      .catch((err) => console.log(err));

    setToggle(!toggle)
  };
  const getModeFinancement = () => {
    return firebasee
      .firestore()
      .collection("mode-financement-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        
        let temprunt = 0
        let tsubvention = 0
        let tautres = 0

        data.forEach((doc) => {

          temprunt= Number(doc.data().emprunt)
          tsubvention = Number(doc.data().subvention)
          tautres = Number(doc.data().autres)

        });

        setE(temprunt)
        setS(tsubvention)
        setA(tautres)

      })
      .catch((err) => console.log(err));
      setToggle(!toggle)
  };

  React.useEffect(() => {
    let total = 0
    let bfr = 0
    let r = 0
    getIncorp()
    getCorp()
    getFinance()
    getStock()
    getCharge()
    getEmprunt()
    getEcheance()
    total =totalIcorp+totalIf+totalIincpor
    setTotalInvest(total)
    bfr = totalStock+totalCharge
    setTotalBFR(bfr)
    getBesoinFinancement()
    getModeFinancement()
    r = A+S+E+V+Aport
    setTotalResource(r)
  },[toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:20}}>Plan de financement </caption>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ minWidth: 300}}></TableCell>
                    <StyledTableCell style={{ minWidth: 150}}>Initial 0</StyledTableCell>
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
                        <TableRow>
                            <TableCell>Investissements </TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{totalInvest}</TableCell>
                            <TableCell>{totalInvest}</TableCell>
                            <TableCell>{totalInvest}</TableCell>
                            
                        </TableRow>
                        <TableRow>
                            <TableCell>Variation du Besoin en fonds de roulement</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{totalBFR}</TableCell>
                            <TableCell>{totalBFR}</TableCell>
                            <TableCell>{totalBFR}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Remboursement emprunt</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{R}</TableCell>
                            <TableCell>{R2}</TableCell>
                            <TableCell>{R3}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell><b>TOTAL DES BESOINS</b></TableCell>
                            <TableCell><b></b></TableCell>
                            <TableCell><b>{totalInvest+totalBFR+R}</b></TableCell>
                            <TableCell><b>{totalInvest+totalBFR+R2}</b></TableCell>
                            <TableCell><b>{totalInvest+totalBFR+R3}</b></TableCell>
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
                            <TableCell>Apports en capital</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{Aport}</TableCell>
                            <TableCell>{Aport}</TableCell>
                            <TableCell>{Aport}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Versements en compte courant associé</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{V}</TableCell>
                            <TableCell>{V}</TableCell>
                            <TableCell>{V}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Emprunts</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{E}</TableCell>
                            <TableCell>{E}</TableCell>
                            <TableCell>{E}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Subventions</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{S}</TableCell>
                            <TableCell>{S}</TableCell>
                            <TableCell>{S}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autres</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{A}</TableCell>
                            <TableCell>{A}</TableCell>
                            <TableCell>{A}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Capacité d'autofinancement (hors subvention)</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        
                        <TableRow>
                            <TableCell><b>TOTAL DES RESSOURCES</b></TableCell>
                            <TableCell>{}</TableCell>
                            <TableCell>{A+S+E+V+Aport}</TableCell>
                            <TableCell>{A+S+E+V+Aport}</TableCell>
                            <TableCell>{A+S+E+V+Aport}</TableCell>
                        </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          
        </div>
      </div>
  );
};

export default Chapitrehuit
