import {createStore} from 'redux'
import { myCreateStore } from './my-redux'
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
const myStore = myCreateStore(reducer)

console.log(store)
console.log(myStore)

const unsubscribe1 = myStore.subscribe(() => {
    console.log(myStore.getState())
    postCountElement.innerText = myStore.getState().post
})

const unsubscribe2 = myStore.subscribe(()=>{
   console.log("Hiii") 
})

const unsubscribe3 = myStore.subscribe(()=>{
    console.log("Hello")
})

postCountElement.innerText = myStore.getState().post

myStore.dispatch({type: DECREMENT})
myStore.dispatch({type: INCREMENT})
myStore.dispatch({type: INCREASE_BY, payload: 10})
myStore.dispatch({type: DECREASE_BY, payload: 7})

setTimeout(()=>{
    myStore.dispatch({type: DECREMENT})
}, 4000)

postCountElement.addEventListener('click', () => {
    myStore.dispatch({type: INCREMENT})
})

unsubscribe3()

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