import React from "react";

class ChangeColor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isRed: true
      }
  }

  SquareClick = () => {
    this.setState(({ isRed }) => ({ isRed: !isRed }))
  }

  render() {
    return (
      <div className='block'>
        <div
          className={`square ${this.state.isRed ? 'red' : 'blue'}`}
          onClick={this.SquareClick}
        ></div>
        <div
          className={`square ${this.state.isRed ? 'blue' : 'red'}`}
          onClick={this.SquareClick}
        ></div>
      </div>
    );
  }
}

export default ChangeColor;
