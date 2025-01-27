// COMPONENTS
import Modal from '../../components/Modal';
import NumericKeyboard from '../../components/NumericKeyboard';
// HOOKS
import { useState } from 'react';
import { useGlobalContext } from '../../context';
// STILE
import styled from 'styled-components';
// LOGHI
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";

const Quiz = ({ istructions, bgColor, correctAnswer, children }) => {

  // HOOKS
  const {setCards, cards} = useGlobalContext();
  const [dataFromChild, setDataFromChild] = useState("");  
  const [modal, setModal] = useState(false);  
  const [victory, setVictory] = useState(false);  
  
  // PROPS
  let rispostaCorretta = correctAnswer;


  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  



  const prova = () => {
    const newArray = [...cards];
    
    if (dataFromChild === correctAnswer) {
      newArray[newArray.length - 1].unblocked = true;
      setCards(newArray);
      setDataFromChild('');
      setVictory(true);
      setModal(true);
    } else if (dataFromChild.length !== 0) {
      setDataFromChild('');
      setVictory(false);
      setModal(true); 
    }
  } 

  return <Wrapper>
    <div className="card" style={{backgroundColor : `${bgColor}`}}>
      <div className="boxTop">
        <div className="left">
          <MdOutlineArrowBack />
        </div>
        <div className="center">
          {istructions}
        </div>
        <div className="right">
          <IoIosHelpCircle />
        </div>
      </div>
      { children }
      <div className="tag">
        <button onClick={prova} className='btn'>Prova</button>
      </div>
        {/* MODAL  */}
        {modal && <Modal modal={modal} setModal={setModal} victory={victory} />}    
    </div>
      
      <NumericKeyboard 
        sendDataToParent={handleDataFromChild} 
        rispostaCorretta={rispostaCorretta}
        modal={modal}
      />        
  </Wrapper>
}

export default Quiz;

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