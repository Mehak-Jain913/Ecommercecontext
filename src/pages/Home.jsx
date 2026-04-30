import React, { useContext } from 'react'
import Card from '../components/Card'
import { ProductContext } from '../context/ProductContext'

export default function Home() {
  const { products } = useContext(ProductContext)

  return (
    <main>
      <section className='cardSection'>
        {
          products.length > 0
            ? products.map(e => <Card key={e.id} e={e} />)
            : <h1>Loading...</h1>
        }
      </section>
    </main>
  )
}
