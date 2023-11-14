"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  // try {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  // const mealData = data.meals;

  // if (mealData) {
  //   setMeals(mealData);
  // } else {
  //   console.error("Failed to fetch meal ideas");
  // }

  return data.meals;
  // } catch {
  //   console.error(error);
  // }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  async function loadMealIdeas() {
    try {
      const data = await fetchMealIdeas(ingredient);
      setMeals(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2 className='text-3xl font-bold m-4'>Meal Ideas</h2>
      <ul>
        {meals !== null && meals !== undefined
          ? meals.map((meal) => <li key={meal.idMeal}>{meal.strMeal}</li>)
          : null}
      </ul>
    </div>
  );
}
