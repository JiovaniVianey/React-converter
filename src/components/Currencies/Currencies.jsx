import PropTypes from 'prop-types';

import './Currencies.scss';

const Currencies = ({ currenciesList, onCurrencyClick }) => {
  // Gestionnaire de clic pour une devise
  const handleCurrencyClick = (currency) => {
    onCurrencyClick(currency);
  };

  return (
    <div className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul>
        {currenciesList.map((currentCurrency) => (
          <li
            className="currency"
            key={currentCurrency.name}
            onClick={() => handleCurrencyClick(currentCurrency)}
          >
            {currentCurrency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
