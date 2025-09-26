import { Link } from 'react-router-dom'


export default function Landing(){
return (
<div className="hero">
<div className="hero-card">
<h1 style={{marginTop:0}}>Paradise Nursery</h1>
<p>We curate beautiful, easy-care houseplants for every space. From sunlit balconies to cozy desks, find your next green companion and learn how to help it thrive.</p>
<Link to="/products"><button className="btn">Get Started</button></Link>
</div>
</div>
)
}