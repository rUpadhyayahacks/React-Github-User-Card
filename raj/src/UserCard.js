import React, { Component } from 'react'

class UserCard extends Component{
    render() {
    return (
       <article className='usercard'>
           <a href={this.props.user.html_url}>
               <img src={this.props.user.avatar_url} alt='pic' />
               <p>{this.props.user.login}</p>
           </a>
       </article>
    )
    }
}

export default UserCard