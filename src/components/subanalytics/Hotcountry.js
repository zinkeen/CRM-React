import React, { Component } from 'react';



class Hotcountry extends Component {
  render() {
      let countries = this.props.countryarray
     let count = countries.reduce((tally, country) => {
        tally[country] = (tally[country] || 0) + 1 ;
        return tally;
      } , {})
     let getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    }
      let hottestCountry = getMax(count)
      console.log(hottestCountry )
    return (
      <div className="Hotcountry">
      <span>{hottestCountry[0]}</span>
      
      
      </div>
    );
  }
}

export default Hotcountry;