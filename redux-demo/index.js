// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore

// ONE REDUCER

const BUY_CAKE = 'BUY_CAKE';

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// 
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe( () => console.log('Update state', store.getState())  ) 
store.dispatch({type: 'BUY_CAKE'})          // update state 
store.dispatch(buyCake())                   // update state
store.dispatch(buyCake())                   // update state
console.log('current state', store.getState())
unsubscribe()                       // unsubscribe

store.dispatch(buyCake())       // still update state, but no listener (because already unsubscribe())
const unsubscribe2 = store.subscribe( () => console.log('Update2 state', store.getState())  ) 
store.dispatch(buyCake())       // update state, with listener
unsubscribe2()                  // ubsubscribe
