import React from 'react';
import Chart from './Chart';

const CryptoRow = ({ index, asset }) => {
  const {
    logo,
    name,
    symbol,
    price,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    market_cap,
    volume_24h,
    circulating_supply,
    max_supply,
    priceHistory,
  } = asset;

  const getColor = (value) => (value >= 0 ? 'green' : 'red');

  const formatNumber = (num) => {
    if (num === null || num === undefined) return '-';
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
    return num.toLocaleString();
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={logo} alt={name} style={{ width: 24, height: 24 }} />
      </td>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>${price.toLocaleString()}</td>
      <td style={{ color: getColor(percent_change_1h) }}>{percent_change_1h}%</td>
      <td style={{ color: getColor(percent_change_24h) }}>{percent_change_24h}%</td>
      <td style={{ color: getColor(percent_change_7d) }}>{percent_change_7d}%</td>
      <td>${formatNumber(market_cap)}</td>
      <td>${formatNumber(volume_24h)}</td>
      <td>{formatNumber(circulating_supply)}</td>
      <td>{max_supply ? formatNumber(max_supply) : '-'}</td>
      <td><Chart priceHistory={priceHistory} /></td>
    </tr>
  );
};

export default CryptoRow;
