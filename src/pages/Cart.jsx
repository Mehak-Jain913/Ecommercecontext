import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export default function Cart() {
  const { cart } = useContext(ProductContext)

  return (
    <div className="fc">
      <h2>Your Cart</h2>
      {cart.length > 0
        ? cart.map((item, i) => (
            <div key={i} className="card">
              <h3>{item.title}</h3>
              <img width={80} src={item.image} alt={item.title} />
              <p>$ {item.price}</p>
            </div>
          ))
        : <h3>Cart is Empty</h3>}
    </div>
  )
}
