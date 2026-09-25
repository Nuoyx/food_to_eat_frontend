function Question({ question, onAnswer }) {
  return (
    <section className="decider-question">
      <h1 className={question}></h1>

      <div className="decider-question__actions">
        <button
          type="button"
          onClick={() => onAnswer(true)}
          className="decider-button decider-button--yes"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => onAnswer(false)}
          className="decider-button decider-button--no"
        >
          No
        </button>
      </div>
    </section>
  )
}


export default Question