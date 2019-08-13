import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rect from './Rect'

// stateのマッピング
function mappingState(state) {
  return state;
}


// let theme = {
//   light:{
//     backgroundColor: "#eef",
//     color: "#006",
//     padding: "10px",
//   },
//   dark:{
//     backgroundColor: "#006",
//     color: "#eef",
//     padding: "10px",
//   }
// };
//
// const ThemeContext = React.createContext(theme.dark);

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
export default App;

// storeのコネクト
App = connect()(App);

// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize: "20pt",
    padding: "20px 5px"
  }

  render() {
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

// storeのコネクト
Message = connect(mappingState)(Message);

//
class Button extends Component {
  style = {
    fontSize: "16pt",
    padding: "5px 10px"
  }

  constructor(props){
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでdispatchを実行
  doAction(e) {
    if (e.shiftKey){
      this.props.dispatch({ type: 'DECREMENT' });
    } else {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  }

  render() {
    return (
      <button style={this.style} onClick={this.doAction}>
        click
      </button>
    );
  }
}

// storeのコネクト
Button = connect()(Button);
