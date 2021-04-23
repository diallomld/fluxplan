import { Button, TextField } from "@material-ui/core";
import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Justification.css";
const Justification = () => {
  const initialState = {
    designation: "",
    prix: "",
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
    const { designation, prix, quantite } = credentital;
    if (designation === "") {
      return alert("designation est obligatoire");
    }
    if (prix === "") {
      return alert("prix est obligatoire");
    }
    if (quantite === "") {
      return alert("quantite est obligatoire");
    }
    console.log(designation, prix, quantite);
    alert("Ajouté");
    setCredentital({
      designation: "",
      prix: "",
      quantite: "",
    });
  };
  return (
    <div className="justification">
      <div className="table">
        <h5 style={{ fontSize: 10 }}>exemple</h5>
        <table>
          <tr>
            <th>Designation</th>
            <th>Quantite</th>
            <th>Prix u</th>
            <th>Montant</th>
          </tr>

          <tr>
            <td>produit1</td>
            <td>20</td>
            <td>15</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>produit2</td>
            <td>44</td>
            <td>50</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>produit3</td>
            <td>30</td>
            <td>10</td>
            <td>2500</td>
          </tr>

          <tr>
            <th>total</th>
            <td>123</td>
            <td>200</td>
            <td>300</td>
          </tr>
        </table>
      </div>
      <div className="text">
        <div className="text-h">
          <h3> Justification du financement sollicité</h3>
        </div>
        <div>
          <p className="text-p">
            Dites nous en quoi servira votre financement en ajoutant la
            designation,le prix et la quantité.Vous pouvez ajoutez autant que
            vous voulez
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
              label="designation"
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
              label="quantite"
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
              label="prix unitaire"
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
  );
};

export default Justification;
