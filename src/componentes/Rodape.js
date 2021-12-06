import React from 'react';
import { Link } from 'react-router-dom';

const Rodape = props =>{
    return(
        <footer className='container-fluid text-center'>
            <Link to ='/' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </Link>
            <p>Criado por Leonan Mescoito (lmescoito) <a href='https://github.com/lmescoito'  title='Visit w3schools'>https://github.com/lmescoito</a></p>
            <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
        </footer>
    )
}

export default Rodape;