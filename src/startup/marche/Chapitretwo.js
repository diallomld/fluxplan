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
    cible: "",
    description: "",
    localisation: "",
    produit: "",
    mode: "",
    delai: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [segment, setSegment] = React.useState([]);
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
  const editSegment = (e) => {
    e.preventDefault();

    firebasee
      .firestore()
      .collection("segment-client")
      .doc(idDoc)
      .set(
        {
          cible: credentital.cible,
          description: credentital.description,
          localisation: credentital.localisation,
          produit: credentital.produit,
          delai: credentital.delai,
          mode: credentital.mode,
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
  const deleteSegment = (id) => {
    firebasee
      .firestore()
      .collection("segment-client")
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
      .collection("segment-client")
      .add({
          cible: credentital.cible,
          description: credentital.description,
          localisation: credentital.localisation,
          produit: credentital.produit,
          delai: credentital.delai,
          mode: credentital.mode,
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
      .collection("segment-client")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            cible: doc.data().cible,
            description: doc.data().description,
            localisation: doc.data().localisation,
            produit: doc.data().produit,
            delai: doc.data().delai,
            mode: doc.data().mode,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setSegment(dat);
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
      {segment.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>Client cible </th>
                <td>Description </td>
                <td>Localisation </td>
                <th>Produits / Services</th>
                <th>Mode de règlement</th>
                <th>Délais de règlement</th>
                <th>Action</th>
              </tr>
            </thead>
            {segment.map((item, index) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{item.cible}</td>
                      <td>{item.description}</td>
                      <td>{item.localisation}</td>
                      <td>{item.produit}</td>
                      <td>{item.mode}</td>
                      <td>{item.delai}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                            <div className="delet">
                              <DeleteIcon onClick={() => deleteSegment(item.docIdd)} />
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
          <h3>Segments des clients</h3>
          <table>
            <thead>
              <tr>
                <th>Client cible </th>
                <td>Description </td>
                <td>Localisation </td>
                <th>Produits / Services</th>
                <th>Mode de règlement</th>
                <th>Délais de règlement</th>
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
                <td>..................</td>
              </tr>
              <tr>
                <td>...............</td>
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

      <div className="chapitretwo-title">
        <p>Segments de Clients </p>
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
          onSubmit={editSegment}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="cible"
              label="Client cible"
              name="cible"
              autoComplete="cible"
              autoFocus
              value={credentital.cible}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description "
              name="description"
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
              id="produit"
              label="Produits / Services"
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
              id="mode"
              label="Mode de règlement"
              name="mode"
              autoFocus
              value={credentital.mode}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
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
              id="cible"
              label="Client cible"
              name="cible"
              autoComplete="cible"
              autoFocus
              value={credentital.cible}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description "
              name="description"
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
              id="produit"
              label="Produits / Services"
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
              id="mode"
              label="Mode de règlement"
              name="mode"
              autoFocus
              value={credentital.mode}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
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

export default Chapitretwo;
