import PropTypes from 'prop-types';
import './Amount.scss';

const Amount = ({ amount, selectedCurrency }) => {
  let convertedAmount = selectedCurrency
    ? amount * selectedCurrency.rate
    : amount;

  convertedAmount = convertedAmount.toFixed(2);

  return (
    <div className="amount">
      <p className="amount-value">{convertedAmount}</p>
      {selectedCurrency ? (
        <p className="amount-currency">{selectedCurrency.name}</p>
      ) : (
        <p className="amount-currency">Sélectionner une currency</p>
      )}
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.number.isRequired,
  selectedCurrency: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Amount;
