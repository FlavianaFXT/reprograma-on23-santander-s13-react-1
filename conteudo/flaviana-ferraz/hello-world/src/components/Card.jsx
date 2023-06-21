import Title from "./Title"
import Subtitle from "./Subtitle"
import titania from "../../src/assets/titania.jpeg"
import Image from "./Image"

function Card(){
    return(
        <div className="cards-container">
            <Title text="Mahoutsukay no Yome"/>
            <Subtitle>2017</Subtitle>
            <Image class="image" caption="Titania-Rainha das Fadas" image={titania}/>
        </div>
    )
}

export default Card;