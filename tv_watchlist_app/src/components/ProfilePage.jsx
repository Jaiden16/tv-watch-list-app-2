import React, { Component } from 'react'
import axios from 'axios'

class ProfilePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: props.match.params.id

        }
    }

    getUsersShows= async () =>{
        let {userId} = this.state
        let url = `http://localhost:3001/shows/user/${userId}`
        try{
            let shows = await axios.get(url)
            console.log("user shows", shows)

        }catch(err){
            console.log(err)
        }

    }

    componentDidMount(){
        this.getUsersShows()
    }

    render(){
        return(
            <div>Profile Page</div>
        )
    }

}
export default ProfilePage