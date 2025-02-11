import styled from "styled-components";
import Keyboard from "../../components/Keyboard";
// import Title from "../../components/Title";
import { useState } from "react";

const Frutta = () => {

    const [dataFromChild, setDataFromChild] = useState("");
    const [popup, setPopup] = useState(false); 
    const [active, setActive] = useState(false);

    function handleDataFromChild(data) {
        setDataFromChild(data);
    } 


    
  return <Wrapper>
    {/* <Title one={'Frutta '} two={'Mista'} /> */}
    <div className="base">
        <button onClick={()=> setActive(!active)}>Prova</button>
        <div className={active ? 'letter-first active' : 'letter-first'}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>1</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
        </div>
        <div className={active ? 'letter-second active' : 'letter-second'}>
        <span>1</span>
            <span></span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>14</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>1</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
        </div>
        <div className={active ? 'letter-third active' : 'letter-third'}>
        <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span>1</span>
            <span>15</span>
            <span>16</span>
            <span>17</span>
            <span>18</span>
            <span>19</span>
            <span>20</span>
            <span>21</span>
            <span>22</span>
            <span>23</span>
            <span>24</span>
            <span>25</span>
            <span>26</span>
            <span>27</span>
            <span>28</span>
            <span>29</span>
            <span>30</span>
        </div>
    </div>
    {/* ciao, questo è il quiz della frutta {dataFromChild} {popup ? 'true' : 'false'} */}
    <Keyboard sendDataToParent={handleDataFromChild} popup={popup} />
  </Wrapper>
}

export default Frutta

const Wrapper = styled.main`
    margin-top: 40px;
    border: 1px solid black;
    .base {
        height: calc(100vh - 259px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .letter-first, .letter-second, .letter-third {
        display: flex;
        flex-direction: column;
        height: 100px;
        width: 100px;
        background-color: lightpink;
        font-size: 90px;
        color: blue;
        text-align: center;
        border: 1px solid red;
        overflow: hidden;
    }
    .letter-first.active span {
        --ch: 5; // 5
        animation: scroll 1s 1s linear forwards;
    }
    .letter-second.active span {
        --ch: 20; // 5
        animation: scroll 3s 1s linear forwards;
    }
    .letter-third.active span {
        --ch: 13; // 5
        animation: scroll 2s 1S linear forwards;
    }

    @keyframes scroll {
        to {
            transform: translateY(calc(var(--ch)*-100%));
        }
    }
`