//Action Type
const ADD_CART_ITEM = 'cart/addItem'
const REMOVE_CART_ITEM = 'cart/removeItem'
const INCREASE_ITEM_QUANTITY = 'cart/increaseItemQuantity'
const DECREASE_ITEM_QUANTITY = 'cart/decreaseItemQuantity'

//Action Creators
export function addCartItem(productId, quantity=1){
    return {
        type: ADD_CART_ITEM,
        payload: {productId, quantity}
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
export default function cartReducer(state=[], action){
    switch(action.type){
        case ADD_CART_ITEM:
            return [...state, action.payload]
        case  REMOVE_CART_ITEM:
            return state.filter((cartItem)=>{
                return action.payload.productId !== cartItem.productId
            })
        case INCREASE_ITEM_QUANTITY:
            return state.map((cartItem)=>{
                if(cartItem.productId === action.payload.productId){
                    return {...cartItem, quantity: cartItem.quantity+1}
                }
                return cartItem
            })
        case DECREASE_ITEM_QUANTITY:
            return state.map((cartItem)=>{
                if(cartItem.productId === action.payload.productId){
                    return {...cartItem, quantity: cartItem.quantity-1}
                }
                return cartItem
            }).filter((cartItem)=>cartItem.quantity>0)
        default:
            return state
    }
}