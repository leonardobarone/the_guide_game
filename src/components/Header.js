import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <h1>Game Of Procida</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    font-size: 16px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 16px;
    z-index: 16;
    background-color: #007bff;
    text-align: center;
    h1 {
      color: white;
      text-shadow: 0px 2px 3px black;
    }
`;


