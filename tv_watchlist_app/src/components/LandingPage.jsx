import React, { Component } from 'react'
import pic from '../images/landing_page.jpg'
import '../css/LandingPage.css'

export default class LandingPage extends Component {
    
    pushFunction = () =>{
        this.props.logIn()
        this.props.history.push(`/users/${this.props.id}`)
    }

    render() {
        return (
            <div className="Landing">
                <h1 id="title">Welcome To Movie Night</h1>
                <div id="image">
                    <img
                        id="photo"
                        src={pic}
                        alt="broken"
                    /><br />
                </div>
                <button id="button" onClick={this.pushFunction}>
                    Enter
                </button>

            </div>
        )
    }
}