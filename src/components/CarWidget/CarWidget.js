import { CartContext } from '../../context/cartContext'
import carrito from '../../assets/img/carrito.png';
import { useContext } from 'react';


const CarWidget = () => {
  const{totalProducts}=useContext(CartContext);
  

  return (
    <>
  <img src={carrito} width={'50px'} className="carrito" alt="carrito"/>
  <span>{totalProducts()|| ''}</span>
      </>
  
  );
};

export default CarWidget;