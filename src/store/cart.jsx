import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        book(state, action){
            const {productId, quantity} = action.payload;
            state.items.push({productId, quantity})
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if (indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
            state.items.push({ productId, quantity });
        }}
    }
})
export const {book} = cartSlice.actions;
export default cartSlice.reducer;