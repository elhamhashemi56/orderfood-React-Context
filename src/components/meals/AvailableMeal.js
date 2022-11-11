import classes from "../meals/availableMeal.module.css"
import Card from "../UI/Card";
import MealsItem from "./mealsItem/MealsItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailbleMeal = () =>{

    const listMeals= DUMMY_MEALS.map(meal=> <li>
        <MealsItem
            key={meal.id}
            mealsData={meal}
        />
    </li>
    )
    return(
        <section className={classes.meals}>
            <Card>
                {listMeals}
            </Card>
        </section>

    )
}

export default AvailbleMeal;
