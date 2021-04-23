import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./Chapitresix.css";
const Chapitresix = () => {
  const initialState = {
    denomination: "",
    nom: "",
    sigle: "",
    juridique: "",
    social: "",
    siege: "",
    capital: "",
    telephone: "",
    courriel: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [produit, setProduit] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [idEdit, setIdEdit] = React.useState("");
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
      console.log('modif handle no ' +idDoc + show);
    }else{
      setIdDoc(id);
      console.log('modif handle yes ' +idDoc + show);
    }
  };
  const editPost = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("statutjuridique")
      .doc(idDoc)
      .set(
        {
          denomination: credentital.denomination,
          sigle: credentital.sigle,
          nom: credentital.nom,
          juridique: credentital.juridique,
          social: credentital.social,
          siege: credentital.siege,
          capital: credentital.capital,
          telephone: credentital.telephone,
          courriel: credentital.courriel,
          userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data edit "+data);
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    //console.log("setIdDoc " + idDoc);
    setIdDoc("");
    //console.log("setIdDoc " + idDoc);
  };
  const deletePost = (id) => {
    firebasee
      .firestore()
      .collection("statutjuridique")
      .doc(id)
      .delete()
      .then(() => console.log("deleted"))
      .catch((err) => console.log(err));
    setToggle(!toggle);
    console.log("setIdDoc " + idDoc)
    setIdDoc("")
    console.log("setIdDoc " + idDoc)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebasee
      .firestore()
      .collection("statutjuridique")
      .add({
        denomination: credentital.denomination,
        sigle: credentital.sigle,
        juridique: credentital.juridique,
        social: credentital.social,
        siege: credentital.siege,
        capital: credentital.capital,
        telephone: credentital.telephone,
        courriel: credentital.courriel,
        nom: credentital.nom,
        userId: userId,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
      console.log("setIdDoc " + idDoc)
    setIdDoc("")
    console.log("setIdDoc " + idDoc)
    setToggle(!toggle);
    alert("Ajouté");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("statutjuridique")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          setIdDoc(doc.id);
          dat.push({
            denomination: doc.data().denomination,
            sigle: doc.data().sigle,
            juridique: doc.data().juridique,
            social: doc.data().social,
            siege: doc.data().siege,
            capital: doc.data().capital,
            telephone: doc.data().telephone,
            courriel: doc.data().courriel,
            nom: doc.data().nom,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setProduit(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  //console.log("id");
  //console.log(idDoc);
  return (
    <div className="chapitretwo">
      {produit.length > 0 ? (
        <div className="tab">
          <table>
            <tr>
              <th>denomination</th>
              <th>nom commercial</th>
              <th>sigle</th>
              <th>juridique</th>

              <th>social</th>
              <th>siege</th>
              <th>capital</th>
              <th>telephone</th>
              <th>courriel</th>
              <th></th>
            </tr>
            {produit.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.denomination}</td>
                    <td>{item.nom}</td>
                    <td>{item.sigle}</td>
                    <td>{item.juridique}</td>
                    <td>{item.social}</td>
                    <td>{item.siege}</td>
                    <td>{item.capital}</td>
                    <td>{item.telephone}</td>
                    <td>{item.courriel}</td>
                    <div className="delete">
                      <div className="edit">
                        <EditIcon onClick={() => handleModif(item.docIdd)} />
                      </div>
                      <div className="delet">
                        <DeleteIcon onClick={() => deletePost(item.docIdd)} />
                      </div>
                    </div>
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
              <th>Dénomination / Raison sociale</th>
              <th>.............................</th>
            </tr>

            <tr>
              <td>Nom commercial</td>
              <th>.............................</th>
            </tr>
            <tr>
              <td>Sigle</td>
              <th>.............................</th>
            </tr>

            <tr>
              <th>Forme juridique</th>
              <th>.............................</th>
            </tr>
            <tr>
              <th>Objet social</th>
              <th>.............................</th>
            </tr>
            <tr>
              <th>Siège social</th>
              <th>.............................</th>
            </tr>
            <tr>
              <th>Capital social</th>
              <th>.............................</th>
            </tr>
            <tr>
              <th>Téléphone</th>
              <th>.............................</th>
            </tr>
            <tr>
              <th>Courriel</th>
              <th>.............................</th>
            </tr>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Statut juridique</p>
      </div>
      <div className="plus">
        {!show && (
          <Button className="plus-icon" onClick={() => setShow(!show)}>
            Ajouter
          </Button>
        )}
      </div>
      <div>
        {idDoc ? (
          <form noValidate className={`${!show && "show"}`} onSubmit={editPost}>
            <div className="input">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="denomination"
                label="Dénomination / Raison sociale"
                name="denomination"
                autoComplete="denomination"
                autoFocus
                value={credentital.denomination}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="commercial"
                label="Nom commercial"
                name="nom"
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
                id="sigle"
                label="Sigle"
                name="sigle"
                autoFocus
                value={credentital.sigle}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="juridique"
                label="Forme juridique"
                name="juridique"
                autoFocus
                value={credentital.juridique}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="social"
                label="Objet social"
                name="social"
                autoFocus
                value={credentital.social}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="siege"
                label="Siège social "
                name="siege"
                autoFocus
                value={credentital.description}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="capital"
                label="Capital social"
                name="capital"
                autoFocus
                value={credentital.capital}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="Téléphone"
                name="telephone"
                autoFocus
                value={credentital.telephone}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="courriel"
                label="Courriel"
                name="courriel"
                autoFocus
                value={credentital.courriel}
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
        ) : (
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
                id="denomination"
                label="Dénomination / Raison sociale"
                name="denomination"
                autoComplete="denomination"
                autoFocus
                value={credentital.denomination}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nom"
                label="Nom commercial"
                name="nom"
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
                id="sigle"
                label="Sigle"
                name="sigle"
                autoFocus
                value={credentital.sigle}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="juridique"
                label="Forme juridique"
                name="juridique"
                autoFocus
                value={credentital.juridique}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="social"
                label="Objet social"
                name="social"
                autoFocus
                value={credentital.social}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="siege"
                label="Siège social "
                name="siege"
                autoFocus
                value={credentital.description}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="capital"
                label="Capital social"
                name="capital"
                autoFocus
                value={credentital.capital}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="telephone"
                label="Téléphone"
                name="telephone"
                autoFocus
                value={credentital.telephone}
                onChange={handleChange}
                style={{ width: 200, marginRight: 10 }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="courriel"
                label="Courriel"
                name="courriel"
                autoFocus
                value={credentital.courriel}
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

export default Chapitresix;
