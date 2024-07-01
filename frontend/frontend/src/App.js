import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import ShopContextProvider from './Context/ShopContext'; // Correct import
import { AuthProvider } from './Context/AuthContext'; // Ensure AuthProvider is imported

import artwork_banner from './Components/Assets/banner_artwork.jpg';
import equipment_banner from './Components/Assets/banner_women.png';
import sculpture_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <ShopContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/artworks' element={<ShopCategory banner={artwork_banner} category="artwork" />} />
              <Route path='/equipments' element={<ShopCategory banner={equipment_banner} category="equipment" />} />
              <Route path='/sculptures' element={<ShopCategory banner={sculpture_banner} category="sculpture" />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<LoginSignup />} />
            </Routes>
          </ShopContextProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
