import React from "react"
import { BrowserRouter } from "react-router-dom"
import Routing from "./pages/Routing"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <main>
          <Routing />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
