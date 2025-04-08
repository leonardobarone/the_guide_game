import styled from "styled-components"

const Tile = ({number}) => {
  return <Wrapper className={`number ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}>
    {number.value === 16 ? '' : number.value}
  </Wrapper>
}

export default Tile;

const Wrapper = styled.div`
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
        &.disabled {pointer-events: none; background-color: transparent;}
        
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
