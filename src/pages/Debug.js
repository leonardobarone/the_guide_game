import styled from 'styled-components';
import { useState } from 'react';

const Debug = () => {

    const [popup, setPopup] = useState(false);

    return <Wrapper>
        <div className="container">
            <button onClick={()=> setPopup(true)} type='submit' className='btn'>Submit</button>
            <div className={popup ? 'popup active' : 'popup'}>
                <h2>Thank You!</h2>
                <p>Your details has been successfully submitted. Thanks!</p>
                <button onClick={() => setPopup(false)} type='button'>OK</button>
            </div>
        </div>
    </Wrapper>
}

export default Debug;

const Wrapper = styled.main`
    margin-top: 60px;
    height: calc(100vh - 140px);
    .container {
        width: 100%;
        height: 100%;
        background: #3c5077;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn {
        padding: 10px 60px;
        background: #fff;
        border: 0;
        outline: none;
        cursor: pointer;
        font-size: 22px;
        font-weight: 500;
        border-radius: 30px;
    }

    .popup {
        width: 80%;
        background: #fff;
        border-radius: 6px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.1);
        text-align: center;
        padding: 0 30px;
        color: #333;
        visibility: hidden;
        transition: transform 0.4s, top 0.4s;
    }

    .active {
        visibility: visible;
        top: 50%;
        transform: translate(-50%, -50%) scale(1);
    }

    .popup h2 {
        font-size: 38px;
        font-weight: 500;
        margin: 30px 0 10px;
    }

    .popup button {
        width: 100%;
        margin: 35px 0px;
        padding: 10px 0;
        background: #6fd649;
        color: #fff;
        border: 0;
        outline: none;
        font-size: 18px;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }
`