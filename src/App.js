import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Data from './components/Data';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Routes,Route,Link,Switch} from 'react-router-dom';
import CartScreen from './screens/cartScreen';
import LoginScreen from './screens/LoginScreen';
//import bootsrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import RegisterScreen from './screens/RegisterScreen';
function App() {
  return (
    <div className="App">
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomeScreen/>}/>
        <Route path='/cart' element={<CartScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
