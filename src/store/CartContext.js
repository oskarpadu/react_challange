import { createContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
    items: []
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const existingItem = state.items.find(item => item.id === action.payload.id)
        
        if (existingItem) {
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
        }
        
        return {
            ...state,
            items: [...state.items, { ...action.payload, quantity: 1 }]
        }
    }

    return state
}

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

    const addItem = (meal) => {
        dispatchCartAction({ type: 'ADD_ITEM', payload: meal })
    }

    const cartValue = {
        items: cartState.items,
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