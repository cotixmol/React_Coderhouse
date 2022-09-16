//Importo las funciones de React.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importo la hoja de estilos de app.
import './App.css';
//Importo los componentes que son hijos de App()
import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
//Importo los componentes del contexto.
import { CartProvider } from "./context/cartContext"



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
