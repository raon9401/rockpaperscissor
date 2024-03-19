import React from 'react'

const SelectBtn = (props) => {


    return (
      <button className='btn' onClick={() => props.select(props.value)}>
        <img src={props.img} alt="button img"/>
      </button>
    )
}

export default SelectBtn