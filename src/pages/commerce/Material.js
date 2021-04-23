import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Activite = () => {
  const initialState = {
    designation: "",
    prix: "",
    valeur: "",
    quantite: "",
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
    const { designation, prix, valeur, quantite } = credentital;
    if (designation === "") {
      return alert("designation est obligatoire");
    }
    if (prix === "") {
      return alert("prix est obligatoire");
    }
    if (valeur === "") {
      return alert("valeur est obligatoire");
    }
    if (quantite === "") {
      return alert("quantite est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      designation: "",
      prix: "",
      valeur: "",
      quantite: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3>Moyens matériels</h3>
          </div>
          <div>
            <p className="text-p">
              dispose des biens matériels suivants pour l’exercice de son
              activité 
            </p>
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
                id="designation"
                label="Désignation"
                name="designation"
                autoComplete="designation"
                autoFocus
                value={credentital.designation}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="quantite"
                label="Quantité"
                name="quantite"
                autoFocus
                value={credentital.quantite}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="prix "
                label="Prix Unitaire"
                name="prix"
                autoComplete="prix"
                autoFocus
                value={credentital.prix}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="valeur"
                label="Valeur actuelle "
                name="valeur"
                autoComplete="valeur"
                autoFocus
                value={credentital.valeur}
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

export default Activite;
