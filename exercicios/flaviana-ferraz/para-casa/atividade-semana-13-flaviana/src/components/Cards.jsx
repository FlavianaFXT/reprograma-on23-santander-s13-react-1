import Card from "./Card";
import familia from "../assets/familia.jpeg";
import minhafilha from "../assets/ana.jpeg";
import mydogs from "../assets/randi-e-pandora.jpeg";
import nature from "../assets/natureza.jpeg";
import animals from "../assets/jumentinho.jpeg";
import chocolate from "../assets/chocolate.jpg";
import netflix from "../assets/netflix.jpg";
import books from "../assets/leitura.jpg";
import music from "../assets/música.jpg";


function Cards(){
    return(
    <>
        <Card text="👪 Familia" image={familia} alt="Foto de Flaviana, com seus pais, avó materna, esposo e filha" caption="Flaviana, seus pais, avó materna, esposo e filha." description="Tanto a de origem, como a que fui presenteada com o casamento, quanto a que formei com meu esposo."/>

        <Card text="💕 Filha" image={minhafilha} alt="Foto da filha de Flaviana segurando um preá" caption="Minha filha com seu amigo preá" description="Maior presente que Deus me deu!!! Não foi planejada, mas muito desejada!!!"/>

        <Card text="🐾 Minhas doguíneas" image={mydogs} alt="Foto das cachorras de Flaviana" caption="Randi e Pandora - minhas doguineas" description="Duas pastor bem trelosas, mas muito amorosas. Me estressam, mas me alegram rsrrrsrs"/>

        <Card text="🌵 Natureza" image={nature} alt="Foto de uma paisagem do bioma Caatinga" caption="Paisagem do bioma caatinga" description="Onde mais relaxo minha cabeça, esqueço dos problemas e me conecto com o divino."/>

        <Card text="🐠 Animais" image={animals} alt="Foto de um jumento" caption="Jumentinho de estimação de minha sogra." description="Amo todo tipo de bicho!Simplesmente."/>

        <Card text="🍫 Chocolate" image={chocolate} alt="Foto de barras de chocolates" caption="Chocolates" description="Sem dúvidas a comida que mais amo e não viveria sem. Tudo com chocolate é muito bom! Quer me ver feliz??? Chocolate nela!"/>

        <Card text="🏩 Cama e Netflix" image={netflix} alt="Foto de um gato deitado na cama com um computador e netflix conectada" caption="Gatíneo fofíneo me representando" description="Sem comentários! Bom demais! Programa de todos os meus domingos no meu day off."/>

        <Card text="📖 Livros" image={books} alt="Imagem de livros empilhados, estando o primeiro aberto." caption="Livros" description="A paixão pela leitura vem desde que me entendo por gente. Pra mim uma das coisas satisfatórias da vida é cheiro de livro novo, passar cada página e viajar nas histórias e conhecimentos."/>

        <Card text="🎶 Música" image={music} alt="Desenho de uma pessoa com sifras musicais saindo de sua cabeça" caption="Melhor representação de música" description="Outra paixão é a música. Praticamente tudo o que faço é com ela pra me inspirar, animar, consolar, celebrar, trabalhar...E sou muito eclética. Ouço todo tipo de música. O que vai definir qual vou ouvir hoje é o meu mood do dia."/>

    </> 
    )
}

export default Cards;