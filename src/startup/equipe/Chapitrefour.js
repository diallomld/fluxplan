import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitretfour = () => {
  const initialState = {
    partenaire: "",
  };
  const { userId, load } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [partenaire, setPartenaire] = React.useState([]);
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
  const editPartenaire = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("partenaire")
      .doc(idDoc)
      .set(
        {
          partenaire: credentital.partenaire,
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
  const deletePartenaire = (id) => {
    firebasee
      .firestore()
      .collection("partenaire")
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
      .collection("partenaire")
      .add({
        partenaire: credentital.partenaire,
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
      .collection("partenaire")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            partenaire: doc.data().partenaire,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setPartenaire(dat);
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
      {partenaire.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Partenaire</th>
                <th>Action</th>
              </tr>
            </thead>
            {partenaire.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{item.partenaire}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deletePartenaire(item.docIdd)} />
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
          <h3>Liste des partenaire</h3>
          <table>
            <thead>
              <tr>
                <th>Partenaire </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

                <tr>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
                <tr>
                  <td>..................</td>
                  <td>..................</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Le partenaire </p>
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
          onSubmit={editPartenaire}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="partenaire"
              label="Partenaires clés"
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
              id="partenaire"
              label="Partenaires clés"
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
                style={{ width: 300}}
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

export default Chapitretfour;
