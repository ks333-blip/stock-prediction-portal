import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './components/Footer'

const Main = () => {
  return (
    <>
    <Header/>
    <div className="container">
        <div className='p-5 text-center bgchange rounded'>
            <h1 className="text-light">Stock Prediction</h1>
            <p className="text-light">This stock prediction app utilizes ml</p>
            <Button text='Login'  class='btn-outline-info' />
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Main