import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';

const Quindici = () => {
    
    // Per calcolare l'altezza
    const height = useHeight(124);

  return <Wrapper>
    <div className="bigContainer" style={{ height: `${height}px` }}>
      <div className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <Board />
      <div className="buttonContainer">
        <div className="p-absolute">
          <button className="btn">RESET</button>
        </div>
      </div>
    </div>
  </Wrapper>
}

export default Quindici;

const Wrapper = styled.section`
    margin-top: 57px;
    margin-bottom: 67px;
    .bigContainer {
      background-color: yellow;
    }

`
