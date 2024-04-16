import React from 'react'
import { ProductList } from './ProductList'
import ProductCard from './ProductCard'

function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {ProductList.map((product)=> <ProductCard {...product} key={product.id}/>)}
    </div>
  )
}

export default Dashboard
