import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitretwo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

const Chapitrefive = () => {
  const initialState = {
    avantage: "",
  };
  const { userId } = useGlobalContext();
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const [avantage, setAvantage] = React.useState([]);
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
  const editAvantage = (e) => {
    e.preventDefault();
    setLoad(true)
    firebasee
      .firestore()
      .collection("avantage")
      .doc(idDoc)
      .set(
        {
          avantage: credentital.avantage,
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
  const deleteAvantage = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("avantage")
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
      .collection("avantage")
      .add({
          avantage: credentital.avantage,
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
      .collection("avantage")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            avantage: doc.data().avantage,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });

        setAvantage(dat);
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
      {avantage.length > 0 ? (
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th>avantages</th>
                <th>Action</th>
              </tr>
            </thead>
            {avantage.map((item, index) => {
              return (
                
                  <tbody>
                    <tr>
                      <td>{item.avantage}</td>
                      <td>
                        <div className="delete">
                            <div className="edit">
                              <EditIcon onClick={() => handleModif(item.docIdd)} />
                            </div>
                              <div className="delet">
                                <DeleteIcon onClick={() => deleteAvantage(item.docIdd)} />
                              </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
              );
            })}
          </table>
        </div>
      ) : (
        <div className="tab">
          <h3>Nos avantages</h3>
          <table>
            <thead>
              <tr>
                <th>Notre Avantages Concurentiel</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...............</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {load ? (<CircularProgress variant="indeterminate" />): (
        <>
        <div className="chapitretwo-title">
          {avantage.length <= 0 ? (
              <p>Cette partie est vide </p>
              ) :(
                <p>Notre Avantages Concurentiel </p>
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
          onSubmit={editAvantage}
        >
          <div className="input">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="partenaire"
              label="Besoin ou problème à résoudre"
              name="avantage"
              autoFocus
              multiline
              value={credentital.avantage}
              onChange={handleChange}
              style={{ width: 200, marginRight: 10 }}
            />
            {load ? (
              <>
              <Button
                type="submit"
                className="btn"
                disabled
                style={{ width: 300}}
                onClick={() => setShow(!show)}
                >
                  Ajouter
              </Button>
              <CircularProgress variant="indeterminate" />
              </>
            ): (
                <Button
                type="submit"
                className="btn"
                style={{ width: 300}}
                onClick={() => setShow(!show)}
                >
                  Modifier
              </Button>
            )}
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
              id="avantage"
              label="Besoin ou problème à résoudre"
              name="avantage"
              autoFocus
              multiline
              value={credentital.avantage}
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

export default Chapitrefive
