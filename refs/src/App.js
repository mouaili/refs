import React, { Component } from 'react';
import MyRef from './components/MyRef';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.refComp = React.createRef();
  }

  handleClickChange = () => {
    this.refComp.current.focus();
  };

  render() {
    console.log(this.refComp);
    return (
      <div className="App">
        <MyRef name="Jhon Becker" ref={this.refComp} />
        <button onClick={this.handleClickChange}>Changer du texte</button>
      </div>
    );
  }
}

export default App;
