// COMPONENTS
import KeyboardNumeric from '../../components/KeyboardNumeric';
import Popup from '../../components/Popup';

// HOOKS
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

// STILE
import styled from 'styled-components';

// LOGHI
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import cannon from '../../images/games/cannon.png';

// FUNZIONE HELPER
import unblockById from '../../utils/unblockById';


const Cannoni = () => {

  // INIZIO PROVA HEIGHT
    const [height, setHeight] = useState(window.innerHeight - 255.4);
    
    useEffect(() => {
      const updateHeight = () => setHeight(window.innerHeight - 255.4);
  
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
    // INIZIO PROVA HEIGHT

  // HOOKS
  const navigate = useNavigate();
  const {setCards, cards, games, setGames, places, setPlaces} = useGlobalContext();
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);   
  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 




  const prova = () => {
    if (dataFromChild === '1785') {
        setCards(unblockById(cards, '4'));
        setGames(unblockById(games, '9'));
        setPlaces(unblockById(places, '7'));
      setDataFromChild('');
    //   setVictory(true);
      setPopup(true);
    } else if (dataFromChild.length !== 0) {
      setDataFromChild('');
    //   setVictory(false);
      setPopup(true); 
    }
  } 

  return <Wrapper style={{ height: `${height}px`}}>
    <div className="card" style={{backgroundColor : '#9CC4F8'}}>
      <div className="boxTop">
        <div className="left">
          <MdOutlineArrowBack onClick={() => navigate('/')} />
        </div>
        <div className="center">
            In che anno è stato costruito il cannone?
        </div>
        <div className="right">
          <IoIosHelpCircle />
        </div>
      </div>


        <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width={90} src={cannon} alt="" />
        </div>

      <div className="tag">
        <button onClick={prova} className='btn'>Prova</button>
      </div>
    </div>
      
      <Popup popup={popup} setPopup={setPopup} />
    
      <KeyboardNumeric 
        sendDataToParent={handleDataFromChild} 
        popup={popup}
      />        
  </Wrapper>
}

export default Cannoni;

const Wrapper = styled.main`
  margin-top: 60px;
  margin-bottom: 195.4px;
  padding: 10px;
  .card {
    position: relative;
    border-radius: 14px;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 8px;
    .boxTop {
      border-radius: 21px;
      padding: 7px 3px;
      background-color: var(--bg-white);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .right, .left {
        flex-basis: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left {
        border-radius: 100%;
        padding: 5px;
        border: 1px solid var(--my-text);
        opacity: 0.5;
      }
      .right {
        font-size: 35px;
        color: var(--my-success);
      }
      .center {
        flex-basis: 70%;
        font-size: 12px;
      }
    }
    .tag {
      border-top-right-radius: 18px;
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
        border-bottom-left-radius: 10px;
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
        border-bottom-left-radius: 0.700rem;
        box-shadow: -6px 4px var(--bg-white);
      }
      .btn {
        display: inline-block;
        background-color: var(--my-success);
        color: white;
        font-weight: bold;
        padding: 10px 75px;
        border-style: none;
        border-radius: 21px;
      }
    }
  }
`;