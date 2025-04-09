import styled from "styled-components";

// Immagini 
import quindici1 from '../images/games/quindici/1.png';
import quindici2 from '../images/games/quindici/2.png';
import quindici3 from '../images/games/quindici/3.png';
import quindici4 from '../images/games/quindici/4.png';
import quindici5 from '../images/games/quindici/5.png';
import quindici6 from '../images/games/quindici/6.png';
import quindici7 from '../images/games/quindici/7.png';
import quindici8 from '../images/games/quindici/8.png';
import quindici9 from '../images/games/quindici/9.png';
import quindici10 from '../images/games/quindici/10.png';
import quindici11 from '../images/games/quindici/11.png';
import quindici12 from '../images/games/quindici/12.png';
import quindici13 from '../images/games/quindici/13.png';
import quindici14 from '../images/games/quindici/14.png';
import quindici15 from '../images/games/quindici/15.png';
import quindici16 from '../images/games/quindici/16.png';



const Tile = ({number, moveTile}) => {

    const quindiciImages = {
        1: quindici1,
        2: quindici2,
        3: quindici3,
        4: quindici4,
        5: quindici5,
        6: quindici6,
        7: quindici7,
        8: quindici8,
        9: quindici9,
        10: quindici10,
        11: quindici11,
        12: quindici12,
        13: quindici13,
        14: quindici14,
        15: quindici15,
        16: quindici16,
    };
  
  return <Wrapper onClick={() => moveTile(number)} className={` ${number.value === number.index + 1 ? 'correct' : ''} number ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}>
    {/* {number.value === 16 ? '' : number.value} */}
    {/* <img src={`${number.value}.png`} alt="" /> */}
    {number.value === 16 ? 
        null
    : 
        <img src={quindiciImages[number.value]} alt="" />
    }
  </Wrapper>
}

export default Tile;

const Wrapper = styled.div`
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    &.number {
        position: absolute;
        width: var(--size);
        height: var(--size);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        background-color: red;
        cursor: pointer;
        transition: left .2s, top .2s;
        &.disabled {pointer-events: none; background-color: transparent;}
        /* &.correct {background-color: orange} */
        
        &.slot--0 {left: 0; top: 0;};
        &.slot--1 {left: calc(var(--size)); top: 0;};
        &.slot--2 {left: calc(2 * var(--size)); top: 0;};
        &.slot--3 {left: calc(3 * var(--size)); top: 0;};
        &.slot--4 {left: 0; top: calc(var(--size));};
        &.slot--5 {left: calc(var(--size)); top: calc(var(--size));};
        &.slot--6 {left: calc(2 * var(--size)); top: calc(var(--size));};
        &.slot--7 {left: calc(3 * var(--size)); top: calc(var(--size));};
        &.slot--8 {left: 0; top: calc(2 * var(--size));};
        &.slot--9 {left: calc(var(--size)); top: calc(2 * var(--size));};
        &.slot--10 {left: calc(2* var(--size)); top: calc(2 * var(--size));};
        &.slot--11 {left: calc(3* var(--size)); top: calc(2 * var(--size));};
        &.slot--12 {left: 0; top: calc(3 * var(--size));};
        &.slot--13 {left: calc(var(--size)); top: calc(3 * var(--size));};
        &.slot--14 {left: calc(2 * var(--size)); top: calc(3 * var(--size));};
        &.slot--15 {left: calc(3 * var(--size)); top: calc(3 * var(--size));};





    

        
    }
`
