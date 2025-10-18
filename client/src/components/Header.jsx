
export const Header = ()=>{

return (
    <div className="header flex justify-between p-4">
        <div className="name">Tech corner</div>
        <nav>
            <ul className=" flex gap-2">
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
            </ul>
        </nav>
    </div>
)
}