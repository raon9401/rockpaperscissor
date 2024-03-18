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

  const [userSelect, setUserSelect] = useState(choice.scissor);
  const [computerSelect, setComputerSelect] = useState(null);

  // computer Random Logic
  const randomChoice = () => {
    // Object.keys : key값을 가지고 배열을 만들어줌
    let itemArray = Object.keys(choice);
    // console.log(itemArray);
    
    // Math.random(); - 0~1 사이 랜덤한 값을 가져옴
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let result = itemArray[randomItem];

    return choice[result];
  }

  const select = (choiceText) =>{
    setUserSelect(choice[choiceText]);

    // computer Random Logic
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  }

  return (
    <div className='main'>
      <div className="img-wrap">  
        <Box name="user" item={userSelect}/>
        <Box name="computer" item={computerSelect}/>
      </div>
      <div>
        <SelectBtn text="scissor" select={select}/>
        <SelectBtn text="rock" select={select}/>
        <SelectBtn text="paper" select={select}/>
      </div>
    </div>
  );
}

export default App;
