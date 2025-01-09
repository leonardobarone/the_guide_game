import { useState } from 'react';
import styled from 'styled-components';
import bgQuiz from '../images/quiz.png';

const Quiz = () => {

  const [numero, setNumero] = useState('');
  const [modale, setModale] = useState(false);  
  const [isWin, setIsWin] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setModale(true);
    if (numero === '2968') {
      setNumero('');
      setIsWin(true);
    } else {
      setNumero('');
      setIsWin(false);
    }
  }


  return <Wrapper>
    <div style={{marginTop: '54px', backgroundColor: '#B66963', paddingBottom: '150px', position: 'relative'}}>
      <img className='quiz' src={bgQuiz} alt="" />
      <form action="">
        <input color='red' onChange={(e) => setNumero(e.target.value)} value={numero} name="numero" type="text" />
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
      margin-top: 10px;
      width: 100%;
    }
    form {
      padding-top: 32px;
      background-color: #B66963;
      text-align: center;
      width: 100%;
    }
    input {
      padding: 8px;
      color: white;
      background-color: #B66963;
      border: 1px dotted white; 
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
      background-color:  #B66963;
    }
`;