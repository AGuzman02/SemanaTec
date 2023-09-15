import React from 'react'
import price from '../Imagenes/price.png'
import './Navbar_styles.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Lista_productos from '../Productos/Lista_productos';
import {AiOutlineShoppingCart} from 'react-icons/ai';


function Navbar() {
  return (
    <div>
      <nav class="navbar fondo">

        <div class="container-fluid fondo">
          <a className="navbar-brand" href="#">
            <img className= 'd-inline-block align-text-top logo' src={price} width={80} height={80}/>
          </a>

          <button className="btn btn-outline-light menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <GiHamburgerMenu />
          </button>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title texto" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close color-boton" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <Link className="nav-link" to="/Home">Home</Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos_disponibles">Lista de Productos</Link> {/* Enlaza a la página de Lista de Productos */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/agregar_productos">Agregar Producto</Link> {/* Enlaza a la página de Lista de Productos */}
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/carrito"><AiOutlineShoppingCart/>Carrito</Link> {/* Enlaza a la página de Lista de Productos */}
                </li>

              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar
