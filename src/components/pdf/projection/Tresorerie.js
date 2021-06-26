import React from "react"

import { useGlobalContext } from "../../../context/context";
import { firebasee } from "../../../context/firebase";

const Tresorerie = ()=>{
  
    const { userId } = useGlobalContext();
    const [plan, setPlan] = React.useState([]);

    const [totalHorsExploit1, setTotalHorsExploit1] = React.useState(0);
    const [totalHorsExploit2, setTotalHorsExploit2] = React.useState(0);
    const [totalHorsExploit3, setTotalHorsExploit3] = React.useState(0);
    const [totalHorsExploit4, setTotalHorsExploit4] = React.useState(0);
    const [totalHorsExploit5, setTotalHorsExploit5] = React.useState(0);
    const [totalHorsExploit6, setTotalHorsExploit6] = React.useState(0);
    const [totalHorsExploit7, setTotalHorsExploit7] = React.useState(0);
    const [totalHorsExploit8, setTotalHorsExploit8] = React.useState(0);
    const [totalHorsExploit9, setTotalHorsExploit9] = React.useState(0);
    const [totalHorsExploit10, setTotalHorsExploit10] = React.useState(0);
    const [totalHorsExploit11, setTotalHorsExploit11] = React.useState(0);
    const [totalHorsExploit12, setTotalHorsExploit12] = React.useState(0);

    const [totalExploit1, setTotalExploit1] = React.useState(0);
    const [totalExploit2, setTotalExploit2] = React.useState(0);
    const [totalExploit3, setTotalExploit3] = React.useState(0);
    const [totalExploit4, setTotalExploit4] = React.useState(0);
    const [totalExploit5, setTotalExploit5] = React.useState(0);
    const [totalExploit6, setTotalExploit6] = React.useState(0);
    const [totalExploit7, setTotalExploit7] = React.useState(0);
    const [totalExploit8, setTotalExploit8] = React.useState(0);
    const [totalExploit9, setTotalExploit9] = React.useState(0);
    const [totalExploit10, setTotalExploit10] = React.useState(0);
    const [totalExploit11, setTotalExploit11] = React.useState(0);
    const [totalExploit12, setTotalExploit12] = React.useState(0);

    const [totalEncaisse1, setTotalEncaisse1] = React.useState(0);
    const [totalEncaisse2, setTotalEncaisse2] = React.useState(0);
    const [totalEncaisse3, setTotalEncaisse3] = React.useState(0);
    const [totalEncaisse4, setTotalEncaisse4] = React.useState(0);
    const [totalEncaisse5, setTotalEncaisse5] = React.useState(0);
    const [totalEncaisse6, setTotalEncaisse6] = React.useState(0);
    const [totalEncaisse7, setTotalEncaisse7] = React.useState(0);
    const [totalEncaisse8, setTotalEncaisse8] = React.useState(0);
    const [totalEncaisse9, setTotalEncaisse9] = React.useState(0);
    const [totalEncaisse10, setTotalEncaisse10] = React.useState(0);
    const [totalEncaisse11, setTotalEncaisse11] = React.useState(0);
    const [totalEncaisse12, setTotalEncaisse12] = React.useState(0);

    const [totalDecaisseHorsexploit1, setTotalDecaisseHorsexploit1] = React.useState(0);
    const [totalDecaisseHorsexploit2, setTotalDecaisseHorsexploit2] = React.useState(0);
    const [totalDecaisseHorsexploit3, setTotalDecaisseHorsexploit3] = React.useState(0);
    const [totalDecaisseHorsexploit4, setTotalDecaisseHorsexploit4] = React.useState(0);
    const [totalDecaisseHorsexploit5, setTotalDecaisseHorsexploit5] = React.useState(0);
    const [totalDecaisseHorsexploit6, setTotalDecaisseHorsexploit6] = React.useState(0);
    const [totalDecaisseHorsexploit7, setTotalDecaisseHorsexploit7] = React.useState(0);
    const [totalDecaisseHorsexploit8, setTotalDecaisseHorsexploit8] = React.useState(0);
    const [totalDecaisseHorsexploit9, setTotalDecaisseHorsexploit9] = React.useState(0);
    const [totalDecaisseHorsexploit10, setTotalDecaisseHorsexploit10] = React.useState(0);
    const [totalDecaisseHorsexploit11, setTotalDecaisseHorsexploit11] = React.useState(0);
    const [totalDecaisseHorsexploit12, setTotalDecaisseHorsexploit12] = React.useState(0);

    const [totalDecaisseExploit1, setTotalDecaisseExploit1] = React.useState(0);
    const [totalDecaisseExploit2, setTotalDecaisseExploit2] = React.useState(0);
    const [totalDecaisseExploit3, setTotalDecaisseExploit3] = React.useState(0);
    const [totalDecaisseExploit4, setTotalDecaisseExploit4] = React.useState(0);
    const [totalDecaisseExploit5, setTotalDecaisseExploit5] = React.useState(0);
    const [totalDecaisseExploit6, setTotalDecaisseExploit6] = React.useState(0);
    const [totalDecaisseExploit7, setTotalDecaisseExploit7] = React.useState(0);
    const [totalDecaisseExploit8, setTotalDecaisseExploit8] = React.useState(0);
    const [totalDecaisseExploit9, setTotalDecaisseExploit9] = React.useState(0);
    const [totalDecaisseExploit10, setTotalDecaisseExploit10] = React.useState(0);
    const [totalDecaisseExploit11, setTotalDecaisseExploit11] = React.useState(0);
    const [totalDecaisseExploit12, setTotalDecaisseExploit12] = React.useState(0);

    const [totalDecaisse1, setTotalDecaisse1] = React.useState(0);
    const [totalDecaisse2, setTotalDecaisse2] = React.useState(0);
    const [totalDecaisse3, setTotalDecaisse3] = React.useState(0);
    const [totalDecaisse4, setTotalDecaisse4] = React.useState(0);
    const [totalDecaisse5, setTotalDecaisse5] = React.useState(0);
    const [totalDecaisse6, setTotalDecaisse6] = React.useState(0);
    const [totalDecaisse7, setTotalDecaisse7] = React.useState(0);
    const [totalDecaisse8, setTotalDecaisse8] = React.useState(0);
    const [totalDecaisse9, setTotalDecaisse9] = React.useState(0);
    const [totalDecaisse10, setTotalDecaisse10] = React.useState(0);
    const [totalDecaisse11, setTotalDecaisse11] = React.useState(0);
    const [totalDecaisse12, setTotalDecaisse12] = React.useState(0);

    const [soldeDuMois1, setSoldeDuMois1] = React.useState(0);
    const [soldeDuMois2, setSoldeDuMois2] = React.useState(0);
    const [soldeDuMois3, setSoldeDuMois3] = React.useState(0);
    const [soldeDuMois4, setSoldeDuMois4] = React.useState(0);
    const [soldeDuMois5, setSoldeDuMois5] = React.useState(0);
    const [soldeDuMois6, setSoldeDuMois6] = React.useState(0);
    const [soldeDuMois7, setSoldeDuMois7] = React.useState(0);
    const [soldeDuMois8, setSoldeDuMois8] = React.useState(0);
    const [soldeDuMois9, setSoldeDuMois9] = React.useState(0);
    const [soldeDuMois10, setSoldeDuMois10] = React.useState(0);
    const [soldeDuMois11, setSoldeDuMois11] = React.useState(0);
    const [soldeDuMois12, setSoldeDuMois12] = React.useState(0);

    const [soldeDebutDuMois1, setSoldeDebutDuMois1] = React.useState(0);
    const [soldeDebutDuMois2, setSoldeDebutDuMois2] = React.useState(0);
    const [soldeDebutDuMois3, setSoldeDebutDuMois3] = React.useState(0);
    const [soldeDebutDuMois4, setSoldeDebutDuMois4] = React.useState(0);
    const [soldeDebutDuMois5, setSoldeDebutDuMois5] = React.useState(0);
    const [soldeDebutDuMois6, setSoldeDebutDuMois6] = React.useState(0);
    const [soldeDebutDuMois7, setSoldeDebutDuMois7] = React.useState(0);
    const [soldeDebutDuMois8, setSoldeDebutDuMois8] = React.useState(0);
    const [soldeDebutDuMois9, setSoldeDebutDuMois9] = React.useState(0);
    const [soldeDebutDuMois10, setSoldeDebutDuMois10] = React.useState(0);
    const [soldeDebutDuMois11, setSoldeDebutDuMois11] = React.useState(0);
    const [soldeDebutDuMois12, setSoldeDebutDuMois12] = React.useState(0);

    const [soldeFinDuMois1, setSoldeFinDuMois1] = React.useState(0);
    const [soldeFinDuMois2, setSoldeFinDuMois2] = React.useState(0);
    const [soldeFinDuMois3, setSoldeFinDuMois3] = React.useState(0);
    const [soldeFinDuMois4, setSoldeFinDuMois4] = React.useState(0);
    const [soldeFinDuMois5, setSoldeFinDuMois5] = React.useState(0);
    const [soldeFinDuMois6, setSoldeFinDuMois6] = React.useState(0);
    const [soldeFinDuMois7, setSoldeFinDuMois7] = React.useState(0);
    const [soldeFinDuMois8, setSoldeFinDuMois8] = React.useState(0);
    const [soldeFinDuMois9, setSoldeFinDuMois9] = React.useState(0);
    const [soldeFinDuMois10, setSoldeFinDuMois10] = React.useState(0);
    const [soldeFinDuMois11, setSoldeFinDuMois11] = React.useState(0);
    const [soldeFinDuMois12, setSoldeFinDuMois12] = React.useState(0);

    const getDate = () => {
        return firebasee
          .firestore()
          .collection("plan-tresorerie")
          .where("userId", "==", userId)
          .get()
          .then((data) => {
            let dat = [];
            data.forEach((doc) => {
              
              dat.push({
                apportpm1:doc.data().apportpm1,
                apportpm2:doc.data().apportpm2,
                apportpm3:doc.data().apportpm3,
                apportpm4:doc.data().apportpm4,
                apportpm5:doc.data().apportpm5,
                apportpm6:doc.data().apportpm6,
                apportpm7:doc.data().apportpm7,
                apportpm8:doc.data().apportpm8,
                apportpm9:doc.data().apportpm9,
                apportpm10:doc.data().apportpm10,
                apportpm11:doc.data().apportpm11,
                apportpm12:doc.data().apportpm12,
                associem1:doc.data().associem1,
                associem2:doc.data().associem2,
                associem3:doc.data().associem3,
                associem4:doc.data().associem4,
                associem5:doc.data().associem5,
                associem6:doc.data().associem6,
                associem7:doc.data().associem7,
                associem8:doc.data().associem8,
                associem9:doc.data().associem9,
                associem10:doc.data().associem10,
                associem11:doc.data().associem11,
                associem12:doc.data().associem12,
                empruntm1:doc.data().empruntm1,
                empruntm2:doc.data().empruntm2,
                empruntm3:doc.data().empruntm3,
                empruntm4:doc.data().empruntm4,
                empruntm5:doc.data().empruntm5,
                empruntm6:doc.data().empruntm6,
                empruntm7:doc.data().empruntm7,
                empruntm8:doc.data().empruntm8,
                empruntm9:doc.data().empruntm9,
                empruntm10:doc.data().empruntm10,
                empruntm11:doc.data().empruntm11,
                empruntm12:doc.data().empruntm12,
                subventionm1:doc.data().subventionm1,
                subventionm2:doc.data().subventionm2,
                subventionm3:doc.data().subventionm3,
                subventionm4:doc.data().subventionm4,
                subventionm5:doc.data().subventionm5,
                subventionm6:doc.data().subventionm6,
                subventionm7:doc.data().subventionm7,
                subventionm8:doc.data().subventionm8,
                subventionm9:doc.data().subventionm9,
                subventionm10:doc.data().subventionm10,
                subventionm11:doc.data().subventionm11,
                subventionm12:doc.data().subventionm12,            
                apportccm1:doc.data().apportccm1,
                apportccm2:doc.data().apportccm2,
                apportccm3:doc.data().apportccm3,
                apportccm4:doc.data().apportccm4,
                apportccm5:doc.data().apportccm5,
                apportccm6:doc.data().apportccm6,
                apportccm7:doc.data().apportccm7,
                apportccm8:doc.data().apportccm8,
                apportccm9:doc.data().apportccm9,
                apportccm10:doc.data().apportccm10,
                apportccm11:doc.data().apportccm11,
                apportccm12:doc.data().apportccm12,            
                cahtm1:doc.data().cahtm1,
                cahtm2:doc.data().cahtm2,
                cahtm3:doc.data().cahtm3,
                cahtm4:doc.data().cahtm4,
                cahtm5:doc.data().cahtm5,
                cahtm6:doc.data().cahtm6,
                cahtm7:doc.data().cahtm7,
                cahtm8:doc.data().cahtm8,
                cahtm9:doc.data().cahtm9,
                cahtm10:doc.data().cahtm10,
                cahtm11:doc.data().cahtm11,
                cahtm12:doc.data().cahtm12,        
                tvam1:doc.data().tvam1,
                tvam2:doc.data().tvam2,
                tvam3:doc.data().tvam3,
                tvam4:doc.data().tvam4,
                tvam5:doc.data().tvam5,
                tvam6:doc.data().tvam6,
                tvam7:doc.data().tvam7,
                tvam8:doc.data().tvam8,
                tvam9:doc.data().tvam9,
                tvam10:doc.data().tvam10,
                tvam11:doc.data().tvam11,
                tvam12:doc.data().tvam12,
                
                creancem1:doc.data().creancem1,
                creancem2:doc.data().creancem2,
                creancem3:doc.data().creancem3,
                creancem4:doc.data().creancem4,
                creancem5:doc.data().creancem5,
                creancem6:doc.data().creancem6,
                creancem7:doc.data().creancem7,
                creancem8:doc.data().creancem8,
                creancem9:doc.data().creancem9,
                creancem10:doc.data().creancem10,
                creancem11:doc.data().creancem11,
                creancem12:doc.data().creancem12,
                
                autrecaissem1:doc.data().autrecaissem1,
                autrecaissem2:doc.data().autrecaissem2,
                autrecaissem3:doc.data().autrecaissem3,
                autrecaissem4:doc.data().autrecaissem4,
                autrecaissem5:doc.data().autrecaissem5,
                autrecaissem6:doc.data().autrecaissem6,
                autrecaissem7:doc.data().autrecaissem7,
                autrecaissem8:doc.data().autrecaissem8,
                autrecaissem9:doc.data().autrecaissem9,
                autrecaissem10:doc.data().autrecaissem10,
                autrecaissem11:doc.data().autrecaissem11,
                autrecaissem12:doc.data().autrecaissem12,
                
                investm1:doc.data().investm1,
                investm2:doc.data().investm2,
                investm3:doc.data().investm3,
                investm4:doc.data().investm4,
                investm5:doc.data().investm5,
                investm6:doc.data().investm6,
                investm7:doc.data().investm7,
                investm8:doc.data().investm8,
                investm9:doc.data().investm9,
                investm10:doc.data().investm10,
                investm11:doc.data().investm11,
                investm12:doc.data().investm12,
                
                rembourseccm1:doc.data().rembourseccm1,
                rembourseccm2:doc.data().rembourseccm2,
                rembourseccm3:doc.data().rembourseccm3,
                rembourseccm4:doc.data().rembourseccm4,
                rembourseccm5:doc.data().rembourseccm5,
                rembourseccm6:doc.data().rembourseccm6,
                rembourseccm7:doc.data().rembourseccm7,
                rembourseccm8:doc.data().rembourseccm8,
                rembourseccm9:doc.data().rembourseccm9,
                rembourseccm10:doc.data().rembourseccm10,
                rembourseccm11:doc.data().rembourseccm11,
                rembourseccm12:doc.data().rembourseccm12,
                
                rembourseempruntm1:doc.data().rembourseempruntm1,
                rembourseempruntm2:doc.data().rembourseempruntm2,
                rembourseempruntm3:doc.data().rembourseempruntm3,
                rembourseempruntm4:doc.data().rembourseempruntm4,
                rembourseempruntm5:doc.data().rembourseempruntm5,
                rembourseempruntm6:doc.data().rembourseempruntm6,
                rembourseempruntm7:doc.data().rembourseempruntm7,
                rembourseempruntm8:doc.data().rembourseempruntm8,
                rembourseempruntm9:doc.data().rembourseempruntm9,
                rembourseempruntm10:doc.data().rembourseempruntm10,
                rembourseempruntm11:doc.data().rembourseempruntm11,
                rembourseempruntm12:doc.data().rembourseempruntm12,
                
                garantieempruntm1:doc.data().garantieempruntm1,
                garantieempruntm2:doc.data().garantieempruntm2,
                garantieempruntm3:doc.data().garantieempruntm3,
                garantieempruntm4:doc.data().garantieempruntm4,
                garantieempruntm5:doc.data().garantieempruntm5,
                garantieempruntm6:doc.data().garantieempruntm6,
                garantieempruntm7:doc.data().garantieempruntm7,
                garantieempruntm8:doc.data().garantieempruntm8,
                garantieempruntm9:doc.data().garantieempruntm9,
                garantieempruntm10:doc.data().garantieempruntm10,
                garantieempruntm11:doc.data().garantieempruntm11,
                garantieempruntm12:doc.data().garantieempruntm12,
                
                amm1:doc.data().amm1,
                amm2:doc.data().amm2,
                amm3:doc.data().amm3,
                amm4:doc.data().amm4,
                amm5:doc.data().amm5,
                amm6:doc.data().amm6,
                amm7:doc.data().amm7,
                amm8:doc.data().amm8,
                amm9:doc.data().amm9,
                amm10:doc.data().amm10,
                amm11:doc.data().amm11,
                amm12:doc.data().amm12,
            
                autreachatm1:doc.data().autreachatm1,
                autreachatm2:doc.data().autreachatm2,
                autreachatm3:doc.data().autreachatm3,
                autreachatm4:doc.data().autreachatm4,
                autreachatm5:doc.data().autreachatm5,
                autreachatm6:doc.data().autreachatm6,
                autreachatm7:doc.data().autreachatm7,
                autreachatm8:doc.data().autreachatm8,
                autreachatm9:doc.data().autreachatm9,
                autreachatm10:doc.data().autreachatm10,
                autreachatm11:doc.data().autreachatm11,
                autreachatm12:doc.data().autreachatm12,
                
                transportm1:doc.data().transportm1,
                transportm2:doc.data().transportm2,
                transportm3:doc.data().transportm3,
                transportm4:doc.data().transportm4,
                transportm5:doc.data().transportm5,
                transportm6:doc.data().transportm6,
                transportm7:doc.data().transportm7,
                transportm8:doc.data().transportm8,
                transportm9:doc.data().transportm9,
                transportm10:doc.data().transportm10,
                transportm11:doc.data().transportm11,
                transportm12:doc.data().transportm12,
                
                sem1:doc.data().sem1,
                sem2:doc.data().sem2,
                sem3:doc.data().sem3,
                sem4:doc.data().sem4,
                sem5:doc.data().sem5,
                sem6:doc.data().sem6,
                sem7:doc.data().sem7,
                sem8:doc.data().sem8,
                sem9:doc.data().sem9,
                sem10:doc.data().sem10,
                sem11:doc.data().sem11,
                sem12:doc.data().sem12,
                
                autrechargem1:doc.data().autrechargem1,
                autrechargem2:doc.data().autrechargem2,
                autrechargem3:doc.data().autrechargem3,
                autrechargem4:doc.data().autrechargem4,
                autrechargem5:doc.data().autrechargem5,
                autrechargem6:doc.data().autrechargem6,
                autrechargem7:doc.data().autrechargem7,
                autrechargem8:doc.data().autrechargem8,
                autrechargem9:doc.data().autrechargem9,
                autrechargem10:doc.data().autrechargem10,
                autrechargem11:doc.data().autrechargem11,
                autrechargem12:doc.data().autrechargem12,
                
                impotm1:doc.data().impotm1,
                impotm2:doc.data().impotm2,
                impotm3:doc.data().impotm3,
                impotm4:doc.data().impotm4,
                impotm5:doc.data().impotm5,
                impotm6:doc.data().impotm6,
                impotm7:doc.data().impotm7,
                impotm8:doc.data().impotm8,
                impotm9:doc.data().impotm9,
                impotm10:doc.data().impotm10,
                impotm11:doc.data().impotm11,
                impotm12:doc.data().impotm12,
                
                cpm1:doc.data().cpm1,
                cpm2:doc.data().cpm2,
                cpm3:doc.data().cpm3,
                cpm4:doc.data().cpm4,
                cpm5:doc.data().cpm5,
                cpm6:doc.data().cpm6,
                cpm7:doc.data().cpm7,
                cpm8:doc.data().cpm8,
                cpm9:doc.data().cpm9,
                cpm10:doc.data().cpm10,
                cpm11:doc.data().cpm11,
                cpm12:doc.data().cpm12,
                
                ffm1:doc.data().ffm1,
                ffm2:doc.data().ffm2,
                ffm3:doc.data().ffm3,
                ffm4:doc.data().ffm4,
                ffm5:doc.data().ffm5,
                ffm6:doc.data().ffm6,
                ffm7:doc.data().ffm7,
                ffm8:doc.data().ffm8,
                ffm9:doc.data().ffm9,
                ffm10:doc.data().ffm10,
                ffm11:doc.data().ffm11,
                ffm12:doc.data().ffm12,
                
                tvadecaissem1:doc.data().tvadecaissem1,
                tvadecaissem1:doc.data().tvadecaissem1,
                tvadecaissem2:doc.data().tvadecaissem2,
                tvadecaissem3:doc.data().tvadecaissem3,
                tvadecaissem4:doc.data().tvadecaissem4,
                tvadecaissem5:doc.data().tvadecaissem5,
                tvadecaissem6:doc.data().tvadecaissem6,
                tvadecaissem7:doc.data().tvadecaissem7,
                tvadecaissem8:doc.data().tvadecaissem8,
                tvadecaissem9:doc.data().tvadecaissem9,
                tvadecaissem10:doc.data().tvadecaissem10,
                tvadecaissem11:doc.data().tvadecaissem11,
                tvadecaissem12:doc.data().tvadecaissem12,
                id: doc.data().userId,
                docIdd: doc.id,
              });
              // pour total hors exploit
              let thorsexploit1 =0
              let thorsexploit2 =0
              let thorsexploit3 =0
              let thorsexploit4 =0
              let thorsexploit5 =0
              let thorsexploit6 =0
              let thorsexploit7 =0
              let thorsexploit8 =0
              let thorsexploit9 =0
              let thorsexploit10 =0
              let thorsexploit11 =0
              let thorsexploit12 =0
              // pour total exploit
              let texploit1 =0
              let texploit2 =0
              let texploit3 =0
              let texploit4 =0
              let texploit5 =0
              let texploit6 =0
              let texploit7 =0
              let texploit8 =0
              let texploit9 =0
              let texploit10 =0
              let texploit11 =0
              let texploit12 =0
              // pour encaisse exploit
              let tencaisse1 =0
              let tencaisse2 =0
              let tencaisse3 =0
              let tencaisse4 =0
              let tencaisse5 =0
              let tencaisse6 =0
              let tencaisse7 =0
              let tencaisse8 =0
              let tencaisse9 =0
              let tencaisse10 =0
              let tencaisse11 =0
              let tencaisse12 =0
              // pour total decaissement hors exploit
              let tdecaissehorsexploit1 =0
              let tdecaissehorsexploit2 =0
              let tdecaissehorsexploit3 =0
              let tdecaissehorsexploit4 =0
              let tdecaissehorsexploit5 =0
              let tdecaissehorsexploit6 =0
              let tdecaissehorsexploit7 =0
              let tdecaissehorsexploit8 =0
              let tdecaissehorsexploit9 =0
              let tdecaissehorsexploit10 =0
              let tdecaissehorsexploit11 =0
              let tdecaissehorsexploit12 =0
              // pour total decaissement exploit
              let tdecaisseexploit1 =0
              let tdecaisseexploit2 =0
              let tdecaisseexploit3 =0
              let tdecaisseexploit4 =0
              let tdecaisseexploit5 =0
              let tdecaisseexploit6 =0
              let tdecaisseexploit7 =0
              let tdecaisseexploit8 =0
              let tdecaisseexploit9 =0
              let tdecaisseexploit10 =0
              let tdecaisseexploit11 =0
              let tdecaisseexploit12 =0
              // pour total decaissement
              let tdecaisse1 =0
              let tdecaisse2 =0
              let tdecaisse3 =0
              let tdecaisse4 =0
              let tdecaisse5 =0
              let tdecaisse6 =0
              let tdecaisse7 =0
              let tdecaisse8 =0
              let tdecaisse9 =0
              let tdecaisse10 =0
              let tdecaisse11 =0
              let tdecaisse12 =0
              // pour total solde du mois
              let tsoldedumois1 =0
              let tsoldedumois2 =0
              let tsoldedumois3 =0
              let tsoldedumois4 =0
              let tsoldedumois5 =0
              let tsoldedumois6 =0
              let tsoldedumois7 =0
              let tsoldedumois8 =0
              let tsoldedumois9 =0
              let tsoldedumois10 =0
              let tsoldedumois11 =0
              let tsoldedumois12 =0
              // pour total solde debut du mois
              let tsoldedebutdumois1 =0
              let tsoldedebutdumois2 =0
              let tsoldedebutdumois3 =0
              let tsoldedebutdumois4 =0
              let tsoldedebutdumois5 =0
              let tsoldedebutdumois6 =0
              let tsoldedebutdumois7 =0
              let tsoldedebutdumois8 =0
              let tsoldedebutdumois9 =0
              let tsoldedebutdumois10 =0
              let tsoldedebutdumois11 =0
              let tsoldedebutdumois12 =0
              // pour total solde fin du mois
              let tsoldefindumois1 =0
              let tsoldefindumois2 =0
              let tsoldefindumois3 =0
              let tsoldefindumois4 =0
              let tsoldefindumois5 =0
              let tsoldefindumois6 =0
              let tsoldefindumois7 =0
              let tsoldefindumois8 =0
              let tsoldefindumois9 =0
              let tsoldefindumois10 =0
              let tsoldefindumois11 =0
              let tsoldefindumois12 =0
    
              tdecaisseexploit1 = Number(doc.data().amm1)+Number(doc.data().autreachatm1)+Number(doc.data().transportm1)+Number(doc.data().sem1)+Number(doc.data().autrechargem1)+Number(doc.data().impotm1)+Number(doc.data().cpm1)+Number(doc.data().ffm1)+Number(doc.data().tvadecaissem1)
              tdecaisseexploit2 = Number(doc.data().amm2)+Number(doc.data().autreachatm2)+Number(doc.data().transportm2)+Number(doc.data().sem2)+Number(doc.data().autrechargem2)+Number(doc.data().impotm2)+Number(doc.data().cpm2)+Number(doc.data().ffm2)+Number(doc.data().tvadecaissem2)
              tdecaisseexploit3 = Number(doc.data().amm3)+Number(doc.data().autreachatm3)+Number(doc.data().transportm3)+Number(doc.data().sem3)+Number(doc.data().autrechargem3)+Number(doc.data().impotm3)+Number(doc.data().cpm3)+Number(doc.data().ffm3)+Number(doc.data().tvadecaissem3)
              tdecaisseexploit4 = Number(doc.data().amm4)+Number(doc.data().autreachatm4)+Number(doc.data().transportm4)+Number(doc.data().sem4)+Number(doc.data().autrechargem4)+Number(doc.data().impotm4)+Number(doc.data().cpm4)+Number(doc.data().ffm4)+Number(doc.data().tvadecaissem4)
              tdecaisseexploit5 = Number(doc.data().amm5)+Number(doc.data().autreachatm5)+Number(doc.data().transportm5)+Number(doc.data().sem5)+Number(doc.data().autrechargem5)+Number(doc.data().impotm5)+Number(doc.data().cpm5)+Number(doc.data().ffm5)+Number(doc.data().tvadecaissem5)
              tdecaisseexploit6 = Number(doc.data().amm6)+Number(doc.data().autreachatm6)+Number(doc.data().transportm6)+Number(doc.data().sem6)+Number(doc.data().autrechargem6)+Number(doc.data().impotm6)+Number(doc.data().cpm6)+Number(doc.data().ffm6)+Number(doc.data().tvadecaissem6)
              tdecaisseexploit7 = Number(doc.data().amm7)+Number(doc.data().autreachatm7)+Number(doc.data().transportm7)+Number(doc.data().sem7)+Number(doc.data().autrechargem7)+Number(doc.data().impotm7)+Number(doc.data().cpm7)+Number(doc.data().ffm7)+Number(doc.data().tvadecaissem7)
              tdecaisseexploit8 = Number(doc.data().amm8)+Number(doc.data().autreachatm8)+Number(doc.data().transportm8)+Number(doc.data().sem8)+Number(doc.data().autrechargem8)+Number(doc.data().impotm8)+Number(doc.data().cpm8)+Number(doc.data().ffm8)+Number(doc.data().tvadecaissem8)
              tdecaisseexploit9 = Number(doc.data().amm9)+Number(doc.data().autreachatm9)+Number(doc.data().transportm9)+Number(doc.data().sem9)+Number(doc.data().autrechargem9)+Number(doc.data().impotm9)+Number(doc.data().cpm9)+Number(doc.data().ffm9)+Number(doc.data().tvadecaissem9)
              tdecaisseexploit10 = Number(doc.data().amm10)+Number(doc.data().autreachatm10)+Number(doc.data().transportm10)+Number(doc.data().sem10)+Number(doc.data().autrechargem10)+Number(doc.data().impotm10)+Number(doc.data().cpm10)+Number(doc.data().ffm10)+Number(doc.data().tvadecaissem10)
              tdecaisseexploit11 = Number(doc.data().amm11)+Number(doc.data().autreachatm11)+Number(doc.data().transportm11)+Number(doc.data().sem11)+Number(doc.data().autrechargem11)+Number(doc.data().impotm11)+Number(doc.data().cpm11)+Number(doc.data().ffm11)+Number(doc.data().tvadecaissem11)
              tdecaisseexploit12 = Number(doc.data().amm12)+Number(doc.data().autreachatm12)+Number(doc.data().transportm12)+Number(doc.data().sem12)+Number(doc.data().autrechargem12)+Number(doc.data().impotm12)+Number(doc.data().cpm12)+Number(doc.data().ffm12)+Number(doc.data().tvadecaissem12)
    
              setTotalDecaisseExploit1(tdecaisseexploit1)
              setTotalDecaisseExploit2(tdecaisseexploit2)
              setTotalDecaisseExploit3(tdecaisseexploit3)
              setTotalDecaisseExploit4(tdecaisseexploit4)
              setTotalDecaisseExploit5(tdecaisseexploit5)
              setTotalDecaisseExploit6(tdecaisseexploit6)
              setTotalDecaisseExploit7(tdecaisseexploit7)
              setTotalDecaisseExploit8(tdecaisseexploit8)
              setTotalDecaisseExploit9(tdecaisseexploit9)
              setTotalDecaisseExploit10(tdecaisseexploit10)
              setTotalDecaisseExploit11(tdecaisseexploit11)
              setTotalDecaisseExploit12(tdecaisseexploit12)
    
              tdecaissehorsexploit1 = Number(doc.data().investm1)+Number(doc.data().rembourseccm1)+Number(doc.data().rembourseempruntm1)+Number(doc.data().garantieempruntm1)
              tdecaissehorsexploit2 = Number(doc.data().investm2)+Number(doc.data().rembourseccm2)+Number(doc.data().rembourseempruntm2)+Number(doc.data().garantieempruntm2)
              tdecaissehorsexploit3 = Number(doc.data().investm3)+Number(doc.data().rembourseccm3)+Number(doc.data().rembourseempruntm3)+Number(doc.data().garantieempruntm3)
              tdecaissehorsexploit4 = Number(doc.data().investm4)+Number(doc.data().rembourseccm4)+Number(doc.data().rembourseempruntm4)+Number(doc.data().garantieempruntm4)
              tdecaissehorsexploit5 = Number(doc.data().investm5)+Number(doc.data().rembourseccm5)+Number(doc.data().rembourseempruntm5)+Number(doc.data().garantieempruntm5)
              tdecaissehorsexploit6 = Number(doc.data().investm6)+Number(doc.data().rembourseccm6)+Number(doc.data().rembourseempruntm6)+Number(doc.data().garantieempruntm6)
              tdecaissehorsexploit7 = Number(doc.data().investm7)+Number(doc.data().rembourseccm7)+Number(doc.data().rembourseempruntm7)+Number(doc.data().garantieempruntm7)
              tdecaissehorsexploit8 = Number(doc.data().investm8)+Number(doc.data().rembourseccm8)+Number(doc.data().rembourseempruntm8)+Number(doc.data().garantieempruntm8)
              tdecaissehorsexploit9 = Number(doc.data().investm9)+Number(doc.data().rembourseccm9)+Number(doc.data().rembourseempruntm9)+Number(doc.data().garantieempruntm9)
              tdecaissehorsexploit10 = Number(doc.data().investm10)+Number(doc.data().rembourseccm10)+Number(doc.data().rembourseempruntm10)+Number(doc.data().garantieempruntm10)
              tdecaissehorsexploit11 = Number(doc.data().investm11)+Number(doc.data().rembourseccm11)+Number(doc.data().rembourseempruntm11)+Number(doc.data().garantieempruntm11)
              tdecaissehorsexploit12 = Number(doc.data().investm12)+Number(doc.data().rembourseccm12)+Number(doc.data().rembourseempruntm12)+Number(doc.data().garantieempruntm12)
    
              setTotalDecaisseHorsexploit1(tdecaissehorsexploit1)
              setTotalDecaisseHorsexploit2(tdecaissehorsexploit2)
              setTotalDecaisseHorsexploit3(tdecaissehorsexploit3)
              setTotalDecaisseHorsexploit4(tdecaissehorsexploit4)
              setTotalDecaisseHorsexploit5(tdecaissehorsexploit5)
              setTotalDecaisseHorsexploit6(tdecaissehorsexploit6)
              setTotalDecaisseHorsexploit7(tdecaissehorsexploit7)
              setTotalDecaisseHorsexploit8(tdecaissehorsexploit8)
              setTotalDecaisseHorsexploit9(tdecaissehorsexploit9)
              setTotalDecaisseHorsexploit10(tdecaissehorsexploit10)
              setTotalDecaisseHorsexploit11(tdecaissehorsexploit11)
              setTotalDecaisseHorsexploit12(tdecaissehorsexploit12)
    
              thorsexploit1 = Number(doc.data().apportpm1)+Number(doc.data().associem1)+Number(doc.data().empruntm1)+Number(doc.data().subventionm1)+Number(doc.data().aidesm1)+Number(doc.data().apportccm1)
              thorsexploit2 = Number(doc.data().apportpm2)+Number(doc.data().associem2)+Number(doc.data().empruntm2)+Number(doc.data().subventionm2)+Number(doc.data().aidesm2)+Number(doc.data().apportccm2)
              thorsexploit3 = Number(doc.data().apportpm3)+Number(doc.data().associem3)+Number(doc.data().empruntm3)+Number(doc.data().subventionm3)+Number(doc.data().aidesm3)+Number(doc.data().apportccm3)
              thorsexploit4 = Number(doc.data().apportpm4)+Number(doc.data().associem4)+Number(doc.data().empruntm4)+Number(doc.data().subventionm4)+Number(doc.data().aidesm4)+Number(doc.data().apportccm4)
              thorsexploit5 = Number(doc.data().apportpm5)+Number(doc.data().associem5)+Number(doc.data().empruntm5)+Number(doc.data().subventionm5)+Number(doc.data().aidesm5)+Number(doc.data().apportccm5)
              thorsexploit6 = Number(doc.data().apportpm6)+Number(doc.data().associem6)+Number(doc.data().empruntm6)+Number(doc.data().subventionm6)+Number(doc.data().aidesm6)+Number(doc.data().apportccm6)
              thorsexploit7 = Number(doc.data().apportpm7)+Number(doc.data().associem7)+Number(doc.data().empruntm7)+Number(doc.data().subventionm7)+Number(doc.data().aidesm7)+Number(doc.data().apportccm7)
              thorsexploit8 = Number(doc.data().apportpm8)+Number(doc.data().associem8)+Number(doc.data().empruntm8)+Number(doc.data().subventionm8)+Number(doc.data().aidesm8)+Number(doc.data().apportccm8)
              thorsexploit9 = Number(doc.data().apportpm9)+Number(doc.data().associem9)+Number(doc.data().empruntm9)+Number(doc.data().subventionm9)+Number(doc.data().aidesm9)+Number(doc.data().apportccm9)
              thorsexploit10 = Number(doc.data().apportpm10)+Number(doc.data().associem10)+Number(doc.data().empruntm10)+Number(doc.data().subventionm10)+Number(doc.data().aidesm10)+Number(doc.data().apportccm10)
              thorsexploit11 = Number(doc.data().apportpm11)+Number(doc.data().associem11)+Number(doc.data().empruntm11)+Number(doc.data().subventionm11)+Number(doc.data().aidesm11)+Number(doc.data().apportccm11)
              thorsexploit12 = Number(doc.data().apportpm12)+Number(doc.data().associem12)+Number(doc.data().empruntm12)+Number(doc.data().subventionm12)+Number(doc.data().aidesm12)+Number(doc.data().apportccm12)
              
              setTotalHorsExploit1(thorsexploit1)
              setTotalHorsExploit2(thorsexploit2)
              setTotalHorsExploit3(thorsexploit3)
              setTotalHorsExploit4(thorsexploit4)
              setTotalHorsExploit5(thorsexploit5)
              setTotalHorsExploit6(thorsexploit6)
              setTotalHorsExploit7(thorsexploit7)
              setTotalHorsExploit8(thorsexploit8)
              setTotalHorsExploit9(thorsexploit9)
              setTotalHorsExploit10(thorsexploit10)
              setTotalHorsExploit11(thorsexploit11)
              setTotalHorsExploit12(thorsexploit12)
    
              texploit1 = Number(doc.data().cahtm1)+Number(doc.data().tvam1)+Number(doc.data().creancem1)+Number(doc.data().autrecaissem1)
              texploit2 = Number(doc.data().cahtm2)+Number(doc.data().tvam2)+Number(doc.data().creancem2)+Number(doc.data().autrecaissem2)
              texploit3 = Number(doc.data().cahtm3)+Number(doc.data().tvam3)+Number(doc.data().creancem3)+Number(doc.data().autrecaissem3)
              texploit4 = Number(doc.data().cahtm4)+Number(doc.data().tvam4)+Number(doc.data().creancem4)+Number(doc.data().autrecaissem4)
              texploit5 = Number(doc.data().cahtm5)+Number(doc.data().tvam5)+Number(doc.data().creancem5)+Number(doc.data().autrecaissem5)
              texploit6 = Number(doc.data().cahtm6)+Number(doc.data().tvam6)+Number(doc.data().creancem6)+Number(doc.data().autrecaissem6)
              texploit7 = Number(doc.data().cahtm7)+Number(doc.data().tvam7)+Number(doc.data().creancem7)+Number(doc.data().autrecaissem7)
              texploit8 = Number(doc.data().cahtm8)+Number(doc.data().tvam8)+Number(doc.data().creancem8)+Number(doc.data().autrecaissem8)
              texploit9 = Number(doc.data().cahtm9)+Number(doc.data().tvam9)+Number(doc.data().creancem9)+Number(doc.data().autrecaissem9)
              texploit10 = Number(doc.data().cahtm10)+Number(doc.data().tvam10)+Number(doc.data().creancem10)+Number(doc.data().autrecaissem10)
              texploit11 = Number(doc.data().cahtm11)+Number(doc.data().tvam11)+Number(doc.data().creancem11)+Number(doc.data().autrecaissem11)
              texploit12 = Number(doc.data().cahtm12)+Number(doc.data().tvam12)+Number(doc.data().creancem12)+Number(doc.data().autrecaissem12)
        
              setTotalExploit1(texploit1)
              setTotalExploit2(texploit2)
              setTotalExploit3(texploit3)
              setTotalExploit4(texploit4)
              setTotalExploit5(texploit5)
              setTotalExploit6(texploit6)
              setTotalExploit7(texploit7)
              setTotalExploit8(texploit8)
              setTotalExploit9(texploit9)
              setTotalExploit10(texploit10)
              setTotalExploit11(texploit11)
              setTotalExploit12(texploit12)
    
              tencaisse1 = texploit1+thorsexploit1
              tencaisse2 = texploit2+thorsexploit2
              tencaisse3 = texploit3+thorsexploit2
              tencaisse4 = texploit4+thorsexploit2
              tencaisse5 = texploit5+thorsexploit2
              tencaisse6 = texploit6+thorsexploit2
              tencaisse7 = texploit7+thorsexploit2
              tencaisse8 = texploit8+thorsexploit2
              tencaisse9 = texploit9+thorsexploit2
              tencaisse10 = texploit10+thorsexploit2
              tencaisse11 = texploit11+thorsexploit2
              tencaisse12 = texploit12+thorsexploit2
              
              setTotalEncaisse1(tencaisse1)
              setTotalEncaisse2(tencaisse2)
              setTotalEncaisse3(tencaisse3)
              setTotalEncaisse4(tencaisse4)
              setTotalEncaisse5(tencaisse5)
              setTotalEncaisse6(tencaisse6)
              setTotalEncaisse7(tencaisse7)
              setTotalEncaisse8(tencaisse8)
              setTotalEncaisse9(tencaisse9)
              setTotalEncaisse10(tencaisse10)
              setTotalEncaisse11(tencaisse11)
              setTotalEncaisse12(tencaisse12)
             
              tdecaisse1 = tdecaissehorsexploit1+tdecaisseexploit1
              tdecaisse2 = tdecaissehorsexploit2+tdecaisseexploit2
              tdecaisse3 = tdecaissehorsexploit3+tdecaisseexploit3
              tdecaisse4 = tdecaissehorsexploit4+tdecaisseexploit4
              tdecaisse5 = tdecaissehorsexploit5+tdecaisseexploit5
              tdecaisse6 = tdecaissehorsexploit6+tdecaisseexploit6
              tdecaisse7 = tdecaissehorsexploit7+tdecaisseexploit7
              tdecaisse8 = tdecaissehorsexploit8+tdecaisseexploit8
              tdecaisse9 = tdecaissehorsexploit9+tdecaisseexploit9
              tdecaisse10 = tdecaissehorsexploit10+tdecaisseexploit10
              tdecaisse11 = tdecaissehorsexploit11+tdecaisseexploit11
              tdecaisse12 = tdecaissehorsexploit12+tdecaisseexploit12
    
              setTotalDecaisse1(tdecaisse1)
              setTotalDecaisse2(tdecaisse2)
              setTotalDecaisse3(tdecaisse3)
              setTotalDecaisse4(tdecaisse4)
              setTotalDecaisse5(tdecaisse5)
              setTotalDecaisse6(tdecaisse6)
              setTotalDecaisse7(tdecaisse7)
              setTotalDecaisse8(tdecaisse8)
              setTotalDecaisse9(tdecaisse9)
              setTotalDecaisse10(tdecaisse10)
              setTotalDecaisse11(tdecaisse11)
              setTotalDecaisse12(tdecaisse12)
              /** solde du mois */
              tsoldedumois1 = tencaisse1-tdecaisse1
              tsoldedumois2 = tencaisse2-tdecaisse2
              tsoldedumois3 = tencaisse3-tdecaisse2
              tsoldedumois4 = tencaisse4-tdecaisse2
              tsoldedumois5 = tencaisse5-tdecaisse2
              tsoldedumois6 = tencaisse6-tdecaisse2
              tsoldedumois7 = tencaisse7-tdecaisse2
              tsoldedumois8 = tencaisse8-tdecaisse2
              tsoldedumois9 = tencaisse9-tdecaisse2
              tsoldedumois10 = tencaisse10-tdecaisse2
              tsoldedumois11 = tencaisse11-tdecaisse2
              tsoldedumois12 = tencaisse12-tdecaisse2
              setSoldeDuMois1(tsoldedumois1)
              setSoldeDuMois2(tsoldedumois2)
              setSoldeDuMois3(tsoldedumois3)
              setSoldeDuMois4(tsoldedumois4)
              setSoldeDuMois5(tsoldedumois5)
              setSoldeDuMois6(tsoldedumois6)
              setSoldeDuMois7(tsoldedumois7)
              setSoldeDuMois8(tsoldedumois8)
              setSoldeDuMois9(tsoldedumois9)
              setSoldeDuMois10(tsoldedumois10)
              setSoldeDuMois11(tsoldedumois11)
              setSoldeDuMois12(tsoldedumois12)
    
              tsoldedebutdumois1 = 0
              tsoldefindumois1 = tsoldedebutdumois1+tsoldedumois1
    
              tsoldedebutdumois2 = tsoldefindumois1
              tsoldefindumois2 = tsoldedebutdumois2+tsoldedumois2
              
              tsoldedebutdumois3 = tsoldefindumois2
              tsoldefindumois3 = tsoldedebutdumois3+tsoldedumois3
              
              tsoldedebutdumois4 = tsoldefindumois3
              tsoldefindumois4 = tsoldedebutdumois4+tsoldedumois4
    
              tsoldedebutdumois5 = tsoldefindumois4
              tsoldefindumois5 = tsoldedebutdumois5+tsoldedumois5
             
              tsoldedebutdumois6 = tsoldefindumois5
              tsoldefindumois6 = tsoldedebutdumois6+tsoldedumois6
              
              tsoldedebutdumois7 = tsoldefindumois6
              tsoldefindumois7 = tsoldedebutdumois7+tsoldedumois7
              
              tsoldedebutdumois8 = tsoldefindumois7
              tsoldefindumois8 = tsoldedebutdumois8+tsoldedumois8
    
              tsoldedebutdumois9 = tsoldefindumois8
              tsoldefindumois9 = tsoldedebutdumois9+tsoldedumois9
              
              tsoldedebutdumois10 = tsoldefindumois9
              tsoldefindumois10 = tsoldedebutdumois10+tsoldedumois10
    
              tsoldedebutdumois11 = tsoldefindumois10
              tsoldefindumois11 = tsoldedebutdumois11+tsoldedumois11
    
              tsoldedebutdumois12 = tsoldefindumois11
              tsoldefindumois12 = tsoldedebutdumois12+tsoldedumois12
    
              setSoldeDebutDuMois1(tsoldedebutdumois1)
              setSoldeDebutDuMois2(tsoldedebutdumois2)
              setSoldeDebutDuMois3(tsoldedebutdumois3)
              setSoldeDebutDuMois4(tsoldedebutdumois4)
              setSoldeDebutDuMois5(tsoldedebutdumois5)
              setSoldeDebutDuMois6(tsoldedebutdumois6)
              setSoldeDebutDuMois7(tsoldedebutdumois7)
              setSoldeDebutDuMois8(tsoldedebutdumois8)
              setSoldeDebutDuMois9(tsoldedebutdumois9)
              setSoldeDebutDuMois10(tsoldedebutdumois10)
              setSoldeDebutDuMois11(tsoldedebutdumois11)
              setSoldeDebutDuMois12(tsoldedebutdumois12)
              
              setSoldeFinDuMois1(tsoldefindumois1)
              setSoldeFinDuMois2(tsoldefindumois2)
              setSoldeFinDuMois3(tsoldefindumois3)
              setSoldeFinDuMois4(tsoldefindumois4)
              setSoldeFinDuMois5(tsoldefindumois5)
              setSoldeFinDuMois6(tsoldefindumois6)
              setSoldeFinDuMois7(tsoldefindumois7)
              setSoldeFinDuMois8(tsoldefindumois8)
              setSoldeFinDuMois9(tsoldefindumois9)
              setSoldeFinDuMois10(tsoldefindumois10)
              setSoldeFinDuMois11(tsoldefindumois11)
              setSoldeFinDuMois12(tsoldefindumois12)
              
            });
            setPlan(dat);
            //console.table(dat);
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
                        <th style={{ minWidth: 50}}></th>
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
                    {plan.map((item, index) => {
                    return (
                        <>
                            <tr style={{backgroundColor:'#18A4F6'}}>
                                <td style={{ minWidth: 50}}><b>Solde de debut de mois</b></td>
                                <td><b>{soldeDebutDuMois1}</b></td>
                                <td><b>{soldeDebutDuMois2}</b></td>
                                <td><b>{soldeDebutDuMois3}</b></td>
                                <td><b>{soldeDebutDuMois4}</b></td>
                                <td><b>{soldeDebutDuMois5}</b></td>
                                <td><b>{soldeDebutDuMois6}</b></td>
                                <td><b>{soldeDebutDuMois7}</b></td>
                                <td><b>{soldeDebutDuMois8}</b></td>
                                <td><b>{soldeDebutDuMois9}</b></td>
                                <td><b>{soldeDebutDuMois10}</b></td>
                                <td><b>{soldeDebutDuMois11}</b></td>
                                <td><b>{soldeDebutDuMois12}</b></td>
                                
                            </tr>
                            <tr style={{backgroundColor:'#18A4F6'}}>
                                <td><b>Encaissements </b></td>
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
                                <td></td>
                            </tr>
                            <tr style={{backgroundColor:'#15B2D115'}}>
                                <td><b> Hors exploitation  </b></td>
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
                            </tr>
                        
                            <tr>
                                <td> Apport personnel </td>
                                <td>{item.apportpm1}</td>
                                <td>{item.apportpm2}</td>
                                <td>{item.apportpm3}</td>
                                <td>{item.apportpm4}</td>
                                <td>{item.apportpm5}</td>
                                <td>{item.apportpm6}</td>
                                <td>{item.apportpm7}</td>
                                <td>{item.apportpm8}</td>
                                <td>{item.apportpm9}</td>
                                <td>{item.apportpm10}</td>
                                <td>{item.apportpm11}</td>
                                <td>{item.apportpm12}</td>
                            </tr>
                            <tr>
                                <td> Associés </td>
                                <td>{item.associem1}</td>
                                <td>{item.associem2}</td>
                                <td>{item.associem3}</td>
                                <td>{item.associem4}</td>
                                <td>{item.associem5}</td>
                                <td>{item.associem6}</td>
                                <td>{item.associem7}</td>
                                <td>{item.associem8}</td>
                                <td>{item.associem9}</td>
                                <td>{item.associem10}</td>
                                <td>{item.associem11}</td>
                                <td>{item.associem12}</td>
                            </tr>
                            <tr>
                                <td> Emprunts  </td>
                                <td>{item.empruntm1}</td>
                                <td>{item.empruntm2}</td>
                                <td>{item.empruntm3}</td>
                                <td>{item.empruntm4}</td>
                                <td>{item.empruntm5}</td>
                                <td>{item.empruntm6}</td>
                                <td>{item.empruntm7}</td>
                                <td>{item.empruntm8}</td>
                                <td>{item.empruntm9}</td>
                                <td>{item.empruntm10}</td>
                                <td>{item.empruntm11}</td>
                                <td>{item.empruntm12}</td>
                            </tr>
                            <tr>
                                <td> Subventions   </td>
                                <td>{item.subventionm1}</td>
                                <td>{item.subventionm2}</td>
                                <td>{item.subventionm3}</td>
                                <td>{item.subventionm4}</td>
                                <td>{item.subventionm5}</td>
                                <td>{item.subventionm6}</td>
                                <td>{item.subventionm7}</td>
                                <td>{item.subventionm8}</td>
                                <td>{item.subventionm9}</td>
                                <td>{item.subventionm10}</td>
                                <td>{item.subventionm11}</td>
                                <td>{item.subventionm12}</td>
                            </tr>
                            <tr>
                                <td> Apport en compte courant </td>
                                <td>{item.apportccm1}</td>
                                <td>{item.apportccm2}</td>
                                <td>{item.apportccm3}</td>
                                <td>{item.apportccm4}</td>
                                <td>{item.apportccm5}</td>
                                <td>{item.apportccm6}</td>
                                <td>{item.apportccm7}</td>
                                <td>{item.apportccm8}</td>
                                <td>{item.apportccm9}</td>
                                <td>{item.apportccm10}</td>
                                <td>{item.apportccm11}</td>
                                <td>{item.apportccm12}</td>
                            </tr>
                            <tr>
                                <td> <b> Total encaissements hors exploitation </b> </td>
                                <td>{totalHorsExploit1}</td>
                                <td>{totalHorsExploit2}</td>
                                <td>{totalHorsExploit3}</td>
                                <td>{totalHorsExploit4}</td>
                                <td>{totalHorsExploit5}</td>
                                <td>{totalHorsExploit6}</td>
                                <td>{totalHorsExploit7}</td>
                                <td>{totalHorsExploit8}</td>
                                <td>{totalHorsExploit9}</td>
                                <td>{totalHorsExploit10}</td>
                                <td>{totalHorsExploit11}</td>
                                <td>{totalHorsExploit12}</td>
                            </tr>
                            <tr>
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td> <b> Exploitation </b> </td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td> Chiffres d'Affaires HT encaissés   </td>
                                <td>{item.cahtm1}</td>
                                <td>{item.cahtm2}</td>
                                <td>{item.cahtm3}</td>
                                <td>{item.cahtm4}</td>
                                <td>{item.cahtm5}</td>
                                <td>{item.cahtm6}</td>
                                <td>{item.cahtm7}</td>
                                <td>{item.cahtm8}</td>
                                <td>{item.cahtm9}</td>
                                <td>{item.cahtm10}</td>
                                <td>{item.cahtm11}</td>
                                <td>{item.cahtm12}</td>
                            </tr>
                            <tr>
                                <td>  TVA encaissée/vente   </td>
                                <td>{item.tvam1}</td>
                                <td>{item.tvam2}</td>
                                <td>{item.tvam3}</td>
                                <td>{item.tvam4}</td>
                                <td>{item.tvam5}</td>
                                <td>{item.tvam6}</td>
                                <td>{item.tvam7}</td>
                                <td>{item.tvam8}</td>
                                <td>{item.tvam9}</td>
                                <td>{item.tvam10}</td>
                                <td>{item.tvam11}</td>
                                <td>{item.tvam12}</td>
                            </tr>
                            <tr>
                                <td> Créances clients encaissées </td>
                                <td>{item.creancem1}</td>
                                <td>{item.creancem2}</td>
                                <td>{item.creancem3}</td>
                                <td>{item.creancem4}</td>
                                <td>{item.creancem5}</td>
                                <td>{item.creancem6}</td>
                                <td>{item.creancem7}</td>
                                <td>{item.creancem8}</td>
                                <td>{item.creancem9}</td>
                                <td>{item.creancem10}</td>
                                <td>{item.creancem11}</td>
                                <td>{item.creancem12}</td>
                            </tr>
                            <tr>
                                <td> Autres encaissements </td>
                                <td>{item.autrecaissem1}</td>
                                <td>{item.autrecaissem2}</td>
                                <td>{item.autrecaissem3}</td>
                                <td>{item.autrecaissem4}</td>
                                <td>{item.autrecaissem5}</td>
                                <td>{item.autrecaissem6}</td>
                                <td>{item.autrecaissem7}</td>
                                <td>{item.autrecaissem8}</td>
                                <td>{item.autrecaissem9}</td>
                                <td>{item.autrecaissem10}</td>
                                <td>{item.autrecaissem11}</td>
                                <td>{item.autrecaissem12}</td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Total encaissements d'exploitation</b> </td>
                                <td><b>{totalExploit1}</b></td>
                                <td><b>{totalExploit2}</b></td>
                                <td><b>{totalExploit3}</b></td>
                                <td><b>{totalExploit4}</b></td>
                                <td><b>{totalExploit5}</b></td>
                                <td><b>{totalExploit6}</b></td>
                                <td><b>{totalExploit7}</b></td>
                                <td><b>{totalExploit8}</b></td>
                                <td><b>{totalExploit9}</b></td>
                                <td><b>{totalExploit10}</b></td>
                                <td><b>{totalExploit11}</b></td>
                                <td><b>{totalExploit12}</b></td>
                            </tr>
                            <tr>
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Total encaissements</b> </td>
                                <td><b>{totalEncaisse1}</b></td>
                                <td><b>{totalEncaisse2}</b></td>
                                <td><b>{totalEncaisse3}</b></td>
                                <td><b>{totalEncaisse4}</b></td>
                                <td><b>{totalEncaisse5}</b></td>
                                <td><b>{totalEncaisse6}</b></td>
                                <td><b>{totalEncaisse7}</b></td>
                                <td><b>{totalEncaisse8}</b></td>
                                <td><b>{totalEncaisse9}</b></td>
                                <td><b>{totalEncaisse10}</b></td>
                                <td><b>{totalEncaisse11}</b></td>
                                <td><b>{totalEncaisse12}</b></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Décaissements</b> </td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td> <b>Hors Exploitation</b> </td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td> Investissements </td>
                                <td>{item.investm1}</td>
                                <td>{item.investm2}</td>
                                <td>{item.investm3}</td>
                                <td>{item.investm4}</td>
                                <td>{item.investm5}</td>
                                <td>{item.investm6}</td>
                                <td>{item.investm7}</td>
                                <td>{item.investm8}</td>
                                <td>{item.investm9}</td>
                                <td>{item.investm10}</td>
                                <td>{item.investm11}</td>
                                <td>{item.investm12}</td>
                            </tr>
                            <tr>
                                <td> Remboursement comptes courants </td>
                                <td>{item.rembourseccm1}</td>
                                <td>{item.rembourseccm2}</td>
                                <td>{item.rembourseccm3}</td>
                                <td>{item.rembourseccm4}</td>
                                <td>{item.rembourseccm5}</td>
                                <td>{item.rembourseccm6}</td>
                                <td>{item.rembourseccm7}</td>
                                <td>{item.rembourseccm8}</td>
                                <td>{item.rembourseccm9}</td>
                                <td>{item.rembourseccm10}</td>
                                <td>{item.rembourseccm11}</td>
                                <td>{item.rembourseccm12}</td>
                            </tr>
                            <tr>
                                <td> Remboursement emprunt (échéance) </td>
                                <td>{item.rembourseempruntm1}</td>
                                <td>{item.rembourseempruntm2}</td>
                                <td>{item.rembourseempruntm3}</td>
                                <td>{item.rembourseempruntm4}</td>
                                <td>{item.rembourseempruntm5}</td>
                                <td>{item.rembourseempruntm6}</td>
                                <td>{item.rembourseempruntm7}</td>
                                <td>{item.rembourseempruntm8}</td>
                                <td>{item.rembourseempruntm9}</td>
                                <td>{item.rembourseempruntm10}</td>
                                <td>{item.rembourseempruntm11}</td>
                                <td>{item.rembourseempruntm12}</td>
                            </tr>
                            <tr>
                                <td> Garantie emprunt </td>
                                <td>{item.garantieempruntm1}</td>
                                <td>{item.garantieempruntm2}</td>
                                <td>{item.garantieempruntm3}</td>
                                <td>{item.garantieempruntm4}</td>
                                <td>{item.garantieempruntm5}</td>
                                <td>{item.garantieempruntm6}</td>
                                <td>{item.garantieempruntm7}</td>
                                <td>{item.garantieempruntm8}</td>
                                <td>{item.garantieempruntm9}</td>
                                <td>{item.garantieempruntm10}</td>
                                <td>{item.garantieempruntm11}</td>
                                <td>{item.garantieempruntm12}</td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Total décaissements hors exploitation </b> </td>
                                <td><b>{totalDecaisseHorsexploit1}</b></td>
                                <td><b>{totalDecaisseHorsexploit2}</b></td>
                                <td><b>{totalDecaisseHorsexploit3}</b></td>
                                <td><b>{totalDecaisseHorsexploit4}</b></td>
                                <td><b>{totalDecaisseHorsexploit5}</b></td>
                                <td><b>{totalDecaisseHorsexploit6}</b></td>
                                <td><b>{totalDecaisseHorsexploit7}</b></td>
                                <td><b>{totalDecaisseHorsexploit8}</b></td>
                                <td><b>{totalDecaisseHorsexploit9}</b></td>
                                <td><b>{totalDecaisseHorsexploit10}</b></td>
                                <td><b>{totalDecaisseHorsexploit11}</b></td>
                                <td><b>{totalDecaisseHorsexploit12}</b></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Exploitation </b> </td>
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
                                <td></td>
                            </tr>
                            <tr>
                                <td> Achats matières premières  </td>
                                <td>{item.amm1}</td>
                                <td>{item.amm2}</td>
                                <td>{item.amm3}</td>
                                <td>{item.amm4}</td>
                                <td>{item.amm5}</td>
                                <td>{item.amm6}</td>
                                <td>{item.amm7}</td>
                                <td>{item.amm8}</td>
                                <td>{item.amm9}</td>
                                <td>{item.amm10}</td>
                                <td>{item.amm11}</td>
                                <td>{item.amm12}</td>
                            </tr>
                            <tr>
                                <td> Autres Achats </td>
                                <td>{item.autreachatm1}</td>
                                <td>{item.autreachatm2}</td>
                                <td>{item.autreachatm3}</td>
                                <td>{item.autreachatm4}</td>
                                <td>{item.autreachatm5}</td>
                                <td>{item.autreachatm6}</td>
                                <td>{item.autreachatm7}</td>
                                <td>{item.autreachatm8}</td>
                                <td>{item.autreachatm9}</td>
                                <td>{item.autreachatm10}</td>
                                <td>{item.autreachatm11}</td>
                                <td>{item.autreachatm12}</td>
                            </tr>
                            <tr>
                                <td> Transports </td>
                                <td>{item.transportm1}</td>
                                <td>{item.transportm2}</td>
                                <td>{item.transportm3}</td>
                                <td>{item.transportm4}</td>
                                <td>{item.transportm5}</td>
                                <td>{item.transportm6}</td>
                                <td>{item.transportm7}</td>
                                <td>{item.transportm8}</td>
                                <td>{item.transportm9}</td>
                                <td>{item.transportm10}</td>
                                <td>{item.transportm11}</td>
                                <td>{item.transportm12}</td>
                            </tr>
                            <tr>
                                <td> Services extérieurs </td>
                                <td>{item.sem1}</td>
                                <td>{item.sem2}</td>
                                <td>{item.sem3}</td>
                                <td>{item.sem4}</td>
                                <td>{item.sem5}</td>
                                <td>{item.sem6}</td>
                                <td>{item.sem7}</td>
                                <td>{item.sem8}</td>
                                <td>{item.sem9}</td>
                                <td>{item.sem10}</td>
                                <td>{item.sem11}</td>
                                <td>{item.sem12}</td>
                            </tr>
                            <tr>
                                <td> Autres charges </td>
                                <td>{item.autrechargem1}</td>
                                <td>{item.autrechargem2}</td>
                                <td>{item.autrechargem3}</td>
                                <td>{item.autrechargem4}</td>
                                <td>{item.autrechargem5}</td>
                                <td>{item.autrechargem6}</td>
                                <td>{item.autrechargem7}</td>
                                <td>{item.autrechargem8}</td>
                                <td>{item.autrechargem9}</td>
                                <td>{item.autrechargem10}</td>
                                <td>{item.autrechargem11}</td>
                                <td>{item.autrechargem12}</td>
                            </tr>
                            <tr>
                                <td> Impôts et taxes </td>
                                <td>{item.impotm1}</td>
                                <td>{item.impotm2}</td>
                                <td>{item.impotm3}</td>
                                <td>{item.impotm4}</td>
                                <td>{item.impotm5}</td>
                                <td>{item.impotm6}</td>
                                <td>{item.impotm7}</td>
                                <td>{item.impotm8}</td>
                                <td>{item.impotm9}</td>
                                <td>{item.impotm10}</td>
                                <td>{item.impotm11}</td>
                                <td>{item.impotm12}</td>
                            </tr>
                            <tr>
                                <td> Charges du personnel </td>
                                <td>{item.cpm1}</td>
                                <td>{item.cpm2}</td>
                                <td>{item.cpm3}</td>
                                <td>{item.cpm4}</td>
                                <td>{item.cpm5}</td>
                                <td>{item.cpm6}</td>
                                <td>{item.cpm7}</td>
                                <td>{item.cpm8}</td>
                                <td>{item.cpm9}</td>
                                <td>{item.cpm10}</td>
                                <td>{item.cpm11}</td>
                                <td>{item.cpm12}</td>
                            </tr>
                            <tr>
                                <td> Frais financiers </td>
                                <td>{item.ffm1}</td>
                                <td>{item.ffm2}</td>
                                <td>{item.ffm3}</td>
                                <td>{item.ffm4}</td>
                                <td>{item.ffm5}</td>
                                <td>{item.ffm6}</td>
                                <td>{item.ffm7}</td>
                                <td>{item.ffm8}</td>
                                <td>{item.ffm9}</td>
                                <td>{item.ffm10}</td>
                                <td>{item.ffm11}</td>
                                <td>{item.ffm12}</td>
                            </tr>
                            <tr>
                                <td> TVA décaissée </td>
                                <td>{item.tvadecaissem1}</td>
                                <td>{item.tvadecaissem2}</td>
                                <td>{item.tvadecaissem3}</td>
                                <td>{item.tvadecaissem4}</td>
                                <td>{item.tvadecaissem5}</td>
                                <td>{item.tvadecaissem6}</td>
                                <td>{item.tvadecaissem7}</td>
                                <td>{item.tvadecaissem8}</td>
                                <td>{item.tvadecaissem9}</td>
                                <td>{item.tvadecaissem10}</td>
                                <td>{item.tvadecaissem11}</td>
                                <td>{item.tvadecaissem12}</td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Total décaissements d'exploitation  </b> </td>
                                <td><b>{totalDecaisseExploit1}</b></td>
                                <td><b>{totalDecaisseExploit2}</b></td>
                                <td><b>{totalDecaisseExploit3}</b></td>
                                <td><b>{totalDecaisseExploit4}</b></td>
                                <td><b>{totalDecaisseExploit5}</b></td>
                                <td><b>{totalDecaisseExploit6}</b></td>
                                <td><b>{totalDecaisseExploit7}</b></td>
                                <td><b>{totalDecaisseExploit8}</b></td>
                                <td><b>{totalDecaisseExploit9}</b></td>
                                <td><b>{totalDecaisseExploit10}</b></td>
                                <td><b>{totalDecaisseExploit11}</b></td>
                                <td><b>{totalDecaisseExploit12}</b></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>Total décaissements  </b> </td>
                                <td><b>{totalDecaisse1}</b></td>
                                <td><b>{totalDecaisse2}</b></td>
                                <td><b>{totalDecaisse3}</b></td>
                                <td><b>{totalDecaisse4}</b></td>
                                <td><b>{totalDecaisse5}</b></td>
                                <td><b>{totalDecaisse6}</b></td>
                                <td><b>{totalDecaisse7}</b></td>
                                <td><b>{totalDecaisse8}</b></td>
                                <td><b>{totalDecaisse9}</b></td>
                                <td><b>{totalDecaisse10}</b></td>
                                <td><b>{totalDecaisse11}</b></td>
                                <td><b>{totalDecaisse12}</b></td>
                            </tr>
                            <tr>
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b> Solde du mois </b> </td>
                                <td><b>{soldeDuMois1}</b></td>
                                <td><b>{soldeDuMois2}</b></td>
                                <td><b>{soldeDuMois3}</b></td>
                                <td><b>{soldeDuMois4}</b></td>
                                <td><b>{soldeDuMois5}</b></td>
                                <td><b>{soldeDuMois6}</b></td>
                                <td><b>{soldeDuMois7}</b></td>
                                <td><b>{soldeDuMois8}</b></td>
                                <td><b>{soldeDuMois9}</b></td>
                                <td><b>{soldeDuMois10}</b></td>
                                <td><b>{soldeDuMois11}</b></td>
                                <td><b>{soldeDuMois12}</b></td>
                            </tr>
                            <tr>
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
                                <td></td>
                                <td></td>
                            </tr>
                            <tr style={{backgroundColor:"#18A4F6"}}>
                                <td> <b>  Solde de fin de mois  </b> </td>
                                <td><b>{soldeFinDuMois1}</b></td>
                                <td><b>{soldeFinDuMois2}</b></td>
                                <td><b>{soldeFinDuMois3}</b></td>
                                <td><b>{soldeFinDuMois4}</b></td>
                                <td><b>{soldeFinDuMois5}</b></td>
                                <td><b>{soldeFinDuMois6}</b></td>
                                <td><b>{soldeFinDuMois7}</b></td>
                                <td><b>{soldeFinDuMois8}</b></td>
                                <td><b>{soldeFinDuMois9}</b></td>
                                <td><b>{soldeFinDuMois10}</b></td>
                                <td><b>{soldeFinDuMois11}</b></td>
                                <td><b>{soldeFinDuMois12}</b></td>
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

export default Tresorerie