import React from 'react'
import Chatbot from 'react-chatbot-kit'

import messageParser from './messageParser'
import actionProvider from './actionProvider'
import config from './config'

const ChatbotApp = () => {
  return (
    <div className="App">
    <header className="App-header">
      <Chatbot 
      messageParser={messageParser}
      actionProvider={actionProvider}
      config={config}
      />
    </header>
  </div>
  )
}

export default ChatbotApp