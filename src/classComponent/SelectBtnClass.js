import React, { Component } from 'react'

export default class SelectBtnClass extends Component {
  render() {
    return (
        <button className='btn' onClick={() => this.props.select(this.props.value)}>
          <img src={this.props.img} alt="button img"/>
        </button>
      )
  }
}
