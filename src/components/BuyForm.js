import { useState, useEffect } from 'react';
import InputBase from './InputBase';

const BuyForm = ({ data }) => {
  const { name, rate } = data;
  const INIT = { amount: 0, converted: 0 };
  const [exchange, setExchange] = useState(INIT);

  useEffect(() => {
    setExchange({
      ...exchange,
      converted: Number(exchange.amount / rate).toFixed(4),
    });
  }, [name]);

  const handleChange = ({ target: { value, name } }) => {
    const val = Number(value.trim());
    const converted = (val / rate).toFixed(4);

    setExchange({
      [name]: val,
      converted,
    });
  };

  return (
    <form className='form'>
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
