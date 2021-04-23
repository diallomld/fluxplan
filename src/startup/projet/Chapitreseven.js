import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreseven.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitreseven = () => {
  const initialState = {
    action: "",
    responsable: "",
    date: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [avancement, setAvancement] = React.useState([]);
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
  const editEtat = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("etat-avancement")
      .doc(idDoc)
      .set(
        {
          action: credentital.action,
          responsable: credentital.responsable,
          date: credentital.date,
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
  const deleteEtat = (id) => {
    firebasee
      .firestore()
      .collection("etat-avancement")
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
      .collection("etat-avancement")
      .add({
        action: credentital.action,
        responsable: credentital.responsable,
        date: credentital.date,
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
      .collection("etat-avancement")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            action: doc.data().action,
            responsable: doc.data().responsable,
            date: doc.data().date,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setAvancement(dat);
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
      {avancement.length > 0 ? (
        <div className="tab">
          <table>
            <tr>
              <th>Action</th>
              <th>Responsable</th>
              <th>Objectifs</th>
              <th>Action</th>
            </tr>
            {avancement.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.action}</td>
                    <td>{item.responsable}</td>
                    <td>{item.date}</td>
                    <td>
                      <div className="delete">
                          <div className="edit">
                            <EditIcon onClick={() => handleModif(item.docIdd)} />
                          </div>
                          <div className="delet">
                            <DeleteIcon onClick={() => deleteEtat(item.docIdd)} />
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
        <p>Etat d’avancement du projet </p>
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
          onSubmit={editEtat}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="action"
              label="Action accomplies"
              name="action"
              autoComplete="action"
              autoFocus
              multiline
              rowsMin={4}
              value={credentital.action}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="responsable"
              label="responsables"
              name="responsable"
              autoFocus
              multiline
              value={credentital.responsable}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              type="date"
              autoFocus
              value={credentital.date}
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
              id="action"
              label="Action"
              name="action"
              autoComplete="action"
              autoFocus
              multiline
              rowsMin={4}
              value={credentital.action}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="responsable"
              label="Responsable"
              name="responsable"
              autoFocus
              multiline
              rowsMin={4}
              value={credentital.responsable}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              type="date"
              autoFocus
              value={credentital.date}
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

export default Chapitreseven;
