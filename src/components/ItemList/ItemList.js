import Item from "../Item/Item";
import { Link } from 'react-router-dom';

const ItemList = ({lista}) => {
  
  return (
     <div className="container overflow-hidden text-center">
         {
        lista.map((product) => (
          <Link key={product.id}
          to={'/details/'+product.id}
          style={{textDecoration:'none'}}>
          <Item
          title={product.title} 
          price={product.price} 
          image={product.image}/>
          </Link>
        ))}
     </div>
  );
};

export default ItemList