import Card from "../../shared/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import { testURL } from '../../../fixtures/test-data';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([])

    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch(testURL);
        console.log(response);
        const data = await response.json();

        if(data?.error === 'Permission denied') {
          console.error('Permission denied. Verify DB connection');
          return;
        }

        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price
          })
        }

        setMeals(loadedMeals);
      };

      fetchMeals();
    }, []);

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
  }

export default AvailableMeals;
