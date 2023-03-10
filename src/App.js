import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </div>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
