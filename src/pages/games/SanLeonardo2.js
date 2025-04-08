import styled from "styled-components";
import useHeight from "../../utils/useHeight";
import Board from '../../components/Board';

const SanLeonardo2 = () => {
    
    // Per calcolare l'altezza
    const height = useHeight(110);

  return <Wrapper style={{ height: `${height}px` }}>
    <Board />
  </Wrapper>
}

export default SanLeonardo2;

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 60px;
    border: 1px solid black;
    background-color: pink;
`
