import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export const HeaderPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <React.Fragment>
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
      <div className={'header-mobile'}>
        <div className={'header-mobile__menu'}>
          <div>
            <img src={'/assets/logo.svg'} />
          </div>
          <div onClick={() => setIsOpen(!isOpen)}>
            <img src={'/assets/icons/burger.svg'} />
          </div>
        </div>
        <div
          className={classNames('header-mobile__block', {
            'header-mobile__block-open': isOpen,
          })}
        >
          {isOpen && (
            <>
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
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
