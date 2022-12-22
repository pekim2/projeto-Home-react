import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
import { FaSearch } from 'react-icons/fa'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../img/logo.png';


function Navbar(){

return(
    <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
  <Link to='/' className="navbar-brand tech-bits">TechBits<img src={logo} className='logo-custom' alt="Logo do site Tech Bits"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' end className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='lancamento' className="nav-link">Lançamentos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='montarpc' className="nav-link">Montar meu PC</NavLink>
        </li>
      </ul>
      <form className="d-flex m-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Busque aqui" aria-label="Search"/>
        <button type="submit" className="btn me-5"><FaSearch color="white"/></button>
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='login' className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to='cadastro' className="nav-link">Cadastro</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to='cart' className="nav-link"><FaShoppingCart size={25}/><h7 className='ms-2'>Ver carrinho</h7></NavLink>
          </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar;