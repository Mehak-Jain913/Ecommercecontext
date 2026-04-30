import React, { useContext } from "react"
import "./card.css"
import { Link } from "react-router-dom"
import { ProductContext } from "../context/ProductContext"

export default function Card({ e }) {
  const { setDisplayProduct } = useContext(ProductContext)

  return (
    <div className="card">
      <img src={e.image} alt={e.title} />
      <div>
        <Link to="/display" onClick={() => setDisplayProduct(e)}>
          <h3>{e.title}</h3>
        </Link>
        <h4>$ {e.price}</h4>
      </div>
    </div>
  )
}
