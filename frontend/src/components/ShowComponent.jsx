import React, { Component } from 'react'
import ShowsUserlist from './ShowsUserList'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import '../css/ShowComponent.css'
import { getAPI } from "../util/util"
const API = getAPI();


class MasterShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            id: this.props.id,
            url: this.props.url,
            users: []
        }
    }

    getShowsUsers = async () => {
        let { id } = this.state
        let url = `${API}/shows/shows/${id}`
        try {
            let res = await axios.get(url)
            // console.log(res.data.payload)
            let { payload } = res.data
            this.setState({
                users: payload
            })

        } catch (err) {
            console.log(err)
        }
    }
    componentDidMount() {
        this.getShowsUsers()
    }

    render() {
        let { id, url, title, users } = this.state
        return (
            <div className="show-div">
                <Link to={`shows/${id}`}>
                    <div>
                        <p>{title}</p>
                        <img 
                            src={url}
                            alt="broken" />
                    </div>
                </Link>
                <ShowsUserlist users={users} height={100} width={100} />
            </div>
        )
    }
}


//  } (props) {
//     let { title, id, url } = props
//     let backend = `/shows/${id}`

export default MasterShow