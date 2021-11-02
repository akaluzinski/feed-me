import Card from "../../shared/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { testURL } from "../../../fixtures/test-data";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(testURL);
      console.log(response);
      const data = await response.json();

      if (data?.error === "Permission denied") {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  if (isError || isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        { isLoading && <p>Loading...</p> }
        { isError && <p>Error :(</p> }
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
