import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
const ChatApp = () => {
  const [messages, setMessages] = useState([
    { text: "How can I help you today?...", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async() => {
    if (inputValue.trim()) {
      console.log("Input Value:", inputValue);
      const userMessage = { text: inputValue, sender: "user" };
      setMessages([...messages, userMessage]);
      setInputValue("");
      setLoading(true);
      const data = {
        question_form : inputValue
      }
      
       try {
        const response = await axios.post(`https://studyboosta.onrender.com/chatbot`, data,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        console.log(response.data)
        if ( response.status === 200 ) {
          const botMessage = {
            text: data.reply || "Sorry, no response from the server.",
            sender: "bot",
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
          setLoading(false);
          
        }
        
      } catch (error) {
        console.error("There was an error with the API request:", error);
        let errorMessage;
        if (error.message === "Network response was not ok") {
          errorMessage = { text: "The request took too long. Please try again later.", sender: "bot" };
        } else {
          errorMessage = { text: "Sorry, there was an error processing your request.", sender: "bot" };
        }
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        setLoading(false);
       }

      
    }
  };

  const styles = {
    chatContainer: {
      maxWidth: "80%",
      margin: "50px auto",
      backgroundColor: "#31301E",
      borderRadius: "10px",
      padding: "10px",
      paddingBottom: "200px",
      minWidth: "60%",
    },
    chatBubble: {
      maxWidth: "70%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "10px",
    },
    botMessage: {
      backgroundColor: "#1A1905",
      color: "#ddd",
      alignSelf: "flex-start",
    },
    userMessage: {
      backgroundColor: "#694829",
      color: "#DDD",
      alignSelf: "flex-end",
    },
    chatInput: {
      maxWidth: "70%",
      minWidth: "60%",
      margin: "40px auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      color: "#fff",
    },
    input: {
      width: "90%",
      backgroundColor: "#322F1E",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      color: "#ddd",
    },
    button: {
      width: "10%",
      padding: "10px",
      backgroundColor: "#ddd",
      color: "black",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      opacity: loading ? 0.7 : 1,
      pointerEvents: loading ? "none" : "auto",
    },
    spinner: {
      border: "4px solid rgba(255, 255, 255, 0.3)",
      borderRadius: "50%",
      borderTop: "4px solid #fff",
      width: "24px",
      height: "24px",
      animation: "spin 1s linear infinite",
    },
    botThinking: {
      backgroundColor: "#1A1905",
      color: "#ddd",
      alignSelf: "flex-start",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "10px",
    },
  };

  return (
    <div>
      {/* Chat Container */}
      <div className="container chat-container" style={styles.chatContainer}>
        <div className="d-flex flex-column">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble ${message.sender}-message`}
              style={{
                ...styles.chatBubble,
                ...(message.sender === "bot"
                  ? styles.botMessage
                  : styles.userMessage),
              }}
            >
              {message.text}
            </div>
          ))}
          {loading && (
            <div style={styles.botThinking}>
              ...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className="chat-input text-light" style={styles.chatInput}>
        <input
          type="text"
          placeholder="Enter your Question"
          value={inputValue}
          onChange={handleInputChange}
          style={styles.input}
          aria-label="Chat input"
          disabled={loading}
        />
        <button
          type="button"
          onClick={handleSendMessage}
          style={styles.button}
          aria-label="Send"
          disabled={loading}
        >
          {loading ? "Send" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
