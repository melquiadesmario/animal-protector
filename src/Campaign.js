import React, { Component } from 'react'

import base from './base'

class Campaign extends Component {
    constructor(props){
        super(props)
        this.state = {
            campanhas: {}
        }
    }

    componentDidMount(){
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }

    renderCampanha(campanha) {
        return(
            <section className='about text-center' id='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='container-doacao'>
                            <div className="panel panel-primary">
                                <div className="panel-heading header-panel">
                                    { campanha.nome }
                                </div>
                                <div className='body-panel'>
                                    <div className="panel-body margin-body">
                                        { campanha.descricao }
                                    </div>
                                    
                                    { campanha.tipo === 'dinheiro' &&
                                        <div>
                                            <div className='container'>
                                                <div className='container-bar'>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-info progress-bar-striped andamento" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">60% Complete</span>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        <strong>Meta: R$ 5.000,00 / Atingidos: R$ 3.000,00</strong>
                                                    </p>
                                                </div>
                                            </div>
                        
                                            <div className='margin-contribuir'>
                                                <button className='btn btn-success btn-lg'>
                                                    Contribuir
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    
                                    { campanha.tipo === 'produtos' &&
                                        <div>
                                            <h4>Como doar:</h4>
                                            <p><strong>{ campanha.comoDoar }</strong></p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
    render(){
        return(
            <div>
                {/* about section */}
                <section className='about text-center' id='about'>
                    <div className='container'>
                        <div className='row'>
                            <h2>Campanhas</h2>
                            <h4>Conheça melhor nossas campanhas e nos ajude a melhorar a vida desses animais carentes.</h4>
                            <div className='col-md-4 col-sm-6'>
                                <div className='single-about-detail clearfix'>
                                    <div className='about-img'>
                                        <img className='img-responsive' src='img/item1.jpg' alt='' />
                                    </div>
                                    <div className='about-details'>
                                        <div className='pentagon-text'>
                                            <h1>C</h1>
                                        </div>
                                        <h3>Children’s specialist</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end of about section */}

                {
                    Object
                    .keys(this.state.campanhas)
                    .map(key => this.renderCampanha(this.state.campanhas[key]))
                }

            </div>
        )
    }
}

export default Campaign
