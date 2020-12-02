// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// MULTIPLE REDUCERS AND COMBINE REDUCERS IN REDUX

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}


const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ... state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers ({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe( () => console.log('Update state', store.getState())  ) 
store.dispatch(buyCake())           
store.dispatch(buyCake())           
store.dispatch(buyIceCream())       
unsubscribe()             