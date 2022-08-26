import logo from '../logo.svg';
const NavBar = ()=>{
    return(<div className="navbar-contenedor">
<img src={logo} className="App-logo" alt="logo" />
<ul class="navbar-nav">
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
</ul>

    </div>

    )
};
export default NavBar