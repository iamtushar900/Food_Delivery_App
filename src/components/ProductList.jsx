import '../App.css';



const alertClick = () => {
    alert('Check The Item🍜 Is Added In the Cart Section 🛒');
};
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className='pro' >
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button id='cartbtn'
                                    onClick={() => { addToCart(productItem); alertClick()}}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList