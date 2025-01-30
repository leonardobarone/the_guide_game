import styled from "styled-components";
import unblocked from '../images/cards/unblocked.webp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Popup = ({popup, setPopup, cardWon, placeWon, victory}) => {

    const navigate = useNavigate();
    const [level, setLevel] = useState(1);
    
    if (level === 1) {
        return <Wrapper className={popup ? 'active' : ''}>
            <div className="top"></div>
            <div className="center">
                <img src={cardWon ? cardWon.img : unblocked} alt="" />
                <h3>{cardWon ? 'Congratulazioni!' : 'Ritenta!'}</h3>
                <p>{cardWon ? `Hai sbloccato una nuova carta speciale: ${cardWon.name}` : 'La risposta è sbagliata!'}</p>
            </div>
            <div className="bottom">
            {
                victory ? <button onClick={() => setLevel(2)}>CONTINUA</button> : <button onClick={() => setPopup(false)}>CONTINUA</button>
            }
            </div>
        </Wrapper>
    } else if (level === 2) {
        return <Wrapper className={popup ? 'active' : ''}>
            <div className="top"></div>
            <div className="center">
                <img src={placeWon ? placeWon.imgVisible : placeWon.imgHidden} alt="" />
                <h3>{placeWon ? 'Congratulazioni!' : 'Ritenta!'}</h3>
                <p>{placeWon ? `Hai sbloccato un nuovo luogo: ${placeWon.name}` : 'La data inserita non è corretta.'}</p>
            </div>
            <div className="bottom">
                <button onClick={() => navigate('/carte')}>CONTINUA</button>
            </div>
        </Wrapper>
    } 
    // else {
    //     return <div>esci</div>
    // }

}

export default Popup

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    position: fixed;
    transform: translate(0%, 100%);
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    padding: 0px 5px 5px;
    &.active {
      transform: translate(0%, 0%);
    }
    .center {
        text-align: center;
        h3 {
            color: var(--my-success);
            font-size: 20px;
            margin: 10px 0px 5px;
            letter-spacing: 0.6px;
        }
        p {
            padding: 0px 13px;
            font-size: 13px;
        }
        img {
            display: inline-block;
            border-radius: 10px;
            width: 220px;
        }
    }
    .bottom {
        width: 100%;
        button {
            display: block;
            padding: 15px 0px;
            border-radius: 15px;
            border-style: none;
            width: 100%;
            color: white;
            background-color: var(--my-success);
        }
    }

`