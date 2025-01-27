import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/navbar/Mappa";
import Account from "./pages/navbar/Account";
import Card from "./pages/navbar/Card";
import Rule from "./pages/navbar/Rule";
import Place from "./pages/navbar/Place";
import Quiz from "./pages/games/Quiz";
import Error from "./pages/Error";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import ItemPlace from "./pages/navbar/ItemPlace";
import Home from "./pages/Home";
import Debug from "./pages/Debug";

import cannon from './images/games/cannon.png';
import lace from './images/games/lace.svg';
import arch from './images/games/arch.svg'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Collegamenti Navbar */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/regole" element={<Rule />} />
          <Route path="/profilo" element={<Account />} />
          <Route path="/carte" element={<Card />} />
          <Route path="/luoghi" element={<Place />} />
            <Route path="/luoghi/:id" element={<ItemPlace />} />
          


          {/* Quiz Palazzo Merlato */}
          <Route path="/quiz" element={<Quiz istructions={'Conta il numero dei merletti, moltiplicalo per il numero degli archi e poi per 8!'} bgColor={'#DD6C70'} correctAnswer={'2968'}>
            <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img width={90} src={arch} alt="" />
              <span style={{fontWeight: 'bold', fontSize: '45px', marginLeft: '10px', color: 'white'}}>x</span>
              <img width={90} src={lace} alt="" />
            </div>
          </Quiz>} />
          


          
          {/* Quiz Belvedere Cannoni */}
          <Route path="/secondQuiz" element={<Quiz istructions={'In che anno è stato costruito il cannone?'} bgColor={'#9CC4F8'} correctAnswer={'1785'}>
            <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img width={90} src={cannon} alt="" />
            </div>
          </Quiz>} />


          
          <Route path="/debug" element={<Debug />} />

          <Route path="*" element={<Error />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

