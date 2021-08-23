import { DUMMY_MEALS } from "../../../fixtures/dummy-meals";

import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
const meals = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)

    return (
    <section className={classes.meals}>
      <ul>{meals}</ul>
    </section>
  );
};

export default AvailableMeals;
