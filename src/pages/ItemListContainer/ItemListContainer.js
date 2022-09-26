
import { useEffect, useState} from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useParams} from "react-router-dom";
import {getFirestore,getDocs,collection,query, where} from 'firebase/firestore';

const ItemListContainer = () => {
  const {categoryName} = useParams();
  const [productList,setProductlist] = useState([])

    

const getProduct= ()=>{
  const db = getFirestore();
  const querySnapshot = collection(db,'items');
  
  if(categoryName){
    const queryFilter = query(
      querySnapshot, where('categoryid','==',categoryName)
      );

      getDocs(queryFilter).then((response)=>{
        const data=response.docs.map((product)=>{
          return {id: product.id, ...product.data()}
        });
        setProductlist(data);
      });
    }else{
      getDocs(querySnapshot).then((response)=>{
        const data=response.docs.map((product)=>{
          return {id: product.id, ...product.data()}
        });
        setProductlist(data);
      });

    }


  
};

useEffect(() =>{
  getProduct();
},);

   
  return (
    <>
    <ItemList lista={productList}/>
    </>
  );
};

export default ItemListContainer