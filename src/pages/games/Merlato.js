// COMPONENTS
import KeyboardNumeric from '../../components/KeyboardNumeric';
import Popup from '../../components/Popup';

// HOOKS
import { useState } from 'react';
import { useGlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

// STILE
import styled from 'styled-components';

// LOGHI
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";
import lace from '../../images/games/lace.svg';
import arch from '../../images/games/arch.svg';

// FUNZIONE HELPER
import unblockById from '../../utils/unblockById';


const Merlato = () => {

  // HOOKS
  const navigate = useNavigate();
  const {setCards, cards, games, setGames, places, setPlaces} = useGlobalContext();
  const [dataFromChild, setDataFromChild] = useState(""); 
  const [popup, setPopup] = useState(false);   
  function handleDataFromChild(data) {
    setDataFromChild(data);
  } 




  const prova = () => {
    // if ('1785' === '1785') {
    //   idCard = '4';
    //   idGame = '9';
    //   idPlace = '7';
    // } else if ('1785' === '2968') {
    //   idCard = '6';
    //   idGame = '14';
    //   idPlace = '13';
    // }
    if (dataFromChild === '2968') {
        setCards(unblockById(cards, '6'));
        setGames(unblockById(games, '14'));
        setPlaces(unblockById(places, '13'));
      setDataFromChild('');
    //   setVictory(true);
      setPopup(true);
    } else if (dataFromChild.length !== 0) {
      setDataFromChild('');
    //   setVictory(false);
      setPopup(true); 
    }
  } 

  return <Wrapper>
    <div className="card" style={{backgroundColor : '#DD6C70'}}>
      <div className="boxTop">
        <div className="left">
          <MdOutlineArrowBack onClick={() => navigate('/')} />
        </div>
        <div className="center">
          Conta il numero dei merletti, moltiplicalo per il numero degli archi e poi per 8!
        </div>
        <div className="right">
          <IoIosHelpCircle />
        </div>
      </div>

      
        <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img width={90} src={arch} alt="" />
          <span style={{fontWeight: 'bold', fontSize: '45px', marginLeft: '10px', color: 'white'}}>x</span>
          <img width={90} src={lace} alt="" />
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

export default Merlato;

const Wrapper = styled.main`
  margin-top: 60px;
  margin-bottom: 195.4px;
  padding: 10px;
  height: calc(${window.innerHeight}px - 255.4px);
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