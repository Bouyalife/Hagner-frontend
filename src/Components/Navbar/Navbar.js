import "./Navbar.css";

export default function Navbar(){
    return(
        <div id="navbar">
            <a id="links" href="/">Home</a>
            <a id="links" href="/AddEntity">Add new product</a>
            <a id="links" href="/search">Search products</a>
            <a id="links" href="/AllEntities">All Products</a>
        </div>
    )
}
