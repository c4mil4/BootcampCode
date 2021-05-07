export default function List(props) {

    return (
        <div className="conteiner">
            <h2>{props.category}</h2>
            <ol className="list-group">
                {props.products.map(product => {
                    return (<li className="list-group-item">{product.name} {product.id} {product.brand} {product.model}. Price: {product.price}</li>)
                })}
            </ol>
        </div>
    )
}