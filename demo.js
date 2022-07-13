const redux = require("redux");
const reduxLogger = require("redux-logger")

const createStore  = redux.createStore 
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//  an action-creator is a function that returns an action
function buyCake(){
    return{
        type : BUY_CAKE, // action ek object hota hai jiske andar type property hote hai
        info: "First redux action"
    }
}
function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

// (previousState , action) => newSate

const initialCakeState = {
    numberOfCakes : 10 
}

const initialIceCreamState ={
    numberOfIceCream : 20
}
// reducer
const cakeReducer = (state = initialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE :
            return{
                ...state,
                numberOfCakes : state.numberOfCakes -1 
            }
        default : return state   
    }
}

const iceCreamReducer = (state = initialIceCreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM :
            return{
                ...state,
                numberOfIceCream : state.numberOfIceCream -1 
            }
        default : return state   
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer
})
const store = createStore(rootReducers, applyMiddleware(logger))
console.log("Initial state", store.getState())
// const unsubscribed = store.subscribe(()=> console.log("Updated state", store.getState()))

const unsubscribed = store.subscribe(()=> {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribed()

