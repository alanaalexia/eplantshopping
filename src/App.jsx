import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Landing from './components/Landing'
import ProductList from './components/ProductList'
import CartItems from './components/CartItems'
import './assets/styles.css'


export default function App(){
return (
<>
<Header/>
<Routes>
<Route path="/" element={<Landing/>} />
<Route path="/products" element={<ProductList/>} />
<Route path="/cart" element={<CartItems/>} />
<Route path="*" element={<Navigate to="/" replace/>} />
</Routes>
</>
)}