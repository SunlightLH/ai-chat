import React from 'react';
import './ChatMessage.css';

function ChatMessage({ message }) {
  const { text, sender, timestamp } = message;
  const isAI = sender === 'ai';

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`message ${isAI ? 'message-ai' : 'message-user'}`}>
      <div className="message-avatar">
        {isAI ? '🤖' : '👤'}
      </div>
      <div className="message-content">
        <div className="message-bubble">
          {text}
        </div>
        <div className="message-time">
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;