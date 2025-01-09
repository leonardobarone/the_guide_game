import { useState } from 'react';
import styled from 'styled-components';
import bgQuiz from '../images/quiz.png';

const Quiz = () => {

  const [numero, setNumero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numero === '2968') {
      alert('hai indovinato!');
      setNumero('');
    } else {
      alert('hai sbagliato!');
      setNumero('');
    }
  }


  return <Wrapper>
    <div style={{marginTop: '54px', backgroundColor: '#B66963', paddingBottom: '150px'}}>
      <img className='quiz' src={bgQuiz} alt="" />
      <form action="">
        <input onChange={(e) => setNumero(e.target.value)} value={numero} name="numero" type="text" />
        <button type="submit" onClick={handleSubmit}>Prova</button>       
      </form>
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
    }
    form {
      padding-top: 50px;
      background-color: #B66963;
      text-align: center;
      width: 100%;
    }
`;