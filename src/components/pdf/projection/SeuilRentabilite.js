import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const SeuilRentabilite = ()=>{
  
    const { userId } = useGlobalContext();
    const [seuil, setSeuil] = React.useState([]);

    const [mcv1, setMcv1] = React.useState(0);
    const [mcv2, setMcv2] = React.useState(0);
    const [mcv3, setMcv3] = React.useState(0);
  
    const [tmcv1, setTmcv1] = React.useState(0);
    const [tmcv2, setTmcv2] = React.useState(0);
    const [tmcv3, setTmcv3] = React.useState(0);
    
    const [sr1, setSr1] = React.useState(0);
    const [sr2, setSr2] = React.useState(0);
    const [sr3, setSr3] = React.useState(0);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("seuil-rentabilite")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            let tmcv1 = 0
            let tmcv2 = 0
            let tmcv3 = 0
            let ttmcv1 = 0
            let ttmcv2 = 0
            let ttmcv3 = 0
    
            let tsr1 =0
            let tsr2 =0
            let tsr3 =0
    
            data.forEach((doc) => {
              dat.push({
                ca1: doc.data().ca1,
                ca2: doc.data().ca2,
                ca3: doc.data().ca3,
                cv1: doc.data().cv1,
                cv2: doc.data().cv2,
                cv3: doc.data().cv3,
                cf1: doc.data().cf1,
                cf2: doc.data().cf2,
                cf3: doc.data().cf3,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              //console.log("montant "+ Number(doc.data().montant) + total)
              //test = test + Number(doc.data().montant)
              tmcv1 = Number(doc.data().ca1)-Number(doc.data().cv1)
              tmcv2 = Number(doc.data().ca2)-Number(doc.data().cv2)
              tmcv3 = Number(doc.data().ca3)-Number(doc.data().cv3)
    
              setMcv1(tmcv1)
              setMcv2(tmcv2)
              setMcv3(tmcv3)
    
              ttmcv1 = tmcv1/Number(doc.data().ca1)
              ttmcv2 = tmcv2/Number(doc.data().ca2)
              ttmcv3 = tmcv3/Number(doc.data().ca2)
    
              setTmcv1(ttmcv1)
              setTmcv2(ttmcv2)
              setTmcv3(ttmcv3)
    
              if(tmcv1 ==0 ){
                tsr1 = 0
              }else{
                
                tsr1 = Number(doc.data().cf1)/ttmcv1
              }
              if(tmcv2 ==0 ){
                tsr2 = 0
              }else{
                
                tsr2 = Number(doc.data().cf2)/ttmcv2
              }
              if(tmcv3 ==0 ){
                tsr3 = 0
              }else{
                tsr3 = Number(doc.data().cf3)/ttmcv3
              }
    
              setSr1(tsr1)
              setSr2(tsr2)
              setSr3(tsr3)
    
            });
            setSeuil(dat);
          })
          .catch((err) => console.log(err));
      };
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {seuil.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th style={{ minWidth: 300}}>DESIGNATION</th>
                        <th style={{ maxWidth: 150 }}>Année 1</th>
                        <th style={{ maxWidth: 150 }}>Année 2</th>
                        <th style={{ maxWidth: 150 }}>Année 3</th>
                  </tr>
                </thead>
                <tbody>
                    {seuil.map((item, index) => {
                    return (
                        <>
                            <tr hover role="checkbox" tabIndex={-1} key={index}>
                                
                                <td><b>Chiffre d'affaires (CA)</b></td>
                                <td>{item.ca1}</td>
                                <td>{item.ca2}</td>
                                <td>{item.ca3}</td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td>Charges variables (CV)</td>
                                <td>{item.cv1}</td>
                                <td>{item.cv2}</td>
                                <td>{item.cv3}</td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td><b>Marge sur Coût Variable (MCV=CA-CV)</b></td>
                                <td><b>{mcv1}</b></td>
                                <td><b>{mcv2}</b></td>
                                <td><b>{mcv3}</b></td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td><b>Taux de Marge sur Coût Variable (TMCV=MCV/CA)</b></td>
                                <td><b>{Math.round(tmcv1)}</b></td>
                                <td><b>{Math.round(tmcv2)}</b></td>
                                <td><b>{Math.round(tmcv3)}</b></td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td>Charges fixes (CF)</td>
                                <td>{item.cf1}</td>
                                <td>{item.cf2}</td>
                                <td>{item.cf3}</td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td><b>Seuil de rentabilité (SR=CF/TMCV)</b></td>
                                <td><b>{Math.round(sr1)}</b></td>
                                <td><b>{Math.round(sr2)}</b></td>
                                <td><b>{Math.round(sr3)}</b></td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td><b>Point mort en quantité (SR/prix moyen)</b></td>
                                <td><b>{Math.round((sr1/387.5))}</b></td>
                                <td><b>{Math.round((sr2/387.5))}</b></td>
                                <td><b>{Math.round((sr3/387.5))}</b></td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                            
                                <td><b>Point mort en nombre de jours de CA (SR/(CA/360)</b></td>
                                <td><b>{Math.round(sr1/(Number(item.ca1)/360))}</b></td>
                                <td><b>{Math.round(sr2/(Number(item.ca2)/360))}</b></td>
                                <td><b>{Math.round(sr3/(Number(item.ca3)/360))}</b></td>
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

export default SeuilRentabilite