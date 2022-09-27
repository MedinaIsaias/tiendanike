import{useContext}from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'

const Cart = () => {
    const{cart,removeItem}=useContext(CartContext);
    console.log('cart',cart)
  return (<div>
    <h1>Carrito</h1>
    {cart.length === 0 ? (
    <>
    <h2>no hay productos en tu carrito</h2>
    <Link to={'/'}>volver a comprar</Link>
    </>
    ):(
        <>
          {cart.map((Item)=>(
        <div key={Item.id}>
            <img width={'200px'} src={Item.image} alt="{title}"/>
            <h3>{Item.title}</h3>
            <p>${Item.price}</p>
            <p>cantidad {Item.quantity}</p>
            <button className="add-btn" onClick={()=> removeItem(Item.id)}>
               eliminar carrito
        </button>
       </div>
       
        ))}
        </>
    )}
  
    
  </div>);
};

export default Cart