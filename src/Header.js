import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='p-3 bg-secondary'>
      <h3>Ecommerce</h3>
      <div className='row justify-content-center pt-3 pb-2'>
        <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex' >
        <button className='btn btn-success me-4 width-5%' onClick={()=> navigate('/')} >Home</button>
        <input 
        className='form-control'
        type='search'
        placeholder='search....'
        />

        <button className='btn btn-success ms-4'  onClick={()=> navigate('/cart')}>Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Header
