import React from 'react'

const Contacts = props => {
    return(
        <div>
            {/* map section */}
            <div className='api-map' id='contact'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 map' id='map'></div>
                    </div>
                </div>
            </div>
            {/* end of map section */}
            {/* contact section starts here */}
            <section className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='contact-caption-contatos clearfix'>
                            <div className='contact-heading text-center'>
                                <h2>contatos</h2>
                            </div>
                            <div className='col-md-5 contact-info text-left'>
                                <h3>informações:</h3>
                                <div className='info-detail'>
                                    <ul><li><i className='fa fa-calendar'></i><span>Segunda - Sexta-feira:</span> 9:30 AM to 6:30 PM</li></ul>
                                    <ul><li><i className='fa fa-map-marker'></i><span>Endereço:</span> Nova São Caitano, 439 - Cabugá</li></ul>
                                    <ul><li><i className='fa fa-phone'></i><span>Phone:</span> (81) 3736-xxxx</li></ul>
                                    <ul><li><i className='fa fa-envelope'></i><span>Email:</span> fundacao@animais.com</li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contacts
