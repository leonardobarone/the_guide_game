import styled from "styled-components";
// import unblocked from '../images/cards/unblocked.webp';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sad from '../images/popup/sad.png'
import glasses from '../images/popup/glasses.png'


const Popup = ({popup, setPopup, cardWon, placeWon, victory}) => {
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
            
            {/* HAI PERSO */}
            {!victory ? <div className="box">
                <div className="top">
                    <img className="sad" src={sad} alt="" />
                </div>
                <div className="center">
                        <h3>RITENTA</h3>
                        <p>ROMA NON È STATA COSTRUITA IN UN GIORNO</p>
                    </div>
                <div className="bottom">
                    <button onClick={secondoLivello}>CHIUDI</button>
                </div>
            </div> : null}
            
            {/* HAI VINTO  */}
            {victory && !cardWon ? <div className="box">
                <div className="top">
                    <img className="sad" src={glasses} alt="" />
                </div>
                <div className="center">
                        <h3>COMPLIMENTI</h3>
                        <p>HAI SUPERATO IL LIVELLO</p>
                    </div>
                <div className="bottom">
                    <button className="bnt" onClick={()=> navigate('/profilo')}>CHIUDI</button>
                </div>
            </div> : null}
            
            {/* HAI VINTO UNA CARTA */}
            {victory && cardWon ? <div className="box">
                <div className="top">
                    <img className="card" src={cardWon ? cardWon.img : null} alt="" />
                </div>
                <div className="center">
                        <h3>COMPLIMENTI</h3>
                        <p>HAI SBLOCCATO <br/>{cardWon ? cardWon.name.toUpperCase() : null}</p>
                    </div>
                <div className="bottom">
                    <button onClick={secondoLivello}>CHIUDI</button>
                </div>
            </div> : null}

            {placeWon ? <SecondLevel className={show ? 'active' : ''}>
                <div className="box">
                    <div className="top">
                        <img className="place outlined" src={placeWon ? placeWon.imgBorder : null} alt="" />
                    </div>
                    <div className="center">
                            <h3>COMPLIMENTI</h3>
                            <p>HAI SBLOCCATO <br/>{placeWon ? placeWon.name.toUpperCase() : null}</p>
                        </div>
                    <div className="bottom">
                        <button onClick={()=> navigate('/profilo')}>CHIUDI</button>
                    </div>
                </div>
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
    .box {
        background-color: var(--gray);
        padding: 14px;
        border-radius: 4px;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .top {
            /* img.place.outlined {
                -webkit-filter: 
                    drop-shadow(4px 4px 0 white)
                    drop-shadow(-4px 4px 0 white)
                    drop-shadow(4px -4px 0 white)
                    drop-shadow(-4px -4px 0 white);

                filter: 
                    drop-shadow(4px 4px 0 white)
                    drop-shadow(-4px 4px 0 white)
                    drop-shadow(4px -4px 0 white)
                    drop-shadow(-4px -4px 0 white); 
                } */
            img.sad {
                width: 150px;
                border: 4px solid white;
                border-radius: 50%;
            }
            img.card {
                object-fit: cover;
                object-position: center;
                padding: 0px;
                display: block;
                border-radius: 4px;
                height: 250px;
                width: 175px;
                border: 4px solid white;
            }
            img.place {
                display: block;
                height: 200px;
                width: 200px;
                border-radius: 4px;
                object-fit: cover;
                object-position: center;
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
                
        }}
`

const SecondLevel = styled.div`
    background-color: var(--green);
    display: flex;
    justify-content: center;
    align-items: center;
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