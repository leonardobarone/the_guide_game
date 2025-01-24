import NumericKeyboard from '../../components/NumericKeyboard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineArrowBack } from "react-icons/md";

const Quiz = ({ istructions, bgColor, correctAnswer, children }) => {

  const {setCards, cards} = useGlobalContext();


  let rispostaCorretta = correctAnswer;
  // debug
  const [dataFromChild, setDataFromChild] = useState("");
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  
  // const [numero, setNumero] = useState('');
  const [modale, setModale] = useState(false);  
  const [isWin, setIsWin] = useState(false);  
  

  
  useEffect(()=> {
    const newArray = [...cards];
    if (dataFromChild === correctAnswer) {
      newArray[newArray.length - 1].unblocked = true;
      setCards(newArray);
      setModale(true);
      setIsWin(true);
      setDataFromChild('')
    } else if (dataFromChild.length === 4) {
      setIsWin(false);
      setModale(true)
      setDataFromChild('')
    }
  }, [dataFromChild, correctAnswer, cards, setCards])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setModale(true);
  //   if (numero === correctAnswer) {
  //     setNumero('');
  //     setIsWin(true);
  //   } else {
  //     setNumero('');
  //     setIsWin(false);
  //   }
  // }

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
        <button className='btn'>Prova</button>
      </div>
    </div>
    {/* <div style={{marginTop: '50px', display: 'flex', flexDirection: 'column', width: '100%', overflow: 'scroll', height: 'calc(100vh - 50px)', position: 'relative'}}>
      <img className='quiz' src={bgColor} alt="" />
      <h5>CURRENT NUMBER = {dataFromChild}</h5>
      <button className="btn">Prova</button> */}
      {/* <form action="">
        <input onChange={(e) => setNumero(e.target.value)} value={numero} name="numero" type="text" />
        <br />
        <button type="submit" onClick={handleSubmit}>Prova</button>      
      </form> */}
      {/* <div style={modale ? {display: 'block'} : {display: 'none'}} className="modal">
        <div>{isWin ? 'HAI INDOVINATO' : 'HAI SBAGLIATO'}</div>
        {
          isWin ?  : <button onClick={()=> setModale(false)}>TORNA INDIETRO</button>
        }
      </div> */}
      <NumericKeyboard sendDataToParent={handleDataFromChild} rispostaCorretta={rispostaCorretta} />        
  </Wrapper>
}

export default Quiz;


// for = htmlFor della label (corrisponde all'id) 

// PRIMO MODO: NEL FORM onSubmit={function}
// E POI LA FUNZIONE: 

// SECONDO MODO OPPURE SUL BUTTON:
// onClick={function}

// LA FUNZIONE E' SEMPRE QUESTA: 
// function (event)
// event.preventDefault(); importante per aspettare

// IMPORTANTE NELL'INPUT!!!!!!!!!!!!
// onChange={(e) => setNome(e.target.value)} 

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