import React from 'react'

const Sobre = props => {
    return(
        <div>
            {/* team section */}
            <section className='team' id='team'>
                <div className='container'>
                    <div className='row'>
                    <div className='team-heading text-center'>
                        <h2>our team</h2>
                        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</h4>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person'>
                        <img className='img-responsive' src='img/member1.jpg' alt='member-1' />
                        </div>
                        <div className='person-detail'>
                        <div className='arrow-bottom'></div>
                        <h3>Dr. M. Weiner, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person-detail'>
                        <div className='arrow-top'></div>
                        <h3>Dr. Danielle, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='person'>
                        <img className='img-responsive' src='img/member2.jpg' alt='member-2' />
                        </div>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person'>
                        <img className='img-responsive' src='img/member3.jpg' alt='member-3' />
                        </div>
                        <div className='person-detail'>
                        <div className='arrow-bottom'></div>
                        <h3>Dr. Caitlin, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person-detail'>
                        <div className='arrow-top'></div>
                        <h3>Dr. Joseph, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='person'>
                        <img className='img-responsive' src='img/member4.jpg' alt='member-4' />
                        </div>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person'>
                        <img className='img-responsive' src='img/member5.jpg' alt='member-5' />
                        </div>
                        <div className='person-detail'>
                        <div className='arrow-bottom'></div>
                        <h3>Dr. Michael, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </div>
                    <div className='col-md-2 single-member col-sm-4'>
                        <div className='person-detail'>
                        <div className='arrow-top'></div>
                        <h3>Dr. Hasina, M.D.</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className='person'>
                        <img className='img-responsive' src='img/member6.jpg' alt='member-5' />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* end of team section */}
        </div>
    )
}

export default Sobre
