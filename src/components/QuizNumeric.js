// <components>
import Keyboard from './Keyboard';
import Popup from '../components/Popup';
import Title from '../components/Title';
// </components>

// <hooks>
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
// </hooks>

// <style>
import styled from 'styled-components';
// </style>

// <utils>
import unblockById from '../utils/unblockById';
import findById from '../utils/findById';
import timeById from '../utils/timeById';
// </utils>

const QuizNumeric = (props) => {
    const { cards, places, games, game, place, card, question, answer, hex } = props.infoQuizNumeric;

  // INIZIO PROVA HEIGHT
    const [height, setHeight] = useState(window.innerHeight - 350);
    
    useEffect(() => {
      const updateHeight = () => setHeight(window.innerHeight - 350);
  
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    // INIZIO PROVA HEIGHT

  // HOOKS
  const {setCards, setGames, setPlaces} = useGlobalContext();
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);  
  const [cardWon, setCardWon] = useState(null);   
  const [placeWon, setPlaceWon] = useState(null);   
  const [victory, setVictory] = useState(null);   
  
  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 

  



  const prova = () => {
    if (dataFromChild === answer) {
        // VINCERE
        setCards(unblockById(cards, card.id));
        setCards(timeById(cards, card.id));
        setGames(unblockById(games, game.id));
        setPlaces(timeById(places, place.id));
        setPlaces(unblockById(places, place.id));
        // COSE VINTE
        setCardWon(findById(cards, card.id))
        setPlaceWon(findById(places, place.id))
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
    <Wrapper style={{ height: `${height}px`}}>
      <Title name={game.name} />
    <div className="card" style={{backgroundColor : `${hex}`}}>
      <div className="domanda">
        {question}
      </div>

        {props.children}

      <div className="tag">
        <button onClick={prova} className='btn'>Prova</button>
      </div>
    </div>
      
    <Popup 
        popup={popup} 
        setPopup={setPopup} 
        cardWon={cardWon} 
        victory={victory} 
        placeWon={placeWon} 
    />
    <Keyboard 
        sendDataToParent={handleDataFromChild} 
        popup={popup}
    />        
  </Wrapper>)
}

export default QuizNumeric;

const Wrapper = styled.main`
  margin-top: 40px;
  margin-bottom: 210px;
  /* padding: 0px 7px; */
  .card {
    margin: 14px 7px 7px 7px;
    position: relative;
    border-radius: 4px;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 7px;
    .domanda {
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
      background-color: var(--bg-white);
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
        box-shadow: -6px 4px var(--bg-white);
      }
      .btn {
        font-family: "Mitr", serif;
        display: inline-block;
        background-color: var(--orange);
        color: white;
        padding: 10px 75px;
        border-style: none;
        border-radius: 4px;
      }
    }
  }
`;