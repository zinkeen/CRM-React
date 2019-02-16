import React, { Component } from 'react';
import TopEmp from './TopEmp';
import SalebyCountry from './SalebyCountry';




class Charts extends Component {
  constructor(props){
    super(props)
}
  
  render() {
    console.log(this.props.clients)
    return (
      <div className="Charts">
      <TopEmp clients = {this.props.clients}/>
      <SalebyCountry clients = {this.props.clients}/>
      </div>
    );
  }
}

export default Charts ;