import React from 'react';
import Users from './components/Users';
import MainUser from './components/MainUser';
import axios from 'axios';
import './App.css';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainUser: {},
      users: []
    }
  }

  setUsers = (dbUsers) => {
    this.setState({
      users: dbUsers
    })
  }

  setMainUser = (user) => {
    this.setState({
      mainUser: user
    })
  }

  addCard = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        this.setState(currentState => ({
          users: [...currentState.users, response.data]
        }))
      })
      .catch(err => {
        return err
      })
  }

  render(){
    return (
      <div>
        <h2>GitHub UserCard</h2>
        <div className="container">
          <SearchForm />
          <MainUser setMainUser={this.setMainUser}
          user={this.state.mainUser}/>
          <h3>Followers</h3>
          <Users setUsers={this.setUsers}
          addCard={this.addCard}
          users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
