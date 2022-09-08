

const Item = ({title, price,image,descr}) => {
  return (
    <>
    <img width={'200px'} src={image} alt="{title}"/>
    <h2>{title}</h2>
    <h3>{price}</h3>
    <p>{descr}</p>
    </>
  );
};

export default Item