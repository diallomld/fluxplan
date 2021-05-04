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

const Chapitreone = () => {
  const initialState = {
    accosie: "",
    telephone: "",
    nationalite: "",
    diplome: "",
    experience: "",
    capital: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [promoteur, setPromoteur] = React.useState([]);
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
    console.log("id "+id);
    setShow(!show);
    if(show){
      setIdDoc("");
      console.log('modif handle no ' +idDoc + show);
    }else{
      setIdDoc(id);
      console.log('modif handle yes ' +idDoc + show);
    }
  };
  const editPromoteur = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("promoteur")
      .doc(idDoc)
      .set(
        {
          accosie: credentital.accosie,
          telephone: credentital.telephone,
          nationalite: credentital.nationalite,
          diplome: credentital.diplome,
          experience: credentital.experience,
          capital: credentital.capital,
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
  const deletePromoteur = (id) => {
    firebasee
      .firestore()
      .collection("promoteur")
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
      .collection("promoteur")
      .add({
        accosie: credentital.accosie,
        telephone: credentital.telephone,
        nationalite: credentital.nationalite,
        diplome: credentital.diplome,
        experience: credentital.experience,
        capital: credentital.capital,
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
      .collection("promoteur")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({

            accosie: doc.data().accosie,
            telephone: doc.data().telephone,
            nationalite: doc.data().nationalite,
            diplome: doc.data().diplome,
            experience: doc.data().experience,
            capital: doc.data().capital,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setPromoteur(dat);
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
      {promoteur.length > 0 ? (
        <div className="tab">          
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:18}}> Promoteurs</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nom associé</StyledTableCell>
                    <StyledTableCell>Téléphone</StyledTableCell>
                    <StyledTableCell>Nationalité</StyledTableCell>
                    <StyledTableCell>Diplômes</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Expériences</StyledTableCell>
                    <StyledTableCell>Capital détenu</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {promoteur.map((item, index) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                          
                              <TableCell>{item.accosie}</TableCell>
                              <TableCell>{item.telephone}</TableCell>
                              <TableCell>{item.nationalite}</TableCell>
                              <TableCell>{item.diplome}</TableCell>
                              <TableCell>{item.experience}</TableCell>
                              <TableCell>{item.capital}</TableCell>
                              <TableCell>
                                <div className="delete">
                                  <div className="edit">
                                    <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                                  </div>
                                  <div className="delet">
                                    <DeleteIcon onClick={() => deletePromoteur(item.docIdd)} />
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
                    <StyledTableCell>Nom associé</StyledTableCell>
                    <StyledTableCell>Téléphone</StyledTableCell>
                    <StyledTableCell>Nationalité</StyledTableCell>
                    <StyledTableCell>Diplômes</StyledTableCell>
                    <StyledTableCell style={{minWidth:200}}>Expériences</StyledTableCell>
                    <StyledTableCell>Capital détenu</StyledTableCell>
                    <StyledTableCell style={{ maxWidth: 60 }}>Action</StyledTableCell>
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
                          <TableCell>.......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
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
        <p>Promoteurs </p>
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
          onSubmit={editPromoteur}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="accosie"
              label="accosie accomplies"
              name="accosie"
              autoComplete="accosie"
              autoFocus
              multiline
              rowsMin={4}
              value={credentital.accosie}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="telephone"
              label="telephones"
              name="telephone"
              autoFocus
              multiline
              value={credentital.telephone}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nationalite"
              label="nationalite"
              name="nationalite"
              autoFocus
              value={credentital.nationalite}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="diplome"
              label="diplome"
              name="diplome"
              autoFocus
              value={credentital.diplome}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="experience"
              label="experience"
              name="experience"
              autoFocus
              value={credentital.experience}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="capital"
              label="capital"
              name="capital"
              type="number"
              autoFocus
              value={credentital.capital}
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
                id="accosie"
                label="accosie accomplies"
                name="accosie"
                autoComplete="accosie"
                autoFocus
                multiline
                rowsMin={4}
                value={credentital.accosie}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="telephone"
              label="telephones"
              name="telephone"
              autoFocus
              multiline
              value={credentital.telephone}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nationalite"
              label="nationalite"
              name="nationalite"
              autoFocus
              value={credentital.nationalite}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="diplome"
              label="diplome"
              name="diplome"
              autoFocus
              value={credentital.diplome}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="experience"
              label="experience"
              name="experience"
              autoFocus
              value={credentital.experience}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="capital"
              label="capital"
              name="capital"
              type="number"
              autoFocus
              value={credentital.capital}
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

export default Chapitreone;
