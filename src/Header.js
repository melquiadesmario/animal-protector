import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    return(
        <div>
            {/*header section*/}
            <header className='top-header'>
            <div className='container'>
            <div className='row'>
                <div className='col-xs-3 header-logo'>
                <br />
                <a href='index.html'><img src='img/logo.png' alt='' className='img-responsive logo' /></a>
                </div>
        
                <div className='col-md-8'>
                <nav className='navbar navbar-default'>
                    <div className='container-fluid nav-bar'>
                    {/*Brand and toggle get grouped for better mobile display*/}
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        </button>
                    </div>
        
                    {/*Collect the nav links, forms, and other content for toggling*/}
                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Link to='/' className='menu active'>início</Link>
                            </li>
                            <li>
                                <Link to='/sobre' className='menu'>sobre</Link>
                            </li>
                            <li>
                                <Link to='/servicos' className='menu'>serviços</Link>
                            </li>
                            <li>
                                <Link to='/campanhas' className='menu'>campanhas</Link>
                            </li>
                            <li>
                                <Link to='/contatos' className='menu'>contatos</Link>
                            </li>
                        </ul>
                    </div>
                    {/* /navbar-collapse*/}
                    </div>
                    {/* / .container-fluid*/}
                </nav>
                </div>
            </div>
            </div>
        </header>
        {/* end of header area */}
        </div>
    )
}

export default Header
