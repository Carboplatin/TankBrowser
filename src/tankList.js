import React from 'react';
import Tank from './tank';

const TankList = (props)=> {
  let tanks = props.filteredTanks.map((tank, i)=>{
    return <Tank key={i} name={tank.name} body={tank.body}/>
  })

  let properties = props.filteredProperties.map((tank, i)=>{
    return <Tank key={i} name={tank.name} body={tank.body}/>
  })

  return (
    <div>
       {tanks} {properties}
       
    </div>
  )
}

export default TankList;

        