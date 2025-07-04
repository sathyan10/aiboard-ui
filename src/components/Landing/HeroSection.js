import React from 'react';
import { Row, Col } from 'antd';
import '../../styles/Landing.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-gradient-overlay" />

      <Row className="hero-content" justify="center" align="middle">
        <Col span={24}>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;