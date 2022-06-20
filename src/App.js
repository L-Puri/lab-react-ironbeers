// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeers from './components/NewBeers';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/beers' element={<Beers /> } />
        <Route path='/randombeers' element={<RandomBeers /> } />
        <Route path='/newbeers' element={<NewBeers /> } /> 
        <Route path='/beers/:beerId' element={<BeerDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
