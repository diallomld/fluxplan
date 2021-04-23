import React from "react";
import "./Chapitrefive.css";
import { Button, TextField } from "@material-ui/core";
const Chapitrefivem = () => {
  const initialState = {
    partenaire: "",
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
    <div className="chapitreone">
      <div className="chapitreone-title">
        <h1>Notre avantage concurrentiel</h1>
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
              id="partenaire"
              label="Besoin ou problème à résoudre"
              name="partenaire"
              autoFocus
              multiline
              value={credentital.partenaire}
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

export default Chapitrefivem;
