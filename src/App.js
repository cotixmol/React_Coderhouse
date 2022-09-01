import './App.css';

import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBarPersonalizada></NavBarPersonalizada>
      <div className='subnav'>
        <ItemListContainer></ItemListContainer>
      </div>
    </>
  );
}

export default App;
