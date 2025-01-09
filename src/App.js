import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/Mappa";
import Account from "./pages/Account";
import Obiettivi from "./pages/Obiettivi";
import Regole from "./pages/Regole";
import Tappe from "./pages/Tappe";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Header from "./components/Header";
import Actions from './components/Actions';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <main style={{marginTop: '69.6px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ACTIONS */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/regole" element={<Regole />} />
          <Route path="/account" element={<Account />} />
          <Route path="/obiettivi" element={<Obiettivi />} />
          <Route path="/tappe" element={<Tappe />} />
          

          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Actions />
    </Router>
  );
}

export default App;

