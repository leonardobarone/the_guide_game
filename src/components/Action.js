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

const Action = () => {
  
  const imgStyle = {
    marginBottom: '4px',
    width: '32px',
  }

  const containerItem = {
    padding: '12px 20px'
  }

  const location = useLocation();


  return (
    <Wrapper>
      <ul>
        <li className={containerItem}>
          <Link className='link' to="#">
            <img style={imgStyle} src={account} alt="" />
            <h2>Account</h2>
          </Link>
          </li>
        <li className={containerItem}>
          <Link className='link' to="#">
            <img style={imgStyle} src={regole} alt="" />
            <h2>Regole</h2>
          </Link>
          </li>
        <li style={location.pathname === '/' ? {...containerItem, backgroundColor: 'white', borderRadius: '100%'} : {containerItem} }>
          <Link className='link' to="/">
            <img style={imgStyle} src={mappa} alt="" />
            <h2>Mappa</h2>
          </Link>
          </li>
        <li style={location.pathname === '/quiz' ? {...containerItem, backgroundColor: 'white', borderRadius: '100%'} : {containerItem} }>
          <Link className='link' to="/quiz">
            <img style={imgStyle} src={tappe} alt="" />
            <h2>Tappe</h2>
          </Link>
          </li>
        <li className={containerItem}>
          <Link className='link' to="#">
            <img style={imgStyle} src={obiettivi} alt="" />
            <h2>Obiettivi</h2>
          </Link>
          </li>
      </ul>
    </Wrapper>
  )
}

export default Action;

const Wrapper = styled.nav`
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    position: fixed;
    padding: 16px;
    z-index: 16;
    background-color: lightgray;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        text-align: center;
        h2 {
          font-size: 12px;
        }
      }
    }
`;


