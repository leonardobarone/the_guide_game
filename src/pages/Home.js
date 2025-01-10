import { Link } from "react-router-dom";
import background from '../images/background.jpg';

const Home = () => {
    return (
      <div style={{padding: '32px', height: '100%', width: '100%', height: 'calc(100vh - 150.41px)', color: 'white', backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <h1 style={{textShadow: '0px 2px 3px black'}}>Pagina Home</h1>
        <em style={{textShadow: '0px 2px 3px black'}}>Notte ultimo aggiornamento: 09/01/2025</em>
        <hr style={{margin: '10px 0px'}} />
        <h3 style={{textShadow: '0px 2px 3px black'}}>Cose modificate:</h3>
        <ul style={{textShadow: '0px 2px 3px black'}}>
            <li>Precisato i pulsanti in basso</li>
            <li>Creata pagina home</li>
            <li>Cliccare Game of Procida per tornare nella Home</li>
            <li>Create pagine vuote e ordinate</li>
            <li>Il quiz sta nella posizione: Palazzo Merlato</li>
    
        </ul>
        <div style={{marginTop: '30px'}}>
          <Link style={{color: 'white', fontWeight: 'bold'}} to='/quiz'>Puoi anche cliccare qui per andare direttamente al gioco</Link>
        </div>
      </div>
    )
  }
  
  export default Home;
  