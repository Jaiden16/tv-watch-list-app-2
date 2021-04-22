import React, { Component } from 'react'
import ShowComponent from './ShowComponent'
import axios from 'axios'
import '../css/AllShow.css'
import {getAPI} from '../util/util'

const API = getAPI();

class AllShows extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []

        }
    }

    getAllshows = async () => {
        let url = `${API}/shows`
        try {
            let res = await axios.get(url)
            // console.log(res.data.shows)
            let { shows } = res.data
            this.setState({
                shows: shows
            })

        } catch (err) {
            console.log(err)

        }

    }

    componentDidMount() {
        this.getAllshows()
    }

    render() {
        let { shows } = this.state
        return (
            <div className = "all-shows">
                {shows.map((el, idx) => {
                    return (
                        <ShowComponent
                            key = {idx}
                            title={el.title}
                            id={el.id}
                            url={el.img_url}
                        />
                    )
                })}
            </div>
        )
    }
}

export default AllShows