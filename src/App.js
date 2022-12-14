
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import NavBarPersonalizada from './components/NavBarPersonalizada/NavBarPersonalizada'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';

import { CartProvider } from "./context/cartContext"


function App() {
  return (

    <BrowserRouter>

      <CartProvider>

        <NavBarPersonalizada/>
      
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detalle" element={<ItemDetailContainer/>}/>
            <Route path="/productos" element={<ItemListContainer/>}/>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
        </Routes>

      </CartProvider>

    </BrowserRouter>
    
  );
}

export default App;
