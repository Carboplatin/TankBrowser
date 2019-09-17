import React, { Component } from 'react';
import SearchBox from './searchBox';
import TankList from './tankList';



class App extends Component {

  state = {
    tanks: [
      {id: '1', name: 'sherman', body: 'night vision' },
      {id: '2', name: 'panther', body: 'no night vision' },
      {id: '3', name: 'tiger', body: 'night vision' },
      {id: '4', name: 'crusider', body: 'night vision' }
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
      
    return (
      <div className="container">
        <h1>Tank browser</h1>
          <SearchBox inputHandler={this.inputHandler}/>
          <TankList filteredTanks={filteredTanks}/>
      </div>

    )
    
  }
}


export default App;
