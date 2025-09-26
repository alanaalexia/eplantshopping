import { useDispatch, useSelector } from 'react-redux'
import { selectItems, selectTotalCost, selectTotalQuantity, updateQuantity, removeItem } from '../features/cart/CartSlice'
import { Link } from 'react-router-dom'


export default function CartItems(){
const items = useSelector(selectItems)
const totalQty = useSelector(selectTotalQuantity)
const totalCost = useSelector(selectTotalCost)
const dispatch = useDispatch()


const currency = (v) => `$${v.toFixed(2)}`


const handleIncrement = (name, currentQty) => {
dispatch(updateQuantity({ name, amount: currentQty + 1 }))
}
const handleDecrement = (name, currentQty) => {
if (currentQty > 1) {
dispatch(updateQuantity({ name, amount: currentQty - 1 }))
} else {
dispatch(removeItem(name))
}
}
const handleRemove = (name) => dispatch(removeItem(name))


const itemSubtotal = (item) => {
const price = parseFloat(String(item.cost).replace(/[^0-9.]/g, '')) || 0
return price * item.quantity
}


const handleCheckoutShopping = () => {
alert('Coming Soon')
}


return (
<div className="cart-wrap">
<div className="cart-summary">
<div><strong>Total items:</strong> {totalQty}</div>
<div><strong>Total cost:</strong> {currency(totalCost)}</div>
<div style={{display:'flex',gap:8}}>
<Link to="/products"><button className="btn btn-outline">Continue Shopping</button></Link>
<button className="btn" onClick={handleCheckoutShopping}>Checkout</button>
</div>
</div>


{items.length === 0 ? (
<p style={{marginTop:16}}>Your cart is empty.</p>
) : (
<table className="cart-table">
<thead>
<tr>
<th style={{width:72}}>Thumbnail</th>
<th>Plant</th>
<th>Unit Price</th>
<th>Qty</th>
<th>Subtotal</th>
<th></th>
</tr>
</thead>
<tbody>
{items.map(item => (
<tr key={item.name}>
<td><img src={item.image} alt={item.name} style={{width:64,height:64,objectFit:'cover',borderRadius:8}}/></td>
<td>{item.name}</td>
<td>{item.cost}</td>
<td>
<div className="qty" role="group" aria-label={`Quantity controls for ${item.name}`}>
<button onClick={() => handleDecrement(item.name, item.quantity)} aria-label={`Decrease ${item.name}`}>–</button>
<span aria-live="polite">{item.quantity}</span>
<button onClick={() => handleIncrement(item.name, item.quantity)} aria-label={`Increase ${item.name}`}>+</button>
</div>
</td>
<td>{currency(itemSubtotal(item))}</td>
<td>
<button className="btn btn-outline" onClick={() => handleRemove(item.name)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
)}
</div>
)
}