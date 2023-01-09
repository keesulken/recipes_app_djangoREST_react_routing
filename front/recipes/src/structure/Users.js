import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      items:[],
    }
  }
  
  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/users/')
    .then((responce)=>responce.json())
    .then((result)=>{
      this.setState({
        isLoaded: true,
        items: [...result],
      })
    })
    .catch(()=>{
      console.log('error')
    })
  }

  render() {
    const { isLoaded, items } = this.state
    if (!isLoaded) {
    return (
      <div>Loading...</div>
    )} else {
      return (
        items.map(user=>(
          <div key={user.id}>{user.username}</div>
        ))
      )
    }
  }
}

