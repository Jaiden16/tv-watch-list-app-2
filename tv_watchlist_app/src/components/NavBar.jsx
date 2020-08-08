import React from "react"
import { Link } from 'react-router-dom'
import "../css/NavBar.css"


export default function NavBar(props) {
    if (!props.login) {
        return (
            <ul className='nav-list'>
                <li id="nav-item"><Link id="brand" to="/">TV</Link></li>
                <li id="nav-word">Tv Movie Night</li>
            </ul>
        )
    } else {
        return (
            <ul className='nav-list'>
                <li id="nav-item"><Link id="brand" to={`/users/${props.id}`}>TV</Link></li>
                <li id="nav-item"><Link to={`/users/${props.id}`} >{props.username}</Link></li>
                <li id="nav-item"><Link to='/users' > Users </Link></li>
                <li id="nav-item"><Link to='/shows' > Shows </Link></li>
                <li id="nav-item"><Link to='/addshows' > Add Show </Link></li>
                <li id="nav-item"><Link to='/about' > About </Link></li>
            </ul>
        )
    }

}
