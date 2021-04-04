import React from 'react';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;
    const expenseData = expenses.map(expense => {
      const { type, name, date, amount } = expense;
      return (
        <tr key={expense}>
          <td>{type}</td>
          <td>{name}</td>
          <td>{date}</td>
          <td>{amount}</td>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenseData
          ) : (
            <tr>
              <td>No expenses found.</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default Table;
