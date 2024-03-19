import React from 'react'

const ResetBtn = (props) => {

  return (
    <button className='reset-btn' onClick={props.handleReset}>All Reset</button>
  )
}

export default ResetBtn