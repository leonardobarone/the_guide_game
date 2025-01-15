import { useState } from 'react';
import styled from 'styled-components';

const Quiz = ({ bgImage, correctAnswer }) => {
  const [numero, setNumero] = useState('');
  const [modale, setModale] = useState(false);  
  const [isWin, setIsWin] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setModale(true);
    if (numero === correctAnswer) {
      setNumero('');
      setIsWin(true);
    } else {
      setNumero('');
      setIsWin(false);
    }
  }

  return <Wrapper>
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', overflow: 'scroll', height: 'calc(100vh - 125px)', position: 'relative'}}>
      <img className='quiz' src={bgImage} alt="" />
      <form action="">
        <input onChange={(e) => setNumero(e.target.value)} value={numero} name="numero" type="text" />
        <br />
        <button type="submit" onClick={handleSubmit}>Prova</button>      
      </form>
      <div style={modale ? {display: 'block'} : {display: 'none'}} className="modal">
        <div>{isWin ? 'HAI INDOVINATO' : 'HAI SBAGLIATO'}</div>
        <button onClick={()=> setModale(false)}>TORNA INDIETRO</button>
      </div>
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

const Wrapper = styled.section`   
    .quiz {
      width: 100%;
      height: 350px;
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
    button {
      margin-top: 16px;
      color: white;
      border-style: none;
      border-radius: 4px;
      background-color: #007bff;
      padding: 8px 24px;
    }

    .modal {
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      position: absolute;
      padding: 16px;
      background-color: brown;
    }
`;