import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/Mappa";
import Account from "./pages/navbar/Account";
import Task from "./pages/navbar/Task";
import Regole from "./pages/Regole";
import Place from "./pages/navbar/Place";
import Quiz from "./pages/games/Quiz";
import Error from "./pages/Error";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import SingleTappa from "./pages/SingleTappa";
import Home from "./pages/Home";

import cannon from './images/games/cannon.png';
import lace from './images/games/lace.png';
import arch from './images/games/arch.png'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Collegamenti Navbar */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/regole" element={<Regole />} />
          <Route path="/profilo" element={<Account />} />
          <Route path="/obiettivi" element={<Task />} />
          <Route path="/tappe" element={<Place />} />
            <Route path="/tappe/:id" element={<SingleTappa />} />
          


          {/* Quiz Palazzo Merlato */}
          <Route path="/quiz" element={<Quiz istructions={'Conta il numero dei merletti, moltiplicalo per il numero degli archi e poi per 8!'} bgColor={'#DD6C70'} correctAnswer={'2968'}>
            <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img width={75} src={arch} alt="" />
              <span style={{fontWeight: 'bold', fontSize: '30px', marginLeft: '10px'}}>X</span>
              <img width={75} src={lace} alt="" />
              <span style={{fontWeight: 'bold', fontSize: '30px',}}>=</span>
            </div>
          </Quiz>} />
          


          
          {/* Quiz Belvedere Cannoni */}
          <Route path="/secondQuiz" element={<Quiz istructions={'In che anno è stato costruito il cannone?'} bgColor={'#9CC4F8'} correctAnswer={'1785'}>
            <div style={{height: 'calc(100% - 95px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img width={150} src={cannon} alt="" />
            </div>
          </Quiz>} />


          
          <Route path="*" element={<Error />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

