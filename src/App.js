import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "../src/components/cart/Cart"
import {useState} from "react";
import {FoodProvider} from "./store/FoodContext";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () => {
        setCartIsShown(true)
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }
    return (
        <FoodProvider>
            <Header onShowCart={showCartHandler}/>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Meals/>
        </FoodProvider>
    );
}

export default App;
