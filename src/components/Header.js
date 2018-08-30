import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header className="header">
    <h1 className="projTitle">
      Bos
      <span>-</span> Duren
    </h1>
    <div className="heading cf">
      <h1>{props.title}</h1>
      {props.location === 'cart' ? (
        <Link to="/history" className="continue">
          History
        </Link>
      ) : (
        <Link to="/" className="continue">
          Cart
        </Link>
      )}
    </div>
  </header>
)

export default Header
