import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitretwoe = () => {
  const initialState = {
    nom: "",
    poste: "",
    diplome: "",
    experience: "",
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

    alert("Ajouté");
  };
  return (
    <div className="chapitretwo">
      <h3>exemple</h3>
      <table>
        <tr>
          <th>Nom et prénoms </th>
          <th>Diplômes</th>
          <th>Expériences</th>
          <th>Poste</th>
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

        <tr>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>L’équipe dirigeante</p>
      </div>
      <div className="plus">
        {!show && (
          <Button className="plus-icon" onClick={() => setShow(!show)}>
            Ajouter
          </Button>
        )}
      </div>
      <div>
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

            <Button
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
  );
};

export default Chapitretwoe;
