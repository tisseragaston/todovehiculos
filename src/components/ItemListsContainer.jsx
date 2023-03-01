import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import './style.css'

const Mercadolibre = (props) => {
    const { id } = useParams ();
    const [productos, setProductos] = useState(null)

    useEffect(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${id}&limit=50`)
        .then(response => response.json())
        .then(dataJson => setProductos(dataJson.results))
    }, [id])
    console.log(productos)
  return (
    <div className='landing'>
        <h1 style={{textAlign: 'center'}}>Resultados</h1>
        <div class="container text-center">
        { !productos ? 'cargando...' :
          productos.map (product => (
            <>
            <div className='cards'>
            <div>
            <img src={product.thumbnail} class="card-img-top w-25 rounded mx-auto d-block" alt="foto"/>
            <h5>{product.title}</h5>
            <div className='botonPrecio'>
            <Link to ={`/vehiculo/${product.id}`} className='letraBoton'>Ver Precio</Link>
            </div>
            </div>
            </div>
            </>  
       ))
        }
        </div>
        
    </div>
  )
  
  
  }

  // https://pokeapi.co/api/v2/pokemon?limit=20
  // `https://api.mercadolibre.com/sites/MLA/search?q=${id}&limit=50`
  // https://api.mercadolibre.com/sites/MLA/search?category=${id}&limit=50


export default Mercadolibre
