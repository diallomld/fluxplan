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
    objectif: "",
    action: "",
    responsable: "",
    delai: "",
    budget: "",
  };
  const editObject = {
    objectif: "",
    action: "",
    responsable: "",
    delai: "",
    budget: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [planaction, setPlanaction] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [edit, setEdit] = React.useState([]);
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
    setEdit(planaction[index])
    setEditTable(planaction[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPlanaction = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("planaction-commerial")
      .doc(idDoc)
      .set(
        {
          objectif: editTable.objectif,
          action: editTable.action,
          responsable: editTable.responsable,
          delai: editTable.delai,
          budget: editTable.budget,
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
  const deletePlanaction = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("planaction-commerial")
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
      .collection("planaction-commerial")
      .add({
          objectif: credentital.objectif,
          action: credentital.action,
          responsable: credentital.responsable,
          delai: credentital.delai,
          budget: credentital.budget,
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
      .collection("planaction-commerial")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            objectif: doc.data().objectif,
            action: doc.data().action,
            responsable: doc.data().responsable,
            delai: doc.data().delai,
            budget: doc.data().budget,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPlanaction(dat);
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
      {planaction.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Objectifs</th>
                <th>Actions</th>
                <th>Responsable</th>
                <th>Délai</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {planaction.map((item, index) => {
              return (
                <>
                    <tr key={index}>
                      <td>{item.objectif}</td>
                      <td>{item.action}</td>
                      <td>{item.responsable}</td>
                      <td>{item.delai}</td>
                      <td>{item.budget}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deletePlanaction(item.docIdd)} />
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
          <h3>Nos planactions</h3>
          <table>
            <thead>
              <tr>
                <th>Objectifs</th>
                <th>Actions</th>
                <th>Responsable</th>
                <th>Délai</th>
                <th>Budget</th>
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
                <td>...............</td>
              </tr>
              <tr>
                <td>...............</td>
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
          {planaction.length <= 0 ? (
              <p>Cette partie est vide </p>
              ) :(
                <p>Notre strategie de commerial planaction </p>
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
          onSubmit={editPlanaction}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="objectif"
              label="Objectifs"
              name="objectif"
              autoComplete="objectif"
              value={editTable.objectif}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="action"
              label="Actions"
              multiline
              name="action"
              value={editTable.action}
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
              value={editTable.responsable}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="delai"
              label="Délai"
              name="delai"
              value={editTable.delai}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="budget"
              label="Budget"
              name="budget"
              type="number"
              InputLabelProps= {{
                shrink: true,
              }}
              value={editTable.budget}
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
              id="objectif"
              label="Objectifs"
              name="objectif"
              autoComplete="objectif"
              multiline
              autoFocus
              value={credentital.objectif}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="action"
              label="Actions"
              multiline
              name="action"
              autoFocus
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
              value={credentital.responsable}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="delai"
              label="Délai"
              name="delai"
              autoFocus
              value={credentital.delai}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="budget"
              label="Budget"
              name="budget"
              type="number"
              InputLabelProps= {{
                shrink: true,
              }}
              autoFocus
              value={credentital.budget}
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

export default Chapitretwo
