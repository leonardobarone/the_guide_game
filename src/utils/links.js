// Loghi
import { TbCardsFilled } from "react-icons/tb";
// import { FaBook } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { IoMap } from "react-icons/io5";

// import { GiTreasureMap } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";


const links = [
    { 
        'id' : "1",
        'text' : 'Home', 
        'path' : '/profilo',
        'icon' : MdAccountCircle
    },
    // { 
    //     'id' : "2",
    //     'text' : 'Regole', 
    //     'path' : '/regole',
    //     'icon' : FaBook
    // },
    { 
        'id' : "3",
        'text' : 'Mappa', 
        'path' : '/mappa',
        'icon' : IoMap
    },
    { 
        'id' : "4",
        'text' : 'Luoghi', 
        'path' : '/luoghi',
        'icon' : MdPlace
    },
    { 
        'id' : "5",
        'text' : 'Carte', 
        'path' : '/carte',
        'icon' : TbCardsFilled
    },
  ];

  export default links;