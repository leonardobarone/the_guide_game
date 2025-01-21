import styled from "styled-components";

import scialoja from '../images/scialoja.jpg'
import venerdiSanto from '../images/venerdiSanto.jpg'

import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

const Obiettivi = () => {
    return (<Wrapper>
      <div className="container" style={{marginTop: '50px', marginBottom: '75px'}}>
        <div className="card">
          <div className="body">
            <img src={venerdiSanto} alt="" />
            <div className="tag">
              <div style={{backgroundColor: 'lightgreen'}} className="ciao">
                <FaLockOpen />
              </div>
            </div>
            <div className="title">
              VENERDI SANTO
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src={scialoja} alt="" />
            <div className="tag">
              <div style={{backgroundColor: 'lightgreen'}} className="ciao">
                <FaLockOpen />
              </div>
            </div>
            <div className="title">
              ANTONIO SCIALOJA
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src="https://img.freepik.com/free-vector/padlock-coloured-outline_78370-548.jpg?semt=ais_hybrid" alt="" />
            <div className="tag">
              <div style={{backgroundColor: 'red'}} className="ciao">
                <FaLock />
              </div>
            </div>
            <div className="title">
              CARTA ARTURO
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    )
  }
  
  export default Obiettivi;
  
  const Wrapper = styled.section`
  .container {
    height: calc(100vh - 125px);
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    .card {
      border: 1px solid black;
      flex-basis: 50%;
      height: 50%;
      .body {
        width: 100%;
        height: 100%;
        padding: 7.5px;
        position: relative;
        .title {
          position: absolute;
          bottom: 14px;
          left: 14px;
          width: 85%;
          border-radius: 10px;
          padding: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .tag {
          .ciao {
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 20px;
          }
          position: absolute;
          top: 7.5px;
          right: 7.5px;
          background-color: pink;
          padding: 3px 10px;
          z-index: 3;
          text-align: center;
          border-bottom: 0.5 solid black;
          border-left: 0.5 solid black;
          border-radius: 0 0 0 1.25rem;
          &::after {
            width: 1.125rem;
            height: 1.125rem;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 2.2rem;
            right: 0rem;
            border-top-right-radius: 0.700rem;
            box-shadow: 0rem -0.350rem pink;

          }
          &::before {
            width: 1.125rem;
            height: 1.125rem;
            content: '';
            position: absolute;
            background-color: transparent;
            top: 0rem;
            left: -1rem;
            border-top-right-radius: 0.700rem;
            box-shadow: 0rem -0.4rem pink;

          }
        }
        img {
          border-radius: 15px;
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