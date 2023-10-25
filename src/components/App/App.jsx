/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';

import Amount from '../Amount/Amount';
import Currencies from '../Currencies/Currencies';
import Header from '../Header/Header';

import currenciesData from '../../data/currencies';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: null,
    };
  }

  handleCurrencySelect = (currency) => {
    this.setState({
      selectedCurrency: currency,
    });
  };

  render() {
    return (
      <div className="App">
        <Header amount={currenciesData.amount} />
        <Currencies
          currenciesList={currenciesData.currencies}
          onCurrencyClick={this.handleCurrencySelect}
        />
        <Amount
          amount={currenciesData.amount}
          selectedCurrency={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

export default App;
