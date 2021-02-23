import { useState, useEffect, useCallback } from 'react';
import InputBase from './InputBase';

const BuyForm = ({ data, onPurchase }) => {
  const { name, rate } = data;
  const INIT = { amount: 0, converted: 0 };
  const [exchange, setExchange] = useState(INIT);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setExchange({
      ...exchange,
      converted: Number(exchange.amount / rate).toFixed(4),
    });
  }, [name]);

  useEffect(() => {
    onPurchase(transactions);
  }, [transactions]);

  const generateID = prefix => {
    Math.random()
      .toString(36)
      .replace('0.', prefix || '');
  };

  const handleChange = ({ target: { value, name } }) => {
    const val = Number(value.trim());
    const converted = (val / rate).toFixed(4);

    setExchange({
      [name]: val,
      converted,
    });
  };

  const makePurchase = useCallback(
    e => {
      e.preventDefault();
      if (!exchange.amount) {
        alert('Please enter an amount.');
      }

      const payload = {
        ...exchange,
        name,
        id: generateID('tranX-id_'),
      };

      setTransactions([...transactions, payload]);
    },
    [exchange, transactions]
  );

  return (
    <form onSubmit={makePurchase} className='form'>
      <div className='input-group mb-3'>
        <InputBase name='amount' label='CAD' onChange={handleChange} />
        <i className='fas fa-exchange-alt'></i>
        <InputBase value={exchange.converted} disabled label={name} />
      </div>
      <input className='btn btn-primary' type='submit' value='Purchase' />
    </form>
  );
};

export default BuyForm;
