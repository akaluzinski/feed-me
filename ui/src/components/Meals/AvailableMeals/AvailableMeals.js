import { DUMMY_MEALS } from "../../../fixtures/dummy-meals";
import Card from "../../shared/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { Component} from 'react'
  
class AvailableMeals extends Component {

  render() {
    const meals = DUMMY_MEALS.map((meal) => (
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
          <ul>{meals}</ul>
        </Card>
      </section>
    );
  }

}

/*
const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
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
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};
*/
export default AvailableMeals;
