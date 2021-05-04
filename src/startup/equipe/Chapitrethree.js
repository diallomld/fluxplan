import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
  const initialState = {
    nombre: "",
    poste: "",
    profil: "",
    mission: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [personnel, setPersonnel] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");

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
  const editPersonnel = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("personnel")
      .doc(idDoc)
      .set(
        {
          nombre: credentital.nombre,
          poste: credentital.poste,
          profil: credentital.profil,
          mission: credentital.mission,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePersonnel = (id) => {
    firebasee
      .firestore()
      .collection("personnel")
      .doc(id)
      .delete()
      .then(() => console.log("deleted"))
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebasee
      .firestore()
      .collection("personnel")
      .add({
        nombre: credentital.nombre,
        poste: credentital.poste,
        profil: credentital.profil,
        mission: credentital.mission,
        userId: userId,
      })
      .then(() => {
        console.log("add");
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("Ajouté");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("personnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nombre: doc.data().nombre,
            poste: doc.data().poste,
            profil: doc.data().profil,
            mission: doc.data().mission,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setPersonnel(dat);
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
      {personnel.length > 0 ? (
      <div className="tab">
          
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <caption style={{color: 'black', fontSize:18}}> Personnel</caption>
            <TableHead>
              <TableRow>
                <StyledTableCell>Poste</StyledTableCell>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Profil</StyledTableCell>
                <StyledTableCell style={{minWidth:300}}>Missions et tâches</StyledTableCell>
                <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personnel.map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      
                          <TableCell>{item.poste}</TableCell>
                          <TableCell>{item.nombre}</TableCell>
                          <TableCell>{item.profil}</TableCell>
                          <TableCell>{item.mission}</TableCell>
                          <TableCell>
                            <div className="delete">
                              <div className="edit">
                                <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                              </div>
                              <div className="delet">
                                <DeleteIcon onClick={() => deletePersonnel(item.docIdd)} />
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
                <StyledTableCell>Poste</StyledTableCell>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Profil</StyledTableCell>
                <StyledTableCell style={{minWidth:300}}>Missions et tâches</StyledTableCell>
                <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>.......</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>............</TableCell>
                      <TableCell>......</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
      )}

      <div className="chapitretwo-title">
        <p>Le Personnel </p>
      </div>
      <div className="plus">
        {!show && (
          <Button className="plus-icon" onClick={() => setShow(!show)}>
            Ajouter
          </Button>
        )}
      </div>
      <div>
        { idDoc ? (
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editPersonnel}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="poste"
              label="Poste"
              name="poste"
              autoFocus
              value={credentital.poste}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              autoComplete="nombre"
              autoFocus
              type="number"
              value={credentital.nombre}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="profil"
              label="Profil"
              name="profil"
              autoFocus
              value={credentital.profil}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mission"
              label="Missions et tâches"
              name="mission"
              multiline
              autoFocus
              value={credentital.mission}
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
              id="poste"
              label="Poste"
              name="poste"
              autoFocus
              value={credentital.poste}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              autoComplete="nombre"
              autoFocus
              type="number"
              value={credentital.nombre}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="profil"
              label="Profil"
              name="profil"
              autoFocus
              value={credentital.profil}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mission"
              label="Missions et tâches"
              name="mission"
              multiline
              autoFocus
              value={credentital.mission}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />

            <Button
                type="submit"
                className="btn"
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

export default Chapitrethree;
