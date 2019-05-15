import React, {Component} from 'react';
import axios from 'axios' 
const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
      }
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Jhon Doe', 
      //   email: 'jdoe@gamil.com',
      //   phone: '01734548565'
      // },
      // {
      //   id: 2,
      //   name: 'Jack Doson', 
      //   email: 'jack@gamil.com',
      //   phone: '017324234985'
      // },
      // {
      //   id: 3,
      //   name: 'Mishele Obama', 
      //   email: 'mishel@gamil.com',
      //   phone: '0171843423424'
      // },
      // {
      //   id: 4,
      //   name: 'Barek Obama', 
      //   email: 'bakervai@gamil.com',
      //   phone: '01234356985'
      // }  
    ],

    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  async componentDidMount(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts: res.data});
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer  = Context.Consumer;