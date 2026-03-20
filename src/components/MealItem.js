import Button from './UI/Button'
import { useContext } from 'react'
import CartContext from '../store/CartContext'

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)

    const addToCart = () => {
        cartCtx.addItem(props.meal)
    }

    return (
        <li className="meal-item">
            <article className="meal-item-article">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} className="meal-item-img"/>
                <div>
                    <h3 className="meal-item h3">{props.meal.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat('et-EE', { style: 'currency', currency: 'EUR' }).format(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p className='meal-item-action'>
                    <Button onClick={addToCart}>Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem