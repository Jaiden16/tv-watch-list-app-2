import React, { Component } from 'react'
import axios from 'axios'

export default class ShowPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            userId: props.userId,
            image: "",
            title: "",
            comments: [],
            body: ""

        }
    }

    getShowById = async () => {
        let { id } = this.state
        let url = `/shows/${id}`
        try {
            let res = await axios.get(url)
            console.log(res.data.shows)
            let show = res.data.shows
            console.log(show)
            this.setState({
                image: show.img_url,
                title: show.title
            })

        } catch (err) {
            console.log(err)
        }
    }

    onChange = (e) =>{
        console.log("value", e.target.value)
        this.setState({
            body: e.target.value
        })

    }

    onSubmit = (e) =>{
        let {comments,body} = this.state
        e.preventDefault()
        comments.push(body)
        this.setState({
            body: ""
        })
    }

    componentDidMount() {

        this.setState({
            id: this.props.match.params.id
        })
        // this.getShowById()
    }

    render() {
        let { image, title, comments, body } = this.state
        console.log("image", image)
        console.log("title", title)
        console.log("body", body)
        return (
            <div>
                <div>
                    <h1>{title}</h1>
                    <img
                        src={image}
                        alt="broken" />
                </div>

                <div>
                    <form onSubmit = {this.onSubmit}>
                        <label htmlFor = "comment">Comment</label>{" "}
                        <input 
                            id = "comment" 
                            type = 'text' 
                            placeholder = 'Comment'
                            value = {body}
                            onChange = {this.onChange} />
                        <button type = 'submit'>Add</button>
                    </form>
                </div>

                <div>
                    {comments.map((el,ind)=>{
                        return <p key = {ind}>{el}</p>
                    })}

                </div>

            </div>
        )
    }
}