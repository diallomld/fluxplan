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
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '60%',
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

const AchaPrevision = () => {
  const editObject = {
    produits: "",
    prix: "",
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [prevision, setPrevision] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  const [totalQm, setTotalQm] = React.useState([]);
  const [totalCa, setTotalCa] = React.useState([]);
  const [totalCat, setTotalCat] = React.useState([]);
  //total ca
  const [tCa1, setTCa1] = React.useState(0);
  const [tCa2, setTCa2] = React.useState(0);
  const [tCa3, setTCa3] = React.useState(0);
  const [tCa4, setTCa4] = React.useState(0);
  const [tCa5, setTCa5] = React.useState(0);
  const [tCa6, setTCa6] = React.useState(0);
  const [tCa7, setTCa7] = React.useState(0);
  const [tCa8, setTCa8] = React.useState(0);
  const [tCa9, setTCa9] = React.useState(0);
  const [tCa10, setTCa10] = React.useState(0);
  const [tCa11, setTCa11] = React.useState(0);
  const [tCa12, setTCa12] = React.useState(0);
  //get all qte
  const [tqt1, setqt1] = React.useState(0);
  const [tqt2, setqt2] = React.useState(0);
  const [tqt3, setqt3] = React.useState(0);
  const [tqt4, setqt4] = React.useState(0);
  const [tqt5, setqt5] = React.useState(0);
  const [tqt6, setqt6] = React.useState(0);
  const [tqt7, setqt7] = React.useState(0);
  const [tqt8, setqt8] = React.useState(0);
  const [tqt9, setqt9] = React.useState(0);
  const [tqt10, setqt10] = React.useState(0);
  const [tqt11, setqt11] = React.useState(0);
  const [tqt12, setqt12] = React.useState(0);

  let tCa = 0;

  //calcul des totaux du ca
  let ca1=0,ca2=0,ca3=0,ca4=0,ca5=0,ca6=0,ca7=0,ca8=0,ca9=0, ca10=0, ca11=0, ca12 = 0

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
      .collection("achat-prevision-annne1")
      .doc(idDoc)
      .set(
        {
          produits: editTable.produits,
          prix: editTable.prix,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({
          produits: "",
          prix: "",
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
      .collection("achat-prevision-annne1")
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
      .collection("achat-prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [0];
        //let tabQte = [];
        let tabCa = [];
        data.forEach((doc) => {
          let som = 0;
          dat.push({
            produits: doc.data().produits,
            prix: doc.data().prix,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          //tabQte.push(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))
          
          ca1+=(Number(tqt1)*Number(doc.data().prix))
          ca2+=(Number(tqt2)*Number(doc.data().prix))
          ca3+=(Number(tqt3)*Number(doc.data().prix))
          ca4+=(Number(tqt4)*Number(doc.data().prix))
          ca5+=(Number(tqt5)*Number(doc.data().prix))
          ca6+=(Number(tqt6)*Number(doc.data().prix))
          ca7+=(Number(tqt7)*Number(doc.data().prix))
          ca8+=(Number(tqt8)*Number(doc.data().prix))
          ca9+=(Number(tqt9)*Number(doc.data().prix))
          ca10+=(Number(tqt10)*Number(doc.data().prix))
          ca11+=(Number(tqt11)*Number(doc.data().prix))
          ca12+=(Number(tqt12)*Number(doc.data().prix))

          som = Number(Number(tqt1)+Number(tqt2)+Number(tqt3)+Number(tqt4)+Number(tqt5)+Number(tqt6)+Number(tqt7)+Number(tqt8)+Number(tqt9)+Number(tqt10)+Number(tqt11)+Number(tqt12))*Number(doc.data().prix)
         
          tabCa.push(som)
        });
        // total ca affectation
        setTCa1(ca1)
        setTCa2(ca2)
        setTCa3(ca3)
        setTCa4(ca4)
        setTCa5(ca5)
        setTCa6(ca6)
        setTCa7(ca7)
        setTCa8(ca8)
        setTCa9(ca9)
        setTCa10(ca10)
        setTCa11(ca11)
        setTCa12(ca12)
        
        setTotalCa(tabCa)
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setTotalCat(tCa)
        dat.shift()
        setPrevision(dat);
        //console.table(prevision)
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };
  const getQte = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let tabQte = [];
        data.forEach((doc) => {
          
          tabQte.push(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))
          
          setqt1(Number(doc.data().qm1))
          setqt2(Number(doc.data().qm2))
          setqt3(Number(doc.data().qm3))
          setqt4(Number(doc.data().qm4))
          setqt5(Number(doc.data().qm5))
          setqt6(Number(doc.data().qm6))
          setqt7(Number(doc.data().qm7))
          setqt8(Number(doc.data().qm8))
          setqt9(Number(doc.data().qm9))
          setqt10(Number(doc.data().qm10))
          setqt11(Number(doc.data().qm11))
          setqt12(Number(doc.data().qm12))
        });
        // total ca affectation

        setTotalQm(tabQte)
        //console.table(prevision)
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
      .collection("achat-prevision-annne1")
      .add({
        produits: editTable.produits,
        userId: userId,
      })
      .then(() => {
        setEditTable({
          produits: "",
          prix: "",
        })
        setOpen(true)

      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  React.useEffect(() => {
    getQte()
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
      {prevision.length > 0 ? (
        <div className="tab">
          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}}>Achats prévisionnels de la première année</caption>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan="2"></TableCell>
                    <StyledTableCell colSpan="13" style={{ maxWidth: 300}}>Annéé 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Produits</TableCell>
                        <TableCell>Elements</TableCell>
                        <TableCell>Mois 1</TableCell>
                        <TableCell>Mois 2</TableCell>
                        <TableCell>Mois 3</TableCell>
                        <TableCell>Mois 4</TableCell>
                        <TableCell>Mois 5</TableCell>
                        <TableCell>Mois 6</TableCell>
                        <TableCell>Mois 7</TableCell>
                        <TableCell>Mois 8</TableCell>
                        <TableCell>Mois 9</TableCell>
                        <TableCell>Mois 10</TableCell>
                        <TableCell>Mois 11</TableCell>
                        <TableCell>Mois 12</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                  {prevision.map((item, index) => {
                      return (
                          <>
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell rowSpan ="4">{item.produits}</TableCell>
                              
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Quantité</TableCell>
                            <TableCell>{tqt1}</TableCell>
                            <TableCell>{tqt2}</TableCell>
                            <TableCell>{tqt3}</TableCell>
                            <TableCell>{tqt4}</TableCell>
                            <TableCell>{tqt5}</TableCell>
                            <TableCell>{tqt6}</TableCell>
                            <TableCell>{tqt7}</TableCell>
                            <TableCell>{tqt8}</TableCell>
                            <TableCell>{tqt9}</TableCell>
                            <TableCell>{tqt10}</TableCell>
                            <TableCell>{tqt11}</TableCell>
                            <TableCell>{tqt12}</TableCell>
                            <TableCell>{totalQm[index]} FCFA </TableCell>
                            <TableCell rowSpan="3">
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
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Prix unitaire</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix}</TableCell>
                            <TableCell>{item.prix*12} FCFA</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Achats </TableCell>
                            <TableCell>{item.prix*tqt1}</TableCell>
                            <TableCell>{item.prix*tqt2}</TableCell>
                            <TableCell>{item.prix*tqt3}</TableCell>
                            <TableCell>{item.prix*tqt4}</TableCell>
                            <TableCell>{item.prix*tqt5}</TableCell>
                            <TableCell>{item.prix*tqt6}</TableCell>
                            <TableCell>{item.prix*tqt7}</TableCell>
                            <TableCell>{item.prix*tqt8}</TableCell>
                            <TableCell>{item.prix*tqt9}</TableCell>
                            <TableCell>{item.prix*tqt10}</TableCell>
                            <TableCell>{item.prix*tqt11}</TableCell>
                            <TableCell>{item.prix*tqt12}</TableCell>
                            <TableCell>{ totalCa[index]} FCFA</TableCell>
                        </TableRow>
                      </>
                      );
                    })}
                      <TableRow hover role="checkbox">
                          <TableCell colSpan="2" style={{color: 'black', fontSize:18}}>Total Achat</TableCell>
                          <TableCell>{tCa1}</TableCell>
                          <TableCell>{tCa2}</TableCell>
                          <TableCell>{tCa3}</TableCell>
                          <TableCell>{tCa4}</TableCell>
                          <TableCell>{tCa5}</TableCell>
                          <TableCell>{tCa6}</TableCell>
                          <TableCell>{tCa7}</TableCell>
                          <TableCell>{tCa8}</TableCell>
                          <TableCell>{tCa9}</TableCell>
                          <TableCell>{tCa10}</TableCell>
                          <TableCell>{tCa11}</TableCell>
                          <TableCell>{tCa12}</TableCell>
                          <TableCell colSpan="2" style={{color: 'black', fontSize:20}}>{totalCat} FCFA</TableCell>
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
                    <TableCell colSpan="2"></TableCell>
                    <StyledTableCell colSpan="13" style={{ maxWidth: 300}}>Annéé 1</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell> 
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Produits</TableCell>
                        <TableCell>Elements</TableCell>
                        <TableCell>Mois 1</TableCell>
                        <TableCell>Mois 2</TableCell>
                        <TableCell>Mois 3</TableCell>
                        <TableCell>Mois 4</TableCell>
                        <TableCell>Mois 5</TableCell>
                        <TableCell>Mois 6</TableCell>
                        <TableCell>Mois 7</TableCell>
                        <TableCell>Mois 8</TableCell>
                        <TableCell>Mois 9</TableCell>
                        <TableCell>Mois 10</TableCell>
                        <TableCell>Mois 11</TableCell>
                        <TableCell>Mois 12</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            
                        <TableCell rowSpan="4">produit 1</TableCell>
                            
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Quantité</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Prix</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                            <TableCell>Achat</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>..........</TableCell>
                            <TableCell>....*12</TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell colSpan="2" style={{color: 'black', fontSize:15}}>Total Achat</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell>.......</TableCell>
                          <TableCell style={{color: 'black', fontSize:30}}>..... FCFA</TableCell>
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
                  required
                  fullWidth
                  id="produits"
                  label="produits"
                  name="produits"
                  autoFocus
                  multiline
                  rows="5"
                  value={editTable.produits}
                  onChange={handleChange}
                  style={{ width: 200, marginRight: 10 }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="prix"
                  label="Prix unitaire"
                  name="prix"
                  autoComplete="prix"
                  InputLabelProps= {{
                    shrink: true,
                  }}
                  value={editTable.prix}
                  onChange={handleChange}
                  style={{ width: 200, margin: 30 }}
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
               <form onSubmit={onSubmit}>
            
                <div className="input">
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="produits"
                      label="produits"
                      name="produits"
                      autoFocus
                      multiline
                      rows="5"
                      value={editTable.produits}
                      onChange={handleChange}
                      style={{ width: 200, marginRight: 10 }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="prix"
                      label="Prix unitaire"
                      name="prix"
                      autoComplete="prix"
                      InputLabelProps= {{
                        shrink: true,
                      }}
                      value={editTable.prix}
                      onChange={handleChange}
                      style={{ width: 200, margin: 30 }}
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
              </form>
            </CardContent>
          </Card>
        </>
        )}
      </div>
    </div>
  );
};

export default AchaPrevision
