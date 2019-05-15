import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Consumer } from '../../context'

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  onShowClick = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  }
  
  onDeleteClick = async (id, dispatch) => {
    
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type: 'DELETE_CONTACT', payload: id});  
      } catch (error) {
        console.log(error)
        dispatch({type: 'DELETE_CONTACT', payload: id});        
      } 
  }


  render() {
    const {id, name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;


    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">

        <h4>{name}{' '} <i style={{cursor: 'pointer'}} onClick={this.onShowClick} className="fas fa-sort-down"></i>
        
        <i 
        className="fas fa-times" 
        style={{
          color: 'red', 
          cursor: 'pointer',
          float: 'right'
          }} 
        onClick={this.onDeleteClick.bind(this, id, dispatch)}>

        </i>

        <Link to={`/contact/edit/${id}`}>
          <i 
          className="fas fa-pencil-alt" 
          style={{
            cursor:'pointer',
            color:'black',
            float:'right',
            marginRight:'1rem'
          }}></i>
        </Link>
        </h4>
         {showContactInfo? (
          <ul className="list-group">
           <li className="list-group-item">Email: {email}</li>
           <li className="list-group-item">Phone: {phone}</li>
         </ul>): null
         }
         </div>
          )
        }}
      </Consumer>
      
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;