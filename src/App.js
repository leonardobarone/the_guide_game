import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/Mappa";
import Account from "./pages/Account";
import Obiettivi from "./pages/Obiettivi";
import Regole from "./pages/Regole";
import Tappe from "./pages/Tappe";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import SingleTappa from "./pages/SingleTappa";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <main style={{marginTop: '50px', marginBottom: '75px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Navbar */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/regole" element={<Regole />} />
          <Route path="/account" element={<Account />} />
          <Route path="/obiettivi" element={<Obiettivi />} />
          <Route path="/tappe" element={<Tappe />} />
          

          <Route path="/tappe/:id" element={<SingleTappa />} />


          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Navbar />
    </Router>
  );
}

export default App;

