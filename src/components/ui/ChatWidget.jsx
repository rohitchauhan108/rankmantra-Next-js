'use client'

import React, { useState, useEffect } from "react";
import { FaComment, FaTimes } from "react-icons/fa";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [askedName, setAskedName] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setMessages([
      {
        id: "bot-welcome",
        sender: "bot",
        message: "Hi! How can I help you today?",
        timestamp: new Date(),
      },
      {
        id: "bot-name",
        sender: "bot",
        message: "Before we start, may I know your name?",
        timestamp: new Date(),
      },
    ]);

    setAskedName(true);

    const handler = (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random(),
          sender: "admin",
          message: msg,
          timestamp: new Date(),
        },
      ]);
    };

    socket.on("whatsapp_reply", handler);

    return () => {
      socket.off("whatsapp_reply", handler);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const name = input;

    setMessages((prev) => [
      ...prev,
      {
        id: Math.random(),
        sender: "user",
        message: input,
        timestamp: new Date(),
      },
    ]);

    setInput("");

    // 👉 NAME FLOW
    if (askedName && !userName) {
      setUserName(name);
      setAskedName(false);

      // Step 1: greeting
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random(),
            sender: "bot",
            message: `Hi ${name}, I can connect you with our team on WhatsApp. Please wait a moment...`,
            timestamp: new Date(),
          },
        ]);
      }, 4000);

      // Step 2: WhatsApp redirect after 4 sec
      setTimeout(() => {
        const phone = "918979249912"; // ✅ FIXED (no spaces)
        const text = `Hi, my name is ${name}. I have some queries.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
      }, 4000);

    } else {
      socket.emit("user_message", input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-8 z-50">
        <div
          onClick={toggleChat}
          className={`w-14 h-14 flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 ${
            isOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100"
          }`}
        >
          <FaComment />
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-8 right-8 w-full max-w-md h-[70vh] bg-white rounded-lg shadow-xl z-50 flex flex-col transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        style={{ minWidth: "350px" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-red-600 text-white rounded-t-lg">
          <h3>Live Chat</h3>
          <button onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#FEFAF8]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex mb-3 ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-orange-100"
                    : "bg-white"
                }`}
              >
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t flex">
          <input
            type="text"
            value={input}
            placeholder="Type a message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 px-4 py-2 border rounded-full"
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-red-500 text-white px-4 rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;