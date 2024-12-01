import React from 'react';

const Preprompts = ({ onSelectPrompt }) => {
  const prompts = [
    "What is AI?",
    "Will I ever Understand Play.Next completely?",
    "Best way to learn JavaScript?",
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-48 p-4 rounded-lg max-w-2xl mx-auto">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onSelectPrompt(prompt)}
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 text-black rounded-lg shadow hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default Preprompts;
