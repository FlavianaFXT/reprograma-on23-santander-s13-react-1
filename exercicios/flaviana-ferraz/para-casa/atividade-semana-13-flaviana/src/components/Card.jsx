import Text from "./Text";

function Card(props){
    return(
        <div className="card">
            <h3>{props.text}</h3> 
            <img className="card-image" src={props.image} alt={props.alt}/>
            <Text class="caption" description={props.caption}/>
            <Text class="description" description={props.description}/>
        </div>
    )
}

export default Card;