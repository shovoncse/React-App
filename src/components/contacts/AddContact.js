import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

 class AddContact extends Component {
   state = {
     name: '',
     email: '', 
     phone: '',
     errors: {}
   };

  //  onNameChange = e => this.setState({name: e.target.value});
  //  onEmailChange = e => this.setState({email: e.target.value});
  //  onPhoneChange = e => this.setState({phone: e.target.value}); 
  onChange = e => this.setState({[e.target.name]: e.target.value}); 

  onSubmit = async (dispatch,e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;

    if (name === '') {
     this.setState({errors: {name: 'Name is required'}});
     return;
    }
    if (email === '') {
     this.setState({errors: {email: 'Email is required'}});
     return;
    }
    if (phone === '') {
     this.setState({errors: {phone: 'Phone is required'}});
     return;
    }

    const newContact = {
      // id: uuid(),
      name,
      email,
      phone,
      errors: {}
    }

    const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact) 
    dispatch({type: 'ADD_CONTACT', payload: res.data})


    this.setState({
      name: '',
      email: '',
      phone: ''
    });

    this.props.history.push('/');
  }
  render() {
    const {name, email, phone,errors} = this.state;
    return (
    <Consumer>
      {value => {

        const {dispatch} = value;

        return(
          <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup 
              label="Name"
              name="name"
              placeholder="Enter Name"
              value = {name}
              onChange={this.onChange}
              error={errors.name}
             />
            <TextInputGroup 
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value = {email}
              onChange={this.onChange}
              error={errors.email}
             />
            <TextInputGroup 
              label="Phone"
              name="phone"
              placeholder="Enter phone"
              value = {phone}
              onChange={this.onChange}
              error={errors.phone}
             />
            <input type="submit" value="Add" className="btn btn-block btn-dark"/>
          </form>
        </div>
      </div>
        )
      }}
    </Consumer>
    )
    
  
  }
}

export default AddContact;