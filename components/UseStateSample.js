// import * as React from 'react'
// const { useState } = React;

import React, { useState } from 'react'


// 関数コンポーネントで書いた場合
const UseStateSample = () => {
  const [count, setCount] = useState(0);

  return(
    <p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </p>
  )
}


// const SuperButton = ({ onClick, children }) => {
//   const onclickHere =
//     onClick &&
//     (e => {
//       for (const _ of [0,1,2,3,4]) onClick(e);
//     });
//   return <button onClick={onclickHere}>{children}</button>;
// };
//
// const UseStateSample = () => {
//   const [count, setCount] = useState(0);
//
//   return (
//     <p>
//       <SuperButton onClick={() => setCount(count - 1)}>-</SuperButton>
//       <b>{count}</b>
//       <SuperButton onClick={() => setCount(count => count + 1)}>+</SuperButton>
//     </p>
//   )
// }

// 複数のステートを用いる
// const UseStateSample = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//
//   return (
//     <p>
//       <b>{left}</b>
//       <button onClick={() => {
//           setLeft(left + 1 );
//           setRight(right - 1);
//         }}
//       >←</button>
//
//       <b>{right}</b>
//       <button onClick={() => setRight(right + 1)}>+</button>
//     </p>
//   )
// }

export default UseStateSample;

// const UseStateSample = () => {
//   return (
//     <h1>Counter</h1>
//   )
// }
  // const [count, setCount] = useState(0);
  //
  // <p>
  //   <button onClick={() => setCount(count, - 1)}>-</button>
  //   <p>{count}</p>
  //   <button onClick={() => setCount(count, + 1)}>+</button>
  // </p>
// )


// classコンポーネントで書いた場合
// export default class UseStateSample extends React.Component {
//   state = { count: 0 };
//   render() {
//     const { count } = this.state;
//     return (
//       <p>
//         <button onClick={() => this.setState({ count: count - 1 })}>-</button>
//         <p>{count}</p>
//         <button onClick={() => this.setState({ count: count + 1 })}>+</button>
//       </p>
//     )
//   }
// }

// import React, { Component } from 'react'
//
// export default class Counter extends Component {
//   msgStyle = {
//     fontSize: "16pt",
// 	backgroundColor: "#eef",
// 	padding: "5px"
//   }
//
//   constructor(props){
// 	super(props);
// 	this.state = {
// 		counter: 0,
// 		msg: 'counter: 0',
// 	};
// 	this.doAction = this.doAction.bind(this);
//   }
//
//   doAction(){
// 	this.setState((state) =>{
// 		const num = state.counter + 1;
// 		return ({
// 		  counter: num,
// 		  msg: "counter: " + num
// 		});
// 	});
//   }
//
//   render(){
// 	return <p onClick={this.doAction}
// 		style={this.msgStyle}>
// 	  {this.state.msg}
// 	</p>;
//   }
// }
