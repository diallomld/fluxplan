import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Chapitreone.css";
const Chapitresixm = () => {
  const initialState = {
    nom: "",
    localisation: "",
    produit: "",
    motif: "",
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
          <th>Nom prescripteur</th>
          <td>Localisation </td>
          <td>Produits </td>
          <th>Motifs</th>
        </tr>

        <tr>
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
        </tr>
      </table>
      <div className="chapitretwo-title">
        <p>Prescripteurs</p>
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
              label="Nom prescripteur"
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
              id="localisation"
              label="Localisation "
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
              label="Produits"
              name="produit"
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
              id="motif"
              label="Motifs"
              name="motif"
              autoFocus
              value={credentital.motif}
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

export default Chapitresixm;
