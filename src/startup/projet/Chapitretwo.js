import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Chapitretwo.css";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitretwo = () => {
  const initialState = {
    nom: "",
    description: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [produit, setProduit] = React.useState([]);
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
  const editProduit = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("produitprojet")
      .doc(idDoc)
      .set(
        {
          nom: credentital.nom,
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
  const deleteProduit = (id) => {
    firebasee
      .firestore()
      .collection("produitprojet")
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
      .collection("produitprojet")
      .add({
        nom: credentital.nom,
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
      .collection("produitprojet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          //setIdDoc(doc.id);
          dat.push({
            nom: doc.data().nom,
            description: doc.data().description,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        //console.log("dat " + dat[0].docIdd)
        setProduit(dat);
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
       {produit.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
            <tr>
              <th>nom service</th>
              <th>Description Produit/service</th>
              <th>Action </th>
            </tr>
            </thead>
            {produit.map((item, index) => {
              return (
                <>
                  <tbody>
                  <tr>
                    <td>{item.nom}</td>
                    <td>{item.description}</td>
                    <td>
                    <div className="delete">
                      <div className="edit">
                        <EditIcon onClick={() => handleModif(item.docIdd)} />
                      </div>
                      <div className="delet">
                        <DeleteIcon onClick={() => deleteProduit(item.docIdd)} />
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
              <th>produit ou problème à résoudre</th>
              <th>.............................</th>
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
          onSubmit={editProduit}
        >
          <div className="input">
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nom"
                label="Nom du produit/service"
                name="nom"
                autoComplete="nom"
                autoFocus
                value={credentital.nom}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description du produit/service"
                name="description"
                autoFocus
                value={credentital.description}
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
                id="nom"
                label="Nom du produit/service"
                name="nom"
                autoComplete="nom"
                autoFocus
                value={credentital.nom}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description du produit/service"
                name="description"
                autoFocus
                value={credentital.description}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />

            <Button
              type="submit"
              style={{ borderRadius: 5 + '%'}}
              className="btn plus-icon"
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

export default Chapitretwo;