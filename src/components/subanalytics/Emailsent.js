import React, { Component } from 'react';



class Emailsent extends Component {
  render() {
      let emails = this.props.emailarray.filter(w =>w!==null)
      
      console.log(emails)
    return (
      <div className="Emailsent">
      <span>{emails.length}</span>
      
      
      </div>
    );
  }
}

export default Emailsent;