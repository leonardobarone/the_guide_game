// Per Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "./components/Header";
import Navbar from './components/Navbar';
// Pages
import Mappa from "./pages/navbar/Mappa";
import Account from "./pages/navbar/Account";
import Card from "./pages/navbar/Card";
import Place from "./pages/navbar/Place";
import Error from "./pages/Error";
import PlaceItem from "./pages/navbar/PlaceItem";
import CardItem from "./pages/navbar/CardItem";
import Home from "./pages/Home";
import Cannoni from "./pages/games/Cannoni";
import Merlato from "./pages/games/Merlato";
import Frutta from "./pages/games/Frutta";
import Borgo from "./pages/games/Borgo";
import Porte from "./pages/games/Porte";
import SanLeonardo from "./pages/games/SanLeonardo";
import TettoMondo from "./pages/games/TettoMondo";
import SanLeonardo2 from "./pages/games/SanLeonardo2";
import TettoMondo2 from "./pages/games/TettoMondo2";


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Collegamenti Navbar */}
          <Route path="/mappa" element={<Mappa />} />
          <Route path="/profilo" element={<Account />} />
          <Route path="/carte" element={<Card />} />
            <Route path="/carte/:id" element={<CardItem />} />
          <Route path="/luoghi" element={<Place />} />
            <Route path="/luoghi/:id" element={<PlaceItem />} />
          
          {/* Gioco Cannoni */}
          <Route path="/cannoni" element={<Cannoni />} />

          {/* Gioco Palazzo Merlato */}
          <Route path="/merlato" element={<Merlato />} />

          {/* Gioco Frutta */}
          <Route path="/frutta" element={<Frutta />} />

          {/* Gioco Borgo */}
          <Route path="/borgo" element={<Borgo />} />

          {/* Gioco Porte */}
          <Route path="/porte" element={<Porte />} />

          {/* Gioco 15 San Leonardo */}
          <Route path="san_leonardo" element={<SanLeonardo />} />
          <Route path="san_leonardo_2" element={<SanLeonardo2 />} />

          {/* Gioco 15 Palazzo Cultura */}
          <Route path="tetto_mondo" element={<TettoMondo />} />
          <Route path="tetto_mondo_2" element={<TettoMondo2 />} />
          

          <Route path="*" element={<Error />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

