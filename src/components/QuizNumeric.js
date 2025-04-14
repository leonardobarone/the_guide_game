// <components>
import Keyboard from './Keyboard';
import Popup from '../components/Popup';
import Title from '../components/Title';
// </components>

// <hooks>
import { useState } from 'react';
import { useGlobalContext } from '../context';
import useHeight from '../utils/useHeight';
// </hooks>

// <style>
import styled from 'styled-components';
// </style>

// <utils>
import checkAwards from '../utils/checkAwards';
import unblockById from '../utils/unblockById';
import findById from '../utils/findById';
import timeById from '../utils/timeById';
// </utils>

const QuizNumeric = (props) => {
    const { cards, places, games, game, place, card, hex } = props.infoQuizNumeric;

  // Per calcolare l'altezza
  const height = useHeight(330);

  // HOOKS
  const {setCards, setPlaces} = useGlobalContext();
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);  
  const [victory, setVictory] = useState(null);   
  const [cardWon, setCardWon] = useState(null);   
  const [placeWon, setPlaceWon] = useState(null);   
  
  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 

  



  const prova = () => {
    if (dataFromChild === game.answer) {
      
        if (game.id === '14') {
          if (checkAwards(games, game.card, true)) {
            setCards(unblockById(cards, game.card));
            setCards(timeById(cards, game.card));
            setCardWon(findById(cards, game.card))
          }        
          
          if (checkAwards(games, game.place, false)) {
            setPlaces(unblockById(places, game.place));
            setPlaces(timeById(places, game.place));
            setPlaceWon(findById(places, game.place))
          }
        } else {
          setCards(unblockById(cards, card.id));
          setCards(timeById(cards, card.id));
          setPlaces(unblockById(places, place.id));
          setPlaces(timeById(places, place.id));

          setCardWon(findById(cards, card.id))
          setPlaceWon(findById(places, place.id))
        }
        
        
        // SVUOTA INPUT
        setDataFromChild('');
        setVictory(true);
        setPopup(true);
    } else if (dataFromChild.length !== 0) {
        setDataFromChild('');
        setCardWon(null)
        setPlaceWon(null)
        setVictory(false);
        setPopup(true); 
    }
  } 

  return (
    <Wrapper>
      <Title name={game.name} />
    <div className="card" style={{backgroundColor : `${hex}`, height: `${height}px`}}>
      <div className="domanda">
        {game.question}
      </div>

        {props.children}

      <div className="tag">
        <button onClick={prova} className='btn'>GIOCA</button>
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
    <Keyboard 
        sendDataToParent={handleDataFromChild} 
        popup={popup}
        limit={4}
    />        
  </Wrapper>)
}

export default QuizNumeric;

const Wrapper = styled.main`
  margin-top: 50px;
  margin-bottom: 210px;
  .card {
    margin: 7px;
    position: relative;
    border-radius: 4px;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 7px;
    .domanda {
      font-weight: lighter;
      border-radius: 4px;
      padding: 14px;
      line-height: 15px;
      background-color: white;
      font-size: 12px;
    }
    .tag {
      border-top-right-radius: 4px;
      position: absolute;
      bottom: -1px;
      left: -1px;
      padding: 5px;
      background-color: white;
      &::after {
        width: 20px;
        height: 20px;
        content: '';
        position: absolute;
        background-color: transparent;
        top: 30px;
        right: -20px;
        border-bottom-left-radius: 4px;
        box-shadow: -3px 2px white;
      }
      
      &::before {
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        background-color: transparent;
        top: -20px;
        left: 1px;
        border-bottom-left-radius: 4px;
        box-shadow: -6px 4px white;
      }
      .btn {
        font-family: "Mitr", serif;
        letter-spacing: 1px;
        display: inline-block;
        font-weight: lighter;
        background-color: var(--orange);
        color: white;
        padding: 10px 75px;
        border-style: none;
        border-radius: 4px;
      }
    }
  }
`;