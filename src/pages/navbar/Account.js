import styled from "styled-components";
import waveTop from '../../images/waveTop.svg';


const Account = () => {
    return (
      <Wrapper>
        
      </Wrapper>
    )
  }
  
export default Account;
  
const Wrapper = styled.main`
  background-color: var(--gray);
  margin-top: 40px;
  margin-bottom: 60px;
  position: relative;
  height: 300px;
  &::after {
    content: '';
    background-image: url(${waveTop});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    bottom: -25px;
    left: 0px;
    height: 25px;
    position: absolute;
  }
`