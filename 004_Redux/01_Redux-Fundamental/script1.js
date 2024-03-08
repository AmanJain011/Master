import { productsList } from "./productsList";
import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

const initialState = {
    products : productsList,
    cartItems: [],
    wishList: []
}

const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer
})

const ADD_CART_ITEM = 'cart/addItem'
const REMOVE_CART_ITEM = 'cart/removeItem'
const INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'

const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// function reducer(state = initialState, action){
//     switch(action.type){
//         case ADD_CART_ITEM:
//             return {...state, cartItems: [...state.cartItems, action.payload]}
//         case  REMOVE_CART_ITEM:
//             return {...state, cartItems: state.cartItems.filter((cartItem)=>{
//                 return action.payload.productId !== cartItem.productId
//             })}
//         case INCREASE_ITEM_QUANTITY:
//             return {... state, cartItems: state.cartItems.map((cartItem)=>{
//                 if(cartItem.productId === action.payload.productId){
//                     return {...cartItem, quantity: cartItem.quantity+1}
//                 }
//                 return cartItem
//             })}
//         case DECREASE_ITEM_QUANTITY:
//             return {...state, cartItems: state.cartItems.map((cartItem)=>{
//                 if(cartItem.productId === action.payload.productId){
//                     return {...cartItem, quantity: cartItem.quantity-1}
//                 }
//                 return cartItem
//             }).filter((cartItem)=>cartItem.quantity>0)}
//         case WISHLIST_ADD_ITEM:
//             return {...state, wishList: [...state.wishList, action.payload]}
//         case WISHLIST_REMOVE_ITEM:
//             return {...state, wishList: state.wishList.filter((item)=>{
//                 return item.productId !== action.payload.productId
//             })}
//         default:
//             return state
//     }
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

// console.log(store)

store.dispatch({type: ADD_CART_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 3, quantity: 1}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 4, quantity: 1}})
store.dispatch({type: ADD_CART_ITEM, payload: {productId: 7, quantity: 1}})
store.dispatch({type: REMOVE_CART_ITEM, payload: {productId: 1}})
store.dispatch({type: INCREASE_ITEM_QUANTITY, payload: {productId: 4}})
store.dispatch({type: DECREASE_ITEM_QUANTITY, payload: {productId: 7}})
store.dispatch({type: WISHLIST_ADD_ITEM, payload:{productId: 7, quantity: 1}})
store.dispatch({type: WISHLIST_ADD_ITEM, payload:{productId: 2, quantity: 1}})
store.dispatch({type: WISHLIST_ADD_ITEM, payload:{productId: 3, quantity: 1}})
store.dispatch({type: WISHLIST_ADD_ITEM, payload:{productId: 4, quantity: 1}})
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 7}})

console.log(store.getState())

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
// store.dispatch(action)
// store.getState()
// store.subscribe(callback)