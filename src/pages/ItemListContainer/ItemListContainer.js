import data from "../../components/MockDate";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const {categoryName} = useParams();
  const [productList,setProductlist] = useState([])

    

const getProduct= async()=>{

  if(categoryName){
    const response = await data.filter(
      (item)=>item.category===categoryName
    );
    setProductlist(response);
    }else{
      const response =await data;
      setProductlist(response);
    }
}

useEffect(() =>{
  getProduct();
},[categoryName]);

   
  return (
    <>
    <ItemList lista={productList}/>
    </>
  );
};

export default ItemListContainer