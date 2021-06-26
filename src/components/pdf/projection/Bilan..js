import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Bilan = ()=>{
  
    const { userId } = useGlobalContext();
    const [bilan, setBilan] = React.useState([]);

    const [icbruta1, seticbruta1] = React.useState(0);
    const [icamorta1, seticamorta1] = React.useState(0);
    const [icbruta2, seticbruta2] = React.useState(0);
    const [icamorta2, seticamorta2] = React.useState(0);
    const [icbruta3, seticbruta3] = React.useState(0);
    const [icamorta3, seticamorta3] = React.useState(0);

    const [icneta1, seticneta1] = React.useState(0);
    const [icneta2, seticneta2] = React.useState(0);
    const [icneta3, seticneta3] = React.useState(0);

    const [acbruta1, setAcbruta1] = React.useState(0)
    const [acamorta1, setAcamorta1] = React.useState(0)
    const [acbruta2, setAcbruta2] = React.useState(0)
    const [acamorta2, setAcamorta2] = React.useState(0)
    const [acbruta3, setAcbruta3] = React.useState(0)
    const [acamorta3, setAcamorta3] = React.useState(0)

    const [acneta1, setAcneta1] = React.useState(0)
    const [acneta2, setAcneta2] = React.useState(0)
    const [acneta3, setAcneta3] = React.useState(0)
    
    const [tabruta1, setTabruta1] = React.useState(0)
    const [taamorta1, setTaamorta1] = React.useState(0)
    const [tabruta2, setTabruta2] = React.useState(0)
    const [taamorta2, setTaamorta2] = React.useState(0)
    const [tabruta3, setTabruta3] = React.useState(0)
    const [taamorta3, setTaamorta3] = React.useState(0)

    const [taneta1, setTaneta1] = React.useState(0)
    const [taneta2, setTaneta2] = React.useState(0)
    const [taneta3, setTaneta3] = React.useState(0)

    const [aibruta1, setAibruta1] = React.useState(0)
    const [aiamorta1, setAiamorta1] = React.useState(0)
    const [aineta1, setAineta1] = React.useState(0)
    const [aibruta2, setAibruta2] = React.useState(0)
    const [aiamorta2, setAiamorta2] = React.useState(0)
    const [aineta2, setAineta2] = React.useState(0)
    const [aibruta3, setAibruta3] = React.useState(0)
    const [aiamorta3, setAiamorta3] = React.useState(0)
    const [aineta3, setAineta3] = React.useState(0)
    
    const [totalbruta1, settotalbruta1] = React.useState(0)
    const [totalamorta1, settotalamorta1] = React.useState(0)
    const [totalneta1, settotalneta1] = React.useState(0)
    const [totalbruta2, settotalbruta2] = React.useState(0)
    const [totalamorta2, settotalamorta2] = React.useState(0)
    const [totalneta2, settotalneta2] = React.useState(0)
    const [totalbruta3, settotalbruta3] = React.useState(0)
    const [totalamorta3, settotalamorta3] = React.useState(0)
    const [totalneta3, settotalneta3] = React.useState(0)

    const getDate = () => {
        
        return firebasee
          .firestore()
          .collection("bilan-previsionnel")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
                let tbrutica1 = 0
                let tamortica1 = 0
                let tbrutica2 = 0
                let tamortica2 = 0
                let tbrutica3 = 0
                let tamortica3 = 0
    
                let ticneta1=0
                let ticneta2=0
                let ticneta3=0
    
                // total  circulant
                let tacbruta1 = 0
                let tacamorta1 = 0
                let tacbruta2 = 0
                let tacamorta2 = 0
                let tacbruta3 = 0
                let tacamorta3 = 0
                //total net actif circulant
                let tacneta1 = 0
                let tacneta2 = 0
                let tacneta3 = 0
                // total  tresorerie actif
                let ttabruta1 = 0
                let ttaamorta1 = 0
                let ttabruta2 = 0
                let ttaamorta2 = 0
                let ttabruta3 = 0
                let ttaamorta3 = 0
                //total net tresorerie actif
                let ttaneta1 = 0
                let ttaneta2 = 0
                let ttaneta3 = 0
                // actif immobilisé
                let taibruta1=0
                let taiamorta1=0
                let taineta1=0 
                let taibruta2=0
                let taiamorta2=0
                let taineta2=0 
                let taibruta3=0
                let taiamorta3=0
                let taineta3=0 
    
                let netincorpa1 = 0
                let netavancea1 = 0
                let netfinancea1 = 0
                let netincorpa2 = 0
                let netavancea2 = 0
                let netfinancea2 = 0
                let netincorpa3 = 0
                let netavancea3 = 0
                let netfinancea3 = 0
    
                netincorpa1 = Number(doc.data().incorpbruta1)-Number(doc.data().incorpamorta1)
                netavancea1 = Number(doc.data().avancebruta1)-Number(doc.data().avanceamorta1)
                netfinancea1 = Number(doc.data().financebruta1)-Number(doc.data().financeamorta1)
                netincorpa2 = Number(doc.data().incorpbruta2)-Number(doc.data().incorpamorta2)
                netavancea2 = Number(doc.data().avancebruta2)-Number(doc.data().avanceamorta2)
                netfinancea2 = Number(doc.data().financebruta2)-Number(doc.data().financeamorta2)
                netincorpa3 = Number(doc.data().incorpbruta3)-Number(doc.data().incorpamorta3)
                netavancea3 = Number(doc.data().avancebruta3)-Number(doc.data().avanceamorta3)
                netfinancea3 = Number(doc.data().financebruta3)-Number(doc.data().financeamorta3)
                /** actif circulant debut */
                tacbruta1 = Number(doc.data().stockbruta1)+ Number(doc.data().creancebruta1)
                tacamorta1 = Number(doc.data().stockamorta1)+ Number(doc.data().creanceamorta1)
                tacbruta2 = Number(doc.data().stockbruta2)+ Number(doc.data().creancebruta2)
                tacamorta2 = Number(doc.data().stockamorta2)+ Number(doc.data().creanceamorta2)
                tacbruta3 = Number(doc.data().stockbruta3)+ Number(doc.data().creancebruta3)
                tacamorta3 = Number(doc.data().stockamorta3)+ Number(doc.data().creanceamorta3)
    
                tacneta1 = (Number(doc.data().stockbruta1)-Number(doc.data().stockamorta1))+(Number(doc.data().creancebruta1)-Number(doc.data().creanceamorta1))
                tacneta2 = (Number(doc.data().stockbruta2)-Number(doc.data().stockamorta2))+(Number(doc.data().creancebruta2)-Number(doc.data().creanceamorta2))
                tacneta3 = (Number(doc.data().stockbruta3)-Number(doc.data().stockamorta3))+(Number(doc.data().creancebruta3)-Number(doc.data().creanceamorta3))
    
                setAcbruta1(tacbruta1)
                setAcamorta1(tacamorta1)
                setAcbruta2(tacbruta2)
                setAcamorta2(tacamorta2)
                setAcbruta3(tacbruta3)
                setAcamorta3(tacamorta3)
    
                setAcneta1(tacneta1)
                setAcneta2(tacneta2)
                setAcneta3(tacneta3)
                /** actif circulant fin */
                /** tresoreire actif debut */
                ttabruta1 = Number(doc.data().banquebruta1)+ Number(doc.data().caissebruta1)
                ttaamorta1 = Number(doc.data().banqueamorta1)+ Number(doc.data().caisseamorta1)
                ttabruta2 = Number(doc.data().banquebruta2)+ Number(doc.data().caissebruta2)
                ttaamorta2 = Number(doc.data().banqueamorta2)+ Number(doc.data().caisseamorta2)
                ttabruta3 = Number(doc.data().banquebruta3)+ Number(doc.data().caissebruta3)
                ttaamorta3 = Number(doc.data().banqueamorta3)+ Number(doc.data().caisseamorta3)
    
                ttaneta1 = (Number(doc.data().banquebruta1)-Number(doc.data().banqueamorta1))+(Number(doc.data().caissebruta1)-Number(doc.data().caisseamorta1))
                ttaneta2 = (Number(doc.data().banquebruta2)-Number(doc.data().banqueamorta2))+(Number(doc.data().caissebruta2)-Number(doc.data().caisseamorta2))
                ttaneta3 = (Number(doc.data().banquebruta3)-Number(doc.data().banqueamorta3))+(Number(doc.data().caissebruta3)-Number(doc.data().caisseamorta3))
    
                setTabruta1(ttabruta1)
                setTaamorta1(ttaamorta1)
                setTabruta2(ttabruta2)
                setTaamorta2(ttaamorta2)
                setTabruta3(ttabruta3)
                setTaamorta3(ttaamorta3)
    
                setTaneta1(ttaneta1)
                setTaneta2(ttaneta2)
                setTaneta3(ttaneta3)
                /*t*tresoreire actif fin */
    
                ticneta1 = (Number(doc.data().terrainsbruta1)-Number(doc.data().terrainsamorta1))+(Number(doc.data().batimentsbruta1)-Number(doc.data().batimentsamorta1))+(Number(doc.data().materielbruta1)-Number(doc.data().materielamorta1))
                ticneta2 = (Number(doc.data().terrainsbruta2)-Number(doc.data().terrainsamorta2))+(Number(doc.data().batimentsbruta2)-Number(doc.data().batimentsamorta2))+(Number(doc.data().materielbruta2)-Number(doc.data().materielamorta2))
                ticneta3 = (Number(doc.data().terrainsbruta3)-Number(doc.data().terrainsamorta3))+(Number(doc.data().batimentsbruta3)-Number(doc.data().batimentsamorta3))+(Number(doc.data().materielbruta3)-Number(doc.data().materielamorta3))
    
                seticneta1(ticneta1)
                seticneta2(ticneta2)
                seticneta3(ticneta3)
    
                tbrutica1 = Number(doc.data().terrainsbruta1)+Number(doc.data().batimentsbruta1)+ Number(doc.data().materielbruta1)
                tamortica1 = Number(doc.data().terrainsamorta1)+Number(doc.data().batimentsamorta1)+ Number(doc.data().materielamorta1)
                tbrutica2 = Number(doc.data().terrainsbruta2)+Number(doc.data().batimentsbruta2)+ Number(doc.data().materielbruta2)
                tamortica2 = Number(doc.data().terrainsamorta2)+Number(doc.data().batimentsamorta2)+ Number(doc.data().materielamorta2)
                tbrutica3 = Number(doc.data().terrainsbruta3)+Number(doc.data().batimentsbruta3)+ Number(doc.data().materielbruta3)
                tamortica3 = Number(doc.data().terrainsamorta3)+Number(doc.data().batimentsamorta3)+ Number(doc.data().materielamorta3)
                
                seticbruta1(tbrutica1)
                seticamorta1(tamortica1)
                seticbruta2(tbrutica2)
                seticamorta2(tamortica2)
                seticbruta3(tbrutica3)
                seticamorta3(tamortica3)
    
                taibruta1 = tbrutica1*2+(Number(doc.data().incorpbruta1))+(Number(doc.data().avancebruta1))+(Number(doc.data().financebruta1))
                taiamorta1 = tamortica1*2+(Number(doc.data().incorpamorta1))+(Number(doc.data().avanceamorta1))+(Number(doc.data().financeamorta1))
                taineta1 = tamortica1*2+netincorpa1+netavancea1+netfinancea1
                taibruta2 = tbrutica2*2+(Number(doc.data().incorpbruta2))+(Number(doc.data().avancebruta2))+(Number(doc.data().financebruta2))
                taiamorta2 = tamortica2*2+(Number(doc.data().incorpamorta2))+(Number(doc.data().avanceamorta2))+(Number(doc.data().financeamorta2))
                taineta2 = tamortica2*2+netincorpa2+netavancea2+netfinancea2
                taibruta3 = tbrutica3*3+(Number(doc.data().incorpbruta3))+(Number(doc.data().avancebruta3))+(Number(doc.data().financebruta3))
                taiamorta3 = tamortica3*3+(Number(doc.data().incorpamorta3))+(Number(doc.data().avanceamorta3))+(Number(doc.data().financeamorta3))
                taineta3 = tamortica3*3+netincorpa3+netavancea3+netfinancea3
    
                setAibruta1(taibruta1)
                setAiamorta1(taiamorta1)
                setAineta1(taineta1)
                setAibruta2(taibruta2)
                setAiamorta2(taiamorta2)
                setAineta2(taineta2)
                setAibruta3(taibruta3)
                setAiamorta3(taiamorta3)
                setAineta3(taineta3)
    
                settotalbruta1(taibruta1+tacbruta1+ttabruta1)
                settotalamorta1(taiamorta1+tacamorta1+ttaamorta1)
                settotalneta1(taineta1+tacneta1+ttaneta1)
                settotalbruta2(taibruta2+tacbruta2+ttabruta2)
                settotalamorta2(taiamorta2+tacamorta2+ttaamorta2)
                settotalneta2(taineta2+tacneta2+ttaneta2)
                settotalbruta3(taibruta3+tacbruta3+ttabruta3)
                settotalamorta3(taiamorta3+tacamorta3+ttaamorta3)
                settotalneta3(taineta3+tacneta3+ttaneta3)
    
              dat.push({
                incorpbruta1: doc.data().incorpbruta1,
                incorpamorta1: doc.data().incorpamorta1,
                incorpbruta2: doc.data().incorpbruta2,
                incorpamorta2: doc.data().incorpamorta2,
                incorpbruta3: doc.data().incorpbruta3,
                incorpamorta3: doc.data().incorpamorta3,
                terrainsbruta1: doc.data().terrainsbruta1,
                terrainsamorta1: doc.data().terrainsamorta1,
                terrainsbruta2: doc.data().terrainsbruta2,
                terrainsamorta2: doc.data().terrainsamorta2,
                terrainsbruta3: doc.data().terrainsbruta3,
                terrainsamorta3: doc.data().terrainsamorta3,
                batimentsbruta1: doc.data().batimentsbruta1,
                batimentsamorta1: doc.data().batimentsamorta1,
                batimentsbruta2: doc.data().batimentsbruta2,
                batimentsamorta2: doc.data().batimentsamorta2,
                batimentsbruta3: doc.data().batimentsbruta3,
                batimentsamorta3: doc.data().batimentsamorta3,
                materielbruta1: doc.data().materielbruta1,
                materielamorta1: doc.data().materielamorta1,
                materielbruta2: doc.data().materielbruta2,
                materielamorta2: doc.data().materielamorta2,
                materielbruta3: doc.data().materielbruta3,
                materielamorta3: doc.data().materielamorta3, 
                avancebruta1: doc.data().avancebruta1,
                avanceamorta1: doc.data().avanceamorta1,
                avancebruta2: doc.data().avancebruta2,
                avanceamorta2: doc.data().avanceamorta2,
                avancebruta3: doc.data().avancebruta3,
                avanceamorta3: doc.data().avanceamorta3,
                financebruta1: doc.data().financebruta1,
                financeamorta1: doc.data().financeamorta1,
                financebruta2: doc.data().financebruta2,
                financeamorta2: doc.data().financeamorta2,
                financebruta3: doc.data().financebruta3,
                financeamorta3: doc.data().financeamorta3,
                stockbruta1: doc.data().stockbruta1,
                stockamorta1: doc.data().stockamorta1,
                stockbruta2: doc.data().stockbruta2,
                stockamorta2: doc.data().stockamorta2,
                stockbruta3: doc.data().stockbruta3,
                stockamorta3: doc.data().stockamorta3,
                creancebruta1: doc.data().creancebruta1,
                creanceamorta1: doc.data().creanceamorta1,
                creancebruta2: doc.data().creancebruta2,
                creanceamorta2: doc.data().creanceamorta2,
                creancebruta3: doc.data().creancebruta3,
                creanceamorta3: doc.data().creanceamorta3,
                banquebruta1: doc.data().banquebruta1,
                banqueamorta1: doc.data().banqueamorta1,
                banquebruta2: doc.data().banquebruta2,
                banqueamorta2: doc.data().banqueamorta2,
                banquebruta3: doc.data().banquebruta3,
                banqueamorta3: doc.data().banqueamorta3,
                caissebruta1: doc.data().caissebruta1,
                caisseamorta1: doc.data().caisseamorta1,
                caissebruta2: doc.data().caissebruta2,
                caisseamorta2: doc.data().caisseamorta2,
                caissebruta3: doc.data().caissebruta3,
                caisseamorta3: doc.data().caisseamorta3,
                docIdd: doc.id,
              });
            
            });
            setBilan(dat);
          })
          .catch((err) => console.log(err));
      };

  React.useEffect(() => {
    getDate()
  }, []);

  return(
    <>
        {bilan.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th style={{ minWidth: 100}}>Actif</th>
                        <th style={{ minWidth: 200 }} colSpan="3">Annee 1</th>
                        <th style={{ minWidth: 200 }} colSpan="3">Annee 2</th>
                        <th style={{ minWidth: 200 }} colSpan="3">Annee 3</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Brut</th>
                        <th>Amort. Et prov</th>
                        <th>Net</th>
                        <th>Brut</th>
                        <th>Amort. Et prov</th>
                        <th>Net</th>
                        <th>Brut</th>
                        <th>Amort. Et prov</th>
                        <th>Net</th>
                    </tr>
                </thead>
                <tbody>
                    {bilan.map((item, index) => {
                        return (
                            <>
                                 <tr hover role="checkbox" tabIndex={-1}>
                          
                                    <td><b>ACTIF IMMOBILISE</b></td>
                                    <td><b>{aibruta1}</b></td>
                                    <td><b>{aiamorta1}</b></td>
                                    <td><b>{aineta1}</b></td>
                                    <td><b>{aibruta2}</b></td>
                                    <td><b>{aiamorta2}</b></td>
                                    <td><b>{aineta2}</b></td>
                                    <td><b>{aibruta3}</b></td>
                                    <td><b>{aiamorta3}</b></td>
                                    <td><b>{aineta3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                
                                    <td><b>Immobilisations incorporelles</b></td>
                                    <td><b>{item.incorpbruta1}</b></td>
                                    <td><b>{item.incorpamorta1}</b></td>
                                    <td><b>{0}</b></td>
                                    <td><b>{item.incorpbruta2}</b></td>
                                    <td><b>{item.incorpamorta2}</b></td>
                                    <td><b>{0}</b></td>
                                    <td><b>{item.incorpbruta3}</b></td>
                                    <td><b>{item.incorpamorta3}</b></td>
                                    <td><b>{0}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b>Immobilisations corporelles</b></td>
                                    <td><b>{icbruta1}</b></td>
                                    <td><b>{icamorta1}</b></td>
                                    <td><b>{icneta1}</b></td>
                                    <td><b>{icbruta2}</b></td>
                                    <td><b>{icamorta2}</b></td>
                                    <td><b>{icneta2}</b></td>
                                    <td><b>{icbruta3}</b></td>
                                    <td><b>{icamorta3}</b></td>
                                    <td><b>{icneta3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                
                                    <td>Terrains</td>
                                    <td>{item.terrainsbruta1}</td>
                                    <td>{item.terrainsamorta1}</td>
                                    <td>{item.terrainsbruta1-item.terrainsamorta1}</td>
                                    <td>{item.terrainsbruta2}</td>
                                    <td>{item.terrainsamorta2}</td>
                                    <td>{item.terrainsbruta2-item.terrainsamorta2}</td>
                                    <td>{item.terrainsbruta3}</td>
                                    <td>{item.terrainsamorta3}</td>
                                    <td>{item.terrainsbruta3-item.terrainsamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td>Bâtiments, installations, agencem.</td>
                                    <td>{item.batimentsbruta1}</td>
                                    <td>{item.batimentsamorta1}</td>
                                    <td>{item.batimentsbruta1-item.batimentsamorta1}</td>
                                    <td>{item.batimentsbruta2}</td>
                                    <td>{item.batimentsamorta2}</td>
                                    <td>{item.batimentsbruta2-item.batimentsamorta2}</td>
                                    <td>{item.batimentsbruta3}</td>
                                    <td>{item.batimentsamorta3}</td>
                                    <td>{item.batimentsbruta3-item.batimentsamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td>Materiels et mobiliers</td>
                                    <td>{item.materielbruta1}</td>
                                    <td>{item.materielamorta1}</td>
                                    <td>{item.materielbruta1-item.materielamorta1}</td>
                                    <td>{item.materielbruta2}</td>
                                    <td>{item.materielamorta2}</td>
                                    <td>{item.materielbruta2-item.materielamorta2}</td>
                                    <td>{item.materielbruta3}</td>
                                    <td>{item.materielamorta3}</td>
                                    <td>{item.materielbruta3-item.materielamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b>Avances et acomptes versés sur immobilisations</b></td>
                                    <td>{item.avancebruta1}</td>
                                    <td>{item.avanceamorta1}</td>
                                    <td>{item.avancebruta1-item.avanceamorta1}</td>
                                    <td>{item.avancebruta2}</td>
                                    <td>{item.avanceamorta2}</td>
                                    <td>{item.avancebruta2-item.avanceamorta2}</td>
                                    <td>{item.avancebruta3}</td>
                                    <td>{item.avanceamorta3}</td>
                                    <td>{item.avancebruta3-item.avanceamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b> Immobilisations financières</b></td>
                                    <td>{item.financebruta1}</td>
                                    <td>{item.financeamorta1}</td>
                                    <td>{item.financebruta1-item.financeamorta1}</td>
                                    <td>{item.financebruta2}</td>
                                    <td>{item.financeamorta2}</td>
                                    <td>{item.financebruta2-item.financeamorta2}</td>
                                    <td>{item.financebruta3}</td>
                                    <td>{item.financeamorta3}</td>
                                    <td>{item.financebruta3-item.financeamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#18A4F6"}}>
                                    <td><b> ACTIF CIRCULANT</b></td>
                                    <td><b>{acbruta1}</b></td>
                                    <td><b>{acamorta1}</b></td>
                                    <td><b>{acneta1}</b></td>
                                    <td><b>{acbruta2}</b></td>
                                    <td><b>{acamorta2}</b></td>
                                    <td><b>{acneta2}</b></td>
                                    <td><b>{acbruta3}</b></td>
                                    <td><b>{acamorta3}</b></td>
                                    <td><b>{acneta3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b> Stocks</b></td>
                                    <td>{item.stockbruta1}</td>
                                    <td>{item.stockamorta1}</td>
                                    <td>{item.stockbruta1-item.stockamorta1}</td>
                                    <td>{item.stockbruta2}</td>
                                    <td>{item.stockamorta2}</td>
                                    <td>{item.stockbruta2-item.stockamorta2}</td>
                                    <td>{item.stockbruta3}</td>
                                    <td>{item.stockamorta3}</td>
                                    <td>{item.stockbruta3-item.stockamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b> Créances</b></td>
                                    <td>{item.creancebruta1}</td>
                                    <td>{item.creanceamorta1}</td>
                                    <td>{item.creancebruta1-item.creanceamorta1}</td>
                                    <td>{item.creancebruta2}</td>
                                    <td>{item.creanceamorta2}</td>
                                    <td>{item.creancebruta2-item.creanceamorta2}</td>
                                    <td>{item.creancebruta3}</td>
                                    <td>{item.creanceamorta3}</td>
                                    <td>{item.creancebruta3-item.creanceamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#18A4F6"}}>
                                    <td><b>TRESORERIE ACTIF</b></td>
                                    <td><b>{tabruta1}</b></td>
                                    <td><b>{taamorta1}</b></td>
                                    <td><b>{taneta1}</b></td>
                                    <td><b>{tabruta2}</b></td>
                                    <td><b>{taamorta2}</b></td>
                                    <td><b>{taneta2}</b></td>
                                    <td><b>{tabruta3}</b></td>
                                    <td><b>{taamorta3}</b></td>
                                    <td><b>{taneta3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b> Banques</b></td>
                                    <td>{item.banquebruta1}</td>
                                    <td>{item.banqueamorta1}</td>
                                    <td>{item.banquebruta1-item.banqueamorta1}</td>
                                    <td>{item.banquebruta2}</td>
                                    <td>{item.banqueamorta2}</td>
                                    <td>{item.banquebruta2-item.banqueamorta2}</td>
                                    <td>{item.banquebruta3}</td>
                                    <td>{item.banqueamorta3}</td>
                                    <td>{item.banquebruta3-item.banqueamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    <td><b> Caisses</b></td>
                                    <td>{item.caissebruta1}</td>
                                    <td>{item.caisseamorta1}</td>
                                    <td>{item.banquebruta1-item.banqueamorta1}</td>
                                    <td>{item.caissebruta2}</td>
                                    <td>{item.caisseamorta2}</td>
                                    <td>{item.banquebruta2-item.banqueamorta2}</td>
                                    <td>{item.caissebruta3}</td>
                                    <td>{item.caisseamorta3}</td>
                                    <td>{item.banquebruta3-item.banqueamorta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#18A4F6"}}>
                                    <td><b>TOTAL</b></td>
                                    <td><b>{totalbruta1}</b></td>
                                    <td><b>{totalamorta1}</b></td>
                                    <td><b>{totalneta1}</b></td>
                                    <td><b>{totalbruta2}</b></td>
                                    <td><b>{totalamorta2}</b></td>
                                    <td><b>{totalneta2}</b></td>
                                    <td><b>{totalbruta3}</b></td>
                                    <td><b>{totalamorta3}</b></td>
                                    <td><b>{totalneta3}</b></td>
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

export default Bilan