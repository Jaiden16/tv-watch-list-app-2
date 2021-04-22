import React, { Component } from 'react'
import axios from 'axios'
import UserShow from './UserShowComponent'
import "../css/ProfilePage.css"
import {getAPI} from "../util/util"
const API = getAPI();


class UserProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id,
            shows: [],
            username: "",
            avatar: ""

        }
    }

    getSingleUser = async () => {
        let { userId } = this.state
        let url = `${API}/users/${userId}`
        try {
            let res = await axios.get(url)
            // console.log(res)
            let user = res.data.user
            let { username, avatar_url } = user
            // console.log("user promise", user)

            this.setState({
                username: username,
                avatar: avatar_url
            })

        } catch (err) {
            console.log(err)
        }
    }

    getUsersShows = async () => {
        let { userId } = this.state
        let url = `${API}/shows/user/${userId}`
        try {
            let shows = await axios.get(url)
            console.log("user shows", shows.data.showsUser)
            let { showsUser } = shows.data
            // console.log('data', showsUser)
            this.setState({
                shows: showsUser
            })

        } catch (err) {
            console.log(err)
        }

    }

    componentDidMount() {
        this.getUsersShows()
        this.getSingleUser()
    }

    render() {
        let { shows, username, avatar } = this.state
        return (
            <div className='profile_page'>
                <h1 id="welcome"> {username}</h1>
                <img id="profile_img" src={avatar} alt="broken" />
                <h2 id = "shows_label">Shows</h2>
                <div id = "shows">
                    {shows.map((el, index) => {
                        return <UserShow
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

}

export default UserProfilePage