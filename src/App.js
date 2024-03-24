
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import Footer from './Components/Footer';
import Login from './Components/Login';
import './common/style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/product/:productId" element={<MovieDetails />}  />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
