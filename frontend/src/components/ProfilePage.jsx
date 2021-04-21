import React, { Component } from 'react'
import axios from 'axios'
import UserShow from './UserShowComponent'
import "../css/ProfilePage.css"

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id,
            userName: "",
            shows: []

        }
    }

    getSingleUser = async () =>{
        let{username,userId} = this.state
        let url = `/users/${userId}`
        try{
            let res = await axios.get(url);
            let user = res.data.user;
            console.log(user);

        }catch(err){
            console.log(err)

        }

    }

    getUsersShows = async () => {
        let { userId } = this.state
        let url = `/shows/user/${userId}`
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
        console.log(this.state.userId)
        this.getSingleUser()
        this.getUsersShows()
    }

    render() {
        let { shows } = this.state
        return (
            <div className = 'profile_page'>
                <h1 id = "welcome">Welcome {this.props.username}</h1>
                <img id = "profile_img" src = {this.props.avatar} alt = "broken" />
                <h2 id = "shows_label">Shows</h2>
                {shows.map((el, index) => {
                    return <UserShow
                        key={index}
                        title ={el.title}
                        genre={el.genre_name}
                        id={el.id}
                        url={el.img_url} />
                })}
            </div>
        )
    }

}
export default ProfilePage