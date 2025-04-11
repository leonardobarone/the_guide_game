import styled from "styled-components";
import Title from "../../components/Title";
import findById from "../../utils/findById";
import { useGlobalContext } from "../../context";
import Keyboard from "../../components/Keyboard";
import { useState } from "react";
import useHeight from "../../utils/useHeight";
import Popup from "../../components/Popup";
import Error from "../Error";

const PrimaQuindici = () => {
  const {games} = useGlobalContext();
  const game = findById(games, '6');
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);  
  const [victory, setVictory] = useState(null);   
  
  // Per calcolare l'altezza
  const height = useHeight(330);

  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 

  const gioca = () => {
    if (dataFromChild === game.answer) {
      setDataFromChild('');
      setVictory(true);
      setPopup(true);
    } else if (dataFromChild.length !== 0) {
      setDataFromChild('');
      setVictory(false);
      setPopup(true); 
    }
  }
  
  return <>
    {
      game.half ? <Error /> : (
        <Wrapper>
          <Title name={game.name} />
          <div className="bigContainer" style={{height: `${height}px`}}>
            <div className="question">
              Inserisci la data presente sull'edicola votiva (1894)
            </div>
            <div className="container">
              Qui ci dev'essere immagine dell'edicola votiva!
            </div>
            <div className="buttonContainer">
              <div className="p-absolute">
                <button onClick={gioca} className="btn">GIOCA</button>
              </div>
            </div>
          </div>
          <Popup 
              popup={popup} 
              setPopup={setPopup} 
              // cardWon={cardWon} 
              victory={victory} 
              goToPage={'/quindici'}
              // placeWon={placeWon}
              game={game} 
          />
          <Keyboard 
            sendDataToParent={handleDataFromChild} 
            popup={popup}
            limit={4}
          />
        </Wrapper>
      )
    }
  </>  
}

export default PrimaQuindici;

const Wrapper = styled.section`
  margin-top: 50px;

  .bigContainer {
    background-color: red;
  }

`
