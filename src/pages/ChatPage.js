import React, { useState, useRef, useEffect } from 'react';
import { Layout, Drawer, Typography, Avatar, Radio, Divider, Switch } from 'antd';
import { RobotOutlined, BulbFilled, BulbOutlined } from '@ant-design/icons';
import Sidebar from '../components/Chat/Sidebar';
import ChatMessage from '../components/Chat/ChatMessage';
import InputArea from '../components/Chat/InputArea';
import '../styles/Chat.css';
import Navbar from '../components/Layout/Navbar';
const { Content, Footer, Header } = Layout;
const { Text } = Typography;

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hello! Welcome to the AI Chat! How can I help you today? 😊',
      mode: 'smart-reply',
      timestamp: Date.now() - 60000
    },
    {
      role: 'user',
      text: 'What\'s React about?',
      mode: 'smart-reply',
      timestamp: Date.now() - 30000
    },
    {
      role: 'assistant',
      text: 'React is a JavaScript library for building user interfaces. It lets you create reusable UI components and efficiently update the DOM when your data changes.\n\nKey features:\n- Component-based architecture\n- Virtual DOM for performance\n- JSX syntax\n- Unidirectional data flow',
      mode: 'smart-reply',
      timestamp: Date.now() - 15000
    },
  ]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMode, setResponseMode] = useState('smart-reply');
  const [filterOpen, setFilterOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      text: input,
      mode: responseMode,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let mockReply = {
        role: 'assistant',
        text: '',
        mode: responseMode,
        timestamp: Date.now()
      };

      if (responseMode === 'search-web') {
        mockReply.text = `I found these results for "${input}":\n\n1. [React Documentation](https://reactjs.org)\n2. [React GitHub Repo](https://github.com/facebook/react)\n3. [React Community Resources](https://reactjs.org/community/support.html)`;
      } else if (responseMode === 'deep-think') {
        mockReply.text = `After deep consideration about "${input}":\n\nReact represents a paradigm shift in frontend development by introducing a component-based architecture that promotes reusability and separation of concerns. Its virtual DOM implementation provides performance benefits by minimizing direct DOM manipulations.`;
      } else {
        mockReply.text = `Here's a response to "${input}":\n\nReact is maintained by Facebook and a community of developers. It's used for building single-page applications and allows developers to create large web applications that can change data without reloading the page.`;
      }

      setMessages(prev => [...prev, mockReply]);
      setLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <Layout className="app-wrapper">
      <Header className="custom-navbar">
        <Navbar />
      </Header>
      <Layout>
        <Sidebar
          darkMode={darkMode}
          toggleTheme={(checked) => setDarkMode(checked)}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setSettingsOpen={setSettingsOpen}
        />
        <Layout className={`site-layout ${collapsed ? 'collapsed' : ''}`}>
          <Content className="chat-content">
            <div className="chat-history" ref={chatContainerRef}>
              {messages.map((msg, index) => (
                <ChatMessage
                  key={index}
                  role={msg.role}
                  text={msg.text}
                  mode={msg.mode}
                  timestamp={msg.timestamp}
                />
              ))}
              {loading && (
                <div className="chat-message assistant loading">
                  <Avatar
                    icon={<RobotOutlined />}
                    className="chat-avatar"
                    style={{ background: 'linear-gradient(45deg, #10b981, #3b82f6)' }}
                  />
                  <div className="chat-bubble typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          </Content>
          <Footer className="chat-footer">
            <InputArea
              darkMode={darkMode}
              input={input}
              setInput={setInput}
              handleSend={handleSend}
              responseMode={responseMode}
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              setResponseMode={setResponseMode}
            />
          </Footer>
        </Layout>
      </Layout>
      <Drawer
        title="⚙️ Settings"
        placement="right"
        onClose={() => setSettingsOpen(false)}
        open={settingsOpen}
        className={`settings-drawer ${darkMode ? 'dark' : 'light'}`}
        width={300}
      >
        <div style={{ marginBottom: 16 }}>
          <h4>Default Response Mode</h4>
          <Radio.Group
            value={responseMode}
            onChange={(e) => setResponseMode(e.target.value)}
          >
            <Radio value="smart-reply">Smart Reply</Radio>
            <Radio value="search-web">Search Web</Radio>
            <Radio value="deep-think">Deep Think</Radio>
          </Radio.Group>
        </div>
        <Divider />
        <div style={{ marginBottom: 16 }}>
          <h4>Appearance</h4>
          <div className="theme-toggle" style={{ justifyContent: 'flex-start' }}>
            <Switch
              checkedChildren={<BulbFilled />}
              unCheckedChildren={<BulbOutlined />}
              checked={darkMode}
              onChange={(checked) => setDarkMode(checked)}
            />
            <Text className="theme-text" style={{ marginLeft: 8 }}>Dark Mode</Text>
          </div>
        </div>
      </Drawer>
    </Layout>
  );
}

export default ChatPage;