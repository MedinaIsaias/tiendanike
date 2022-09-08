import Item from "../Item/Item";

const ItemDetail = ({lista}) => {
    return (
        <div>
            {
           lista.filter(productt=>productt.title==="mini auto").map((product) => (
            <Item
             key={product.id} 
             title={product.title} 
             price={product.price} 
             image={product.image}
             descr={product.descr}/>
           ))}
        </div>
     );
   };

export default ItemDetail