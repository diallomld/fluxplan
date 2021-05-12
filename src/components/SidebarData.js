import React from "react";

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import GetAppIcon from "@material-ui/icons/GetApp";

export const SidebarData = [
  {
    title: "LE PROJET",
    path: "/projet",
    icon: <AiIcons.AiFillProject />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Besoin ou problème à résoudre",
        path: "/projet/resoudre",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Solution/Produits",
        path: "/projet/solution",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Business model",
        path: "/projet/model",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Historique succinct du projet",
        path: "/projet/succint",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Mission, Vision et Objectifs",
        path: "/projet/objectif",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Statut juridique",
        path: "/projet/juridique",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Etat d’avancement du projet",
        path: "/projet/avancement",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "L’EQUIPE",
    path: "/equipe",
    icon: <AiIcons.AiOutlineTeam />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Promoteur(s)",
        path: "/equipe/promoteur",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "L’équipe dirigeante",
        path: "/equipe/dirigeant",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Personnel",
        path: "/equipe/personnel",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Partenaires clés",
        path: "/equipe/partenaire",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "LE MARCHE",
    path: "/marche",
    icon: <AiIcons.AiFillTrademarkCircle />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Analyse du marché",
        path: "/marche/analyse",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Segments de Clients",
        path: "/marche/segment",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Fournisseurs clés",
        path: "/marche/fournisseur",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Concurrents",
        path: "/marche/concurrent",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Notre avantage concurrentiel",
        path: "/marche/avantage",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Prescripteurs",
        path: "/marche/prescripteur",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "STRATEGIE & MARKETING MIX",
    path: "/strategie",
    icon: <AiIcons.AiOutlineTrademarkCircle />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Stratégie Marketing",
        path: "/strategie/marketing",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Marketing Mix",
        path: "/strategie/mix",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan d’actions commercial",
        path: "/strategie/action",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "PROJECTIONS FINANCIERES",
    path: "/projection",
    icon: <AiIcons.AiOutlineTransaction />,
    iconClosed: <RiIcons.RiArrowDownFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Coût du projet",
        path: "/projection/cout",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Schéma de financement du projet",
        path: "/projection/schema",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Hypothèses",
        path: "/projection/hyspothese",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Chiffre d’affaires de la première année",
        path: "/projection/prevision1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Chiffre d’affaires sur 3 ans",
        path: "/projection/prevision2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Comptes de résultat sur 3 ans",
        path: "/projection/prevision3",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan de financement sur 3 ans",
        path: "/projection/plan",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Bilans prévisionnels",
        path: "/projection/bilan",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan de trésorerie de la première année",
        path: "/projection/tresorerie",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Seuil de rentabilité",
        path: "/projection/seuil",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Indicateurs de mesure de rentabilité",
        path: "/projection/indicateur",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "ANALYSE DES RISQUES",
    path: "/analyse",
    icon: <IoIcons.IoMdFunnel />,
  },
  {
    title: "TELECHARGER",
    path: "/download",
    icon: <IoIcons.IoMdDownload />,
  },
];

// {
//   title: "Commerce plan",
//   path: "/commerce",
//   icon: <AiIcons.AiFillHome />,
//   iconClosed: <RiIcons.RiArrowDownFill />,
//   iconOpened: <RiIcons.RiArrowUpSFill />,
//   subNav: [
//     {
//       title: "Justification du financement ",
//       path: "/commerce/financement",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Projection financière",
//       path: "/commerce/projection",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Présentation du promoteur",
//       path: "/commerce/promoteur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Présentation de l'activité",
//       path: "/commerce/activite",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Clients",
//       path: "/commerce/client",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Fournisseurs",
//       path: "/commerce/fournisseur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Concurrents",
//       path: "/commerce/concurrent",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Moyens matériels",
//       path: "/commerce/moyen",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Moyens humains",
//       path: "/commerce/humain",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Hypothèses",
//       path: "/commerce/hypothese",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Ventes",
//       path: "/commerce/vente",
//       icon: <IoIcons.IoIosPaper />,
//     },
//   ],
// },
// {
//   title: "Start up",
//   path: "/startup",
//   icon: <AiIcons.AiFillHome />,
//   iconClosed: <RiIcons.RiArrowDownFill />,
//   iconOpened: <RiIcons.RiArrowUpSFill />,
//   subNav: [
//     {
//       title: "Présentation du projet",
//       path: "/startup/presentation",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Une équipe expérimentée",
//       path: "/startup/equipe",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Prévisions financières",
//       path: "/startup/prevision",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Besoin de financement",
//       path: "/startup/finacement",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Besoin ou problème à résoudre",
//       path: "/startup/besoin",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Produits & Services",
//       path: "/startup/produit",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Business model",
//       path: "/startup/model",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Business model",
//       path: "/startup/model",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Mission, Vision et Objectifs",
//       path: "/startup/mission",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Statut juridique",
//       path: "/startup/jurique",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Etat d’avancement du projet",
//       path: "/startup/etat",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Promoteur",
//       path: "/startup/promoteur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "L’équipe dirigeante",
//       path: "/startup/dirigeant",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Personnel",
//       path: "/startup/dirigeant",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Partenaires clés",
//       path: "/startup/partenaire",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Analyse du marché",
//       path: "/startup/analyse",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Segments de Clients",
//       path: "/startup/segment",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Fournisseurs clés",
//       path: "/startup/fournisseur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Concurrents",
//       path: "/startup/concurrent",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Prescripteur",
//       path: "/startup/prescripteur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Segmentation",
//       path: "/startup/prescripteur",
//       icon: <IoIcons.IoIosPaper />,
//     },
//   ],
// },

// // {
// //   title: "Team",
// //   path: "/team",
// //   icon: <IoIcons.IoMdPeople />,
// // },
// {
//   title: "Etudes Financiére",
//   path: "/etude",
//   icon: <FaIcons.FaEnvelopeOpenText />,
//   iconClosed: <RiIcons.RiArrowDownFill />,
//   iconOpened: <RiIcons.RiArrowUpSFill />,
//   subNav: [
//     {
//       title: "Commerce",
//       path: "/messages/message1",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Message 2",
//       path: "/messages/message2",
//       icon: <IoIcons.IoIosPaper />,
//     },
//     {
//       title: "Reports 3",
//       path: "/overview/reports3",
//       icon: <IoIcons.IoIosPaper />,
//     },
//   ],
// },
// {
//   title: "Support",
//   path: "/support",
//   icon: <IoIcons.IoMdHelpCircle />,
// },
