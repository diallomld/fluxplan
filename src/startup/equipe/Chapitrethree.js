import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitrethree = () => {
  const initialState = {
    nombre: "",
    poste: "",
    profil: "",
    mission: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [personnel, setPersonnel] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleModif = (id) => {
    
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPersonnel = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("personnel")
      .doc(idDoc)
      .set(
        {
          nombre: credentital.nombre,
          poste: credentital.poste,
          profil: credentital.profil,
          mission: credentital.mission,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deletePersonnel = (id) => {
    firebasee
      .firestore()
      .collection("personnel")
      .doc(id)
      .delete()
      .then(() => console.log("deleted"))
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebasee
      .firestore()
      .collection("personnel")
      .add({
        nombre: credentital.nombre,
        poste: credentital.poste,
        profil: credentital.profil,
        mission: credentital.mission,
        userId: userId,
      })
      .then(() => {
        console.log("add");
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("Ajouté");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("personnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nombre: doc.data().nombre,
            poste: doc.data().poste,
            profil: doc.data().profil,
            mission: doc.data().mission,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setPersonnel(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      {personnel.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Poste </th>
                <th>Nombre</th>
                <th>Profil</th>
                <th>Missions et tâches</th>
              </tr>
            </thead>
            {personnel.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{item.poste}</td>
                      <td>{item.nombre}</td>
                      <td>{item.profil}</td>
                      <td>{item.mission}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deletePersonnel(item.docIdd)} />
                            </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="tab">
          <h3></h3>
          <table>
            <thead>
              <tr>
                <th>Poste </th>
                <th>Nombre</th>
                <th>Profil</th>
                <th>Missions et tâches</th>
              </tr>
            </thead>
            <tbody>

                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Le Personnel </p>
      </div>
      <div className="plus">
        {!show && (
          <Button className="plus-icon" onClick={() => setShow(!show)}>
            Ajouter
          </Button>
        )}
      </div>
      <div>
        { idDoc ? (
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editPersonnel}
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
              autoComplete="nombre"
              autoFocus
              type="number"
              value={credentital.nombre}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="profil"
              label="Profil"
              name="profil"
              autoFocus
              value={credentital.profil}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mission"
              label="Missions et tâches"
              name="mission"
              multiline
              autoFocus
              value={credentital.mission}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />

            <Button
              type="submit"
              className="btn"
              onClick={() => setShow(!show)}
            >
              Modifier
            </Button>
          </div>
        </form>
          
        ): (

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
              autoComplete="nombre"
              autoFocus
              type="number"
              value={credentital.nombre}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="profil"
              label="Profil"
              name="profil"
              autoFocus
              value={credentital.profil}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mission"
              label="Missions et tâches"
              name="mission"
              multiline
              autoFocus
              value={credentital.mission}
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
        )}
      </div>
    </div>
  );
};

export default Chapitrethree;
