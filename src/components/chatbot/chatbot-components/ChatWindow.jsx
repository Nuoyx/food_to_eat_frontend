import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow({
  messages,
  onSendMessage,
}) {
  return (
    <section className="chatbot-window">
      <header className="chatbot-window__header">
        <div>
          <h2>Your Food Assistant</h2>
          <span>Here for your next delicious idea</span>
        </div>
      </header>

      <div className="chatbot-window__messages">
        {messages.length === 0 ? (
          <div className="chatbot-window__welcome">
            <p>
              Tell me what you're craving, and I'll help you find something delicious.
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))
        )}
      </div>

      <ChatInput onSend={onSendMessage} />
    </section>
  );
}

export default ChatWindow;