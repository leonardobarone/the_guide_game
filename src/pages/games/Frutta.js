import styled from "styled-components";
import Keyboard from "../../components/Keyboard";
import Title from "../../components/Title";
import Popup from "../../components/Popup";
import unblockById from '../../utils/unblockById';
import findById from "../../utils/findById";
import timeById from "../../utils/timeById";
import checkAwards from "../../utils/checkAwards";
import { useState, useEffect } from "react";
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


const Frutta = () => {

    

    const {games, setGames, cards, setCards, places, setPlaces} = useGlobalContext();
    const game = findById(games, '15');
    const [dataFromChild, setDataFromChild] = useState("");
    const [popup, setPopup] = useState(false); 
    const [victory, setVictory] = useState(false);
    const [win, setWin] = useState('');
    const [cardWon, setCardWon] = useState(null);  
    const [placeWon, setPlaceWon] = useState(null);   

      // INIZIO PROVA HEIGHT
        const [height, setHeight] = useState(window.innerHeight - 300);
        
        useEffect(() => {
          const updateHeight = () => setHeight(window.innerHeight - 350);
      
          window.addEventListener("resize", updateHeight);
          return () => window.removeEventListener("resize", updateHeight);
        }, []);
        // INIZIO PROVA HEIGHT




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
                    setGames(unblockById(games, game.id));
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
    
  return <Wrapper>
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
                    {dataFromChild[0] ? dataFromChild[0] : 'P'} 
                </div>
                <div>
                    {dataFromChild[1] ? dataFromChild[1] : 'R'} 
                </div>
                <div>
                    {dataFromChild[2] ? dataFromChild[2] : 'O'} 
                </div>
                <div>
                    {dataFromChild[3] ? dataFromChild[3] : 'V'} 
                </div>
                <div>
                    {dataFromChild[4] ? dataFromChild[4] : 'A'} 
                </div>
            </div>
        </div>

        <div className="base buttonContainer">
            <div className="p-absolute">
                <button onClick={prova}>SPIN</button>
            </div>
        </div>
    
    </div>

    <Popup 
        popup={popup} 
        setPopup={setPopup} 
        cardWon={cardWon} 
        victory={victory} 
        placeWon={placeWon} 
    />
    <Keyboard sendDataToParent={handleDataFromChild} popup={popup} limit={5} boxVisible />
  </Wrapper>
}

export default Frutta

const Wrapper = styled.main`
    margin-top: 40px;
    .contenitore {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 4px;
        margin: 7px;
        padding: 7px;
        background-color: #ffce1f;
        .descrizione {
            line-height: 15px;
            font-size: 12px;
            background-color: white;
            border-radius: 4px;
            padding: 14px;
        }
        .center {
            .letters {
                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 30px;
                    width: 20%;
                    color:  #f1323a;
                }
            }
        }
        .buttonContainer {
            border: 1px solid black;
            height: 30px;
            position: relative;
            .p-absolute {
                position: absolute;
                left: 0px;
                bottom: 0px;
                button {
                    font-size: 16px;
                    font-weight: bold;
                    background-color: #f1323a;
                    padding: 5px 25px;
                    border-style: none;
                    /* border: 2px solid black; */
                    border-radius: 4px;
                    color: white;
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
        margin-right: 3.5px;
    }
    .letter-one, .letter-two, .letter-three, .letter-four, .letter-five {
        display: flex;
        flex-direction: column;
        height: 90px;
        overflow: hidden;
        border: 3px solid #e69834;
        border-radius: 4px;
        img {
            padding: 11.5px 0px;
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
        --ch: 8; // 5
        animation: scroll 3.5s 1s linear forwards;
    }


    @keyframes scroll {
        to {
            transform: translateY(calc(var(--ch)*-100%));
        }
    }
`