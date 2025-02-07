import Title from "../components/Title";
import styled from "styled-components";

const Error = () => {
  return <Wrapper>
    <Title one={'Page Not Found'} two={'404'} />
  </Wrapper>
}

export default Error;

const Wrapper = styled.main`
  margin-top: 40px;
  margin-bottom: 60px;
`