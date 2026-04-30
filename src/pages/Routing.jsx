import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Display from './Display'
import Cart from './Cart'

export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='display' element={<Display />} />
      <Route path='cart' element={<Cart />} />
    </Routes>
  )
}
