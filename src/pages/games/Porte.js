import styled from "styled-components";
import { useState, useEffect } from "react";
import Title from '../../components/Title';
import porte1 from '../../images/games/porte/1.png';
import porte2 from '../../images/games/porte/2.png';
import porte3 from '../../images/games/porte/3.png';
import porte4 from '../../images/games/porte/4.png';
import porte5 from '../../images/games/porte/5.png';
import porte6 from '../../images/games/porte/6.png';

const Porte = () => {
  const porteImages = {
    1: porte1,
    2: porte2,
    3: porte3,
    4: porte4,
    5: porte5,
    6: porte6,
  };
  const [six, setSix] = useState([1, 2, 3, 4, 5, 6]); // Numeri iniziali nella riga inferiore
  const [top, setTop] = useState(Array(6).fill(null)); // Riga superiore, inizialmente vuota
  const [selectedValue, setSelectedValue] = useState(null); // Il valore selezionato dalla riga inferiore

  // Gestione altezza
  const [height, setHeight] = useState(window.innerHeight - 120);
  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight - 120);
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Funzione per selezionare un numero dalla riga inferiore
  const handleSelectBottom = (value) => {
    if (!top.includes(value)) { // Non selezioniamo un numero che è già stato posizionato nella riga superiore
      setSelectedValue(value); // Impostiamo il numero selezionato
    }
  };

  // Funzione per posizionare il numero selezionato nella riga superiore
  const handleSelectTop = (index) => {
    if (top[index]) {
      // Se la posizione è già occupata, riportiamo il numero giù nella riga inferiore
      setSix((prevSix) => [...prevSix, top[index]].sort((a, b) => a - b)); // Riaggiungiamo il numero alla riga inferiore
      setTop((prevTop) => {
        const newTop = [...prevTop];
        newTop[index] = null; // Rimuoviamo il numero dalla riga superiore
        return newTop;
      });
    } else if (selectedValue !== null) {
      // Se non c'è un numero già in quella posizione, inseriamo il numero selezionato
      const newTop = [...top];
      newTop[index] = selectedValue;
      setTop(newTop);

      // Rimuoviamo il numero dalla riga inferiore
      setSix((prevSix) => prevSix.filter((num) => num !== selectedValue));

      // Resettiamo il valore selezionato
      setSelectedValue(null);
    }
  };

  const gioca = () => {
    const isTopFull = top.every((elm) => elm !== null);
    const arrayToWin = [5, 1, 3, 2, 6, 4];
    const areArraysEqual = arrayToWin.length === top.length && arrayToWin.every((el, index) => el === top[index]);
    
    if (isTopFull && areArraysEqual) {
      alert('Hai vinto!');
    } else if (isTopFull) {
      alert('Hai perso!');
    }
  }

  return (
    <Wrapper>
      <Title name={'Le porte della città antica'} />
      <div className="bigContainer" style={{ height: `${height}px` }}>
        <div className="question">
          Metti in ordine le porte della città antica 513 264
        </div>
        <div className="container">
          <div className="top">
            {top.map((num, index) => (
              <div key={index} onClick={() => handleSelectTop(index)}>
                
                {num ? <img src={porteImages[num]} alt="" /> : <div className="empty">{index + 1}</div>} {/* Mostra il numero se presente, altrimenti mostra ( ) */}
              </div>
            ))}
          </div>
          <div className="bottom">
            {six.map((num, index) => (
              <div key={index} onClick={() => handleSelectBottom(num)}>
                <img src={porteImages[num]} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="buttonContainer">
          <div className="p-absolute">
            <button onClick={() => gioca()} className="btn">GIOCA</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Porte;

const Wrapper = styled.section`
  margin-top: 50px;
  .bigContainer {
    padding: 7px;
    margin: 7px;
    border-radius: 4px;
    background-color: #D7DEDC;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .question {
      font-weight: lighter;
      border-radius: 4px;
      background-color: white;
      padding: 14px;
      font-size: 12px;
      line-height: 15px;
    }
    .top, .bottom {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        .empty {
          background-color: white;
          height: 90%;
          width: 90%;
          border-radius: 4px;
          color: var(--purple);
        }
        img {
          background-color: white;
          padding: 2px;
          object-fit: cover;
          object-position: center;
          height: 90%;
          border-radius: 4px;
          width: 90%;
        }
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        width: calc(100% / 6);
        text-align: center;
        cursor: pointer;
      }
    }
    .buttonContainer {
      height: 47px;
      position: relative;
      .p-absolute {
        border-radius: 4px;
        position: absolute;
        background-color: white;
        padding: 4px;
        left: -7px;
        bottom: -7px;
        .btn {
          font-family: "Mitr", serif;
          display: inline-block;
          font-weight: lighter;
          background-color: var(--orange);
          color: white;
          padding: 10px 75px;
          border-style: none;
          border-radius: 4px;
          letter-spacing: 1px;
        }
      }
    }
  }
`;
