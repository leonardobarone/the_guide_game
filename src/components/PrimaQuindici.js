import styled from "styled-components";
import Title from "./Title";
import Keyboard from "./Keyboard";
import { useState } from "react";
import useHeight from "../utils/useHeight";
import Popup from "./Popup";
import Error from "../pages/Error";

const PrimaQuindici = (props) => {
  const { game, hex, inner } = props.infoRequest;

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
          <div className="bigContainer" style={{height: `${height}px`, backgroundColor: `${hex}`}}>
            <div className="question">
              {game.question}
            </div>
            <div className="container">
              {inner}
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
              victory={victory} 
              game={game} 
              // cardWon={cardWon} 
              goToPage={game.new_path}
              // placeWon={placeWon}
          />
          <Keyboard 
            sendDataToParent={handleDataFromChild} 
            popup={popup}
            limit={game.answer.length}
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
    background-color: pink;
  }

  .container {
    text-align: center;
    font-size: 35px;
  }

`
