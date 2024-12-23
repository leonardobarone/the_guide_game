import styled from 'styled-components';

const Bottom = () => {
  return (
    <Wrapper>
        Qui vanno i pulsanti
    </Wrapper>
  )
}

export default Bottom;

const Wrapper = styled.nav`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 16px;
    z-index: 10;
    background-color: red;
`;


