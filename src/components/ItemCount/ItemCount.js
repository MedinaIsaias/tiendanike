
const ItemCount = (props) => {
  return (
         <div>
             <div>Tengo {props.items} items.</div>
             <div>Stock {props.stock}</div>
             <button onClick={props.sumar}>+</button>
             <button onClick={props.restar}>-</button>
         </div>
    )
}

export default ItemCount