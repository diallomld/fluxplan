import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitrethree.css";
const Chapitrethree = () => {
  const initialState = {
    produit: "",
    description: "",
    revenu: "",
    model: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [business, setBusiness] = React.useState([]);
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
  const editBusiness = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("businessmodel")
      .doc(idDoc)
      .set(
        {
          produit: credentital.produit,
          description: credentital.description,
          revenu: credentital.revenu,
          model: credentital.model,
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
  const deleteBusiness = (id) => {
    firebasee
      .firestore()
      .collection("businessmodel")
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
      .collection("businessmodel")
      .add({
        produit: credentital.produit,
        description: credentital.description,
        revenu: credentital.revenu,
        model: credentital.model,
        userId: userId,
      })
      .then(() => {
        console.log("add");
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
    alert("Ajouté");
  };
  const getDate = () => {
    return firebasee
      .firestore()
      .collection("businessmodel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            produit: doc.data().produit,
            description: doc.data().description,
            revenu: doc.data().revenu,
            model: doc.data().model,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setBusiness(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  return (
    <div className="chapitretwo">
      {business.length > 0 ? (
        <div className="tab">
          <table>
            <tr>
              <th>Nom du produit/service</th>
              <th>Nom du business model</th>
              <th>Flux de revenus</th>
              <th>Description des processus de paiement</th>
              <th>Action</th>
            </tr>
            {business.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.produit}</td>
                    <td>{item.model}</td>
                    <td>{item.revenu}</td>
                    <td>{item.description}</td>
                    <td>
                      <div className="delete">
                        <div className="edit">
                          <EditIcon onClick={() => handleModif(item.docIdd)} />
                        </div>
                        <div className="delet">
                          <DeleteIcon onClick={() => deleteBusiness(item.docIdd)} />
                        </div>
                      </div>
                    </td>
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
              <th>Nom du produit/service</th>
              <th>Nom du business model </th>
              <th>Flux de revenus</th>
              <th>Description des processus de paiement</th>
              <th>Action</th>
            </tr>

            <tr>
              <td>produit1</td>
              <td>......</td>
              <td>......</td>
              <td>......</td>
              <td></td>
            </tr>
            <tr>
              <td>produit2</td>
              <td>........</td>
              <td>........</td>
              <td>........</td>
            </tr>

            <tr>
              <th>service</th>
              <td>.......</td>
              <td>.......</td>
              <td>.......</td>
            </tr>
          </table>
        </div>
      )}

      <div className="chapitretwo-title">
        <p>Business model</p>
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
          <form
          noValidate
          className={`${!show && "show"}`}
          onSubmit={editBusiness}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="produit"
              label="Nom du produit/service"
              name="produit"
              autoComplete="produit"
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
              id="model"
              label="Nom du business model "
              name="model"
              autoFocus
              value={credentital.model}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="revenu"
              label="Flux de revenus"
              name="revenu"
              autoFocus
              value={credentital.revenu}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description des processus de paiement"
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
        ) :(
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
              label="Nom du produit/service"
              name="produit"
              autoComplete="produit"
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
              id="model"
              label="Nom du business model "
              name="model"
              autoFocus
              value={credentital.model}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="revenu"
              label="Flux de revenus"
              name="revenu"
              autoFocus
              value={credentital.revenu}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description des processus de paiement"
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
              Ajouter
            </Button>
          </div>
        </form>
        )}
        
      </div>
    </div>
  );
};

export default Chapitrethree;
