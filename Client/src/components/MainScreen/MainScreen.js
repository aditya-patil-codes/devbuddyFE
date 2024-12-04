import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LogoImage from "../../assets/loadinglogo.png";

const MainScreen = ({ messages, loading }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom on new message
    }
  }, [messages, loading]);

  return (
    <div
      ref={chatContainerRef}
      className="flex flex-col mt-8 max-h-[80vh] max-w-3xl p-4 overflow-y-auto rounded-lg relative"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.isUser ? "justify-end" : "justify-start"
          } items-center mb-2`}
        >
          {!message.isUser && (
            <img
              src={LogoImage}
              alt="AI Avatar"
              className="w-9 h-9 rounded-full mr-2"
            />
          )}
          <div
            className={`px-4 py-2 rounded-lg max-w-sm break-words overflow-hidden whitespace-pre-wrap ${
              message.isUser
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}

      {loading && (
        <motion.div className="self-start py-2 rounded-lg max-w-sm flex items-center">
          <motion.img
            src={LogoImage}
            alt="Loading..."
            className="w-8 h-8 rounded-full mr-2"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
            transition={{
              rotate: { repeat: Infinity, duration: 1, ease: "linear" },
              scale: { repeat: Infinity, duration: 1, ease: "easeInOut" } 
            }}
          />
       
        </motion.div>
      )}
    </div>
  );
};

export default MainScreen;
