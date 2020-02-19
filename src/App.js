import React, { Component } from 'react';
import ToDoApp from 'components/ToDoApp'

import 'antd/dist/antd.css';
import 'assets/css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: null
    };
  }

  render() {
    return (
      <div className="test-app-container">
        <ToDoApp />
      </div>
    );
  }
}

export default App;