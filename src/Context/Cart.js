import { createContext, useState } from "react";

//create context
export const CartContext = createContext(null);

export const CartProvider = (props) => {

    // set the item value to the context
    const [items, setItems] = useState([]);

    return <CartContext.Provider value={{ items, setItems }}>
        {props.children}
    </CartContext.Provider>
}