import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, RobotOutlined, ClockCircleOutlined } from '@ant-design/icons';

const ChatMessage = ({ role, text, mode, timestamp }) => {
  const messageTime = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const modeLabel = {
    'smart-reply': '⚡ Smart Reply',
    'search-web': '🌐 Web Search',
    'deep-think': '🧠 Deep Think'
  };

  return (
    <div className={`chat-message ${role}`}>
      <Avatar
        icon={role === 'user' ? <UserOutlined /> : <RobotOutlined />}
        className="chat-avatar"
        style={role === 'assistant' ? { background: 'linear-gradient(45deg, #34d399, #3b82f6)' } : null}
      />
      <div className="message-content">
        <div className="chat-bubble">
          {text}
          <div className="message-footer">
            <span className="response-mode-tag">
              {modeLabel[mode]}
            </span>
            <span className="message-time">
              <ClockCircleOutlined style={{ marginRight: 4 }} />
              {messageTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;