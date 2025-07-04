import React from 'react';
import { Card, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const MetricCard = ({ title, value, change }) => {
  const isPositive = change.startsWith('+');

  return (
    <Card className="metric-card" hoverable>
      <Text className="metric-title">{title}</Text>
      <Title level={3} className="metric-value">{value}</Title>
      <Text className={isPositive ? 'metric-change positive' : 'metric-change negative'}>
        {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {change}
      </Text>
    </Card>
  );
};

export default MetricCard;