import React, { Component } from 'react'
// import axios from 'axios' 

export default function Homepage(props) {
    let { username, avatar } = props
    
    return (
        <div className = "HomePage">
            <h1>Welcome {username}</h1>
            <img src = {avatar} alt = "broken" style = {{height:200}}/>
        </div>
    )
}