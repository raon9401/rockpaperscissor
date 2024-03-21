import React, { Component } from 'react'

export default class ResetBtnClass extends Component {
  render() {
    return (
        <button className='reset-btn' onClick={this.props.handleReset}>All Reset</button>
      )
  }
}
