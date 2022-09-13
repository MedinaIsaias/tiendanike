import data from "../../components/MockDate";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {

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
    <ItemList lista={productList}/>
    </>
  );
};

export default ItemListContainer