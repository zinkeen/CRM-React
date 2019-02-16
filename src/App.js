import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Clients from './components/Clients'
import Actions from './components/Actions'
import Analytics from './components/Analytics'
import axios from 'axios'
class App extends Component {
  constructor(){
    super();
    this.state = {
      clients : []

    }
  }
  getData(){
    return axios.get ("http://localhost:4555/clients")
  }

  // Why it works with key data - as it is kiey of object received - see console.log(items)
  async componentDidMount() {
    let items = await this.getData()
    // console.log(items)
     this.setState({ clients: items.data })
  } 
// add client
 addClient = async(name, surname, country, owner)=>{
   const send = await axios.post('http://localhost:4555/client', {
     name: name,
     surname: surname,
     country: country,
     owner: owner

   })
   console.log(send) 

   let items = await this.getData()
    // console.log(items)
     this.setState({ clients: items.data })

 }
//   Update Clients
makeOwnersList=()=>{
  const newClientList = [...this.state.clients]
  const newOwnerList = newClientList.map(c=>c.owner)
  return newOwnerList

}
makeClientList =()=>{
  const newClientList = [...this.state.clients]
  const clientNameList = newClientList.map(c=>c.name)
  return clientNameList

}
  render() {
    return (
      <Router>
      <div className="App">
      <div className="appnavbar">
      <p><Link to="/clients"> Clients </Link></p>
      <p><Link to="/actions"> Actions </Link></p>
      <p><Link to="/analytics"> Analytics </Link></p>
      </div>
      
      {/* <Clients items= {this.state.data}/> */}
      <Route path="/clients" exact render={() =>  <Clients items= {this.state.clients}/>} />
      <Route path="/actions" exact render={() =>  <Actions items= {this.state.clients} addClient = {this.addClient} makeOwnersList ={this.makeOwnersList} makeClientList = {this.makeClientList}/>} />
      <Route path="/analytics" exact render={() =>  <Analytics clients= {this.state.clients}/>} />


      {/* <Route path="/clients" exact component={Clients}/>
      <Route path="/actions" exact component={Actions}/>
      <Route path="/analytics" exact component={Analytics}/> */}
      
      </div>

      </Router> 
    );
  }
}

export default App;


/*   async getItems (){
    return axios.get ("http://localhost:4286/transactions")
  }
  
  async componentDidMount() {
    const response = await this.getItems()
    this.setState({ items: response.data })
  } */


  /* setTimeout(() => {
    let data = require('../data.json')
    this.setState({ data: data })
  }, 100) */