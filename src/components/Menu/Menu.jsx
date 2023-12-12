import React from 'react'
import './Menu.scss'
import MenuIcon from '../../images/menu-icon.png'

const Menu = () => {
  return (
    <div className='menu'>
      <img src={MenuIcon} alt="MenuIcon" />
      <p>Menu</p>
    </div>
  )
}

export default Menu