import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdBackspace } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const KeyboardNumeric = ({ sendDataToParent, popup }) => {
    
    const [numero, setNumero] = useState('');
    
    const handleButtonClick = (value) => {
        let limit = numero.length + 1;
        
        if (value === 'azzera' && numero !== '') {
            setNumero('');
            sendDataToParent('');
        } else if (value === 'indietro' && numero !== '') {
            setNumero(numero.slice(0, -1));
            sendDataToParent(numero.slice(0, -1));
        } else if (limit < 5 && value !== 'azzera' && value !== 'indietro') {
            setNumero(prev => prev + value);
            sendDataToParent(prev => prev + value);
        }
    }

    useEffect(() => {
        if (popup) {
            setNumero('')
        }
    }, [popup])

    
    const btns1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const btns2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const btns3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const btns4 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'indietro'];
    const btns5 = [' '];

    return <>
        <Wrapper>
            <div className="top">
                <div className="search">
                    {numero}
                </div>
            </div>
            <div className="tastiera">
                <div className="btns1">
                    {btns1.map((btn, i) => {
                        return <div className='out' key={i}>
                            <div className='in' onClick={() => handleButtonClick(btn)}>
                                {btn}
                            </div>
                        </div>
                    })}
                </div>
                <div className="btns2">
                    {btns2.map((btn, i) => {
                        return <div className='out' key={i}>
                            <div className='in' onClick={() => handleButtonClick(btn)}>
                                {btn}
                            </div>
                        </div>
                    })}
                </div>
                <div className="btns3">
                    <div className='halfY'></div>
                    {btns3.map((btn, i) => {
                        return <div className='out' key={i}>
                            <div className='in' onClick={() => handleButtonClick(btn)}>
                                {btn}
                            </div>
                        </div>
                    })}
                </div>
                <div className="btns4">
                    <div className='halfLeftBack'></div>
                    {btns4.map((btn, i) => {
                        let view = btn; 
                        if (btn === 'indietro') {
                            view = <IoMdBackspace />
                        } else {
                            view = btn;
                        }
                        return <div className={ btn === 'indietro' ? 'arrow' : 'out'} key={i}>
                            <div className='in' onClick={() => handleButtonClick(btn)}>
                                {view}
                            </div>
                        </div>
                    })}
                    <div className='halfRight'></div>
                </div>
                <div className="btns5">
                    <div className='halfLeftSpace'></div>
                    {btns5.map((btn, i) => {
                        return <div className='space' key={i}>
                            <div className='in' onClick={() => handleButtonClick(btn)}>
                                {btn}
                            </div>
                        </div>
                    })}
                </div>
            </div>

            {/* <div className="boxSearch">
                <div className="inSearch">
                    <div>{numero ? numero : ''}</div>
                </div>
            </div>
            <div className="keyboard">
                {
                    numbers.map((number, index) => {
                        let view = number;
                        if (number === 'indietro') {
                            view = <IoMdBackspace />
                        } else if (number === 'azzera') {
                            view = <MdDelete />
                        } else {
                            view = number;
                        }
                        return (
                            <div key={index} className='inner'>
                                    <div key={index} onClick={() => handleButtonClick(number)} >{view}</div>
                            </div>
                        )
                    })
                }
            </div> */}
        </Wrapper>
    </>
}

export default KeyboardNumeric;

const Wrapper = styled.div`
    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        .search {
            color: var(--purple);
            margin-top: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 98%;
            height: 78%;
            border-radius: 4px;
            background-color: white;
        }
    }
    background-color: var(--gray);
    position: fixed;
    width: 100%;
    z-index: 2;
    left: 0;
    bottom: 0;
    .tastiera {
        .btns1, .btns2, .btns3, .btns4, .btns5 {
            display: flex;
            .out {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-basis: calc(100% / 10);
                height: 35px;
            }
            .in {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 85%;
                height: 85%;
                background-color: white;
                color: var(--purple);
                border-radius: 4px;
            }
            .halfY {
                flex-basis: calc((100% / 10) / 2);
            }
            .halfLeftBack {
                flex-basis: calc(100% / 10);
            }
            .halfLeftSpace {
                flex-basis: calc((100% / 10) * 3);
            }
            .arrow, .space {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 35px;
            }
            .arrow {
                flex-basis: calc((100% / 10) * 2);
                .in {
                    color: white;
                    background-color: var(--green);
                }
            }
            .space {
                flex-basis: calc((100% / 10) * 4);
            }
        }
    }
    /* background-color: var(--gray);
    position: fixed;
    z-index: 1;
    bottom: 0px;
    left: 0px;
    width: 100%;
    .boxSearch {
        height: 40px;
        padding: 7px 7px 3px 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        .inSearch {
            border-radius: 4px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-left: 7px;
            background-color: white;
            width: 100%;
            height: 100%;
            color: var(--purple);
        }
    }
    .keyboard {
        padding: 0px 4px 4px 4px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .inner {
            flex-basis: calc(100% / 10);
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                height: 30px;
                width: calc(100%);
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                color: var(--purple);
            }
        }
    } */


 
`;


