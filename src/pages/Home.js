import { Link } from "react-router-dom";
import background from '../images/background.jpg';

const Home = () => {
    return (
      <div style={{padding: '32px', height: 'calc(100vh - 150.41px)', width: '100%', height: 'calc(100vh - 150.41px)', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <h1>Pagina Home</h1>
        <em>Notte ultimo aggiornamento: 09/01/2025</em>
        <hr style={{margin: '10px 0px'}} />
        <h3>Cose modificate:</h3>
        <ul>
            <li>Precisato i pulsanti in basso</li>
            <li>Creata pagina home</li>
            <li>Cliccare Game of Procida per tornare nella Home</li>
            <li>Create pagine vuote e ordinate</li>
            <li>Il quiz sta nella posizione: Palazzo Merlato</li>
            <li>
                <Link to='/quiz'>Puoi anche cliccare qui per andare direttamente al gioco</Link>
            </li>
        </ul>
      </div>
    )
  }
  
  export default Home;
  