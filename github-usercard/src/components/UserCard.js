import React from 'react';

class UserCard extends React.Component {
    render(){
        const {user} = this.props
        return (
            <div className='card'>   
                <img src={user.avatar_url} alt={'user'}/>
                <div className='card-info'>
                    <h3 className='name'>{user.name}</h3>
                    <p className='username'>{user.login}</p>
                    <p>{'Location: ' + user.location}</p>
                    <p>{'Profile: '}<a href={user.html_url}>{user.html_url}</a></p>
                    <p>{'Followers: ' + user.followers}</p>
                    <p>{'Following: ' + user.following}</p>
                    <p>{'Bio: ' + user.bio}</p>
                    <p>{user.email}</p>
                </div>    
            </div>
        )
    }
}

export default UserCard;