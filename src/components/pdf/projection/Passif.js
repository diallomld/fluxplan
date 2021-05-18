import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Passif = ()=>{
  
    const { userId } = useGlobalContext();
    const [passif, setPassif] = React.useState([]);

    const [rsa1,setRsa1] = React.useState()
    const [rsa2,setRsa2] = React.useState()
    const [rsa3,setRsa3] = React.useState()

    const [pca1,setPca1] = React.useState()
    const [pca2,setPca2] = React.useState()
    const [pca3,setPca3] = React.useState()

    const [tpa1,setTpa1] = React.useState()
    const [tpa2,setTpa2] = React.useState()
    const [tpa3,setTpa3] = React.useState()

    const [totalpassifa1,setTotalpassifa1] = React.useState()
    const [totalpassifa2,setTotalpassifa2] = React.useState()
    const [totalpassifa3,setTotalpassifa3] = React.useState()

      const getDate = () => {
        setLoad2(true)
        return firebasee
          .firestore()
          .collection("bilan-passif")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              
              // total ressources stables passif
              let trsa1 = 0
              let trsa2 = 0
              let trsa3 = 0
              
              // total passif circulant
              let tpca1 = 0
              let tpca2 = 0
              let tpca3 = 0
    
              // total tresorerie passif
              let ttpa1 = 0
              let ttpa2 = 0
              let ttpa3 = 0
    
              //total passif
              let tpassifa1 = 0
              let tpassifa2 = 0
              let tpassifa3 = 0
    
              trsa1 = Number(doc.data().capitala1)+Number(doc.data().reservea1)+Number(doc.data().rapporta1)+Number(doc.data().resultata1)+Number(doc.data().subventiona1)+Number(doc.data().emprunta1)+Number(doc.data().provisiona1)
              trsa2 = Number(doc.data().capitala2)+Number(doc.data().reservea2)+Number(doc.data().rapporta2)+Number(doc.data().resultata2)+Number(doc.data().subventiona2)+Number(doc.data().emprunta2)+Number(doc.data().provisiona2)
              trsa3 = Number(doc.data().capitala3)+Number(doc.data().reservea3)+Number(doc.data().rapporta3)+Number(doc.data().resultata3)+Number(doc.data().subventiona3)+Number(doc.data().emprunta3)+Number(doc.data().provisiona3)
              setRsa1(trsa1)
              setRsa2(trsa2)
              setRsa3(trsa3)
    
              tpca1 = Number(doc.data().dettea1)+Number(doc.data().personnela1)+Number(doc.data().organismea1)+Number(doc.data().etata1)
              tpca2 = Number(doc.data().dettea2)+Number(doc.data().personnela2)+Number(doc.data().organismea2)+Number(doc.data().etata2)
              tpca3 = Number(doc.data().dettea3)+Number(doc.data().personnela3)+Number(doc.data().organismea3)+Number(doc.data().etata3)
              setPca1(tpca1)
              setPca2(tpca2)
              setPca3(tpca3)
              
              ttpa1 = Number(doc.data().detteba1)
              ttpa2 = Number(doc.data().detteba2)
              ttpa3 = Number(doc.data().detteba3)
              setTpa1(ttpa1)
              setTpa2(ttpa2)
              setTpa3(ttpa3)
    
              tpassifa1 = trsa1+tpca1+ttpa1
              tpassifa2 = trsa2+tpca2+ttpa2
              tpassifa3 = trsa3+tpca3+ttpa3
    
              setTotalpassifa1(tpassifa1)
              setTotalpassifa2(tpassifa2)
              setTotalpassifa3(tpassifa3)
    
              dat.push({
                capitala1: doc.data().capitala1,
                capitala2: doc.data().capitala2,
                capitala3: doc.data().capitala3,
                reservea1: doc.data().reservea1,
                reservea2: doc.data().reservea2,
                reservea3: doc.data().reservea3,
                rapporta1: doc.data().rapporta1,
                rapporta2: doc.data().rapporta2,
                rapporta3: doc.data().rapporta3,
                resultata1: doc.data().resultata1,
                resultata2: doc.data().resultata2,
                resultata3: doc.data().resultata3,
                subventiona1: doc.data().subventiona1,
                subventiona2: doc.data().subventiona2,
                subventiona3: doc.data().subventiona3,
                emprunta1: doc.data().emprunta1,
                emprunta2: doc.data().emprunta2,
                emprunta3: doc.data().emprunta3,
                provisiona1: doc.data().provisiona1,
                provisiona2: doc.data().provisiona2,
                provisiona3: doc.data().provisiona3,
                dettea1: doc.data().dettea1,
                dettea2: doc.data().dettea2,
                dettea3: doc.data().dettea3,
                personnela1: doc.data().personnela1,
                personnela2: doc.data().personnela2,
                personnela3: doc.data().personnela3,
                organismea1: doc.data().organismea1,
                organismea2: doc.data().organismea2,
                organismea3: doc.data().organismea3,
                etata1: doc.data().etata1,
                etata2: doc.data().etata2,
                etata3: doc.data().etata3,
                detteba1: doc.data().detteba1,
                detteba2: doc.data().detteba2,
                detteba3: doc.data().detteba3,
                docIdd: doc.id,
              });
            
            });
            setPassif(dat);
            setLoad2(false)
          })
          .catch((err) => console.log(err));
      };

  React.useEffect(() => {
    getDate()
  }, []);

  return(
    <>
        {passif.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th style={{ minWidth: 300}}>Passif</th>
                        <th style={{ minWidth: 200 }}>Annee 1</th>
                        <th style={{ minWidth: 200 }}>Annee 2</th>
                        <th style={{ minWidth: 200 }}>Annee 3</th>
                        <th style={{ minWidth: 150 }}>Action</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {passif.map((item, index) => {
                        return (
                            <>
                                <tr hover role="checkbox" tabIndex={-1}>
                            
                                    <td><b>RESSOURCES STABLES</b></td>
                                    <td><b>{rsa1}</b></td>
                                    <td><b>{rsa2}</b></td>
                                    <td><b>{rsa3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    
                                        <td>Capital</td>
                                        <td>{item.capitala1}</td>
                                        <td>{item.capitala2}</td>
                                        <td>{item.capitala3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    
                                        <td>Réserves</td>
                                        <td>{item.reservea1}</td>
                                        <td>{item.reservea2}</td>
                                        <td>{item.reservea3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    
                                        <td>Report à nouveau</td>
                                        <td>{item.rapporta1}</td>
                                        <td>{item.rapporta2}</td>
                                        <td>{item.rapporta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    
                                        <td>Résultat net</td>
                                        <td>{item.resultata1}</td>
                                        <td>{item.resultata2}</td>
                                        <td>{item.resultata3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                    
                                        <td>Subventions</td>
                                        <td>{item.subventiona1}</td>
                                        <td>{item.subventiona2}</td>
                                        <td>{item.subventiona3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Emprunts à moyen et long terme</td>
                                        <td>{item.emprunta1}</td>
                                        <td>{item.emprunta2}</td>
                                        <td>{item.emprunta3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Provisions fin. pour risque et charge</td>
                                        <td>{item.provisiona1}</td>
                                        <td>{item.provisiona2}</td>
                                        <td>{item.provisiona3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                                        <td><b>PASSIF CIRCULANT</b></td>
                                        <td><b>{pca1}</b></td>
                                        <td><b>{pca2}</b></td>
                                        <td><b>{pca3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Dettes fournisseurs</td>
                                        <td>{item.dettea1}</td>
                                        <td>{item.dettea2}</td>
                                        <td>{item.dettea3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Personnel</td>
                                        <td>{item.personnela1}</td>
                                        <td>{item.personnela2}</td>
                                        <td>{item.personnela3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Organismes sociaux </td>
                                        <td>{item.organismea1}</td>
                                        <td>{item.organismea2}</td>
                                        <td>{item.organismea3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td>Etat et collectivités publiques  </td>
                                        <td>{item.etata1}</td>
                                        <td>{item.etata2}</td>
                                        <td>{item.etata3}</td>
                                </tr>
                                
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#87bfad"}}>
                                        <td><b>TRESORERIE PASSIF </b></td>
                                        <td><b>{tpa1}</b></td>
                                        <td><b>{tpa2}</b></td>
                                        <td><b>{tpa3}</b></td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1}>
                                        <td> Dettes bancaires à CT </td>
                                        <td>{item.dettea1}</td>
                                        <td>{item.dettea2}</td>
                                        <td>{item.dettea3}</td>
                                </tr>
                                <tr hover role="checkbox" tabIndex={-1} style={{backgroundColor:"#1A88F0"}}>
                                        <td><b>TOTAL</b></td>
                                        <td><b>{totalpassifa1}</b></td>
                                        <td><b>{totalpassifa2}</b></td>
                                        <td><b>{totalpassifa3}</b></td>
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

export default Passif