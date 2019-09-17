import React, { Component } from 'react';
import Tank from './tank';

const TankList = (props)=> {
  let tanks = props.filteredTanks.map((tank)=>{
    return <Tank name={tank.name} body={tank.body}/>
  })
  return (
    <div>
       <Tank tanks={tanks} />

        
    </div>
  )
}

export default TankList;