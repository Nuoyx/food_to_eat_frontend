export default function Question({ question, onAnswer, disabled }) {
  return <section className="decider-question">
    <h2>{question.question}</h2>
    <div className="decider-question__actions">
      <button type="button" disabled={disabled} onClick={() => onAnswer(true)} className="decider-button decider-button--yes">Yes</button>
      <button type="button" disabled={disabled} onClick={() => onAnswer(false)} className="decider-button decider-button--no">No</button>
    </div>
  </section>;
}
