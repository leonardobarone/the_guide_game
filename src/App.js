import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mappa from "./pages/Mappa";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Header from "./components/Header";
import Action from './components/Action';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mappa />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Action />
    </Router>
  );
}

export default App;

