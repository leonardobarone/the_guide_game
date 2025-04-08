import styled from "styled-components"

const Winner = ({numbers}) => {
    if (!numbers.every(n => n.value === n.index + 1))
        return null;


    return <Wrapper>
        <p>You Won!</p>
    </Wrapper>
}

export default Winner;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--tile);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: white;
    z-index: 50;
;
`


