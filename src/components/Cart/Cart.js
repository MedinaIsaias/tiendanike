import{useContext,useState}from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext'
import moment from 'moment';
import {collection,addDoc, getFirestore} from 'firebase/firestore'
const Cart = () => {
    const{cart,removeItem}=useContext(CartContext);
    const total=cart.reduce((valorPasado,valorActual)=>valorPasado+(valorActual.price*valorActual.quantity),0);
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const nameEvent = (e) => {
      setInputName(e.target.value);
    };
    const emailEvent = (e) => {
      setInputEmail(e.target.value);
    };
    const phoneEvent = (e) => {
      setInputPhone(e.target.value);
    };
    const createOrden = () =>{
    const db =getFirestore();

    const order = {
      buyer:{
        name: inputName,
        email: inputEmail,
        phone: inputPhone
      },
      items: cart,
      total:total,
      date: moment().format(),
    };
     const query = collection(db,'orders');
     addDoc(query,order)
     .then(({id})=>{
      console.log(id)
      alert(`felicidades por tu compra, este es tu codigo de factura: ${id}`);})
     .catch(()=>
      alert('tu compra no pudo ser procesada')
      )
     
  }
  return (<div className='text-white' >
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
        <div className='totalCompra'> Total ${total} </div>
        <br/>
        <div>
          <div>
            <label>nombre</label>
          <input type="text" onChange={nameEvent}/>
          </div>
          <br/>
          <div>
            <label>telefono</label>
          <input type='number'onChange={phoneEvent}/>
          </div>
          <br/>
          <div>
            <label>correo</label>
          <input type='email' onChange={emailEvent}/>
          </div>
          <br/>
        <button onClick={createOrden} style={{marginTop:'25px'}}>crear orden</button>
        </div>
        </>
        
    )}
    
  
    
  </div>);
};

export default Cart