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
    ciblage: "",
    segmentation: "",
    positionnement: "",
  };
  const editObject = {
    ciblage: "",
    segmentation: "",
    positionnement: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [strategy, setStrategy] = React.useState([]);
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
    setEditTable(strategy[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editStrategy = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("strategy-marketing")
      .doc(idDoc)
      .set(
        {
          ciblage: editTable.ciblage,
          segmentation: editTable.segmentation,
          positionnement: editTable.positionnement,
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
  const deleteStrategy = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("strategy-marketing")
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
      .collection("strategy-marketing")
      .add({
          ciblage: credentital.ciblage,
          segmentation: credentital.segmentation,
          positionnement: credentital.positionnement,
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
      .collection("strategy-marketing")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            ciblage: doc.data().ciblage,
            segmentation: doc.data().segmentation,
            positionnement: doc.data().positionnement,
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
                <th>Segmentation</th>
                <th>Ciblage </th>
                <th>Positionnement </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {strategy.map((item, index) => {
              return (
                <>
                    <tr key={index}>
                      <td>{item.segmentation}</td>
                      <td>{item.ciblage}</td>
                      <td>{item.positionnement}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteStrategy(item.docIdd)} />
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
          <h3>Nos strategys</h3>
          <table>
            <thead>
              <tr>
                <th>Segmentation</th>
                <th>Ciblage </th>
                <th>Positionnement </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {strategy.length <= 0 ? (
              <p>Cette partie est vide </p>
              ) :(
                <p>Notre strategie Marketing </p>
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
          onSubmit={editStrategy}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="segmentation"
              label="Segmentation"
              name="segmentation"
              autoComplete="segmentation"
              autoFocus
              value={editTable.segmentation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ciblage"
              label="Ciblage"
              name="ciblage"
              autoFocus
              value={editTable.ciblage}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="positionnement"
              label="Positionnement"
              name="positionnement"
              autoFocus
              value={editTable.positionnement}
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
              id="segmentation"
              label="Segmentation"
              name="segmentation"
              autoComplete="segmentation"
              autoFocus
              value={credentital.segmentation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ciblage"
              label="Ciblage"
              name="ciblage"
              autoFocus
              value={credentital.ciblage}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="positionnement"
              label="Positionnement"
              name="positionnement"
              autoFocus
              value={credentital.positionnement}
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
