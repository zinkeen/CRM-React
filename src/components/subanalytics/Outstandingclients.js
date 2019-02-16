import React, { Component } from 'react';



class Outstandingclients extends Component {
  render() {
      let clientstocontact = this.props.soldarray.filter(w =>w!==true)
    return (
      <div className="Outstandingclients">
      <span>{clientstocontact.length}</span>
      
      
      </div>
    );
  }
}

export default Outstandingclients ;