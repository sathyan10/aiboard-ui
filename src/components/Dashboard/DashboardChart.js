import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 4000, sessions: 2400 },
  { name: 'Feb', users: 3000, sessions: 1398 },
  { name: 'Mar', users: 5000, sessions: 2800 },
  { name: 'Apr', users: 2780, sessions: 3908 },
  { name: 'May', users: 1890, sessions: 4800 },
  { name: 'Jun', users: 2390, sessions: 3800 },
];

const DashboardChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--tag-bg)" />
          <XAxis dataKey="name" stroke="var(--text-color)" />
          <YAxis stroke="var(--text-color)" />
          <Tooltip contentStyle={{ backgroundColor: 'var(--bubble-bg)', borderColor: 'var(--sidebar-border)' }} />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="sessions" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;