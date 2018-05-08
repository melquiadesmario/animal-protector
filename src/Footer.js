import React from 'react'

const Footer = props => {
    return(
        <div>
            {/* footer starts here */}
            <footer className='footer clearfix'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-6 footer-para'>
                        <p>&copy;Melquíades Mário - 2018</p>
                        </div>
                        <div className='col-xs-6 text-right'>
                        <a href=''><i className='fa fa-facebook'></i></a>
                        <a href=''><i className='fa fa-twitter'></i></a>
                        <a href=''><i className='fa fa-skype'></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
