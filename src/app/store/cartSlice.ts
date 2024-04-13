import { PayloadAction, createSlice } from '@reduxjs/toolkit'
export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    myCart: [] as CartItem[],
  },
  reducers: {
    // add product to cart and increase the quantity if exists
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.myCart.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.myCart.push({ ...action.payload, quantity: 1 })
      }
    },
    // remove product from cart and reduce quantity if existes
    removeFromCart: (state, action: PayloadAction<number>) => {
      const targetItem = state.myCart.find(item => item.id === action.payload)
      if (targetItem) {
        if (targetItem.quantity === 1) {
          state.myCart.splice(state.myCart.indexOf(targetItem), 1)
        } else {
          targetItem.quantity -= 1
        }
      }
    },
  },
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
