import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const PlanFinancement = ()=>{
  
    const { userId } = useGlobalContext();
    const [plan, setPlan] = React.useState([]);

    
    const [totalBesoin1, setTotalBesoin1] = React.useState(0);
    const [totalBesoin2, setTotalBesoin2] = React.useState(0);
    const [totalBesoin3, setTotalBesoin3] = React.useState(0);
    const [totalBesoin0, setTotalBesoin0] = React.useState(0);
    
    const [totalResource1, setTotalResource1] = React.useState(0);
    const [totalResource2, setTotalResource2] = React.useState(0);
    const [totalResource3, setTotalResource3] = React.useState(0);
    const [totalResource0, setTotalResource0] = React.useState(0);
    
    const [totalSolde1, setTotalSolde1] = React.useState(0);
    const [totalSolde2, setTotalSolde2] = React.useState(0);
    const [totalSolde3, setTotalSolde3] = React.useState(0);
    const [totalSolde0, setTotalSolde0] = React.useState(0);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("planfinancement")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              let tb0 = 0;
              let tb1 = 0;
              let tb2 = 0;
              let tb3 = 0;
              let tr0 = 0;
              let tr1 = 0;
              let tr2 = 0;
              let tr3 = 0;
              let ts0 = 0;
              let ts1 = 0;
              let ts2 = 0;
              let ts3 = 0;
              
     
              tb0 = Number(doc.data().invest0)+Number(doc.data().variation0)+Number(doc.data().rembourse0)+Number(doc.data().dividende0)
              tb1 = Number(doc.data().invest1)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
              tb2 = Number(doc.data().invest2)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
              tb3 = Number(doc.data().invest3)+Number(doc.data().variation1)+Number(doc.data().rembourse1)+Number(doc.data().dividende1)
              
              tr0 = Number(doc.data().apportp0)+Number(doc.data().apporta0)+Number(doc.data().emprunt0)+Number(doc.data().aides0)+Number(doc.data().autres0)+Number(doc.data().capacite0)
              tr1 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres1)+Number(doc.data().capacite1)
              tr2 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres2)+Number(doc.data().capacite2)
              tr3 = Number(doc.data().apportp0)+Number(doc.data().apporta1)+Number(doc.data().emprunt1)+Number(doc.data().aides1)+Number(doc.data().autres3)+Number(doc.data().capacite3)
    
              setTotalBesoin0(tb0)
              setTotalBesoin1(tb1)
              setTotalBesoin2(tb2)
              setTotalBesoin3(tb3)
              
              setTotalResource0(tr0)
              setTotalResource1(tr1)
              setTotalResource2(tr2)
              setTotalResource3(tr3)
              
              ts0 = tr0-tb0
              ts1 = tr1-tb1
              ts2 = tr2-tb2
              ts3 = tr3-tb3
              
              setTotalSolde0(ts0)
              setTotalSolde1(ts1)
              setTotalSolde2(ts2)
              setTotalSolde3(ts3)
              
              dat.push({
                invest0: doc.data().invest0,
                invest1: doc.data().invest1,
                invest2: doc.data().invest2,
                invest3: doc.data().invest3,
                variation0: doc.data().variation1,
                variation1: doc.data().variation1,
                variation2: doc.data().variation2,
                variation3: doc.data().variation3,
                rembourse0: doc.data().rembourse1,
                rembourse1: doc.data().rembourse1,
                rembourse2: doc.data().rembourse2,
                rembourse3: doc.data().rembourse3,
                dividende0: doc.data().dividende1,
                dividende1: doc.data().dividende1,
                dividende2: doc.data().dividende2,
                dividende3: doc.data().dividende3,
                apportp0: doc.data().apportp1,
                apportp1: doc.data().apportp1,
                apportp2: doc.data().apportp2,
                apportp3: doc.data().apportp3,
                apporta0: doc.data().apporta1,
                apporta1: doc.data().apporta1,
                apporta2: doc.data().apporta2,
                apporta3: doc.data().apporta3,
                emprunt0: doc.data().emprunt1,
                emprunt1: doc.data().emprunt1,
                emprunt2: doc.data().emprunt2,
                emprunt3: doc.data().emprunt3,
                subvention0: doc.data().subvention1,
                subvention1: doc.data().subvention1,
                subvention2: doc.data().subvention2,
                subvention3: doc.data().subvention3,
                aides0: doc.data().aides1,
                aides1: doc.data().aides1,
                aides2: doc.data().aides2,
                aides3: doc.data().aides3,
                autres0: doc.data().autres1,
                autres1: doc.data().autres1,
                autres2: doc.data().autres2,
                autres3: doc.data().autres3,
                capacite0: doc.data().capacite1,
                capacite1: doc.data().capacite1,
                capacite2: doc.data().capacite2,
                capacite3: doc.data().capacite3,
                id: doc.data().userId,
                docIdd: doc.id,
              });
            });
            setPlan(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {plan.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{ minWidth: 200}}></th>
                    <th>Année 0</th>
                    <th>Annee 1</th>
                    <th>Annee 2</th>
                    <th>Annee 3</th>
                  
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Besoins</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {plan.map((item, index) => {
                    return (
                        <>
                         <tr>
                            <td>Investissements </td>
                            <td>{item.invest0}</td>
                            <td>{item.invest1}</td>
                            <td>{item.invest2}</td>
                            <td>{item.invest3}</td>
                        </tr>
                        <tr>
                            <td>Variation du Besoin en fonds de roulement</td>
                            <td>{item.variation0}</td>
                            <td>{item.variation1}</td>
                            <td>{item.variation2}</td>
                            <td>{item.variation3}</td>
                        </tr>
                        <tr>
                            <td>Remboursement emprunt</td>
                            <td>{item.rembourse0}</td>
                            <td>{item.rembourse1}</td>
                            <td>{item.rembourse2}</td>
                            <td>{item.rembourse3}</td>
                        </tr>
                        <tr>
                            <td>Dividende</td>
                            <td>{item.dividende0}</td>
                            <td>{item.dividende1}</td>
                            <td>{item.dividende2}</td>
                            <td>{item.dividende3}</td>
                        </tr>
                        <tr>
                            <td><b>TOTAL DES BESOINS</b></td>
                            <td><b>{totalBesoin0}</b></td>
                            <td><b>{totalBesoin1}</b></td>
                            <td><b>{totalBesoin2}</b></td>
                            <td><b>{totalBesoin3}</b></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>RESOURCES</b></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Apports personnel</td>
                            <td>{item.apportp0}</td>
                            <td>{item.apportp1}</td>
                            <td>{item.apportp2}</td>
                            <td>{item.apportp3}</td>
                        </tr>
                        <tr>
                            <td>Apports des Associés</td>
                            <td>{item.apporta0}</td>
                            <td>{item.apporta1}</td>
                            <td>{item.apporta2}</td>
                            <td>{item.apporta3}</td>
                        </tr>
                        <tr>
                            <td>Emprunts</td>
                            <td>{item.emprunt0}</td>
                            <td>{item.emprunt1}</td>
                            <td>{item.emprunt2}</td>
                            <td>{item.emprunt3}</td>
                        </tr>
                        <tr>
                            <td>Subventions</td>
                            <td>{item.subvention0}</td>
                            <td>{item.subvention1}</td>
                            <td>{item.subvention2}</td>
                            <td>{item.subvention3}</td>
                        </tr>
                        <tr>
                            <td>Aides</td>
                            <td>{item.aides0}</td>
                            <td>{item.aides1}</td>
                            <td>{item.aides2}</td>
                            <td>{item.aides3}</td>
                        </tr>
                        <tr>
                            <td>Autres</td>
                            <td>{item.autres0}</td>
                            <td>{item.autres1}</td>
                            <td>{item.autres2}</td>
                            <td>{item.autres3}</td>
                        </tr>
                        <tr>
                            <td>Capacité d'autofinancement (hors subvention)</td>
                            <td>{item.capacite0}</td>
                            <td>{item.capacite1}</td>
                            <td>{item.capacite2}</td>
                            <td>{item.capacite3}</td>
                        </tr>
                        <tr>
                            <td><b>TOTAL DES RESSOURCES</b></td>
                            <td>{totalResource0}</td>
                            <td>{totalResource1}</td>
                            <td>{totalResource2}</td>
                            <td>{totalResource3}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{backgroundColor:'#18A4F6'}}>
                            <td><b>SOLDE</b></td>
                            <td>{totalSolde0}</td>
                            <td>{totalSolde1}</td>
                            <td>{totalSolde2}</td>
                            <td>{totalSolde3}</td>
                        </tr>
                        <tr style={{backgroundColor:'#18A4F6'}}>
                            <td><b>SOLDE CUMULES</b></td>
                            <td>{totalSolde0}</td>
                            <td>{totalSolde1 + totalSolde0}</td>
                            <td>{totalSolde1 + totalSolde2 + totalSolde0}</td>
                            <td>{totalSolde1 + totalSolde2 + totalSolde0+totalSolde3}</td>
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

export default PlanFinancement