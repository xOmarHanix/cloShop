import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItmes : [],
    totalAmount : 0,
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem : (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItmes.find(item => item.id === newItem.id);
            state.totalQuantity++;

            if(!existingItem) {
                state.cartItmes.push({
                    id : newItem.id,
                    productName : newItem.productName,
                    price : newItem.price,
                    totalPrice : newItem.price,
                    img : newItem.img,
                    quantity : 1
                })
            } else {
                existingItem.quantity++;
                existingItem.totalprice = Number(existingItem.totalprice) + Number(newItem.price)  
            }


            state.totalAmount = state.cartItmes.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ),0
            )
        },

        deleteItem : (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItmes.find((item) => item.id === id)

            if(existingItem) {
                state.cartItmes = state.cartItmes.filter((item) => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
            state.totalAmount = state.cartItmes.reduce((total, item) => (
                total + Number(item.price) * Number(item.quantity)
            ),0
            )
        }
    }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;