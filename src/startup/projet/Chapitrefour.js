import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Chapitrefour.css";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitrefour = () => {
  const initialState = {
    description: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [historique, setHistorique] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  //const [bEdit, setBedit] = React.useState("");

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
  const editHistorique = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("historique")
      .doc(idDoc)
      .set(
        {
          description: credentital.description,
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
      .collection("historique")
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
      .collection("historique")
      .add({
        description: credentital.description,
        userId: userId,
      })
      .then((data) => {
        console.log("add " + data);
      })
      .catch((err) => console.error("erreur" + err));
    setToggle(!toggle);
    alert("Ajouté");
    setIdDoc("");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("historique")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          //setIdDoc(doc.id);
          dat.push({
            description: doc.data().description,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        //console.log("dat " + dat[0].docIdd)
        setHistorique(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  //console.log("ddddd");
  //console.log(produit);
  return (
    <div className="chapitreone">
       {historique.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
            <tr>
              <th>Historique succinct du projet</th>
              <th>Action </th>
            </tr>
            </thead>
            {historique.map((item, index) => {
              return (
                <>
                  <tbody>
                  <tr>
                    <td>{item.description}</td>
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
                  </tbody>
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
              <th>Description historique projet</th>
              <th>..............Action...............</th>
            </tr>
          </table>
        </div>
      )}
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
          onSubmit={editHistorique}
        >
                <div className="chapitreone-title">
                  <h1>Historique succinct du projet</h1>
                </div>
                <div className="input">
                  <TextareaAutosize
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
                    autoFocus
                    value={credentital.description}
                    onChange={handleChange}
                  
                    className="textarea"
                    aria-label="minimum height"
                    rowsMin={7}
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
                  <div className="chapitreone-title">
                    <h1>Historique succinct du projet</h1>
                  </div>
                  <div className="input">
                    <TextareaAutosize
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="description"
                      label="Description"
                      name="description"
                      autoComplete="description"
                      autoFocus
                      value={credentital.description}
                      onChange={handleChange}
                    
                      className="textarea"
                      aria-label="minimum height"
                      rowsMin={7}
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

export default Chapitrefour;