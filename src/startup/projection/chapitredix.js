import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../context/context";
import { firebasee } from "../../context/firebase";
import "./Chapitreone.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import SaveIcon from '@material-ui/icons/Save';
import Edit from '@material-ui/icons/Edit';
import Add from '@material-ui/icons/Add';
import CheckCircle from "@material-ui/icons/CheckCircle";
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const useStyles = makeStyles({
  root: {
    width: '50%',
  },
  container: {
    maxHeight: 400,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#18A4F6',
    color: theme.palette.common.white,
    
    fontSize: 20,
  },
}))(TableCell);

const Chapitredix = () => {
  const initialvalues = {
   apportpm1:0,
   apportpm2:0,
   apportpm3:0,
   apportpm4:0,
   apportpm5:0,
   apportpm6:0,
   apportpm7:0,
   apportpm8:0,
   apportpm9:0,
   apportpm10:0,
   apportpm11:0,
   apportpm12:0,

   associem1:0,
   associem2:0,
   associem3:0,
   associem4:0,
   associem5:0,
   associem6:0,
   associem7:0,
   associem8:0,
   associem9:0,
   associem10:0,
   associem11:0,
   associem12:0,
   
   empruntm1:0,
   empruntm2:0,
   empruntm3:0,
   empruntm4:0,
   empruntm5:0,
   empruntm6:0,
   empruntm7:0,
   empruntm8:0,
   empruntm9:0,
   empruntm10:0,
   empruntm11:0,
   empruntm12:0,
   
   subventionm1:0,
   subventionm2:0,
   subventionm3:0,
   subventionm4:0,
   subventionm5:0,
   subventionm6:0,
   subventionm7:0,
   subventionm8:0,
   subventionm9:0,
   subventionm10:0,
   subventionm11:0,
   subventionm12:0,
   
   aidesm1:0,
   aidesm2:0,
   aidesm3:0,
   aidesm4:0,
   aidesm5:0,
   aidesm6:0,
   aidesm7:0,
   aidesm8:0,
   aidesm9:0,
   aidesm10:0,
   aidesm11:0,
   aidesm12:0,

   apportccm1:0,
   apportccm2:0,
   apportccm3:0,
   apportccm4:0,
   apportccm5:0,
   apportccm6:0,
   apportccm7:0,
   apportccm8:0,
   apportccm9:0,
   apportccm10:0,
   apportccm11:0,
   apportccm12:0,
   
   cahtm1:0,
   cahtm2:0,
   cahtm3:0,
   cahtm4:0,
   cahtm5:0,
   cahtm6:0,
   cahtm7:0,
   cahtm8:0,
   cahtm9:0,
   cahtm10:0,
   cahtm11:0,
   cahtm12:0,
   
   tvam1:0,
   tvam2:0,
   tvam3:0,
   tvam4:0,
   tvam5:0,
   tvam6:0,
   tvam7:0,
   tvam8:0,
   tvam9:0,
   tvam10:0,
   tvam11:0,
   tvam12:0,
   
   creancem1:0,
   creancem2:0,
   creancem3:0,
   creancem4:0,
   creancem5:0,
   creancem6:0,
   creancem7:0,
   creancem8:0,
   creancem9:0,
   creancem10:0,
   creancem11:0,
   creancem12:0,
   
   autrecaissem1:0,
   autrecaissem2:0,
   autrecaissem3:0,
   autrecaissem4:0,
   autrecaissem5:0,
   autrecaissem6:0,
   autrecaissem7:0,
   autrecaissem8:0,
   autrecaissem9:0,
   autrecaissem10:0,
   autrecaissem11:0,
   autrecaissem12:0,
   
   investm1:0,
   investm2:0,
   investm3:0,
   investm4:0,
   investm5:0,
   investm6:0,
   investm7:0,
   investm8:0,
   investm9:0,
   investm10:0,
   investm11:0,
   investm12:0,
   
   rembourseccm1:0,
   rembourseccm2:0,
   rembourseccm3:0,
   rembourseccm4:0,
   rembourseccm5:0,
   rembourseccm6:0,
   rembourseccm7:0,
   rembourseccm8:0,
   rembourseccm9:0,
   rembourseccm10:0,
   rembourseccm11:0,
   rembourseccm12:0,
   
   rembourseempruntm1:0,
   rembourseempruntm2:0,
   rembourseempruntm3:0,
   rembourseempruntm4:0,
   rembourseempruntm5:0,
   rembourseempruntm6:0,
   rembourseempruntm7:0,
   rembourseempruntm8:0,
   rembourseempruntm9:0,
   rembourseempruntm10:0,
   rembourseempruntm11:0,
   rembourseempruntm12:0,
   
   garantieempruntm1:0,
   garantieempruntm2:0,
   garantieempruntm3:0,
   garantieempruntm4:0,
   garantieempruntm5:0,
   garantieempruntm6:0,
   garantieempruntm7:0,
   garantieempruntm8:0,
   garantieempruntm9:0,
   garantieempruntm10:0,
   garantieempruntm11:0,
   garantieempruntm12:0,
   
   amm1:0,
   amm2:0,
   amm3:0,
   amm4:0,
   amm5:0,
   amm6:0,
   amm7:0,
   amm8:0,
   amm9:0,
   amm10:0,
   amm11:0,
   amm12:0,
   
   autreachatm1:0,
   autreachatm2:0,
   autreachatm3:0,
   autreachatm4:0,
   autreachatm5:0,
   autreachatm6:0,
   autreachatm7:0,
   autreachatm8:0,
   autreachatm9:0,
   autreachatm10:0,
   autreachatm11:0,
   autreachatm12:0,
   
   transportm1:0,
   transportm2:0,
   transportm3:0,
   transportm4:0,
   transportm5:0,
   transportm6:0,
   transportm7:0,
   transportm8:0,
   transportm9:0,
   transportm10:0,
   transportm11:0,
   transportm12:0,
   
   sem1:0,
   sem2:0,
   sem3:0,
   sem4:0,
   sem5:0,
   sem6:0,
   sem7:0,
   sem8:0,
   sem9:0,
   sem10:0,
   sem11:0,
   sem12:0,
   
   autrechargem1:0,
   autrechargem2:0,
   autrechargem3:0,
   autrechargem4:0,
   autrechargem5:0,
   autrechargem6:0,
   autrechargem7:0,
   autrechargem8:0,
   autrechargem9:0,
   autrechargem10:0,
   autrechargem11:0,
   autrechargem12:0,
   
   impotm1:0,
   impotm2:0,
   impotm3:0,
   impotm4:0,
   impotm5:0,
   impotm6:0,
   impotm7:0,
   impotm8:0,
   impotm9:0,
   impotm10:0,
   impotm11:0,
   impotm12:0,
   
   cp1m:0,
   cp2m:0,
   cp3m:0,
   cp4m:0,
   cp5m:0,
   cp6m:0,
   cp7m:0,
   cp8m:0,
   cp9m:0,
   cp10m:0,
   cp11m:0,
   cp12m:0,
   
   ffm1:0,
   ffm2:0,
   ffm3:0,
   ffm4:0,
   ffm5:0,
   ffm6:0,
   ffm7:0,
   ffm8:0,
   ffm9:0,
   ffm10:0,
   ffm11:0,
   ffm12:0,
   
   tvadecaissem1:0,
   tvadecaissem2:0,
   tvadecaissem3:0,
   tvadecaissem4:0,
   tvadecaissem5:0,
   tvadecaissem6:0,
   tvadecaissem7:0,
   tvadecaissem8:0,
   tvadecaissem9:0,
   tvadecaissem10:0,
   tvadecaissem11:0,
   tvadecaissem12:0,


};
  const editObject = {
    apportpm1:0,
    apportpm2:0,
    apportpm3:0,
    apportpm4:0,
    apportpm5:0,
    apportpm6:0,
    apportpm7:0,
    apportpm8:0,
    apportpm9:0,
    apportpm10:0,
    apportpm11:0,
    apportpm12:0,
    associem1:0,
    associem2:0,
    associem3:0,
    associem4:0,
    associem5:0,
    associem6:0,
    associem7:0,
    associem8:0,
    associem9:0,
    associem10:0,
    associem11:0,
    associem12:0,
    empruntm1:0,
    empruntm2:0,
    empruntm3:0,
    empruntm4:0,
    empruntm5:0,
    empruntm6:0,
    empruntm7:0,
    empruntm8:0,
    empruntm9:0,
    empruntm10:0,
    empruntm11:0,
    empruntm12:0,
    subventionm1:0,
    subventionm2:0,
    subventionm3:0,
    subventionm4:0,
    subventionm5:0,
    subventionm6:0,
    subventionm7:0,
    subventionm8:0,
    subventionm9:0,
    subventionm10:0,
    subventionm11:0,
    subventionm12:0,
    aidesm1:0,
    aidesm2:0,
    aidesm3:0,
    aidesm4:0,
    aidesm5:0,
    aidesm6:0,
    aidesm7:0,
    aidesm8:0,
    aidesm9:0,
    aidesm10:0,
    aidesm11:0,
    aidesm12:0,
    apportccm1:0,
    apportccm2:0,
    apportccm3:0,
    apportccm4:0,
    apportccm5:0,
    apportccm6:0,
    apportccm7:0,
    apportccm8:0,
    apportccm9:0,
    apportccm10:0,
    apportccm11:0,
    apportccm12:0,
    
    cahtm1:0,
    cahtm2:0,
    cahtm3:0,
    cahtm4:0,
    cahtm5:0,
    cahtm6:0,
    cahtm7:0,
    cahtm8:0,
    cahtm9:0,
    cahtm10:0,
    cahtm11:0,
    cahtm12:0,
    
    tvam1:0,
    tvam2:0,
    tvam3:0,
    tvam4:0,
    tvam5:0,
    tvam6:0,
    tvam7:0,
    tvam8:0,
    tvam9:0,
    tvam10:0,
    tvam11:0,
    tvam12:0,
    
    creancem1:0,
    creancem2:0,
    creancem3:0,
    creancem4:0,
    creancem5:0,
    creancem6:0,
    creancem7:0,
    creancem8:0,
    creancem9:0,
    creancem10:0,
    creancem11:0,
    creancem12:0,
    
    autrecaissem1:0,
    autrecaissem2:0,
    autrecaissem3:0,
    autrecaissem4:0,
    autrecaissem5:0,
    autrecaissem6:0,
    autrecaissem7:0,
    autrecaissem8:0,
    autrecaissem9:0,
    autrecaissem10:0,
    autrecaissem11:0,
    autrecaissem12:0,
    
    investm1:0,
    investm2:0,
    investm3:0,
    investm4:0,
    investm5:0,
    investm6:0,
    investm7:0,
    investm8:0,
    investm9:0,
    investm10:0,
    investm11:0,
    investm12:0,
    
    rembourseccm1:0,
    rembourseccm2:0,
    rembourseccm3:0,
    rembourseccm4:0,
    rembourseccm5:0,
    rembourseccm6:0,
    rembourseccm7:0,
    rembourseccm8:0,
    rembourseccm9:0,
    rembourseccm10:0,
    rembourseccm11:0,
    rembourseccm12:0,
    
    rembourseempruntm1:0,
    rembourseempruntm2:0,
    rembourseempruntm3:0,
    rembourseempruntm4:0,
    rembourseempruntm5:0,
    rembourseempruntm6:0,
    rembourseempruntm7:0,
    rembourseempruntm8:0,
    rembourseempruntm9:0,
    rembourseempruntm10:0,
    rembourseempruntm11:0,
    rembourseempruntm12:0,
    
    garantieempruntm1:0,
    garantieempruntm2:0,
    garantieempruntm3:0,
    garantieempruntm4:0,
    garantieempruntm5:0,
    garantieempruntm6:0,
    garantieempruntm7:0,
    garantieempruntm8:0,
    garantieempruntm9:0,
    garantieempruntm10:0,
    garantieempruntm11:0,
    garantieempruntm12:0,
    
    amm1:0,
    amm2:0,
    amm3:0,
    amm4:0,
    amm5:0,
    amm6:0,
    amm7:0,
    amm8:0,
    amm9:0,
    amm10:0,
    amm11:0,
    amm12:0,
    
    autreachatm1:0,
    autreachatm2:0,
    autreachatm3:0,
    autreachatm4:0,
    autreachatm5:0,
    autreachatm6:0,
    autreachatm7:0,
    autreachatm8:0,
    autreachatm9:0,
    autreachatm10:0,
    autreachatm11:0,
    autreachatm12:0,
    
    transportm1:0,
    transportm2:0,
    transportm3:0,
    transportm4:0,
    transportm5:0,
    transportm6:0,
    transportm7:0,
    transportm8:0,
    transportm9:0,
    transportm10:0,
    transportm11:0,
    transportm12:0,
    
    sem1:0,
    sem2:0,
    sem3:0,
    sem4:0,
    sem5:0,
    sem6:0,
    sem7:0,
    sem8:0,
    sem9:0,
    sem10:0,
    sem11:0,
    sem12:0,
    
    autrechargem1:0,
    autrechargem2:0,
    autrechargem3:0,
    autrechargem4:0,
    autrechargem5:0,
    autrechargem6:0,
    autrechargem7:0,
    autrechargem8:0,
    autrechargem9:0,
    autrechargem10:0,
    autrechargem11:0,
    autrechargem12:0,
    
    impotm1:0,
    impotm2:0,
    impotm3:0,
    impotm4:0,
    impotm5:0,
    impotm6:0,
    impotm7:0,
    impotm8:0,
    impotm9:0,
    impotm10:0,
    impotm11:0,
    impotm12:0,
    
    cp1m:0,
    cp2m:0,
    cp3m:0,
    cp4m:0,
    cp5m:0,
    cp6m:0,
    cp7m:0,
    cp8m:0,
    cp9m:0,
    cp10m:0,
    cp11m:0,
    cp12m:0,
    
    ffm1:0,
    ffm2:0,
    ffm3:0,
    ffm4:0,
    ffm5:0,
    ffm6:0,
    ffm7:0,
    ffm8:0,
    ffm9:0,
    ffm10:0,
    ffm11:0,
    ffm12:0,
    
    tvadecaissem1:0,
    tvadecaissem2:0,
    tvadecaissem3:0,
    tvadecaissem4:0,
    tvadecaissem5:0,
    tvadecaissem6:0,
    tvadecaissem7:0,
    tvadecaissem8:0,
    tvadecaissem9:0,
    tvadecaissem10:0,
    tvadecaissem11:0,
    tvadecaissem12:0,
  };
  const { userId } = useGlobalContext();
  const [show, setShow] = React.useState(false);
  const [plan, setPlan] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [idDoc, setIdDoc] = React.useState("");
  const [load, setLoad] = React.useState(false);
  const [editTable, setEditTable] = React.useState(editObject);
  
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

  //const [errorElements, setErrorElements] = React.useState(true);


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = (e) => {
    var { name, value } = e.target;
    setEditTable({
      ...editTable,
      [name]: value,
    });
    console.log("name "+name+" value "+value)
  };
  const handleModif = (id,index) => {
    setEditTable(plan[index])
    setShow(!show);
    if(show){
      setIdDoc("");
    }else{
      setIdDoc(id);
    }
  };
  const editPlan = (e) => {
    e.preventDefault();
    setLoad(true)
    //setShow(!show)
    firebasee
      .firestore()
      .collection("plan-tresorerie")
      .doc(idDoc)
      .set(
        {
        apportpm1:editTable.apportpm1,
        apportpm2:editTable.apportpm2,
        apportpm3:editTable.apportpm3,
        apportpm4:editTable.apportpm4,
        apportpm5:editTable.apportpm5,
        apportpm6:editTable.apportpm6,
        apportpm7:editTable.apportpm7,
        apportpm8:editTable.apportpm8,
        apportpm9:editTable.apportpm9,
        apportpm10:editTable.apportpm10,
        apportpm11:editTable.apportpm11,
        apportpm12:editTable.apportpm12,
        
        associem1:editTable.associem1,
        associem2:editTable.associem2,
        associem3:editTable.associem3,
        associem4:editTable.associem4,
        associem5:editTable.associem5,
        associem6:editTable.associem6,
        associem7:editTable.associem7,
        associem8:editTable.associem8,
        associem9:editTable.associem9,
        associem10:editTable.associem10,
        associem11:editTable.associem11,
        associem12:editTable.associem12,
        
        empruntm1:editTable.empruntm1,
        empruntm2:editTable.empruntm2,
        empruntm3:editTable.empruntm3,
        empruntm4:editTable.empruntm4,
        empruntm5:editTable.empruntm5,
        empruntm6:editTable.empruntm6,
        empruntm7:editTable.empruntm7,
        empruntm8:editTable.empruntm8,
        empruntm9:editTable.empruntm9,
        empruntm10:editTable.empruntm10,
        empruntm11:editTable.empruntm11,
        empruntm12:editTable.empruntm12,
       
        subventionm1:editTable.subventionm1,
        subventionm2:editTable.subventionm2,
        subventionm3:editTable.subventionm3,
        subventionm4:editTable.subventionm4,
        subventionm5:editTable.subventionm5,
        subventionm6:editTable.subventionm6,
        subventionm7:editTable.subventionm7,
        subventionm8:editTable.subventionm8,
        subventionm9:editTable.subventionm9,
        subventionm10:editTable.subventionm10,
        subventionm11:editTable.subventionm11,
        subventionm12:editTable.subventionm12,
        aidesm1:editTable.aidesm1,
        aidesm2:editTable.aidesm2,
        aidesm3:editTable.aidesm3,
        aidesm4:editTable.aidesm4,
        aidesm5:editTable.aidesm5,
        aidesm6:editTable.aidesm6,
        aidesm7:editTable.aidesm7,
        aidesm8:editTable.aidesm8,
        aidesm9:editTable.aidesm9,
        aidesm10:editTable.aidesm10,
        aidesm11:editTable.aidesm11,
        aidesm12:editTable.aidesm12,
        
        apportccm1:editTable.apportccm1,
        apportccm2:editTable.apportccm2,
        apportccm3:editTable.apportccm3,
        apportccm4:editTable.apportccm4,
        apportccm5:editTable.apportccm5,
        apportccm6:editTable.apportccm6,
        apportccm7:editTable.apportccm7,
        apportccm8:editTable.apportccm8,
        apportccm9:editTable.apportccm9,
        apportccm10:editTable.apportccm10,
        apportccm11:editTable.apportccm11,
        apportccm12:editTable.apportccm12,
        
        cahtm1:editTable.cahtm1,
        cahtm2:editTable.cahtm2,
        cahtm3:editTable.cahtm3,
        cahtm4:editTable.cahtm4,
        cahtm5:editTable.cahtm5,
        cahtm6:editTable.cahtm6,
        cahtm7:editTable.cahtm7,
        cahtm8:editTable.cahtm8,
        cahtm9:editTable.cahtm9,
        cahtm10:editTable.cahtm10,
        cahtm11:editTable.cahtm11,
        cahtm12:editTable.cahtm12,
       
        tvam1:editTable.tvam1,
        tvam2:editTable.tvam2,
        tvam3:editTable.tvam3,
        tvam4:editTable.tvam4,
        tvam5:editTable.tvam5,
        tvam6:editTable.tvam6,
        tvam7:editTable.tvam7,
        tvam8:editTable.tvam8,
        tvam9:editTable.tvam9,
        tvam10:editTable.tvam10,
        tvam11:editTable.tvam11,
        tvam12:editTable.tvam12,
        
        creancem1:editTable.creancem1,
        creancem2:editTable.creancem2,
        creancem3:editTable.creancem3,
        creancem4:editTable.creancem4,
        creancem5:editTable.creancem5,
        creancem6:editTable.creancem6,
        creancem7:editTable.creancem7,
        creancem8:editTable.creancem8,
        creancem9:editTable.creancem9,
        creancem10:editTable.creancem10,
        creancem11:editTable.creancem11,
        creancem12:editTable.creancem12,
        
        autrecaissem1:editTable.autrecaissem1,
        autrecaissem2:editTable.autrecaissem2,
        autrecaissem3:editTable.autrecaissem3,
        autrecaissem4:editTable.autrecaissem4,
        autrecaissem5:editTable.autrecaissem5,
        autrecaissem6:editTable.autrecaissem6,
        autrecaissem7:editTable.autrecaissem7,
        autrecaissem8:editTable.autrecaissem8,
        autrecaissem9:editTable.autrecaissem9,
        autrecaissem10:editTable.autrecaissem10,
        autrecaissem11:editTable.autrecaissem11,
        autrecaissem12:editTable.autrecaissem12,
        
        investm1:editTable.investm1,
        investm2:editTable.investm2,
        investm3:editTable.investm3,
        investm4:editTable.investm4,
        investm5:editTable.investm5,
        investm6:editTable.investm6,
        investm7:editTable.investm7,
        investm8:editTable.investm8,
        investm9:editTable.investm9,
        investm10:editTable.investm10,
        investm11:editTable.investm11,
        investm12:editTable.investm12,
        
        rembourseccm1:editTable.rembourseccm1,
        rembourseccm2:editTable.rembourseccm2,
        rembourseccm3:editTable.rembourseccm3,
        rembourseccm4:editTable.rembourseccm4,
        rembourseccm5:editTable.rembourseccm5,
        rembourseccm6:editTable.rembourseccm6,
        rembourseccm7:editTable.rembourseccm7,
        rembourseccm8:editTable.rembourseccm8,
        rembourseccm9:editTable.rembourseccm9,
        rembourseccm10:editTable.rembourseccm10,
        rembourseccm11:editTable.rembourseccm11,
        rembourseccm12:editTable.rembourseccm12,
        
        rembourseempruntm1:editTable.rembourseempruntm1,
        rembourseempruntm2:editTable.rembourseempruntm2,
        rembourseempruntm3:editTable.rembourseempruntm3,
        rembourseempruntm4:editTable.rembourseempruntm4,
        rembourseempruntm5:editTable.rembourseempruntm5,
        rembourseempruntm6:editTable.rembourseempruntm6,
        rembourseempruntm7:editTable.rembourseempruntm7,
        rembourseempruntm8:editTable.rembourseempruntm8,
        rembourseempruntm9:editTable.rembourseempruntm9,
        rembourseempruntm10:editTable.rembourseempruntm10,
        rembourseempruntm11:editTable.rembourseempruntm11,
        rembourseempruntm12:editTable.rembourseempruntm12,
        
        garantieempruntm1:editTable.garantieempruntm1,
        garantieempruntm2:editTable.garantieempruntm2,
        garantieempruntm3:editTable.garantieempruntm3,
        garantieempruntm4:editTable.garantieempruntm4,
        garantieempruntm5:editTable.garantieempruntm5,
        garantieempruntm6:editTable.garantieempruntm6,
        garantieempruntm7:editTable.garantieempruntm7,
        garantieempruntm8:editTable.garantieempruntm8,
        garantieempruntm9:editTable.garantieempruntm9,
        garantieempruntm10:editTable.garantieempruntm10,
        garantieempruntm11:editTable.garantieempruntm11,
        garantieempruntm12:editTable.garantieempruntm12,
        
        amm1:editTable.amm1,
        amm2:editTable.amm2,
        amm3:editTable.amm3,
        amm4:editTable.amm4,
        amm5:editTable.amm5,
        amm6:editTable.amm6,
        amm7:editTable.amm7,
        amm8:editTable.amm8,
        amm9:editTable.amm9,
        amm10:editTable.amm10,
        amm11:editTable.amm11,
        amm12:editTable.amm12,
       
        autreachatm1:editTable.autreachatm1,
        autreachatm2:editTable.autreachatm2,
        autreachatm3:editTable.autreachatm3,
        autreachatm4:editTable.autreachatm4,
        autreachatm5:editTable.autreachatm5,
        autreachatm6:editTable.autreachatm6,
        autreachatm7:editTable.autreachatm7,
        autreachatm8:editTable.autreachatm8,
        autreachatm9:editTable.autreachatm9,
        autreachatm10:editTable.autreachatm10,
        autreachatm11:editTable.autreachatm11,
        autreachatm12:editTable.autreachatm12,
        
        transportm1:editTable.transportm1,
        transportm2:editTable.transportm2,
        transportm3:editTable.transportm3,
        transportm4:editTable.transportm4,
        transportm5:editTable.transportm5,
        transportm6:editTable.transportm6,
        transportm7:editTable.transportm7,
        transportm8:editTable.transportm8,
        transportm9:editTable.transportm9,
        transportm10:editTable.transportm10,
        transportm11:editTable.transportm11,
        transportm12:editTable.transportm12,
        
        sem1:editTable.sem1,
        sem2:editTable.sem2,
        sem3:editTable.sem3,
        sem4:editTable.sem4,
        sem5:editTable.sem5,
        sem6:editTable.sem6,
        sem7:editTable.sem7,
        sem8:editTable.sem8,
        sem9:editTable.sem9,
        sem10:editTable.sem10,
        sem11:editTable.sem11,
        sem12:editTable.sem12,
        
        autrechargem1:editTable.autrechargem1,
        autrechargem2:editTable.autrechargem2,
        autrechargem3:editTable.autrechargem3,
        autrechargem4:editTable.autrechargem4,
        autrechargem5:editTable.autrechargem5,
        autrechargem6:editTable.autrechargem6,
        autrechargem7:editTable.autrechargem7,
        autrechargem8:editTable.autrechargem8,
        autrechargem9:editTable.autrechargem9,
        autrechargem10:editTable.autrechargem10,
        autrechargem11:editTable.autrechargem11,
        autrechargem12:editTable.autrechargem12,
        
        impotm1:editTable.impotm1,
        impotm2:editTable.impotm2,
        impotm3:editTable.impotm3,
        impotm4:editTable.impotm4,
        impotm5:editTable.impotm5,
        impotm6:editTable.impotm6,
        impotm7:editTable.impotm7,
        impotm8:editTable.impotm8,
        impotm9:editTable.impotm9,
        impotm10:editTable.impotm10,
        impotm11:editTable.impotm11,
        impotm12:editTable.impotm12,
        
        cpm1:editTable.cpm1,
        cpm2:editTable.cpm2,
        cpm3:editTable.cpm3,
        cpm4:editTable.cpm4,
        cpm5:editTable.cpm5,
        cpm6:editTable.cpm6,
        cpm7:editTable.cpm7,
        cpm8:editTable.cpm8,
        cpm9:editTable.cpm9,
        cpm10:editTable.cpm10,
        cpm11:editTable.cpm11,
        cpm12:editTable.cpm12,
        
        ffm1:editTable.ffm1,
        ffm2:editTable.ffm2,
        ffm3:editTable.ffm3,
        ffm4:editTable.ffm4,
        ffm5:editTable.ffm5,
        ffm6:editTable.ffm6,
        ffm7:editTable.ffm7,
        ffm8:editTable.ffm8,
        ffm9:editTable.ffm9,
        ffm10:editTable.ffm10,
        ffm11:editTable.ffm11,
        ffm12:editTable.ffm12,
        
        tvadecaissem1:editTable.tvadecaissem1,
        tvadecaissem2:editTable.tvadecaissem2,       
        tvadecaissem3:editTable.tvadecaissem3,
        tvadecaissem4:editTable.tvadecaissem4,
        tvadecaissem5:editTable.tvadecaissem5,
        tvadecaissem6:editTable.tvadecaissem6,
        tvadecaissem7:editTable.tvadecaissem7,
        tvadecaissem8:editTable.tvadecaissem8,
        tvadecaissem9:editTable.tvadecaissem9,
        tvadecaissem10:editTable.tvadecaissem10,
        tvadecaissem11:editTable.tvadecaissem12,
        tvadecaissem12:editTable.tvadecaissem12,
        
        userId: userId,
        },
        { merge: true }
      )
      .then((data) => {
        console.log("data" + data);
        //setLoad(false)
        setEditTable({})
        setOpen(true)
      })
      .catch((err) => console.error(err));
    setToggle(!toggle);
    setIdDoc("");
  };
  const deleteplan = (id) => {
    setLoad(true)
    firebasee
      .firestore()
      .collection("plan-tresorerie")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted")
        setLoad(false)
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  };
  const getDate = () => {
    setLoad(true)
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
        setLoad(false)
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(!show)
    setLoad(true)
    firebasee
      .firestore()
      .collection("plan-tresorerie")
      .add({
        apportpm1:editTable.apportpm1,
        apportpm2:editTable.apportpm2,
        apportpm3:editTable.apportpm3,
        apportpm4:editTable.apportpm4,
        apportpm5:editTable.apportpm5,
        apportpm6:editTable.apportpm6,
        apportpm7:editTable.apportpm7,
        apportpm8:editTable.apportpm8,
        apportpm9:editTable.apportpm9,
        apportpm10:editTable.apportpm10,
        apportpm11:editTable.apportpm11,
        apportpm12:editTable.apportpm12,
        apportpm12:editTable.apportpm12,
        
        associem1:editTable.associem1,
        associem2:editTable.associem2,
        associem3:editTable.associem3,
        associem4:editTable.associem4,
        associem5:editTable.associem5,
        associem6:editTable.associem6,
        associem7:editTable.associem7,
        associem8:editTable.associem8,
        associem9:editTable.associem9,
        associem10:editTable.associem10,
        associem11:editTable.associem11,
        associem12:editTable.associem12,
        associem12:editTable.associem12,
        
        empruntm1:editTable.empruntm1,
        empruntm2:editTable.empruntm2,
        empruntm3:editTable.empruntm3,
        empruntm4:editTable.empruntm4,
        empruntm5:editTable.empruntm5,
        empruntm6:editTable.empruntm6,
        empruntm7:editTable.empruntm7,
        empruntm8:editTable.empruntm8,
        empruntm9:editTable.empruntm9,
        empruntm10:editTable.empruntm10,
        empruntm10:editTable.empruntm10,
        empruntm11:editTable.empruntm11,
        empruntm12:editTable.empruntm12,
       
        subventionm1:editTable.subventionm1,
        subventionm2:editTable.subventionm2,
        subventionm3:editTable.subventionm3,
        subventionm4:editTable.subventionm4,
        subventionm5:editTable.subventionm5,
        subventionm6:editTable.subventionm6,
        subventionm7:editTable.subventionm7,
        subventionm8:editTable.subventionm8,
        subventionm9:editTable.subventionm9,
        subventionm10:editTable.subventionm10,
        subventionm11:editTable.subventionm11,
        subventionm12:editTable.subventionm12,
        subventionm12:editTable.subventionm12,
        aidesm1:editTable.aidesm1,
        aidesm2:editTable.aidesm2,
        aidesm3:editTable.aidesm3,
        aidesm4:editTable.aidesm4,
        aidesm5:editTable.aidesm5,
        aidesm6:editTable.aidesm6,
        aidesm7:editTable.aidesm7,
        aidesm8:editTable.aidesm8,
        aidesm9:editTable.aidesm9,
        aidesm10:editTable.aidesm10,
        aidesm11:editTable.aidesm11,
        aidesm12:editTable.aidesm12,
        aidesm12:editTable.aidesm12,
        
        apportccm1:editTable.apportccm1,
        apportccm2:editTable.apportccm2,
        apportccm3:editTable.apportccm3,
        apportccm4:editTable.apportccm4,
        apportccm5:editTable.apportccm5,
        apportccm6:editTable.apportccm6,
        apportccm7:editTable.apportccm7,
        apportccm8:editTable.apportccm8,
        apportccm9:editTable.apportccm9,
        apportccm10:editTable.apportccm10,
        apportccm11:editTable.apportccm11,
        apportccm11:editTable.apportccm11,
        apportccm12:editTable.apportccm12,
        
        cahtm1:editTable.cahtm1,
        cahtm2:editTable.cahtm2,
        cahtm3:editTable.cahtm3,
        cahtm4:editTable.cahtm4,
        cahtm5:editTable.cahtm5,
        cahtm6:editTable.cahtm6,
        cahtm7:editTable.cahtm7,
        cahtm8:editTable.cahtm8,
        cahtm9:editTable.cahtm9,
        cahtm10:editTable.cahtm10,
        cahtm10:editTable.cahtm10,
        cahtm11:editTable.cahtm11,
        cahtm12:editTable.cahtm12,
       
        tvam1:editTable.tvam1,
        tvam2:editTable.tvam2,
        tvam2:editTable.tvam2,
        tvam3:editTable.tvam3,
        tvam4:editTable.tvam4,
        tvam5:editTable.tvam5,
        tvam6:editTable.tvam6,
        tvam7:editTable.tvam7,
        tvam8:editTable.tvam8,
        tvam9:editTable.tvam9,
        tvam10:editTable.tvam10,
        tvam11:editTable.tvam11,
        tvam12:editTable.tvam12,
        
        creancem1:editTable.creancem1,
        creancem2:editTable.creancem2,
        creancem3:editTable.creancem3,
        creancem4:editTable.creancem4,
        creancem5:editTable.creancem5,
        creancem6:editTable.creancem6,
        creancem7:editTable.creancem7,
        creancem7:editTable.creancem7,
        creancem8:editTable.creancem8,
        creancem9:editTable.creancem9,
        creancem10:editTable.creancem10,
        creancem11:editTable.creancem11,
        creancem12:editTable.creancem12,
        
        autrecaissem1:editTable.autrecaissem1,
        autrecaissem1:editTable.autrecaissem1,
        autrecaissem2:editTable.autrecaissem2,
        autrecaissem3:editTable.autrecaissem3,
        autrecaissem4:editTable.autrecaissem4,
        autrecaissem5:editTable.autrecaissem5,
        autrecaissem6:editTable.autrecaissem6,
        autrecaissem7:editTable.autrecaissem7,
        autrecaissem8:editTable.autrecaissem8,
        autrecaissem9:editTable.autrecaissem9,
        autrecaissem10:editTable.autrecaissem10,
        autrecaissem11:editTable.autrecaissem11,
        autrecaissem12:editTable.autrecaissem12,
        
        investm1:editTable.investm1,
        investm2:editTable.investm2,
        investm3:editTable.investm3,
        investm4:editTable.investm4,
        investm5:editTable.investm5,
        investm6:editTable.investm6,
        investm7:editTable.investm7,
        investm8:editTable.investm8,
        investm9:editTable.investm9,
        investm10:editTable.investm10,
        investm11:editTable.investm11,
        investm12:editTable.investm12,
        investm12:editTable.investm12,
        
        rembourseccm1:editTable.rembourseccm1,
        rembourseccm2:editTable.rembourseccm2,
        rembourseccm3:editTable.rembourseccm3,
        rembourseccm4:editTable.rembourseccm4,
        rembourseccm5:editTable.rembourseccm5,
        rembourseccm6:editTable.rembourseccm6,
        rembourseccm7:editTable.rembourseccm7,
        rembourseccm8:editTable.rembourseccm8,
        rembourseccm9:editTable.rembourseccm9,
        rembourseccm10:editTable.rembourseccm10,
        rembourseccm11:editTable.rembourseccm11,
        rembourseccm12:editTable.rembourseccm12,
        rembourseccm12:editTable.rembourseccm12,
        
        rembourseempruntm1:editTable.rembourseempruntm1,
        rembourseempruntm2:editTable.rembourseempruntm2,
        rembourseempruntm3:editTable.rembourseempruntm3,
        rembourseempruntm4:editTable.rembourseempruntm4,
        rembourseempruntm5:editTable.rembourseempruntm5,
        rembourseempruntm6:editTable.rembourseempruntm6,
        rembourseempruntm7:editTable.rembourseempruntm7,
        rembourseempruntm8:editTable.rembourseempruntm8,
        rembourseempruntm9:editTable.rembourseempruntm9,
        rembourseempruntm10:editTable.rembourseempruntm10,
        rembourseempruntm11:editTable.rembourseempruntm11,
        rembourseempruntm12:editTable.rembourseempruntm12,
        rembourseempruntm12:editTable.rembourseempruntm12,
        
        garantieempruntm1:editTable.garantieempruntm1,
        garantieempruntm2:editTable.garantieempruntm2,
        garantieempruntm3:editTable.garantieempruntm3,
        garantieempruntm4:editTable.garantieempruntm4,
        garantieempruntm5:editTable.garantieempruntm5,
        garantieempruntm6:editTable.garantieempruntm6,
        garantieempruntm7:editTable.garantieempruntm7,
        garantieempruntm8:editTable.garantieempruntm8,
        garantieempruntm9:editTable.garantieempruntm9,
        garantieempruntm10:editTable.garantieempruntm10,
        garantieempruntm11:editTable.garantieempruntm11,
        garantieempruntm12:editTable.garantieempruntm12,
        garantieempruntm12:editTable.garantieempruntm12,
        
        amm1:editTable.amm1,
        amm2:editTable.amm2,
        amm3:editTable.amm3,
        amm4:editTable.amm4,
        amm5:editTable.amm5,
        amm6:editTable.amm6,
        amm7:editTable.amm7,
        amm8:editTable.amm8,
        amm9:editTable.amm9,
        amm10:editTable.amm10,
        amm11:editTable.amm11,
        amm12:editTable.amm12,
        amm12:editTable.amm12,
       
        autreachatm1:editTable.autreachatm1,
        autreachatm2:editTable.autreachatm2,
        autreachatm3:editTable.autreachatm3,
        autreachatm4:editTable.autreachatm4,
        autreachatm5:editTable.autreachatm5,
        autreachatm6:editTable.autreachatm6,
        autreachatm7:editTable.autreachatm7,
        autreachatm8:editTable.autreachatm8,
        autreachatm9:editTable.autreachatm9,
        autreachatm10:editTable.autreachatm10,
        autreachatm11:editTable.autreachatm11,
        autreachatm12:editTable.autreachatm12,
        autreachatm12:editTable.autreachatm12,
        
        transportm1:editTable.transportm1,
        transportm2:editTable.transportm2,
        transportm3:editTable.transportm3,
        transportm4:editTable.transportm4,
        transportm5:editTable.transportm5,
        transportm6:editTable.transportm6,
        transportm7:editTable.transportm7,
        transportm8:editTable.transportm8,
        transportm9:editTable.transportm9,
        transportm10:editTable.transportm10,
        transportm10:editTable.transportm10,
        transportm11:editTable.transportm11,
        transportm12:editTable.transportm12,
        
        sem1:editTable.sem1,
        sem2:editTable.sem2,
        sem3:editTable.sem3,
        sem4:editTable.sem4,
        sem5:editTable.sem5,
        sem6:editTable.sem6,
        sem7:editTable.sem7,
        sem8:editTable.sem8,
        sem9:editTable.sem9,
        sem10:editTable.sem10,
        sem11:editTable.sem11,
        sem12:editTable.sem12,       
        sem12:editTable.sem12,       
        autrechargem1:editTable.autrechargem1,
        autrechargem2:editTable.autrechargem2,
        autrechargem3:editTable.autrechargem3,
        autrechargem4:editTable.autrechargem4,
        autrechargem5:editTable.autrechargem5,
        autrechargem6:editTable.autrechargem6,
        autrechargem7:editTable.autrechargem7,
        autrechargem8:editTable.autrechargem8,
        autrechargem9:editTable.autrechargem9,
        autrechargem10:editTable.autrechargem10,
        autrechargem10:editTable.autrechargem10,
        autrechargem11:editTable.autrechargem11,
        autrechargem12:editTable.autrechargem12,
        
        impotm1:editTable.impotm1,
        impotm2:editTable.impotm2,
        impotm3:editTable.impotm3,
        impotm4:editTable.impotm4,
        impotm5:editTable.impotm5,
        impotm6:editTable.impotm6,
        impotm7:editTable.impotm7,
        impotm8:editTable.impotm8,
        impotm9:editTable.impotm9,
        impotm10:editTable.impotm10,
        impotm11:editTable.impotm11,
        impotm12:editTable.impotm12,
        impotm12:editTable.impotm12,
        
        cpm1:editTable.cpm1,
        cpm2:editTable.cpm2,
        cpm3:editTable.cpm3,
        cpm4:editTable.cpm4,
        cpm5:editTable.cpm5,
        cpm6:editTable.cpm6,
        cpm7:editTable.cpm7,
        cpm8:editTable.cpm8,
        cpm9:editTable.cpm9,
        cpm9:editTable.cpm9,
        cpm10:editTable.cpm10,
        cpm11:editTable.cpm11,
        cpm12:editTable.cpm12,
        
        ffm1:editTable.ffm1,
        ffm2:editTable.ffm2,
        ffm3:editTable.ffm3,
        ffm4:editTable.ffm4,
        ffm5:editTable.ffm5,
        ffm6:editTable.ffm6,
        ffm6:editTable.ffm6,
        ffm7:editTable.ffm7,
        ffm8:editTable.ffm8,
        ffm9:editTable.ffm9,
        ffm10:editTable.ffm10,
        ffm11:editTable.ffm11,
        ffm12:editTable.ffm12,
        tvadecaissem1:editTable.tvadecaissem1,
        tvadecaissem2:editTable.tvadecaissem2,
        tvadecaissem3:editTable.tvadecaissem3,
        tvadecaissem4:editTable.tvadecaissem4,
        tvadecaissem5:editTable.tvadecaissem5,
        tvadecaissem6:editTable.tvadecaissem6,
        tvadecaissem7:editTable.tvadecaissem7,
        tvadecaissem8:editTable.tvadecaissem8,
        tvadecaissem9:editTable.tvadecaissem9,
        tvadecaissem10:editTable.tvadecaissem10,
        tvadecaissem11:editTable.tvadecaissem11,
        tvadecaissem12:editTable.tvadecaissem12,
        userId: userId,
      })
      .then(() => {
        //props.resetForm()
        setOpen(true)
      })
      .catch((err) => console.log(err));
    setToggle(!toggle);
  }

  React.useEffect(() => {
    getDate();
    //setTotal(0)
  }, [toggle]);
  //console.log("pro");
  //console.log(mission);
  return (
    <div className="chapitretwo">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText>
          <p><h3>L'opperation a eté effectué avec success</h3></p>
          </DialogContentText>
          <DialogContentText style={{ marginLeft:50+'%', color:'green' }}>
            <VerifiedUserRoundedIcon/>
          </DialogContentText>
        </DialogContent>
        <DialogActions disableSpacing={true}>
          <Button autoFocus onClick={handleClose} style={{ marginRight:25+'%', backgroundColor:'#18A4F6', color:'white', fontSize:20 }}
            endIcon={<CheckCircle/>}
            size="large"
          >
            Je confirme
          </Button>
        </DialogActions>
      </Dialog>
      {plan.length > 0 ? (
        <div className="tab">
          {plan.map((item, index) => {
                      return (
                        <>
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <caption style={{color: 'black', fontSize:20}}>Plan de trésorerie de la première année </caption>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: 300}}></TableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 1</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 2</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 3</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 4</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 5</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 6</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 7</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 8</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 9</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 10</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 11</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 150}}>Mois 12</StyledTableCell>
                                <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow style={{backgroundColor:'#18A4F6'}}>
                                <TableCell><b>Solde de debut de mois</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois1}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois2}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois3}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois4}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois5}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois6}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois7}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois8}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois9}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois10}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois11}</b></TableCell>
                                <TableCell><b>{soldeDebutDuMois12}</b></TableCell>
                                
                            </TableRow>
                            <TableRow style={{backgroundColor:'#18A4F6'}}>
                                <TableCell><b>Encaissements </b></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow style={{backgroundColor:'#15B2D115'}}>
                                <TableCell><b> Hors exploitation  </b></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        
                                <TableRow>
                                    <TableCell> Apport personnel </TableCell>
                                    <TableCell>{item.apportpm1}</TableCell>
                                    <TableCell>{item.apportpm2}</TableCell>
                                    <TableCell>{item.apportpm3}</TableCell>
                                    <TableCell>{item.apportpm4}</TableCell>
                                    <TableCell>{item.apportpm5}</TableCell>
                                    <TableCell>{item.apportpm6}</TableCell>
                                    <TableCell>{item.apportpm7}</TableCell>
                                    <TableCell>{item.apportpm8}</TableCell>
                                    <TableCell>{item.apportpm9}</TableCell>
                                    <TableCell>{item.apportpm10}</TableCell>
                                    <TableCell>{item.apportpm11}</TableCell>
                                    <TableCell>{item.apportpm12}</TableCell>
                                    <TableCell rowSpan="34">
                                        <div className="delete">
                                        <div className="edit">
                                            <EditIcon style={{color:'blue'}} onClick={() => handleModif(item.docIdd, index)} />
                                        </div>
                                        <div className="delet">
                                            <DeleteIcon style={{color:'red'}} onClick={() => deleteplan(item.docIdd)} />
                                        </div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Associés </TableCell>
                                    <TableCell>{item.associem1}</TableCell>
                                    <TableCell>{item.associem2}</TableCell>
                                    <TableCell>{item.associem3}</TableCell>
                                    <TableCell>{item.associem4}</TableCell>
                                    <TableCell>{item.associem5}</TableCell>
                                    <TableCell>{item.associem6}</TableCell>
                                    <TableCell>{item.associem7}</TableCell>
                                    <TableCell>{item.associem8}</TableCell>
                                    <TableCell>{item.associem9}</TableCell>
                                    <TableCell>{item.associem10}</TableCell>
                                    <TableCell>{item.associem11}</TableCell>
                                    <TableCell>{item.associem12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Emprunts  </TableCell>
                                    <TableCell>{item.empruntm1}</TableCell>
                                    <TableCell>{item.empruntm2}</TableCell>
                                    <TableCell>{item.empruntm3}</TableCell>
                                    <TableCell>{item.empruntm4}</TableCell>
                                    <TableCell>{item.empruntm5}</TableCell>
                                    <TableCell>{item.empruntm6}</TableCell>
                                    <TableCell>{item.empruntm7}</TableCell>
                                    <TableCell>{item.empruntm8}</TableCell>
                                    <TableCell>{item.empruntm9}</TableCell>
                                    <TableCell>{item.empruntm10}</TableCell>
                                    <TableCell>{item.empruntm11}</TableCell>
                                    <TableCell>{item.empruntm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Subventions   </TableCell>
                                    <TableCell>{item.subventionm1}</TableCell>
                                    <TableCell>{item.subventionm2}</TableCell>
                                    <TableCell>{item.subventionm3}</TableCell>
                                    <TableCell>{item.subventionm4}</TableCell>
                                    <TableCell>{item.subventionm5}</TableCell>
                                    <TableCell>{item.subventionm6}</TableCell>
                                    <TableCell>{item.subventionm7}</TableCell>
                                    <TableCell>{item.subventionm8}</TableCell>
                                    <TableCell>{item.subventionm9}</TableCell>
                                    <TableCell>{item.subventionm10}</TableCell>
                                    <TableCell>{item.subventionm11}</TableCell>
                                    <TableCell>{item.subventionm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Apport en compte courant </TableCell>
                                    <TableCell>{item.apportccm1}</TableCell>
                                    <TableCell>{item.apportccm2}</TableCell>
                                    <TableCell>{item.apportccm3}</TableCell>
                                    <TableCell>{item.apportccm4}</TableCell>
                                    <TableCell>{item.apportccm5}</TableCell>
                                    <TableCell>{item.apportccm6}</TableCell>
                                    <TableCell>{item.apportccm7}</TableCell>
                                    <TableCell>{item.apportccm8}</TableCell>
                                    <TableCell>{item.apportccm9}</TableCell>
                                    <TableCell>{item.apportccm10}</TableCell>
                                    <TableCell>{item.apportccm11}</TableCell>
                                    <TableCell>{item.apportccm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <b> Total encaissements hors exploitation </b> </TableCell>
                                    <TableCell>{totalHorsExploit1}</TableCell>
                                    <TableCell>{totalHorsExploit2}</TableCell>
                                    <TableCell>{totalHorsExploit3}</TableCell>
                                    <TableCell>{totalHorsExploit4}</TableCell>
                                    <TableCell>{totalHorsExploit5}</TableCell>
                                    <TableCell>{totalHorsExploit6}</TableCell>
                                    <TableCell>{totalHorsExploit7}</TableCell>
                                    <TableCell>{totalHorsExploit8}</TableCell>
                                    <TableCell>{totalHorsExploit9}</TableCell>
                                    <TableCell>{totalHorsExploit10}</TableCell>
                                    <TableCell>{totalHorsExploit11}</TableCell>
                                    <TableCell>{totalHorsExploit12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <b> Exploitation </b> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Chiffres d'Affaires HT encaissés   </TableCell>
                                    <TableCell>{item.cahtm1}</TableCell>
                                    <TableCell>{item.cahtm2}</TableCell>
                                    <TableCell>{item.cahtm3}</TableCell>
                                    <TableCell>{item.cahtm4}</TableCell>
                                    <TableCell>{item.cahtm5}</TableCell>
                                    <TableCell>{item.cahtm6}</TableCell>
                                    <TableCell>{item.cahtm7}</TableCell>
                                    <TableCell>{item.cahtm8}</TableCell>
                                    <TableCell>{item.cahtm9}</TableCell>
                                    <TableCell>{item.cahtm10}</TableCell>
                                    <TableCell>{item.cahtm11}</TableCell>
                                    <TableCell>{item.cahtm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>  TVA encaissée/vente   </TableCell>
                                    <TableCell>{item.tvam1}</TableCell>
                                    <TableCell>{item.tvam2}</TableCell>
                                    <TableCell>{item.tvam3}</TableCell>
                                    <TableCell>{item.tvam4}</TableCell>
                                    <TableCell>{item.tvam5}</TableCell>
                                    <TableCell>{item.tvam6}</TableCell>
                                    <TableCell>{item.tvam7}</TableCell>
                                    <TableCell>{item.tvam8}</TableCell>
                                    <TableCell>{item.tvam9}</TableCell>
                                    <TableCell>{item.tvam10}</TableCell>
                                    <TableCell>{item.tvam11}</TableCell>
                                    <TableCell>{item.tvam12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Créances clients encaissées </TableCell>
                                    <TableCell>{item.creancem1}</TableCell>
                                    <TableCell>{item.creancem2}</TableCell>
                                    <TableCell>{item.creancem3}</TableCell>
                                    <TableCell>{item.creancem4}</TableCell>
                                    <TableCell>{item.creancem5}</TableCell>
                                    <TableCell>{item.creancem6}</TableCell>
                                    <TableCell>{item.creancem7}</TableCell>
                                    <TableCell>{item.creancem8}</TableCell>
                                    <TableCell>{item.creancem9}</TableCell>
                                    <TableCell>{item.creancem10}</TableCell>
                                    <TableCell>{item.creancem11}</TableCell>
                                    <TableCell>{item.creancem12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autres encaissements </TableCell>
                                    <TableCell>{item.autrecaissem1}</TableCell>
                                    <TableCell>{item.autrecaissem2}</TableCell>
                                    <TableCell>{item.autrecaissem3}</TableCell>
                                    <TableCell>{item.autrecaissem4}</TableCell>
                                    <TableCell>{item.autrecaissem5}</TableCell>
                                    <TableCell>{item.autrecaissem6}</TableCell>
                                    <TableCell>{item.autrecaissem7}</TableCell>
                                    <TableCell>{item.autrecaissem8}</TableCell>
                                    <TableCell>{item.autrecaissem9}</TableCell>
                                    <TableCell>{item.autrecaissem10}</TableCell>
                                    <TableCell>{item.autrecaissem11}</TableCell>
                                    <TableCell>{item.autrecaissem12}</TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#87bfad"}}>
                                    <TableCell> <b>Total encaissements d'exploitation</b> </TableCell>
                                    <TableCell><b>{totalExploit1}</b></TableCell>
                                    <TableCell><b>{totalExploit2}</b></TableCell>
                                    <TableCell><b>{totalExploit3}</b></TableCell>
                                    <TableCell><b>{totalExploit4}</b></TableCell>
                                    <TableCell><b>{totalExploit5}</b></TableCell>
                                    <TableCell><b>{totalExploit6}</b></TableCell>
                                    <TableCell><b>{totalExploit7}</b></TableCell>
                                    <TableCell><b>{totalExploit8}</b></TableCell>
                                    <TableCell><b>{totalExploit9}</b></TableCell>
                                    <TableCell><b>{totalExploit10}</b></TableCell>
                                    <TableCell><b>{totalExploit11}</b></TableCell>
                                    <TableCell><b>{totalExploit12}</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b>Total encaissements</b> </TableCell>
                                    <TableCell><b>{totalEncaisse1}</b></TableCell>
                                    <TableCell><b>{totalEncaisse2}</b></TableCell>
                                    <TableCell><b>{totalEncaisse3}</b></TableCell>
                                    <TableCell><b>{totalEncaisse4}</b></TableCell>
                                    <TableCell><b>{totalEncaisse5}</b></TableCell>
                                    <TableCell><b>{totalEncaisse6}</b></TableCell>
                                    <TableCell><b>{totalEncaisse7}</b></TableCell>
                                    <TableCell><b>{totalEncaisse8}</b></TableCell>
                                    <TableCell><b>{totalEncaisse9}</b></TableCell>
                                    <TableCell><b>{totalEncaisse10}</b></TableCell>
                                    <TableCell><b>{totalEncaisse11}</b></TableCell>
                                    <TableCell><b>{totalEncaisse12}</b></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b>Décaissements</b> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> <b>Hors Exploitation</b> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Investissements </TableCell>
                                    <TableCell>{item.investm1}</TableCell>
                                    <TableCell>{item.investm2}</TableCell>
                                    <TableCell>{item.investm3}</TableCell>
                                    <TableCell>{item.investm4}</TableCell>
                                    <TableCell>{item.investm5}</TableCell>
                                    <TableCell>{item.investm6}</TableCell>
                                    <TableCell>{item.investm7}</TableCell>
                                    <TableCell>{item.investm8}</TableCell>
                                    <TableCell>{item.investm9}</TableCell>
                                    <TableCell>{item.investm10}</TableCell>
                                    <TableCell>{item.investm11}</TableCell>
                                    <TableCell>{item.investm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Remboursement comptes courants </TableCell>
                                    <TableCell>{item.rembourseccm1}</TableCell>
                                    <TableCell>{item.rembourseccm2}</TableCell>
                                    <TableCell>{item.rembourseccm3}</TableCell>
                                    <TableCell>{item.rembourseccm4}</TableCell>
                                    <TableCell>{item.rembourseccm5}</TableCell>
                                    <TableCell>{item.rembourseccm6}</TableCell>
                                    <TableCell>{item.rembourseccm7}</TableCell>
                                    <TableCell>{item.rembourseccm8}</TableCell>
                                    <TableCell>{item.rembourseccm9}</TableCell>
                                    <TableCell>{item.rembourseccm10}</TableCell>
                                    <TableCell>{item.rembourseccm11}</TableCell>
                                    <TableCell>{item.rembourseccm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Remboursement emprunt (échéance) </TableCell>
                                    <TableCell>{item.rembourseempruntm1}</TableCell>
                                    <TableCell>{item.rembourseempruntm2}</TableCell>
                                    <TableCell>{item.rembourseempruntm3}</TableCell>
                                    <TableCell>{item.rembourseempruntm4}</TableCell>
                                    <TableCell>{item.rembourseempruntm5}</TableCell>
                                    <TableCell>{item.rembourseempruntm6}</TableCell>
                                    <TableCell>{item.rembourseempruntm7}</TableCell>
                                    <TableCell>{item.rembourseempruntm8}</TableCell>
                                    <TableCell>{item.rembourseempruntm9}</TableCell>
                                    <TableCell>{item.rembourseempruntm10}</TableCell>
                                    <TableCell>{item.rembourseempruntm11}</TableCell>
                                    <TableCell>{item.rembourseempruntm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Garantie emprunt </TableCell>
                                    <TableCell>{item.garantieempruntm1}</TableCell>
                                    <TableCell>{item.garantieempruntm2}</TableCell>
                                    <TableCell>{item.garantieempruntm3}</TableCell>
                                    <TableCell>{item.garantieempruntm4}</TableCell>
                                    <TableCell>{item.garantieempruntm5}</TableCell>
                                    <TableCell>{item.garantieempruntm6}</TableCell>
                                    <TableCell>{item.garantieempruntm7}</TableCell>
                                    <TableCell>{item.garantieempruntm8}</TableCell>
                                    <TableCell>{item.garantieempruntm9}</TableCell>
                                    <TableCell>{item.garantieempruntm10}</TableCell>
                                    <TableCell>{item.garantieempruntm11}</TableCell>
                                    <TableCell>{item.garantieempruntm12}</TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b>Total décaissements hors exploitation </b> </TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit1}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit2}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit3}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit4}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit5}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit6}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit7}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit8}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit9}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit10}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit11}</b></TableCell>
                                    <TableCell><b>{totalDecaisseHorsexploit12}</b></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#87bfad"}}>
                                    <TableCell> <b>Exploitation </b> </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Achats matières premières  </TableCell>
                                    <TableCell>{item.amm1}</TableCell>
                                    <TableCell>{item.amm2}</TableCell>
                                    <TableCell>{item.amm3}</TableCell>
                                    <TableCell>{item.amm4}</TableCell>
                                    <TableCell>{item.amm5}</TableCell>
                                    <TableCell>{item.amm6}</TableCell>
                                    <TableCell>{item.amm7}</TableCell>
                                    <TableCell>{item.amm8}</TableCell>
                                    <TableCell>{item.amm9}</TableCell>
                                    <TableCell>{item.amm10}</TableCell>
                                    <TableCell>{item.amm11}</TableCell>
                                    <TableCell>{item.amm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autres Achats </TableCell>
                                    <TableCell>{item.autreachatm1}</TableCell>
                                    <TableCell>{item.autreachatm2}</TableCell>
                                    <TableCell>{item.autreachatm3}</TableCell>
                                    <TableCell>{item.autreachatm4}</TableCell>
                                    <TableCell>{item.autreachatm5}</TableCell>
                                    <TableCell>{item.autreachatm6}</TableCell>
                                    <TableCell>{item.autreachatm7}</TableCell>
                                    <TableCell>{item.autreachatm8}</TableCell>
                                    <TableCell>{item.autreachatm9}</TableCell>
                                    <TableCell>{item.autreachatm10}</TableCell>
                                    <TableCell>{item.autreachatm11}</TableCell>
                                    <TableCell>{item.autreachatm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Transports </TableCell>
                                    <TableCell>{item.transportm1}</TableCell>
                                    <TableCell>{item.transportm2}</TableCell>
                                    <TableCell>{item.transportm3}</TableCell>
                                    <TableCell>{item.transportm4}</TableCell>
                                    <TableCell>{item.transportm5}</TableCell>
                                    <TableCell>{item.transportm6}</TableCell>
                                    <TableCell>{item.transportm7}</TableCell>
                                    <TableCell>{item.transportm8}</TableCell>
                                    <TableCell>{item.transportm9}</TableCell>
                                    <TableCell>{item.transportm10}</TableCell>
                                    <TableCell>{item.transportm11}</TableCell>
                                    <TableCell>{item.transportm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Services extérieurs </TableCell>
                                    <TableCell>{item.sem1}</TableCell>
                                    <TableCell>{item.sem2}</TableCell>
                                    <TableCell>{item.sem3}</TableCell>
                                    <TableCell>{item.sem4}</TableCell>
                                    <TableCell>{item.sem5}</TableCell>
                                    <TableCell>{item.sem6}</TableCell>
                                    <TableCell>{item.sem7}</TableCell>
                                    <TableCell>{item.sem8}</TableCell>
                                    <TableCell>{item.sem9}</TableCell>
                                    <TableCell>{item.sem10}</TableCell>
                                    <TableCell>{item.sem11}</TableCell>
                                    <TableCell>{item.sem12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Autres charges </TableCell>
                                    <TableCell>{item.autrechargem1}</TableCell>
                                    <TableCell>{item.autrechargem2}</TableCell>
                                    <TableCell>{item.autrechargem3}</TableCell>
                                    <TableCell>{item.autrechargem4}</TableCell>
                                    <TableCell>{item.autrechargem5}</TableCell>
                                    <TableCell>{item.autrechargem6}</TableCell>
                                    <TableCell>{item.autrechargem7}</TableCell>
                                    <TableCell>{item.autrechargem8}</TableCell>
                                    <TableCell>{item.autrechargem9}</TableCell>
                                    <TableCell>{item.autrechargem10}</TableCell>
                                    <TableCell>{item.autrechargem11}</TableCell>
                                    <TableCell>{item.autrechargem12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Impôts et taxes </TableCell>
                                    <TableCell>{item.impotm1}</TableCell>
                                    <TableCell>{item.impotm2}</TableCell>
                                    <TableCell>{item.impotm3}</TableCell>
                                    <TableCell>{item.impotm4}</TableCell>
                                    <TableCell>{item.impotm5}</TableCell>
                                    <TableCell>{item.impotm6}</TableCell>
                                    <TableCell>{item.impotm7}</TableCell>
                                    <TableCell>{item.impotm8}</TableCell>
                                    <TableCell>{item.impotm9}</TableCell>
                                    <TableCell>{item.impotm10}</TableCell>
                                    <TableCell>{item.impotm11}</TableCell>
                                    <TableCell>{item.impotm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Charges du personnel </TableCell>
                                    <TableCell>{item.cpm1}</TableCell>
                                    <TableCell>{item.cpm2}</TableCell>
                                    <TableCell>{item.cpm3}</TableCell>
                                    <TableCell>{item.cpm4}</TableCell>
                                    <TableCell>{item.cpm5}</TableCell>
                                    <TableCell>{item.cpm6}</TableCell>
                                    <TableCell>{item.cpm7}</TableCell>
                                    <TableCell>{item.cpm8}</TableCell>
                                    <TableCell>{item.cpm9}</TableCell>
                                    <TableCell>{item.cpm10}</TableCell>
                                    <TableCell>{item.cpm11}</TableCell>
                                    <TableCell>{item.cpm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> Frais financiers </TableCell>
                                    <TableCell>{item.ffm1}</TableCell>
                                    <TableCell>{item.ffm2}</TableCell>
                                    <TableCell>{item.ffm3}</TableCell>
                                    <TableCell>{item.ffm4}</TableCell>
                                    <TableCell>{item.ffm5}</TableCell>
                                    <TableCell>{item.ffm6}</TableCell>
                                    <TableCell>{item.ffm7}</TableCell>
                                    <TableCell>{item.ffm8}</TableCell>
                                    <TableCell>{item.ffm9}</TableCell>
                                    <TableCell>{item.ffm10}</TableCell>
                                    <TableCell>{item.ffm11}</TableCell>
                                    <TableCell>{item.ffm12}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell> TVA décaissée </TableCell>
                                    <TableCell>{item.tvadecaissem1}</TableCell>
                                    <TableCell>{item.tvadecaissem2}</TableCell>
                                    <TableCell>{item.tvadecaissem3}</TableCell>
                                    <TableCell>{item.tvadecaissem4}</TableCell>
                                    <TableCell>{item.tvadecaissem5}</TableCell>
                                    <TableCell>{item.tvadecaissem6}</TableCell>
                                    <TableCell>{item.tvadecaissem7}</TableCell>
                                    <TableCell>{item.tvadecaissem8}</TableCell>
                                    <TableCell>{item.tvadecaissem9}</TableCell>
                                    <TableCell>{item.tvadecaissem10}</TableCell>
                                    <TableCell>{item.tvadecaissem11}</TableCell>
                                    <TableCell>{item.tvadecaissem12}</TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#87bfad"}}>
                                    <TableCell> <b>Total décaissements d'exploitation  </b> </TableCell>
                                    <TableCell><b>{totalDecaisseExploit1}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit2}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit3}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit4}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit5}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit6}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit7}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit8}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit9}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit10}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit11}</b></TableCell>
                                    <TableCell><b>{totalDecaisseExploit12}</b></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b>Total décaissements  </b> </TableCell>
                                    <TableCell><b>{totalDecaisse1}</b></TableCell>
                                    <TableCell><b>{totalDecaisse2}</b></TableCell>
                                    <TableCell><b>{totalDecaisse3}</b></TableCell>
                                    <TableCell><b>{totalDecaisse4}</b></TableCell>
                                    <TableCell><b>{totalDecaisse5}</b></TableCell>
                                    <TableCell><b>{totalDecaisse6}</b></TableCell>
                                    <TableCell><b>{totalDecaisse7}</b></TableCell>
                                    <TableCell><b>{totalDecaisse8}</b></TableCell>
                                    <TableCell><b>{totalDecaisse9}</b></TableCell>
                                    <TableCell><b>{totalDecaisse10}</b></TableCell>
                                    <TableCell><b>{totalDecaisse11}</b></TableCell>
                                    <TableCell><b>{totalDecaisse12}</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b> Solde du mois </b> </TableCell>
                                    <TableCell><b>{soldeDuMois1}</b></TableCell>
                                    <TableCell><b>{soldeDuMois2}</b></TableCell>
                                    <TableCell><b>{soldeDuMois3}</b></TableCell>
                                    <TableCell><b>{soldeDuMois4}</b></TableCell>
                                    <TableCell><b>{soldeDuMois5}</b></TableCell>
                                    <TableCell><b>{soldeDuMois6}</b></TableCell>
                                    <TableCell><b>{soldeDuMois7}</b></TableCell>
                                    <TableCell><b>{soldeDuMois8}</b></TableCell>
                                    <TableCell><b>{soldeDuMois9}</b></TableCell>
                                    <TableCell><b>{soldeDuMois10}</b></TableCell>
                                    <TableCell><b>{soldeDuMois11}</b></TableCell>
                                    <TableCell><b>{soldeDuMois12}</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                <TableRow style={{backgroundColor:"#18A4F6"}}>
                                    <TableCell> <b>  Solde de fin de mois  </b> </TableCell>
                                    <TableCell><b>{soldeFinDuMois1}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois2}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois3}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois4}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois5}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois6}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois7}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois8}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois9}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois10}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois11}</b></TableCell>
                                    <TableCell><b>{soldeFinDuMois12}</b></TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Paper>
                        </>
                      );
            })}
          
        </div>
      ) : (
        <div className="tab">
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <caption style={{color: 'black', fontSize:30}} >Cette partie n'a pas encore été remplit</caption>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ minWidth: 300}}></TableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 1</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 2</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 3</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 4</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 5</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 6</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 7</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 8</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 9</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 10</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 11</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 150}}>Mois 12</StyledTableCell>
                        <StyledTableCell style={{ minWidth: 100 }}>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      
                          <TableCell>............</TableCell>
                          <TableCell>............</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>...........</TableCell>
                          <TableCell>......Action......</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      )}

      {load ? (<CircularProgress variant="indeterminate" style={{marginTop:10}}/>): (
        <>
        <div className="plus">
          {!show && (
            <Button className="plus-icon" 
              style={{color: 'white', marginTop:10, background:'#18A4F6'}} 
              onClick={() => setShow(!show)} 
              endIcon={<Add/>}>
              Ajouter
            </Button>
          )}
        </div>
        </>
        )}
      <div>
        { idDoc ? (
          <>
        <Card>
          <CardContent>

            <form
              noValidate
              className={`${!show && "show"}`}
              onSubmit={editPlan}
            >
              <div className="input">
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm1"
                    label="Apport personnel Mois 1"
                    name="apportpm1"
                    autoFocus
                    type="number"
                    value={editTable.apportpm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm2"
                    label="Apport personnel Mois 2"
                    name="apportpm2"
                    autoFocus
                    type="number"
                    value={editTable.apportpm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm3"
                    label="Apport personnel Mois 3"
                    name="apportpm3"
                    autoFocus
                    type="number"
                    value={editTable.apportpm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm4"
                    label="Apport personnel Mois 4"
                    name="apportpm4"
                    autoFocus
                    type="number"
                    value={editTable.apportpm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm5"
                    label="Apport personnel Mois 5"
                    name="apportpm5"
                    autoFocus
                    type="number"
                    value={editTable.apportpm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm6"
                    label="Apport personnel Mois 6"
                    name="apportpm6"
                    autoFocus
                    type="number"
                    value={editTable.apportpm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm7"
                    label="Apport personnel Mois 7"
                    name="apportpm7"
                    autoFocus
                    type="number"
                    value={editTable.apportpm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm8"
                    label="Apport personnel Mois 8"
                    name="apportpm8"
                    autoFocus
                    type="number"
                    value={editTable.apportpm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm9"
                    label="Apport personnel Mois 9"
                    name="apportpm9"
                    autoFocus
                    type="number"
                    value={editTable.apportpm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm10"
                    label="Apport personnel Mois 10"
                    name="apportpm10"
                    autoFocus
                    type="number"
                    value={editTable.apportpm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm11"
                    label="Apport personnel Mois 11"
                    name="apportpm11"
                    autoFocus
                    type="number"
                    value={editTable.apportpm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm12"
                    label="Apport personnel Mois 12"
                    name="apportpm12"
                    autoFocus
                    type="number"
                    value={editTable.apportpm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem1"
                    label="Associés Mois 1"
                    name="associem1"
                    autoFocus
                    type="number"
                    value={editTable.associem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem2"
                    label="Associés Mois 2"
                    name="associem2"
                    autoFocus
                    type="number"
                    value={editTable.associem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem3"
                    label="Associés Mois 3"
                    name="associem3"
                    autoFocus
                    type="number"
                    value={editTable.associem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem4"
                    label="Associés Mois 4"
                    name="associem4"
                    autoFocus
                    type="number"
                    value={editTable.associem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem5"
                    label="Associés Mois 5"
                    name="associem5"
                    autoFocus
                    type="number"
                    value={editTable.associem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem6"
                    label="Associés Mois 6"
                    name="associem6"
                    autoFocus
                    type="number"
                    value={editTable.associem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem7"
                    label="Associés Mois 7"
                    name="associem7"
                    autoFocus
                    type="number"
                    value={editTable.associem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem8"
                    label="Associés Mois 8"
                    name="associem8"
                    autoFocus
                    type="number"
                    value={editTable.associem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem9"
                    label="Associés Mois 9"
                    name="associem9"
                    autoFocus
                    type="number"
                    value={editTable.associem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem10"
                    label="Associés Mois 10"
                    name="associem10"
                    autoFocus
                    type="number"
                    value={editTable.associem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem11"
                    label="Associés Mois 11"
                    name="associem11"
                    autoFocus
                    type="number"
                    value={editTable.associem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem12"
                    label="Associés Mois 12"
                    name="associem12"
                    autoFocus
                    type="number"
                    value={editTable.associem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm1"
                    label="Emprunts Mois 1"
                    name="empruntm1"
                    autoFocus
                    type="number"
                    value={editTable.empruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm2"
                    label="Emprunts Mois 2"
                    name="empruntm2"
                    autoFocus
                    type="number"
                    value={editTable.empruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm3"
                    label="Emprunts Mois 3"
                    name="empruntm3"
                    autoFocus
                    type="number"
                    value={editTable.empruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm4"
                    label="Emprunts Mois 4"
                    name="empruntm4"
                    autoFocus
                    type="number"
                    value={editTable.empruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm5"
                    label="Emprunts Mois 5"
                    name="empruntm5"
                    autoFocus
                    type="number"
                    value={editTable.empruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm6"
                    label="Emprunts Mois 6"
                    name="empruntm6"
                    autoFocus
                    type="number"
                    value={editTable.empruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm7"
                    label="Emprunts Mois 7"
                    name="empruntm7"
                    autoFocus
                    type="number"
                    value={editTable.empruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm8"
                    label="Emprunts Mois 8"
                    name="empruntm8"
                    autoFocus
                    type="number"
                    value={editTable.empruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm9"
                    label="Emprunts Mois 9"
                    name="empruntm9"
                    autoFocus
                    type="number"
                    value={editTable.empruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm10"
                    label="Emprunts Mois 10"
                    name="empruntm10"
                    autoFocus
                    type="number"
                    value={editTable.empruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm11"
                    label="Emprunts Mois 11"
                    name="empruntm11"
                    autoFocus
                    type="number"
                    value={editTable.empruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm12"
                    label="Emprunts Mois 12"
                    name="empruntm12"
                    autoFocus
                    type="number"
                    value={editTable.empruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm1"
                    label="Subventions Mois 1"
                    name="subventionm1"
                    autoFocus
                    type="number"
                    value={editTable.subventionm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm2"
                    label="Subventions Mois 2"
                    name="subventionm2"
                    autoFocus
                    type="number"
                    value={editTable.subventionm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm3"
                    label="Subventions Mois 3"
                    name="subventionm3"
                    autoFocus
                    type="number"
                    value={editTable.subventionm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm4"
                    label="Subventions Mois 4"
                    name="subventionm4"
                    autoFocus
                    type="number"
                    value={editTable.subventionm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm5"
                    label="Subventions Mois 5"
                    name="subventionm5"
                    autoFocus
                    type="number"
                    value={editTable.subventionm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm6"
                    label="Subventions Mois 6"
                    name="subventionm6"
                    autoFocus
                    type="number"
                    value={editTable.subventionm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm7"
                    label="Subventions Mois 7"
                    name="subventionm7"
                    autoFocus
                    type="number"
                    value={editTable.subventionm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm8"
                    label="Subventions Mois 8"
                    name="subventionm8"
                    autoFocus
                    type="number"
                    value={editTable.subventionm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm9"
                    label="Subventions Mois 9"
                    name="subventionm9"
                    autoFocus
                    type="number"
                    value={editTable.subventionm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm10"
                    label="Subventions Mois 10"
                    name="subventionm10"
                    autoFocus
                    type="number"
                    value={editTable.subventionm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm11"
                    label="Subventions Mois 11"
                    name="subventionm11"
                    autoFocus
                    type="number"
                    value={editTable.subventionm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm12"
                    label="Subventions Mois 12"
                    name="subventionm12"
                    autoFocus
                    type="number"
                    value={editTable.subventionm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm1"
                    label="Aides Mois 1"
                    name="aidesm1"
                    autoFocus
                    type="number"
                    value={editTable.aidesm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm2"
                    label="Aides Mois 2"
                    name="aidesm2"
                    autoFocus
                    type="number"
                    value={editTable.aidesm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm3"
                    label="Aides Mois 3"
                    name="aidesm3"
                    autoFocus
                    type="number"
                    value={editTable.aidesm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm4"
                    label="Aides Mois 4"
                    name="aidesm4"
                    autoFocus
                    type="number"
                    value={editTable.aidesm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm5"
                    label="Aides Mois 5"
                    name="aidesm5"
                    autoFocus
                    type="number"
                    value={editTable.aidesm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm6"
                    label="Aides Mois 6"
                    name="aidesm6"
                    autoFocus
                    type="number"
                    value={editTable.aidesm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm7"
                    label="Aides Mois 7"
                    name="aidesm7"
                    autoFocus
                    type="number"
                    value={editTable.aidesm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm8"
                    label="Aides Mois 8"
                    name="aidesm8"
                    autoFocus
                    type="number"
                    value={editTable.aidesm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm9"
                    label="Aides Mois 9"
                    name="aidesm9"
                    autoFocus
                    type="number"
                    value={editTable.aidesm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm10"
                    label="Aides Mois 10"
                    name="aidesm10"
                    autoFocus
                    type="number"
                    value={editTable.aidesm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm11"
                    label="Aides Mois 11"
                    name="aidesm11"
                    autoFocus
                    type="number"
                    value={editTable.aidesm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm12"
                    label="Aides Mois 12"
                    name="aidesm12"
                    autoFocus
                    type="number"
                    value={editTable.aidesm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm1"
                    label="Apport en compte courant Mois 1"
                    name="apportccm1"
                    autoFocus
                    type="number"
                    value={editTable.apportccm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm2"
                    label="Apport en compte courant Mois 2"
                    name="apportccm2"
                    autoFocus
                    type="number"
                    value={editTable.apportccm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm3"
                    label="Apport en compte courant Mois 3"
                    name="apportccm3"
                    autoFocus
                    type="number"
                    value={editTable.apportccm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm4"
                    label="Apport en compte courant Mois 4"
                    name="apportccm4"
                    autoFocus
                    type="number"
                    value={editTable.apportccm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm5"
                    label="Apport en compte courant Mois 5"
                    name="apportccm5"
                    autoFocus
                    type="number"
                    value={editTable.apportccm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm6"
                    label="Apport en compte courant Mois 6"
                    name="apportccm6"
                    autoFocus
                    type="number"
                    value={editTable.apportccm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm7"
                    label="Apport en compte courant Mois 7"
                    name="apportccm7"
                    autoFocus
                    type="number"
                    value={editTable.apportccm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm8"
                    label="Apport en compte courant Mois 8"
                    name="apportccm8"
                    autoFocus
                    type="number"
                    value={editTable.apportccm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm9"
                    label="Apport en compte courant Mois 9"
                    name="apportccm9"
                    autoFocus
                    type="number"
                    value={editTable.apportccm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm10"
                    label="Apport en compte courant Mois 10"
                    name="apportccm10"
                    autoFocus
                    type="number"
                    value={editTable.apportccm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm11"
                    label="Apport en compte courant Mois 11"
                    name="apportccm11"
                    autoFocus
                    type="number"
                    value={editTable.apportccm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm12"
                    label="Apport en compte courant Mois 12"
                    name="apportccm12"
                    autoFocus
                    type="number"
                    value={editTable.apportccm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm1"
                    label="Chiffres d'Affaires HT encaissés Mois 1"
                    name="cahtm1"
                    autoFocus
                    type="number"
                    value={editTable.cahtm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm2"
                    label="Chiffres d'Affaires HT encaissés Mois 2"
                    name="cahtm2"
                    autoFocus
                    type="number"
                    value={editTable.cahtm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm3"
                    label="Chiffres d'Affaires HT encaissés Mois 3"
                    name="cahtm3"
                    autoFocus
                    type="number"
                    value={editTable.cahtm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm4"
                    label="Chiffres d'Affaires HT encaissés Mois 4"
                    name="cahtm4"
                    autoFocus
                    type="number"
                    value={editTable.cahtm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm5"
                    label="Chiffres d'Affaires HT encaissés Mois 5"
                    name="cahtm5"
                    autoFocus
                    type="number"
                    value={editTable.cahtm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm6"
                    label="Chiffres d'Affaires HT encaissés Mois 6"
                    name="cahtm6"
                    autoFocus
                    type="number"
                    value={editTable.cahtm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm7"
                    label="Chiffres d'Affaires HT encaissés Mois 7"
                    name="cahtm7"
                    autoFocus
                    type="number"
                    value={editTable.cahtm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm8"
                    label="Chiffres d'Affaires HT encaissés Mois 8"
                    name="cahtm8"
                    autoFocus
                    type="number"
                    value={editTable.cahtm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm9"
                    label="Chiffres d'Affaires HT encaissés Mois 9"
                    name="cahtm9"
                    autoFocus
                    type="number"
                    value={editTable.cahtm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm10"
                    label="Chiffres d'Affaires HT encaissés Mois 10"
                    name="cahtm10"
                    autoFocus
                    type="number"
                    value={editTable.cahtm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm11"
                    label="Chiffres d'Affaires HT encaissés Mois 11"
                    name="cahtm11"
                    autoFocus
                    type="number"
                    value={editTable.cahtm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm12"
                    label="Chiffres d'Affaires HT encaissés Mois 12"
                    name="cahtm12"
                    autoFocus
                    type="number"
                    value={editTable.cahtm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam1"
                    label="TVA encaissée/ventes Mois 1"
                    name="tvam1"
                    autoFocus
                    type="number"
                    value={editTable.tvam1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam2"
                    label="TVA encaissée/ventes Mois 2"
                    name="tvam2"
                    autoFocus
                    type="number"
                    value={editTable.tvam2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam3"
                    label="TVA encaissée/ventes Mois 3"
                    name="tvam3"
                    autoFocus
                    type="number"
                    value={editTable.tvam3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam4"
                    label="TVA encaissée/ventes Mois 4"
                    name="tvam4"
                    autoFocus
                    type="number"
                    value={editTable.tvam4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam5"
                    label="TVA encaissée/ventes Mois 5"
                    name="tvam5"
                    autoFocus
                    type="number"
                    value={editTable.tvam5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam6"
                    label="TVA encaissée/ventes Mois 6"
                    name="tvam6"
                    autoFocus
                    type="number"
                    value={editTable.tvam6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam7"
                    label="TVA encaissée/ventes Mois 7"
                    name="tvam7"
                    autoFocus
                    type="number"
                    value={editTable.tvam7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam8"
                    label="TVA encaissée/ventes Mois 8"
                    name="tvam8"
                    autoFocus
                    type="number"
                    value={editTable.tvam8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam9"
                    label="TVA encaissée/ventes Mois 9"
                    name="tvam9"
                    autoFocus
                    type="number"
                    value={editTable.tvam9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam10"
                    label="TVA encaissée/ventes Mois 10"
                    name="tvam10"
                    autoFocus
                    type="number"
                    value={editTable.tvam10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam11"
                    label="TVA encaissée/ventes Mois 11"
                    name="tvam11"
                    autoFocus
                    type="number"
                    value={editTable.tvam11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam12"
                    label="TVA encaissée/ventes Mois 12"
                    name="tvam12"
                    autoFocus
                    type="number"
                    value={editTable.tvam12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem1"
                    label="Créances clients encaissées Mois 1"
                    name="creancem1"
                    autoFocus
                    type="number"
                    value={editTable.creancem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem2"
                    label="Créances clients encaissées Mois 2"
                    name="creancem2"
                    autoFocus
                    type="number"
                    value={editTable.creancem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem3"
                    label="Créances clients encaissées Mois 3"
                    name="creancem3"
                    autoFocus
                    type="number"
                    value={editTable.creancem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem4"
                    label="Créances clients encaissées Mois 4"
                    name="creancem4"
                    autoFocus
                    type="number"
                    value={editTable.creancem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem5"
                    label="Créances clients encaissées Mois 5"
                    name="creancem5"
                    autoFocus
                    type="number"
                    value={editTable.creancem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem6"
                    label="Créances clients encaissées Mois 6"
                    name="creancem6"
                    autoFocus
                    type="number"
                    value={editTable.creancem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem7"
                    label="Créances clients encaissées Mois 7"
                    name="creancem7"
                    autoFocus
                    type="number"
                    value={editTable.creancem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem8"
                    label="Créances clients encaissées Mois 8"
                    name="creancem8"
                    autoFocus
                    type="number"
                    value={editTable.creancem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem9"
                    label="Créances clients encaissées Mois 9"
                    name="creancem9"
                    autoFocus
                    type="number"
                    value={editTable.creancem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem10"
                    label="Créances clients encaissées Mois 10"
                    name="creancem10"
                    autoFocus
                    type="number"
                    value={editTable.creancem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem11"
                    label="Créances clients encaissées Mois 11"
                    name="creancem11"
                    autoFocus
                    type="number"
                    value={editTable.creancem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem12"
                    label="Créances clients encaissées Mois 12"
                    name="creancem12"
                    autoFocus
                    type="number"
                    value={editTable.creancem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem1"
                    label="Autres encaissements Mois 1"
                    name="autrecaissem1"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem2"
                    label="Autres encaissements Mois 2"
                    name="autrecaissem2"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem3"
                    label="Autres encaissements Mois 3"
                    name="autrecaissem3"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem4"
                    label="Autres encaissements Mois 4"
                    name="autrecaissem4"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem5"
                    label="Autres encaissements Mois 5"
                    name="autrecaissem5"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem6"
                    label="Autres encaissements Mois 6"
                    name="autrecaissem6"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem7"
                    label="Autres encaissements Mois 7"
                    name="autrecaissem7"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem8"
                    label="Autres encaissements Mois 8"
                    name="autrecaissem8"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem9"
                    label="Autres encaissements Mois 9"
                    name="autrecaissem9"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem10"
                    label="Autres encaissements Mois 10"
                    name="autrecaissem10"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem11"
                    label="Autres encaissements Mois 11"
                    name="autrecaissem11"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem12"
                    label="Autres encaissements Mois 12"
                    name="autrecaissem12"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm1"
                    label="Investissements Mois 1"
                    name="investm1"
                    autoFocus
                    type="number"
                    value={editTable.investm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm2"
                    label="Investissements Mois 2"
                    name="investm2"
                    autoFocus
                    type="number"
                    value={editTable.investm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm3"
                    label="Investissements Mois 3"
                    name="investm3"
                    autoFocus
                    type="number"
                    value={editTable.investm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm4"
                    label="Investissements Mois 4"
                    name="investm4"
                    autoFocus
                    type="number"
                    value={editTable.investm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm5"
                    label="Investissements Mois 5"
                    name="investm5"
                    autoFocus
                    type="number"
                    value={editTable.investm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm6"
                    label="Investissements Mois 6"
                    name="investm6"
                    autoFocus
                    type="number"
                    value={editTable.investm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm7"
                    label="Investissements Mois 7"
                    name="investm7"
                    autoFocus
                    type="number"
                    value={editTable.investm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm8"
                    label="Investissements Mois 8"
                    name="investm8"
                    autoFocus
                    type="number"
                    value={editTable.investm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm9"
                    label="Investissements Mois 9"
                    name="investm9"
                    autoFocus
                    type="number"
                    value={editTable.investm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm10"
                    label="Investissements Mois 10"
                    name="investm10"
                    autoFocus
                    type="number"
                    value={editTable.investm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm11"
                    label="Investissements Mois 11"
                    name="investm11"
                    autoFocus
                    type="number"
                    value={editTable.investm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm12"
                    label="Investissements Mois 12"
                    name="investm12"
                    autoFocus
                    type="number"
                    value={editTable.investm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm1"
                    label="Remboursement comptes courants Mois 1"
                    name="rembourseccm1"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm2"
                    label="Remboursement comptes courants Mois 2"
                    name="rembourseccm2"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm3"
                    label="Remboursement comptes courants Mois 3"
                    name="rembourseccm3"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm4"
                    label="Remboursement comptes courants Mois 4"
                    name="rembourseccm4"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm5"
                    label="Remboursement comptes courants Mois 5"
                    name="rembourseccm5"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm6"
                    label="Remboursement comptes courants Mois 6"
                    name="rembourseccm6"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm7"
                    label="Remboursement comptes courants Mois 7"
                    name="rembourseccm7"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm8"
                    label="Remboursement comptes courants Mois 8"
                    name="rembourseccm8"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm9"
                    label="Remboursement comptes courants Mois 9"
                    name="rembourseccm9"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm10"
                    label="Remboursement comptes courants Mois 10"
                    name="rembourseccm10"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm11"
                    label="Remboursement comptes courants Mois 11"
                    name="rembourseccm11"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm12"
                    label="Remboursement comptes courants Mois 12"
                    name="rembourseccm12"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm1"
                    label="Rembousement emprunts (échéances) Mois 1"
                    name="rembourseempruntm1"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm2"
                    label="Rembousement emprunts (échéances) Mois 2"
                    name="rembourseempruntm2"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm3"
                    label="Rembousement emprunts (échéances) Mois 3"
                    name="rembourseempruntm3"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm4"
                    label="Rembousement emprunts (échéances) Mois 4"
                    name="rembourseempruntm4"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm5"
                    label="Rembousement emprunts (échéances) Mois 5"
                    name="rembourseempruntm5"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm6"
                    label="Rembousement emprunts (échéances) Mois 6"
                    name="rembourseempruntm6"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm7"
                    label="Rembousement emprunts (échéances) Mois 7"
                    name="rembourseempruntm7"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm8"
                    label="Rembousement emprunts (échéances) Mois 8"
                    name="rembourseempruntm8"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm9"
                    label="Rembousement emprunts (échéances) Mois 9"
                    name="rembourseempruntm9"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm10"
                    label="Rembousement emprunts (échéances) Mois 10"
                    name="rembourseempruntm10"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm11"
                    label="Rembousement emprunts (échéances) Mois 11"
                    name="rembourseempruntm11"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm12"
                    label="Rembousement emprunts (échéances) Mois 12"
                    name="rembourseempruntm12"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm1"
                    label="Garantie emprunt Mois 1"
                    name="garantieempruntm1"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm2"
                    label="Garantie emprunt Mois 2"
                    name="garantieempruntm2"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm3"
                    label="Garantie emprunt Mois 3"
                    name="garantieempruntm3"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm4"
                    label="Garantie emprunt Mois 4"
                    name="garantieempruntm4"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm5"
                    label="Garantie emprunt Mois 5"
                    name="garantieempruntm5"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm6"
                    label="Garantie emprunt Mois 6"
                    name="garantieempruntm6"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm7"
                    label="Garantie emprunt Mois 7"
                    name="garantieempruntm7"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm8"
                    label="Garantie emprunt Mois 8"
                    name="garantieempruntm8"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm9"
                    label="Garantie emprunt Mois 9"
                    name="garantieempruntm9"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm10"
                    label="Garantie emprunt Mois 10"
                    name="garantieempruntm10"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm11"
                    label="Garantie emprunt Mois 11"
                    name="garantieempruntm11"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm12"
                    label="Garantie emprunt Mois 12"
                    name="garantieempruntm12"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm1"
                    label="Achats marchandises/mat prem Mois 1"
                    name="amm1"
                    autoFocus
                    type="number"
                    value={editTable.amm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm2"
                    label="Achats marchandises/mat prem Mois 2"
                    name="amm2"
                    autoFocus
                    type="number"
                    value={editTable.amm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm3"
                    label="Achats marchandises/mat prem Mois 3"
                    name="amm3"
                    autoFocus
                    type="number"
                    value={editTable.amm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm4"
                    label="Achats marchandises/mat prem Mois 4"
                    name="amm4"
                    autoFocus
                    type="number"
                    value={editTable.amm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm5"
                    label="Achats marchandises/mat prem Mois 5"
                    name="amm5"
                    autoFocus
                    type="number"
                    value={editTable.amm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm6"
                    label="Achats marchandises/mat prem Mois 6"
                    name="amm6"
                    autoFocus
                    type="number"
                    value={editTable.amm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm7"
                    label="Achats marchandises/mat prem Mois 7"
                    name="amm7"
                    autoFocus
                    type="number"
                    value={editTable.amm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm8"
                    label="Achats marchandises/mat prem Mois 8"
                    name="amm8"
                    autoFocus
                    type="number"
                    value={editTable.amm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm9"
                    label="Achats marchandises/mat prem Mois 9"
                    name="amm9"
                    autoFocus
                    type="number"
                    value={editTable.amm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm10"
                    label="Achats marchandises/mat prem Mois 10"
                    name="amm10"
                    autoFocus
                    type="number"
                    value={editTable.amm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm11"
                    label="Achats marchandises/mat prem Mois 11"
                    name="amm11"
                    autoFocus
                    type="number"
                    value={editTable.amm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm12"
                    label="Achats marchandises/mat prem Mois 12"
                    name="amm12"
                    autoFocus
                    type="number"
                    value={editTable.amm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm1"
                    label="Autres Achats Mois 1"
                    name="autreachatm1"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm2"
                    label="Autres Achats Mois 2"
                    name="autreachatm2"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm3"
                    label="Autres Achats Mois 3"
                    name="autreachatm3"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm4"
                    label="Autres Achats Mois 4"
                    name="autreachatm4"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm5"
                    label="Autres Achats Mois 5"
                    name="autreachatm5"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm6"
                    label="Autres Achats Mois 6"
                    name="autreachatm6"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm7"
                    label="Autres Achats Mois 7"
                    name="autreachatm7"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm8"
                    label="Autres Achats Mois 8"
                    name="autreachatm8"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm9"
                    label="Autres Achats Mois 9"
                    name="autreachatm9"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm10"
                    label="Autres Achats Mois 10"
                    name="autreachatm10"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm11"
                    label="Autres Achats Mois 11"
                    name="autreachatm11"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm12"
                    label="Autres Achats Mois 12"
                    name="autreachatm12"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm1"
                    label="Transports Mois 1"
                    name="transportm1"
                    autoFocus
                    type="number"
                    value={editTable.transportm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm2"
                    label="Transports Mois 2"
                    name="transportm2"
                    autoFocus
                    type="number"
                    value={editTable.transportm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm3"
                    label="Transports Mois 3"
                    name="transportm3"
                    autoFocus
                    type="number"
                    value={editTable.transportm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm4"
                    label="Transports Mois 4"
                    name="transportm4"
                    autoFocus
                    type="number"
                    value={editTable.transportm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm5"
                    label="Transports Mois 5"
                    name="transportm5"
                    autoFocus
                    type="number"
                    value={editTable.transportm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm6"
                    label="Transports Mois 6"
                    name="transportm6"
                    autoFocus
                    type="number"
                    value={editTable.transportm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm7"
                    label="Transports Mois 7"
                    name="transportm7"
                    autoFocus
                    type="number"
                    value={editTable.transportm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm8"
                    label="Transports Mois 8"
                    name="transportm8"
                    autoFocus
                    type="number"
                    value={editTable.transportm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm9"
                    label="Transports Mois 9"
                    name="transportm9"
                    autoFocus
                    type="number"
                    value={editTable.transportm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm10"
                    label="Transports Mois 10"
                    name="transportm10"
                    autoFocus
                    type="number"
                    value={editTable.transportm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm11"
                    label="Transports Mois 11"
                    name="transportm11"
                    autoFocus
                    type="number"
                    value={editTable.transportm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm12"
                    label="Transports Mois 12"
                    name="transportm12"
                    autoFocus
                    type="number"
                    value={editTable.transportm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem1"
                    label="Services extérieurs Mois 1"
                    name="sem1"
                    autoFocus
                    type="number"
                    value={editTable.sem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem2"
                    label="Services extérieurs Mois 2"
                    name="sem2"
                    autoFocus
                    type="number"
                    value={editTable.sem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem3"
                    label="Services extérieurs Mois 3"
                    name="sem3"
                    autoFocus
                    type="number"
                    value={editTable.sem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem4"
                    label="Services extérieurs Mois 4"
                    name="sem4"
                    autoFocus
                    type="number"
                    value={editTable.sem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem5"
                    label="Services extérieurs Mois 5"
                    name="sem5"
                    autoFocus
                    type="number"
                    value={editTable.sem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem6"
                    label="Services extérieurs Mois 6"
                    name="sem6"
                    autoFocus
                    type="number"
                    value={editTable.sem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem7"
                    label="Services extérieurs Mois 7"
                    name="sem7"
                    autoFocus
                    type="number"
                    value={editTable.sem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem8"
                    label="Services extérieurs Mois 8"
                    name="sem8"
                    autoFocus
                    type="number"
                    value={editTable.sem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem9"
                    label="Services extérieurs Mois 9"
                    name="sem9"
                    autoFocus
                    type="number"
                    value={editTable.sem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem10"
                    label="Services extérieurs Mois 10"
                    name="sem10"
                    autoFocus
                    type="number"
                    value={editTable.sem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem11"
                    label="Services extérieurs Mois 11"
                    name="sem11"
                    autoFocus
                    type="number"
                    value={editTable.sem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem12"
                    label="Services extérieurs Mois 12"
                    name="sem12"
                    autoFocus
                    type="number"
                    value={editTable.sem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem1"
                    label="Autres charges Mois 1"
                    name="autrechargem1"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem2"
                    label="Autres charges Mois 2"
                    name="autrechargem2"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem3"
                    label="Autres charges Mois 3"
                    name="autrechargem3"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem4"
                    label="Autres charges Mois 4"
                    name="autrechargem4"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem5"
                    label="Autres charges Mois 5"
                    name="autrechargem5"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem6"
                    label="Autres charges Mois 6"
                    name="autrechargem6"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem7"
                    label="Autres charges Mois 7"
                    name="autrechargem7"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem8"
                    label="Autres charges Mois 8"
                    name="autrechargem8"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem9"
                    label="Autres charges Mois 9"
                    name="autrechargem9"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem10"
                    label="Autres charges Mois 10"
                    name="autrechargem10"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem11"
                    label="Autres charges Mois 11"
                    name="autrechargem11"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem12"
                    label="Autres charges Mois 12"
                    name="autrechargem12"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm1"
                    label="Impôts et taxes Mois 1"
                    name="impotm1"
                    autoFocus
                    type="number"
                    value={editTable.impotm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm2"
                    label="Impôts et taxes Mois 2"
                    name="impotm2"
                    autoFocus
                    type="number"
                    value={editTable.impotm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm3"
                    label="Impôts et taxes Mois 3"
                    name="impotm3"
                    autoFocus
                    type="number"
                    value={editTable.impotm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm4"
                    label="Impôts et taxes Mois 4"
                    name="impotm4"
                    autoFocus
                    type="number"
                    value={editTable.impotm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm5"
                    label="Impôts et taxes Mois 5"
                    name="impotm5"
                    autoFocus
                    type="number"
                    value={editTable.impotm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm6"
                    label="Impôts et taxes Mois 6"
                    name="impotm6"
                    autoFocus
                    type="number"
                    value={editTable.impotm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm7"
                    label="Impôts et taxes Mois 7"
                    name="impotm7"
                    autoFocus
                    type="number"
                    value={editTable.impotm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm8"
                    label="Impôts et taxes Mois 8"
                    name="impotm8"
                    autoFocus
                    type="number"
                    value={editTable.impotm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm9"
                    label="Impôts et taxes Mois 9"
                    name="impotm9"
                    autoFocus
                    type="number"
                    value={editTable.impotm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm10"
                    label="Impôts et taxes Mois 10"
                    name="impotm10"
                    autoFocus
                    type="number"
                    value={editTable.impotm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm11"
                    label="Impôts et taxes Mois 11"
                    name="impotm11"
                    autoFocus
                    type="number"
                    value={editTable.impotm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm12"
                    label="Impôts et taxes Mois 12"
                    name="impotm12"
                    autoFocus
                    type="number"
                    value={editTable.impotm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm1"
                    label="Charges du personnel Mois 1"
                    name="cpm1"
                    autoFocus
                    type="number"
                    value={editTable.cpm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm2"
                    label="Charges du personnel Mois 2"
                    name="cpm2"
                    autoFocus
                    type="number"
                    value={editTable.cpm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm3"
                    label="Charges du personnel Mois 3"
                    name="cpm3"
                    autoFocus
                    type="number"
                    value={editTable.cpm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm4"
                    label="Charges du personnel Mois 4"
                    name="cpm4"
                    autoFocus
                    type="number"
                    value={editTable.cpm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm5"
                    label="Charges du personnel Mois 5"
                    name="cpm5"
                    autoFocus
                    type="number"
                    value={editTable.cpm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm6"
                    label="Charges du personnel Mois 6"
                    name="cpm6"
                    autoFocus
                    type="number"
                    value={editTable.cpm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm7"
                    label="Charges du personnel Mois 7"
                    name="cpm7"
                    autoFocus
                    type="number"
                    value={editTable.cpm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm8"
                    label="Charges du personnel Mois 8"
                    name="cpm8"
                    autoFocus
                    type="number"
                    value={editTable.cpm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm9"
                    label="Charges du personnel Mois 9"
                    name="cpm9"
                    autoFocus
                    type="number"
                    value={editTable.cpm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm10"
                    label="Charges du personnel Mois 10"
                    name="cpm10"
                    autoFocus
                    type="number"
                    value={editTable.cpm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm11"
                    label="Charges du personnel Mois 11"
                    name="cpm11"
                    autoFocus
                    type="number"
                    value={editTable.cpm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm12"
                    label="Charges du personnel Mois 12"
                    name="cpm12"
                    autoFocus
                    type="number"
                    value={editTable.cpm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm1"
                    label="Frais financiers Mois 1"
                    name="ffm1"
                    autoFocus
                    type="number"
                    value={editTable.ffm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm2"
                    label="Frais financiers Mois 2"
                    name="ffm2"
                    autoFocus
                    type="number"
                    value={editTable.ffm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm3"
                    label="Frais financiers Mois 3"
                    name="ffm3"
                    autoFocus
                    type="number"
                    value={editTable.ffm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm4"
                    label="Frais financiers Mois 4"
                    name="ffm4"
                    autoFocus
                    type="number"
                    value={editTable.ffm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm5"
                    label="Frais financiers Mois 5"
                    name="ffm5"
                    autoFocus
                    type="number"
                    value={editTable.ffm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm6"
                    label="Frais financiers Mois 6"
                    name="ffm6"
                    autoFocus
                    type="number"
                    value={editTable.ffm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm7"
                    label="Frais financiers Mois 7"
                    name="ffm7"
                    autoFocus
                    type="number"
                    value={editTable.ffm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm8"
                    label="Frais financiers Mois 8"
                    name="ffm8"
                    autoFocus
                    type="number"
                    value={editTable.ffm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm9"
                    label="Frais financiers Mois 9"
                    name="ffm9"
                    autoFocus
                    type="number"
                    value={editTable.ffm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm10"
                    label="Frais financiers Mois 10"
                    name="ffm10"
                    autoFocus
                    type="number"
                    value={editTable.ffm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm11"
                    label="Frais financiers Mois 11"
                    name="ffm11"
                    autoFocus
                    type="number"
                    value={editTable.ffm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm12"
                    label="Frais financiers Mois 12"
                    name="ffm12"
                    autoFocus
                    type="number"
                    value={editTable.ffm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem1"
                    label="TVA décaissée Mois 1"
                    name="tvadecaissem1"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem2"
                    label="TVA décaissée Mois 2"
                    name="tvadecaissem2"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem3"
                    label="TVA décaissée Mois 3"
                    name="tvadecaissem3"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem4"
                    label="TVA décaissée Mois 4"
                    name="tvadecaissem4"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem5"
                    label="TVA décaissée Mois 5"
                    name="tvadecaissem5"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem6"
                    label="TVA décaissée Mois 6"
                    name="tvadecaissem6"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem7"
                    label="TVA décaissée Mois 7"
                    name="tvadecaissem7"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem8"
                    label="TVA décaissée Mois 8"
                    name="tvadecaissem8"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem9"
                    label="TVA décaissée Mois 9"
                    name="tvadecaissem9"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem10"
                    label="TVA décaissée Mois 10"
                    name="tvadecaissem10"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem11"
                    label="TVA décaissée Mois 11"
                    name="tvadecaissem11"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem12"
                    label="TVA décaissée Mois 12"
                    name="tvadecaissem12"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />

                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<Edit/>}
                  style={{color: 'white', background:'#18A4F6'}}

                >
                  Modifier
                </Button>
              </div>
            </form>
            
        </CardContent>
        </Card>
        </>
        ): (
          <>
          <Card variant="outlined" className={`${!show && "show"}`}>
            <CardContent>
               <form onSubmit={onSubmit} noValidate>
                
               <div className="input">
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm1"
                    label="Apport personnel Mois 1"
                    name="apportpm1"
                    autoFocus
                    type="number"
                    value={editTable.apportpm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm2"
                    label="Apport personnel Mois 2"
                    name="apportpm2"
                    autoFocus
                    type="number"
                    value={editTable.apportpm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm3"
                    label="Apport personnel Mois 3"
                    name="apportpm3"
                    autoFocus
                    type="number"
                    value={editTable.apportpm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm4"
                    label="Apport personnel Mois 4"
                    name="apportpm4"
                    autoFocus
                    type="number"
                    value={editTable.apportpm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm5"
                    label="Apport personnel Mois 5"
                    name="apportpm5"
                    autoFocus
                    type="number"
                    value={editTable.apportpm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm6"
                    label="Apport personnel Mois 6"
                    name="apportpm6"
                    autoFocus
                    type="number"
                    value={editTable.apportpm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm7"
                    label="Apport personnel Mois 7"
                    name="apportpm7"
                    autoFocus
                    type="number"
                    value={editTable.apportpm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm8"
                    label="Apport personnel Mois 8"
                    name="apportpm8"
                    autoFocus
                    type="number"
                    value={editTable.apportpm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm9"
                    label="Apport personnel Mois 9"
                    name="apportpm9"
                    autoFocus
                    type="number"
                    value={editTable.apportpm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm10"
                    label="Apport personnel Mois 10"
                    name="apportpm10"
                    autoFocus
                    type="number"
                    value={editTable.apportpm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm11"
                    label="Apport personnel Mois 11"
                    name="apportpm11"
                    autoFocus
                    type="number"
                    value={editTable.apportpm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportpm12"
                    label="Apport personnel Mois 12"
                    name="apportpm12"
                    autoFocus
                    type="number"
                    value={editTable.apportpm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem1"
                    label="Associés Mois 1"
                    name="associem1"
                    autoFocus
                    type="number"
                    value={editTable.associem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem2"
                    label="Associés Mois 2"
                    name="associem2"
                    autoFocus
                    type="number"
                    value={editTable.associem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem3"
                    label="Associés Mois 3"
                    name="associem3"
                    autoFocus
                    type="number"
                    value={editTable.associem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem4"
                    label="Associés Mois 4"
                    name="associem4"
                    autoFocus
                    type="number"
                    value={editTable.associem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem5"
                    label="Associés Mois 5"
                    name="associem5"
                    autoFocus
                    type="number"
                    value={editTable.associem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem6"
                    label="Associés Mois 6"
                    name="associem6"
                    autoFocus
                    type="number"
                    value={editTable.associem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem7"
                    label="Associés Mois 7"
                    name="associem7"
                    autoFocus
                    type="number"
                    value={editTable.associem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem8"
                    label="Associés Mois 8"
                    name="associem8"
                    autoFocus
                    type="number"
                    value={editTable.associem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem9"
                    label="Associés Mois 9"
                    name="associem9"
                    autoFocus
                    type="number"
                    value={editTable.associem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem10"
                    label="Associés Mois 10"
                    name="associem10"
                    autoFocus
                    type="number"
                    value={editTable.associem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem11"
                    label="Associés Mois 11"
                    name="associem11"
                    autoFocus
                    type="number"
                    value={editTable.associem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="associem12"
                    label="Associés Mois 12"
                    name="associem12"
                    autoFocus
                    type="number"
                    value={editTable.associem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm1"
                    label="Emprunts Mois 1"
                    name="empruntm1"
                    autoFocus
                    type="number"
                    value={editTable.empruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm2"
                    label="Emprunts Mois 2"
                    name="empruntm2"
                    autoFocus
                    type="number"
                    value={editTable.empruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm3"
                    label="Emprunts Mois 3"
                    name="empruntm3"
                    autoFocus
                    type="number"
                    value={editTable.empruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm4"
                    label="Emprunts Mois 4"
                    name="empruntm4"
                    autoFocus
                    type="number"
                    value={editTable.empruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm5"
                    label="Emprunts Mois 5"
                    name="empruntm5"
                    autoFocus
                    type="number"
                    value={editTable.empruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm6"
                    label="Emprunts Mois 6"
                    name="empruntm6"
                    autoFocus
                    type="number"
                    value={editTable.empruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm7"
                    label="Emprunts Mois 7"
                    name="empruntm7"
                    autoFocus
                    type="number"
                    value={editTable.empruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm8"
                    label="Emprunts Mois 8"
                    name="empruntm8"
                    autoFocus
                    type="number"
                    value={editTable.empruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm9"
                    label="Emprunts Mois 9"
                    name="empruntm9"
                    autoFocus
                    type="number"
                    value={editTable.empruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm10"
                    label="Emprunts Mois 10"
                    name="empruntm10"
                    autoFocus
                    type="number"
                    value={editTable.empruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm11"
                    label="Emprunts Mois 11"
                    name="empruntm11"
                    autoFocus
                    type="number"
                    value={editTable.empruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="empruntm12"
                    label="Emprunts Mois 12"
                    name="empruntm12"
                    autoFocus
                    type="number"
                    value={editTable.empruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm1"
                    label="Subventions Mois 1"
                    name="subventionm1"
                    autoFocus
                    type="number"
                    value={editTable.subventionm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm2"
                    label="Subventions Mois 2"
                    name="subventionm2"
                    autoFocus
                    type="number"
                    value={editTable.subventionm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm3"
                    label="Subventions Mois 3"
                    name="subventionm3"
                    autoFocus
                    type="number"
                    value={editTable.subventionm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm4"
                    label="Subventions Mois 4"
                    name="subventionm4"
                    autoFocus
                    type="number"
                    value={editTable.subventionm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm5"
                    label="Subventions Mois 5"
                    name="subventionm5"
                    autoFocus
                    type="number"
                    value={editTable.subventionm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm6"
                    label="Subventions Mois 6"
                    name="subventionm6"
                    autoFocus
                    type="number"
                    value={editTable.subventionm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm7"
                    label="Subventions Mois 7"
                    name="subventionm7"
                    autoFocus
                    type="number"
                    value={editTable.subventionm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm8"
                    label="Subventions Mois 8"
                    name="subventionm8"
                    autoFocus
                    type="number"
                    value={editTable.subventionm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm9"
                    label="Subventions Mois 9"
                    name="subventionm9"
                    autoFocus
                    type="number"
                    value={editTable.subventionm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm10"
                    label="Subventions Mois 10"
                    name="subventionm10"
                    autoFocus
                    type="number"
                    value={editTable.subventionm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm11"
                    label="Subventions Mois 11"
                    name="subventionm11"
                    autoFocus
                    type="number"
                    value={editTable.subventionm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="subventionm12"
                    label="Subventions Mois 12"
                    name="subventionm12"
                    autoFocus
                    type="number"
                    value={editTable.subventionm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm1"
                    label="Aides Mois 1"
                    name="aidesm1"
                    autoFocus
                    type="number"
                    value={editTable.aidesm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm2"
                    label="Aides Mois 2"
                    name="aidesm2"
                    autoFocus
                    type="number"
                    value={editTable.aidesm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm3"
                    label="Aides Mois 3"
                    name="aidesm3"
                    autoFocus
                    type="number"
                    value={editTable.aidesm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm4"
                    label="Aides Mois 4"
                    name="aidesm4"
                    autoFocus
                    type="number"
                    value={editTable.aidesm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm5"
                    label="Aides Mois 5"
                    name="aidesm5"
                    autoFocus
                    type="number"
                    value={editTable.aidesm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm6"
                    label="Aides Mois 6"
                    name="aidesm6"
                    autoFocus
                    type="number"
                    value={editTable.aidesm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm7"
                    label="Aides Mois 7"
                    name="aidesm7"
                    autoFocus
                    type="number"
                    value={editTable.aidesm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm8"
                    label="Aides Mois 8"
                    name="aidesm8"
                    autoFocus
                    type="number"
                    value={editTable.aidesm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm9"
                    label="Aides Mois 9"
                    name="aidesm9"
                    autoFocus
                    type="number"
                    value={editTable.aidesm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm10"
                    label="Aides Mois 10"
                    name="aidesm10"
                    autoFocus
                    type="number"
                    value={editTable.aidesm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm11"
                    label="Aides Mois 11"
                    name="aidesm11"
                    autoFocus
                    type="number"
                    value={editTable.aidesm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="aidesm12"
                    label="Aides Mois 12"
                    name="aidesm12"
                    autoFocus
                    type="number"
                    value={editTable.aidesm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm1"
                    label="Apport en compte courant Mois 1"
                    name="apportccm1"
                    autoFocus
                    type="number"
                    value={editTable.apportccm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm2"
                    label="Apport en compte courant Mois 2"
                    name="apportccm2"
                    autoFocus
                    type="number"
                    value={editTable.apportccm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm3"
                    label="Apport en compte courant Mois 3"
                    name="apportccm3"
                    autoFocus
                    type="number"
                    value={editTable.apportccm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm4"
                    label="Apport en compte courant Mois 4"
                    name="apportccm4"
                    autoFocus
                    type="number"
                    value={editTable.apportccm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm5"
                    label="Apport en compte courant Mois 5"
                    name="apportccm5"
                    autoFocus
                    type="number"
                    value={editTable.apportccm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm6"
                    label="Apport en compte courant Mois 6"
                    name="apportccm6"
                    autoFocus
                    type="number"
                    value={editTable.apportccm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm7"
                    label="Apport en compte courant Mois 7"
                    name="apportccm7"
                    autoFocus
                    type="number"
                    value={editTable.apportccm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm8"
                    label="Apport en compte courant Mois 8"
                    name="apportccm8"
                    autoFocus
                    type="number"
                    value={editTable.apportccm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm9"
                    label="Apport en compte courant Mois 9"
                    name="apportccm9"
                    autoFocus
                    type="number"
                    value={editTable.apportccm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm10"
                    label="Apport en compte courant Mois 10"
                    name="apportccm10"
                    autoFocus
                    type="number"
                    value={editTable.apportccm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm11"
                    label="Apport en compte courant Mois 11"
                    name="apportccm11"
                    autoFocus
                    type="number"
                    value={editTable.apportccm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="apportccm12"
                    label="Apport en compte courant Mois 12"
                    name="apportccm12"
                    autoFocus
                    type="number"
                    value={editTable.apportccm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm1"
                    label="Chiffres d'Affaires HT encaissés Mois 1"
                    name="cahtm1"
                    autoFocus
                    type="number"
                    value={editTable.cahtm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm2"
                    label="Chiffres d'Affaires HT encaissés Mois 2"
                    name="cahtm2"
                    autoFocus
                    type="number"
                    value={editTable.cahtm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm3"
                    label="Chiffres d'Affaires HT encaissés Mois 3"
                    name="cahtm3"
                    autoFocus
                    type="number"
                    value={editTable.cahtm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm4"
                    label="Chiffres d'Affaires HT encaissés Mois 4"
                    name="cahtm4"
                    autoFocus
                    type="number"
                    value={editTable.cahtm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm5"
                    label="Chiffres d'Affaires HT encaissés Mois 5"
                    name="cahtm5"
                    autoFocus
                    type="number"
                    value={editTable.cahtm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm6"
                    label="Chiffres d'Affaires HT encaissés Mois 6"
                    name="cahtm6"
                    autoFocus
                    type="number"
                    value={editTable.cahtm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm7"
                    label="Chiffres d'Affaires HT encaissés Mois 7"
                    name="cahtm7"
                    autoFocus
                    type="number"
                    value={editTable.cahtm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm8"
                    label="Chiffres d'Affaires HT encaissés Mois 8"
                    name="cahtm8"
                    autoFocus
                    type="number"
                    value={editTable.cahtm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm9"
                    label="Chiffres d'Affaires HT encaissés Mois 9"
                    name="cahtm9"
                    autoFocus
                    type="number"
                    value={editTable.cahtm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm10"
                    label="Chiffres d'Affaires HT encaissés Mois 10"
                    name="cahtm10"
                    autoFocus
                    type="number"
                    value={editTable.cahtm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm11"
                    label="Chiffres d'Affaires HT encaissés Mois 11"
                    name="cahtm11"
                    autoFocus
                    type="number"
                    value={editTable.cahtm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cahtm12"
                    label="Chiffres d'Affaires HT encaissés Mois 12"
                    name="cahtm12"
                    autoFocus
                    type="number"
                    value={editTable.cahtm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam1"
                    label="TVA encaissée/ventes Mois 1"
                    name="tvam1"
                    autoFocus
                    type="number"
                    value={editTable.tvam1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam2"
                    label="TVA encaissée/ventes Mois 2"
                    name="tvam2"
                    autoFocus
                    type="number"
                    value={editTable.tvam2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam3"
                    label="TVA encaissée/ventes Mois 3"
                    name="tvam3"
                    autoFocus
                    type="number"
                    value={editTable.tvam3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam4"
                    label="TVA encaissée/ventes Mois 4"
                    name="tvam4"
                    autoFocus
                    type="number"
                    value={editTable.tvam4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam5"
                    label="TVA encaissée/ventes Mois 5"
                    name="tvam5"
                    autoFocus
                    type="number"
                    value={editTable.tvam5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam6"
                    label="TVA encaissée/ventes Mois 6"
                    name="tvam6"
                    autoFocus
                    type="number"
                    value={editTable.tvam6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam7"
                    label="TVA encaissée/ventes Mois 7"
                    name="tvam7"
                    autoFocus
                    type="number"
                    value={editTable.tvam7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam8"
                    label="TVA encaissée/ventes Mois 8"
                    name="tvam8"
                    autoFocus
                    type="number"
                    value={editTable.tvam8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam9"
                    label="TVA encaissée/ventes Mois 9"
                    name="tvam9"
                    autoFocus
                    type="number"
                    value={editTable.tvam9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam10"
                    label="TVA encaissée/ventes Mois 10"
                    name="tvam10"
                    autoFocus
                    type="number"
                    value={editTable.tvam10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam11"
                    label="TVA encaissée/ventes Mois 11"
                    name="tvam11"
                    autoFocus
                    type="number"
                    value={editTable.tvam11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvam12"
                    label="TVA encaissée/ventes Mois 12"
                    name="tvam12"
                    autoFocus
                    type="number"
                    value={editTable.tvam12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem1"
                    label="Créances clients encaissées Mois 1"
                    name="creancem1"
                    autoFocus
                    type="number"
                    value={editTable.creancem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem2"
                    label="Créances clients encaissées Mois 2"
                    name="creancem2"
                    autoFocus
                    type="number"
                    value={editTable.creancem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem3"
                    label="Créances clients encaissées Mois 3"
                    name="creancem3"
                    autoFocus
                    type="number"
                    value={editTable.creancem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem4"
                    label="Créances clients encaissées Mois 4"
                    name="creancem4"
                    autoFocus
                    type="number"
                    value={editTable.creancem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem5"
                    label="Créances clients encaissées Mois 5"
                    name="creancem5"
                    autoFocus
                    type="number"
                    value={editTable.creancem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem6"
                    label="Créances clients encaissées Mois 6"
                    name="creancem6"
                    autoFocus
                    type="number"
                    value={editTable.creancem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem7"
                    label="Créances clients encaissées Mois 7"
                    name="creancem7"
                    autoFocus
                    type="number"
                    value={editTable.creancem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem8"
                    label="Créances clients encaissées Mois 8"
                    name="creancem8"
                    autoFocus
                    type="number"
                    value={editTable.creancem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem9"
                    label="Créances clients encaissées Mois 9"
                    name="creancem9"
                    autoFocus
                    type="number"
                    value={editTable.creancem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem10"
                    label="Créances clients encaissées Mois 10"
                    name="creancem10"
                    autoFocus
                    type="number"
                    value={editTable.creancem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem11"
                    label="Créances clients encaissées Mois 11"
                    name="creancem11"
                    autoFocus
                    type="number"
                    value={editTable.creancem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="creancem12"
                    label="Créances clients encaissées Mois 12"
                    name="creancem12"
                    autoFocus
                    type="number"
                    value={editTable.creancem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem1"
                    label="Autres encaissements Mois 1"
                    name="autrecaissem1"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem2"
                    label="Autres encaissements Mois 2"
                    name="autrecaissem2"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem3"
                    label="Autres encaissements Mois 3"
                    name="autrecaissem3"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem4"
                    label="Autres encaissements Mois 4"
                    name="autrecaissem4"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem5"
                    label="Autres encaissements Mois 5"
                    name="autrecaissem5"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem6"
                    label="Autres encaissements Mois 6"
                    name="autrecaissem6"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem7"
                    label="Autres encaissements Mois 7"
                    name="autrecaissem7"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem8"
                    label="Autres encaissements Mois 8"
                    name="autrecaissem8"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem9"
                    label="Autres encaissements Mois 9"
                    name="autrecaissem9"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem10"
                    label="Autres encaissements Mois 10"
                    name="autrecaissem10"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem11"
                    label="Autres encaissements Mois 11"
                    name="autrecaissem11"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrecaissem12"
                    label="Autres encaissements Mois 12"
                    name="autrecaissem12"
                    autoFocus
                    type="number"
                    value={editTable.autrecaissem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm1"
                    label="Investissements Mois 1"
                    name="investm1"
                    autoFocus
                    type="number"
                    value={editTable.investm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm2"
                    label="Investissements Mois 2"
                    name="investm2"
                    autoFocus
                    type="number"
                    value={editTable.investm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm3"
                    label="Investissements Mois 3"
                    name="investm3"
                    autoFocus
                    type="number"
                    value={editTable.investm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm4"
                    label="Investissements Mois 4"
                    name="investm4"
                    autoFocus
                    type="number"
                    value={editTable.investm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm5"
                    label="Investissements Mois 5"
                    name="investm5"
                    autoFocus
                    type="number"
                    value={editTable.investm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm6"
                    label="Investissements Mois 6"
                    name="investm6"
                    autoFocus
                    type="number"
                    value={editTable.investm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm7"
                    label="Investissements Mois 7"
                    name="investm7"
                    autoFocus
                    type="number"
                    value={editTable.investm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm8"
                    label="Investissements Mois 8"
                    name="investm8"
                    autoFocus
                    type="number"
                    value={editTable.investm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm9"
                    label="Investissements Mois 9"
                    name="investm9"
                    autoFocus
                    type="number"
                    value={editTable.investm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm10"
                    label="Investissements Mois 10"
                    name="investm10"
                    autoFocus
                    type="number"
                    value={editTable.investm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm11"
                    label="Investissements Mois 11"
                    name="investm11"
                    autoFocus
                    type="number"
                    value={editTable.investm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="investm12"
                    label="Investissements Mois 12"
                    name="investm12"
                    autoFocus
                    type="number"
                    value={editTable.investm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm1"
                    label="Remboursement comptes courants Mois 1"
                    name="rembourseccm1"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm2"
                    label="Remboursement comptes courants Mois 2"
                    name="rembourseccm2"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm3"
                    label="Remboursement comptes courants Mois 3"
                    name="rembourseccm3"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm4"
                    label="Remboursement comptes courants Mois 4"
                    name="rembourseccm4"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm5"
                    label="Remboursement comptes courants Mois 5"
                    name="rembourseccm5"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm6"
                    label="Remboursement comptes courants Mois 6"
                    name="rembourseccm6"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm7"
                    label="Remboursement comptes courants Mois 7"
                    name="rembourseccm7"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm8"
                    label="Remboursement comptes courants Mois 8"
                    name="rembourseccm8"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm9"
                    label="Remboursement comptes courants Mois 9"
                    name="rembourseccm9"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm10"
                    label="Remboursement comptes courants Mois 10"
                    name="rembourseccm10"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm11"
                    label="Remboursement comptes courants Mois 11"
                    name="rembourseccm11"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseccm12"
                    label="Remboursement comptes courants Mois 12"
                    name="rembourseccm12"
                    autoFocus
                    type="number"
                    value={editTable.rembourseccm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm1"
                    label="Rembousement emprunts (échéances) Mois 1"
                    name="rembourseempruntm1"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm2"
                    label="Rembousement emprunts (échéances) Mois 2"
                    name="rembourseempruntm2"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm3"
                    label="Rembousement emprunts (échéances) Mois 3"
                    name="rembourseempruntm3"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm4"
                    label="Rembousement emprunts (échéances) Mois 4"
                    name="rembourseempruntm4"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm5"
                    label="Rembousement emprunts (échéances) Mois 5"
                    name="rembourseempruntm5"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm6"
                    label="Rembousement emprunts (échéances) Mois 6"
                    name="rembourseempruntm6"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm7"
                    label="Rembousement emprunts (échéances) Mois 7"
                    name="rembourseempruntm7"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm8"
                    label="Rembousement emprunts (échéances) Mois 8"
                    name="rembourseempruntm8"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm9"
                    label="Rembousement emprunts (échéances) Mois 9"
                    name="rembourseempruntm9"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm10"
                    label="Rembousement emprunts (échéances) Mois 10"
                    name="rembourseempruntm10"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm11"
                    label="Rembousement emprunts (échéances) Mois 11"
                    name="rembourseempruntm11"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="rembourseempruntm12"
                    label="Rembousement emprunts (échéances) Mois 12"
                    name="rembourseempruntm12"
                    autoFocus
                    type="number"
                    value={editTable.rembourseempruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm1"
                    label="Garantie emprunt Mois 1"
                    name="garantieempruntm1"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm2"
                    label="Garantie emprunt Mois 2"
                    name="garantieempruntm2"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm3"
                    label="Garantie emprunt Mois 3"
                    name="garantieempruntm3"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm4"
                    label="Garantie emprunt Mois 4"
                    name="garantieempruntm4"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm5"
                    label="Garantie emprunt Mois 5"
                    name="garantieempruntm5"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm6"
                    label="Garantie emprunt Mois 6"
                    name="garantieempruntm6"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm7"
                    label="Garantie emprunt Mois 7"
                    name="garantieempruntm7"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm8"
                    label="Garantie emprunt Mois 8"
                    name="garantieempruntm8"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm9"
                    label="Garantie emprunt Mois 9"
                    name="garantieempruntm9"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm10"
                    label="Garantie emprunt Mois 10"
                    name="garantieempruntm10"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm11"
                    label="Garantie emprunt Mois 11"
                    name="garantieempruntm11"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="garantieempruntm12"
                    label="Garantie emprunt Mois 12"
                    name="garantieempruntm12"
                    autoFocus
                    type="number"
                    value={editTable.garantieempruntm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm1"
                    label="Achats marchandises/mat prem Mois 1"
                    name="amm1"
                    autoFocus
                    type="number"
                    value={editTable.amm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm2"
                    label="Achats marchandises/mat prem Mois 2"
                    name="amm2"
                    autoFocus
                    type="number"
                    value={editTable.amm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm3"
                    label="Achats marchandises/mat prem Mois 3"
                    name="amm3"
                    autoFocus
                    type="number"
                    value={editTable.amm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm4"
                    label="Achats marchandises/mat prem Mois 4"
                    name="amm4"
                    autoFocus
                    type="number"
                    value={editTable.amm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm5"
                    label="Achats marchandises/mat prem Mois 5"
                    name="amm5"
                    autoFocus
                    type="number"
                    value={editTable.amm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm6"
                    label="Achats marchandises/mat prem Mois 6"
                    name="amm6"
                    autoFocus
                    type="number"
                    value={editTable.amm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm7"
                    label="Achats marchandises/mat prem Mois 7"
                    name="amm7"
                    autoFocus
                    type="number"
                    value={editTable.amm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm8"
                    label="Achats marchandises/mat prem Mois 8"
                    name="amm8"
                    autoFocus
                    type="number"
                    value={editTable.amm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm9"
                    label="Achats marchandises/mat prem Mois 9"
                    name="amm9"
                    autoFocus
                    type="number"
                    value={editTable.amm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm10"
                    label="Achats marchandises/mat prem Mois 10"
                    name="amm10"
                    autoFocus
                    type="number"
                    value={editTable.amm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm11"
                    label="Achats marchandises/mat prem Mois 11"
                    name="amm11"
                    autoFocus
                    type="number"
                    value={editTable.amm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="amm12"
                    label="Achats marchandises/mat prem Mois 12"
                    name="amm12"
                    autoFocus
                    type="number"
                    value={editTable.amm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm1"
                    label="Autres Achats Mois 1"
                    name="autreachatm1"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm2"
                    label="Autres Achats Mois 2"
                    name="autreachatm2"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm3"
                    label="Autres Achats Mois 3"
                    name="autreachatm3"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm4"
                    label="Autres Achats Mois 4"
                    name="autreachatm4"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm5"
                    label="Autres Achats Mois 5"
                    name="autreachatm5"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm6"
                    label="Autres Achats Mois 6"
                    name="autreachatm6"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm7"
                    label="Autres Achats Mois 7"
                    name="autreachatm7"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm8"
                    label="Autres Achats Mois 8"
                    name="autreachatm8"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm9"
                    label="Autres Achats Mois 9"
                    name="autreachatm9"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm10"
                    label="Autres Achats Mois 10"
                    name="autreachatm10"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm11"
                    label="Autres Achats Mois 11"
                    name="autreachatm11"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autreachatm12"
                    label="Autres Achats Mois 12"
                    name="autreachatm12"
                    autoFocus
                    type="number"
                    value={editTable.autreachatm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm1"
                    label="Transports Mois 1"
                    name="transportm1"
                    autoFocus
                    type="number"
                    value={editTable.transportm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm2"
                    label="Transports Mois 2"
                    name="transportm2"
                    autoFocus
                    type="number"
                    value={editTable.transportm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm3"
                    label="Transports Mois 3"
                    name="transportm3"
                    autoFocus
                    type="number"
                    value={editTable.transportm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm4"
                    label="Transports Mois 4"
                    name="transportm4"
                    autoFocus
                    type="number"
                    value={editTable.transportm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm5"
                    label="Transports Mois 5"
                    name="transportm5"
                    autoFocus
                    type="number"
                    value={editTable.transportm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm6"
                    label="Transports Mois 6"
                    name="transportm6"
                    autoFocus
                    type="number"
                    value={editTable.transportm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm7"
                    label="Transports Mois 7"
                    name="transportm7"
                    autoFocus
                    type="number"
                    value={editTable.transportm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm8"
                    label="Transports Mois 8"
                    name="transportm8"
                    autoFocus
                    type="number"
                    value={editTable.transportm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm9"
                    label="Transports Mois 9"
                    name="transportm9"
                    autoFocus
                    type="number"
                    value={editTable.transportm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm10"
                    label="Transports Mois 10"
                    name="transportm10"
                    autoFocus
                    type="number"
                    value={editTable.transportm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm11"
                    label="Transports Mois 11"
                    name="transportm11"
                    autoFocus
                    type="number"
                    value={editTable.transportm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="transportm12"
                    label="Transports Mois 12"
                    name="transportm12"
                    autoFocus
                    type="number"
                    value={editTable.transportm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem1"
                    label="Services extérieurs Mois 1"
                    name="sem1"
                    autoFocus
                    type="number"
                    value={editTable.sem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem2"
                    label="Services extérieurs Mois 2"
                    name="sem2"
                    autoFocus
                    type="number"
                    value={editTable.sem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem3"
                    label="Services extérieurs Mois 3"
                    name="sem3"
                    autoFocus
                    type="number"
                    value={editTable.sem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem4"
                    label="Services extérieurs Mois 4"
                    name="sem4"
                    autoFocus
                    type="number"
                    value={editTable.sem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem5"
                    label="Services extérieurs Mois 5"
                    name="sem5"
                    autoFocus
                    type="number"
                    value={editTable.sem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem6"
                    label="Services extérieurs Mois 6"
                    name="sem6"
                    autoFocus
                    type="number"
                    value={editTable.sem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem7"
                    label="Services extérieurs Mois 7"
                    name="sem7"
                    autoFocus
                    type="number"
                    value={editTable.sem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem8"
                    label="Services extérieurs Mois 8"
                    name="sem8"
                    autoFocus
                    type="number"
                    value={editTable.sem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem9"
                    label="Services extérieurs Mois 9"
                    name="sem9"
                    autoFocus
                    type="number"
                    value={editTable.sem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem10"
                    label="Services extérieurs Mois 10"
                    name="sem10"
                    autoFocus
                    type="number"
                    value={editTable.sem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem11"
                    label="Services extérieurs Mois 11"
                    name="sem11"
                    autoFocus
                    type="number"
                    value={editTable.sem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="sem12"
                    label="Services extérieurs Mois 12"
                    name="sem12"
                    autoFocus
                    type="number"
                    value={editTable.sem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem1"
                    label="Autres charges Mois 1"
                    name="autrechargem1"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem2"
                    label="Autres charges Mois 2"
                    name="autrechargem2"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem3"
                    label="Autres charges Mois 3"
                    name="autrechargem3"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem4"
                    label="Autres charges Mois 4"
                    name="autrechargem4"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem5"
                    label="Autres charges Mois 5"
                    name="autrechargem5"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem6"
                    label="Autres charges Mois 6"
                    name="autrechargem6"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem7"
                    label="Autres charges Mois 7"
                    name="autrechargem7"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem8"
                    label="Autres charges Mois 8"
                    name="autrechargem8"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem9"
                    label="Autres charges Mois 9"
                    name="autrechargem9"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem10"
                    label="Autres charges Mois 10"
                    name="autrechargem10"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem11"
                    label="Autres charges Mois 11"
                    name="autrechargem11"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="autrechargem12"
                    label="Autres charges Mois 12"
                    name="autrechargem12"
                    autoFocus
                    type="number"
                    value={editTable.autrechargem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm1"
                    label="Impôts et taxes Mois 1"
                    name="impotm1"
                    autoFocus
                    type="number"
                    value={editTable.impotm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm2"
                    label="Impôts et taxes Mois 2"
                    name="impotm2"
                    autoFocus
                    type="number"
                    value={editTable.impotm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm3"
                    label="Impôts et taxes Mois 3"
                    name="impotm3"
                    autoFocus
                    type="number"
                    value={editTable.impotm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm4"
                    label="Impôts et taxes Mois 4"
                    name="impotm4"
                    autoFocus
                    type="number"
                    value={editTable.impotm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm5"
                    label="Impôts et taxes Mois 5"
                    name="impotm5"
                    autoFocus
                    type="number"
                    value={editTable.impotm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm6"
                    label="Impôts et taxes Mois 6"
                    name="impotm6"
                    autoFocus
                    type="number"
                    value={editTable.impotm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm7"
                    label="Impôts et taxes Mois 7"
                    name="impotm7"
                    autoFocus
                    type="number"
                    value={editTable.impotm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm8"
                    label="Impôts et taxes Mois 8"
                    name="impotm8"
                    autoFocus
                    type="number"
                    value={editTable.impotm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm9"
                    label="Impôts et taxes Mois 9"
                    name="impotm9"
                    autoFocus
                    type="number"
                    value={editTable.impotm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm10"
                    label="Impôts et taxes Mois 10"
                    name="impotm10"
                    autoFocus
                    type="number"
                    value={editTable.impotm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm11"
                    label="Impôts et taxes Mois 11"
                    name="impotm11"
                    autoFocus
                    type="number"
                    value={editTable.impotm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="impotm12"
                    label="Impôts et taxes Mois 12"
                    name="impotm12"
                    autoFocus
                    type="number"
                    value={editTable.impotm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm1"
                    label="Charges du personnel Mois 1"
                    name="cpm1"
                    autoFocus
                    type="number"
                    value={editTable.cpm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm2"
                    label="Charges du personnel Mois 2"
                    name="cpm2"
                    autoFocus
                    type="number"
                    value={editTable.cpm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm3"
                    label="Charges du personnel Mois 3"
                    name="cpm3"
                    autoFocus
                    type="number"
                    value={editTable.cpm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm4"
                    label="Charges du personnel Mois 4"
                    name="cpm4"
                    autoFocus
                    type="number"
                    value={editTable.cpm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm5"
                    label="Charges du personnel Mois 5"
                    name="cpm5"
                    autoFocus
                    type="number"
                    value={editTable.cpm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm6"
                    label="Charges du personnel Mois 6"
                    name="cpm6"
                    autoFocus
                    type="number"
                    value={editTable.cpm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm7"
                    label="Charges du personnel Mois 7"
                    name="cpm7"
                    autoFocus
                    type="number"
                    value={editTable.cpm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm8"
                    label="Charges du personnel Mois 8"
                    name="cpm8"
                    autoFocus
                    type="number"
                    value={editTable.cpm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm9"
                    label="Charges du personnel Mois 9"
                    name="cpm9"
                    autoFocus
                    type="number"
                    value={editTable.cpm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm10"
                    label="Charges du personnel Mois 10"
                    name="cpm10"
                    autoFocus
                    type="number"
                    value={editTable.cpm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm11"
                    label="Charges du personnel Mois 11"
                    name="cpm11"
                    autoFocus
                    type="number"
                    value={editTable.cpm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="cpm12"
                    label="Charges du personnel Mois 12"
                    name="cpm12"
                    autoFocus
                    type="number"
                    value={editTable.cpm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm1"
                    label="Frais financiers Mois 1"
                    name="ffm1"
                    autoFocus
                    type="number"
                    value={editTable.ffm1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm2"
                    label="Frais financiers Mois 2"
                    name="ffm2"
                    autoFocus
                    type="number"
                    value={editTable.ffm2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm3"
                    label="Frais financiers Mois 3"
                    name="ffm3"
                    autoFocus
                    type="number"
                    value={editTable.ffm3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm4"
                    label="Frais financiers Mois 4"
                    name="ffm4"
                    autoFocus
                    type="number"
                    value={editTable.ffm4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm5"
                    label="Frais financiers Mois 5"
                    name="ffm5"
                    autoFocus
                    type="number"
                    value={editTable.ffm5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm6"
                    label="Frais financiers Mois 6"
                    name="ffm6"
                    autoFocus
                    type="number"
                    value={editTable.ffm6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm7"
                    label="Frais financiers Mois 7"
                    name="ffm7"
                    autoFocus
                    type="number"
                    value={editTable.ffm7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm8"
                    label="Frais financiers Mois 8"
                    name="ffm8"
                    autoFocus
                    type="number"
                    value={editTable.ffm8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm9"
                    label="Frais financiers Mois 9"
                    name="ffm9"
                    autoFocus
                    type="number"
                    value={editTable.ffm9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm10"
                    label="Frais financiers Mois 10"
                    name="ffm10"
                    autoFocus
                    type="number"
                    value={editTable.ffm10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm11"
                    label="Frais financiers Mois 11"
                    name="ffm11"
                    autoFocus
                    type="number"
                    value={editTable.ffm11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="ffm12"
                    label="Frais financiers Mois 12"
                    name="ffm12"
                    autoFocus
                    type="number"
                    value={editTable.ffm12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem1"
                    label="TVA décaissée Mois 1"
                    name="tvadecaissem1"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem1}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem2"
                    label="TVA décaissée Mois 2"
                    name="tvadecaissem2"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem2}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem3"
                    label="TVA décaissée Mois 3"
                    name="tvadecaissem3"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem3}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem4"
                    label="TVA décaissée Mois 4"
                    name="tvadecaissem4"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem4}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem5"
                    label="TVA décaissée Mois 5"
                    name="tvadecaissem5"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem5}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem6"
                    label="TVA décaissée Mois 6"
                    name="tvadecaissem6"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem6}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem7"
                    label="TVA décaissée Mois 7"
                    name="tvadecaissem7"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem7}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem8"
                    label="TVA décaissée Mois 8"
                    name="tvadecaissem8"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem8}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem9"
                    label="TVA décaissée Mois 9"
                    name="tvadecaissem9"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem9}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem10"
                    label="TVA décaissée Mois 10"
                    name="tvadecaissem10"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem10}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem11"
                    label="TVA décaissée Mois 11"
                    name="tvadecaissem11"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem11}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="tvadecaissem12"
                    label="TVA décaissée Mois 12"
                    name="tvadecaissem12"
                    autoFocus
                    type="number"
                    value={editTable.tvadecaissem12}
                    onChange={handleChange}
                    style={{ width: 200, marginRight: 10 }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">FCFA</InputAdornment>,
                    }}
                />

                <Button
                  type="submit"
                  className="plus-icon"
                  onClick={() => setShow(!show)}
                  endIcon={<SaveIcon/>}
                  style={{color: 'white', background:'#18A4F6'}}

                >
                  Ajouter
                </Button>
              </div>
            
                </form>
            </CardContent>
          </Card>
        </>
        )}
      </div>
    </div>
  );
};

export default Chapitredix