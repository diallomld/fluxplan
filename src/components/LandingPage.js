import { Button, TextField } from "@material-ui/core";
import React from "react";
import Pdf from "react-to-pdf";
import { useGlobalContext } from "../context/context";
import "./LandingPage.css";
const LandingPage = () => {
  const ref = React.createRef();
  const initialState = {
    ciblage: "",
    segmentation: "",
    positionnement: "",
  };
  console.log(";;;;;;;;;;;;;");
  const { getDataFrom } = useGlobalContext();
  console.log(getDataFrom());
  const [credentital, setCredentital] = React.useState(initialState);
  const [show, setShow] = React.useState(false);
  const handleChange = (e) => {
    var { name, value } = e.target;
    setCredentital({
      ...credentital,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Ajouté");
  };
  return (
    <div className="chapitretwo">
      <div styele={{ height: "30%" }}></div>
      <div className="contain" ref={ref}>
        <table>
          <tr>
            <th>Missio</th>

            <td>..................</td>
          </tr>
          <tr>
            <th>Vision</th>
            <td>..................</td>
          </tr>

          <tr>
            <th>Objectifs</th>
            <td>..................</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Nom du produit/service</th>
            <th>Description du produit/service</th>
          </tr>
        </table>
        <div className="chapitretwo-title">
          <h3>Télécharge le business plan pour start-up</h3>
          <h4>Fluxplan</h4>
          <p>Page en construction </p>
        </div>
      </div>
      <div className="pdf-btn">
        <Pdf targetRef={ref} filename="fluxplan.pdf" style={{ width: 200 }}>
          {({ toPdf }) => <button onClick={toPdf}>Télécharger</button>}
        </Pdf>
      </div>
    </div>
  );
};

export default LandingPage;
