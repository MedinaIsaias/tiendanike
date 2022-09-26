import {useState } from "react";
import { CartContext } from "./cartContext";

export const CartProvider =({children}) =>{
const [cart, setCart] = useState([]);

const addToCart = (item, quantity) =>{
  if(isInCart(item.id)){
    alert('ya esta en el carrito')
  }else{
    setCart([...cart,{...item,quantity}]);
  }
};



const isInCart =(id) =>{
return cart.some((item) =>item.id === id);
};


const removeItem = (producId) =>{
  let nuevoArreglo = [];
  cart.forEach((product) =>{
    if(product.id === producId){
      console.log(product);
    }else{
      nuevoArreglo.push(product);
    }
  });
  setCart(nuevoArreglo);
};
/*const clear = () =>{
  setCart([]);
}*/
return(
    <CartContext.Provider value={{cart, addToCart,removeItem}}>
        {children}
    </CartContext.Provider>
)
}