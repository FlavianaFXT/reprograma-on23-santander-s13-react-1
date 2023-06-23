import Subtitle from "./Subtitle";
import myphoto from "../assets/flaviana.jpeg";
import Text from "./Text";

function Bio(){
    return(
    <div className="presentation">
        <Subtitle subtitle="Olá, eu sou a Flaviana!!!"/>
        <Text description = "Gestora Ambiental em transição de carreira para a tecnologia (Desenvolvedora Front End), empreendendo no ramo alimentício enquanto outra oportunidade não chega."/>
        <Text description="Trago aqui minhas principais paixões nessa vida. 💗"/>
        <img className="presentationImage" src={myphoto} alt="foto de Flaviana, autora do site"/>
    </div>
    )
}

export default Bio;