import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from './base'

class Login extends Component{
    constructor(props){
        super(props)

        this.email = null,
        this.passaword = null

        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
        this.setState({
            isLogging: true,
            error: false
        })
        auth
            .signInWithEmailAndPassword(this.email.value, this.passaword.value)
            .then( (user) => {
                console.log('logged in', user)
                this.setState({
                    isLoggedIn: true
                })
            })
            .catch(error => {
                this.setState({
                    error: true,
                    isLogging: false
                })
            })
    }

    render(){
        if(this.state.isLoggedIn){
            return <Redirect to='/admin' />
        }
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
                        <div className='contact-caption clearfix'>
                            <div className='col-md-6 col-md-offset-1 contact-form'>
                                <h3>Login</h3>
                                <form className='form'>
                                    <input className='email' type='email' placeholder='Email' required autofocus ref={ref => this.email = ref} />
                                    <input className='phone' type='password' placeholder='Senha' required ref={ref => this.passaword = ref} />
                                </form>
                                { this.state.error && <p>Email e/ou senha inválidos.</p> }
                                <button disabled={ this.state.isLogging } className='btn btn-default' onClick={this.handleLogin} >Fazer Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}

export default Login
