import React from 'react'

// 1. Box 2개(타이틀, 사진, 결과)
//    - user Box, computer Box

const Box = (props) => {
  // console.log(props);
  let result = props.result;
  if(props.name === "computer"){
    if(props.result === "Win"){
      result = "Lose";
    } else if(props.result === "Lose"){
      result = "Win";
    }
  } else {
    result = props.result;
  }


  return (
    <div className={`box ${result.toLowerCase()}`}>
        <h1>{props.name}</h1>
        {/* 가위바위보 선택 이미지 */}
        {/* '&&' 를 통해서 값이 없을 경우에 대비함. */}
        <img src={props.item ? props.item.img : '/image/item/random.png'} alt={props.name}/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box