import React, { Component } from 'react';



class Tank extends Component {


  render(){
    const { tanks } = this.props;
    const tankList = tanks.filteredTanks.map(tank => {
      return (
        <div className="tank" key={tank.id}>
          <div>Tank: { tank.name }</div>
          <div>Night Vision: { tank.body }</div>
        </div>
      )
    })
    return(
      <div className="tank-list">
        { tankList }
      </div>
    )
  }
  

  
  

}

export default Tank;