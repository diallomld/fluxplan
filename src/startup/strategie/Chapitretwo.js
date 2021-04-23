import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitretwos = () => {
  const initialState = {
    produit: "",
    prix: "",
    distribution: "",
    communication: "",
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
          <th>Politique de produit</th>
          <th>..........................</th>
        </tr>

        <tr>
          <td>Politique de prix</td>
          <td>..........................</td>
        </tr>
        <tr>
          <td>Politique de distribution</td>
          <td>..........................</td>
        </tr>
        <tr>
          <td>Politique de communication</td>
          <td>..........................</td>
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
              id="produit"
              label="Politique de produit"
              name="produit"
              autoComplete="produit"
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
              id="prix"
              label="Politique de prix"
              name="prix"
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
              id="distrubition"
              label="Politique de distribution"
              name="distrubition"
              autoFocus
              value={credentital.distribution}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="politique"
              label="Politique de communication"
              name="politique"
              autoFocus
              value={credentital.politique}
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

export default Chapitretwos;
