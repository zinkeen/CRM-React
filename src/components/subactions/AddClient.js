import React, { Component } from 'react';


class AddClient extends Component {
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

  handleChange =(event)=>{
    this.setState({[event.target.name]:event.target.value}, ()=>console.log(this.state))
  }

  addClient =() =>{
    this.props.addClient(this.state.name, this.state.surname, this.state.country, this.state.owner)
  }
  render() {
    return (
      <div className="AddClient">
      <span>Add Client</span>
      <div className='firstname'>
      <span> First Name: </span>
      <input name ='name' value ={this.state.name} onChange = {this.handleChange}/>
      </div>
      <div className='surname'>
      <span> Surname: </span>
      <input name ='surname' value ={this.state.surname} onChange = {this.handleChange}/>
      </div>
      <div className='country'>
      <span> Country: </span>
      <input name ='country' value ={this.state.country} onChange = {this.handleChange}/>
      </div>
      <div className='owner'>
      <span> Owner: </span>
      <input name ='owner' value ={this.state.owner} onChange = {this.handleChange}/>
      </div>
      <button className = "addNewClient" onClick = {this.addClient}>Add New Client</button>
      </div>
    );
  }
}

export default AddClient;


//  think about function to generate current date