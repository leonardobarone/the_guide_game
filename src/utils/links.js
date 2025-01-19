// Loghi
import { CiUser } from "react-icons/ci";
import { PiClipboardTextThin } from "react-icons/pi";
import { CiMap } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";

const links = [
    { 
        'id' : "1",
        'text' : 'Account', 
        'path' : '/account',
        'icon' : CiUser
    },
    { 
        'id' : "2",
        'text' : 'Regole', 
        'path' : '/regole',
        'icon' : PiClipboardTextThin
    },
    { 
        'id' : "3",
        'text' : 'Mappa', 
        'path' : '/mappa',
        'icon' : CiMap
    },
    { 
        'id' : "4",
        'text' : 'Tappe', 
        'path' : '/tappe',
        'icon' : CiMapPin
    },
    { 
        'id' : "5",
        'text' : 'Obiettivi', 
        'path' : '/obiettivi',
        'icon' : CiSquareCheck
    },
  ];

  export default links;