import React, { Component } from 'react'
import axios from 'axios'
import UserShow from './UserShowComponent'

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id,
            shows: []

        }
    }

    getUsersShows = async () => {
        let { userId } = this.state
        let url = `http://localhost:3001/shows/user/${userId}`
        try {
            let shows = await axios.get(url)
            // console.log("user shows", shows.data.showsUser)
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
    }

    render() {
        let { shows } = this.state
        return (
            <div className = 'profile_page'>
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