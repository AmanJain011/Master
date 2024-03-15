//Action Type
const ADD_CART_ITEM = 'cart/addItem'
const REMOVE_CART_ITEM = 'cart/removeItem'
const INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'
import {original, produce} from 'immer'

//Action Creators
export function addCartItem(product){
    return {
        type: ADD_CART_ITEM,
        payload: product
    }
}

export function removeCartItem(productId){
    return {
        type: REMOVE_CART_ITEM,
        payload: {productId}
    }
}

export function decreaseCartItemQuantity(productId){
    return {
        type: DECREASE_ITEM_QUANTITY,
        payload: {productId}
    }
}

export function increaseCartItemQuantity(productId){
    return {
        type: INCREASE_ITEM_QUANTITY,
        payload: {productId}
    }
}

//Reducer
export default function cartReducer(originalState=[], action){
    return produce(originalState, (state)=>{
        const existingItemIndex = state.findIndex(
            (cartItem) => cartItem.productId === action.payload.productId
        )
        switch(action.type){
            case ADD_CART_ITEM:
                if(existingItemIndex !== -1){
                    state[existingItemIndex].quantity += 1;
                }else{
                    state.push({...action.payload, quantity: 1})
                }
                break
            case REMOVE_CART_ITEM:
                state.splice(existingItemIndex, 1)
                break
            case INCREASE_ITEM_QUANTITY:
                state[existingItemIndex].quantity += 1;
                break
            case DECREASE_ITEM_QUANTITY:
                state[existingItemIndex].quantity -= 1;
                if(state[existingItemIndex].quantity === 0){
                    state.splice(existingItemIndex, 1)
                }
        }
    })
}