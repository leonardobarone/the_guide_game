import styled from "styled-components";
import { useState } from "react";
import Title from '../../components/Title';
import porte1 from '../../images/games/porte/1.png';
import porte2 from '../../images/games/porte/2.png';
import porte3 from '../../images/games/porte/3.png';
import porte4 from '../../images/games/porte/4.png';
import porte5 from '../../images/games/porte/5.png';
import porte6 from '../../images/games/porte/6.png';
import findById from "../../utils/findById";
import { useGlobalContext } from "../../context";
import Popup from "../../components/Popup";
import Error from "../Error";
import timeById from "../../utils/timeById";
import unblockById from "../../utils/unblockById";
import useHeight from "../../utils/useHeight";

const Porte = () => {
  const porteImages = {
    1: porte5,
    2: porte1,
    3: porte3,
    4: porte2,
    5: porte6,
    6: porte4,
  };

  const {cards, games, places, setCards, setPlaces} = useGlobalContext();

  const [popup, setPopup] = useState(false);  
  const [victory, setVictory] = useState(null);  
  const [cardWon, setCardWon] = useState(null);   
  const [placeWon, setPlaceWon] = useState(null);   

  const game = findById(games, '10');
  const place = findById(places, '8');
  const card = findById(cards, '5');
  

  const [six, setSix] = useState([1, 2, 3, 4, 5, 6]); // Numeri iniziali nella riga inferiore
  const [top, setTop] = useState(Array(6).fill(null)); // Riga superiore, inizialmente vuota
  const [selectedValue, setSelectedValue] = useState(null); // Il valore selezionato dalla riga inferiore

  // Per calcolare l'altezza
  const height = useHeight(110);

  // Funzione per selezionare un numero dalla riga inferiore
  const handleSelectBottom = (value) => {
    if (!top.includes(value)) { // Non selezioniamo un numero che è già stato posizionato nella riga superiore
      setSelectedValue(value); // Impostiamo il numero selezionato
    }
  };

  // Funzione per posizionare il numero selezionato nella riga superiore
  const handleSelectTop = (index) => {
    if (top[index]) {
      // Se la posizione è già occupata, riportiamo il numero giù nella riga inferiore
      setSix((prevSix) => [...prevSix, top[index]].sort((a, b) => a - b)); // Riaggiungiamo il numero alla riga inferiore
      setTop((prevTop) => {
        const newTop = [...prevTop];
        newTop[index] = null; // Rimuoviamo il numero dalla riga superiore
        return newTop;
      });
    } else if (selectedValue !== null) {
      // Se non c'è un numero già in quella posizione, inseriamo il numero selezionato
      const newTop = [...top];
      newTop[index] = selectedValue;
      setTop(newTop);

      // Rimuoviamo il numero dalla riga inferiore
      setSix((prevSix) => prevSix.filter((num) => num !== selectedValue));

      // Resettiamo il valore selezionato
      setSelectedValue(null);
    }
  };

  const gioca = () => {
    const isTopFull = top.every((elm) => elm !== null);
    const areArraysEqual = game.answer.length === top.length && game.answer.every((el, index) => el === top[index]);
    
    if (isTopFull && areArraysEqual) {

      setCards(unblockById(cards, card.id));
      setCards(timeById(cards, card.id));
      setPlaces(unblockById(places, place.id));
      setPlaces(timeById(places, place.id));

      setCardWon(findById(cards, card.id))
      setPlaceWon(findById(places, place.id))
      
      
      setTop(Array(6).fill(null));
      setSelectedValue(null);
      setSix([1, 2, 3, 4, 5, 6]);
    
      setVictory(true);
      setPopup(true);
    } else if (isTopFull) {
      setVictory(false);
      setPopup(true); 

      setTop(Array(6).fill(null));
      setSelectedValue(null);
      setSix([1, 2, 3, 4, 5, 6]);
    }
  }

  return (
    game.unblocked ? <Error /> : (<Wrapper>
      <Title name={game.name} />
      <div className="bigContainer" style={{ height: `${height}px` }}>
        <div className="question">
          Metti in ordine le porte della città antica <br />2-4-3-6-1-5
        </div>
        <div className="container">
          <div className="top">
            {top.map((num, index) => (
              <div key={index} onClick={() => handleSelectTop(index)}>
                
                {num ? <img src={porteImages[num]} alt="" /> : <div className="empty">{index + 1}</div>} {/* Mostra il numero se presente, altrimenti mostra ( ) */}
              </div>
            ))}
          </div>
          <div className="bottom">
            {six.map((num, index) => (
              <div key={index} onClick={() => handleSelectBottom(num)}>
                <img src={porteImages[num]} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="buttonContainer">
          <div className="p-absolute">
            <button onClick={() => gioca()} className="btn">GIOCA</button>
          </div>
        </div>
      </div>
      <Popup 
          popup={popup} 
          setPopup={setPopup} 
          cardWon={cardWon} 
          victory={victory} 
          placeWon={placeWon}
          game={game} 
      />
    </Wrapper>)
  );
};

export default Porte;

const Wrapper = styled.section`
  margin-top: 50px;

  .bigContainer {
    background-color: #D7DEDC;
  }
  
  .container {
    .top, .bottom {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          .empty {
            background-color: white;
            height: 93%;
            width: 93%;
            border-radius: 4px;
            color: var(--purple);
          }
          img {
            background-color: white;
            object-fit: cover;
            object-position: center;
            height: 93%;
            border-radius: 4px;
            width: 93%;
          }
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          width: calc(100% / 6);
          text-align: center;
          cursor: pointer;
        }
     }
  }
`;
