function Card(props){
    return(
        <div className="card">
            <h3>{props.text}</h3> 
            <img className="card-image" src={props.image} alt={props.alt}/>
            <p className="caption">{props.caption}</p>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default Card;