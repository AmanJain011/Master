let reduxState = {
    count: 0,
    age: 21,
    name: 'Aman Jain',
}

// reducer
function reducer(state){
    return {...state, count: state.count + 1}
}

// What redux will do ??
reduxState = reducer(reduxState)

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