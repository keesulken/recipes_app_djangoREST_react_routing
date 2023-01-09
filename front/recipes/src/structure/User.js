import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

export default class User extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false,
       item: null,
    }
  }

  componentDidMount(){
    const params = useParams();
    fetch(`http://127.0.0.1:8000/api/users/${params.id}`)
    .then((response)=>response.json())
    .then((result)=>this.setState({
      isLoaded: true,
      item: result,
    }))
    .catch(()=>{
      console.log('error')
    })
  }

  render() {
    const { isLoaded, item } = this.state
    if (!isLoaded){
    return (
      <div>Loading...</div>
    )} else {
      return (
        <div>{item.username}</div>
      )
    }
  }
}
