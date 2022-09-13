import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <div className='padre'>
        <img className='image' src={product.image} alt={product.title}/>
        <h2 className='titulo'>{product.title}</h2>
       <div>
        <p>{product.descr}</p>
        <p className='precio'>Catergoria {product.category}</p>
        <p className='precio'><b>precio ${product.price}</b></p>
       </div>
    </div>
  )
}

export default ItemDetail