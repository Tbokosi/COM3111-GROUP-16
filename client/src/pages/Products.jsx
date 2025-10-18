import { useEffect, useState } from "react"
import { Header } from "../components/Header";
import { ProductComponent } from "../components/Product";
import { fetchF } from "../utils/fetch";


export const Products = () =>{

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async ()=>{
         return fetchF("products", {
            method: "get"
         })
    }

    useEffect(()=>{
     fetchProducts()
     .then((res)=> setProducts(res.data))
     .catch((err)=> {
        console.log(err)
        setError(err.message)
     })
     .finally(setLoading(false))
    }, [])

    return(
        <div className="products">
            <Header></Header>
            
 <div className="products p-4 flex flex-col justify-center items-center">
    <h2 className = "our products">Our products</h2>
               <div className="">
                {loading ? <p>loading products....</p>:
                (
                    error ? ({error}) : (
                        products.length === 0 ? <p> No products</p> :
                        (
                            products.map((product)=>{
                                return(
                                    <ProductComponent key = {product.id} product = {product}></ProductComponent>
                                )
                            })
                        )
                    )
                )}
            </div>
 </div>
        </div>
    )
}