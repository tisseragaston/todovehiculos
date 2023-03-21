import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import './style.css'
import { CartContext } from '../Context/CartContext'
import { getDocs, getFirestore, collection } from 'firebase/firestore'

const Landing = (props) => {
    const { id } = useParams
    const { addToCart, removeFromCart } = useContext (CartContext)
    const [items, setItems] = useState()

    useEffect(() => {
        const db = getFirestore ()
        const vehiculosRef = collection (db, 'items')
        getDocs (vehiculosRef).then((snapshot) => {
          setItems(snapshot.docs.map ((doc) => ({id: doc.id, ...doc.data()})))
        })
    }, [])

  return (
    <div className='landing p-4'>
        <h1 style={{textAlign:'center'}}>{props.greeting}</h1>
        <div class="container text-center">
        { !items ? 
        <div class="spinner-border" role="status">
         <span class="visually-hidden">Loading...</span>
        </div> :
          items.map (items => (
            <>
            <div className='cards'>
            <div className= 'm-2 p-4'>
            <img src={items.imgID} class="card-img-top w-25 rounded mx-auto d-block" alt="foto"/>
            <h5>{items.title}</h5>
            <div className='botonPrecio'>
            <Link to ={`/${items.id}`} className='letraBoton'>Ver Detalle</Link>
            </div>
            </div>
            </div>
            <br />
            </>  
       ))
        }
        </div>
        
    </div>
  )
  }
 
export default Landing