import React, { Component } from 'react'
import axios from 'axios'
import ShowsUserlist from './ShowsUserList'
import "../css/AllUsers.css"

export default class AllUsers extends Component {
    constructor() {
        super()
        this.state = {
            users: []

        }
    }

    getUsers = async () => {
        let url = '/users'
        try {
            let res = await axios.get(url)
            console.log('res', res)
            let arr = res.data.users
            this.setState({
                users: arr
            })

        } catch (err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    render() {
        let { users } = this.state
        return (
            <div className="AllUsers">
                <h1 id = "AllUsers_Title">Users</h1>
                <div className = "UserList">
                    <ShowsUserlist
                        users={users}
                        height={"100%"}
                        width={"100%"} />
                </div>

            </div>
        )
    }
}