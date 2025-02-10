import styled from "styled-components";
// import unblocked from '../images/cards/unblocked.webp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            {!victory ? <h3>Hai sbagliato</h3> : null}
            {victory && !cardWon ? <h3>Hai indovinato</h3> : null}
            {victory && cardWon ? <h3>Hai indovinato e vinto una carta!</h3> : null}
            <button onClick={secondoLivello}>Chiudi</button>

            {placeWon ? <SecondLevel className={show ? 'active' : ''}>
                   <h3>Hai vinto anche un luogo</h3>
                    <button onClick={() => navigate('/profilo')}>Chiudi</button>  
            </SecondLevel> : null}
        </FirstLevel>

}

export default Popup

const FirstLevel = styled.div`
    background-color: var(--purple);
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