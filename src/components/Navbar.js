import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import account from '../images/navbar/account.png';
import regole from '../images/navbar/regole.png';
import mappa from '../images/navbar/mappa.png';
import tappe from '../images/navbar/tappe.png';
import obiettivi from '../images/navbar/obiettivi.png';

const Actions = () => {
  
  const location = useLocation();
  if (location.pathname === '/quiz' || location.pathname === '/secondQuiz' ) return null;

  return (
    <Wrapper>
      <Link className='link' style={location.pathname === '/account' ? {backgroundColor: 'white', color: 'black'} : {}} to='/account'>
        <img src={account} alt="" />
        <h3>Account</h3>
      </Link>
      <Link className='link' style={location.pathname === '/regole' ? {backgroundColor: 'white', color: 'black'} : {}} to='/regole'>
        <img src={regole} alt="" />
        <h3>Regole</h3>
      </Link>
      <Link className='link' style={location.pathname === '/mappa' ? {backgroundColor: 'white', color: 'black'} : {}} to='/mappa'>
        <img src={mappa} alt="" />
        <h3>Mappa</h3>
      </Link>
      <Link className='link' style={location.pathname === '/tappe' ? {backgroundColor: 'white', color: 'black'} : {}} to='/tappe'>
        <img src={tappe} alt="" />
        <h3>Tappe</h3>
      </Link>
      <Link className='link' style={location.pathname === '/obiettivi' ? {backgroundColor: 'white', color: 'black'} : {}} to='/obiettivi'>
        <img src={obiettivi} alt="" />
        <h3>Obiettivi</h3>
      </Link>
    </Wrapper>
  )
}

export default Actions;

const Wrapper = styled.nav`
    background-color: brown;
    height: 75px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
      align-items: center;
      width: 65px;
      height: 65px;
      border-radius: 100%;
    }
    img {
      width: 30px;
    }
    h3 {
      font-size: 10px;
    }
`;


