import styled from "styled-components"
import { useState, useEffect } from "react"
import Title from '../../components/Title';

const Porte = () => {

  const [result, setResult] = useState('')
  const [six, setSix] = useState(['1', '2', '3', '4', '5', '6']);

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
    </Wrapper>
  )
}

export default Porte

const Wrapper = styled.section`
    margin-top: 50px;
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
    

`