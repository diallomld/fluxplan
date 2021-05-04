import React from "react";
import jsPDF from 'jspdf';

import "./LandingPage.css";
//import jsPDF from "jspdf";
import pdf from './pdf.png';

import { useGlobalContext } from "../context/context";
import { firebasee } from "../context/firebase";

const  LandingPage = () => {

  const { userId } = useGlobalContext();
  const [besoin, setBesoin] = React.useState([]);
  const [produit, setProduit] = React.useState([]);
  
  const getBesoin = () => {
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
  const getProduitProjet = () => {
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
    getBesoin();
    getProduitProjet();
  }, []);
  //document.querySelector("#capture").hidden = true;  
  
  function jsPDFform() {
    const doc = new jsPDF("p","pt","a4");
    //document.getElementById("capture").hidden = false;
    doc.html(document.querySelector("#capture"),{
        callback: function(pdf) {
            //console.log(pdf)
            pdf.save("myPdf.pdf");
            //document.getElementById("capture").hidden = true;
        }
    },[30,30,30,30])
 }

    return (
        <div className="chapitretwo">
           <div id="capture" className="projet">
                <div className="title">
                    <p>1. LE PROJET</p>
                </div>
                <div className="subtitle">
                    <p>1.1 Besoin ou problème à résoudre</p>
                    <hr/>
                </div>
                <div className="desc">
                    {besoin.map((item, index) => {
                        return (
                            <>
                            <p> - {item.besoin}</p>
                            </>
                        )
                    })}
                </div>
                <div className="subtitle">
                    <p>1.2 Solution/Produits/Services</p>
                    <hr/>
                </div>
                <div className="desc">
                    {produit.length > 0 ? (
                        <table>
                            <thead>
                            <tr>
                            <th>Nom du produit/service</th>
                            <th>Description du produit/service</th>
                            </tr>
                            </thead>
                            <tbody>
                                {produit.map((item, index) => {
                                return (
                                    <>
                                    <tr>
                                        <td>{item.nom}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                    </>
                                );
                                })}
                            </tbody>
                        </table>
                        ) : (
                                <p>Cette partie n'a pas encore été remplis</p>
                        )}
                </div>
            </div>
        <div className="chapitretwo-title">
            <h3>Télécharge le business plan pour start-up</h3>
            <h4>Fluxplan</h4>
            <div style={{margin: 20}}>    
                <img src={pdf} width="150" />
            </div>
            </div>
        <button onClick={jsPDFform}>download</button>
        </div>
    );
}
//ReactDOM.render(<LandingPage />, document.getElementById('root'));
//ReactPDF.render(<LandingPage />, filePath="exmaple.pdf";
//console.log("root"+rootElement)
export default LandingPage;