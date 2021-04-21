/* export default function List(props){
    return(
        <>
            <h1>{props.category}</h1>
            <ul>
                {props.prodcuts,map(product => {
                return<li>{product.id} {product.name} {product.brand} {product.model}. Price: {product.price}</li>)
            })};
            </ul>
        </>
    ) 
}*/

export default function List(props) {
    const {category, product} = props;

    return ( 
        <div className="container">
            <h2>{category}</h2>
            <ul className="list-group">{product.map(({id, item, brand, model, price}) => {
                return (<li key={product.id} className="list-group-item"> 
                         {product.item} {product.brand} {product.model}. Price: {product.price}
                        </li>)
                })};
            </ul>
        </div>
    )
}