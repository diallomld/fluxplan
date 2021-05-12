import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import LandingPage from "./components/LandingPage";
import Justification from "./pages/commerce/Justification";
import Projection from "./pages/commerce/Projection";
import PartyOne from "./pages/commerce/PartyOne";
import Presentation from "./pages/commerce/Presentation";
import Client from "./pages/commerce/Client";
import Activite from "./pages/commerce/Activite";
import Fournisseur from "./pages/commerce/Fournisseur";
import Concurrent from "./pages/commerce/Concurrent";
import Materiel from "./pages/commerce/Material";
import Humain from "./pages/commerce/Humain";
import Hypothese from "./pages/commerce/Hypothese";
import Vente from "./pages/commerce/Vente";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import { useGlobalContext } from "./context/context";
import Chapitreone from "./startup/projet/Chapitreone";
import Chapitretwo from "./startup/projet/Chapitretwo";
import Chapitrethree from "./startup/projet/Chapitrethree";
import Chapitrefour from "./startup/projet/Chapitrefour";
import Chapitrefive from "./startup/projet/Chapitrefive";
import Chapitresix from "./startup/projet/Chapitresix";
import Chapitreseven from "./startup/projet/Chapitreseven";
import Chapitreonee from "./startup/equipe/Chapitreone";
import Chapitretwoe from "./startup/equipe/Chapitretwo";
import Chapitrethreee from "./startup/equipe/Chapitrethree";
import Chapitrefoure from "./startup/equipe/Chapitrefour";
import Chapitreonem from "./startup/marche/Chapitreone";
import Chapitretwom from "./startup/marche/Chapitretwo";
import Chapitrethreem from "./startup/marche/Chapitrethree";
import Chapitrefourm from "./startup/marche/Chapitrefour";
import Chapitrefivem from "./startup/marche/Chapitrefive";
import Chapitresixm from "./startup/marche/Chapitresix";
import Chapitreones from "./startup/strategie/Chapitreone";
import Chapitretwos from "./startup/strategie/Chapitretwo";
import Chapitrethrees from "./startup/strategie/Chapitrethree";
import Chapitreonep from "./startup/projection/Chapitreone";
import Chapitretwop from "./startup/projection/Chapitretwo";
import Chapitrethreep from "./startup/projection/Chapitrethree";
import Chapitrefourp from "./startup/projection/chapitrefour";
import Chapitrefivep from "./startup/projection/chapitrefive";
import Analyse from "./startup/risque/analyse";
import Chapitresixp from "./startup/projection/Chapitresix";
import Chapitresevenp from "./startup/projection/Chapitreseven";
import Chapitrehuit from "./startup/projection/chapitrehuit"
import Chapitreneuf from "./startup/projection/chapitreneuf";
import Chapitredix from "./startup/projection/chapitredix";
import Chapitreonze from "./startup/projection/chapitreonze";

function App() {
  var id = localStorage.getItem("userId");
  const { userId } = useGlobalContext();
  React.useEffect(() => {}, [userId]);
  return (
    <div className="app">
      {!userId ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/inscription">
              <Inscription />
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/projet/resoudre">
              <Chapitreone />
            </Route>
            <Route exact path="/projet/solution">
              <Chapitretwo />
            </Route>
            <Route exact path="/projet/model">
              <Chapitrethree />
            </Route>
            <Route exact path="/projet/succint">
              <Chapitrefour />
            </Route>
            <Route exact path="/projet/objectif">
              <Chapitrefive />
            </Route>
            <Route exact path="/projet/juridique">
              <Chapitresix />
            </Route>
            <Route exact path="/projet/avancement">
              <Chapitreseven />
            </Route>
            <Route exact path="/equipe/promoteur">
              <Chapitreonee />
            </Route>
            <Route exact path="/equipe/dirigeant">
              <Chapitretwoe />
            </Route>
            <Route exact path="/equipe/personnel">
              <Chapitrethreee />
            </Route>
            <Route exact path="/equipe/partenaire">
              <Chapitrefoure />
            </Route>
            <Route exact path="/marche/analyse">
              <Chapitreonem />
            </Route>
            <Route exact path="/marche/segment">
              <Chapitretwom />
            </Route>
            <Route exact path="/marche/fournisseur">
              <Chapitrethreem />
            </Route>
            <Route exact path="/marche/concurrent">
              <Chapitrefourm />
            </Route>
            <Route exact path="/marche/avantage">
              <Chapitrefivem />
            </Route>
            <Route exact path="/marche/prescripteur">
              <Chapitresixm />
            </Route>
            <Route exact path="/strategie/marketing">
              <Chapitreones />
            </Route>
            <Route exact path="/strategie/mix">
              <Chapitretwos />
            </Route>
            <Route exact path="/strategie/action">
              <Chapitrethrees />
            </Route>
            <Route exact path="/projection/cout">
              <Chapitreonep />
            </Route>
            <Route exact path="/projection/schema">
              <Chapitretwop />
            </Route>
            <Route exact path="/projection/hyspothese">
              <Chapitrethreep />
            </Route>
            <Route exact path="/projection/prevision1">
              <Chapitrefourp />
            </Route>
            <Route exact path="/projection/prevision2">
              <Chapitrefivep />
            </Route>
            <Route exact path="/projection/indicateur">
              <Chapitresixp />
            </Route>
            <Route exact path="/projection/prevision3">
              <Chapitresevenp />
            </Route>
            <Route exact path="/projection/plan">
              <Chapitrehuit />
            </Route>
            <Route exact path="/projection/seuil">
              <Chapitreneuf />
            </Route>
            <Route exact path="/projection/bilan">
              <Chapitreonze />
            </Route>
            <Route exact path="/projection/tresorerie">
              <Chapitredix />
            </Route>
            <Route exact path="/analyse">
              <Analyse />
            </Route>
            <Route exact path="/download">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
