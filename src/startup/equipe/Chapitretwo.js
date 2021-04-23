import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitretwo = () => {
  const initialState = {
    nom: "",
    poste: "",
    diplome: "",
    experience: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [equipe, setEquipe] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  
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
  const editEquipe = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("equipe")
      .doc(idDoc)
      .set(
        {
          nom: credentital.nom,
          poste: credentital.poste,
          diplome: credentital.diplome,
          experience: credentital.experience,
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
  const deleteEquipe = (id) => {
    firebasee
      .firestore()
      .collection("equipe")
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
      .collection("equipe")
      .add({
        nom: credentital.nom,
        poste: credentital.poste,
        diplome: credentital.diplome,
        experience: credentital.experience,
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
      .collection("equipe")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nom: doc.data().nom,
            poste: doc.data().poste,
            diplome: doc.data().diplome,
            experience: doc.data().experience,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setEquipe(dat);
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
      {equipe.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <th>Nom et prénoms</th>
              <th>Diplômes</th>
              <th>Expériences</th>
              <th>Poste</th>
              <th>Action</th>
            </thead>
            {equipe.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{item.nom}</td>
                      <td>{item.diplome}</td>
                      <td>{item.experience}</td>
                      <td>{item.poste}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteEquipe(item.docIdd)} />
                            </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="tab">
          <h3>Equipes dirigentes</h3>
          <table>
            <thead>
              <tr>
              <th>Nom et prénoms </th>
              <th>Diplômes</th>
              <th>Expériences</th>
              <th>Poste</th>
              </tr>
            </thead>
            <tbody>

                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Equipes dirigentes </p>
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
          onSubmit={editEquipe}
        >
          <div className="input">
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nom"
                label="Nom et prénoms"
                name="nom"
                autoComplete="nom"
                autoFocus
                value={credentital.nom}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
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
                id="diplome"
                label="Diplômes"
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
                label="Expériences"
                name="experience"
                autoFocus
                value={credentital.experience}
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
                id="nom"
                label="Nom et prénoms"
                name="nom"
                autoComplete="nom"
                autoFocus
                value={credentital.nom}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
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
                id="diplome"
                label="Diplômes"
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
                label="Expériences"
                name="experience"
                autoFocus
                value={credentital.experience}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />

          </div>
            <Button
                type="submit"
                className="btn"
                onClick={() => setShow(!show)}
              >
                Ajouter
            </Button>
        </form>
        )}
      </div>
    </div>
  );
};

export default Chapitretwo;
