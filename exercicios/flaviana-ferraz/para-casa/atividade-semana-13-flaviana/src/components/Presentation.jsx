import myphoto from "../assets/flaviana.jpeg";

function Presentation(){
    return(
    <div className="presentation">
        <h2>Olá, eu sou a Flaviana!!!</h2>
        <p>Gestora Ambiental em transição de carreira para a tecnologia(Desenvolvedora Front End), empreendendo no ramo alimentício enquanto outra oportunidade não chega.</p>
        <p>Trago aqui minhas principais paixões nessa vida. 💗</p>
        <img className="presentationImage" src={myphoto} alt="foto de Flaviana, autora do site"/>
    </div>
    )
}

export default Presentation;