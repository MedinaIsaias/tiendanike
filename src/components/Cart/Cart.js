import{useContext}from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import moment from 'moment';
import {collection,addDoc, getFirestore} from 'firebase/firestore'
const Cart = () => {
    const{cart,removeItem}=useContext(CartContext);
    const createOrden = () =>{
    const db =getFirestore();
    const order = {
      buyer:{
        name:'juan',
        phone:'11445522',
        email:'juan@test.com'
      },
      items: cart,
      total:cart.reduce((valorPasado,valorActual)=>valorPasado+(valorActual.price*valorActual.quantity),0),
      date: moment().format(),
    };
     const query = collection(db,'orders');
     addDoc(query,order)
     .then(({id})=>{
      console.log(id)
      alert('felicidades por tu compra');})
     .catch(()=>
      alert('tu compra no pudo ser procesada')
      )
     
  }
  return (<div >
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
        <button onClick={createOrden} style={{marginTop:'25px'}}>crear orden</button>
        </>
        
    )}
    
  
    
  </div>);
};

export default Cart