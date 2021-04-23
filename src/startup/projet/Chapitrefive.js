import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitrefive.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitrefive = () => {
  const initialState = {
    vision: "",
    objectif: "",
    mission: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [mission, setMission] = React.useState([]);
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
    console.log("id "+id);
    setShow(!show);
    if(show){
      setIdDoc("");
      console.log('modif handle no ' +idDoc + show);
    }else{
      setIdDoc(id);
      console.log('modif handle yes ' +idDoc + show);
    }
  };
  const editMission = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("mission-vision-objectif")
      .doc(idDoc)
      .set(
        {
          mission: credentital.mission,
          vision: credentital.vision,
          objectif: credentital.objectif,
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
  const deleteHistorique = (id) => {
    firebasee
      .firestore()
      .collection("mission-vision-objectif")
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
      .collection("mission-vision-objectif")
      .add({
        mission: credentital.mission,
        vision: credentital.vision,
        objectif: credentital.objectif,
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
      .collection("mission-vision-objectif")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            mission: doc.data().mission,
            vision: doc.data().vision,
            objectif: doc.data().objectif,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setMission(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  console.log("pro");
  console.log(mission);
  return (
    <div className="chapitretwo">
      {mission.length > 0 ? (
        <div className="tab">
          <table>
            <tr>
              <th>Mission</th>
              <th>Vision</th>
              <th>Objectifs</th>
              <th>Action</th>
            </tr>
            {mission.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.mission}</td>
                    <td>{item.vision}</td>
                    <td>{item.objectif}</td>
                    <td>
                      <div className="delete">
                          <div className="edit">
                            <EditIcon onClick={() => handleModif(item.docIdd)} />
                          </div>
                          <div className="delet">
                            <DeleteIcon onClick={() => deleteHistorique(item.docIdd)} />
                          </div>
                        </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="tab">
          <h3>exemple</h3>
          <table>
            <tr>
              <th>Mission</th>

              <td>..................</td>
            </tr>
            <tr>
              <th>Vision</th>
              <td>..................</td>
            </tr>

            <tr>
              <th>Objectifs</th>
              <td>..................</td>
            </tr>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Mission, Vision et Objectifs </p>
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
          onSubmit={editMission}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              rowsMin={4}
              id="mission"
              label="Mission"
              name="mission"
              autoComplete="mission"
              autoFocus
              multiline
              value={credentital.mission}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              rowsMin={4}
              id="objectif"
              label="Objectifs"
              name="objectif"
              autoFocus
              multiline
              value={credentital.objectif}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              rowsMin={4}
              id="vision"
              label="Visions"
              name="vision"
              multiline
              autoFocus
              value={credentital.vision}
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
              rowsMin={4}
              id="mission"
              label="Mission"
              name="mission"
              autoComplete="mission"
              autoFocus
              multiline
              value={credentital.mission}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              rowsMin={4}
              id="objectif"
              label="Objectifs"
              name="objectif"
              autoFocus
              multiline
              value={credentital.objectif}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              rowsMin={4}
              id="vision"
              label="Visions"
              name="vision"
              multiline
              autoFocus
              value={credentital.vision}
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

export default Chapitrefive;
