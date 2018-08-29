import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1 className="projTitle">
      Bos
      <span>-</span> Duren
    </h1>
    <div className="heading cf">
      <h1>My Cart</h1>
      <Link to="/" className="continue">
        Cart
      </Link>
    </div>
  </header>
)

export default Header
