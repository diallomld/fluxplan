import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Projection.css";
const Projection = () => {
  const initialState = {
    charge: "",
    chiffre: "",
    charge1: "",
    chiffre1: "",
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
    const { charge, chiffre, charge1, chiffre1 } = credentital;
    if (charge === "") {
      return alert("les champs doivent etre rempli");
    }
    if (chiffre === "") {
      return alert("les champs doivent etre rempli");
    }
    if (charge1 === "") {
      return alert("les champs de la deuxiéme année doivent étre rempli");
    }
    if (chiffre1 === "") {
      return alert("les champs de la deuxiéme année doivent étre rempli");
    }

    alert("Ajouté");
    setCredentital({
      charge: "",
      chiffre: "",
      charge1: "",
      chiffre1: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div>
          <h5 style={{ fontSize: 10 }}>exemple</h5>
          <table>
            <tr>
              <th style={{ fontSize: 18, fontWeight: "bold" }}>Designation</th>
              <th>Annee 1</th>
              <th>Annee 2</th>
            </tr>
            <tr>
              <th style={{ fontSize: 14, fontWeight: "400" }}>
                Chiffre d'affairs
              </th>
              <td>3000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th style={{ fontSize: 14, fontWeight: "400" }}>Charges</th>
              <td>4900</td>
              <td>10000</td>
            </tr>
            <tr>
              <th style={{ fontSize: 14, fontWeight: "400" }}>Resultat net</th>
              <td>4900</td>
              <td>10000</td>
            </tr>
          </table>
        </div>
        <div className="text">
          <div className="text-h">
            <h3> Projection financiere</h3>
          </div>
          <div>
            <p className="text-p">
              Dites nous vos projections financiere en 2 ans , ce que vous
              gagner c'est a dire chiffres d'affaires charges et resultat net
            </p>
            <div className="plus">
              {!show && (
                <Button className="plus-icon" onClick={() => setShow(!show)}>
                  Ajouter
                </Button>
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={handleSubmit}
            >
              <div className="input">
                <label>Annee 1</label>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="chiffre"
                  label="chiffre d'affaire"
                  name="chiffre"
                  autoComplete="chiffre"
                  onChange={handleChange}
                  autoFocus
                  value={credentital.chiffre}
                  //   onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="charge"
                  label="charges "
                  name="charge"
                  autoComplete="charge"
                  onChange={handleChange}
                  autoFocus
                  value={credentital.charge}
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
            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={handleSubmit}
            >
              <div className="input">
                <label>Annee 2</label>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="chiffre1"
                  label="chiffre d'affaire"
                  name="chiffre1"
                  autoComplete="chiffre1"
                  onChange={handleChange}
                  autoFocus
                  value={credentital.chiffre1}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="charge1"
                  label="charges "
                  name="charge1"
                  autoComplete="charge1"
                  onChange={handleChange}
                  value={credentital.charge1}
                  autoFocus
                  //   onChange={handleChange}
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
    </div>
  );
};

export default Projection;
