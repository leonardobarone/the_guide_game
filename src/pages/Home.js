import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div style={{marginTop: '50px', marginBottom: '75px', padding: '32px', width: '100%', overflow: 'scroll', height: 'calc(100vh - 125px)',backgroundPosition: 'center'}}>

          <h1>Pagina Home</h1>
          <ul>
              <li>
                  <Link to='/merlato'>Quiz Palazzo Merlato</Link>
              </li>
              <li>
                <Link to='/cannoni'>Quiz Cannoni</Link>
              </li>
              <li>
                <Link to='/frutta'>Quiz Frutta</Link>
              </li>
              <li>
                <Link to='/borgo'>Quiz Borgo</Link>
              </li>
              <li>
                <Link to='/porte'>Quiz Porte</Link>
              </li>
              <li>
                <Link to='/san_leonardo'>San Leonardo prima del 15</Link>
              </li>
              <li>
                <Link to='/san_leonardo_2'>San Leonardo Quiz 15</Link>
              </li>
              <li>
                <Link to='/tetto_mondo'>Plazzo Cultura prima del 15</Link>
              </li>
              <li>
                <Link to='/tetto_mondo_2'>Palazzo Cultura Quiz 15</Link>
              </li>
              <li>
                <Link to='/figli'>Ai Figli di Procida</Link>
              </li>
          </ul>
        </div>

    )
  }
  
  export default Home;
  