import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'


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


  renderLandingPage = () => {
    return <LandingPage
      logIn={this.userLogedin}
      id={this.state.id} />
  }


  renderProfilePage = () => {
    return <ProfilePage />
  }

  userLogedin = () => {
    this.setState({
      login: true
    })
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
        }
      }
      />
      <Redirect to="/" />
    </Switch>
  )

  loggedIn = () => (
    <Switch>
      <Route exact path="/profile/:id" component={UserProfile} 
      />

      <Route exact path="/users/:id" component={UserProfile} />
      <Route path="/shows/:id" render={this.renderShowPage} />
      <Route path="/addshows" render={this.renderAddShows} />
      <Route path="/shows" render={this.renderAllShows} />
      <Route path="/users" render={this.renderAllUsers} />
      <Route path="/about" component={About} />
      {/* <Redirect to={`/users/${this.id}`}/> */}
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
          login ? 
            <div className="page_content">
              {this.loggedIn()}
            </div> :
            <div className="landing-content">
            {this.notLoggedIn()}

          </div> 

        }



      </div>
    );
  }
}

export default App;