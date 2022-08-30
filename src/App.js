import './App.css';

import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import { ItemList } from './components/ItemList/ItemList';


function App() {
  return (
    <>
      <NavBarPersonalizada></NavBarPersonalizada>
      <ItemList></ItemList>
    </>
  );
}

export default App;
