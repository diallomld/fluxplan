import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./Chapitreone.css";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Chapitreone = () => {
  const initialState = {
    partenaire: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [besoin, setBesoin] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [bEdit, setBedit] = React.useState("");

  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleModif = (id, index) => {
    setShow(!show);
    if(show){
      setIdDoc("");
      console.log('modif handle no ' +idDoc + show);
    }else{
      setIdDoc(id);
      console.log('modif handle yes ' +idDoc + show);
    }
  };
  const editBesoin = (e) => {
    e.preventDefault();
    console.log("iddoc");
    console.log(idDoc);
    console.log("iddoc");

    firebasee
      .firestore()
      .collection("besoins")
      .doc(idDoc)
      .set(
        {
          besoin: credentital.partenaire,
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
  const deleteBesoin = (id) => {
    firebasee
      .firestore()
      .collection("besoins")
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
      .collection("besoins")
      .add({ besoin: credentital.partenaire, userId: userId, })
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
      .collection("besoins")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          //setIdDoc(doc.id);
          dat.push({
            besoin: doc.data().besoin,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        //console.log("dat " + dat[0].docIdd)
        setBesoin(dat);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getDate();
  }, [toggle]);
  //console.log("ddddd");
  //console.log(besoin);
  return (
    <div className="chapitreone">
       {besoin.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
            <tr>
              <th>Besoin ou problème à résoudre</th>
              <th>Action { besoin.length }</th>
            </tr>
            </thead>
            {besoin.map((item, index) => {
              return (
                <>
                  <tbody>
                  <tr>
                    <td>{item.besoin}</td>
                    <td>
                    <div className="delete">
                      <div className="edit">
                        <EditIcon onClick={() => handleModif(item.docIdd, index)} />
                      </div>
                      <div className="delet">
                        <DeleteIcon onClick={() => deleteBesoin(item.docIdd)} />
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
              <th>Besoin ou problème à résoudre</th>
              <th>.............................</th>
            </tr>
          </table>
        </div>
      )}
      <div className="chapitreone-title">
        <h1>Besoin ou problème à résoudre</h1>
        <p>Nous avons constaté plusieurs problèmes: </p>
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
          onSubmit={editBesoin}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="partenaire"
              label="Besoin ou problème à résoudre"
              name="partenaire"
              autoFocus
              multiline
              value={credentital.partenaire}
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
              id="partenaire"
              label="Besoin ou problème à résoudre"
              name="partenaire"
              autoFocus
              multiline
              value={credentital.partenaire}
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

export default Chapitreone;