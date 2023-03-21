import React, { useState , useEffect } from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'
import './Navbar.css'

const navbar = (props) => { 

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <Link className='linkNav' to="/"><a class="navbar-brand" href="#" style={{color: 'green'}}>TodoVehiculos</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div >
            <Link className='linkNav' to="/">Home</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/autos">Autos</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/camionetas">Camionetas</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/motos">Motos</Link>
        </div>
        <div>
          <Link className='linkNav' to="/about">Nosotros</Link>
        </div>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
</>
  )
}

export default navbar
