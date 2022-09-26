//import React, {useState} from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../src/components/CarWidget/CarWidget.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {CartProvider} from '../src/context/cartProvider'
import Cart from './components/Cart/Cart';
function App() {
 
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='carrito' element={<Cart/>}/>
      <Route path='vehiculo' element={<div>vehiculo</div>}/>
      <Route path='electronica' element={<div>electronica</div>}/>
      <Route path='libros' element={<div>libros</div>}/>
      <Route path='details/:id' element={<ItemDetailContainer/>}/>
      <Route path='category/:categoryName' element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

