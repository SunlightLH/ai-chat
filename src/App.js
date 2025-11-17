import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '你好！我是 AI 聊天助手。有什么我可以帮助你的吗？',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = (text) => {
    // 添加用户消息
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);

    // 模拟 AI 回复
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        text: generateAIResponse(text),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (userMessage) => {
    const responses = [
      '这是一个很好的问题！让我来帮你分析一下。',
      '我理解你的意思了。关于这个问题，我认为...',
      '非常有趣的观点！我可以为你提供一些建议。',
      '让我想想...我觉得可以从这几个方面来看待这个问题。',
      '谢谢你的提问！根据我的理解，这个情况可以这样处理...'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🤖 AI 聊天助手</h1>
      </header>
      <main className="App-main">
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </main>
    </div>
  );
}

export default App;