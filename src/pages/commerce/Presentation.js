import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Presentation.css";
const Presentation = () => {
  const initialState = {
    nom: "",
    age: "",
    sexe: "",
    annee: "",
    enfant: "",
    lieu: "",
    telephone: "",
    situation: "",
    nationalite: "",
    etude: "",
  };
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      nom,
      age,
      sexe,
      annee,
      etude,
      situation,
      lieu,
      enfant,
      telephone,
      nationalite,
    } = credentital;
    if (nom === "") {
      return alert("nom est obligatoire");
    }
    if (age === "") {
      return alert("age est obligatoire");
    }
    if (sexe === "") {
      return alert("sexe est obligatoire");
    }
    if (annee === "") {
      return alert("annee est obligatoire");
    }
    if (etude === "") {
      return alert("etude est obligatoire");
    }
    if (situation === "") {
      return alert("situation est obligatoire");
    }
    if (lieu === "") {
      return alert("lieu est obligatoire");
    }
    if (enfant === "") {
      return alert("enfant est obligatoire");
    }
    if (telephone === "") {
      return alert("telephone est obligatoire");
    }
    if (nationalite === "") {
      return alert("nationalite est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      nom: "",
      age: "",
      sexe: "",
      annee: "",
      enfant: "",
      lieu: "",
      telephone: "",
      situation: "",
      nationalite: "",
      etude: "",
    });
  };
  return (
    <div style={{ marginTop: show ? 200 : 100 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h" style={{ marginTop: 20 }}>
            <h3> PRESENTATION DU PROMOTEUR</h3>
          </div>
          <div>
            <p className="text-p">Des informations sur le promoteur</p>
            <div className="plus">
              {!show && (
                <Button className="plus-icon" onClick={() => setShow(!show)}>
                  Ajouter
                </Button>
              )}
            </div>
          </div>

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
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="sexe"
                label="Sexe"
                name="sexe"
                autoFocus
                value={credentital.sexe}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                autoFocus
                value={credentital.age}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nationalite"
                label="Nationalité"
                name="nationalite"
                autoComplete="nationalite"
                autoFocus
                value={credentital.nationalite}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="situation"
                label="Situation matrimoniale "
                name="situation"
                autoComplete="situation"
                autoFocus
                value={credentital.situation}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="enfant"
                label="Nombre d’enfants"
                name="enfant"
                autoComplete="enfant"
                autoFocus
                value={credentital.enfant}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="Téléphone"
                name="telephone"
                autoComplete="telephone"
                autoFocus
                value={credentital.telephone}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="etude"
                label="Niveau d’étude"
                name="etude"
                autoComplete="etude"
                autoFocus
                value={credentital.etude}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="annee"
                label="Nbrs (an) d’expériences prof"
                name="annee"
                autoComplete="annee"
                autoFocus
                value={credentital.annee}
                onChange={handleChange}
                style={{ width: 150, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lieu"
                label="Lieu d'habitation"
                name="lieu"
                autoComplete="lieu"
                autoFocus
                value={credentital.lieu}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />

              <Button
                type="submit"
                variant="contained"
                type="submit"
                className="btn"
                onClick={() => setShow(!show)}
              >
                Ajouter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
