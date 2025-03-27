const ProductCard = ({ product }) => {
    const { image, title, price } = product
  return (
    <div className="card m-2" style={{width: '250px'}}>
        <img src={image} style={{height: '150px'}} />
        <div className="card-body">
            <p className="fw-semibold">{title}</p>
            <label>{price}</label>
        </div>
    </div>
  )
}

export default ProductCard