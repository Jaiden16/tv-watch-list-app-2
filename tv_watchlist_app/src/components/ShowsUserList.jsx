import React from 'react'
import { Link } from 'react-router-dom'
import "../css/ShowsUserList.css"

export default function ShowsUserlist(props) {
    let { users, height, width } = props
    // console.log('users', users)

    return (
            users.map((el, ind) => {
                return (
                        <Link key={ind} to={`/users/${el.id}`}>
                            <p>{el.username}</p>
                            <img src={el.avatar_url}
                                alt="broken"
                                height={height}
                                width={width} />
                        </Link>
                    
                )
            })
    )

}