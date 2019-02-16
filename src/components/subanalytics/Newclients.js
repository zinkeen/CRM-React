import React, { Component } from 'react';


//  used 2018 for example see year
class Newclients extends Component {
  render() {
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
      let today = new Date()
      let month = today.getUTCMonth()
      let year = today.getFullYear()-1 
      let searchdates = this.props.datesarray
      let currentyear = searchdates.filter(w=>new Date(w).getFullYear()===year)
      let currentmonth = currentyear.filter(w => new Date(w).getUTCMonth()===month)
      let currentmonthDisc = new Date(currentmonth[0]).getUTCMonth()
      console.log(currentmonthDisc)
    return (
      <div className="Newclients">
      <span>{currentmonth.length} New {monthNames[currentmonthDisc]} Client(s)</span>
      
      
      </div>
    );
  }
}

export default Newclients ;