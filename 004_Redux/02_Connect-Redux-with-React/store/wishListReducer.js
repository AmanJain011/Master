// Action Type
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// Action Creator
export function addWishListItem(productId){
    return {
        type: WISHLIST_ADD_ITEM,
        payload: {productId, quantity}
    }
}

export function removeWishListItem(productId){
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: {productId}
    }
}

// Reducer
export default function wishListReducer(state=[], action){
    switch(action.type){
        case WISHLIST_ADD_ITEM:
            return [...state, action.payload]
        case WISHLIST_REMOVE_ITEM:
            return state.filter((item)=>{
                return item.productId !== action.payload.productId
            })
        default:
            return state
    }
}