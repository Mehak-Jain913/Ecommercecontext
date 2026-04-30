import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import Card from '../components/Card'

export default function Display() {
  const { displayProduct } = useContext(ProductContext)

  if (!displayProduct) return <Navigate to='/' />

  return (
    <div>
      <Card e={displayProduct} />
    </div>
  )
}
