import styled from "styled-components"

const Overlay = () => 
    new Array (16)
    .fill()
    .map((_, i) => <Wrapper><div key={i} /></Wrapper>)


export default Overlay;



const Wrapper = styled.section`
    border: 10px solid blue;
    pointer-events: none;
    z-index: 20;
`
