import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pic from '../images/landing_page.jpg'
import '../css/LandingPage.css'

export default class LandingPage extends Component {
    


    render() {
        return (
            <div className="Landing">
                <h1 id = "title">Welcome To Movie Night</h1>
                <div id="image">
                    <img
                        id = "photo"
                        src={pic}
                        alt="broken"
                    /><br />
                </div>
                    <button id = "button" onClick={this.props.logIn}>
                        <Link to = "/">Enter</Link>
                    </button>

            </div>
        )
    }
}