import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './base'

import AdminCampanhas from './AdminCampanhas'
import NotFound from './NotFound';
const AdminHome = props => <p>Seja bem-vindo</p>

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: null
            })
        })
    }

    render(){
        if(this.state.isAuthing){
            return <p>Aguarde...</p>
        }

        if(!this.state.isLoggedIn){
            return <Redirect to='/login'/>
        }

        return(
            <div className='container-admin'>
                <section className='about text-center' id='about'>
                    <div className='container'>
                        <div className='row'>
                            <h2>Administração</h2>
                            <Route path='/' component={AdminHome} />
                            <Route 
                                path={`${this.props.match.url}/campanhas`} 
                                component={NotFound} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Admin
