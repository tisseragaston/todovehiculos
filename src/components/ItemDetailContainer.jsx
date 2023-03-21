import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import './style.css' 
import { CartContext } from '../Context/CartContext'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const { addToCart, removeFromCart, mensajeConfirmar, mensajeQuitar } = useContext (CartContext)
    const [items, setItems] = useState([])
    
    useEffect(() => {
      const db = getFirestore ()
      const vehiculosRef = doc (db, 'items', 
      id)
      getDoc(vehiculosRef).then((snapshot) => {
        if (snapshot.exists()){
        setItems({ id: snapshot.id, ...snapshot.data() })
        }
      })
  }, [])

  console.log(items)

  return (
    <div className='detalles text-center'>
        {  !items ? 
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div> :
        <>  
            <div>
            <img src={items.imgID} className='imgDetalle' alt="foto"/>
            <h3 style={{textAlign:'center'}}>{items.title}</h3>
            <h5 style={{textAlign:'center'}}>Precio: ${items.price}</h5>
            <br />
            <div className='botonPrecio'>
            <Link to ={`/category/${items.categoryID}`} className='letraBoton'>Ver mas de esta Categoría</Link>
            </div>
            <br />
            <div >
              <button className='botonReservar' onClick={() => {addToCart(items, 1); mensajeConfirmar()}}>Reservar</button>
            
              <button className='botonQuitar' onClick={() => {removeFromCart(items.id); mensajeQuitar()}}>Quitar</button>
            </div>
            <div style={{margin: 20}}> 
            <Link className='botonCarrito' to="/carrito">Ver Reservas</Link>
            </div>
            </div>
        </>
        }
    </div>
  )
}

export default ItemDetailContainer
