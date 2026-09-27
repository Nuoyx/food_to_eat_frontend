import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) {
      return;
    }

    onSend(input);
    setInput("");
  };

  return (
    <form
      className="chatbot-input"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Try "something cozy and savory"'
        aria-label="Message the food assistant"
      />

      <button type="submit" aria-label="Send message">
        ^
      </button>
    </form>
  );
}

export default ChatInput;