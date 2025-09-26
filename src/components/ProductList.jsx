import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectItems } from '../features/cart/CartSlice'


// Sample catalog grouped by category
const plantsArray = [
{
category: 'Low Light Favorites',
plants: [
{ name: 'ZZ Plant', image: 'https://www.ugaoo.com/cdn/shop/files/1_af764eda-b091-4320-953d-e4de57387c54.jpg?v=1741698812&width=1000', description: 'Tolerant, glossy leaves—great for beginners.', cost: '$24.99' },
{ name: 'Snake Plant', image: 'https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w', description: 'Architectural, thrives on neglect.', cost: '$19.99' },
]
},
{
category: 'Pet Friendly',
plants: [
{ name: 'Parlor Palm', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHpQ_TOq373cy2uIM7UEu6SiAGnSt8zr0PEb4CygI4Gj1eU4SG3esPV4Rj8ub6nY44j1YsNHERecfBaH0tnJoDlUsy8qxcCEt_81LIFHTzKw', description: 'Airy fronds, gentle and safe.', cost: '$18.00' },
{ name: 'Calathea', image: 'https://boxloja-std-cdn-r2.minhaboxloja.com/lojas/9s0e9/produtos/19105ad1-189c-46fc-8e0b-42623d91e31b.png', description: 'Vibrant foliage, loves humidity.', cost: '$22.50' },
]
},
{
category: 'Sun Lovers',
plants: [
{ name: 'Aloe Vera', image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/04/aloe-vera-GettyImages-1473547826-Thumb.jpg', description: 'Soothing sap, bright window friend.', cost: '$12.00' },
{ name: 'Jade Plant', image: 'https://plantorbit.com/cdn/shop/files/w-Photoroom_27.jpg?v=1754241227', description: 'Classic succulent, thick leaves.', cost: '$16.75' },
]
}
]


export default function ProductList(){
const dispatch = useDispatch()
const cartItems = useSelector(selectItems)
const [addedToCart, setAddedToCart] = useState({})


const addedSet = useMemo(() => new Set(cartItems.map(i => i.name)), [cartItems])


const handleAddToCart = (plant) => {
dispatch(addItem(plant))
setAddedToCart(prev => ({ ...prev, [plant.name]: true }))
}


return (
<div className="container">
{plantsArray.map((category, index) => (
<div key={index} className="product-grid">
<h2 className="section-title">{category.category}</h2>
<div className="product-list">
{category.plants.map((plant, plantIndex) => (
<div className="product-card" key={plantIndex}>
<img className="product-image" src={plant.image} alt={plant.name} />
<div className="product-title">{plant.name}</div>
<div className="product-description">{plant.description}</div>
<div className="product-cost">{plant.cost}</div>
<button
className="btn product-button"
onClick={() => handleAddToCart(plant)}
disabled={addedToCart[plant.name] || addedSet.has(plant.name)}
>
{addedToCart[plant.name] || addedSet.has(plant.name) ? 'Added to Cart' : 'Add to Cart'}
</button>
</div>
))}
</div>
</div>
))}
</div>
)
}