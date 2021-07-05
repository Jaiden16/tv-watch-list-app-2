import React from "react"
import { Link } from 'react-router-dom'
import "../css/NavBar.css"
import HamburgerMenu from "./HamburgerMenu"


export default function NavBar(props) {

    if (!props.login) {
        return (
            <ul className='nav-list' style={{display:"none"}}>
                <li id="nav-item"><Link id="brand" to="/">TV</Link></li>
                <li id="nav-word">Tv Movie Night</li>
            </ul>
            
        )
    } else {
        return (
            <div className="navbar">
                <ul className='nav-list'>
                <li id="nav-item"><Link id="brand" to={`/profile/${props.id}`}>TV</Link></li>
                {/* <li id="nav-item"><Link to={`/profile/${props.id}`} >{props.username}</Link></li> */}
                <li id="nav-item"><Link to='/users' > Users </Link></li>
                <li id="nav-item"><Link to='/shows' > Shows </Link></li>
                <li id="nav-item"><Link to='/addshows' > Add Show </Link></li>
                <li id="nav-item"><Link to='/about' > About </Link></li>
            </ul>

            <HamburgerMenu id={props.id}/>
                
            </div>
            
        )
    }

}
