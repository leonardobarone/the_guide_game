// STILE
import styled from 'styled-components';

const Modal = ({modal, setModal, victory}) => {

    return (
      <Wrapper>
        <div className={modal ? 'popup active' : 'popup'} id="popup"> 
            <div className="overlay"></div>
            <div className="popup-content">
                <h2>{victory ? 'Hai vinto' : 'Hai perso'}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ratione voluptatem quos exercitationem! Quae omnis aliquam aliquid, porro adipisci ratione necessitatibus.</p>
                <div className="controls">
                    <button onClick={() => setModal(!modal)} className='close-btn'>Close</button>
                    <button onClick={() => setModal(!modal)} className='submit-btn'>Submit</button>
                </div>
            </div>
        </div>
      </Wrapper>
    )
  }
  
export default Modal;

const Wrapper = styled.div`
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .popup {
        z-index: 10;
        position: fixed;
        top: -100vh;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: top 0ms ease-in-out 300ms;
    }
    
    .popup .overlay {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        opacity: 0;
        transition: opacity 100ms ease-in-out 200ms;
    }

    .popup .popup-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.15);
        width: 95%;
        max-width: 350px;
        background: #fff;
        padding: 25px;
        border-radius: 20px;
        opacity: 0;
        box-shadow: 0px 2px 2px 5px rgba(0,0,0,0.05);
        transition: all 300ms ease-in-out;
    }

    .popup .popup-content h2 {
        margin: 10px;
        font-size: 25px;
        color: #111;
        text-align: center;
    }

    .popup .popup-content p {
        margin: 15px 0px;
        color: #222;
        font-size: 16px;
        text-align: center;
    }
    
    .popup .popup-content .controls {
        display: flex;
        justify-content: space-between;
        margin: 20px 0px 0px;
    }

    .popup .popup-content .controls button {
        padding: 10px 20px;
        border: none;
        outline: none;
        font-size: 15px;
        border-radius: 20px;
        cursor: pointer;
    }

    .popup .popup-content .controls .close-btn {
        background: transparent;
        color: #3284ed;
    }

    .popup .popup-content .controls .submit-btn {
        background: #3284ed;
        color: #fff;
    }

    .popup.active {
        top: 0px;
        transition: top 0ms ease-in-out 0ms;
    }

    .popup.active .overlay {
        opacity: 1;
        transition: all 300ms ease-in-out;
    }

    .popup.active .popup-content {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
`;