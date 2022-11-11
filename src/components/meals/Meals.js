import { Fragment } from "react";
import AvailbleMeal from "./AvailableMeal";
import MealSummery from "./MealSummery";

const Meals = () =>{
    return(
        <Fragment>
            <MealSummery />
            <AvailbleMeal />
        </Fragment>
    )
}
export default Meals;