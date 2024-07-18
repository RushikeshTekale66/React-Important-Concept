import React, { useContext } from 'react'
import { CartContext } from '../Context/Cart'

const Item = (props) => {
    //access the value from the cart Context
    const cart = useContext(CartContext);
    console.log(cart);
  return (
    <div>
        <h4>Item Name : {props.name}</h4>
        <p>Price : {props.price}</p>
        <button onClick={()=>cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to cart</button>
    </div>
  )
}

export default Item