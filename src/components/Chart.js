import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ priceHistory }) => {
  // Prepare data for Recharts
  const data = priceHistory.map((price, index) => ({
    time: index,
    price,
  }));

  return (
    <ResponsiveContainer width={100} height={40}>
      <LineChart data={data}>
        <XAxis dataKey="time" hide />
        <YAxis domain={['auto', 'auto']} hide />
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
