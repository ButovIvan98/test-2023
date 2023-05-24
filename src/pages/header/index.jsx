import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
  return (
    <div className={'header'}>
      <div className={'header__logo'}>
        <img src={'/assets/logo.svg'} />
      </div>
      <div className={'header__menu'}>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <Link to={'/about'}>About</Link>
        </div>
        <div>
          <Link to={'/features'}>Features</Link>
        </div>
        <div>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
      <div className={'header__icons'}>
        <div>
          <img src={'/assets/icons/loupe.svg'} />
        </div>
        <div>
          <img src={'/assets/icons/menu.svg'} />
        </div>
      </div>
    </div>
  )
}
