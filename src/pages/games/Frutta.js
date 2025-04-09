import styled from "styled-components";
import Keyboard from "../../components/Keyboard";
import Title from "../../components/Title";
import Popup from "../../components/Popup";
import unblockById from '../../utils/unblockById';
import findById from "../../utils/findById";
import timeById from "../../utils/timeById";
import checkAwards from "../../utils/checkAwards";
import { useState } from "react";
import { useGlobalContext } from "../../context";
import arancia from '../../images/games/frutta/arancia.png';
import banana from '../../images/games/frutta/banana.png';
import bar from '../../images/games/frutta/bar.png';
import big from '../../images/games/frutta/big.png';
import ciliegia from '../../images/games/frutta/ciliegia.png';
import cocomero from '../../images/games/frutta/cocomero.png';
import limone from '../../images/games/frutta/limone.png';
import nespola from '../../images/games/frutta/nespola.png';
import sette from '../../images/games/frutta/sette.png';
import Error from "../Error";
import useHeight from "../../utils/useHeight";

const Frutta = () => {

    

    const {games, cards, setCards, places, setPlaces} = useGlobalContext();
    const game = findById(games, '15');
    const [dataFromChild, setDataFromChild] = useState("");
    const [popup, setPopup] = useState(false); 
    const [victory, setVictory] = useState(false);
    const [win, setWin] = useState('');
    const [cardWon, setCardWon] = useState(null);  
    const [placeWon, setPlaceWon] = useState(null);   

    // Per calcolare l'altezza
    const height = useHeight(300);




    function handleDataFromChild(data) {
        setDataFromChild(data);
    } 

    const arr = [
        {
            'posizione' : 'prima',
            'src' : nespola
        },
        {
            'posizione' : 'seconda',
            'src' : limone
        },
        {
            'posizione' : 'terza',
            'src' : cocomero
        },
        {
            'posizione' : 'quarta',
            'src' : banana
        },
        {
            'posizione' : 'quinta',
            'src' : cocomero
        },
        {
            'posizione' : 'sesta',
            'src' : arancia
        }, 
        {
            'posizione' : 'perso',
            'src' : limone
        }, 
        {
            'posizione' : 'perso',
            'src' : nespola
        }, 
        {
            'posizione' : 'perso',
            'src' : arancia
        }, 
        {
            'posizione' : 'perso',
            'src' : sette
        }, 
        {
            'posizione' : 'perso',
            'src' : banana
        }, 
        {
            'posizione' : 'perso',
            'src' : big
        }, 
        {
            'posizione' : 'vinto',
            'src' : sette
        }, 
        {
            'posizione' : 'vinto',
            'src' : sette
        }, 
        {
            'posizione' : 'vinto',
            'src' : sette
        },  
        {
            'posizione' : 'vinto',
            'src' : sette
        }, 
        {
            'posizione' : 'vinto',
            'src' : sette
        }, 
        {
            'posizione' : 'vinto',
            'src' : sette
        }, 
        {
            'posizione' : '',
            'src' : bar
        }, 
        {
            'posizione' : '',
            'src' : banana
        }, 
        {
            'posizione' : '',
            'src' : sette
        }, 
        {
            'posizione' : '',
            'src' : big
        }, 
        {
            'posizione' : '',
            'src' : ciliegia
        }, 
        {
            'posizione' : '',
            'src' : cocomero
        }, 
        {
            'posizione' : '',
            'src' : limone
        }, 
        {
            'posizione' : '',
            'src' : nespola
        }, 
        {
            'posizione' : '',
            'src' : sette
        },
    ]


    const prova = () => {
        if (dataFromChild.length === 5) {
            // HAI VINTO
            if (dataFromChild === game.answer) {
                
                if (checkAwards(games, game.card, true)) {
                    setCards(unblockById(cards, game.card));
                    setCards(timeById(cards, game.card));
                    setCardWon(findById(cards, game.card))
                  }        
                  
                  if (checkAwards(games, game.place, false)) {
                    setPlaces(unblockById(places, game.place));
                    setPlaces(timeById(places, game.place));
                    setPlaceWon(findById(places, game.place))
                  }    
                
                setWin('yes');
                setTimeout(function() {
                    setPopup(true);
                    setVictory(true);
                    setTimeout(function() {
                        setDataFromChild('')
                        setWin('')
                      }, 500); 
                  }, 4700);
            // HAI PERSO
            } else {
                setWin('no');
                setTimeout(function() {
                    setPopup(true);
                    setTimeout(function() {
                        setWin('')
                        setDataFromChild('')
                      }, 500); 
                  }, 3700);
            }
        } 
    }
    
  return <>
  {
    game.unblocked ? <Error /> : (
        <Wrapper>
            <Title name={game.name} />
            
            <div className="contenitore" style={{ height: `${height}px`}}>
                
                <div className="descrizione">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ut veritatis tenetur,  46207
                </div>

                <div className="center">
                    <div className="base">
                        {/* 1 POSIZIONE */}
                        <div className={`letter-one ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
                            {
                                arr.map((img, i) => {
                                    return <img key={i} src={img.src} alt={img.name} /> 
                                })
                            }
                        </div>
                        {/* 2 POSIZIONE */}
                        <div className={`letter-two ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>                    
                            {
                                arr.map((img, i) => {
                                    if (img.posizione === 'prima') {
                                        return null;
                                    } 
                                    return <img key={i} src={img.src} alt={img.name} /> 
                                })
                            }
                        </div>
                        {/* 3 POSIZIONE */}
                        <div className={`letter-three ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
                            {
                                arr.map((img, i) => {
                                    if (img.posizione === 'prima' || img.posizione === 'seconda') {
                                        return null;
                                    } 
                                    return <img key={i} src={img.src} alt={img.name} /> 
                                })
                            }
                        </div>
                        {/* 4 POSIZIONE */}
                        <div className={`letter-four ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
                            {
                                arr.map((img, i) => {
                                    if (img.posizione === 'prima' || img.posizione === 'seconda' ||
                                        img.posizione === 'terza' ) {
                                        return null;
                                    } 
                                    return <img key={i} src={img.src} alt={img.name} /> 
                                })
                            }
                        </div>
                        <div className={`letter-five ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
                            {/* 6 POSIZIONE */}
                            {
                                arr.map((img, i) => {
                                    if (img.posizione === 'prima' || img.posizione === 'seconda' ||
                                        img.posizione === 'terza' || img.posizione === 'quarta' || 
                                        img.posizione === 'quinta') {
                                        return null;
                                    } 
                                    return <img key={i} src={img.src} alt={img.name} /> 
                                })
                            }
                        </div>
                    </div>
                
                    <div className="base letters">
                        <div>
                            {dataFromChild[0]} 
                        </div>
                        <div>
                            {dataFromChild[1]} 
                        </div>
                        <div>
                            {dataFromChild[2]} 
                        </div>
                        <div>
                            {dataFromChild[3]} 
                        </div>
                        <div>
                            {dataFromChild[4]} 
                        </div>
                    </div>
                </div>

                <div className="base buttonContainer">
                    <div className="p-absolute">
                        <button onClick={prova} className="btn">GIOCA</button>
                    </div>
                </div>
            
            </div>

            <Popup 
                popup={popup} 
                setPopup={setPopup} 
                cardWon={cardWon} 
                victory={victory} 
                placeWon={placeWon}
                game={game} 
            />
            <Keyboard sendDataToParent={handleDataFromChild} popup={popup} limit={5} boxVisible />
        </Wrapper>
      )
    }
  </>
}

export default Frutta

const Wrapper = styled.main`
    margin-top: 50px;
    .contenitore {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 4px;
        margin: 7px;
        padding: 7px;
        background-color: #ffce1f;
        .descrizione {
            font-weight: lighter;
            line-height: 15px;
            font-size: 12px;
            background-color: white;
            border-radius: 4px;
            padding: 14px;
        }
        .center {
            .letters {
                margin-top: 7px;
                div {
                    background-color: white;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    font-size: 40px;
                    width: calc(100% / 5);
                    color: var(--purple);
                    height: 66px;
                    &:not(:last-child) {
                        margin-right: 7px;
                    }
                }
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
                    &::after {
                        width: 20px;
                        height: 20px;
                        content: '';
                        position: absolute;
                        background-color: transparent;
                        top: 29px;
                        right: -20px;
                        border-bottom-left-radius: 4px;
                        box-shadow: -3px 2px white;
                    }
                    
                    &::before {
                        content: '';
                        width: 20px;
                        height: 20px;
                        position: absolute;
                        background-color: transparent;
                        top: -20px;
                        left: 0px;
                        border-bottom-left-radius: 4px;
                        box-shadow: -6px 4px white;
                    }
                }
            }
        }
    }
    .base {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .letter-one, .letter-two, .letter-three, .letter-four {
        margin-right: 7px;
    }
    .letter-one, .letter-two, .letter-three, .letter-four, .letter-five {
        display: flex;
        flex-direction: column;
        height: 70px;
        overflow: hidden;
        border-radius: 4px;
        img {
            padding: 4px 0px;
            background-color: white;
        }
    }

    .letter-one.lose img {
        --ch: 6;
        animation: scroll 1.5s 1s linear forwards;
    }
    .letter-two.lose img {
        --ch: 6;
        animation: scroll 2s 1s linear forwards;
    }
    .letter-three.lose img {
        --ch: 6;
        animation: scroll 1.75s 1s linear forwards;
    }
    .letter-four.lose img {
        --ch: 6;
        animation: scroll 1.25s 1s linear forwards;
    }
    .letter-five.lose img {
        --ch: 6;
        animation: scroll 2.5s 1s linear forwards;
    }

    
    
    
    .letter-one.win img {
        --ch:12; // 5
        animation: scroll 2.5s 1s linear forwards;
    }
    .letter-two.win img {
        --ch: 11; // 5
        animation: scroll 3s 1s linear forwards;
    }
    .letter-three.win img {
        --ch: 10; // 5
        animation: scroll 2.75s 1s linear forwards;
    }
    .letter-four.win img {
        --ch:9; // 5
        animation: scroll 2.25s 1s linear forwards;
    }
    .letter-five.win img {
        --ch: 7; // 5
        animation: scroll 3.5s 1s linear forwards;
    }


    @keyframes scroll {
        to {
            transform: translateY(calc(var(--ch)*-100%));
        }
    }
`