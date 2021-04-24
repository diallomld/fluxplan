import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitretwo = () => {
  const initialState = {
    produit: "",
    prix: "",
    distribution: "",
    communication: "",
  };
  const editObject = {
    produit: "",
    prix: "",
    distribution: "",
    communication: "",
  };
  const { userId } = useGlobalContext();
  let [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [mix, setMix] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);

  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
    setEditTable({
      ...editTable,
      [name]: value,
    });
  };
  const handleModif = (id, index) => {
    setEditTable(mix[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const add = () => {
    setShow(!show)
  }
  const editMix = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("mix-marketing")
      .doc(idDoc)
      .set(
        {
          produit: editTable.produit,
          prix: editTable.prix,
          distribution: editTable.distribution,
          communication: editTable.communication,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        setLoad(false)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteMix = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("mix-marketing")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted")
        setLoad(false)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const handleSubmit = (e) => {
    setLoad(true)
    e.preventDefault();
    firebasee
      .firestore()
      .collection("mix-marketing")
      .add({
          produit: credentital.produit,
          prix: credentital.prix,
          distribution: credentital.distribution,
          communication: credentital.communication,
          userId: userId,
      })
      .then(() => {
        console.log("add");
        setLoad(false)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    //alert("segment marché Ajouté");
  };
  const getDate = () => {
    //setLoad(true)
    return firebasee
      .firestore()
      .collection("mix-marketing")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            produit: doc.data().produit,
            prix: doc.data().prix,
            distribution: doc.data().distribution,
            communication: doc.data().communication,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setMix(dat);
        //setLoad(false)
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
      {mix.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Politique de produit</th>
                <th>Politique de prix</th>
                <th>Politique de distribution</th>
                <th>Politique de communication</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {mix.map((item, index) => {
              return (
                <>
                    <tr key={index}>
                      <td>{item.produit}</td>
                      <td>{item.prix}</td>
                      <td>{item.distribution}</td>
                      <td>{item.communication}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteMix(item.docIdd)} />
                            </div>
                          </div>
                      </td>
                    </tr>
                </>
              );
            })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="tab">
          <h3>Nos mixs</h3>
          <table>
            <thead>
              <tr>
                <th>Politique de produit</th>
                <th>Politique de prix</th>
                <th>Politique de distribution</th>
                <th>Politique de communication</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
              </tr>
              <tr>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {mix.length <= 0 ? (
              <p>Cette partie est vide </p>
              ) :(
                <p>Notre strategie de Marketing MIX </p>
              )
          }
        </div>
        <div className="plus">
          {!show && (
            <Button className="plus-icon" onClick={add}>
              Ajouter
            </Button>
          )}
        </div>
        </>
        )}
      <div>
        { idDoc ? (
        <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editMix}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="produit"
              label="Politique de produit"
              name="produit"
              autoComplete="produit"
              autoFocus
              multiline
              value={editTable.produit}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="prix"
              label="Politique de prix"
              name="prix"
              autoFocus
              multiline
              value={editTable.prix}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="distribution"
              label="Politique de distribution"
              name="distribution"
              autoFocus
              multiline
              value={editTable.distribution}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="communication"
              label="ploitique decommunication"
              name="communication"
              autoFocus
              multiline
              value={editTable.communication}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
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
              id="produit"
              label="Politique de produit"
              name="produit"
              autoComplete="produit"
              autoFocus
              multiline
              value={credentital.produit}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="prix"
              label="Politique de prix"
              name="prix"
              autoFocus
              multiline
              value={credentital.prix}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="distribution"
              label="Politique de distribution"
              name="distribution"
              autoFocus
              multiline
              value={credentital.distribution}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="communication"
              label="politique decommunication"
              name="communication"
              autoFocus
              multiline
              value={credentital.communication}
              onChange={handleChange}
              style={{ width: 250, marginRight: 10 }}
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

export default Chapitretwo
