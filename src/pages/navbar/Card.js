import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import unblocked from '../../images/cards/unblocked.webp'
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import useCardsLoaded from "../../utils/useCardsLoaded";
import Loading from "../../components/Loading";
import useImagesLoaded from '../../utils/useImagesLoaded';


const Card = () => {
    
  const {cards} = useGlobalContext();

  const [filtro, setFiltro] = useState('tutte');

  const loading = useCardsLoaded(cards);
  const images = [unblocked];
  const loading2 = useImagesLoaded(images);

  const filteredCards = () => {

    cards.sort((a, b) => {
      const timeA = a.time ? new Date(a.time.split('/').reverse().join('-')) : null;
      const timeB = b.time ? new Date(b.time.split('/').reverse().join('-')) : null;
    
      if (timeA && timeB) {
        return timeB.getTime() - timeA.getTime(); // Ordina per tempo decrescente (dal più recente al più vecchio)
      } else if (timeA) {
        return -1; // a viene prima se ha un orario
      } else if (timeB) {
        return 1; // b viene prima se ha un orario
      } else {
        return 0; // Mantieni l'ordine originale se entrambi non hanno orario
      }
    });
    
    switch (filtro) {
      case 'tutte' :
        return cards;
      case 'sbloccate' :
        return cards.filter(card => card.unblocked === true);
      case 'bloccate' : 
        return cards.filter(card => card.unblocked === false);
      default: 
        return cards;
    } 
  }

    if (!loading && !loading2) return <Loading height={110} />

    return (<Wrapper>

        <Title name={'le mie carte'} />

        <div className="buttons">
          <div onClick={() => setFiltro('tutte')} className={filtro === 'tutte' ? 'btn active' : 'btn' }>Tutte</div>
          <div onClick={() => setFiltro('bloccate')} className={filtro === 'bloccate' ? 'btn active' : 'btn' }>Bloccate</div>
          <div onClick={() => setFiltro('sbloccate')} className={filtro === 'sbloccate' ? 'btn active' : 'btn' }>Sbloccate</div>
        </div>

      <div className="container">
        {
          filteredCards().map((card) => {
            return (
                <Link to={card.unblocked ? `/carte/${card.id}` : ''} key={card.id} className="card">
                  <div className="body">
                    <img src={card.unblocked ? card.img : unblocked} alt="" />
                    <div className="tag">
                      <div style={{backgroundColor: `${card.unblocked ? 'var(--green)' : 'var(--red)'}`}} className="inside">
                        {card.unblocked ? <FaLockOpen /> : <FaLock />}
                      </div>
                    </div>
                    <div className="name">
                      {card.name}
                    </div>
                    {
                      card.unblocked ? '' : <div className="question">?</div>
                    }
                  </div>
                </Link>
            )
          })
        }
      </div>
    </Wrapper>
    )
  }
  
  export default Card;
  
  const Wrapper = styled.section`

margin-top: 50px;
margin-bottom: 60px;

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 0px 7px 7px;
    .btn {
      font-size: 14px;
      margin-right: 7px;
      padding: 6px 18px;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid var(--gray);
      color: var(--purple);
      background-color: white;
      &.active {
        border: 1px solid transparent;
        background-color: var(--green);
        color: white;
      }
    }
  }





.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .card {
    flex-basis: 50%;
    .body {
      padding: 7px;
      width: 100%;
      height: 100%;
      position: relative;
      .question {
        color: var(--red);
        /* text-shadow: 0px 4px 6px black; */
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 150px;
      }
      .name {
          position: absolute;
          text-transform: capitalize;
          bottom: 12px;
          left: 12px;
          width: calc(100% - 24px);
          border-radius: 4px;
          padding: 7px 0px;
          color: var(--purple);
          text-align: center;
          font-size: 13px;
          background-color: white;
        }
        .tag {
          .inside {
            border-radius: 4px;
            color: white;
            font-size: 12px;
            padding: 4px 7px;
          }
          
          position: absolute;
          top: 5px;
          right: 5px;
          background-color: white;
          padding: 4px 5px;
          z-index: 1;
          /* border-bottom: 0.5 solid black;
          border-left: 0.5 solid black; */
          border-radius: 0 0 0 4px;
          
          &::after {
            width: 20px;
            height: 20px;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 34px;
            right: 2px;
            border-top-right-radius: 8px;
            box-shadow: 2px -2px white;
          }
          
          &::before {
            width: 20px;
            height: 20px;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 2px;
            left: -20px;
            border-top-right-radius: 4px;
            box-shadow: 2px -5px white;
          }
        }
        img {
          border-radius: 4px;
          display: block;
          width: 100%;
          height: 250px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  `