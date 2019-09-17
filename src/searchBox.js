import React from 'react';

const searchBox = (props) => {
  return (
    <div>
      <input onChange={props.inputHandler} type="text"/>
    </div>
  )
}

export default searchBox;