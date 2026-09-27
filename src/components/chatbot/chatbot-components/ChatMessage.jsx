function ChatMessage({ message }) {
  return (
    <div
      className={`chat-message chat-message--${message.role}`}
    >
      {message.content}
    </div>
  );
}

export default ChatMessage;