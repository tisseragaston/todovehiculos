import React, { useState , useEffect } from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'
import './Navbar.css'

const navbar = (props) => { 

  // const [value, setValue] = useState("") 

  // const inChange = (evento) => {
  //     setValue(evento.target.value)
  // }

  // const inSubmit = (evento) => {
  //     evento.preventDefault ();
  //     props.setSearch (value)
  // }

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
            <Link className='linkNav' to="/category/MLA1744">Camionetas</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/MLA58254">Camiones</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/MLA1763">Motos</Link>
        </div>
        <div >
            <Link className='linkNav' to="/category/MLA4514">Lanchas</Link>
        </div>
        <div>
          <Link className='linkNav' to="/about">About</Link>
        </div>
      </ul>
      {/* <form onSubmit={inSubmit}>
        <input type="text" value={value} onChange={inChange}></input>
        <button type="submit" >Buscar</button>
      </form> */}
      {/* <form class="d-flex mx-5" role="search" onSubmit={inSubmit}>
        <input class="form-control me-2" value={value} onChange={inChange} type="search" placeholder="Busca tu vehiculo" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form> */}
      <CartWidget />
    </div>
  </div>
</nav>
</>
  )
}

export default navbar
