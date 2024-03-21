import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    let result = this.props.result;
    if(this.props.name === "computer"){
      if(this.props.result === "Win"){
        result = "Lose";
      } else if(this.props.result === "Lose"){
        result = "Win";
      }
    } else {
      result = this.props.result;
    }

    return (
      <div className={`box ${result.toLowerCase()}`}>
          <h1>{this.props.name}</h1>
          {/* 가위바위보 선택 이미지 */}
          {/* '&&' 를 통해서 값이 없을 경우에 대비함. */}
          <img src={this.props.item ? this.props.item.img : '/image/item/random.png'} alt={this.props.name}/>
          <h2>{result}</h2>
      </div>
    )
  }
}
