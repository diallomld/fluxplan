import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Add from '@material-ui/icons/Add';

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

const Chapitretwo = () => {
  const initialState = {
    cible: "",
    description: "",
    localisation: "",
    produit: "",
    mode: "",
    delai: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [segment, setSegment] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const classes = useStyles();
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleModif = (id) => {
    
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editSegment = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("segment-client")
      .doc(idDoc)
      .set(
        {
          cible: credentital.cible,
          description: credentital.description,
          localisation: credentital.localisation,
          produit: credentital.produit,
          delai: credentital.delai,
          mode: credentital.mode,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        setLoad(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteSegment = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("segment-client")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted")
        setLoad(false)
    })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("segment-client")
      .add({
          cible: credentital.cible,
          description: credentital.description,
          localisation: credentital.localisation,
          produit: credentital.produit,
          delai: credentital.delai,
          mode: credentital.mode,
          userId: userId,
      })
      .then(() => {
        console.log("add");
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("segment marché Ajouté");
  };
  const getDate = () => {
    setLoad(true)
    return firebasee
      .firestore()
      .collection("segment-client")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            cible: doc.data().cible,
            description: doc.data().description,
            localisation: doc.data().localisation,
            produit: doc.data().produit,
            delai: doc.data().delai,
            mode: doc.data().mode,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setSegment(dat);
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      {segment.length > 0 ? (
      <div className="tab">
          
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <caption style={{color: 'black', fontSize:18}}> Segments des clients</caption>
            <TableHead>
              <TableRow>
                <StyledTableCell style={{}}>Client cible</StyledTableCell>
                <StyledTableCell style={{minWidth:200}}>Description</StyledTableCell>
                <StyledTableCell style={{}}>Localisation</StyledTableCell>
                <StyledTableCell>Produits / Services</StyledTableCell>
                <StyledTableCell>Mode de règlement</StyledTableCell>
                <StyledTableCell>Délais de règlement</StyledTableCell>
                <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {segment.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      
                          <TableCell>{item.cible}</TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell>{item.localisation}</TableCell>
                          <TableCell>{item.produit}</TableCell>
                          <TableCell>{item.mode}</TableCell>
                          <TableCell>{item.delai}</TableCell>
                          <TableCell>
                            <div className="delete">
                              <div className="edit">
                                <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                              </div>
                              <div className="delet">
                                <DeleteIcon onClick={() => deleteSegment(item.docIdd)} />
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
            <caption style={{color: 'black', fontSize:20}} >Cette partie n'a pas encore été remplit</caption>
            <TableHead>
              <TableRow>
                
                <StyledTableCell style={{}}>Client cible</StyledTableCell>
                  <StyledTableCell style={{minWidth:200}}>Description</StyledTableCell>
                  <StyledTableCell style={{}}>Localisation</StyledTableCell>
                  <StyledTableCell>Produits / Services</StyledTableCell>
                  <StyledTableCell>Mode de règlement</StyledTableCell>
                  <StyledTableCell>Délais de règlement</StyledTableCell>
                  <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>.......</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>...........</TableCell>
                      <TableCell>......</TableCell>
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
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editSegment}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cible"
              label="Client cible"
              name="cible"
              autoComplete="cible"
              autoFocus
              value={credentital.cible}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description "
              name="description"
              autoFocus
              value={credentital.description}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="localisation"
              label="Localisation"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="produit"
              label="Produits / Services"
              name="produit"
              autoFocus
              value={credentital.produit}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mode"
              label="Mode de règlement"
              name="mode"
              autoFocus
              value={credentital.mode}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="delai"
              label="Délais de règlement"
              name="delai"
              autoFocus
              value={credentital.delai}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />

            <Button
              type="submit"
              className="btn"
              onClick={() => setShow(!show)}
            >
              Modifier
            </Button>
          </div>
        </form>
          
        ): (

        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={handleSubmit}
        >
          <div className="input">
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cible"
              label="Client cible"
              name="cible"
              autoComplete="cible"
              autoFocus
              value={credentital.cible}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description "
              name="description"
              autoFocus
              value={credentital.description}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="localisation"
              label="Localisation"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="produit"
              label="Produits / Services"
              name="produit"
              autoFocus
              value={credentital.produit}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mode"
              label="Mode de règlement"
              name="mode"
              autoFocus
              value={credentital.mode}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="delai"
              label="Délais de règlement"
              name="delai"
              autoFocus
              value={credentital.delai}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <Button
                type="submit"
                className="btn"
                style={{ width: 300}}
                onClick={() => setShow(!show)}
              >
                Ajouter
            </Button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default Chapitretwo;
