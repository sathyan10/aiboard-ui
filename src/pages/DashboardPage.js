import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Card, Statistic, Select, DatePicker, Spin, theme } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LoadingOutlined } from '@ant-design/icons';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import CountUp from 'react-countup';
import Navbar from '../components/Layout/Navbar';
import '../styles/Dashboard.css';

const { Content, Header } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { useToken } = theme;

const DashboardPage = () => {
  const { token } = useToken();
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMetrics([
        { title: 'Total Users', value: 12345, change: '+5.2%', prefix: '', precision: 0, color: token.colorPrimary },
        { title: 'Active Sessions', value: 1234, change: '-2.1%', prefix: '', precision: 0, color: '#10b981' },
        { title: 'Revenue', value: 45678, change: '+8.7%', prefix: '$', precision: 0, color: '#8884d8' },
        { title: 'Engagement', value: 78, change: '+3.4%', prefix: '', suffix: '%', precision: 1, color: '#ffc53d' },
      ]);
      setLoading(false);
    }, 1500);
  }, [token.colorPrimary]);

  const chartData = [
    { name: 'Jan', users: 4000, sessions: 2400, revenue: 12000 },
    { name: 'Feb', users: 3000, sessions: 1398, revenue: 9000 },
    { name: 'Mar', users: 5000, sessions: 2800, revenue: 15000 },
    { name: 'Apr', users: 2780, sessions: 3908, revenue: 13000 },
    { name: 'May', users: 1890, sessions: 4800, revenue: 11000 },
    { name: 'Jun', users: 2390, sessions: 3800, revenue: 14000 },
    { name: 'Jul', users: 3490, sessions: 4300, revenue: 16000 },
  ];

  const barData = [
    { name: 'Mon', value: 20 },
    { name: 'Tue', value: 35 },
    { name: 'Wed', value: 25 },
    { name: 'Thu', value: 40 },
    { name: 'Fri', value: 30 },
    { name: 'Sat', value: 15 },
    { name: 'Sun', value: 10 },
  ];

  const AnimatedMetricCard = ({ title, value, change, prefix = '', suffix = '', precision = 0, color }) => {
    const isPositive = change.startsWith('+');

    return (
      <Card className="metric-card" hoverable>
        <div className="metric-title">{title}</div>
        <Statistic
          value={value}
          prefix={prefix}
          suffix={suffix}
          precision={precision}
          valueStyle={{ color }}
          formatter={(value) => (
            <CountUp
              end={value}
              duration={2.5}
              separator=","
              decimals={precision}
            />
          )}
          className="metric-value"
        />
        <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? (
            <ArrowUpOutlined style={{ color: token.colorSuccess }} />
          ) : (
            <ArrowDownOutlined style={{ color: token.colorError }} />
          )}
          <span style={{ marginLeft: 4 }}>{change}</span>
        </div>
      </Card>
    );
  };

  return (
    <Layout className="dashboard-wrapper">
      <Header className="custom-navbar">
        <Navbar />
      </Header>
      <Content className="dashboard-content">
        <div className="dashboard-controls">
          <Select
            defaultValue="week"
            style={{ width: 120 }}
            className="time-selector"
          >
            <Option value="day">Today</Option>
            <Option value="week">This Week</Option>
            <Option value="month">This Month</Option>
            <Option value="year">This Year</Option>
          </Select>
          <RangePicker
            style={{ width: 250 }}
            className="date-picker"
          />
        </div>

        {loading ? (
          <div className="loading-spinner">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color: token.colorPrimary }} spin />} />
          </div>
        ) : (
          <>
            <Row gutter={[16, 16]} className="metric-row">
              {metrics.map((metric, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <AnimatedMetricCard {...metric} />
                </Col>
              ))}
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
              <Col xs={24} lg={16}>
                <Card className="chart-card animated-card">
                  <h3 className="chart-title">User Activity</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={token.colorPrimary} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={token.colorPrimary} stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--tag-bg)" />
                      <XAxis dataKey="name" stroke="var(--text-color)" />
                      <YAxis stroke="var(--text-color)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--bubble-bg)',
                          borderColor: 'var(--sidebar-border)',
                          borderRadius: 8,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="users"
                        stroke={token.colorPrimary}
                        fillOpacity={1}
                        fill="url(#colorUsers)"
                        strokeWidth={2}
                        animationDuration={2000}
                      />
                      <Area
                        type="monotone"
                        dataKey="sessions"
                        stroke="#10b981"
                        fillOpacity={1}
                        fill="url(#colorSessions)"
                        strokeWidth={2}
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card className="chart-card animated-card">
                  <h3 className="chart-title">Daily Performance</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--tag-bg)" />
                      <XAxis dataKey="name" stroke="var(--text-color)" />
                      <YAxis stroke="var(--text-color)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--bubble-bg)',
                          borderColor: 'var(--sidebar-border)',
                          borderRadius: 8,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#8884d8"
                        animationDuration={2500}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
              <Col span={24}>
                <Card className="chart-card animated-card">
                  <h3 className="chart-title">Revenue Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--tag-bg)" />
                      <XAxis dataKey="name" stroke="var(--text-color)" />
                      <YAxis stroke="var(--text-color)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--bubble-bg)',
                          borderColor: 'var(--sidebar-border)',
                          borderRadius: 8,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#ff7c7c"
                        strokeWidth={3}
                        dot={{ r: 4, stroke: '#ff7c7c', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#ff7c7c' }}
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Content>
    </Layout>
  );
};

export default DashboardPage;