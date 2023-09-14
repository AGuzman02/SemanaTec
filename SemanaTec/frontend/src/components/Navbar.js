import React from 'react'
import price from './price.png'
import './Navbar_styles.css'


function Navbar() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img className='logo' src={price}/>
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
