import React, { Component } from 'react';
import axios from 'axios'
//  problems to solve - search by name  and reload

class UpdateClient extends Component {
  constructor (){
    super();
    this.state = {
      clientNames:[],
      ownerList:[],
      _id:'',
      newName:"",
      newOwner:"",
      newEmailType:"",
      newSale:true,
      clients:[]
    }
  }
  getData(){
    return axios.get ("http://localhost:4555/client")
  }

  async componentDidMount() {
    let items = await this.getData()
    let owners =[...items.data].map(c => c.owner)
    let distinctOwners = Array.from(new Set(owners))
    let clientNames =[...items.data].map(c => c.name)
    // console.log(items)
     this.setState({ clients: items.data, ownerList:distinctOwners, clientNames:clientNames})
    
  } 

  handleClientChoice=async (event)=>{
    let name = event.target.value
    let clients = [...this.state.clients]
    let client = clients.find(w=>w.name===name)
    this.setState({_id:client._id, newName:client.name, newOwner:client.owner, newEmailType:client.emailType})
    // console.log(client)
    
  }

  handleChoice =(event)=>{
   
  this.setState({[event.target.name]:event.target.value}, ()=>console.log(this.state))
    
  }

  updateClient = async()=>{
     let send = await axios.put("http://localhost:4555/client",{
      _id:this.state._id,
      name:this.state.newName,
      owner:this.state.newOwner,
      emailType: this.state.newEmailType,
      sold: this.state.newSale
     })

     console.log(send.data)
  }


  render() {
    return (
      <div className="UpdateClient">
      <span>Update Client</span>
       <div className ="miniupdateclient">
       <span> Client: </span> 
       <span>
         <input name = 'newName' list ='clients' value = {this.state.newName} onChange={this.handleClientChoice}/> 
         <datalist id="clients">{this.state.clientNames.map(c=><option>{c}</option>)}
         </datalist>
        </span>
       </div>
       <div className='transferowner'>
        <span>Transfer Ownership to </span>
        <span><select name ='newOwner' value = {this.state.newOwner} onChange={this.handleChoice}> {this.state.ownerList.map(o=><option>{o}</option>)}
         </select>
        </span> 
        <span>
          <button onClick={this.updateClient}> Transfer </button>
        </span>
        
       </div>
       <div className='sendemail'>
        <span> Send Email: </span>
        <span>
         <select name ='newEmailType' value = {this.state.newEmailType} onChange={this.handleChoice}> 
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
        </select>
        </span> 
        <span>
          <button onClick={this.updateClient}> Send </button>
        </span>
        
       </div>
       <div className='declaresale'>
        <span> Declare sale! </span>
        <span></span>
         
        <span>
          <button onClick={this.updateClient}> Declare</button>
        </span>
        
       </div>
      </div>
    );
  }
}

export default UpdateClient;


//  Think about ID


