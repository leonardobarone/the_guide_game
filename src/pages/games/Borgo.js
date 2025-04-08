import styled from "styled-components";
import Title from '../../components/Title';
import { useGlobalContext } from "../../context";
import findById from '../../utils/findById'
import { useState } from "react";
import unblockById from '../../utils/unblockById';
import timeById from '../../utils/timeById';
import checkAwards from "../../utils/checkAwards";
import Popup from "../../components/Popup";
import lupo1 from '../../images/games/borgo/lupo1.png';
import lupo2 from '../../images/games/borgo/lupo2.png';
import lupo3 from '../../images/games/borgo/lupo3.png';
import lupo4 from '../../images/games/borgo/lupo4.png';
import madonna1 from '../../images/games/borgo/madonna1.png';
import madonna2 from '../../images/games/borgo/madonna2.png';
import madonna3 from '../../images/games/borgo/madonna3.png';
import madonna4 from '../../images/games/borgo/madonna4.png';
import croce1 from '../../images/games/borgo/croce1.png';
import croce2 from '../../images/games/borgo/croce2.png';
import croce3 from '../../images/games/borgo/croce3.png';
import croce4 from '../../images/games/borgo/croce4.png';
import catena1 from '../../images/games/borgo/catena1.png';
import catena2 from '../../images/games/borgo/catena2.png';
import catena3 from '../../images/games/borgo/catena3.png';
import catena4 from '../../images/games/borgo/catena4.png';
import Error from "../Error";
import useHeight from "../../utils/useHeight";

const Borgo = () => {
  const { games, cards, setCards, places, setPlaces } = useGlobalContext();
  const game = findById(games, '16');
  const [array, setArray] = useState({});
  const [popup, setPopup] = useState(false);
  const [victory, setVictory] = useState(false);
  const [cardWon, setCardWon] = useState(null);  
  const [placeWon, setPlaceWon] = useState(null);  
  
  // Per calcolare l'altezza
  const height = useHeight(120);

  const boxes1 = [
    {
      "id" : "1",
      "name" : "lupo1",
      "img" :  lupo1
    }, 
    {
      "id" : "2",
      "name" : "lupo2",
      "img" :  lupo2
    }, 
    {
      "id" : "3",
      "name" : "lupo3",
      "img" :  lupo3
    }, 
    {
      "id" : "4",
      "name" : "lupo4",
      "img" :  lupo4
    },
  ];

  const boxes2 = [
    {
      "id" : "1",
      "name" : "madonna1",
      "img" : madonna1
    }, 
    {
      "id" : "2",
      "name" : "madonna2",
      "img" : madonna2
    }, 
    {
      "id" : "3",
      "name" : "madonna3",
      "img" : madonna3
    }, 
    {
      "id" : "4",
      "name" : "madonna4",
      "img" : madonna4
    },
  ];
  
  const boxes3 = [
    {
      "id" : "1",
      "name" : "croce1",
      "img" : croce1
    }, 
    {
      "id" : "2",
      "name" : "croce2",
      "img" : croce2
    }, 
    {
      "id" : "3",
      "name" : "croce3",
      "img" : croce3
    }, 
    {
      "id" : "4",
      "name" : "croce4",
      "img" : croce4
    },
  ];

  const boxes4 = [
    {
      "id" : "1",
      "name" : "catena1",
      "img" : catena1
    }, 
    {
      "id" : "2",
      "name" : "catena2",
      "img" : catena2
    }, 
    {
      "id" : "3",
      "name" : "catena3",
      "img" : catena3
    }, 
    {
      "id" : "4",
      "name" : "catena4",
      "img" : catena4
    },
  ];

  const cliccato = (value, row) => {
    setArray(prevState => {
      const nuovoArray = { ...prevState }; // Crea una copia dell'oggetto precedente
      nuovoArray[row] = value; // Assegna il valore alla proprietà corrispondente alla riga
      return nuovoArray; // Restituisci il nuovo oggetto
    });
  }

  


  const prova = () => {
    if (array["1"] && array["2"] && array["3"] && array["4"]) {
      if (array["1"] === game.answer[0] && array["2"] === game.answer[1] && array["3"] === game.answer[2] && array["4"] === game.answer[3] ) {
        
        
        
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

        
        
        setVictory(true);
        
          

      
        
        
        setPopup(true);
        setArray({})
      } else {
        setPopup(true);
        setArray({})
      }
    }
  }


  return <>
  {
    game.unblocked ? <Error /> : (
      <Wrapper>
        <Title name={game.name} />
        <div className="bigContainer" style={{ height: `${height}px`}}>
          <div className="question">
            Qui ci vuole il testo del quiz.<br />Per vincere inserire 1 - 2 - 2 - 4.
          </div>
          <div className="container">
            {
              boxes1.map((box) => {
                return <div
                  className="hr" 
                  key={box.id}
                  onClick={() => cliccato(box.id, "1")}
                >
                  <img 
                    className={array["1"] === box.id ? 'active1' : ''}
                    src={box.img} 
                    alt="" 
                  />
                  {/* {box.name} */}
                </div>
              })
            }
            {
              boxes2.map((box) => {
                return <div
                  className="hr" 
                  // className={arr.find(elm => elm === box.id) ? 'active' : ''}
                  key={box.id}
                  onClick={() => cliccato(box.id, "2")}
                >
                  <img 
                    className={array["2"] === box.id ? 'active2' : ''}
                    src={box.img} 
                    alt="" 
                  />
                  {/* {box.name} */}
                </div>
              })
            }
            {
              boxes3.map((box) => {
                return <div
                  className="hr" 
                  // className={arr.find(elm => elm ==== box.id) ? 'active' : ''}
                  key={box.id}
                  onClick={() => cliccato(box.id, "3")}
                >
                  <img 
                    className={array["3"] === box.id ? 'active3' : ''}
                    src={box.img} 
                    alt="" 
                  />
                  {/* {box.name} */}
                </div>
              })
            }
            {
              boxes4.map((box) => {
                return <div
                  // className={arr.find(elm => elm ==== box.id) ? 'active' : ''}
                  key={box.id}
                  onClick={() => cliccato(box.id, "4")}
                >
                  <img 
                    className={array["4"] === box.id ? 'active4' : ''}
                    src={box.img} 
                    alt="" 
                  />
                  {/* {box.name} */}
                </div>
              })
            }
          </div>
          <div className="buttonContainer">
            <div className="p-absolute">
              <button onClick={prova} className="btn">GIOCA</button>
            </div>
          </div>
        </div>
        <Popup 
            popup={popup} 
            setPopup={setPopup} 
            victory={victory} 
            cardWon={cardWon} 
            placeWon={placeWon} 
            game={game}
        />
      </Wrapper>
    )
  }
  </>
}

export default Borgo;

const Wrapper = styled.main`
    margin-top: 50px;
    .bigContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 7px;
      margin: 7px;
      border-radius: 4px;
      background-color: #7BC872;
    }
    .question {
      font-weight: lighter;
      border-radius: 4px;
      background-color: white;
      padding: 14px;
      font-size: 12px;
      line-height: 15px;
      padding: 14px;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .hr {
        padding-bottom: 6px;
        margin-bottom: 3px;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25%;
        padding: 3px;
        img {
          border-radius: 4px;
          display: block;
          width: 100%;
          background-color: white;
          &.active1, &.active2, &.active3, &.active4 {
            padding: 0px;
          }
          &.active1 {
            background-color: var(--green);
          }
          &.active2 {
            background-color: var(--orange);
          }
          &.active3 {
            background-color: var(--red);
          }
          &.active4 {
            background-color: var(--purple);
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
`