import React, { Component } from 'react'
import BoxClass from './classComponent/BoxClass';
import  "./App.css";

export default class AppClass extends Component {
  constructor(props){
    super(props);

    // 한번에 생성하고 setState로 한번에 업데이트한다.
    this.state= {
        counter2:0,
        num:1,
        value:0
    };
  }

  // 함수 작성
  increase = () => {
    // class에서 제공해주는 setState 함수
    this.setState({counter2:this.state.counter2 + 1,value:this.state.value+1})
  };

  render() {
    return (
      <div>
        <div>
            state:{this.state.counter2}
        </div>
        <button onClick={this.increase}>
            클릭!
        </button>
        <BoxClass num={this.state.counter2}/>

      </div>
    )
  }
}
