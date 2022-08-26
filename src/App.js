import './App.css';

import NavBarPersonalizada from './components/NavBar/NavBarPersonalizada.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Contador } from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <NavBarPersonalizada></NavBarPersonalizada>
      <ItemListContainer greetings="Proximamente!"></ItemListContainer>
      <Contador initialNumber={0} stockAmount={10}></Contador>
    </>
  );
}

export default App;
