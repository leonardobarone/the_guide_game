import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <h1>The Guide Game</h1>
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 16px;
    z-index: 16;
    background-color: white;
    border-bottom: 1px solid black;
    text-align: center;
`;


