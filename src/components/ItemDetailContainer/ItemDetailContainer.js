import data from "../MockDate";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productList,setProductlist] = useState([])

    useEffect(() => {
    getProducts.then ((response) => {
      setProductlist (response);
    });
  },)

  const getProducts = new Promise ((resolve,reject) => {
       setTimeout(() => {
       resolve(data);
       }, 2000);
    });

  
  return (
    <>
    <ItemDetail lista={productList}/>
    </>
  );
};


export default ItemDetailContainer