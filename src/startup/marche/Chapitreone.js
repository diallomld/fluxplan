import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitreonem = () => {
  const initialState = {
    nature: "",
    localisation: "",
    taille: "",
    tendance: "",
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
          <th>Nature du marché </th>
          <th>................</th>
        </tr>

        <tr>
          <td>Localisation du marché</td>
          <td>..................</td>
        </tr>
        <tr>
          <td>Taille du marché </td>
          <td>...............</td>
        </tr>

        <tr>
          <th>Tendance du marché</th>
          <td>...............</td>
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>Analyse du marché </p>
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
              id="nature"
              label="Nature du marché "
              name="nature"
              autoComplete="nature"
              autoFocus
              value={credentital.nature}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="localisation"
              label="Localisation du marché"
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
              id="taille"
              label="Taille du marché "
              name="taille"
              autoFocus
              value={credentital.taille}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="tendance"
              label="Tendance du marché"
              name="tendance"
              autoFocus
              value={credentital.tendance}
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

export default Chapitreonem;
