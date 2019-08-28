import React, { Component } from 'react';
// Classes can be assigned just like regular functions (they can also be unnamed)
class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spell: '',
    };
  }

  render() {
    return (
      <div>
        <p>Wizard's name: {this.props.name || 'Vesper'}</p>
        <p>Wizard's school: {this.props.school || 'Fire'}</p>
        <button onClick={() => this.setState({ spell: 'Fireball' })}>
          Cast spell
        </button>
        {this.state.spell && <p>{this.props.name} casts fireball!</p>}
      </div>
    );
  }
}

export default Wizard;
