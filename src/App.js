import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/navbar/Mappa";
import Account from "./pages/navbar/Account";
import Card from "./pages/navbar/Card";
import Place from "./pages/navbar/Place";
import Error from "./pages/Error";
import Header from "./components/Header";
import Navbar from './components/Navbar';
import PlaceItem from "./pages/navbar/PlaceItem";
import Home from "./pages/Home";
import Cannoni from "./pages/games/Cannoni";
import Merlato from "./pages/games/Merlato";
import Frutta from "./pages/games/Frutta";
import Borgo from "./pages/games/Borgo";
import Porte from "./pages/games/Porte";

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
          <Route path="/luoghi" element={<Place />} />
            <Route path="/luoghi/:id" element={<PlaceItem />} />
          


          {/* CANNONI */}
          <Route path="/cannoni" element={<Cannoni />} />

          {/* MERLATO */}
          <Route path="/merlato" element={<Merlato />} />

          {/* FRUTTA */}
          <Route path="/frutta" element={<Frutta />} />

          
          {/* BORGO */}
          <Route path="/borgo" element={<Borgo />} />

          {/* PORTE */}
          <Route path="/porte" element={<Porte />} />

          <Route path="*" element={<Error />} />
        </Routes>
      <Navbar />
    </Router>
  );
}

export default App;

