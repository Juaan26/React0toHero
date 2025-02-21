import './Products.css'

export const Products = ({ products }) => {
    return (
        <div className="products">
            {
                products.map(product => (
                    <li key={ product.id } className="product">
                        <img src={ product.thumbnail } alt={ product.title } />
                        <div className="product-title"><strong>{ product.title }</strong> - ${ product.price }</div>

                        <div>
                            <button className="product-button">View Product</button>
                        </div>
                    </li>
                ))
            }
        </div>
    );
}
