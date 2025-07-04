import React from 'react';
import { Button, Typography, Row, Col, Card, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RocketOutlined, ThunderboltOutlined, BarChartOutlined, TeamOutlined, DashboardOutlined } from '@ant-design/icons';
import HeroSection from '../components/Landing/HeroSection';
import '../styles/Landing.css';

const { Title, Paragraph } = Typography;

const featureCards = [
  {
    icon: <ThunderboltOutlined className="feature-icon" />,
    title: "Instant Insights",
    description: "Get real-time analysis powered by cutting-edge AI technology with our lightning-fast processing engine."
  },
  {
    icon: <BarChartOutlined className="feature-icon" />,
    title: "Data Visualization",
    description: "Beautiful, interactive charts and graphs that transform complex data into clear, actionable insights."
  },
  {
    icon: <TeamOutlined className="feature-icon" />,
    title: "Collaborative",
    description: "Share dashboards and work together with your team in real-time with our seamless collaboration tools."
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <HeroSection />

      <div className="landing-content">
        <div className="fade-in">
          <Title level={1} className="landing-title">
            Transform Your Data With <span className="gradient-text">AI Power</span>
          </Title>
          <Paragraph className="landing-tagline">
            The most intuitive platform to explore, analyze, and visualize your data with artificial intelligence.
            Get actionable insights in minutes, not hours.
          </Paragraph>
          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              className="landing-button"
              onClick={() => navigate('/dashboard')}
              icon={<RocketOutlined />}
            >
              Get Started
            </Button>
            <Button
              size="large"
              className="landing-secondary-button"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              icon={<DashboardOutlined />}
            >
              See Features
            </Button>
          </Space>
        </div>
      </div>

      <div id="features" className="features-section">
        <Title level={2} className="section-title">Powerful Features</Title>
        <Paragraph className="section-subtitle">
          Everything you need to make data-driven decisions with confidence
        </Paragraph>

        <Row gutter={[24, 24]} justify="center" className="features-row">
          {featureCards.map((feature, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <div className={`feature-card-container delay-${index + 1}`}>
                <Card className="feature-card" hoverable>
                  <div className="pulse-animation">{feature.icon}</div>
                  <Title level={4} className="feature-title">{feature.title}</Title>
                  <Paragraph className="feature-description">{feature.description}</Paragraph>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }} />

      <div className="cta-section">
        <div className="fade-in">
          <Title level={2} className="section-title">Ready to Transform Your Workflow?</Title>
          <Paragraph className="section-subtitle">
            Join thousands of professionals who trust our AI platform to make smarter decisions faster
          </Paragraph>
          <Button
            type="primary"
            size="large"
            className="landing-button"
            onClick={() => navigate('/chat')}
            icon={<RocketOutlined />}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;