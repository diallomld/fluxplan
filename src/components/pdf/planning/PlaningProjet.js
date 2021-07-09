import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const PlanningProjet = ()=>{
  
    const { userId } = useGlobalContext();
    const [planning, setPlanning] = React.useState([]);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("planning-execution-projet")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              dat.push({
                activite: doc.data().activite,
                mois: doc.data().mois,
                id: doc.data().userId,
                docIdd: doc.id,
              });
    
            });
            setPlanning(dat);
          })
          .catch((err) => console.log(err));
      };
    
  React.useEffect(() => {
    getDate();
  }, []);

  return(
    <>
        {planning.length > 0 ? (
            <table>
                <thead>
                <tr>
                    <th style={{minWidth:200}}>Activité </th>
                    <th>Mois 1</th>
                    <th>Mois 2</th>
                    <th>Mois 3</th>
                    <th>Mois 4</th>
                    <th>Mois 5</th>
                    <th>Mois 6</th>
                    <th>Mois 7</th>
                    <th>Mois 8</th>
                    <th>Mois 9</th>
                    <th>Mois 10</th>
                    <th>Mois 11</th>
                    <th>Mois 12</th>
                </tr>
                </thead>
                <tbody>
                    {planning.map((item, index) => {
                    return (
                        <>
                        <tr>
                            <td>{item.activite}</td>
                            {item.mois=="mois1" && (  
                                <>       
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois2" && (  
                                <>       
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois3" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois4" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois5" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois6" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois7" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois8" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois9" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois10" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois11" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                <td></td>
                                </>
                            )}
                            {item.mois=="mois12" && (  
                                <>       
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{backgroundColor: "#18A4F6"}}></td>
                                </>
                            )}
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

export default PlanningProjet