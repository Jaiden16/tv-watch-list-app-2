import React, { Component } from 'react'
import pic from '../images/landing_page.jpg'
import {Link} from "react-router-dom"

import '../css/LandingPage.css'

export default class LandingPage extends Component {

    pushFunction = () => {
        this.props.logIn()
        this.props.history.push(`/users/${this.props.id}`)
    }

    render() {
        return (
            <div className="Landing">
                <h1 className="title">Welcome To Movie Night</h1>
                <div className="landing-image" >
                    <img
                        className="landing-photo"
                        src={pic}
                        alt="broken"
                    />
                    
                </div>
                <Link onClick={this.pushFunction} className="btn btn-white">
                    Enter
                </Link>
                
                

            </div>
        )
    }
}