import React from 'react';

const Servicos = props => {
    return (
        <div id='services' className='container-fluid text-center'>
            <h2>CURSOS</h2>
            <h4>O que oferecemos!!</h4>
            <br />
            <div className='row'>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-home logo slide'></span>
                    <h4>CURSOS ON LINE</h4>
                    <p>Conteúdo desenvolvido no formato de videoaulas, ideais para quem deseja se destacar no mercado de trabalho e quer aprender novas habilidades para evoluir profissionalmente.</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-user logo slide'></span>
                    <h4>CURSOS DE ESPECIALIZAÇÃO</h4>
                    <p>Caráter Lato Sensu (Especialização)</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-lock logo slide'></span>
                    <h4>PÓS-GRADUAÇÃO</h4>
                    <p>Presencial</p>
                    <p>EAD</p>
                </div>
            </div>
            <br /><br />
            <div className='row'>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-road logo slide'></span>
                    <h4>IN COMPANY</h4>
                    <p>As especializações no formato In Company são estruturados exatamente para atender demandas específicas de organizações, empresas de terceiro setor e governo e mantém toda a qualidade e credibilidade de nossa instituição, com professores renomados e um ensino de alto padrão.</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-certificate logo slide'></span>
                    <h4>CERTIFICADOS</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
                <div className='col-sm-4'>
                    <span className='glyphicon glyphicon-flag logo slide'></span>
                    <h4>CURSOS LIVRES</h4>
                    <p>Lorem ipsum dolor sit amet..</p>
                </div>
            </div>
        </div>
    )
}
export default Servicos;