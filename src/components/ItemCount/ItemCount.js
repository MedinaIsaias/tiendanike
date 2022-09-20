const ItemCount = ({stock,count,setCount})=>{

   
   
    const incrementar =()=>{
        if(count < stock){
            setCount(count + 1);
        }
    };
const decrementar =()=>{
    if(count > 0){
        setCount(count - 1);
    }
};
return(
    <div>
        <div>
        <button className="botonIncrementar" onClick={incrementar}>+</button>
        <p>{count}</p>
        <button className="botonDecrementar" onClick={decrementar}>-</button>
        </div>
        
        
        
    </div>
);
};

export default ItemCount