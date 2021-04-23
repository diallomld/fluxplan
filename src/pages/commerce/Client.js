import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Activite = () => {
  const initialState = {
    nom: "",
    localisation: "",
    produit: "",
    mode: "",
    delai: "",
    livraison: "",
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
    const { nom, localisation, produit, mode, delai, livraison } = credentital;
    if (nom === "") {
      return alert("nom est obligatoire");
    }
    if (localisation === "") {
      return alert("localisation est obligatoire");
    }
    if (produit === "") {
      return alert("produit est obligatoire");
    }
    if (mode === "") {
      return alert("mode est obligatoire");
    }
    if (delai === "") {
      return alert("delai est obligatoire");
    }
    if (livraison === "") {
      return alert("livraison est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      nom: "",
      localisation: "",
      produit: "",
      mode: "",
      delai: "",
      livraison: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3> Clients</h3>
          </div>
          <div>
            <p className="text-p">Parlez nous de vos clients</p>
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
                id="nom"
                label="Nom du client"
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
                id="produit "
                label="Produits vendus"
                name="produit "
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
                id="mode"
                label="Mode de règlement"
                name="mode"
                autoComplete="mode"
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
                label="Délai de règlement"
                name="delai"
                autoComplete="delai"
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
                id="livraison"
                label="Délai de livraison"
                name="livraison"
                autoComplete="livraison"
                autoFocus
                value={credentital.livraison}
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
