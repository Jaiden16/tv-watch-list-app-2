import React from 'react'

import ShowCard from "./ShowCard"

import "../css/ShowsCollection.css"

export default function ShowsCollection(props) {
    let { shows } = props

    return (
        <div className="shows_collection">
            <h2 className="shows_title">Shows</h2>
            <div className="shows">
                {shows.map((el, index) => {
                    return <ShowCard
                        key={index}
                        title={el.title}
                        genre={el.genre_name}
                        id={el.show_id}
                        url={el.img_url} />
                })}
            </div>
        </div>


    )
}