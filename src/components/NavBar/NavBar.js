import logo from '../../logo.svg';
import carrito from '../../assets/img/carrito.png'
const NavBar = ()=>{
    return(
    <div className="navbar-contenedor">
        
        <ul class="navbar-nav">
            <li class="nav-item">
                <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page"href="src/paginas/Vehiculos.html">Vehiculos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="src/paginas/Electronica.html">Electronica</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-light" href="src/paginas/Libros.html">Libros</a>
            </li>
            <li class="nav-item">
                <button class="login">login</button>
            </li>
            <li class="nav-item">
                <img src={carrito} className="carrito" alt="carrito"/>
            </li>
        </ul>
    </div>

    )
};

export default NavBar