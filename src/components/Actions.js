import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import account from '../images/account.png';
import regole from '../images/regole.png';
import mappa from '../images/mappa.png';
import tappe from '../images/tappe.png';
import obiettivi from '../images/obiettivi.png';
// import { MdAccountCircle } from "react-icons/md";
// import { IoNewspaperOutline } from "react-icons/io5";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { CiFlag1 } from "react-icons/ci";
// import { FaTrophy } from "react-icons/fa";

const Actions = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <ul>
        <li>
          <Link className='link' style={location.pathname === '/account' ? {backgroundColor: 'white'} : {}} to="/account ">
            <img src={account} alt="" />
            <h2>Account</h2>
          </Link>
          </li>
        <li>
          <Link className='link' style={location.pathname === '/regole' ? {backgroundColor: 'white'} : {}} to="/regole">
            <img src={regole} alt="" />
            <h2>Regole</h2>
          </Link>
          </li>
        <li>
          <Link className='link' style={location.pathname === '/mappa' ? {backgroundColor: 'white'} : {}} to="/mappa">
            <img src={mappa} alt="" />
            <h2>Mappa</h2>
          </Link>
          </li>
        <li>
          <Link className='link' style={location.pathname === '/tappe' ? {backgroundColor: 'white'} : {}} to="/tappe">
            <img src={tappe} alt="" />
            <h2>Tappe</h2>
          </Link>
          </li>
        <li>
          <Link className='link' style={location.pathname === '/obiettivi' ? {backgroundColor: 'white'} : {}} to="/obiettivi">
            <img src={obiettivi} alt="" />
            <h2>Obiettivi</h2>
          </Link>
          </li>
      </ul>
    </Wrapper>
  )
}

export default Actions;

const Wrapper = styled.nav`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 10px;
    z-index: 16;
    background-color: #007bff;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        .link {
          border-radius: 100%;
          padding: 8px 16px;
        }
        img {
              width: 32px;
        }
        text-align: center;
        h2 {
          font-size: 8px;
        }
      }
    }
`;


