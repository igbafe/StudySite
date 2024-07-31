import React from 'react'
import './chatbot.css'
const chatbot = () => {
  return (
    
    <div>
      {/* Chat Container */}
      <div className="container chat-container">
        <div className="d-flex flex-column">
          <div className="chat-bubble bot-message">
            How can I help you today?...
          </div>
          <div className="chat-bubble user-message">
            What are the unsafe places to avoid being around at night on this campus?
          </div>
          <div className="chat-bubble bot-message">
            ...
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="chat-input text-light">
        <button type="button">&#x27A4;</button>
        <input type="text" placeholder="Enter your Question" />
      </div>
    </div>


  )
}

export default chatbot