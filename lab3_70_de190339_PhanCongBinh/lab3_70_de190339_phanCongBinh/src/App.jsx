import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterPage from "./pages/FooterPage";
import HomeCarousel from "./components/HomeCarousel";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Home from "./pages/Home";
import AccountPage from "./pages/AccountPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/footer" element={<FooterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
