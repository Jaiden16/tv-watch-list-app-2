import React from 'react'

import "../css/UserCard.css"


export default function UserCard
    (props) {
    let { username, avatar } = props

    return (
        <div className="user_card">
            <h1 className="username"> {username}</h1>
            <img className="profile_img" src={avatar} alt="Loading" />
        </div>


    )
}