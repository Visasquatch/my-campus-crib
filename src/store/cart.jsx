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

/*                                                  20:24
const initialState = {
  bookings: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    book(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.bookings.findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        // Existing product, update quantity
        state.bookings = [
          ...state.bookings.slice(0, indexProductId),
          { ...state.bookings[indexProductId], quantity: state.bookings[indexProductId].quantity + quantity },
          ...state.bookings.slice(indexProductId + 1)
        ];
      } else {
        // New product, add to cart
        state.bookings.push({ productId, quantity });
      }
    }
  }
});
*/