import styled from "styled-components";
import { useGlobalContext } from "../context";

// import cards from '../utils/cards';

import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";


const Obiettivi = () => {
    
  const {cards} = useGlobalContext();

    return (<Wrapper>
      <div className="container" style={{marginTop: '50px', marginBottom: '75px'}}>
        {
          cards.map((card) => {
            return (
              <div key={card.id} className="card">
                <div className="body">
                  <img src={card.sbloccato ? card.img : 'https://img.freepik.com/free-vector/padlock-coloured-outline_78370-548.jpg?semt=ais_hybrid'} alt="" />
                  <div className="tag">
                    <div style={{backgroundColor: `${card.sbloccato ? 'var(--success-bootstrap)' : 'var(--danger-bootstrap)'}`}} className="inside">
                      {card.sbloccato ? <FaLockOpen /> : <FaLock />}
                    </div>
                  </div>
                  <div className="title">
                    {card.title.toUpperCase()}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Wrapper>
    )
  }
  
  export default Obiettivi;
  
  const Wrapper = styled.section`
  .container {
    height: calc(100vh - 125px);
    background-color: var(--bg-white);
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .card {
      flex-basis: 50%;
      height: 250px;
      .body {
        padding: 7px;
        width: 100%;
        height: 100%;
        position: relative;
        .title {
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
          z-index: 3;
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
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
  `