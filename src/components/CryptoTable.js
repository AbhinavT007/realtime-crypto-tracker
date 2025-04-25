import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssets, simulateUpdates } from '../features/assets/assetsSlice';
import CryptoRow from './CryptoRow';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector(selectAssets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulateUpdates());
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="crypto-table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} index={index} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
