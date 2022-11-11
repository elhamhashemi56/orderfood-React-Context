import CartIcon from "../cart/CartIcon"
import classes from "../layout/headerCartButton.module.css"
import { useFoodState} from "../../store/FoodContext";

const HeaderCartButton = props => {

    
    const {cartFoodList}= useFoodState()

    // const cartCtx = useContext(CartContext)
    //
    // const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    //     return curNumber + item.amount
    // }, 0)

    const sum =cartFoodList.reduce((sum,currItem)=>{
        return sum + currItem.count
    },0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{sum}</span>
    </button>
}
export default HeaderCartButton
