import React, { Component } from 'react';
import SearchBox from './searchBox';
import TankList from './tankList';



class App extends Component {

  state = {
    tanks: [
      {id: '1', name: 'sherman', body: 'night vision' },
      {id: '2', name: 'panther', body: 'no night vision' },
      {id: '3', name: 'tiger', body: 'night vision' },
      {id: '4', name: 'crusider', body: 'night vision' },
      {id: '5', name: 'archer', body: 'no night vision' },
      {id: '6', name: 'vickers', body: 'no night vision' },
      {id: '7', name: 't-34', body: 'night vision' },
    ],
    searchTank: ''
  }

 
  inputHandler = (e) => {
    this.setState({searchTank: e.target.value})
  }

  render ( ) {
    let filteredTanks = this.state.tanks.filter((tank)=>{
      return tank.name.toLowerCase().includes(this.state.searchTank.toLowerCase())
    })

    let filteredProperties = this.state.tanks.filter((property)=>{
      return property.body.toLowerCase().includes(this.state.searchTank.toLowerCase())
    })
      
    return (
      <div className="container">
        <h1>Tank browser</h1>
          <SearchBox inputHandler={this.inputHandler}/>
          <TankList filteredTanks={filteredTanks} filteredProperties={filteredProperties}/>
      </div>

    )
    
  }
}


export default App;
