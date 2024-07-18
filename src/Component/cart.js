import React, { useContext } from 'react'
import { CartContext } from '../Context/Cart'

const Cart = () => {
  //Accessing the cart context
  const cart = useContext(CartContext);
  console.log(cart);

  const total = cart.items.reduce((a,b)=> a+ b.price, 0);

  return (
    <div>
        {
          cart.items.map((item)=>(
              <li>{item.name} - {item.price}</li>
          ))
        }
        <h1>Total : {total}</h1>
    </div>
  )
}

export default Cart