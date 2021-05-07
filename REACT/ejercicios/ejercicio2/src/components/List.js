export default function List(props) {

    const { category, products } = props;

    return (
        <div className="container">
            <h2 className="text-info font-weight-bold">{category}</h2>
            <ul className="list-group text-md font-weight-bold">
                {products.map(product => {
                    return (<li key={product.id} className="list-group-item">
                        {product.brand}, {product.name} {product.model}- Total Price: {product.price}€
                    </li>)
                })}
            </ul>
        </div>
    )
};

//JSON.stringifi te devuelve string en objeto Json = te lo convierte en json
//map agarra el array y genera un nuevo array con el mismo numero de elementos que el original pero elemento por ellemento lo modifica