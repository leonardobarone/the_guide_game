import styled from 'styled-components';

const Quiz = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('CIAO PEPPE!');
  }


  return <Wrapper>
        <div style={{padding: '100px 33px'}}>
      <h4>Proviamo un quiz con un input</h4>
      <form action="">
        <div>
          <label htmlFor="nome">nome</label>
          <input id="nome" name="nome" type="text" />
        </div>
        <div>
          <label htmlFor="cognome">cognome</label>
          <input id="cognome" name="cognome" type="text" />
        </div>
        <button type="submit" onClick={handleSubmit}>Prova</button>       
      </form>
    </div>
  </Wrapper>
}

export default Quiz;


// for = htmlFor della label (corrisponde all'id) 

// PRIMO MODO: NEL FORM onSubmit={function}
// E POI LA FUNZIONE: 

// OPPURE SUL BUTTON:
// onClick={function}

// LA FUNZIONE E' SEMPRE QUESTA: 
// function (event)
// event.preventDefault(); importante per aspettare

const Wrapper = styled.section`
    h4 {
      text-align: center;
    }
    form {
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
      padding: 8px 20px;
      background-color: lawngreen;
      color: white;
      border-radius: 5px;
      border-style: none;
      font-weight: bold;
    }
    button:focus, button:hover, button:active {
      background-color: green;
    }
    form div {
      padding: 5px 0px;
      display: flex;
      justify-content: space-between;
    }
`;