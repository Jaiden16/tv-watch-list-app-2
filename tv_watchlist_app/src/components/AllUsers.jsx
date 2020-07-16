import React , {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShowsUserlist from './ShowsUserList'

export default class AllUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: []

        }
    }

    getUsers = async() =>{
        let url = '/users'
        try{
            let res = await axios.get(url)
            console.log('res', res)
            let arr = res.data.users
            this.setState({
                users: arr
            })
            
        }catch(err){
            console.log(err)
        }
    }
    
    componentDidMount(){
        this.getUsers()
    }

    render(){
        let {users} = this.state
        return(
            <div>
                <ShowsUserlist users = {users}/>
            </div>
        )
    }
}