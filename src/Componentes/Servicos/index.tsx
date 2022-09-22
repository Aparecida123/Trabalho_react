import { AiFillCaretRight } from 'react-icons/ai'
import {BiAbacus} from 'react-icons/bi'

import "./style.css";
import { Menu } from "../Menu"
export const Servicos = () => {
    return (
        <> 
            <Menu />
           <div className='servicos_container'>
                <h1 className='l2'><BiAbacus/> Serviços disponiveis</h1>

                <h1 className='l1'> <AiFillCaretRight /> Online tutor</h1>
                
                <div className='l3'>
                <h4>COMPETÊNCIAS NECESSÁRIAS</h4> 
                <p>Alunos ou profissionais com conhecimento robusto em qualquer assunto</p>
                <p>e com um nível de inglês escrito alto o suficiente para ministrar aulas online para alunos norte-americanos.</p>
                

                <div>
                    <h1 className='l1'> <AiFillCaretRight /> Surpevisor de produção</h1>
                    <h4> O PROFISSIONAL SERÁ RESPONSAVEL POR:</h4>
                
                <p>Supervisionar as atividades de produção da fábrica;</p>
                <p>Planejar e controlar o volume a ser produzido e qualidade e acompanhar a eficiência da mão de obra;</p>
                <p>Elaborar relatórios sobre o desempenho de produção e promover o uso adequado das instalações e equipamentos;</p>
                <p>Coordenar equipe nos processos de produção;</p>
                <p>Interpretar ordens de produção;</p> 
                <p>Programar máquinas e analisar relatórios diários para identificar desvios dos padrões,</p>
                <p>além de providenciar correções, garantindo o cumprimento das metas, eficiência e volume de fabricação;</p>
                </div>
                <div>
                    <h1 className='l1'> <AiFillCaretRight /> Vendedor consutivo </h1>  
                    <h4>COMPETÊNCIAS NECESSÁRIAS</h4>                
                    <p> Atendimento passivo e ativo de clientes que se cadastram no site para pedir informações sobre cursos da empresa;</p>
                    <p>Pós venda comercial para os clientes que adquiriram produtos</p>
                    <p>Trabalho ativo na base de clientes antigas via contato via whats app ou telefone.</p>
                 
                    <div>
                    <h1 className='l1'> <AiFillCaretRight /> Técnico ambiental</h1>
                <h4>COMPETÊNCIAS NECESSÁRIAS</h4>

                <p>Habilitação B;</p>
                <p>Experiência em processos de mobilização e saúde e segurança;</p>
                <p>Experiência em projetos de meio ambiente. </p>               
                </div>
                </div>
            </div>
            </div>
        </>
    )
}