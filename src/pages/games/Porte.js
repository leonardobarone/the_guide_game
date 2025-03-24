import styled from "styled-components"
import { useState, useEffect } from "react"

const Porte = () => {

  const [result, setResult] = useState('')
  const items = Array(6).fill(null);

  const formaRisultato = (value) => {
    setResult(prev => prev + value);
  }
  useEffect(() => {
    console.log(result)
  }, [result])
  return (
    <Wrapper>
        <div className="top">
          <div>{result[0] ? result[0] : 'no'}</div>
          <div>{result[1] ? result[1] : 'no'}</div>
          <div>{result[2] ? result[2] : 'no'}</div>
          <div>{result[3] ? result[3] : 'no'}</div>
          <div>{result[4] ? result[4] : 'no'}</div>
          <div>{result[5] ? result[5] : 'no'}</div>
        </div>
        <div className="bottom">
          {
            items.map((_, index) => {
              return <div onClick={() => formaRisultato(index + 1)} key={index + 1}>{index + 1}</div>
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
      display: flex;
      div {
        border: 1px solid red;
        width: calc(100% / 6);
        text-align: center;
      }
    }
    

`