import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import { useGlobalContext } from "../../context";
import findById from "../../utils/findById";
import Title from "../../components/Title";
import Keyboard from "../../components/Keyboard";
import { useState } from "react";
import Popup from "../../components/Popup";
import statua from '../../images/games/figli/statua.jpg';

const Figli = () => {
  const {games} = useGlobalContext();
  const game = findById(games, '5')
  const height = useHeight(330);
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);
  const [victory, setVictory] = useState(null);   

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

  return <Wrapper>
    <Title name={game.name} />
    <div className="bigContainer" style={{height : `${height}px`}}>
        <div className="question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
         <div className="container">
            <img src={statua} alt="" />
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
}

export default Figli;

const Wrapper = styled.section` 
    margin-top: 50px;
    .bigContainer {
        background-color: var(--bluPeppe);
    }
    .container {
        text-align: center;
        img {
            width: 100px;
        }
    }
 
`
