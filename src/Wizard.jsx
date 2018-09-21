import React, { Component } from 'react';
// Classes can be assigned just like regular functions (they can also be unnamed)
class Wizard extends Component {
  render() {
    return (
      <div>
        <p>Wizard's name: {this.props.name || 'Vesper'}</p>
        <p>Wizard's school: {this.props.school || 'Fire'}</p>
      </div>
    );
  }
}

export default Wizard;
