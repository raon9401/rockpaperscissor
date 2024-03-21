import React, { Component } from 'react'

export default class ScoreClass extends Component {
  render() {
    return (
        <div>
            <h1>
                {this.props.score}
            </h1>
        </div>
      )
  }
}
