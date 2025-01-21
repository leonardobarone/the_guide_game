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
              <div style={{backgroundColor: '#5cb85c'}} className="inside">
                <FaLockOpen />
              </div>
            </div>
            <div className="title">
              VENERDI SANTO
              <span className="subtitle">
                lorem ipsum
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src={scialoja} alt="" />
            <div className="tag">
              <div style={{backgroundColor: '#5cb85c'}} className="inside">
                <FaLockOpen />
              </div>
            </div>
            <div className="title">
              ANTONIO SCIALOJA
              <span className="subtitle">
                lorem ipsum
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="body">
            <img src="https://img.freepik.com/free-vector/padlock-coloured-outline_78370-548.jpg?semt=ais_hybrid" alt="" />
            <div className="tag">
              <div style={{backgroundColor: '#d9534f'}} className="inside">
                <FaLock />
              </div>
            </div>
            <div className="title">
              CARTA ARTURO
              <span className="subtitle">
                lorem ipsum
              </span>
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
    background-color: #f6f2f1;
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
          background-color: white;
          .subtitle {
            display: block;
            font-weight: lighter;
            color: gray;
            margin-top: 3px;
          }
        }
        .tag {
          .inside {
            border-radius: 17px;
            color: white;
            font-size: 12px;
            padding: 4px 17px;
          }
          
          position: absolute;
          top: 7px;
          right: 7px;
          background-color: #f6f2f1;
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
            box-shadow: 4px -3px #f6f2f1;
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
            box-shadow: 2px -5px #f6f2f1;
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