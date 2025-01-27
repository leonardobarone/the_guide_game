// Loghi
import { GiOpenTreasureChest } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { GiTreasureMap } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";

const links = [
    { 
        'id' : "1",
        'text' : 'Profilo', 
        'path' : '/profilo',
        'icon' : MdAccountCircle
    },
    { 
        'id' : "2",
        'text' : 'Regole', 
        'path' : '/regole',
        'icon' : FaBook
    },
    { 
        'id' : "3",
        'text' : 'Mappa', 
        'path' : '/mappa',
        'icon' : GiTreasureMap
    },
    { 
        'id' : "4",
        'text' : 'Luoghi', 
        'path' : '/luoghi',
        'icon' : FaCompass
    },
    { 
        'id' : "5",
        'text' : 'Carte', 
        'path' : '/carte',
        'icon' : GiOpenTreasureChest
    },
  ];

  export default links;