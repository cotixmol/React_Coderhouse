import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import {CartProvider} from "./context/cartContext"
import { CartContainer } from './components/CartContainer/CartContainer';


function App() {
  return (
    <BrowserRouter>

      <CartProvider>

        <NavBarPersonalizada></NavBarPersonalizada>
      
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
