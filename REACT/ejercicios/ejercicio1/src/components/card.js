export default function Card(props) {
    return (
            <div className="card w-50">
                <img src="..." className="card-img-top" alt="heeaders"/>
                <div className="card-body">
                    <h5 className="card-title"{props.title}></h5>
                    <p className="card-text"{props.paragraph}></p>
                    <a href="#" className="btn btn-primary"{props.linkText}></a>
                </div>
            </div>
    )
}