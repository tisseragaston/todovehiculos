import React, { useContext, useState } from 'react'
import './style.css'
import { CartContext } from '../Context/CartContext'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const Carrito = () => {
    const { cart, getTotal, clearCart, mensajeConfirmar, mensajeQuitar, mensajeCompra  } = useContext (CartContext)
    const [buyerName, setBuyerName] = useState('')
    const [buyerNumber, setBuyerNumber] = useState('')

    const db = getFirestore () 
    const ordersCollection = collection (db, 'orders')
    const resetForm = () => {
      setBuyerName('');
      setBuyerNumber('');
      cart = []
    };

    const enviarSubmit = (e) => {
        e.preventDefault ()
        const order = {
          buyer: {
            Name: buyerName,
            Phone: buyerNumber,
          },
          items: cart,
          total: getTotal ()
        }

        addDoc(ordersCollection, order)
        .then((docRef) => {
          mensajeCompra();
          console.log('Documento enviado. ID:', docRef.id);
          resetForm ();
        }
        )

    }


  return (
    <div>
      {cart.length > 0 ?
        <div className='cart5'>
          <h2 style={{textAlign : 'center'}}>Tus vehiculos reservados</h2>
          <div className="card mx-5 cartList">
            <ul className="list-group list-group-flush">
              {cart.map ((item) => (
                <li className="list-group-item">{item.title} - Cantidad: {item.quantity} - Total: $ {item.price * item.quantity}
                <br />
                <b> Reserva este vehiculo por $ {item.priceRes} </b>
                </li>
              ))}
            </ul>
          </div>
          <h3>Hace tu reserva por un total de $ {getTotal()}</h3>
          <br />

          <div>
            <div>
              <form onSubmit={enviarSubmit}>
                <label className='m-1'>
                  <b> Nombre y Apellido: </b>
                  <input className='m-2' type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} required />
                </label>
                <br />
                <label className='m-1'>
                  <b>Número de Teléfono:</b> 
                  <input className='m-2' type="tel" value={buyerNumber} onChange={(e) => setBuyerNumber(e.target.value)} required/>
                </label>
                <br />
                <button type='submit' className='botonReservar'>Enviar Reserva</button>
                <br />
              </form>
            </div>
            <button className='botonQuitar' onClick={() => {clearCart(); mensajeQuitar()}}>Vaciar Carrito</button>
          </div>
        </div>
        : 
        <div className="alert alert-danger mx-5 mt-5" style={{textAlign:'center'}} role="alert">
          No hay productos seleccionados
        </div>
      }
    </div>
  )
  
}

export default Carrito