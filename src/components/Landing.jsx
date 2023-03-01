import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import './style.css'

const Landing = (props) => {
    const [productos, setProductos] = useState(null)
    const { id } = useParams

    useEffect(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=Autos&limit=50`)
        .then(response => response.json())
        .then(dataJson => setProductos(dataJson.results))
    }, [])
    console.log(productos)
  return (
    <div>
        <h1 style={{textAlign:'center'}}>{props.greeting}</h1>
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
 

export default Landing