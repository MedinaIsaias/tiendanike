//import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../src/components/CarWidget/CarWidget.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
//import Boton from './components/Boton/Boton';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  //const stock = 10
  //const [items, setItems] = useState(0)
  //const sumar = () => items < stock ? setItems(items + 1) : alert('Se alcanzo el maximo de stock')
  //const restar = () => items > 0 ? setItems(items - 1) : alert('no se pueden introducir valores negativos')

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='vehiculo' element={<div>vehiculo</div>}/>
      <Route path='electronica' element={<div>electronica</div>}/>
      <Route path='libros' element={<div>libros</div>}/>
      <Route path='details/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;

