import { useState, useEffect } from "react";
import Popup from "./Popup";
import { useGlobalContext } from "../context";
import findById from "../utils/findById";
import unblockById from "../utils/unblockById";
import timeById from "../utils/timeById";
import halfById from "../utils/halfByID";

const Winner = ({ numbers, infoQuindici }) => {

    const {places, cards, games, setGames, setCards, setPlaces} = useGlobalContext();
    const {place, card, game} = infoQuindici;

    const [popup, setPopup] = useState(false);  
    const [victory, setVictory] = useState(null);  

    const [cardWon, setCardWon] = useState(null);   
    const [placeWon, setPlaceWon] = useState(null);   
  
    useEffect(() => {
      const isSorted = numbers.every(n => n.value === n.index + 1);
  
      if (isSorted) {
        const timer = setTimeout(() => {
          
          if (!game.half) {
            setGames(halfById(games, game.id))
          }

          setCards(unblockById(cards, card.id));
          setCards(timeById(cards, card.id));
          setPlaces(unblockById(places, place.id));
          setPlaces(timeById(places, place.id));

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
    }, [numbers, card, place, cards, places, setPlaces, setCards, games, setGames, game]);
  
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




