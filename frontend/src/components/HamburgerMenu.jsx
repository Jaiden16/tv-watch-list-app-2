import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "../css/HamburgerMenu.css"


export default function HamburgerMenu(props) {
    const [showMenu, setShowMenu] = useState(true);
    let menu;
    let menuMask;


    if (showMenu) {
        menu =
            <div className="drop_down_menu">
                <p className="drop_down_menu_text">
                    Tv Movie Night</p>


                <nav>
                    <ul className="drop_down_menu_list" onClick={() => setShowMenu(false)}>
                        <li ><Link className="brand hb_btn hb_item" to={`/profile/${props.id}`}>Home</Link></li>
                        {/* <li ><Link to={`/profile/${props.id}`} >{props.username}</Link></li> */}
                        <li ><Link className="hb_btn hb_item" to='/users' > Users </Link></li>
                        <li ><Link className="hb_btn hb_item" to='/shows' > Shows </Link></li>
                        <li ><Link className="hb_btn hb_item" to='/addshows' > Add Show </Link></li>
                        <li ><Link className="hb_btn hb_item" to='/about' > About </Link></li>
                    </ul>

                </nav>


            </div>







        menuMask =
            <div className="drop_down_menu_mask"
                onClick={() => setShowMenu(false)}>
            </div>
    }

    return (
        <div className="hamburger_menu">
            <div
                className="menu"
                onClick={() => setShowMenu(!showMenu)}>
                &#9776;
            </div>
            {menuMask}
            {menu}

        </div>
    )

}



