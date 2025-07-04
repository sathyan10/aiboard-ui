import React, { useState } from 'react';
import {
  Layout, Avatar, Switch, Dropdown, Divider,
  Typography, Button, Badge, Menu
} from 'antd';
import {
  UserOutlined, SettingOutlined, LogoutOutlined,
  BulbOutlined, BulbFilled, MessageOutlined,
  TeamOutlined, FileTextOutlined, HistoryOutlined,
  LeftOutlined, RightOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = ({ darkMode, toggleTheme, collapsed, setCollapsed, setSettingsOpen }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const profileMenu = {
    items: [
      {
        key: '1',
        icon: <SettingOutlined />,
        label: 'Settings',
        onClick: () => {
          setSettingsOpen(true);
          setDropdownVisible(false);
        },
      },
      {
        key: '2',
        icon: <LogoutOutlined />,
        label: 'Logout',
      }
    ]
  };

  return (
    <Sider
      width={250}
      collapsedWidth={80}
      className={`side-nav ${darkMode ? 'dark' : 'light'}`}
      collapsed={collapsed}
      collapsible
      trigger={null}
      theme={darkMode ? 'dark' : 'light'}
    >
      <div className="profile-section">
        <Dropdown
          menu={profileMenu}
          trigger={['click']}
          open={dropdownVisible}
          onOpenChange={setDropdownVisible}
          overlayClassName={darkMode ? 'dark-dropdown-overlay' : ''}
        >
          <div className={`profile-header ${dropdownVisible ? 'active' : ''}`}>
            <Badge dot status="success" offset={[-10, 40]}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Badge>
            {!collapsed && (
              <div className="profile-info">
                <Text strong className="profile-name">Sathyan Murugan</Text>
                <Text type="secondary" className="profile-plan">Premium Plan</Text>
              </div>
            )}
          </div>
        </Dropdown>

        <Divider className="nav-divider" />

        <div className="theme-toggle">
          <Switch
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
            checked={darkMode}
            onChange={toggleTheme}
          />
          {!collapsed && <Text className="theme-text">Dark Mode</Text>}
        </div>

        <Divider className="nav-divider" />
      </div>

      <Menu
        theme={darkMode ? 'dark' : 'light'}
        mode="inline"
        defaultSelectedKeys={['1']}
        className="nav-menu"
        items={[
          { key: '1', icon: <MessageOutlined />, label: 'Chat' },
          { key: '2', icon: <HistoryOutlined />, label: 'History' },
          { key: '3', icon: <TeamOutlined />, label: 'Contacts' },
          { key: '4', icon: <FileTextOutlined />, label: 'Documents' },
        ]}
      />

      <div className={`collapse-button-container ${collapsed ? 'centered' : 'right-aligned'}`}>
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-btn"
          style={{
            color: darkMode ? 'var(--sidebar-text)' : 'inherit',
            border: '1px solid var(--sidebar-border)'
          }}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
