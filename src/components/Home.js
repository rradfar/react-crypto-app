import React, { useState } from 'react';
import CryptoTile from './CryptoTile';
import btcImage from '../assets/btc.png';
import ethImage from '../assets/eth.png';
import xemImage from '../assets/xem.png';

const Home = () => {
  const currencies = [
    { id: 1, icon: btcImage, name: 'BTC', rate: '68,332' },
    { id: 2, icon: ethImage, name: 'ETH', rate: '2,265' },
    { id: 3, icon: xemImage, name: 'XEM', rate: '0.772' },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleSelect = data => {
    setSelectedCurrency(data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex'>
            {currencies.map(currency => (
              <CryptoTile
                key={currency.id}
                data={currency}
                selected={currency.id === selectedCurrency.id}
                onClick={handleSelect}
              />
            ))}
          </div>
        </div>
        <div className='col-6'>col 2</div>
      </div>
    </div>
  );
};

export default Home;
