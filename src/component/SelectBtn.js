import React from 'react'


const selectText = {
    "rock": "바위",
    "scissor": "가위",
    "paper": "보"
}

const SelectBtn = (props) => {


    return (
      <button onClick={() => props.select(props.text)}>
        {selectText[props.text]}
      </button>
    )
}

export default SelectBtn