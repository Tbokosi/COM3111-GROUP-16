
export const Header = ()=>{

return (
    <div className="header flex justify-between p-4">
        <div className="name"><h1>TECH-CORNER</h1>
        <p>HOME OF ALL ELECTRONIC GADGETS</p></div>
        <nav>
            <ul className=" flex gap-2">
                <li><a href="/HomePage">Home</a></li>
                <li><a href="/ProductsPage">Products</a></li>
                <li><a href="/CartPage">Cart</a></li>
                <li><a href="/ProfilePage">Profile</a></li>
                <li><a href="SignUpPage">Sign-Up</a></li>
            </ul>
        </nav>
    </div>
)
}