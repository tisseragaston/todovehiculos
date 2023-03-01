import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import './style.css' 

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null)
    
    
    useEffect(() => {
        fetch (`https://api.mercadolibre.com/items/${id}`)
        .then (response => response.json())
        .then (dataJson => setProducto(dataJson))
    
    }, [])
    console.log(producto)

  return (
    <div className='detalles text-center'>
        {  !producto ? 'cargando...' :
        <>  
            <div>
            <img src={producto.pictures[0].url} className='imgDetalle' alt="foto"/>
            <h3 style={{textAlign:'center'}}>{producto.title}</h3>
            <h5 style={{textAlign:'center'}}>Precio: ${producto.currency_id} {producto.price}</h5>
            <br />
            <div className='botonPrecio'>
            <Link to ={`/category/${producto.category_id}`} className='letraBoton'>Ver mas de esta Categoría</Link>
            </div>
            </div>
        </>
        }
    </div>
  )
}

export default ItemDetailContainer
