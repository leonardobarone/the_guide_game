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

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'azzera', 'indietro']; 
    return <>
        <Wrapper>
            <div className="boxSearch">
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
            </div>
        </Wrapper>
    </>
}

export default KeyboardNumeric;

const Wrapper = styled.div`
    background-color: var(--gray);
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
        }
    }
    .keyboard {
        height: 40px;
        padding: 0px 4px 4px 4px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        .inner {
            height: 100%;
            flex-basis: calc(100% / 12);
            display: flex;
            justify-content: center;
            align-items: center;
            div {
                height: calc(100% - 6px);
                width: calc(100% - 6px);
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
            }
        }
    }


 
`;


