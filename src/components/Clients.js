import React, { Component } from 'react';
import Client from './subclients/Client'
import SearchClient from './subclients/SearchClient';

class Clients extends Component {
  render() {
      let clients = this.props.items 

     
    return (
      <div className="Clients"> 
      <input placeholder = 'Search'/>
      <select>
          <option>Name</option>
          <option>Surname</option>
          <option>Country</option>
          <option>First Contact</option>
          <option>Email</option>
          <option>Sold</option>
          <option>Owner</option>
      </select>
      <SearchClient/>
      
       {clients.map(c =><Client key= {c._id} item = {c}/>)} 
     
      </div>
    );
  }
}

export default Clients;
