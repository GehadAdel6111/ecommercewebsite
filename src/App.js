import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import CartPage from './Components/Pages/CartPage/CartPage';
import Kids from './Components/Pages/Kids/Kids';
import Login from './Components/Pages/Login/Login';
import Men from './Components/Pages/Men/Men';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import { Shop } from './Components/Pages/Shop';
import SignUP from './Components/Pages/SignUp/SignUP';
import Women from './Components/Pages/Women/Women';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
