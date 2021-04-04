import React from 'react';

class AddButton extends React.Component {
  constructor() {
    super();
    this.state = {
      type: null,
      name: null,
      date: null,
      amount: null
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    document.getElementById('type').innerText = e.target.value;
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          className="btn btn-info mt-5 mb-5"
          onClick={e => this.handleInput(e, 'value')}
        >
          Add Expense
        </button>
      </div>
    );
  }
}

export default AddButton;
