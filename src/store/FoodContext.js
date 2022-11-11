import React from "react"

const initialStat={
    cartFoodList: [
    //   {
    //   food:{
    //     name:"",
    //     description:"",
    //     id:""
    //   },
    //   count:1
    // },
  ],
    
    
}
const foodStateContext = React.createContext(initialStat);
const foodDispatchContext = React.createContext();

function foodReducer(state, action) {
  switch (action.type) {
    case "ADD_FOOD_TO_CART":
      // return { ...state, cartFoodList: [...state.cartFoodList,action.payload] };
      {
        const foodFound=state.cartFoodList.find(item=>item.food.id===action.payload.id)
        console.log("foodFound",foodFound);
        if(foodFound){
          foodFound.count++
        }else{
          state.cartFoodList.push({
            food:action.payload,
            count:1
          })
        }

        return {...state}
      }

      case "INC":{
        const foodFound=state.cartFoodList.find(item=>item.food.id===action.payload)
        
        if(foodFound){
          foodFound.count++
        }
         
         return {...state}
      }

      case "DEC":{
        const foodFound=state.cartFoodList.find(item=>item.food.id===action.payload)
        
        if(foodFound.count){

          if(foodFound.count===1){
            state.cartFoodList=state.cartFoodList.filter(item=>item.food.id!==action.payload)
          }else{
            foodFound.count--
          }
           
        }
         
         return {...state}
      }
    
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FoodProvider({ children }) {
  var [state, dispatch] = React.useReducer(foodReducer, initialStat);
  return (
    <foodStateContext.Provider value={state}>
      <foodDispatchContext.Provider value={dispatch}>
        {children}
      </foodDispatchContext.Provider>
    </foodStateContext.Provider>
  );
}

function useFoodState() {
  var context = React.useContext(foodStateContext);
  if (context === undefined) {
    throw new Error("useFoodState must be used within a foodProvider");
  }
  return context;
}

function useFoodDispatch() {
  var context = React.useContext(foodDispatchContext);
  if (context === undefined) {
    throw new Error("useFoodDispatch must be used within a foodProvider");
  }
  return context;
}

export { FoodProvider, useFoodState, useFoodDispatch };

// ###########################################################



export function addFoodToCart(dispatch,food){
    dispatch({
        type:"ADD_FOOD_TO_CART",
        payload:food
    })
}

export function inc(dispatch,foodId){
  dispatch({
      type:"INC",
      payload:foodId
  })
}

export function dec(dispatch,foodId){
  dispatch({
      type:"DEC",
      payload:foodId
  })
}