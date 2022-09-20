import { useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import data from '../../components/MockDate';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product,setProduct] = useState();

  const getProduct = () =>{
    const dataFiltrada = data.filter(product =>product.id ===id);
    console.log(dataFiltrada);
    setProduct(...dataFiltrada);
  };
  useEffect(() =>{
    getProduct();
  },);

  return (
    <div>
    {product ? (<ItemDetail product={product} />)
    :(
      <h2>Obteniendo el detalle....</h2>
    )}
    </div>
  );
};


export default ItemDetailContainer