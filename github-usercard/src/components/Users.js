import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://api.github.com/users/DimejiAre/followers`)
        .then(response => {
            let followers = response.data
            followers.forEach(follower => {
                this.props.addCard(follower.login)
            })
            // this.props.setUsers(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    render() {
        const {users} = this.props;
        return(
            <div>
                {users? users.map(user => (
                    <UserCard user={user}/>
                )): null }
            </div>
        )
    }
}

export default Users;