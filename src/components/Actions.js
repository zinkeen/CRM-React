import React, { Component } from 'react';
import AddClient from './subactions/AddClient';
import UpdateClient from './subactions/UpdateClient';


class Actions extends Component {
  render() {
    return (
      <div className="Actions">
      <span>You are in Actions</span>
      
      <UpdateClient makeOwnerList ={this.props.makeOwnerList}  makeClientList = {this.props.makeClientList}/>
      <AddClient addClient = {this.props.addClient}/>
      
      </div>
    );
  }
}

export default Actions;
