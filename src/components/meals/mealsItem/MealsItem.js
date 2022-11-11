import classes from "../mealsItem/mealsItem.module.css"
import MealsItemForm from "./MealsItemForm"
const MealsItem = ({mealsData}) =>{
    const price= `$${mealsData.price.toFixed(2)}`
    return <li className={classes.meal}>
            <div>
                <h3>{mealsData.name}</h3>
                <div className={classes.description}>{mealsData.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm mealsData={mealsData}/>
            </div>
    </li>
}

export default MealsItem;
