import React, { Component } from 'react';


class SearchClient extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      surname:'',
      country:'',
      owner:'',
      email: '',
      firstContact: '',
      emailType: null,
      sold: false,
    }
  }
  render() {
    return (

    <div className='tablename'>
      <p>Name</p> 
      <p>Surname </p>
      <p>Country </p>
      <p>First Contact </p>
      <p>Email </p>
      <p>Sold</p>
      <p>Owner</p>
      </div>
      
    );
  }
}

export default SearchClient;