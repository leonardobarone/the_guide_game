import styled from "styled-components"

const Overlay = () => 
    new Array (16)
    .fill()
    .map((_, i) => <Wrapper className="overlay" key={i}><div /></Wrapper>)


export default Overlay;



const Wrapper = styled.div`
    &.overlay {
        border: 1px solid yellow;
        pointer-events: none;
        z-index: 2;
    }
`
