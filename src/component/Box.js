import React from 'react'

// 1. Box 2개(타이틀, 사진, 결과)
//    - user Box, computer Box

const Box = (props) => {
  console.log(props);

  return (
    <div className='box'>
        <h1>{props.name}</h1>
        {/* 가위바위보 선택 이미지 */}
        {/* '&&' 를 통해서 값이 없을 경우에 대비함. */}
        <img src={props.item ? props.item.img : '/image/item/random.png'} alt={props.name}/>
    </div>
  )
}

export default Box