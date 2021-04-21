import React from 'react'
import { Link } from 'react-router-dom'

export default function UserShow(props) {
    let {title, id, url } = props

    return (
        <div id = "shows_component">
            <Link to={`/shows/${id}`}>
                <div>
                    <p>{title}</p>
                    <img style={{ width: "100%", height:"100%" }}
                        src={url}
                        alt="broken"
                    />
                </div>
            </Link>
        </div>
    )
}