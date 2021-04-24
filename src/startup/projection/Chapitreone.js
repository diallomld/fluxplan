import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitreone = () => {
  const initialState = {
    elements: "",
    montant: "",
  };
  const editObject = {
    elements: "",
    montant: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [cout, setCout] = React.useState([]);
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
  const handleModif = (id,index) => {
    setEditTable(cout[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editCout = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("cout-projet")
      .doc(idDoc)
      .set(
        {
          elements: editTable.elements,
          montant: editTable.montant,
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
  const deleteCout = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("cout-projet")
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
      .collection("cout-projet")
      .add({
          elements: credentital.elements,
          montant: credentital.montant,
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
      .collection("cout-projet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            elements: doc.data().elements,
            montant: doc.data().montant,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setStrategy(dat);
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
      {strategy.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Elements </th>
                <th>Montant</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {strategy.map((item, index) => {
              return (
                <>
                    <tr key={index}>
                      <td>{item.elements}</td>
                      <td>{item.montant}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteCout(item.docIdd)} />
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
          <h3>Cout total du projet</h3>
          <table>
            <thead>
              <tr>
                <th>montant</th>
                <th>elements </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
              </tr>
              <tr>
                <td>...............</td>
                <td>...............</td>
                <td>...............</td>
              </tr>
            </tbody>
            <tfoot>
              <th>Total Investissements</th>
              <th>1000000 FCA</th>
            </tfoot>
          </table>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {strategy.length <= 0 ? (
              <p>Cette partie n'a pas encore été remplit </p>
              ) :(
                <p>Cout du Projet </p>
              )
          }
        </div>
        <div className="plus">
          {!show && (
            <Button className="plus-icon" onClick={() => setShow(!show)}>
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
          onSubmit={editCout}
        >
          <div className="input">
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="elements"
              label="elements"
              name="elements"
              autoFocus
              multiline
              rows="5"
              value={editTable.elements}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="montant"
              label="montant"
              name="montant"
              autoComplete="montant"
              type="number"
              InputLabelProps= {{
                shrink: true,
              }}
              autoFocus
              value={editTable.montant}
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
              id="elements"
              label="elements"
              name="elements"
              autoFocus
              multiline
              rows="4"
              value={credentital.elements}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="montant"
              label="montant"
              name="montant"
              autoComplete="montant"
              type="number"
              InputLabelProps= {{
                shrink: true,
              }}
              autoFocus
              value={credentital.montant}
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

export default Chapitreone
