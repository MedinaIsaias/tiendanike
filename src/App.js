import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../src/components/CarWidget/CarWidget.css';

import ItemCount from './components/ItemCount/ItemCount';
import Boton from './components/Boton/Boton';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const stock = 10
  const [items, setItems] = useState(0)
  const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el maximo de stock')
  const restar = () => items > 0 ? setItems(items - 1) : alert('no se pueden introducir valores negativos')

  return (
    <div className="App">
        <NavBar/>
        <ItemDetailContainer/>
        <ItemCount stock={stock} sumar={sumar} restar={restar} items={items} />
        <Boton/>
        
    </div>
  );
}

export default App;

