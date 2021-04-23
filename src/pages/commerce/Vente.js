import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Vente = () => {
  const initialState = {
    produit: "",
    prix: "",
    marge: "",
    quantite: "",
    vente: "",
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
    const { produit, prix, marge, quantite, vente } = credentital;

    if (prix === "") {
      return alert("prix est obligatoire");
    }
    if (produit === "") {
      return alert("produit est obligatoire");
    }
    if (quantite === "") {
      return alert("quantite est obligatoire");
    }
    if (marge === "") {
      return alert("marge est obligatoire");
    }
    if (vente === "") {
      return alert("vente est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      produit: "",
      prix: "",
      marge: "",
      quantite: "",
      vente: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3>Ventes mensuelles moyennes (sans le financement)</h3>
          </div>
          <div>
            <p className="text-p"></p>
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
                id="produit"
                label="Produits"
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
                label="Prix achat unitaire (a)"
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
                id="marge"
                label="Marge unitaire (b"
                name="marge"
                autoComplete="marge"
                autoFocus
                value={credentital.marge}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="vente"
                label="Prix vente unitaire (a+b)"
                name="vente"
                autoComplete="vente"
                autoFocus
                value={credentital.vente}
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

export default Vente;
