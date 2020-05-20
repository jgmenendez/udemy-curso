import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Hello(props) {
//   return <h2>{ props.title }</h2>
// }

// const Hello = (props) => <h2>{ props.title }</h2>

class Hello extends Component {
  render() {
    return <h2>{ this.props.title }</h2>
  }
}

class Text extends Component {
  render() {
    const { arrayOfNumbers, multiply, objectWithInfo, title } = this.props;
    const mappedNumbers = arrayOfNumbers.map(multiply);

    return (
      <div>
        { title }
        <p>{ mappedNumbers.join(', ') }</p>
        <p>{ objectWithInfo.key }</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Hello title="Hello from props" />
        <Text 
          arrayOfNumbers={ [2, 3, 10] }
          multiply={ (number) => number * 3 }
          number={ 2 } 
          objectWithInfo={{ key: 'value', key2: 'otherValue' }}
          title={ <h1>Este es el titulo</h1> }
        />
      </div>
    );
  }
}

export default App;
