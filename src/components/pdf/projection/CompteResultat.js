import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const CompteResultat = ()=>{
  
    const { userId } = useGlobalContext();
    const [prevision, setPrevision] = React.useState([]);

    const [totalProduit, setTotalProduit] = React.useState(0);
    const [totalBrut1, setTotalBrut1] = React.useState(0);
    const [totalBrut2, setTotalBrut2] = React.useState(0);
    const [totalBrut3, setTotalBrut3] = React.useState(0);
    const [totalBrut, setTotalBrut] = React.useState(0);
    const [totalConsomable1, setTotalConsomable1] = React.useState(0);
    const [totalConsomable2, setTotalConsomable2] = React.useState(0);
    const [totalConsomable3, setTotalConsomable3] = React.useState(0);
    const [totalConsomable, setTotalConsomable] = React.useState(0);
    const [totalImpot, setTotalImpot] = React.useState(0);
    const [totalFrais, setTotalFrais] = React.useState(0);
    const [totalReprise, setTotalReprise] = React.useState(0);
    const [totalDotation, setTotalDotation] = React.useState(0);

    const [totalExedent1, setTotalExedent1] = React.useState(0);
    const [totalExedent2, setTotalExedent2] = React.useState(0);
    const [totalExedent3, setTotalExedent3] = React.useState(0);
    const [totalExedent, setTotalExedent] = React.useState(0);

    const [totalOrdinaire, setTotalOrdinaire] = React.useState(0);
    const [totalOrdinaire1, setTotalOrdinaire1] = React.useState(0);
    const [totalOrdinaire2, setTotalOrdinaire2] = React.useState(0);
    const [totalOrdinaire3, setTotalOrdinaire3] = React.useState(0);

    const [totalExploit1, setTotalExploit1] = React.useState(0);
    const [totalExploit2, setTotalExploit2] = React.useState(0);
    const [totalExploit3, setTotalExploit3] = React.useState(0);
    const [totalExploit, setTotalExploit] = React.useState(0);
    
    const [totalFinancier1, setTotalFinancier1] = React.useState(0);
    const [totalFinancier2, setTotalFinancier2] = React.useState(0);
    const [totalFinancier3, setTotalFinancier3] = React.useState(0);
    const [totalFinancier, setTotalFinancier] = React.useState(0);
    
    const [totalResultatBrut1, setTotalResultatBrut1] = React.useState(0);
    const [totalResultatBrut2, setTotalResultatBrut2] = React.useState(0);
    const [totalResultatBrut3, setTotalResultatBrut3] = React.useState(0);
    const [totalResultatBrut, setTotalResultatBrut] = React.useState(0);

    const [totalP, setTotalP] = React.useState(0);
    const [totalFraisf, setTotalFraisf] = React.useState(0);
    const [totalBic, setTotalBic] = React.useState(0);

  const getDate = () => {
    return firebasee
      .firestore()
      .collection("compte-resultat-previsionnel")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [];
        data.forEach((doc) => {
          let tproduit = 0;
          let tb1 = 0;
          let tb2 = 0;
          let tb3 = 0;
          let tc1 = 0;
          let tc2 = 0;
          let tc3 = 0;
          let timpot = 0;
          let tfrais = 0;
          let treprise = 0;
          let tdotation = 0;
          let teedent1 = 0;
          let teedent2 = 0;
          let teedent3 = 0;
          let teedent = 0;
          let tff = 0;
          let tpf = 0;
          let tord1 = 0;
          let tord2 = 0;
          let tord3 = 0;
          let tord = 0;
          /*
          let texploit1 = 0;
          let texploit2 = 0;
          let texploit3 = 0;
          let texploit = 0; */
 
          tpf = Number(doc.data().p1)+Number(doc.data().p2)+Number(doc.data().p3)
          tff = Number(doc.data().frais1)+Number(doc.data().frais2)+Number(doc.data().frais3)
          setTotalFraisf(tff)
          setTotalP(tpf)

          treprise = Number(doc.data().reprise1)+Number(doc.data().reprise2)+Number(doc.data().reprise3)
          tdotation = Number(doc.data().dotation1)+Number(doc.data().dotation2)+Number(doc.data().dotation3)
          timpot = Number(doc.data().impot1)+Number(doc.data().impot2)+Number(doc.data().impot3)
          tfrais = Number(doc.data().frais1)+Number(doc.data().frais2)+Number(doc.data().frais3)
          setTotalImpot(timpot)
          setTotalFrais(tfrais)
          setTotalReprise(treprise)
          setTotalDotation(tdotation)

          setTotalBic(Number(doc.data().impot1)+Number(doc.data().impot2)+Number(doc.data().impot3))

          tc1 = Number(doc.data().autreAchat1)+Number(doc.data().se1)+Number(doc.data().transport1)
          tc2 = Number(doc.data().autreAchat2)+Number(doc.data().se2)+Number(doc.data().transport2)
          tc3 = Number(doc.data().autreAchat3)+Number(doc.data().se2)+Number(doc.data().transport2)
          
          tb1 = (Number(doc.data().ca1)+Number(doc.data().autreproduit1))-(Number(doc.data().am1)+Number(doc.data().ap1))
          tb2 = (Number(doc.data().ca2)+Number(doc.data().autreproduit2))-(Number(doc.data().am2)+Number(doc.data().ap2))
          tb3 = (Number(doc.data().ca3)+Number(doc.data().autreproduit3))-(Number(doc.data().am3)+Number(doc.data().ap3))
          tproduit = Number(doc.data().ca1)+Number(doc.data().ca2)+Number(doc.data().ca3)+Number(doc.data().autreproduit1)+Number(doc.data().autreproduit2)+Number(doc.data().autreproduit3)
          setTotalProduit(tproduit)

          tord1 = Number(doc.data().phao1)-Number(doc.data().chargehao1)
          tord2 = Number(doc.data().phao2)-Number(doc.data().chargehao2)
          tord3 = Number(doc.data().phao3)-Number(doc.data().chargehao2)
          setTotalOrdinaire1(tord1)
          setTotalOrdinaire2(tord2)
          setTotalOrdinaire3(tord3)
          setTotalOrdinaire((Number(doc.data().phao1)-Number(doc.data().chargehao1))+(Number(doc.data().phao2)-Number(doc.data().chargehao2))+(Number(doc.data().phao3)-Number(doc.data().chargehao3)))
          
          setTotalBrut1(tb1)
          setTotalBrut2(tb2)
          setTotalBrut3(tb3)
          setTotalBrut(tb1+tb2+tb3)
          
          setTotalConsomable1(tc1)
          setTotalConsomable2(tc2)
          setTotalConsomable3(tc3)
          setTotalConsomable(tc1+tc2+tc3)
          
          teedent1 = (totalBrut1-totalConsomable1)-(Number(doc.data().impot1)+Number(doc.data().frais1))
          teedent2 = (totalBrut2-totalConsomable2)-(Number(doc.data().impot2)+Number(doc.data().frais2))
          teedent3 = (totalBrut3-totalConsomable3)-(Number(doc.data().impot3)+Number(doc.data().frais3))
          teedent = (totalBrut-totalConsomable)-(totalImpot+totalFrais)

          setTotalExedent1(teedent1)
          setTotalExedent2(teedent2)
          setTotalExedent3(teedent3)
          setTotalExedent(teedent)
        
          //texploit1 = totalExedent1+ Number(doc.data().reprise1)-Number(doc.data().dotation1)

          setTotalExploit1(totalExedent1+ Number(doc.data().reprise1)-Number(doc.data().dotation1))
          setTotalExploit2(totalExedent2+ Number(doc.data().reprise2)-Number(doc.data().dotation2))
          setTotalExploit3(totalExedent3+ Number(doc.data().reprise3)-Number(doc.data().dotation3))
          setTotalExploit((totalExedent+totalReprise)-totalDotation)

          setTotalFinancier1(Number(doc.data().p1)-Number(doc.data().frais1))
          setTotalFinancier2(Number(doc.data().p2)-Number(doc.data().frais2))
          setTotalFinancier3(Number(doc.data().p3)-Number(doc.data().frais3))
          setTotalFinancier(totalP-totalFraisf)

          setTotalResultatBrut1(totalExploit1+totalFinancier1+totalOrdinaire1)
          setTotalResultatBrut2(totalExploit2+totalFinancier2+totalOrdinaire2)
          setTotalResultatBrut3(totalExploit3+totalFinancier3+totalOrdinaire3)
          setTotalResultatBrut(totalExploit+totalFinancier+totalOrdinaire)
          
          dat.push({
            ca1: doc.data().ca1,
            ca2: doc.data().ca2,
            ca3: doc.data().ca3,
            autreproduit1: doc.data().autreproduit1,
            autreproduit2: doc.data().autreproduit2,
            autreproduit3: doc.data().autreproduit3,
            am1: doc.data().am1,
            am2: doc.data().am2,
            am3: doc.data().am3,
            ap1: doc.data().ap1,
            ap2: doc.data().ap2,
            ap3: doc.data().ap3,
            autreAchat1: doc.data().autreAchat1,
            autreAchat2: doc.data().autreAchat2,
            autreAchat3: doc.data().autreAchat3,
            transport1: doc.data().transport1,
            transport2: doc.data().transport2,
            transport3: doc.data().transport3,
            se1: doc.data().se1,
            se2: doc.data().se2,
            se3: doc.data().se3,
            impot1: doc.data().impot1,
            impot2: doc.data().impot2,
            impot3: doc.data().impot3,
            fraisp1: doc.data().fraisp1,
            fraisp2: doc.data().fraisp2,
            fraisp3: doc.data().fraisp3,
            reprise1: doc.data().reprise1,
            reprise2: doc.data().reprise2,
            reprise3: doc.data().reprise3,
            dotation1: doc.data().dotation1,
            dotation2: doc.data().dotation2,
            dotation3: doc.data().dotation3,
            p1: doc.data().p1,
            p2: doc.data().p2,
            p3: doc.data().p3,
            frais1: doc.data().frais1,
            frais2: doc.data().frais2,
            frais3: doc.data().frais3,
            phao1: doc.data().phao1,
            phao2: doc.data().phao2,
            phao3: doc.data().phao3,
            chargehao1: doc.data().chargehao1,
            chargehao2: doc.data().chargehao2,
            chargehao3: doc.data().chargehao3,
            impotbic1: doc.data().impotbic1,
            impotbic2: doc.data().impotbic2,
            impotbic3: doc.data().impotbic3,
            id: doc.data().userId,
            docIdd: doc.id,
          });
        });
        setPrevision(dat);
        console.table(dat);
      })
      .catch((err) => console.log(err));
  };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {prevision.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{ minWidth: 200}}>Libelle</th>
                    <th>Annee 1</th>
                    <th>Annee 2</th>
                    <th>Annee 3</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                    {prevision.map((item, index) => {
                        return (
                            <>
                            <tr>
                                <td>Chiffre d'affaires</td>
                                <td>{item.ca1}</td>
                                <td>{item.ca2}</td>
                                <td>{item.ca3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.ca1)+Number(item.ca2)+Number(item.ca3)}</td>

                            </tr>
                            <tr>
                                <td>Autres Produits</td>
                                <td>{item.autreproduit1}</td>
                                <td>{item.autreproduit2}</td>
                                <td>{item.autreproduit3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.autreproduit1)+Number(item.autreproduit2)+Number(item.autreproduit3)}</td>
                                
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>TOTAL PRODUITS</b></td>
                                <td>{Number(item.ca1)+Number(item.autreproduit1)}</td>
                                <td>{Number(item.ca2)+Number(item.autreproduit2)}</td>
                                <td>{Number(item.ca3)+Number(item.autreproduit3)}</td>
                                <td>{totalProduit}</td>
                            </tr>
                            <tr>
                                <td>Achats marchandises & Matières premières</td>
                                <td>{item.am1}</td>
                                <td>{item.am2}</td>
                                <td>{item.am3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.am1)+Number(item.am2)+Number(item.am3)}</td>
                            </tr>
                            <tr>
                                <td>Achats produits accessoires</td>
                                <td>{item.ap1}</td>
                                <td>{item.ap2}</td>
                                <td>{item.ap3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.ap1)+Number(item.ap2)+Number(item.ap3)}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>MARGE BRUTE</b></td>
                                <td>{totalBrut1}</td>
                                <td>{totalBrut2}</td>
                                <td>{totalBrut3}</td>
                                <td>{totalBrut}</td>
                            </tr>
                            <tr>
                                <td>Autres achats</td>
                                <td>{item.autreAchat1}</td>
                                <td>{item.autreAchat2}</td>
                                <td>{item.autreAchat3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.autreAchat1)+Number(item.autreAchat2)+Number(item.autreAchat3)}</td>
                            </tr>
                            <tr>
                                <td>Transport</td>
                                <td>{item.transport1}</td>
                                <td>{item.transport2}</td>
                                <td>{item.transport3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.transport1)+Number(item.transport2)+Number(item.transport3)}</td>
                            </tr>
                            <tr>
                                <td>Services extérieurs</td>
                                <td>{item.se1}</td>
                                <td>{item.se2}</td>
                                <td>{item.se3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.se1)+Number(item.se2)+Number(item.se3)}</td>
                            </tr>
                            <tr >
                                <td><b>Total Consommations Intermédiaires</b></td>
                                <td>{totalConsomable1}</td>
                                <td>{totalConsomable2}</td>
                                <td>{totalConsomable3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalConsomable}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>VALEUR AJOUTEE (VA)</b></td>
                                <td>{Number(totalBrut1)-Number(totalConsomable1)}</td>
                                <td>{Number(totalBrut2)-Number(totalConsomable2)}</td>
                                <td>{Number(totalBrut3)-Number(totalConsomable3)}</td>
                                <td>{totalBrut-totalConsomable}</td>
                            </tr>
                            <tr>
                                <td>Impôts et taxes</td>
                                <td>{item.impot1}</td>
                                <td>{item.impot2}</td>
                                <td>{item.impot3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalImpot}</td>
                            </tr>
                            <tr>
                                <td>Frais de personnel</td>
                                <td>{item.fraisp1}</td>
                                <td>{item.fraisp2}</td>
                                <td>{item.fraisp3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalFrais}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>EXCEDENT BRUT D'EXPLOITATION (EBE)</b></td>
                                <td>{totalExedent1}</td>
                                <td>{totalExedent2}</td>
                                <td>{totalExedent3}</td>
                                <td>{totalExedent}</td>
                            </tr>
                            <tr>
                                <td>Reprise sur Provisions</td>
                                <td>{item.reprise1}</td>
                                <td>{item.reprise2}</td>
                                <td>{item.reprise3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalReprise}</td>
                            </tr>
                            <tr>
                                <td>Dotation aux Amortissements</td>
                                <td>{item.dotation1}</td>
                                <td>{item.dotation2}</td>
                                <td>{item.dotation3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalDotation}</td>
                            </tr>
                            <tr>
                                <td><b>RESULTAT D'EXPLOITATION</b></td>
                                <td>{totalExploit1}</td>
                                <td>{totalExploit2}</td>
                                <td>{totalExploit3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalExploit}</td>
                            </tr>
                            <tr>
                                <td>Produits Financiers</td>
                                <td>{item.p1}</td>
                                <td>{item.p2}</td>
                                <td>{item.p3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalP}</td>
                            </tr>
                            <tr>
                                <td>Frais Financiers</td>
                                <td>{item.frais1}</td>
                                <td>{item.frais2}</td>
                                <td>{item.frais3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalFraisf}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>RESULTAT FINANCIER</b></td>
                                <td>{totalFinancier1}</td>
                                <td>{totalFinancier2}</td>
                                <td>{totalFinancier3}</td>
                                <td>{totalFinancier}</td>
                            </tr>
                            <tr>
                                <td>Produits HAO</td>
                                <td>{item.phao1}</td>
                                <td>{item.phao2}</td>
                                <td>{item.phao3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.phao1)+Number(item.phao2)+Number(item.phao3)}</td>
                            </tr>
                            <tr>
                                <td>Charges HAO</td>
                                <td>{item.chargehao1}</td>
                                <td>{item.chargehao2}</td>
                                <td>{item.chargehao3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{Number(item.chargehao1)+Number(item.chargehao2)+Number(item.chargehao3)}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>RESULTAT HORS ACTIVITES ORDINAIRES</b></td>
                                <td>{(Number(item.phao1))-(Number(item.chargehao1))}</td>
                                <td>{(Number(item.phao2))-(Number(item.chargehao2))}</td>
                                <td>{(Number(item.phao3))-(Number(item.chargehao3))}</td>
                                <td>{totalOrdinaire}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b> RESULTAT BRUT</b></td>
                                <td>{totalResultatBrut1}</td>
                                <td>{totalResultatBrut2}</td>
                                <td>{totalResultatBrut3}</td>
                                <td>{totalResultatBrut}</td>
                            </tr>
                            <tr>
                                <td>Impôt BIC</td>
                                <td>{item.impot1}</td>
                                <td>{item.impot2}</td>
                                <td>{item.impot3}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalBic}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b> RESULTAT NET</b></td>
                                <td>{totalResultatBrut1-item.impot1}</td>
                                <td>{totalResultatBrut2-item.impot2}</td>
                                <td>{totalResultatBrut3-item.impot3}</td>
                                <td>{totalResultatBrut-totalBic}</td>
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6', color:'black'}}>
                                <td><b>CASH Flow</b></td>
                                <td>{(totalResultatBrut1-item.impot1)+item.dotation1}</td>
                                <td>{(totalResultatBrut2-item.impot2)+item.dotation2}</td>
                                <td>{(totalResultatBrut3-item.impot3)+item.dotation3}</td>
                                <td>{(totalResultatBrut-totalBic)+totalDotation}</td>
                            </tr>

                            </>
                        );
                    })}
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default CompteResultat