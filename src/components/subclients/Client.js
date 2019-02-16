import React, { Component } from 'react';


class Client extends Component {
  render() {
      let client = this.props.item || {}
      let clientName = client.name.split(' ')[0]
      let clientLastname = client.name.split(' ')[1]
      let firstContactDate = client.firstContact.split('T')[0]
      let email = client.email
      let sold = client.sold
      let owner = client.owner
      let id = client._id
      
    return (
      <div className="client" id={id}> 
      <p>{clientName}</p> 
      <p>{clientLastname} </p>
      <p>{client.country} </p>
      <p>{firstContactDate} </p>
      <p>{email} </p>
      <p>{sold ? 'V' :'-'}</p>
      <p>{owner}</p>
       
     
      </div>
    );
  }
}

export default Client;