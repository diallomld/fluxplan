import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitretwo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitresix = () => {
  const initialState = {
    nom: "",
    localisation: "",
    produit: "",
    motif: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [prescripteur, setPrescripteur] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  
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
  const editPrescripteur = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("prescripteur")
      .doc(idDoc)
      .set(
        {
          nom: credentital.nom,
          localisation: credentital.localisation,
          produit: credentital.produit,
          motif: credentital.motif,
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
  const deletePrescripteur = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("prescripteur")
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
      .collection("prescripteur")
      .add({
          nom: credentital.nom,
          localisation: credentital.localisation,
          produit: credentital.produit,
          motif: credentital.motif,
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
      .collection("prescripteur")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nom: doc.data().nom,
            localisation: doc.data().localisation,
            produit: doc.data().produit,
            motif: doc.data().motif,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPrescripteur(dat);
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
      {prescripteur.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Nom prescripteur</th>
                <th>Localisation </th>
                <th>Produits </th>
                <th>Motifs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {prescripteur.map((item, index) => {
              return (
                <>
                    <tr key={index}>
                      <td>{item.nom}</td>
                      <td>{item.localisation}</td>
                      <td>{item.produit}</td>
                      <td>{item.motif}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deletePrescripteur(item.docIdd)} />
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
          <h3>Nos prescripteurs</h3>
          <table>
            <thead>
              <tr>
                <th>Nom prescripteur</th>
                <th>Localisation </th>
                <th>Produits </th>
                <th>Motifs</th>
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
            </tbody>
          </table>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {prescripteur.length <= 0 ? (
              <p>Cette partie est vide </p>
              ) :(
                <p>Nos Prescripteurs Concurentiel </p>
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
          onSubmit={editPrescripteur}
        >
          <div className="input">
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nom"
              label="Nom prescripteur"
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
              label="Localisation "
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
              id="produit"
              label="Produits"
              name="produit"
              autoFocus
              value={credentital.produit}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="motif"
              label="Motifs"
              name="motif"
              autoFocus
              value={credentital.motif}
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
              label="Nom prescripteur"
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
              label="Localisation "
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
              id="produit"
              label="Produits"
              name="produit"
              autoFocus
              value={credentital.produit}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="motif"
              label="Motifs"
              name="motif"
              autoFocus
              value={credentital.motif}
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

export default Chapitresix
