import { currenceyFormatter } from "../util/Formatting.jsx";
import Button from "../UI/Button.jsx";
import { useContext } from "react"; 
import CartContext from "../store/CartContext.jsx";


export default function MealItems({meals}) {
    const cartCtx = useContext(CartContext);
    function handleAddMealToCart() {
        cartCtx.addItem(meals);
    }
     return(
        <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meals.image}`}alt="mealImage"/>
            <div>
                <h3>{meals.name}</h3>
                <p className="meal-item-price">{currenceyFormatter.format(meals.price)}</p>
                <p className="meal-item-description">{meals.description}</p>
               
            </div>
            <div>
                 <Button onClick={handleAddMealToCart} className="meal-item-actions">Add to Cart</Button>
            </div>

        </article>

        </li>
     )
}