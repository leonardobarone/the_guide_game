import Title from "../components/Title";
import styled from "styled-components";

const Error = () => {
  return <Wrapper>
    <Title name={'pagina non trovata'} />
  </Wrapper>
}

export default Error;

const Wrapper = styled.main`
  margin-top: 40px;
  margin-bottom: 60px;
`