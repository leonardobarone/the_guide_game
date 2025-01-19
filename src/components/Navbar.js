import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState, createElement } from 'react';
import links from '../utils/links';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId)
  }

  const location = useLocation();
  

  return (
    <Wrapper>
      <div className="navigation">
        <ul>
          {
            links.map((link) => {
              return (
              <li key={link.id} onClick={() => handleLinkClick(link.id)} className=
              {link.id === activeLink || location.pathname === link.path ? 'list active' : 'list'}>
                <Link className='linkNavbar' to={link.path}>
                  <span className="icon">
                    {createElement(link.icon)}
                  </span>
                  <span className="text">{link.text}</span>
                  <span className="circle"></span>
                </Link>
              </li>)
            })
          }
          {
            activeLink || location.pathname ? <div className="indicator"></div> : ''
          }
          
        </ul>
      </div>
    </Wrapper>
  )
}

export default Navbar;

const Wrapper = styled.nav`

.navigation {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    /* width: 400px; */
    /* position: relative; */
    height: 70px;
    background: linear-gradient(45deg, #2196f3, #e91e63);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navigation ul {
    display: flex;
    width: 350px;
  }

  .navigation ul li {
    position: relative;
    width: 70px;
    height: 70px;
    list-style: none;
    z-index: 1;
  }

  .navigation ul li .linkNavbar {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }

  .navigation ul li .linkNavbar .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5rem;
    text-align: center;
    color: #fff;
    transition: .5s;
  }

  .navigation ul li.active .linkNavbar .icon {
    transform: translateY(-32px);
  }

  .navigation ul li .linkNavbar .text {
    position: absolute;
    color: #fff;
    font-weight: 400;
    font-size: .75em;
    letter-spacing: .05em;
    opacity: 0;
    transform: translateY(20px);
    transition: .5s;
  }

  .navigation ul li.active .linkNavbar .text {
    opacity: 1;
    transform: translateY(10px);
  }

  .navigation ul li .linkNavbar .circle {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50%;
    border: 1.8px solid #fff;
    transform: translateY(-37px) scale(0);
  }

  .navigation ul li.active .linkNavbar .circle {
    transition: .5s;
    transition-delay: .5s;
    transform: translateY(-37px) scale(1);
  }

  .indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: linear-gradient(45deg, #2196f3, #e91e63);
    border: 6px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
  }

  .indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -21px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 white;
  }
  
  .indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -21px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 white;
  }

  .navigation ul li:nth-child(1).active~.indicator {
    transform: translateX(calc(70px * 0));
  }

  .navigation ul li:nth-child(2).active~.indicator {
    transform: translateX(calc(70px * 1));
  }

  .navigation ul li:nth-child(3).active~.indicator {
    transform: translateX(calc(70px * 2));
  }

  .navigation ul li:nth-child(4).active~.indicator {
    transform: translateX(calc(70px * 3));
  }

  .navigation ul li:nth-child(5).active~.indicator {
    transform: translateX(calc(70px * 4));
  }

`;


