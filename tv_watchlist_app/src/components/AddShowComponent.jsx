import React, { Component } from 'react'
import axios from 'axios'

export default class AddShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            movies: [],
            movie_value: "",
            genre: [],
            genre_value: "",
            url: "",
            show_name: ""

        }
    }

    getAllMovies = async () => {
        let url = "/shows"
        try {
            let res = await axios.get(url)
            // console.log(res.data.shows)
            let movie = res.data.shows
            this.setState({
                movies: movie
            })

        } catch (err) {
            console.log(err)
        }
    }

    getAllGenres = async () =>{
        let url = '/genres'
        try{
            let res = await axios.get(url)
            console.log('genre',res.data.genre)
            let genre = res.data.genre
            this.setState({
                genre: genre
            })

        }catch(err){
            console.log(err)
        }
    }

    handleChange = (e) => {
        console.log('value', e.target.value)
        console.log('id',e.target.id )
        this.setState({
            movie_value: e.target.value
        })
    }

    handleGenreChange = (e) =>{
        console.log("value", e.target.value)
        this.setState({
            genre_value: e.target.value
        })
    }

    handleTextChange = (e)=>{
        console.log('target name',e.target.name)
        console.log('target value',e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    showSubmit = async (e) =>{
        e.preventDefault()
        let {movie_value} = this.state
        let url = "shows/newshowuser"
        let showObj = {
            user_id: this.state.userId,
            show_id:  movie_value
        }
        try{
            let show = await axios.post(url,showObj)
            console.log(show)

        }catch(err){
            console.log(err)
        }

    }


    componentDidMount() {
        this.getAllMovies()
        this.getAllGenres()
    }

    render() {
        let { movies, genre } = this.state


        return (
            <div>
                <h1>Add Show</h1>
                <div>
                    <form onSubmit = {this.showSubmit}>
                        <h2>Start watching Show</h2>
                        <select defaultValue='--all shows--' onChange={this.handleChange} style = {{width: 180}}>
                            <option value='--all shows--' disabled>--All Shows--</option>
                            {movies.map(el => {
                                return <option key={el.id} value={el.id}>{el.title}</option>
                            })}
                        </select><br /><br />
                        <input type='submit' />
                    </form>
                </div><br /><br />

                <div>
                    <form>
                        <h2>Or add a new show</h2>
                        <label htmlFor="url-label">Show Image Url</label><br />
                        <input id='url-label' 
                        type='text'
                        name = "url" 
                        placeholder='paste url' 
                        required
                        onChange = {this.handleTextChange}
                        value = {this.state.url}
                        style = {{width: 180}}></input><br /> <br />
                        
                        <label htmlFor="show-name">Show Name</label><br />
                        <input id='show-name'
                        name = "show_name" 
                        type='text' 
                        placeholder='type name' 
                        required
                        onChange = {this.handleTextChange}
                        value = {this.state.show_name}
                        style = {{width: 180}}></input><br /> <br />
                        
                        <label htmlFor="genre">genre</label><br />
                        <select defaultValue = 'genre' onChange = {this.handleGenreChange} style = {{width: 180}}>
                            <option value = "genre" disabled>genre</option>
                            {genre.map((el) =>{
                                return <option key = {el.id} value = {el.id}>{el.genre_name}</option>
                            })}

                        </select><br /> <br />
                        <input type = 'submit'/>
                    </form>
                </div>



            </div>
        )
    }
}