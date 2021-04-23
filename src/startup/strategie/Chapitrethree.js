import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitrethrees = () => {
  const initialState = {
    objectif: "",
    action: "",
    responsable: "",
    delai: "",
    budget: "",
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
          <th>Objectifs</th>
          <th>Actions</th>
          <th>Responsable</th>
          <th>Délai</th>
          <th>Budget</th>
        </tr>

        <tr>
          <td>................</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
        </tr>
        <tr>
          <td>................</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
        </tr>
        <tr>
          <td>................</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>Marketing Mix</p>
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
              id="objectif"
              label="Objectifs"
              name="objectif"
              autoComplete="objectif"
              autoFocus
              value={credentital.objectif}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="action"
              label="Actions"
              name="action"
              autoFocus
              value={credentital.action}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="responsable"
              label="Responsable"
              name="responsable"
              autoFocus
              value={credentital.responsable}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="delai"
              label="Délai"
              name="delai"
              autoFocus
              value={credentital.delai}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="budget"
              label="Budget"
              name="budget"
              autoFocus
              value={credentital.budget}
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

export default Chapitrethrees;
