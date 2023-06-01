import React from 'react'
import './style.scss'

const HomePage = () => {
  const payments = ['mastercard', 'airbnb', 'uber', 'paypal', 'mastercard']
  return (
    <div className={'home'}>
      <div className={'home__header'}>
        <div className={'home__header__img'}>
          <img src={'/assets/images/base.png'} />
        </div>
        <div className={'home__header__text'}>
          <div className={'home__header__text__extra-large-text'}>
            We Help You Make Modern Furniture
          </div>
          <div className={'medium-text'}>
            All of our furniture uses the best materials and choices for our
            customers.All of our furniture uses the best materials{' '}
          </div>
        </div>
      </div>
      <div className={'home__payment-services'}>
        <div className={'home__payment-services__block-title'}>
          Trusted by 20,000+ companies
        </div>
        <div className={'home__payment-services__block-payments'}>
          {payments.map(payment => (
            <div key={payment}>
              <img src={`/assets/payments/${payment}.svg`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomePage
