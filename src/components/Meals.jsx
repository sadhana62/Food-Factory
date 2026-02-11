import { useState, useEffect } from "react";
import MealItems from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    
    async function fetchMeal() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
      }
      const meals = await response.json();
      setMeals(meals);
    }
    fetchMeal();
  }, []);

  return (
 
      <ul id="meals">
        {meals.map((meal) => 
         <MealItems key={meal.id} meals={meal}/>
        )}
      </ul>
    
  );
}
