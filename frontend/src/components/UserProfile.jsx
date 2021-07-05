import React, { Component } from 'react'
import axios from 'axios'
import { getAPI } from "../util/util"

import "../css/UserProfilePage.css"

import UserCard from './UserCard';
import ShowsCollection from './ShowsCollection';

const API = getAPI();


class UserProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id,
            usersShows: [],
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
                usersShows: showsUser
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
        let { usersShows, username, avatar, error } = this.state
        if (error === null || error !== "none") {
            console.log(error)
            return <div>Loading</div>
        } else if (error === "none") {
            return (
                <div className='profile_page'>
                    <div className="user_profile_information">
                        <UserCard username = {username} 
                        avatar ={avatar}/>

                    </div>
                    
                    <div className="user_profile_show_collection">
                        <ShowsCollection shows = {usersShows}/>
                        
                        
                    </div>




                </div>
            )

        }

    }

}

export default UserProfilePage