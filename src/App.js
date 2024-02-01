import './App.css';
import { Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';
import Home from './components/Home';
import Movie from './components/Movie';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/show/:id' element={<Movie/>}  />
    <Route path='/book/:id' element={<Booking/>}  />

    </Routes>
  );
}

export default App;
