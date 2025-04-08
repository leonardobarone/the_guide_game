import styled from "styled-components";
import useHeight from "../../utils/useHeight";

const SanLeonardo2 = () => {
    
    // Per calcolare l'altezza
    const height = useHeight(110);

  return <Wrapper style={{ height: `${height}px` }}>
    <div>
        Div al centro
    </div>
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
