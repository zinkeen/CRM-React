import React, { Component } from 'react';
import Badgets from './subanalytics/Badgets';
import Charts from './subanalytics/Charts';




class Analytics extends Component {
    
  render() {
    
    return (
      <div className="Analytics">
      <Badgets clients= {this.props.clients}/>
      <Charts clients = {this.props.clients}/>

     <span>You are in Analytics</span>
   
      </div>
    );
  }
}

export default Analytics;
