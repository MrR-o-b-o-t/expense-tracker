import React, { Component } from "react";

class Form extends Component {
  state = {
    expense: {
      type: "Card",
      name: "",
      date: "",
      amount: "",
    },
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const field = target.name;
    this.setState({
      expense: {
        ...this.state.expense,
        [field]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const expense = this.state.expense;
    this.props.addExpenses(expense);
    this.setState({
      expense: {
        type: "",
        name: "",
        date: "",
        amount: "",
      },
    });
  };
  

  render() {
    const currentDate = () => {
      let currentDate = new Date();
      let cDay = currentDate.getDate();
      let cMonth = currentDate.getMonth() + 1;
      let cYear = currentDate.getFullYear();
      return `${cMonth}/${cDay}/${cYear}`;
    };
    const { type, name, date, amount } = this.state.expense;
    return (
      <form className="container expense-items">
        <div className="row">
          <div className="select col">
            <select
              defaultValue="Card"
              name="type"
              className="btn btn-secondary dropdown-toggle"
              onChange={this.handleInputChange}
              value={type}
            >
              Payment Type
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              <option value="Crypto">Crypto</option>
              <option value="Check">Check</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col input-group mb-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Name:</span>
            </div>
            <div>
              <input
                defaultValue="N/A"
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleInputChange}
                value={name}
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col">
            <input
              defaultValue={currentDate}
              className="mb-3"
              type="date"
              name="date"
              onChange={this.handleInputChange}
              value={date}
            />
          </div>
          <div className="col input-group mb-5">
            <div className="input-group-prepend">
              <span className="input-group-text">Amount:</span>
            </div>
            <div>
              <input
                defaultValue="0"
                type="text"
                name="amount"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleInputChange}
                value={amount}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-info mt-5 mb-5"
          onClick={this.handleSubmit}
        >
          Add Expense
        </button>
      </form>
    );
  }
}

export default Form;
