import React from 'react'
import { Link } from 'react-router-dom'

import "../css/ShowCard.css"

export default function ShowCard(props) {
    let { title, id, url } = props

    return (
        <div className="show_card">
            <div className="card">
                <Link to={`/shows/${id}`}>
                    <div className="show_img" >
                        <img
                            src={url}
                            alt="broken"
                        />
                        <p>{title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

