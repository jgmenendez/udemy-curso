import React, { Component } from "react";

const HelloRender = (props) => <h1>Hola render!</h1>

class Render extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { mensaje: 'otro mensaje' };
  }

  componentWillMount() {
      console.log('componentWillMount');
  }

  render() {
    console.log('render')
    // return (
    //     <div>
    //         <h4>Elemento DOM aquí</h4>
    //         <HelloRender />
    //         <p>Justo debajo de un componente de React</p>
    //     </div>
    // );

    // return this.state.mensaje === 'mensaje inicial' ? 'sip!' : null;

    return [
        <h1 key='A'>Primer elemento</h1>,
        <HelloRender key='B' />,
        <HelloRender key='C' />,
        <h3 key='D'>Cuarto elemento</h3>
    ]
  }
}

export default Render;