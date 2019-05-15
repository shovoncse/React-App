import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContacts from './components/contacts/EditContacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              {/* <Route exact path="/about/:id" component={About} /> */}
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/edit/:id" component={EditContacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
          
        </div>
      </Router>
    </Provider>
    );
}

export default App;
