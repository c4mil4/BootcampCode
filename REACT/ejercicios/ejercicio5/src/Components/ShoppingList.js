export default function ShoppingList(props) {

    const {category,products} = props;

    return (
        <div className="conteiner">
            <h2>{category}</h2>
            <ul className="list-group">{products.map(product => {
                    return (<li key={product.id} className="list-group-item">
                                {product.name} {product.id} {product.brand} {product.model}. Price: {product.price}
                            </li>)
                })}
            </ul>
        </div>
    )
}