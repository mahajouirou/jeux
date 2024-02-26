import React from 'react'
import Feed from './Feed'


const Nav = ({products , setproducts , priceCount , total, setTotal}) => {
  return (
    <div className="main">
      <Feed setproducts={setproducts} products={products} />
      
      
    </div>
  )
}

export default Nav