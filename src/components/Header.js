import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.svg';

const Header = () => {
  return (
    <Wrapper>
        <Link className='link' to="/">
            <img alt='' src={logo} />
        </Link>
    </Wrapper>
  )
}

export default Header;

const Wrapper = styled.header`
    position: fixed;
    top: 0px;
    z-index: 3;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray);
    .link {
      img {
        display: block;
        height: 80px;
        padding-bottom: 3px;
      }
      text-decoration: none;
    }
`;


