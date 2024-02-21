import {createStore} from 'redux'
const postCountElement = document.querySelector(".post-count")

const initialState = {
    post: 0,
    age: 21,
    name: 'Aman Jain',
}

const INCREMENT = "post/increment"
const DECREMENT = "post/decrement"
const INCREASE_BY = "post/increaseBy"
const DECREASE_BY = "post/decreaseBy"

// reducer
function reducer(state = initialState, action){
    // if(action.type === INCREMENT){
    //     return {...state, post: state.post + 1}
    // }else if(action.type === DECREMENT){
    //     return {...state, post: state.post - 1}
    // }else if(action.type === INCREASE_BY){
    //     return {...state, post: state.post + action.payload}
    // }else if(action.type === DECREASE_BY){
    //     return {...state, post: state.post - action.payload}
    // }
    // return state
    switch(action.type){
        case INCREMENT:
            return {...state, post: state.post + 1}
        case DECREMENT:
            return {...state, post: state.post - 1}
        case INCREASE_BY:
            return {...state, post: state.post + action.payload}
        case DECREASE_BY:
            return {...state, post: state.post - action.payload}
        default:
            return state
    }
}

// What redux will do ??

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
console.log(store)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
    postCountElement.innerText = store.getState().post
})

postCountElement.innerText = store.getState().post

store.dispatch({type: DECREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREASE_BY, payload: 10})
store.dispatch({type: DECREASE_BY, payload: 7})

setTimeout(()=>{
    store.dispatch({type: DECREMENT})
}, 4000)

postCountElement.addEventListener('click', () => {
    store.dispatch({type: INCREMENT})
})

// unsubscribe()

// console.log(store.getState())
// store.dispatch({type: "post/decrement"})
// console.log(store.getState())

// reduxState = reducer(reduxState, {type: "post/increment"})
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: "post/increment"})
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: "post/decrement"})
// console.log(reduxState)
// reduxState = reducer(reduxState, {type: "post/incrementBy", payload: 10})
// console.log(reduxState)

// let prevState = state

// function increment(){
//     //*** Mutating State ***//
//     // state.count = state.count + 1

//     //*** Not Mutating state ***//
//     state = {...state, count: state.count + 1}
// }

// increment()
// console.log(state)
// increment()
// console.log(state)
// increment()
// console.log(state)