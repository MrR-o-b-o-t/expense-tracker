import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends React.Component {
  state = {
    expenses: []
  };

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
        <Table expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
