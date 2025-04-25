<<<<<<< HEAD
# Real-Time Crypto Price Tracker

## Overview
This is a responsive React + Redux Toolkit application that tracks real-time cryptocurrency prices. It simulates WebSocket updates using `setInterval` and manages all state via Redux.

## Features
- Displays 5 cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Cardano (ADA), and Ripple (XRP).
- Responsive table with columns for index, logo, name, symbol, price, percentage changes (1h, 24h, 7d), market cap, 24h volume, circulating supply, max supply, and a 7-day chart.
- Color-coded percentage changes: green for positive, red for negative.
- Simulated real-time updates every 1-2 seconds with random changes to price, percentage changes, and 24h volume.
- State management using Redux Toolkit with selectors to optimize re-renders.

## Tech Stack
- React
- Redux Toolkit
- CSS for styling

## Architecture
- **Components**:
  - `CryptoTable`: Displays the table of cryptocurrencies.
  - `CryptoRow`: Displays each row in the table.
  - `Chart`: Displays a static 7-day chart image.
- **Redux Store**:
  - `assetsSlice`: Manages the state of cryptocurrency assets and simulates updates.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

## Demo
Include a 2-5 minute walkthrough video or GIF demonstrating:
- The UI layout
- Live updates of the crypto prices
- The flow of state management
- Your thought process during development

## Bonus (Optional)
- Real WebSocket integration for live data
- Filters and sorting features
- LocalStorage support for user preferences
- Unit tests for reducers and selectors
- TypeScript conversion for type safety

## License
MIT License
=======
# realtime-crypto-tracker
>>>>>>> 488bb4ccf3bf66c2d31998246a6084d5fca7c566
