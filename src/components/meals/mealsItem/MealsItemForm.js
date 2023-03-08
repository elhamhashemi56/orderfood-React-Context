import Input from "../../UI/Input"
import classes from "./mealsItemForm.module.css"
import {addFoodToCart, useFoodDispatch} from "../../../store/FoodContext";

const MealsItemForm = ({mealsData}) => {
    const dispatch=useFoodDispatch()

    function handleAdd(e) {
        e.preventDefault();
        addFoodToCart(dispatch,mealsData);
    }

    

    return <form className={classes.form}>
        <Input
            label="Amount"
            input={{
                id: 'amount_' + mealsData.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        <button onClick={handleAdd}>+ Add</button>
    </form>
}
export default MealsItemForm
