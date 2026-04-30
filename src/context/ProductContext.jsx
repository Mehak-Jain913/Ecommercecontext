import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [displayProduct, setDisplayProduct] = useState(null)
  const [cart, setCart] = useState([])

  const getProducts = async () => {
    try {
      const url = 'https://fakestoreapi.com/products'
      const response = await axios.get(url)
      setProducts(response.data)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        displayProduct,
        setDisplayProduct,
        cart,
        setCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
