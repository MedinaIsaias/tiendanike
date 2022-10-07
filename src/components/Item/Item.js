import './Item.css'

const Item = ({title, price,image,descr}) => {
  return (
    <div  className="card">
    <img width={'200px'} className="rounded mx-auto d-block"src={image} alt="{title}"/>
    <h2>{title}</h2>
    <h3>${price}</h3>
    <p>{descr}</p>
    </div>
    
  );
};

export default Item