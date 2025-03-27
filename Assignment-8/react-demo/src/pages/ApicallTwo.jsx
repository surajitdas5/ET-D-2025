import axios from "axios"
import { useState, useEffect } from "react"
import ProductCard from "../components/ProductCard"

const ApicallTwo = () => {
    let url = "https://fakestoreapi.com/products/"
    const [id, setId] = useState(1)
    const [ product, setProduct ] = useState({})

    const getProduct = async() => {
        url += id
        let data = await axios.get(url);
        setProduct(data.data)
    }
    const changeId = () => {
        if(id>=20)
            setId(1)
        else
            setId(id+1)
    }

    useEffect(()=>{
        getProduct()
    }, [id])

    return (
    <div className="container">
        <ProductCard product={product} />
        <button className="btn btn-primary" onClick={changeId}>Next {id}</button>
    </div>
  )
}

export default ApicallTwo