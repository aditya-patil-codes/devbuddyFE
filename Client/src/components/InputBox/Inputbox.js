import React, { useState, useRef } from 'react';
import { FiSend } from 'react-icons/fi';

const Inputbox = ({ onSubmit, isChatStarted, loading }) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null); // Reference to the textarea

  const handleChange = (e) => {
    setValue(e.target.value);
    e.target.style.height = 'auto'; // Reset the height
    e.target.style.height = `${e.target.scrollHeight}px`; // Adjust the height
  };

  const handleSend = () => {
    if (value.trim() && !loading) {
      onSubmit(value); // Send message to the parent
      setValue(''); // Clear the input
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; // Reset height after submit
      }
    }
  };

  const handleKeyDown = (e) => {
    if (loading) return; // Ignore key presses when loading
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`flex justify-center items-center w-full max-w-3xl ${
        isChatStarted
          ? 'absolute bottom-8 left-1/2 transform -translate-x-1/2'
          : 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      }`}
    >
      <div className="flex w-full rounded-lg border shadow-md bg-inputBg">
        <textarea
          ref={textareaRef} // Attach ref to the textarea
          placeholder="Enter your doubts here..."
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={loading} // Disable input when loading
          className={`flex-grow p-3 text-lg rounded focus:outline-none bg-clip-text text-transparent placeholder-textSecondary resize-none ${
            loading ? 'cursor-not-allowed bg-gray-100' : ''
          }`}
          rows="1"
          style={{
            maxHeight: '150px', // Set a max height
            overflowY: 'auto', // Enable scrolling once max height is reached
            color: 'linear-gradient(to right, #f472b6, #8b5cf6)', // Add gradient background
            caretColor: '#fff', // Ensure the cursor is visible with a white color
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading} // Disable the button when loading
          className={`px-4 py-2 rounded-tr rounded-br text-black flex items-center justify-center ${
            loading
              ? 'bg-gray-400 cursor-not-allowed' // Change color when disabled
              : 'bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 focus:outline-none'
          }`}
        >
          <FiSend className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Inputbox;
