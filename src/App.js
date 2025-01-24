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

import quiz from './images/quiz.png';
import secondQuiz from './images/secondQuiz.jpg';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Navbar */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/regole" element={<Regole />} />
          <Route path="/profilo" element={<Account />} />
          <Route path="/obiettivi" element={<Task />} />
          <Route path="/tappe" element={<Place />} />
          

          <Route path="/tappe/:id" element={<SingleTappa />} />


          <Route path="/quiz" element={<Quiz bgImage={quiz} correctAnswer={'2968'} />} />
          <Route path="/secondQuiz" element={<Quiz bgImage={secondQuiz} correctAnswer={'1785'} />} />


          
          <Route path="*" element={<Error />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

