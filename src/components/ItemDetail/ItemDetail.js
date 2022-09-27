import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext,useState} from 'react';
import {CartContext} from '../../context/cartContext'
import { Link } from 'react-router-dom';

 
const ItemDetail = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const[count, setCount] = useState(1);
  const[goToCart,setGoToCart] =useState(false);
  
  function onAdd(product){
       addToCart(product,count)
     setGoToCart(true);    
}
  return (
    <div className='padre'>
        <img className='image' src={product.image} alt={product.title}/>
        <h2 className='titulo'>{product.title}</h2>
       <div>
        <p>{product.description}</p>
        <p className='precio'>Catergoria {product.categoryid}</p>
        <p className='precio'><b>precio ${product.price}</b></p>
       {goToCart
       ?<Link to='/carrito'>terminar compra</Link>
        :<>
        <ItemCount stock={6} count={count} setCount={setCount} />
        <button className="add-btn" onClick={()=> onAdd(product)}>
                agregar al carrito
        </button>
        </>}
        
       </div>
    </div>
  )
}

export default ItemDetail