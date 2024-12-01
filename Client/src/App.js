import { useState } from 'react';
import './App.css';
import Inputbox from './components/InputBox/Inputbox';
import MainScreen from './components/MainScreen/MainScreen';
import Preprompts from './components/PrePrompts/Preprompts';
import LogoImage from './assets/team_logo.png'; 
import NameAiravat from './assets/name_airavat.png';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = (userMessage) => {
    if (!isChatStarted) setIsChatStarted(true);

    const userChat = { text: userMessage, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userChat]);

    setLoading(true); // Show loading animation

    setTimeout(() => {
      const aiResponse = { text: 'Team Airavat Rocks.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setLoading(false); // Hide loading animation
    }, 2000); // Simulate AI response delay
  };

  const handleSelectPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {/* Logo and Name in Flex */}
      <div className="absolute top-8 left-10 flex items-center space-x-4">
        <img
          src={LogoImage}
          alt="Logo"
          className="w-10 h-10"
        />
        <img
          src={NameAiravat}
          alt="Team Logo"
          className="w-40"
        />
      </div>

      {!isChatStarted && <Preprompts onSelectPrompt={handleSelectPrompt} />}
      {isChatStarted && (
        <div className="flex-grow w-full max-w-3xl">
          <MainScreen messages={messages} loading={loading} />
        </div>
      )}
      <Inputbox onSubmit={handleSendMessage} isChatStarted={isChatStarted} loading={loading}  />
    </div>
  );
};

export default App;
