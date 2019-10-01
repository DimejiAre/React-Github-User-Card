import React from 'react';
import Users from './components/Users';
import MainUser from './components/MainUser';
import axios from 'axios';
import './App.css';

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
      <div className="App">
        <h2>GitHub UserCard</h2>
        <MainUser setMainUser={this.setMainUser}
        user={this.state.mainUser}/>
        <Users setUsers={this.setUsers}
        addCard={this.addCard}
        users={this.state.users}/>
      </div>
    );
  }
}

export default App;
