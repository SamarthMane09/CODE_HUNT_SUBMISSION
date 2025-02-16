"use client";

import { useState } from "react";
import "../styles/utils.css";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Welcome to Invest Vault! Ask me anything about funding, equity, and investments.", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Keyword-based Responses
  const keywordResponses: { [key: string]: string } = {
    equity: "Equity represents ownership in a company. Investors get equity in exchange for funding.",
    valuation: "Valuation is the estimated worth of a company based on revenue, profits, and market potential.",
    investor: "Investors provide capital to businesses in exchange for equity or future returns.",
    funding: "Startup funding can come from angel investors, venture capitalists, or crowdfunding.",
    pitch: "A strong pitch includes your business idea, problem-solving approach, market potential, and revenue model.",
    roi: "ROI (Return on Investment) measures the profitability of an investment relative to its cost.",
    startup: "A startup is a young company founded to develop a unique product or service.",
    venture: "Venture capitalists invest in high-growth startups in exchange for equity.",
    angel: "Angel investors are individuals who fund early-stage startups with their personal money.",
  };

  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    for (const keyword in keywordResponses) {
      if (lowerInput.includes(keyword)) {
        return keywordResponses[keyword]; // Return the first matching response
      }
    }

    return "I'm not sure about that. Try asking about funding, equity, or startup investments!";
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botReply = getResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>💬</button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-box">
            <div className="chatbot-header">
              <h3>Investment Chatbot</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>{msg.text}</div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about funding, equity, etc."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .chatbot-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background:#e11d48;;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Chatbot Modal (Full Screen) */
        .chatbot-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding-right: 10px;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content:right;
          align-items: center;
        }

        .chatbot-box {
          width: 350px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          font-family: Arial, sans-serif;
          position: relative;
        }

        .chatbot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #e11d48;;
          color: #fff;
          padding: 10px;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
        }

        .chatbot-messages {
          max-height: 300px;
          overflow-y: auto;
          padding: 10px;
          background: #f9f9f9;
        }

        .chat-message {
          padding: 8px 12px;
          margin: 5px 0;
          border-radius: 5px;
          width: fit-content;
          max-width: 80%;
        }

        .chat-message.user {
          background: #e11d48;;
          color: #fff;
          align-self: flex-end;
          margin-left: auto;
        }

        .chat-message.bot {
          background: #e0e0e0;
          color: #000;
        }

        .chatbot-input {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ddd;
          background: white;
        }

        .chatbot-input input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .chatbot-input button {
          margin-left: 5px;
          padding: 8px 12px;
          background: #e11d48;;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
