// import { Servicos } from "../Componentes/Servicos"
// import { Contatos } from "../Componentes/Contatos"
import { Menu } from "../Componentes/Menu"

export const Home = () => {
    return (
        <>
            <Menu />
            <main>
                <h2 className="home1"> Inicio </h2>
                <p className="home2"> Destinamos nossa atenção ao auxilio para pessoas que nescessitam encontrar empregos de um jeito rápido e facil.</p> 
                <p className="home2"> Mantemos contatos com você através de nossas redes sociais, Instagram, Whatsapp e Email </p>
                <p className="home2"> além de que possuimos multi-serviços e todos os requisitos nescessarios para o trabalho desejado</p>
                </main>   

            <h3 className="fale">Fale conosco: </h3>
            <form action="/pagina-processa-dados-do-form" method="post">
            <div className="forms">
    <div>
        <label> Nome:</label>
        <input type="text" id="nome" />
    </div>
    <div>
        <label> E-mail:</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label> Mensagem:</label>
        <textarea></textarea>
    </div>
</div>
</form>      
        </>

    )
}
// HOME É A PAGINA INICIAL