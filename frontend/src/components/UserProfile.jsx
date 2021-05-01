import React, { Component } from 'react'
import axios from 'axios'
import UserShow from './UserShowComponent'
import "../css/ProfilePage.css"
import { getAPI } from "../util/util"
const API = getAPI();


class UserProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id,
            shows: [],
            username: "",
            avatar: "",
            error: null

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
                avatar: avatar_url,
                error: "none"
            })

        } catch (err) {
            console.log(err)
            this.setState({
                error: err
            })
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
        this.getSingleUser()
        this.getUsersShows()
    }

    render() {
        let { shows, username, avatar, error } = this.state
        if (error === null || error !== "none") {
            console.log(error)
            return <div>Loading</div>
        } else if (error === "none") {
            return (
                <div className='profile_page'>
                    <h1 id="welcome"> {username}</h1>
                    <img id="profile_img" src={avatar} alt="Loading" />
                    <h2 id="shows_label">Shows</h2>
                    <div id="shows">
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

}

export default UserProfilePage