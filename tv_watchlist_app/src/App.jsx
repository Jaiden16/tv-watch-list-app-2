import React, { Component } from 'react';
import axios from 'axios'
import { Switch, Route, Redirect } from 'react-router-dom'
// import './App.css'


// components 
import Homepage from "./components/HomePage"
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage'
import AllShows from './components/AllShow';
import AllUsers from './components/AllUsers';
import ShowPage from './components/ShowPage';
import AddShow from './components/AddShowComponent';
import About from "./components/AboutComponent"
import LandingPage from './components/LandingPage';
import UserProfile from "./components/UserProfile"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 2,
      username: "",
      avatar_url: "",
      login: false
    }
  }



  async getSingleUser() {
    let { id } = this.state
    let url = `/users/${id}`
    try {
      let res = await axios.get(url)
      console.log(res)
      let user = res.data.user
      let { username, avatar_url } = user

      this.setState({
        username: username,
        avatar_url: avatar_url
      })

    } catch (err) {
      console.log(err)
    }

    // axios.get(url).then((res) => {
    //   // console.log(res)
    //   let user = res.data.user
    //   // console.log(user)
    //   let { username, avatar_url } = user
    //   this.setState({
    //     username: username,
    //     avatar_url: avatar_url
    //   })
    // }).catch((err) => {
    //   console.log(err)
    // })

  }

  componentDidMount() {
    this.getSingleUser();

  }

  renderHomepage = () => {
    let { username, avatar_url } = this.state
    return <Homepage
      username={username}
      avatar={avatar_url} />
  }

  renderAllShows = () => {
    return <AllShows />
  }

  renderAddShows = () => {
    return (
      <AddShow userId={this.state.id} />
    )
  }

  renderAllUsers = () => {
    return <AllUsers />
  }

  renderShowPage = ({ match }) => {
    return <ShowPage userId={this.state.id}
      match={match.params.id} />
  }

  userLogedin = () => {
    this.setState({
      login: true
    })
  }

  renderLandingPage = () => {
    return <LandingPage
      logIn={this.userLogedin}
      id={this.state.id} />
  }

  renderProfilePage = () => {
    return <ProfilePage id={this.state.id} />
  }

  notLoggedIn = () => (
    <Switch>
      <Route exact path='/' render={

        (routeProps) => {
          return (
            <LandingPage
              logIn={this.userLogedin}
              id={this.state.id}
              history={routeProps.history}
            />
          )
        }} />
      <Redirect to="/" />
    </Switch>
  )

  LoggedIn = () => (
    <Switch>
      <Route exact path="/profile/:id" render={
        (routeProps) => {
          return (
            < ProfilePage
              username={this.state.username}
              avatar={this.state.avatar_url}
              match={routeProps.match} />
          )
        }} />

      <Route exact path="/users/:id" component = {UserProfile}/>
      <Route path="/shows/:id" render={this.renderShowPage} />
      <Route path="/addshows" render={this.renderAddShows} />
      <Route path="/shows" render={this.renderAllShows} />
      <Route path="/users" render={this.renderAllUsers} />
      <Route path="/about" component={About} />
    </Switch>
  )



  render() {
    let { username, login } = this.state
    return (
      <div className="App">
        <NavBar
          className="NavBar"
          id={this.state.id}
          username={username}
          login={this.state.login}
        />
        {
          login ? this.LoggedIn() : this.notLoggedIn()
        }
      </div>
    );
  }
}

export default App;