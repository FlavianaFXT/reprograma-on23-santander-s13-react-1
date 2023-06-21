import Cardstitle from "./CardsTitle";
import Cardsimage from "./Cardsimage";
import titania from "./titania.jpeg";
import familia from "../assets/familia.jpeg";
import minhafilha from "../assets/ana.jpeg";
import mydogs from "../assets/randi-e-pandora.jpeg";
import nature from "../assets/natureza.jpeg";
import animals from "../assets/jumentinho.jpeg";
import chocolate from "../assets/chocolate.jpg";
import netflix from "../assets/netflix.jpg";
import DescriptionCard from "./DescriptionCard";

function Cards(props){
    return(
    <>
        <div className="card">
            <Cardstitle text="Familia"/>
            <Cardsimage image={familia}/>
            <DescriptionCard text="Tanto a de origem, como a que fui presenteada com o casamento, quanto a que formei com meu esposo."/>
        </div>

        <div className="card">
            <Cardstitle text="Minha filha"/>
            <Cardsimage image={minhafilha}/>
            <DescriptionCard text="Maior presente que Deus me deu!!! Não foi planejada, mas muito desejada!!!"/>
        </div>

        <div className="card">
            <Cardstitle text="Minhas doguíneas"/>
            <Cardsimage image={mydogs}/>
            <DescriptionCard text="Randi e Pandora. Duas pastor bem trelosas, mas muito amorosas. Me estressam, mas me alegram rsrrrsrs"/>
        </div>

        <div className="card">
            <Cardstitle text="Natureza"/>
            <Cardsimage image={nature}/>
            <DescriptionCard text="Onde mais relaxo minha cabeça."/>
        </div>

        <div className="card">
            <Cardstitle text="Animais"/>
            <Cardsimage image={animals}/>
            <DescriptionCard text="Amo todo tipo de bicho!"/>
        </div>

        <div className="card">
            <Cardstitle text="Chocolate"/>
            <Cardsimage image={chocolate}/>
            <DescriptionCard text="sem dúvidas a comida que mais amo e nao viveria sem. Tudo com chocolate é muito bom!"/>
        </div>

        <div className="card">
            <Cardstitle text="Cama e Netflix"/>
            <Cardsimage image={netflix}/>
            <DescriptionCard text="sem comentários! Bom demais!"/>
        </div>
    </>
    )
}

export default Cards;