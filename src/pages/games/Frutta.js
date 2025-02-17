import styled from "styled-components";
import Keyboard from "../../components/Keyboard";
import Title from "../../components/Title";
import { useState } from "react";
import arancia from '../../images/games/frutta/arancia.png';
import banana from '../../images/games/frutta/banana.png';
import bar from '../../images/games/frutta/bar.png';
import big from '../../images/games/frutta/big.png';
import ciliegia from '../../images/games/frutta/ciliegia.png';
import cocomero from '../../images/games/frutta/cocomero.png';
import limone from '../../images/games/frutta/limone.png';
import nespola from '../../images/games/frutta/nespola.png';
import sette from '../../images/games/frutta/sette.png';


const Frutta = () => {

    const [dataFromChild, setDataFromChild] = useState("");
    const [popup, setPopup] = useState(false); 
    const [win, setWin] = useState('');

    function handleDataFromChild(data) {
        setDataFromChild(data);
    } 

    const arr = [
        arancia, 
        banana, 
        ciliegia, 
        big, 
        cocomero, // perso 1
        bar, 
        limone, 
        nespola, 
        arancia, 
        sette, // vinto 1 
        banana, // perso 2 
        bar, 
        big, 
        ciliegia, 
        cocomero,  
        sette, // vinto 2 
        limone, 
        nespola, // perso 3 
        bar, 
        banana, 
        sette, // vinto 3 
        big, 
        ciliegia, 
        cocomero, 
        limone, 
        nespola, 
        sette
    ]



    
  return <Wrapper>
    <Title name={'fruit jackpot'} />
    <div className="base">
        <button onClick={()=> setWin('yes')}>Vinci</button>
        <button onClick={()=> setWin('no')}>Perdi</button>
        <button onClick={()=> setWin('')}>Azzera</button>
        <div className={`letter-first ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
            {
                arr.map((img, i) => {
                    return <img key={i} src={img} /> 
                })
            }
        </div>
        <div className={`letter-second ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>                    
            {
                arr.map((img, i) => {
                    if (i === 0) {
                        return;
                    }
                    return <img key={i} src={img} /> 
                })
            }
        </div>
        <div className={`letter-third ${win === 'no' ? 'lose' : ''} ${win === 'yes' ? 'win' : '' }`}>
            {
                arr.map((img, i) => {
                    if (i === 0 || i === 1) {
                        return;
                    }
                    return <img key={i} src={img} /> 
                })
            }
        </div>
    </div>
    {/* ciao, questo è il quiz della frutta {dataFromChild} {popup ? 'true' : 'false'} */}
    <Keyboard sendDataToParent={handleDataFromChild} popup={popup} />
  </Wrapper>
}

export default Frutta

const Wrapper = styled.main`
    margin-top: 40px;
    .base {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .letter-first, .letter-second, .letter-third {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        height: 80px;
        width: 80px;
        font-size: 50px;
        color: blue;
        text-align: center;
        overflow: hidden;
    }
    .letter-first.lose img {
        --ch: 4; // 5
        animation: scroll 1s 1s linear forwards;
    }
    .letter-second.lose img {
        --ch: 9; // 5
        animation: scroll 2s 1s linear forwards;
    }
    .letter-third.lose img {
        --ch: 15; // 5
        animation: scroll 4s 1S linear forwards;
    }

    .letter-first.win img {
        --ch: 9; // 5
        animation: scroll 2s 1s linear forwards;
    }
    .letter-second.win img {
        --ch: 14; // 5
        animation: scroll 3s 1s linear forwards;
    }
    .letter-third.win img {
        --ch: 18; // 5
        animation: scroll 5s 1S linear forwards;
    }

    @keyframes scroll {
        to {
            transform: translateY(calc(var(--ch)*-100%));
        }
    }
`