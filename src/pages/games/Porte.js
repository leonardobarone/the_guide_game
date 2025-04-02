import styled from "styled-components"
import { useState, useEffect } from "react"
import Title from '../../components/Title';

const Porte = () => {

  const [result, setResult] = useState('')
  const [six, setSix] = useState(['1', '2', '3', '4', '5', '6']);

  // INIZIO PROVA HEIGHT
  const [height, setHeight] = useState(window.innerHeight - 175);
    
  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight - 175);

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  // INIZIO PROVA HEIGHT

  const formaRisultato = (value) => {
    setResult(prev => prev + value);
    setSix((prevSix) => prevSix.map((elm) => (elm === value ? "" : elm)));

  }
  
  useEffect(() => {
    console.log(result)
  }, [result])
  return (
    <Wrapper>
      <Title name={'Le porte della città antica'} />
        <div className="bigContainer" style={{ height: `${height}px`}}>
          <div className="question">
            Metti in ordine le porte della città antica
          </div>
          <div className="container">
            <div className="top">
              <div>{result[0] ? result[0] : ''}</div>
              <div>{result[1] ? result[1] : ''}</div>
              <div>{result[2] ? result[2] : ''}</div>
              <div>{result[3] ? result[3] : ''}</div>
              <div>{result[4] ? result[4] : ''}</div>
              <div>{result[5] ? result[5] : ''}</div>
            </div>
            <div className="bottom">
              {
                six.map((elm, item) => {
                  return <div onClick={() => formaRisultato(elm)} key={item}>{elm}</div>
                })          
              }
            </div>
          </div>
          <div className="buttonContainer">
            <div className="p-absolute">
              <button className="btn">GIOCA</button>
            </div>
          </div>
        </div>
    </Wrapper>
  )
}

export default Porte

const Wrapper = styled.section`
    margin-top: 50px;
    .bigContainer {
        padding: 7px;
        margin: 7px;
        border-radius: 4px;
        background-color: #8E8E8E;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .question {
          font-weight: lighter;
          border-radius: 4px;
          background-color: white;
          padding: 14px;
          font-size: 12px;
          line-height: 15px;
          padding: 14px;
        }
        .top, .bottom {
        border: 1px solid black;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          border: 1px solid red;
          width: calc(100% / 6);
          text-align: center;
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
    

`