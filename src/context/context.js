import React, { useContext, useState, useEffect } from "react";
import { db, firebasee } from "./firebase";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  //  DECLARATION
  //handleDetail

  const [load, setLoad] = useState(false);
  const [userId, setUserId] = useState("");
  const [err, setError] = useState("");
  const [draw, setDrawer] = useState(false);
  const [page, setPage] = useState("Presentation");
  const [handle, setHandle] = useState("");
  //handleDetail

  //  DECLARATION

  //  all the  functionalities  for   context
  const signUp = (nom, prenom, email, password) => {
    setLoad(true);
    setError("");
    if (nom == "") {
      alert("nom obligatoire");
    }
    if (prenom == "") {
      alert("prenonnom obligatoire");
    }
    if (email == "") {
      alert("email obligatoire");
    }
    if (password == "") {
      alert("mot de passe obligatoire");
    }
    firebasee
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        result.user.sendEmailVerification();
        setUserId(firebasee.auth().currentUser.uid);
        firebasee
          .firestore()
          .collection("users")
          .doc(firebasee.auth().currentUser.uid)
          .set({
            nom,
            prenom,
            email,
          });

        setLoad(false);
        // setHandle()
        localStorage.setItem("userId", firebasee.auth().currentUser.uid);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoad(false);
      });
  };

  const signIn = (email, password) => {
    setLoad(true);
    firebasee
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.email);
        setUserId(firebasee.auth().currentUser.uid);
        console.log(firebasee.auth().currentUser.uid);

        setLoad(false);
        localStorage.setItem("userId", firebasee.auth().currentUser.uid);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
        setError(error);
        setLoad(false);
      });
    console.log("sol");
    console.log(userId);
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 4000);
  }, [err]);

  const solicite = (designation, quantite, prix) => {
    firebasee
      .firestore()
      .collection("solicite")
      .doc("/sole3")
      .set({
        designation: designation,
        quantite: quantite,
        prix: prix,
        userId: userId,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  //  all the  functionalities  for   context

  // useEffect(() => {
  //   setTimeout(() => {
  //     setError("");
  //   }, 4000);
  // }, [err]);
  const getDataFrom = () => {
    return firebasee
      .firestore()
      .collection("produitprojet")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          dat.push({
            nom: doc.data().nom,
            description: doc.data().description,
            id: doc.data().userId,
          });
        });
        return dat;
      })
      .catch((err) => console.log(err));
  };
  return (
    <AppContext.Provider
      value={{
        draw,
        setDrawer,
        signIn,
        signUp,
        load,
        page,
        setPage,
        getDataFrom,
        userId,
        err,
        setUserId,
        solicite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
