import React from 'react'


const selectText = {
    "rock": "바위",
    "scissor": "가위",
    "paper": "보"
}

const SelectBtn = (props) => {


    return (
      <button className='btn' onClick={() => props.select(props.value)}>
        <img src={props.img} alt="button img"/>
      </button>
    )
}

export default SelectBtn