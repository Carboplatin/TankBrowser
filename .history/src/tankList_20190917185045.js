import React, { Component } from 'react';
import Tank from './tank';

const TankList = (props)=> {
  let tanks = props.tanks.map((tank)=>{
    return <Tank name={tank.name} body={tank.body}/>
  })
  return (
    <div>
        {tanks}

        
    </div>
  )
}

export default TankList;