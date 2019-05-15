import React, { Component } from 'react'


class Test extends Component {
  state = {
    title: '',
    body: ''
  }
  
  

  componentDidMount() {
    console.log('ComponentDidMount...')
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => this.setState({
      title: data.title,
      body: data.body,
    }))
  }
  
  // componentWillMount() {
  //   console.log('ComponentWillMount...')
  // }
  
  // componentDidUpdate() {
  //   console.log('ComponentUpdateUpdate...')
  // }
  
  // componentWillUpdate() {
  //   console.log('ComponentWillUpdate...')
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('ComponentWillReceiveProps...')
  // }

  // static getDerivedStateFormProps(nextProps, prevState){
  //   return {
  //     test: 'something'
  //   }
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('getSnapshotBeforeUpdate...')
  // }

  render() {
    const {title, body} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default  Test;