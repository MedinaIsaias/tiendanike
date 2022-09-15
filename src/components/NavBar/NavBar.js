import logo from '../../logo.svg';
import carrito from '../../assets/img/carrito.png'
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
    <div className="navbar-contenedor">
        
        <ul className="navbar-nav">
            <li><Link to={'/'}>
                <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </li>
             <li>
                <Link to={'category/vehiculo'}>vehiculo</Link>
            </li>
            <li>
               <Link to={'category/electronica'}>electronica</Link>
            </li>
            <li>
                <Link to={'category/libros'}>libros</Link>
            </li>
             <li>
                <button className="login">login</button>
            </li>
             <li>
                <img src={carrito} className="carrito" alt="carrito"/>
            </li>
        </ul>
    </div>

    )
};

export default NavBar