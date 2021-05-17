import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const PrevisionAnnee1 = ()=>{
  
    const { userId } = useGlobalContext();
    const [prevision, setPrevision] = React.useState([]);

    const [totalQm, setTotalQm] = React.useState([]);
    const [totalPm, setTotalPm] = React.useState([]);
    const [totalCa, setTotalCa] = React.useState([]);
    const [totalCat, setTotalCat] = React.useState([]);
    //total ca
    const [tCa1, setTCa1] = React.useState(0);
    const [tCa2, setTCa2] = React.useState(0);
    const [tCa3, setTCa3] = React.useState(0);
    const [tCa4, setTCa4] = React.useState(0);
    const [tCa5, setTCa5] = React.useState(0);
    const [tCa6, setTCa6] = React.useState(0);
    const [tCa7, setTCa7] = React.useState(0);
    const [tCa8, setTCa8] = React.useState(0);
    const [tCa9, setTCa9] = React.useState(0);
    const [tCa10, setTCa10] = React.useState(0);
    const [tCa11, setTCa11] = React.useState(0);
    const [tCa12, setTCa12] = React.useState(0);

    let tCa = 0;
    let testCa = 0;

    //calcul des totaux du ca
    let ca1=0,ca2=0,ca3=0,ca4=0,ca5=0,ca6=0,ca7=0,ca8=0,ca9=0, ca10=0, ca11=0, ca12 = 0
  


    
  const getDate = () => {
    //setLoad(true)
    return firebasee
      .firestore()
      .collection("prevision-annne1")
      .where("userId", "==", userId)
      .get()
      .then((data) => {
        let dat = [0];
        let tabQte = [];
        let tabPrix = [];
        let tabCa = [];
        let tabCax = [];
        data.forEach((doc) => {
          let som = 0;
          dat.push({
            produits: doc.data().produits,
            qm1: doc.data().qm1,
            qm2: doc.data().qm2,
            qm3: doc.data().qm3,
            qm4: doc.data().qm4,
            qm5: doc.data().qm5,
            qm6: doc.data().qm6,
            qm7: doc.data().qm7,
            qm8: doc.data().qm8,
            qm9: doc.data().qm9,
            qm10: doc.data().qm10,
            qm11: doc.data().qm11,
            qm12: doc.data().qm12,
            pm1: doc.data().pm1,
            pm2: doc.data().pm2,
            pm3: doc.data().pm3,
            pm4: doc.data().pm4,
            pm5: doc.data().pm5,
            pm6: doc.data().pm6,
            pm7: doc.data().pm7,
            pm8: doc.data().pm8,
            pm9: doc.data().pm9,
            pm10: doc.data().pm10,
            pm11: doc.data().pm11,
            pm12: doc.data().pm12,
            id: doc.data().userId,
            docIdd: doc.id,
          });
          tabQte.push(Number(doc.data().qm1)+Number(doc.data().qm2)+Number(doc.data().qm3)+Number(doc.data().qm4)+Number(doc.data().qm5)+Number(doc.data().qm6)+Number(doc.data().qm7)+Number(doc.data().qm8)+Number(doc.data().qm9)+Number(doc.data().qm10)+Number(doc.data().qm11)+Number(doc.data().qm12))
          tabPrix.push(Number(doc.data().pm1)+Number(doc.data().pm2)+Number(doc.data().pm3)+Number(doc.data().pm4)+Number(doc.data().pm5)+Number(doc.data().pm6)+Number(doc.data().pm7)+Number(doc.data().pm8)+Number(doc.data().pm9)+Number(doc.data().pm10)+Number(doc.data().pm11)+Number(doc.data().pm12))
          
          ca1+=(Number(doc.data().qm1)*Number(doc.data().pm1))
          ca2+=(Number(doc.data().qm2)*Number(doc.data().pm2))
          ca3+=(Number(doc.data().qm3)*Number(doc.data().pm3))
          ca4+=(Number(doc.data().qm4)*Number(doc.data().pm4))
          ca5+=(Number(doc.data().qm5)*Number(doc.data().pm5))
          ca6+=(Number(doc.data().qm6)*Number(doc.data().pm6))
          ca7+=(Number(doc.data().qm7)*Number(doc.data().pm7))
          ca8+=(Number(doc.data().qm8)*Number(doc.data().pm8))
          ca9+=(Number(doc.data().qm9)*Number(doc.data().pm9))
          ca10+=(Number(doc.data().qm10)*Number(doc.data().pm10))
          ca11+=(Number(doc.data().qm11)*Number(doc.data().pm11))
          ca12+=(Number(doc.data().qm12)*Number(doc.data().pm12))

          som = (Number(doc.data().qm1)*Number(doc.data().pm1)) + (Number(doc.data().qm2)*Number(doc.data().pm2)) + (Number(doc.data().qm3)*Number(doc.data().pm3)) + (Number(doc.data().qm4)*Number(doc.data().pm4)) + (Number(doc.data().qm5)*Number(doc.data().pm5)) + (Number(doc.data().qm6)*Number(doc.data().pm6)) + (Number(doc.data().qm7)*Number(doc.data().pm7)) + (Number(doc.data().qm8)*Number(doc.data().pm8)) + (Number(doc.data().qm9)*Number(doc.data().pm9)) + (Number(doc.data().qm10)*Number(doc.data().pm10)) + (Number(doc.data().qm11)*Number(doc.data().pm11)) + (Number(doc.data().qm12)*Number(doc.data().pm12));
          testCa = testCa + (Number(doc.data().quantite))*Number(doc.data().prix)
          tabCa.push(som)
        });
        // total ca affectation
        setTCa1(ca1)
        setTCa2(ca2)
        setTCa3(ca3)
        setTCa4(ca4)
        setTCa5(ca5)
        setTCa6(ca6)
        setTCa7(ca7)
        setTCa8(ca8)
        setTCa9(ca9)
        setTCa10(ca10)
        setTCa11(ca11)
        setTCa12(ca12)

        setTotalQm(tabQte)
        setTotalPm(tabPrix)
        setTotalCa(tabCa)
        tabCa.forEach(ca => {
          tCa+=ca 
        })
        setTotalCat(tCa)
        dat.shift()
        setPrevision(dat);
        //console.table(prevision)
        //setLoad(false)
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
                        <th colSpan="2"></th>
                        <th colSpan="13">Annéé 1</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Produits</td>
                        <td>Elements</td>
                        <td>Mois 1</td>
                        <td>Mois 2</td>
                        <td>Mois 3</td>
                        <td>Mois 4</td>
                        <td>Mois 5</td>
                        <td>Mois 6</td>
                        <td>Mois 7</td>
                        <td>Mois 8</td>
                        <td>Mois 9</td>
                        <td>Mois 10</td>
                        <td>Mois 11</td>
                        <td>Mois 12</td>
                        <td style={{backgroundColor:'#18A4F6', color:'black'}}>Total</td>
                    </tr>
                    {prevision.map((item, index) => {
                    return (
                        <>
                            <tr hover role="checkbox" tabIndex={-1} key={index}>
                                
                                <td rowSpan ="4">{item.produits}</td>
                                
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                                <td>Quantité</td>
                                <td>{item.qm1}</td>
                                <td>{item.qm2}</td>
                                <td>{item.qm3}</td>
                                <td>{item.qm4}</td>
                                <td>{item.qm5}</td>
                                <td>{item.qm6}</td>
                                <td>{item.qm7}</td>
                                <td>{item.qm8}</td>
                                <td>{item.qm9}</td>
                                <td>{item.qm10}</td>
                                <td>{item.qm11}</td>
                                <td>{item.qm12}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalQm[index]} </td>
                                
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                                <td>Prix unitaire</td>
                                <td>{item.pm1}</td>
                                <td>{item.pm2}</td>
                                <td>{item.pm3}</td>
                                <td>{item.pm4}</td>
                                <td>{item.pm5}</td>
                                <td>{item.pm6}</td>
                                <td>{item.pm7}</td>
                                <td>{item.pm8}</td>
                                <td>{item.pm9}</td>
                                <td>{item.pm10}</td>
                                <td>{item.pm11}</td>
                                <td>{item.pm12}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{totalPm[index]}</td>
                            </tr>
                            <tr hover role="checkbox" tabIndex={-1}>
                                <td>Chiffre d'affaire</td>
                                <td>{item.pm1*item.qm1}</td>
                                <td>{item.pm2*item.qm2}</td>
                                <td>{item.pm3*item.qm3}</td>
                                <td>{item.pm4*item.qm4}</td>
                                <td>{item.pm5*item.qm5}</td>
                                <td>{item.pm6*item.qm6}</td>
                                <td>{item.pm7*item.qm7}</td>
                                <td>{item.pm8*item.qm8}</td>
                                <td>{item.pm9*item.qm9}</td>
                                <td>{item.pm10*item.qm10}</td>
                                <td>{item.pm11*item.qm11}</td>
                                <td>{item.pm12*item.qm12}</td>
                                <td style={{backgroundColor:'#18A4F6', color:'black'}}>{ totalCa[index]}</td>
                            </tr>
                        
                        </>
                    );
                    })}
                     <tr hover role="checkbox" style={{backgroundColor:'#18A4F6', color:'black'}}>
                          <td colSpan="2" style={{color: 'black', fontSize:18}}>Total chiffres d'affaires</td>
                          <td>{tCa1}</td>
                          <td>{tCa2}</td>
                          <td>{tCa3}</td>
                          <td>{tCa4}</td>
                          <td>{tCa5}</td>
                          <td>{tCa6}</td>
                          <td>{tCa7}</td>
                          <td>{tCa8}</td>
                          <td>{tCa9}</td>
                          <td>{tCa10}</td>
                          <td>{tCa11}</td>
                          <td>{tCa12}</td>
                          <td style={{color: 'black', fontSize:20}}>{totalCat}</td>
                      </tr>
                    
                </tbody>
            </table>
        ) : (
            <p>Cette partie n'a pas encore été remplis</p>
        )}
    </>
  )

}

export default PrevisionAnnee1