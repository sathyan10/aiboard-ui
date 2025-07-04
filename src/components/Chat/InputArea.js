import React from 'react';
import { Input, Button, Dropdown, Tooltip } from 'antd';
import { SendOutlined, FilterOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const InputArea = ({
  darkMode, input, setInput, handleSend,
  responseMode, filterOpen, setFilterOpen, setResponseMode
}) => {
  const filterMenu = {
    items: [
      {
        key: 'smart-reply',
        label: (
          <span>
            <span role="img" aria-label="lightning" style={{ marginRight: 8 }}>⚡</span>
            Smart Reply
          </span>
        )
      },
      {
        key: 'search-web',
        label: (
          <span>
            <span role="img" aria-label="globe" style={{ marginRight: 8 }}>🌐</span>
            Search Web
          </span>
        )
      },
      {
        key: 'deep-think',
        label: (
          <span>
            <span role="img" aria-label="brain" style={{ marginRight: 8 }}>🧠</span>
            Deep Think
          </span>
        )
      },
    ],
    selectable: true,
    selectedKeys: [responseMode],
    onSelect: ({ key }) => setResponseMode(key)
  };

  return (
    <div className="input-container">
      <Dropdown
        menu={filterMenu}
        trigger={['click']}
        open={filterOpen}
        onOpenChange={(visible) => setFilterOpen(visible)}
        placement="topLeft"
      >
        <Tooltip title="Response Mode">
          <Button
            icon={<FilterOutlined />}
            className="filter-button"
            type={filterOpen ? 'primary' : 'default'}
          />
        </Tooltip>
      </Dropdown>
      <TextArea
        className="chat-input"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onPressEnter={handleSend}
        autoSize={{ minRows: 1, maxRows: 4 }}
      />
      <Tooltip title="Send message">
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSend}
          className="send-button"
          disabled={!input.trim()}
        />
      </Tooltip>
    </div>
  );
};

export default InputArea;
