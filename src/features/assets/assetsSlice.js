import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '/images/bitcoin.png',
      price: 30000,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 600000000000,
      volume_24h: 35000000000,
      circulating_supply: 19000000,
      max_supply: 21000000,
      priceHistory: [30000],
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '/images/ethereum.png',
      price: 2000,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 250000000000,
      volume_24h: 20000000000,
      circulating_supply: 120000000,
      max_supply: null,
      priceHistory: [2000],
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      logo: '/images/tether.png',
      price: 1,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 70000000000,
      volume_24h: 50000000000,
      circulating_supply: 70000000000,
      max_supply: null,
      priceHistory: [1],
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      logo: '/images/cardano.png',
      price: 1.2,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 40000000000,
      volume_24h: 3000000000,
      circulating_supply: 33000000000,
      max_supply: 45000000000,
      priceHistory: [1.2],
    },
    {
      id: 'ripple',
      name: 'Ripple',
      symbol: 'XRP',
      logo: '/images/ripple.png',
      price: 0.8,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 35000000000,
      volume_24h: 4000000000,
      circulating_supply: 45000000000,
      max_supply: 100000000000,
      priceHistory: [0.8],
    },
  ],
};

function getRandomChange(value, maxPercent = 5) {
  const changePercent = (Math.random() * 2 - 1) * maxPercent;
  return +(value * (1 + changePercent / 100)).toFixed(2);
}

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAsset(state, action) {
      const { id, price, percent_change_1h, percent_change_24h, percent_change_7d, volume_24h } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        asset.price = price;
        asset.percent_change_1h = percent_change_1h;
        asset.percent_change_24h = percent_change_24h;
        asset.percent_change_7d = percent_change_7d;
        asset.volume_24h = volume_24h;
      }
    },
    simulateUpdates(state) {
      state.assets.forEach((asset) => {
        asset.price = getRandomChange(asset.price);
        asset.percent_change_1h = +(Math.random() * 10 - 5).toFixed(2);
        asset.percent_change_24h = +(Math.random() * 10 - 5).toFixed(2);
        asset.percent_change_7d = +(Math.random() * 10 - 5).toFixed(2);
        asset.volume_24h = getRandomChange(asset.volume_24h);
        // Update price history, keep max 50 points
        asset.priceHistory.push(asset.price);
        if (asset.priceHistory.length > 50) {
          asset.priceHistory.shift();
        }
      });
    },
  },
});

export const { updateAsset, simulateUpdates } = assetsSlice.actions;

export const selectAssets = (state) => state.assets.assets;

export default assetsSlice.reducer;
