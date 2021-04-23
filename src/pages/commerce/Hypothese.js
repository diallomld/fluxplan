import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Hypothese = () => {
  const initialState = {
    produit: "",
    quantite: "",
    prix: "",
    montant: "",
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
    const { produit, quantite, prix, montant } = credentital;
    if (produit === "") {
      return alert("produit est obligatoire");
    }
    if (prix === "") {
      return alert("prix est obligatoire");
    }
    if (montant === "") {
      return alert("montant est obligatoire");
    }
    if (quantite === "") {
      return alert("quantite est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      produit: "",
      quantite: "",
      prix: "",
      montant: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3>Hypothèses</h3>
          </div>
          <div>
            <p className="text-p">
              Achats périodiques (sans le financement) Périodicité des achats :
              (mois, trimestre, semestre, année) Fréquence d’achats/mois :
              Fréquence d’achats/an
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
                id="prix"
                label="Prix achat unitaire"
                name="prix"
                autoComplete="prix"
                autoFocus
                value={credentital.prix}
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

export default Hypothese;
