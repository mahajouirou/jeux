import React, { useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'

const Cart = ({products , setproducts , priceCount , total, setTotal}) => {
     console.log(products)
     const initialValue = 0;
     const totalitem = products.reduce((accumulator,current) => accumulator + current.prix , initialValue)
     const deleteItem = (filtred) => {
          setproducts(products.filter(item => item.name != filtred.name))
     }
  return (
    <div className='cart'>
     <div className="total">Total price : {totalitem} $</div>
     <h2>Cart {products.length > 0 ? `(${products.length})` : ''}</h2>
     <div className="grid_view">
          <span>image preview</span>
          <span>game title</span>
          <span>category</span>
          <span>price</span>
          <span>delete</span>
     </div>
     {products.map((item , index) => (
     <div className="grid_view grid_view_2" key={index}>
          <span><img src={item.img} alt="" /></span>
          <span>{item.name.slice(0,20)}</span>
          <span>{item.cat}</span>
          <span>{item.prix} $</span>
          <span onClick={() => deleteItem(item)}><BsTrash /></span>
     </div>
     ))}
    </div>
  )
}

export default Cart