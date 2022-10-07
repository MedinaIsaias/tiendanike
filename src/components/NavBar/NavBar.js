import './NavBar.css'
import CarWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';
import lobo from '../../assets/img/lobo.png'

const NavBar = (carrito)=>{
    return(
    <div className="navbar-contenedor navbar-dark bg-primary nav-link">
        
        <ul>
            <li><Link to={'/'}>
                <img src={lobo} className="lobo" alt="logo"/>
                </Link>
            </li>
             <li >
                <Link to={'category/vehiculo'} className="text-white">vehiculo</Link>
            </li>
            <li>
               <Link to={'category/electronica'}className="text-white">electronica</Link>
            </li>
            <li>
                <Link to={'category/libros'}className="text-white">libros</Link>
            </li>
             <li>
                <button className="login">login</button>
            </li>
             <li>
                <Link to={'carrito'}>
               <CarWidget img={carrito} className='carrito'/>
                </Link>
            </li>
        </ul>
    </div>

    )
};

export default NavBar