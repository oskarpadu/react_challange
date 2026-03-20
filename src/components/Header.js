import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react'
import CartContext from '../store/CartContext'

const Header = ({ onOpenCart }) => {
    const cartCtx = useContext(CartContext)
    
    const totalQuantity = cartCtx.items.reduce((sum, item) => sum + (item.quantity || 1), 0)
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt='logo'/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button onClick={onOpenCart} textOnly className="text-button">
                    Cart ({totalQuantity})
                </Button>
            </nav>
        </header>
    )
}

export default Header