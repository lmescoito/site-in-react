import React from 'react';

const Contatos = props => {
    return (
            <div id='contatos' className='container-fluid bg-grey'>
                <h2 className='text-center'>FALE CONOSCO</h2>
                <div className='row'>
                    <div className='col-sm-5'>
                        <p>Entre em Contato, nós retornaremos em até 24 horas.</p>
                        <p><span className='glyphicon glyphicon-map-marker'></span> Belém, PA</p>
                        <p><span className='glyphicon glyphicon-phone'></span> +00 1515151515</p>
                        <p><span className='glyphicon glyphicon-envelope'></span> myemail@something.com</p>
                    </div>
                    <div className='col-sm-7 slide'>
                        <div className='row'>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
                            </div>
                            <div className='col-sm-6 form-group'>
                                <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                            </div>
                        </div>
                        <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br />
                        <div className='row'>
                            <div className='col-sm-12 form-group'>
                                <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Contatos