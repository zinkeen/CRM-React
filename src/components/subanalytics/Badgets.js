import React, { Component } from 'react';
import Emailsent from './Emailsent';
import Hotcountry from './Hotcountry';
import Newclients from './Newclients';
import Outstandingclients from './Outstandingclients';



class Badgets extends Component {
  render() {
    let clients = this.props.clients
    let emailssent  = clients.map(w=>w.emailType)
    let outstandingc = clients.map(w=>w.sold)
    let dates = clients.map(w=>w.firstContact)
    let countries = clients.filter(w=>w.sold===true).map(w=>w.country)
    // console.log(countries)
    
    return (
      
      <div className="Badgets">
      

  
     <Emailsent emailarray = {emailssent}/>
     <Hotcountry countryarray={countries}/>
     <Newclients datesarray  = {dates}/>
     <Outstandingclients soldarray = {outstandingc}/>
     
      </div>
    );
  }
}

export default Badgets ;