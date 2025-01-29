import styled from "styled-components";
import prova from '../images/cards/elsa.webp';

const Popup = ({popup, setPopup}) => {
  return <Wrapper className={popup ? 'active' : ''}>
        <div className="top"></div>
        <div className="center">
            <img src={prova} alt="" />
            <h3>Congratulazioni!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corrupti architecto quas autem assumenda obcaecati consequuntur inventore et! Consectetur odio cupiditate culpa consequatur architecto dolor corporis saepe doloribus qui? Quos?</p>
        </div>
        <div className="bottom">
            <button onClick={() => setPopup(false)}>CHIUDI</button>
        </div>
    </Wrapper>
}

export default Popup

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    position: fixed;
    transform: translate(0%, 100%);
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: transform 0.5s ease-in-out;
    padding: 0px 5px 5px;
    &.active {
      transform: translate(0%, 0%);
    }
    .center {
        text-align: center;
        h3 {
            color: var(--my-success);
            font-size: 20px;
            margin: 10px 0px 5px;
            letter-spacing: 0.6px;
        }
        p {
            padding: 0px 13px;
            font-size: 13px;
        }
        img {
            display: inline-block;
            border-radius: 10px;
            width: 220px;
        }
    }
    .bottom {
        width: 100%;
        button {
            display: block;
            padding: 15px 0px;
            border-radius: 15px;
            border-style: none;
            width: 100%;
            color: white;
            background-color: var(--my-success);
        }
    }

`