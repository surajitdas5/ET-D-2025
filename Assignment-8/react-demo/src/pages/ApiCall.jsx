import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

function ApiCall(){
    const [ products, setProducts ] = useState([])

    const url = "https://fakestoreapi.com/products"
    const getProducts = async() => {
        let data = await axios.get(url)
        console.log(data.data);
        setProducts(data.data)
    }

    // getProducts()
    useEffect(()=>{
        getProducts()
    }, [])

    return(
        <div className="container my-3">
            <div className="d-flex flex-wrap">
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ApiCall;