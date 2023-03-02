
import { Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Body/>}/>
          <Route path='/cart' element = {<Cart/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
