import React from 'react'
import './Footer.css' 

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} FakeStore. All rights reserved.</p>
    </footer>
  )
}
