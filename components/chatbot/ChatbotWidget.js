// components/ChatbotWidget.js

import React, { useState, useRef, useEffect } from 'react';

const ChatbotWidget = () => {
    // State to toggle the visibility of the chat window
    const [isOpen, setIsOpen] = useState(false);
    
    // State to hold the chat history (starting with a welcome message)
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello! Ask any question about Fiasco Consultancy.", initial: true }
    ]);
    
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Function to scroll to the latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Scroll down whenever messages change
    useEffect(scrollToBottom, [messages]);

    // Dummy Send Function (will be replaced by API call later)
    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // --- Mock Backend Response Delay ---
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        // This is where your actual fetch('/api/chat', ...) will go
        const mockBotResponse = `Thanks for asking about "${userMessage.text}". We will integrate our Python backend soon to give you a real answer!`;
        
        const botMessage = { sender: 'bot', text: mockBotResponse };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    return (
        <>
            {/* 1. THE LAUNCHER BUTTON */}
            <button 
                className={`chatbot__launcher ${isOpen ? 'is-active' : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Display the initial message when closed, or an icon when open */}
                {!isOpen ? (
                    <span className="welcome__prompt">
                        Hello! Ask any question about Fiasco
                    </span>
                ) : (
                    <i className="fas fa-times"></i> /* X icon to close */
                )}
                
                <i className="far fa-comment-alt chat__icon-default"></i> {/* Default chat icon */}
            </button>

            {/* 2. THE CHAT WINDOW */}
            {isOpen && (
                <div className="chatbot__window">
                    <div className="chatbot__header">
                        <h4>Fiasco AI Assistant</h4>
                        <button onClick={() => setIsOpen(false)}><i className="fas fa-minus"></i></button>
                    </div>

                    <div className="chatbot__message-area">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message__row message__${msg.sender}`}>
                                <div className={`message__bubble ${msg.initial ? 'initial__bubble' : ''}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message__row message__bot">
                                <div className="message__bubble loading">
                                    <span>...typing</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={sendMessage} className="chatbot__input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatbotWidget;