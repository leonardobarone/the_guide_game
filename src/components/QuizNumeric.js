// <components>
import Keyboard from './Keyboard';
import Popup from '../components/Popup';
import Title from '../components/Title';
// </components>

// <hooks>
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';
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
    const { question, answer, arrayCards, idCard, arrayPlaces, idPlace, arrayGames, idGame, hex, one, two } = props.infoQuizNumeric;

  // INIZIO PROVA HEIGHT
    const [height, setHeight] = useState(window.innerHeight - 330);
    
    useEffect(() => {
      const updateHeight = () => setHeight(window.innerHeight - 330);
  
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
        setCards(unblockById(arrayCards, idCard));
        setCards(timeById(arrayCards, idCard));
        setGames(unblockById(arrayGames, idGame));
        setPlaces(timeById(arrayPlaces, idPlace));
        setPlaces(unblockById(arrayPlaces, idPlace));
        // COSE VINTE
        setCardWon(findById(arrayCards, idCard))
        setPlaceWon(findById(arrayPlaces, idPlace))
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
      <Title one={one} two={two} />
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
        top: 25px;
        right: -20px;
        border-bottom-left-radius: 4px;
        box-shadow: -4px 3px var(--bg-white);
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
        display: inline-block;
        background-color: var(--orange);
        color: white;
        font-weight: bold;
        padding: 10px 75px;
        border-style: none;
        border-radius: 4px;
      }
    }
  }
`;