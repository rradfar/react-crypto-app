import React, { useState } from 'react';
import CryptoTile from './CryptoTile';
import btcImage from '../assets/btc.png';
import ethImage from '../assets/eth.png';
import xemImage from '../assets/xem.png';
import BuyForm from './BuyForm';
import Transactions from './Transactions';

const Home = () => {
  const currencies = [
    { id: 1, icon: btcImage, name: 'BTC', rate: 68332 },
    { id: 2, icon: ethImage, name: 'ETH', rate: 2265 },
    { id: 3, icon: xemImage, name: 'XEM', rate: 0.772 },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [list, setList] = useState([]);

  const handleSelect = data => {
    setSelectedCurrency(data);
  };

  const buildList = list => {
    setList(list);
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
          <BuyForm data={selectedCurrency} onPurchase={buildList} />
        </div>
        <div className='col-6'>
          <Transactions list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
