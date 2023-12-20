// ChatbotCom.jsx
import React from 'react';
import Chatbot from 'react-chatbot-kit';

import ActionProvider from './ChatbotComponent/ActionProvider';
import MessageParser from './ChatbotComponent/MessageParser';
import config from './ChatbotComponent/config';

const ChatbotCom = () => {
  const chatbotStyles = {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
    userMessageBox: {
      backgroundColor: "#4CAF50", // Style for user messages
    },
    chatList: {
      backgroundColor: "#f0f0f0", // Style for the entire chat list
    },
    listItem: {
      padding: "10px",
      borderBottom: "1px solid #ccc", // Style for each chat list item
    },
  };
  return (
    <>
       <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} style={chatbotStyles} />
    </>
  );
};

export default ChatbotCom;
