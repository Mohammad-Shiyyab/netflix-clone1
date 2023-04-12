import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom/dist';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList';
import {Navbarr}  from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
    
    <Navbarr />
    <Routes>
      
        <Route path='/' element={<Home />}></Route>
        <Route path='/FavList' element={< FavList />}></Route>
      
    </Routes>
  
  </div>
  );
}

export default App;
