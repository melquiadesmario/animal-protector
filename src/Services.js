import React from 'react'

const Services = props => {
    return(
        <div>
            {/* service section starts here */}
            <section className='service text-center'>
            <div className='container'>
                <div className='row'>
                    <h2>our services</h2>
                    <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
                    <div className='col-md-3 col-sm-6'>
                        <div className='single-service'>
                            <div className='single-service-img'>
                                <div className='service-img'>
                                    <img className='heart img-responsive' src='img/service1.png' alt='' />
                                </div>
                            </div>
                            <h3>Heart problem</h3>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='single-service'>
                            <div className='single-service-img'>
                                <div className='service-img'>
                                    <img className='brain img-responsive' src='img/service2.png' alt='' />
                                </div>
                            </div>
                            <h3>brain problem</h3>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='single-service'>
                            <div className='single-service-img'>
                                <div className='service-img'>
                                    <img className='knee img-responsive' src='img/service3.png' alt='' />
                                </div>
                            </div>
                            <h3>knee problem</h3>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className='single-service'>
                            <div className='single-service-img'>
                                <div className='service-img'>
                                    <img className='bone img-responsive' src='img/service4.png' alt='' />
                                </div>
                            </div>
                            <h3>human bones problem</h3>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            {/* end of service section */}
        </div>
    )
}

export default Services
