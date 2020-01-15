import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';


class App extends React.Component {
state = {
  user: [],
  followers: []
}

componentDidMount(){
  axios
  .get('https://api.github.com/users/rupadhyayahacks')
  .then(res => {
    this.setState({
      user: res.data
    })
    console.log(this.state)
  })
  .catch(err => console.log(err))
  .finally(
    axios
    .get(`https://api.github.com/users/rupadhyayahacks/followers`)
    .then(res => {
      console.log(res)
      this.setState({
        followers:res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    .finally(console.log('axios complete'))

  )

}
  



render(){
  console.log(this.state)

  return (
    <section className='card-container'>
      <UserCard user={this.state.user} />
      {this.state.followers.map((follower, i) => {
        return <UserCard key ={i} user={follower} />
      })}
    </section>
    
  );
};
}


export default App;
