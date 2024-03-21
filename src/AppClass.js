import React, { Component } from 'react'
import BoxClass from './classComponent/BoxClass';
import  "./App.css";
import ScoreClass from './classComponent/ScoreClass';
import SelectBtnClass from './classComponent/SelectBtnClass';
import ResetBtnClass from './classComponent/ResetBtnClass';

const choice = {
  rock:{
    name:"Rock",
    img:"/image/item/rock.png"
  },
  scissor:{
    name:"Scissor",
    img:"/image/item/scissor.png"
  },
  paper:{
    name:"Paper",
    img:"/image/item/paper.png"
  }
}


export default class AppClass extends Component {
  constructor(props){
    super(props);

    // 한번에 생성하고 setState로 한번에 업데이트한다.
    this.state= {
        userSelect:null,
        computerSelect:null,
        result:"",
        scoreNumber:{user:0,computer:0}
    };
  }

  randomChoice = () => {
    // Object.keys : key값을 가지고 배열을 만들어줌
    let itemArray = Object.keys(choice);
    
    // Math.random(); - 0~1 사이 랜덤한 값을 가져옴
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  }


  judgement = (user, computer) => {
    let gameResult;
    // 1. user가 'Rock'일 경우
    // - user의 값 : 가위(Win), 바위(Tie), 보(Lose)
    // - computer의 값 : 가위(Lose), 바위(Tie), 보(Win)
    // 2. user가 'Scissor'일 경우
    // - user의 값 : 가위(Tie), 바위(Lose), 보(Win)
    // - computer의 값 : 가위(Tie), 바위(Win), 보(Lose)
    // 3. user가 'Paper'일 경우
    // - user의 값 : 가위(Lose), 바위(Win), 보(Tie)
    // - computer의 값 : 가위(Win), 바위(Lose), 보(Tie)

    if(user.name === computer.name ){
      gameResult = "Tie";
    } else if(user.name === "Rock"){
      gameResult = computer.name === "Scissor" ?  "Win" :  "Lose";
    } else if(user.name === "Scissor"){
      gameResult = computer.name === "Paper" ?  "Win" :  "Lose";
    } else if(user.name === "Paper"){
      gameResult = computer.name === "Rock" ?  "Win" :  "Lose";
    }
      
    if(gameResult === "Win"){
      this.setState({scoreNumber:{user: this.state.scoreNumber.user+1, computer: this.state.scoreNumber.computer}})
    } else if(gameResult === "Lose"){
      this.setState({scoreNumber:{user: this.state.scoreNumber.user, computer: this.state.scoreNumber.computer+1}})
    }
    return gameResult;
  }


  play = (choiceText) =>{
    this.setState({userSelect:choice[choiceText]});

    // computer Random Logic
    let computerChoice = this.randomChoice();
    this.setState({computerSelect: computerChoice});

    this.setState({result: this.judgement(choice[choiceText], computerChoice)});
  }

  handleReset = () => {
    this.setState({
      userSelect:null,
      computerSelect:null,
      result:"",
      scoreNumber:{user:0,computer:0}
    });
  }

  render() {
    return (
      <div className='main'>
      {/* Game Img */}
      <div className="contents-wrap">
        <div className='img-wrap'>
          <ScoreClass score={this.state.scoreNumber.user}/>
          <BoxClass name="user" item={this.state.userSelect} result={this.state.result}/>
        </div>
        <div className='img-wrap'>
          <ScoreClass score={this.state.scoreNumber.computer}/>
          <BoxClass name="computer" item={this.state.computerSelect} result={this.state.result}/>
        </div>
      </div>
      {/* Btn */}
      <div className='btn-wrap'>
        <SelectBtnClass value="scissor" img={choice.scissor.img} select={this.play} />
        <SelectBtnClass value="rock" img={choice.rock.img} select={this.play} />
        <SelectBtnClass value="paper" img={choice.paper.img} select={this.play} />
      </div>
      <div>
        <ResetBtnClass handleReset={this.handleReset}/>
      </div>
    </div>
    )
  }
}
