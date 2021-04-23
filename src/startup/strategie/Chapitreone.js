import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitreones = () => {
  const initialState = {
    ciblage: "",
    segmentation: "",
    positionnement: "",
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
          <th>Segmentation</th>
          <th>..........................</th>
        </tr>

        <tr>
          <td>Ciblage</td>
          <td>..........................</td>
        </tr>
        <tr>
          <td>Positionnement</td>
          <td>..........................</td>
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>Stratégie Marketing</p>
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
              id="segmentation"
              label="Segmentation"
              name="segmentation"
              autoComplete="segmentation"
              autoFocus
              value={credentital.segmentation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ciblage"
              label="Ciblage"
              name="ciblage"
              autoFocus
              value={credentital.ciblage}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="positionnement"
              label="Positionnement"
              name="positionnement"
              autoFocus
              value={credentital.positionnement}
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

export default Chapitreones;
