import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./Client.css";
const Activite = () => {
  const initialState = {
    concurrent: "",
    localisation: "",
    point: "",
    fort: "",
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
    const { concurrent, localisation, point, fort } = credentital;
    if (concurrent === "") {
      return alert("concurrent est obligatoire");
    }
    if (localisation === "") {
      return alert("localisation est obligatoire");
    }
    if (point === "") {
      return alert("point est obligatoire");
    }
    if (fort === "") {
      return alert("fort est obligatoire");
    }

    alert("Ajouté");
    setCredentital({
      concurrent: "",
      localisation: "",
      point: "",
      fort: "",
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      <div className="justification">
        <div style={{ marginTop: show ? 100 : 0 }}></div>
        <div className="text">
          <div className="text-h">
            <h3>Concurrents</h3>
          </div>
          <div>
            <p className="text-p">Quels sont vos concurrents?</p>
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
                id="concurrent"
                label="Nom du concurrent"
                name="concurrent"
                autoComplete="concurrent"
                autoFocus
                value={credentital.concurrent}
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
                id="point "
                label="Points faibles"
                name="point "
                autoComplete="point"
                autoFocus
                value={credentital.point}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="fort"
                label="Points forts"
                name="fort"
                autoComplete="fort"
                autoFocus
                value={credentital.fort}
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
