function ChatButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className="chatbot-button"
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? "×" : "💬"}
    </button>
  );
}

export default ChatButton;