import styled from "styled-components";
import Title from '../../components/Title';

const Borgo = () => {
  return <Wrapper>
    <Title one={'Borgo dei '} two={'Marinai'} />
  </Wrapper>
}

export default Borgo;

const Wrapper = styled.main`
    margin-top: 40px;
`