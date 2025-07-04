import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  MessageOutlined,
  DashboardOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState('');

  useEffect(() => {
    if (location.pathname === '/') setCurrent('1');
    else if (location.pathname === '/dashboard') setCurrent('2');
    else if (location.pathname === '/chat') setCurrent('3');
  }, [location.pathname]);

  const handleClick = (e) => {
    setCurrent(e.key);
    if (e.key === '1') navigate('/');
    else if (e.key === '2') navigate('/dashboard');
    else if (e.key === '3') navigate('/chat');
  };

  return (
    <div className="navbar-wrapper">
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        className="navbar animated-navbar"
        onClick={handleClick}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home',
          },
          {
            key: '2',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
          },
          {
            key: '3',
            icon: <MessageOutlined />,
            label: 'Chat',
          },
        ]}
      />
    </div>
  );
};

export default Navbar;