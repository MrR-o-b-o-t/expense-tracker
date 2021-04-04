import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  state = {
    expenses: []
  };

  deleteExpense = (item) => {
    const expenseArray = this.state.expenses;
    let index = expenseArray.findIndex( elem => {
      if(elem.name === item[1]) {
        return true;
      }
    })
    expenseArray.splice(index, 1);
    this.setState({ expenses: expenseArray })
    //}
}

  addExpense = expense => {
    this.setState({
      expenses: [...this.state.expenses, expense]
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form addExpenses={this.addExpense} />
        <Table expenses={this.state.expenses} deleteRow={this.deleteExpense} />
      </div>
    );
  }
}

export default App;
