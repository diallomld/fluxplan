import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitretwo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitrefour = () => {
  const initialState = {
    nom: "",
    localisation: "",
    produit: "",
    force: "",
    faiblesse: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [concurrent, setConcurrent] = React.useState([]);
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
  const editConcurrent = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("concurrent")
      .doc(idDoc)
      .set(
        {
          nom: credentital.nom,
          localisation: credentital.localisation,
          produit: credentital.produit,
          force: credentital.force,
          faiblesse: credentital.faiblesse,
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
  const deleteConcurrent = (id) => {
    firebasee
      .firestore()
      .collection("concurrent")
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
      .collection("concurrent")
      .add({
          nom: credentital.nom,
          localisation: credentital.localisation,
          produit: credentital.produit,
          force: credentital.force,
          faiblesse: credentital.faiblesse,
          userId: userId,
      })
      .then(() => {
        console.log("add");
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("segment marché Ajouté");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("concurrent")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nom: doc.data().nom,
            localisation: doc.data().localisation,
            produit: doc.data().produit,
            force: doc.data().force,
            faiblesse: doc.data().faiblesse,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setConcurrent(dat);
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
      {concurrent.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Nom Concurrent </th>
                <th>Localisation </th>
                <th>Produits </th>
                <th>Forces</th>
                <th>Faiblesses</th>
                <th>Action</th>
              </tr>
            </thead>
            {concurrent.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{item.nom}</td>
                      <td>{item.localisation}</td>
                      <td>{item.produit}</td>
                      <td>{item.force}</td>
                      <td>{item.faiblesse}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteConcurrent(item.docIdd)} />
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
          <h3>Nos Concurrents</h3>
          <table>
            <thead>
              <tr>
                <th>Nom Concurrent </th>
                <th>Localisation </th>
                <th>Produits </th>
                <th>Forces</th>
                <th>Faiblesses</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>..................</td>
                <td>..................</td>
                <td>..................</td>
                <td>..................</td>
                <td>..................</td>
                <td>..................</td>
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

      <div className="chapitretwo-title">
        <p>Concurrents </p>
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
          onSubmit={editConcurrent}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nom"
              label="Nom Concurrent"
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
              id="localisation"
              label="Localisation"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="force"
              label="Forces "
              name="force"
              autoFocus
              value={credentital.force}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="faiblesse"
              label="Faiblesses"
              name="faiblesse"
              autoFocus
              value={credentital.faiblesse}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="delai"
              label="Délais de règlement"
              name="delai"
              autoFocus
              value={credentital.delai}
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
              label="Nom Concurrent"
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
              id="localisation"
              label="Localisation"
              name="localisation"
              autoFocus
              value={credentital.localisation}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="force"
              label="Forces "
              name="force"
              autoFocus
              value={credentital.force}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="faiblesse"
              label="Faiblesses"
              name="faiblesse"
              autoFocus
              value={credentital.faiblesse}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="delai"
              label="Délais de règlement"
              name="delai"
              autoFocus
              value={credentital.delai}
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

export default Chapitrefour 
