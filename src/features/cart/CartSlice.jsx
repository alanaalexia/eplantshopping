import { createSlice } from '@reduxjs/toolkit'


const initialState = {
items: [], // { name, image, cost: "$12.99", quantity: 1 }
}


const slice = createSlice({
name: 'cart',
initialState,
reducers: {
addItem: (state, action) => {
const item = action.payload
const exists = state.items.find(i => i.name === item.name)
if (exists) {
exists.quantity += 1
} else {
state.items.push({ ...item, quantity: 1 })
}
},
removeItem: (state, action) => {
const name = action.payload
state.items = state.items.filter(i => i.name !== name)
},
updateQuantity: (state, action) => {
const { name, amount } = action.payload // amount is the new quantity
const item = state.items.find(i => i.name === name)
if (item) {
item.quantity = amount
if (item.quantity <= 0) {
state.items = state.items.filter(i => i.name !== name)
}
}
},
clearCart: (state) => { state.items = [] },
}
})


export const { addItem, removeItem, updateQuantity, clearCart } = slice.actions


// Selectors
export const selectItems = (state) => state.cart.items
export const selectTotalQuantity = (state) => state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
export const selectTotalCost = (state) => state.cart.items.reduce((sum, i) => {
const price = parseFloat(String(i.cost).replace(/[^0-9.]/g, '')) || 0
return sum + price * i.quantity
}, 0)


export default slice.reducer