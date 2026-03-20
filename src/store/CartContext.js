import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addItem = (meal) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === meal.id)
            
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === meal.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            
            return [...prevItems, { ...meal, quantity: 1 }]
        })
    }

    const cartValue = {
        items: items,
        addItem: addItem,
    }

    console.log("cart items:", cartValue.items)

    return (
        <CartContext.Provider value={cartValue}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext