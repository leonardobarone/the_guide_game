import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";
import Title from "../../components/Title";
import Keyboard from "../../components/Keyboard";
import { useState } from "react";
import Popup from "../../components/Popup";
import timeById from "../../utils/timeById";
import unblockById from "../../utils/unblockById";
import Error from "../Error";


const Cripta = () => {

  const {games, places, cards, setPlaces, setCards} = useGlobalContext();
  const game = findById(games, '18')
  const height = useHeight(330);
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);
  const [victory, setVictory] = useState(null); 
  const [cardWon, setCardWon] = useState(null);   
  const [placeWon, setPlaceWon] = useState(null);  
  const place = findById(places, '14');
  const card = findById(cards, '14');

  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 
  const gioca = () => {
    if (dataFromChild === game.answer) {
      setDataFromChild('');
      setVictory(true);
      setPopup(true);
      
      setCards(unblockById(cards, card.id));
      setCards(timeById(cards, card.id));
      
      setPlaces(unblockById(places, place.id));
      setPlaces(timeById(places, place.id));

      setCardWon(findById(cards, card.id))
      setPlaceWon(findById(places, place.id))
    } else if (dataFromChild.length !== 0) {
      setDataFromChild('');
      setVictory(false);
      setPopup(true); 
    }
  }


  return <>
    {game.unblocked ? <Error /> : (<Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{height : `${height}px`}}>
        <div className="question">
          Qualcosa che deve mettere Peppe
        </div>
         <div className="container">
            Qualcosa che deve mettere Peppe (scegliendo colore sfondo) 
            <br/>
            Soluzione: DONA EIS REQUIEM
        </div>
        <div className="buttonContainer">
            <div className="p-absolute">
            <button onClick={gioca} className="btn">
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
    <Keyboard 
        sendDataToParent={handleDataFromChild} 
        popup={popup}
        limit={game.answer.length}
    />
  </Wrapper>)}
    </>
}

export default Cripta;

const Wrapper = styled.section` 
    margin-top: 50px;
    .bigContainer {
        background-color: var(--verdePeppe);
    }
    .container {
        text-align: center;
        img {
            width: 100px;
        }
    }
 
`
