import { createSlice } from "@reduxjs/toolkit"

const findItemIndex = (state, action) => state.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
)

const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // switch case to object
        addCartItem(state, action){
            existingItemIndex = findItemIndex(state, action)
            if(existingItemIndex !== -1){
                state[existingItemIndex].quantity += 1;
            }else{
                state.push({...action.payload, quantity: 1})
            }
        },
        removeCartItem(state, action){
            existingItemIndex = findItemIndex(state, action)
            state.splice(existingItemIndex, 1)
        },
        decreaseCartItemQuantity(state, action){
            existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1;
                if(state[existingItemIndex].quantity === 0){
                    state.splice(existingItemIndex, 1)
                }
        },
        increaseCartItemQuantity(state, action){
            existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity += 1;
        }
    }
})

export const {addCartItem, removeCartItem, decreaseCartItemQuantity, increaseCartItemQuantity} = slice.actions //destructing
export default slice.reducer