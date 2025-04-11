import styled from "styled-components";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import { useGlobalContext } from "../context";
import findById from "../utils/findById";

const Winner = ({ numbers, infoQuindici }) => {
    const [showWin, setShowWin] = useState(false);

    const {places, cards} = useGlobalContext();
    const {place, card, game} = infoQuindici;

    const [popup, setPopup] = useState(false);  
    const [victory, setVictory] = useState(null);  

    const [cardWon, setCardWon] = useState(null);   
    const [placeWon, setPlaceWon] = useState(null);   
  
    useEffect(() => {
      const isSorted = numbers.every(n => n.value === n.index + 1);
  
      if (isSorted) {
        const timer = setTimeout(() => {
          setCardWon(findById(cards, card.id))
          setPlaceWon(findById(places, place.id))
          setVictory(true);
          setPopup(true);
        }, 2000);
        return () => clearTimeout(timer); // pulizia se i numeri cambiano prima dei 3 sec
      } else {
        setVictory(false);
        setPopup(false);
      }
    }, [numbers]);
  
    if (!setPopup) return null;
  
    return <Popup 
      popup={popup} 
      setPopup={setPopup} 
      victory={victory} 
      cardWon={cardWon} 
      placeWon={placeWon}
      game={game} 
    />
  };

export default Winner;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--tile);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: white;
    z-index: 50;
;
`


