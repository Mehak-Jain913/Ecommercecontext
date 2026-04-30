import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import './Header.css'  

export default function Header() {
  const { cart } = useContext(ProductContext)

  return (
    <header className='fr'>
      <Link to="/">Logo</Link>
      <nav>
        <ul>
          <li>
            <Link to='cart'>Cart - {cart.length}</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
