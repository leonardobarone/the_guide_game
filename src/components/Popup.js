import styled from "styled-components";
// import unblocked from '../images/cards/unblocked.webp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sad from '../images/popup/sad.png'

const Popup = ({popup, setPopup, cardWon, placeWon, victory}) => {


    // console.log("popup: " + popup)
    // console.log('carta vinta: ' + cardWon)
    // console.log('luogo vinto:' + placeWon)
    // console.log('vinto qualcosa:' + victory)

    
    const navigate = useNavigate();
    const [level, setLevel] = useState(1);
    const [show, setShow] = useState(false);

    
    const secondoLivello = () => {
        if (cardWon && placeWon && level === 1) {
            setLevel(prev => prev + 1);            
            setShow(true);
        } else {
            setShow(false)
            setLevel(1);
            setPopup(false)
        }
    }

    // Si è attivato il popup e hai perso (entrambi le condizioni sono vere)

        return <FirstLevel className={popup ? 'active' : ''}>
            {!victory ? <div className="wrong">
                <div className="top">
                    <img src={sad} alt="" />
                </div>
                <div className="center">
                        <h3>RITENTA</h3>
                        <p>ROMA NON È STATA COSTRUITA IN UN GIORNO</p>
                    </div>
                <div className="bottom">
                    <button onClick={secondoLivello}>CHIUDI</button>
                </div>
            </div> : null}

            {victory && !cardWon ? <h3>Hai indovinato</h3> : null}
            {victory && cardWon ? <h3>Hai indovinato e vinto una carta!</h3> : null}

            {placeWon ? <SecondLevel className={show ? 'active' : ''}>
                   <h3>Hai vinto anche un luogo</h3>
                    <button onClick={() => navigate('/profilo')}>Chiudi</button>  
            </SecondLevel> : null}
        </FirstLevel>

}

export default Popup

const FirstLevel = styled.div`
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    transform: translate(0%, 100%);
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    &.active {
        transform: translate(0%, 0%);
    }
    .wrong {
        padding: 14px;
        background-color: var(--gray);
        border-radius: 4px;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .top {
            margin-top: 50px;
            img {
                width: 150px;
                border: 5px solid white;
                border-radius: 50%;
            }
        }
        .center {
            text-align: center;
            h3 {
                color: var(--green);
                font-size: 30px;
            }
            p {
                padding: 5px 10px 0px;
                color: var(--purple);
                font-size: 15px;
                line-height: 25px;
                font-weight: bold;
            }
        }
        .bottom {
            width: 75%;
            margin-bottom: 25px;
            /* border: 1px solid black; */
            button {
                font-family: "Mitr", serif;
                border-radius: 4px;
                font-size: 20px;
                width: 100%;
                padding: 5px 0px;
                display: block;
                background-color: var(--green);
                border-style: none;
                color: white;
            }
        }
    }
`

const SecondLevel = styled.div`
    background-color: var(--green);
    position: fixed;
    transform: translate(0%, 100%);
    z-index: 4;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    &.active {
      transform: translate(0%, 0%);
    }
    
`