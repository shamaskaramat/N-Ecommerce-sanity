import React, { useState, useEffect, createContext, useContext } from 'react'
import { toast } from 'react-hot-toast';
const Context = createContext();
export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantities, settotalQuantities] = useState();
    const [qty, setQty] = useState(1)
    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
    
      const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }
    
    return (

        <Context.Provider values={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty
        }}>

        </Context.Provider>

    )
}
export const useStateContext = ()=> useContext(Context)