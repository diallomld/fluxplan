import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitretwom = () => {
  const initialState = {
    cible: "",
    description: "",
    localisation: "",
    produit: "",
    mode: "",
    delai: "",
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
          <th>Client cible </th>
          <td>Description </td>
          <td>Localisation </td>
          <th>Produits / Services</th>
          <th>Mode de règlement</th>
          <th>Délais de règlement</th>
        </tr>

        <tr>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
          <td>..................</td>
        </tr>
        <tr>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
          <td>...............</td>
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>Segments de Clients </p>
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
              Ajouter
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chapitretwom;
