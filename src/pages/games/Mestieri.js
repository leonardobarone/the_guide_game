import styled from "styled-components";
import { useState } from "react";
import Title from '../../components/Title';
import findById from "../../utils/findById";
import { useGlobalContext } from "../../context";
import Popup from "../../components/Popup";
import Error from "../Error";
import timeById from "../../utils/timeById";
import unblockById from "../../utils/unblockById";
import useHeight from "../../utils/useHeight";

const Porte = () => {
  const jobs = {
    1: 'marinaio',
    2: 'possidente',
    3: 'farmacista',
    4: 'sacerdote',
    5: 'artigiano',
    6: 'contadino',
    7: 'chirurgo',
    8: 'notaio',
  };
  const names = {
    1: 'scotti marcello',
    2: 'florentino andrea',
    3: 'schiano salvatore',
    4: 'assante vincenzo',
    5: 'schiavo onofrio',
    6: 'fevola francesco',
    7: 'calise giacinto',
    8: 'coppola stefano',
  };

  const {cards, games, places, setCards, setPlaces} = useGlobalContext();

  const [popup, setPopup] = useState(false);  
  const [victory, setVictory] = useState(null);  
  const [cardWon, setCardWon] = useState(null);   
  const [placeWon, setPlaceWon] = useState(null);   

  const game = findById(games, '7');
  const place = findById(places, '6');
  const card = findById(cards, '12');
  

  const [otto, setOtto] = useState([1, 2, 3, 4, 5, 6, 7, 8]); // Numeri iniziali nella riga inferiore
  const [top, setTop] = useState(Array(8).fill(null)); // Riga superiore, inizialmente vuota
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
      setOtto((prevOtto) => [...prevOtto, top[index]].sort((a, b) => a - b)); // Riaggiungiamo il numero alla riga inferiore
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
      setOtto((prevOtto) => prevOtto.filter((num) => num !== selectedValue));

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
      
      
      setTop(Array(8).fill(null));
      setSelectedValue(null);
      setOtto([1, 2, 3, 4, 5, 6, 7, 8]);
    
      setVictory(true);
      setPopup(true);
    } else if (isTopFull) {

      setVictory(false);
      setPopup(true); 

      setTop(Array(8).fill(null));
      setSelectedValue(null);
      setOtto([1, 2, 3, 4, 5, 6, 7, 8]);
    }
  }
  return (
    game.unblocked ? <Error /> : (<Wrapper>
      <Title name={game.name} />
      <div className="bigContainer" style={{ height: `${height}px` }}>
        <div className="question">
          Collega ogni persona al suo mestiere
        </div>
        <div className="container">
          <div className="top">
            {top.map((num, index) => (
              <div className="inside" key={index} onClick={() => handleSelectTop(index)}>
                <div><span>{names[index + 1]}</span></div>
                {num ? <div><span>{jobs[num]}</span></div> : <div className="empty"><span>{index + 1}</span></div>} 
              </div>
            ))}
          </div>
          <div className="bottom">
            {otto.map((num, index) => (
              <div key={index}>
                <span  onClick={() => handleSelectBottom(num)}>{jobs[num]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="buttonContainer">
          <div className="p-absolute">
            <button onClick={() => gioca()} className="btn">
              <span></span>
              GIOCA
            </button>
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
    background-color: var(--verdePeppe);
  }
  
  .container {
    .top {
      margin-bottom: 16px;
      .inside {
        div {
          width: 50%;
          display: inline-block;
          padding: 4px;
          text-align: center;
          span {
            width: 100%;
            display: inline-block;
            background-color: white;
            border-radius: 4px;
            font-size: 12px;
            color: var(--purple);
            text-transform: uppercase;
            padding: 4px 8px;
          }
          &.empty span {
            color: white;
          }
        }
      }
      
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      height: 60px;
      div {
        flex-basis: 25%;
        padding: 2px;
        span {
          text-transform: uppercase;
          border-radius: 4px;
          display: block;
          background-color: white;
          font-size: 11px;
          padding: 4px;
        }
        text-align: center;

      }
    }
  }
`;
