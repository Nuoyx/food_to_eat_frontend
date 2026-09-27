import { useState } from "react";
import "./Chatbot.css";

import ChatButton from "./chatbot-components/ChatButton";
import ChatWindow from "./chatbot-components/ChatWindow";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleSendMessage = async (message) => {
    if (!message.trim()) {
      return;
    }

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    // Backend call will go here
  };

  return (
    <>
      {isOpen && (
        <ChatWindow
          messages={messages}
          onSendMessage={handleSendMessage}
          onClose={() => setIsOpen(false)}
        />
      )}

      <ChatButton
        isOpen={isOpen}
        onClick={handleToggle}
      />
    </>
  );
}

export default Chatbot;