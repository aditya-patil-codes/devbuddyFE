import { useState } from "react";
import "./App.css";
import Inputbox from "./components/InputBox/Inputbox";
import MainScreen from "./components/MainScreen/MainScreen";
import Preprompts from "./components/PrePrompts/Preprompts";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import LogoImage from "./assets/newteamlogo.png";
import Footer from "./components/Footer/Footer";
import NameAiravat from "./assets/name_airavat.png";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true); // Track the visibility of the welcome text
  const handleSendMessage = (userMessage) => {
    if (!isChatStarted) setIsChatStarted(true);

    const userChat = { text: userMessage, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userChat]);

    setLoading(true); // Show loading animation

    // Hide welcome text after the first message is sent
    setShowWelcomeText(false);

    setTimeout(() => {
      // Hardcoded responses for specific queries
      let aiResponseText;
      let responseDelay = 2000; // Default delay for most cases

      switch (userMessage.toLowerCase().trim()) {
        case "how does the reel spin?":
          aiResponseText = `
  This method is called when the spin button is pressed. It performs the following actions:

Checks Conditions
!Options.checkClick: Ensures the button is not already pressed.

this.scene.valueMoney >= (Options.coin * Options.line): Verifies enough money is available to spin.

Options.txtAutoSpin === 'AUTO': Checks if auto-spin is enabled.

Actions If All Conditions Are Met

destroyLineArr(): Removes the previous lines on the reels.

setColor(): Tints the button and other elements.

Options.checkClick = true: Prevents further clicks until the spin is complete.

this.bgSpin.setScale(0.9): Scales down the button for visual feedback.

removeTextWin(): Clears any previous winning text.

saveLocalStorage(): Saves the current money value.

this.tweens = new Tween(this.scene): Creates a new Tween instance to handle the spin animation.

destroyLineArr() Method

destroyLineArr() {  
  if (Options.lineArray.length > 0) {  
    for (let i = 0; i < Options.lineArray.length; i++) {  
      Options.lineArray[i].destroy();  
    }  
  }  
}

speedPlay Method
This method handles the automatic spinning process at the specified speed:

Create Speed Display

Dynamically creates bitmap text (this.txtSpeed) to display the current speed, positioned at the top of the screen.
Start Timer

Initializes a timer (this.timer) that triggers a callback function every 500 milliseconds.
Timer Callback

Executes the following steps:
Set Delay: Adjusts the timer delay to 4500 milliseconds (4.5 seconds) after the first execution.

Check Conditions: Verifies if the speed is greater than 0 and sufficient money is available to bet.

Perform Spin: If conditions are met, executes the following:
Set Color: Adjusts colors for spinning symbols.

Enable Click: Sets Options.checkClick to true to allow click interactions.

Destroy Lines: Removes any existing win lines.

Remove Win Text: Deletes previous win text.

Save Local Storage: Updates game data in local storage.

Create Tween: Initiates a Tween instance for spin animation.

How the Reel Spins
destroyLineArr() removes existing win lines and clears win text when the spin button is pressed.

setColor() tints the button and elements.

Options.checkClick = true prevents additional clicks during the spin.

this.bgSpin.setScale(0.9) scales down the button for visual feedback.

removeTextWin() clears old win text.

saveLocalStorage() stores the current money state.

A new Tween instance manages the spin animation.

speedPlay Method automates spinning with conditions for speed and money, repeatedly using destroyLineArr() to reset the reels before each spin.`;
          responseDelay = 2000; // Delay for this case
          break;

        case "explain me the architecture of this slot game please":
          aiResponseText = `Architecture of the Slot Game

Based on the provided code, the architecture of the slot game can be broken down into several components:

1. User Interface (UI)
The UI is responsible for displaying the game's graphics, including the spin button, reels, and other elements. The UI is created using HTML, CSS, and JavaScript.

2. Game Logic
The game logic component is responsible for managing the game's state, including the player's balance, the number of coins, and the current spin speed. It is created using JavaScript and handles the following tasks:

Checks conditions for spinning the reels.

Handles the destruction of win lines and removal of win text.

Saves the current game state to local storage.

Creates a new Tween instance to handle the spin animation.

3. Tweening
The tweening component is responsible for handling the animation of the spinning reels. It is created using JavaScript and performs the following actions:

Creates a new Tween instance to manage the spin animation.

Sets the scale of the spin button to 0.9 for visual feedback.

Scales down the spin button for visual feedback during the spin.

4. Timing
The timing component manages the timer and callback function that triggers the spin animation. It is created using JavaScript and performs the following tasks:

Creates a timer that triggers a callback function every 500 milliseconds.
Sets the timer delay to 4500 milliseconds (4.5 seconds) after the first execution.

5. Storage
The storage component is responsible for managing the game's data, including the player's balance and the current spin speed. It is created using JavaScript and handles the following tasks:

Saves the current game state to local storage.
Retrieves the saved game state from local storage.`;
          responseDelay = 2000; // Delay for this case
          break;

        case "will i ever understand play.next completely???":
          aiResponseText = `No lol.`;
          responseDelay = 3000; // Delay for this case
          break;

        default:
          aiResponseText = "Team Airavat Rocks."; // Default response
      }

      // Set the response with the appropriate delay
      setTimeout(() => {
        const aiResponse = { text: aiResponseText, isUser: false };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
        setLoading(false); // Hide loading animation
      }, responseDelay);
    }, 2000); // Simulate loading delay before switch case
  };

  const handleSelectPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="relative h-screen bg-background">
      <div className="flex flex-col items-center justify-center h-full">
        {/* Logo and Name in Flex */}
        <div className="absolute top-8 left-10 flex items-center space-x-4">
          <img src={LogoImage} alt="Logo" className="w-16 h-16" />
          <img src={NameAiravat} alt="Team Logo" className="w-40" />
        </div>

        <div>
          {/* Conditionally render WelcomeText based on the state */}
          {showWelcomeText && <WelcomeText />}
        </div>

        {!isChatStarted && <Preprompts onSelectPrompt={handleSelectPrompt} />}
        {isChatStarted && (
          <div className="flex-grow w-full max-w-3xl">
            <MainScreen messages={messages} loading={loading} />
          </div>
        )}

        <Inputbox
          onSubmit={handleSendMessage}
          isChatStarted={isChatStarted}
          loading={loading}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
