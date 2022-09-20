import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import {useContext,useState} from 'react';
import {CartContext} from '../../context/cartContext'

const ItemDetail = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const[count, setCount] = useState(1);
  function onAdd(product){
       addToCart(product,count)
    
}
  return (
    <div className='padre'>
        <img className='image' src={product.image} alt={product.title}/>
        <h2 className='titulo'>{product.title}</h2>
       <div>
        <p>{product.descr}</p>
        <p className='precio'>Catergoria {product.category}</p>
        <p className='precio'><b>precio ${product.price}</b></p>

        <ItemCount stock={6} count={count} setCount={setCount}/>

        <button className="add-btn" onClick={()=> onAdd(product)}>
                agregar al carrito
        </button>
       </div>
    </div>
  )
}

export default ItemDetail