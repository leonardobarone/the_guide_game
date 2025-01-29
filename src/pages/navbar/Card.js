import styled from "styled-components";
import { useGlobalContext } from "../../context";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import unblocked from '../../images/cards/unblocked.webp'

const Card = () => {
    
  const {cards} = useGlobalContext();

    return (<Wrapper>
      <div className="container">
        {
          cards.map((card) => {
            return (
              <div key={card.id} className="card">
                <div className="body">
                  <img src={card.unblocked ? card.img : unblocked} alt="" />
                  <div className="tag">
                    <div style={{backgroundColor: `${card.unblocked ? 'var(--success-bootstrap)' : 'var(--danger-bootstrap)'}`}} className="inside">
                      {card.unblocked ? <FaLockOpen /> : <FaLock />}
                    </div>
                  </div>
                  <div className="name">
                    {card.unblocked ? card.name.toUpperCase() : 'BLOCCATO'}
                  </div>
                  {
                    card.unblocked ? '' : <div className="question">?</div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
    )
  }
  
  export default Card;
  
  const Wrapper = styled.section`

margin-top: 60px;
margin-bottom: 80px;
.container {
  background-color: var(--bg-white);
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
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 75px;
        font-weight: bold;
      }
      .name {
          position: absolute;
          bottom: 12px;
          left: 12px;
          width: 88%;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          font-size: 10px;
          font-weight: bold;
          background-color: var(--bg-white);
        }
        .tag {
          .inside {
            border-radius: 17px;
            color: var(--bg-white);
            font-size: 12px;
            padding: 4px 17px;
          }
          
          position: absolute;
          top: 7px;
          right: 7px;
          background-color: var(--bg-white);
          padding: 4px 8px;
          z-index: 1;
          /* border-bottom: 0.5 solid black;
          border-left: 0.5 solid black; */
          border-radius: 0 0 0 10px;
          
          &::after {
            width: 20px;
            height: 20px;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 30px;
            right: 0rem;
            border-top-right-radius: 10px;
            box-shadow: 4px -3px var(--bg-white);
          }
          
          &::before {
            width: 20px;
            height: 20px;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 0px;
            left: -20px;
            border-top-right-radius: 0.700rem;
            box-shadow: 2px -5px var(--bg-white);
          }
        }
        img {
          border-radius: 10px;
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