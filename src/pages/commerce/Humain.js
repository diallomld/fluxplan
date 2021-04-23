import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Humain = () => {
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
            <h3>Moyens humains</h3>
          </div>
          <div>
            <p className="text-p">
              …..dispose d’un effectif de …personnes pour la bonne marche de son
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
                id="poste"
                label="Poste"
                name="poste"
                autoComplete="poste"
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
                id="nombre"
                label="Nombre"
                name="nombre"
                autoFocus
                value={credentital.nombre}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="salaire "
                label="Salaire mensuel"
                name="salaire"
                autoComplete="salaire"
                autoFocus
                value={credentital.salaire}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="montant"
                label="Montant"
                name="montant"
                autoComplete="montant"
                autoFocus
                value={credentital.montant}
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

export default Humain;
