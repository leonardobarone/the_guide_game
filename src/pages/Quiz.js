import NumericKeyboard from '../components/NumericKeyboard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Quiz = ({ bgImage, correctAnswer }) => {

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
      newArray[newArray.length - 1].sbloccato = true;
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
    <div style={{marginTop: '50px', display: 'flex', flexDirection: 'column', width: '100%', overflow: 'scroll', height: 'calc(100vh - 50px)', position: 'relative'}}>
      <img className='quiz' src={bgImage} alt="" />
      <h5>CURRENT NUMBER = {dataFromChild}</h5>
      <button className="btn">Prova</button>
      {/* <form action="">
        <input onChange={(e) => setNumero(e.target.value)} value={numero} name="numero" type="text" />
        <br />
        <button type="submit" onClick={handleSubmit}>Prova</button>      
      </form> */}
      <div style={modale ? {display: 'block'} : {display: 'none'}} className="modal">
        <div>{isWin ? 'HAI INDOVINATO' : 'HAI SBAGLIATO'}</div>
        <button onClick={()=> setModale(false)}>TORNA INDIETRO</button>
      </div>
      <NumericKeyboard sendDataToParent={handleDataFromChild} rispostaCorretta={rispostaCorretta} />        
    </div>
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
  .btn {
    color: white;
    font-weight: bold;
    padding: 10px;
    border-style: none;
    border-radius: 20px;
    margin: 0px 8px;
    background-color: var(--accent);
  }
    .quiz {
      width: 100%;
      height: 310px;
      object-fit: cover;
      object-position: center;
    }
    form {
      padding-top: 32px;
      text-align: center;
      width: 100%;
      input {
        padding: 8px;
        border: 1px dotted black; 
      }
    }
    
    form button, .modal button {
      margin-top: 16px;
      color: white;
      border-style: none;
      border-radius: 4px;
      background-color: #007bff;
      padding: 8px 24px;
    }

    .modal {
      top: 50px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      position: absolute;
      padding: 16px;
      background-color: white;
    }
`;