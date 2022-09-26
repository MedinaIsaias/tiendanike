import { CartContext } from '../../context/cartContext'
import carrito from '../../assets/img/carrito.png';
import { useContext } from 'react';


const CarWidget = () => {
  const{cart,}=useContext(CartContext);

  return (
    <>
  {cart.length}
  <img src={carrito} width={'50px'} className="carrito" alt="carrito"/>
  
      </>
  
  );
};

export default CarWidget;