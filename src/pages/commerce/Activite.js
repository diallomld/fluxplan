import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Activite.css";
const Activite = () => {
  const initialState = {
    activite: "",
    produit: "",
    succint: "",
    juridique: "",
    localisation: "",
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
    const { activite, produit, succint, juridique, localisation } = credentital;
    if (activite === "") {
      return alert("activite est obligatoire");
    }
    if (produit === "") {
      return alert("produit est obligatoire");
    }
    if (succint === "") {
      return alert("succint est obligatoire");
    }
    if (juridique === "") {
      return alert("juridique est obligatoire");
    }
    if (localisation === "") {
      return alert("localisation est obligatoire");
    }
    if (localisation === "") {
      return alert("localisation est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      activite: "",
      produit: "",
      succint: "",
      juridique: "",
      localisation: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3> PRESENTATION DE L’ACTIVITE</h3>
          </div>
          <div>
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
                id="activite"
                label="Description de l’activité"
                name="activite"
                autoComplete="activite"
                autoFocus
                value={credentital.activite}
                onChange={handleChange}
                style={{ width: 300, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="produit"
                label="Produits/Services"
                name="produit"
                autoFocus
                value={credentital.produit}
                onChange={handleChange}
                style={{ width: 300, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="succinct "
                label="Historique succinct de l’activité"
                name="succinct "
                autoComplete="succinct"
                autoFocus
                value={credentital.succint}
                onChange={handleChange}
                style={{ width: 300, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="juridique"
                label="Forme juridique"
                name="juridique"
                autoComplete="juridique"
                autoFocus
                value={credentital.juridique}
                onChange={handleChange}
                style={{ width: 300, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="localisation"
                label="Localisation de l’activité"
                name="localisation"
                autoComplete="localisation"
                autoFocus
                value={credentital.localisation}
                onChange={handleChange}
                style={{ width: 300, marginRight: 10 }}
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
