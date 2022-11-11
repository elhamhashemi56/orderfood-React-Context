import classes from "../cart/cart.module.css"
import Modal from "../UI/Modal"
import { useFoodDispatch, useFoodState,inc,dec} from "../../store/FoodContext";

const Cart = props => {

    
    const {cartFoodList} =useFoodState()
    const dispatch=useFoodDispatch()

    const total = cartFoodList.reduce((sum, item) => sum + (item.food.price*item.count), 0)
    

    const incrementCount=(foodId)=>{
        inc(dispatch,foodId)
    }

    const decrementCount=(foodId)=>{
        dec(dispatch,foodId)
    }

    return <Modal onClose={props.onClose}>
        
        <table border={1}>
            <thead>
                <th>Name</th>
                <th>Description</th>
                <th>Fee</th>
                <th>Price</th>
                <th>Count</th>
            </thead>
            
            <tbody>
                { cartFoodList.map(item => <tr>
                        <td>{item.food.name}</td>
                        <td>{item.food.description}</td>
                        <td>{item.food.price}</td>
                        <td>{(item.food.price * item.count).toFixed(2)}</td>
                        <td>
                            <button onClick={()=>incrementCount(item.food.id)}>+</button>
                            {item.count}
                            <button onClick={()=>decrementCount(item.food.id)}>-</button>
                        </td>
                    
                    </tr>)}
            </tbody>
          
            
        </table>
        <td className={classes.total}>
            <span>Total Amount</span>
            <span>{total.toFixed(2)}</span>
        </td>

        <td className={classes.actions}>
            <button className={classes.button}>Order</button>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        </td>
    </Modal>
}
export default Cart;
