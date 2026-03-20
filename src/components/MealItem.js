const MealItem = (props) => {
    return (
        <li className="meal-item">
            <article className="meal-item-article">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name} className="meal-item-img"/>
                <div>
                    <h3 className="meal-item h3">{props.meal.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat('et-EE', { style: 'currency', currency: 'EUR' }).format(props.meal.price)}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem