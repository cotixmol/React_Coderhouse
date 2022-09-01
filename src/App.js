import './App.css';

import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <NavBarPersonalizada></NavBarPersonalizada>
      <div className='subnav'>
        <ItemListContainer></ItemListContainer>
      </div>
        <ItemDetailContainer></ItemDetailContainer>
    </>
  );
}

export default App;
