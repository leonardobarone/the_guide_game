import styled from "styled-components";
// import unblocked from '../images/cards/unblocked.webp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cloudPurpleLeft from '../images/popup/cloudPurpleLeft.png';
import cloudPurpleRight from '../images/popup/cloudPurpleRight.png';
import cloudGray from '../images/popup/cloudGray.png';
import loser from '../images/popup/loser.png';
import sun from '../images/popup/sun.png';

const Popup = ({popup, setPopup, cardWon, placeWon, victory}) => {


    // console.log("popup: " + popup)
    // console.log('carta vinta: ' + cardWon)
    // console.log('luogo vinto:' + placeWon)
    // console.log('vinto qualcosa:' + victory)

    
    const navigate = useNavigate();
    const [level, setLevel] = useState(1);
    const [show, setShow] = useState(false);

    
    const secondoLivello = () => {
        if (cardWon && level === 1) {
            setLevel(prev => prev + 1);            
            setShow(true);
        } else {
            setShow(false)
            setLevel(1);
            setPopup(false)
        }
    }

    // Si è attivato il popup e hai perso (entrambi le condizioni sono vere)

        return <FirstLevel key="first" className={popup ? 'active' : ''}>
            <img className="cloudPurpleLeft" src={cloudPurpleLeft} alt="" />
            <img className="cloudPurpleRight" src={cloudPurpleRight} alt="" />
            <img className="cloudGray" src={cloudGray} alt="" />
            {
                victory && !cardWon ? <img className="sun" src={sun} alt="" /> : '' 
            }
            {
                cardWon && victory ? <img className="cardWon" src={cardWon.img} alt="" /> : ''  
            }
            {
                !victory ? <img className="loser" src={loser} alt="" /> : ''
            }
            <div className="text">
                <div className="title">Hai sbagliato!</div>
                <div className="description">Prova ancora! Roma non è stata costruita in un giorno.</div>
            </div>
            <div className="boxBtn">
                <button onClick={secondoLivello}>Chiudi</button>  
            </div>          
            <SecondLevel className={show ? 'active' : ''}>{level}
                <img className="cloudPurpleLeft" src={cloudPurpleLeft} alt="" />
                <img className="cloudPurpleRight" src={cloudPurpleRight} alt="" />
                <img className="cloudGray" src={cloudGray} alt="" />
                <img className="placeWon" src={placeWon ? placeWon.imgVisible : ''} alt="" />
                <div className="text">
                    <div className="title">Hai sbagliato!</div>
                    <div className="description">Prova ancora! Roma non è stata costruita in un giorno.</div>
                </div>
                <div className="boxBtn">
                    <button onClick={() => navigate('/profilo')}>Chiudi</button>  
                </div>  
            </SecondLevel>
        </FirstLevel>

}

export default Popup

const FirstLevel = styled.div`
    background-color: white;
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
    .cloudPurpleLeft {
        left: 0%;
        top: 0%;
        z-index: 3;
        position: absolute;
        width: 225px;
    }
    .cloudPurpleRight {
        width: 350px;
        right: 0px;
        bottom: 100px;
        position: absolute;
    }
    .cloudGray {
        width: 325px;
        left: 0px;
        bottom: 10%;
        position: absolute;
    }
    .loser {
        position: absolute;
        z-index: 10;
        top: 50px;
        right: -10px;
        width: 250px;
    }
    .text {
        width: 250px;
        position: absolute;
        display: inline-block;
        bottom: 270px;
        left: 15px;
        .title {
            color: var(--purple);
            font-size: 35px;
            font-weight: bold;
        }
        .description {
            font-size: 18px;
            color: var(--green);
        }
    }
    .boxBtn {
        width: 100%;
        bottom: 14px;
        position: absolute;
    }
    button {
        background-color: var(--purple);
        color: white;
        border-style: none;
        width: 95%;
        padding: 10px;
        border-radius: 4px;
        display: block;
        margin: 0 auto;
    }
    .cardWon {
        top: 60px;
        right: 30px;
        position: absolute;
        width: 150px;
        border-radius: 4px;
    }
    .sun {
        width: 300px;
        top: 20px;
        right: -40px;
        position: absolute;
    }
`

const SecondLevel = styled.div`
    background-color: white;
    .cloudPurpleLeft {
        left: 0%;
        top: 0%;
        z-index: 3;
        position: absolute;
        width: 225px;
    }
    .cloudPurpleRight {
        width: 350px;
        right: 0px;
        bottom: 100px;
        position: absolute;
    }
    .cloudGray {
        width: 325px;
        left: 0px;
        bottom: 10%;
        position: absolute;
    }

    .boxBtn {
        width: 100%;
        bottom: 14px;
        position: absolute;
    }
    button {
        background-color: var(--purple);
        color: white;
        border-style: none;
        width: 95%;
        padding: 10px;
        border-radius: 4px;
        display: block;
        margin: 0 auto;
    }
    .placeWon {
        top: 90px;
        right: 20px;
        position: absolute;
        width: 180px;
        border-radius: 4px;
    }
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