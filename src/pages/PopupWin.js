import { useState } from "react"
import styled from "styled-components";
import { useGlobalContext } from "../context";

const PopupWin = () => {
    const {cards, places} = useGlobalContext();
    const [active, setActive] = useState(false);
    
    const card = cards.find(card => card.id === '4');
    const place = places.find(place => place.id === '7');

    return <Wrapper>
            <button onClick={()=>setActive(!active)}>Prova Popup</button>
            <div className={active ? 'popupLeft active' : 'popupLeft'}>
                <img src={card.img} alt="" />
                <div className="title">{card.title.toUpperCase()}</div>
            </div>
            <div className={active ? 'popupRight active' : 'popupRight'}>
                <img src={place.img} alt="" />
                <div className="name">{place.name.toUpperCase()}</div>
            </div>
    </Wrapper>
}

export default PopupWin

const Wrapper = styled.main `
    margin-top: 60px;
    height: calc(100vh - 140px);
    border: 1px solid black;
    position: relative;
    .popupLeft, .popupRight {
        border: 1px solid black;
        position: fixed;
        height: 350px;
        width: 250px;
        border-radius: 10px;
        overflow: hidden;
    }
    .popupLeft {
        .title {
            position: absolute;
            z-index: 50;
            left: 0px;
            bottom: 0px;
            background-color: var(--bg-white);
            width: 94%;
            border-radius: 10px;
            text-align: center;
            padding: 5px;
            font-size: 15px;
            margin: 9px 7px;
        }
        left: -100vw;
        top: 50%;
        transform: translate(-50%);
        transition: left 0.8s ease-in-out;
        transition: transform 0.8s ease-in-out;
        &.active {
            left: 45%; 
            transform: translate(-50%, -50%);
            transition: left 0.8s ease-in-out;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .popupRight {
        .name {
            text-align: center;
            margin-top: 5px;
        }
        left: 150vw;
        top: 45%;
        background-color: white;
        transform: translate(-50%, -50%);
        &.active {
            left: 50%; 
            transform: translate(-50%, -50%);
            transition: left 0.8s ease-in-out;
        }
        img {
            display: block;
            width: 75%;
            margin: 0 auto;
            object-fit: cover;
            object-position: center;
        }
    }

`;


// .popup {
//     z-index: 10;
//     position: fixed;
//     top: -100vh;
//     left: 0px;
//     width: 100%;
//     height: 100%;
//     transition: top 0ms ease-in-out 300ms;
// }



// .popup .popup-content {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) scale(1.15);
//     width: 95%;
//     max-width: 350px;
//     background: #fff;
//     padding: 25px;
//     border-radius: 20px;
//     opacity: 0;
//     box-shadow: 0px 2px 2px 5px rgba(0,0,0,0.05);
//     transition: all 300ms ease-in-out;
// }


// .popup.active {
//     top: 0px;
//     transition: top 0ms ease-in-out 0ms;
// }

// .popup.active .overlay {
//     opacity: 1;
//     transition: all 300ms ease-in-out;
// }

// .popup.active .popup-content {
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 1;
// }








// .popup .overlay {
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     width: 100%;
//     height: 100%;
//     background: rgba(0,0,0,0.5);
//     opacity: 0;
//     transition: opacity 100ms ease-in-out 200ms;
// }