import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../features/cart/CartSlice'


export default function Header(){
const totalQty = useSelector(selectTotalQuantity)
return (
<header className="header">
<Link to="/" style={{fontSize:18,fontWeight:800}}>🌿 Paradise Nursery</Link>
<nav className="nav">
<NavLink to="/products">Plants</NavLink>
<NavLink to="/cart" className="cart">
<span aria-hidden>🛒</span>
<span>Cart</span>
<span className="badge" aria-label={`Items in cart: ${totalQty}`}>{totalQty}</span>
</NavLink>
</nav>
</header>
)
}