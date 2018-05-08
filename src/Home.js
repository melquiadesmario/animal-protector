import React from 'react'

const Home = props => {
    return(
        <div>
            <section className='slider' id='home'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='carouselHacked' className='carousel slide carousel-fade' data-ride='carousel'>
                        <div className='header-backup'></div>
                            {/* Wrapper for slides */}
                            <div className='carousel-inner' role='listbox'>
                                <div className='item active'>
                                    <img src='img/slide-one.jpg' alt='' />
                                    <div className='carousel-caption'>
                                        <h1>providing</h1>
                                        <p>highquality service for men &amp; women</p>
                                        
                                    </div>
                                </div>
                                <div className='item'>
                                    <img src='img/slide-two.jpg' alt='' />
                                    <div className='carousel-caption'>
                                        <h1>providing</h1>
                                        <p>highquality service for men &amp; women</p>
                                        
                                    </div>
                                </div>
                                <div className='item'>
                                    <img src='img/slide-three.jpg' alt='' />
                                    <div className='carousel-caption'>
                                        <h1>providing</h1>
                                        <p>highquality service for men &amp; women</p>
                                        
                                    </div>
                                </div>
                                <div className='item'>
                                    <img src='img/slide-four.jpg' alt='' />
                                    <div className='carousel-caption'>
                                        <h1>providing</h1>
                                        <p>highquality service for men &amp; women</p>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* Controls */}
                            <a className='left carousel-control' href='#carouselHacked' role='button' data-slide='prev'>
                                <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                                <span className='sr-only'>Previous</span>
                            </a>
                            <a className='right carousel-control' href='#carouselHacked' role='button' data-slide='next'>
                                <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                                <span className='sr-only'>Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of slider section */}

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
        </div>
    )
}

export default Home
