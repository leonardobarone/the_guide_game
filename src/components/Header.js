import styled from 'styled-components';
import { Link } from 'react-router-dom';
import waveTop from '../images/waveTop.svg'

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <h1><strong>Procida</strong> Game</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
    &::after {
      content: '';
      position: absolute;
      background-image: url('${waveTop}');
      background-size: cover;
      width: 100%;
      height: 20px;
      bottom: -10px;
    }
    .link {
      h1 {
        font-weight: lighter;
        font-size: 20px;
        color: var(--purple);
      }
      text-decoration: none;
    }
`;


