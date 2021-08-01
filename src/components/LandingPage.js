import React from "react";
import jsPDF from 'jspdf';

import "./LandingPage.css";
//import jsPDF from "jspdf";
import pdf from './pdf.png';

import BesoinComponent from "./pdf/besoinComponent";
import SolutionComponent from './pdf/SolutionComponent';
import BusinessModelComponent from "./pdf/BusinessModelComponent";
import Historique from "./pdf/Historique";
import Mission from "./pdf/Mission";
import StatutJuridique from "./pdf/StatutJuridique";
import Avancement from "./pdf/Avancement";
import Promoteur from "./pdf/equipe/Promoteur";
import EquipeDirigente from "./pdf/equipe/EquipeDirigeante";
import Personnel from "./pdf/equipe/Personnel";
import Partenaire from "./pdf/equipe/Partenaire";
import Analyse from "./pdf/marche/Analyse";
import Segment from "./pdf/marche/Segment";
import Fournisseur from "./pdf/marche/Fournisseur";
import Concurrent from "./pdf/marche/Concurrent";
import Avantage from "./pdf/marche/Avantage";
import Prescripteur from "./pdf/marche/Prescripteur";
import Strategie from "./pdf/marketing/strategie";
import Mix from "./pdf/marketing/Mix";
import PlanAction from "./pdf/marketing/PlanAction";
import Cout from "./pdf/projection/cout";
import Schema from "./pdf/projection/Schema";
import Hypothese from "./pdf/projection/Hypothese";
import PrevisionAnnee1 from "./pdf/projection/PrevisionAnnee1";
import PrevisionAnnee3 from "./pdf/projection/PrevisionAnnee3";
import CompteResultat from "./pdf/projection/CompteResultat";
import Passif from "./pdf/projection/Passif";
import Tresorerie from "./pdf/projection/Tresorerie";
import Indicateur from "./pdf/projection/Indicateur";
import SeuilRentabilite from "./pdf/projection/SeuilRentabilite";
import AnalyseRisque from "./pdf/projection/AnalyseRisque";
import PlanFinancement from "./pdf/projection/PlanFinancement";
import Bilan from "./pdf/projection/Bilan.";
import Entreprise from "./pdf/sommaire/Entreprise";
import Besoin from "./pdf/sommaire/Besoin";
import Solution from "./pdf/sommaire/Solution";
import EquipeDirigeante from "./pdf/sommaire/EquipeDirigeante";
import MarcheSommaire from "./pdf/sommaire/Marche";
import ConcurenceSommaire from "./pdf/sommaire/Concurence";
import AvantageSommaire from "./pdf/sommaire/Avantage";
import PrevisionFinanciere from "./pdf/sommaire/PrevisionFinanciere";
import BesoinFiancementSommaire from "./pdf/sommaire/BesoinFinancement";
import MoyenHumain from "./pdf/moyens/MoyenHumain";
import MoyenProduction from "./pdf/moyens/MoyenProduction";
import ImobilisationCorporelle from "./pdf/moyens/ImobilisationCorporelle";
import ImmobFinanciere from "./pdf/moyens/Financiere";
import Stock from "./pdf/moyens/Stock";
import ChargesExploitation from "./pdf/moyens/ChargesExploitation";
import CoutProjet from "./pdf/financement/Cout";
import BesoinFinancement from "./pdf/financement/BesoinFinancement";
import ModeFiancement from "./pdf/financement/ModeFinancement";
import EtatAvancementPlaning from "./pdf/planning/EtatAvancement";
import PlanningProjet from "./pdf/planning/PlaningProjet";
import AchatPrevision from "./pdf/projection/AchatPrevision";
import Emprunt from "./pdf/financement/Emprunt";

const  LandingPage = () => {

  //document.querySelector("#capture").hidden = true;  
  
  function jsPDFform() {
    const doc = new jsPDF("p","pt","a3");
    //document.getElementById("capture").hidden = false;
    doc.html(document.querySelector("#capture"),{
        callback: function(pdf) {
            //console.log(pdf)
            pdf.save("mon-business-plan.pdf");
            //document.getElementById("capture").hidden = true;
        }
    },[30,30,30,30])
 }

    return (
        <div className="chapitretwo">
            <div className="chapitretwo-title">
                <h3>Télécharge le business plan pour start-up</h3><br/>
                <div>    
                    <img src={pdf} width="150" />
                </div>
            </div>
            <button onClick={jsPDFform} className="bouton">download</button>
        
            <div className="pdf">

           
            <div id="capture" className="projet">
                <div className="title">
                    <p>SOMMAIRE EXECUTIF</p>
                </div>
                <div className="subtitle">
                    <p>NOM DE L’ENTREPRISE</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Entreprise />
                </div>
                <div className="subtitle">
                    <p>Le besoin ou problème à résoudre</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Besoin />
                </div>
                <div className="subtitle">
                    <p>Notre solution/Produits/Services</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Solution />
                </div>
                <div className="subtitle">
                    <p>L’équipe dirigeante</p>
                    <hr/>
                </div>
                <div className="desc">
                    <EquipeDirigeante />
                </div>
                <div className="subtitle">
                    <p>Le marché </p>
                    <hr/>
                </div>
                <div className="desc">
                    <MarcheSommaire />
                </div>
                <div className="subtitle">
                    <p>La concurrence </p>
                    <hr/>
                </div>
                <div className="desc">
                    <ConcurenceSommaire />
                </div>
                <div className="subtitle">
                    <p>Avantage concurrentiel </p>
                    <hr/>
                </div>
                <div className="desc">
                    <AvantageSommaire />
                </div>
                <div className="subtitle">
                    <p>Prévisions financières  </p>
                    <hr/>
                </div>
                <div className="desc">
                    <PrevisionFinanciere />
                </div>
                <div className="subtitle">
                    <p>Besoin de financement de (montant)  </p>
                    <hr/>
                </div>
                <div className="desc">
                    <BesoinFiancementSommaire />
                </div>
                <div className="title">
                    <p>1. LE PROJET</p>
                </div>
                <div className="subtitle">
                    <p>1.1 Besoin ou problème à résoudre</p>
                    <hr/>
                </div>
                <div className="desc">
                    <BesoinComponent />
                </div>
                <div className="subtitle">
                    <p>1.2 Solution/Produits/Services</p>
                    <hr/>
                </div>
                <div className="desc">
                    <SolutionComponent />
                </div>
                <div className="subtitle">
                    <p>1.3 Business model</p>
                    <hr/>
                </div>
                <div className="desc">
                    <BusinessModelComponent />
                </div>
                <div className="subtitle">
                    <p>1.4 Historique succinct du projet</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Historique />
                </div>
                <div className="subtitle">
                    <p>1.6 Mission, Vision et Objectifs </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Mission />
                </div>
                <div className="subtitle">
                    <p>1.7 Statut juridique </p>
                    <hr/>
                </div>
                <div className="desc">
                    <StatutJuridique />
                </div>
                <div className="subtitle">
                    <p>1.8 Etat d’avancement du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Avancement />
                </div>
                <div className="title">
                    <p>2. L’EQUIPE </p>
                </div>
                <div className="subtitle">
                    <p>2.1 Promoteur(s)</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Promoteur />
                </div>
                <div className="subtitle">
                    <p>2.2 L’équipe dirigeante</p>
                    <hr/>
                </div>
                <div className="desc">
                    <EquipeDirigente />
                </div>
                <div className="subtitle">
                    <p>2.3 Personnel</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Personnel />
                </div>
                <div className="subtitle">
                    <p>2.4 Partenaires clés</p>
                    <hr/>
                </div>
                <div className="desc">
                    <Partenaire />
                </div>
                <div className="title">
                    <p>3. LE MARCHE </p>
                </div>
                <div className="subtitle">
                    <p>3.1 Analyse du marché </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Analyse />
                </div>
                <div className="subtitle">
                    <p>3.2 Segments de Clients </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Segment />
                </div>
                <div className="subtitle">
                    <p>3.3 Fournisseurs clés </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Fournisseur />
                </div>
                <div className="subtitle">
                    <p>3.4 Concurrents </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Concurrent />
                </div>
                <div className="subtitle">
                    <p>3.5 Notre avantage concurrentiel </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Avantage />
                </div>
                <div className="subtitle">
                    <p>3.6 Prescripteurs </p>
                    <hr/>
                </div>
                <div className="desc">
                    <Prescripteur />
                </div>
                <div className="title">
                    <p>4. MARKETING </p>
                </div>
                <div className="subtitle">
                    <p>4.1 Stratégie Marketing </p>
                    <hr/>
                </div>
                <div className="desc">
                  <Strategie/>
                </div>
                <div className="subtitle">
                    <p>4.2	Marketing Mix</p>
                    <hr/>
                </div>
                <div className="desc">
                  <Mix/>
                </div>
                <div className="subtitle">
                    <p>4.3	Plan d’actions commercial</p>
                    <hr/>
                </div>
                <div className="desc">
                  <PlanAction/>
                </div>
                <div className="title">
                    <p>5. LES MOYENS </p>
                </div>
                <div className="subtitle">
                    <p>5.1 Moyens humains </p>
                    <hr/>
                </div>
                <div className="desc">
                  <MoyenHumain/>
                </div>
                <div className="subtitle">
                    <p>5.2 Moyens de production </p>
                    <hr/>
                </div>
                <div className="desc">
                    <b>Immobilisations incorporelles</b><br/><br/>
                    <MoyenProduction/><br/><br/>
                    <b>Immobilisations corporelles</b><br/><br/>
                    <ImobilisationCorporelle/><br/><br/>
                    <b>Immobilisations fianciere</b><br/><br/>
                    <ImmobFinanciere/><br/><br/>
                    <b>Stock de marchandises/matières premières de démarrage ou renforcement</b><br/><br/>
                    <Stock/><br/><br/>
                    <b>Charges d’exploitation</b><br/><br/>
                    <ChargesExploitation/>
                </div>
                {/* debut fiancement*/}
                <div className="title">
                    <p>6. LE FINANCEMENT </p>
                </div>
                <div className="subtitle">
                    <p>6.1 Coût du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                  <CoutProjet/>
                </div>
                <div className="subtitle">
                    <p>6.2 Besoin de financement du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                  <BesoinFinancement/>
                </div>
                <div className="subtitle">
                    <p>6.3 Financement du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                    <b>. Mode de financement</b><br/><br/>
                    <ModeFiancement/><br/><br/>
                </div>
                <div className="desc">
                    <b>. Caractéristiques de l’emprunt</b><br/><br/>
                    <Emprunt/><br/><br/>
                </div>
                {/* fin fiancement*/}
                <div className="title">
                    <p>5. PREVISIONS FINANCIERES </p>
                </div>
                <div className="subtitle">
                    <p>5.1 Coût du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                  <Cout/>
                </div>
                <div className="subtitle">
                    <p>• 5.2 Schéma de financement du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                  <Schema/>
                </div>
                <div className="subtitle">
                    <p>• 5.3 Chiffres d’affaires prévisionnels </p>
                    <hr/>
                </div>
                <div className="desc">
                    <b>• Hypothèses</b><br/><br/>
                  <Hypothese/>
                    <br/><b>•  Chiffre d’affaires prévisionnel de la première année</b><br/><br/>
                  <PrevisionAnnee1/>
                    <b>• Achats prévisionnels de la première année </b><br/><br/>
                  <AchatPrevision/>
                    <b>•  Chiffre d’affaires prévisionnel sur 3 ans </b><br/><br/>
                  <PrevisionAnnee3/>
                </div>
                <div className="subtitle">
                    <p>6.3 Comptes de résultat prévisionnels sur 3 ans </p>
                    <hr/>
                </div>
                <div className="desc">
                  <CompteResultat/>
                </div>
                <div className="subtitle">
                    <p>6.4 Bilans prévisionnels </p>
                    <hr/>
                </div>
                <div className="desc">
                  <Bilan/>
                  <Passif/>
                </div>
                <div className="subtitle">
                    <p>6.5 Plan de trésorerie de la première année </p>
                    <hr/>
                </div>
                <div className="desc">
                  <Tresorerie/>
                </div>
                <div className="subtitle">
                    <p>6.6 Plan de financement </p>
                    <hr/>
                </div>
                <div className="desc">
                  <PlanFinancement/>
                </div>
                <div className="subtitle">
                    <p>6.7 Etude de la rentabilité du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                    <b>• Seuil de rentabilité</b><br/>
                    <SeuilRentabilite/><br/>
                    <b>•	Indicateurs de mesure de rentabilité du projet</b>
                    <Indicateur/>
                </div>
                <div className="title">
                    <p>7. ANALYSE DES RISQUES </p>
                </div>
                <div className="desc">
                    <AnalyseRisque />
                </div>
                {/** debut planing */}
                <div className="title">
                    <p>8. PLANNING D’EXECUTION DU PROJET </p>
                </div>
                <div className="subtitle">
                    <p>8.1 Etat d’avancement du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                    <EtatAvancementPlaning />
                </div>
                <div className="subtitle">
                    <p>8.2 Planning d’exécution du projet </p>
                    <hr/>
                </div>
                <div className="desc">
                    <PlanningProjet />
                </div>
                {/** fin planing */}
            </div>
            </div>
        </div>
        
    );
}
//ReactDOM.render(<LandingPage />, document.getElementById('root'));
//ReactPDF.render(<LandingPage />, filePath="exmaple.pdf";
//console.log("root"+rootElement)
export default LandingPage;