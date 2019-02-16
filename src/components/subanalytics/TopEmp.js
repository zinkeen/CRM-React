import React, { Component } from 'react';



class TopEmp extends Component {
    constructor(props){
        super(props)
    }

  render() {
     let sold = this.props.clients.filter(w => w.sold===true)
     let owners = sold.map(o=>o.owner)

     let count= owners.reduce((tally, owner) => {
        tally[owner] = (tally[owner] || 0) + 1 ;
        return tally;
      } ,{})

      let getSorted = array => {
        return array.sort( (x,y) => {
             return y-x
       });
    }

    let top = getSorted(Object.values(count)).splice(0,3)
     console.log(count)
     console.log(top)
    return (
      <div className="TopEmp">
     
      Top Employees
      
      </div>
    );
  }
}

export default TopEmp;