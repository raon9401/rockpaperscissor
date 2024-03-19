// CSS
import './App.css';

// State
import { useState } from 'react';

// Component
import Box from './component/Box';
import SelectBtn from './component/SelectBtn';

// 1. Box 2개(타이틀, 사진, 결과)
//    - user Box, computer Box
// 2. 가위, 바위, 보 버튼 (버튼 3개)
// 3. 버튼 클릭 시 user Box에 클릭 값(가위,바위,보)이 나옴
// 4. computer Box의 값은 랜덤하게 선택됨
// 5. 3,4 의 결과를 가지고 누가 이겼는지 승패가 결과로 나옴
// 6. 승패에 따라 Box의 색상이 변경됨
//    - 승리시 Box 색상 초록(green), 패배시 Box 색상 빨강(red)

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

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // computer Random Logic
  const randomChoice = () => {
    // Object.keys : key값을 가지고 배열을 만들어줌
    let itemArray = Object.keys(choice);
    
    // Math.random(); - 0~1 사이 랜덤한 값을 가져옴
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  }

  const judgement = (user, computer) => {
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
      return "Tie";
    } else if(user.name === "Rock"){
      return computer.name === "Scissor" ?  "Win" :  "Lose";
    } else if(user.name === "Scissor"){
      return computer.name === "Paper" ?  "Win" :  "Lose";
    } else if(user.name === "Paper"){
      return computer.name === "Rock" ?  "Win" :  "Lose";
    }
  }

  const play = (choiceText) =>{
    setUserSelect(choice[choiceText]);

    // computer Random Logic
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[choiceText], computerChoice));
  }


  return (
    <div className='main'>
      <div className="img-wrap">  
        <Box name="user" item={userSelect} result={result}/>
        <Box name="computer" item={computerSelect} result={result}/>
      </div>
      <div className='btn-wrap'>
        <SelectBtn value="scissor" img={choice.scissor.img} select={play}/>
        <SelectBtn value="rock" img={choice.rock.img} select={play}/>
        <SelectBtn value="paper" img={choice.paper.img} select={play}/>
      </div>
    </div>
  );
}

export default App;
