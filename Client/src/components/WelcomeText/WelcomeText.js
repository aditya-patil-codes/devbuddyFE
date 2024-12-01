import React from 'react';
import { motion } from 'framer-motion';

const WelcomeText = () => {
  const text = "Team Airavat Presents: Dev Buddy";

  // Create an array of individual characters
  const textArray = text.split("");

  return (
    <div className="welcome-text">
      {textArray.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1, // Adjust the delay between each character
            duration: 0.1, // Duration for each character
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default WelcomeText;