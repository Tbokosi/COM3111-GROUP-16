import { useState } from "react"


export const ProductComponent = (product)=>{
    // const [product, setProduct] = useState(null);

    return (
        <div className="product flex md:flex-row p-2">
            <img src="" alt="" />
            <div className="details">
 <h2>{product.name}</h2>
 <p>{product.details}</p>
 <div className="pricing">
    <p className="font-bold">MK {product.price}24</p>
    <p>remaining: 5 {product.remaining}</p>
 </div>
<button>Add to cart</button>
         </div>
        </div>
    )
}