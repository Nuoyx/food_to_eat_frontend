import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodDecider.css";
import Question from "./food-decider-components/Question";
import Recommendation from "./food-decider-components/Recommendation";
import { startDecision, answerQuestion, rejectRecommendation, acceptRecommendation } from "../../services/recommendationService";
import { useRemoteData } from "../../hooks/useRemoteData";

export default function FoodDecider() {
  const request = useRemoteData(startDecision);
  return (
    <main className="food-decider">
      <header className="food-decider__header">
        <p className="food-decider__eyebrow">Help Me Decide</p>
        <h1>Let’s find something to eat.</h1>
        <p>Answer a few questions and we’ll find a food that matches your preferences.</p>
      </header>
      {request.loading && <p className="request-status" role="status">Loading your first question…</p>}
      {request.error && <section className="decider-question">
        <p role="alert">Unable to load a question. Please try again.</p>
        <button className="decider-button decider-button--yes" onClick={request.retry}>Retry</button>
      </section>}
      {request.data && <DecisionFlow key={request.data.sessionId}
        initialSession={request.data} onRestart={request.retry} />}
    </main>
  );
}

function DecisionFlow({ initialSession, onRestart }) {
  const [session, setSession] = useState(initialSession);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const pending = useRef(false);
  const navigate = useNavigate();

  const run = async (action) => {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setError(null);
    try {
      const next = await action();
      if (next) setSession(next);
    } catch {
      setError("Unable to complete your choice. Please try again or start over.");
    } finally {
      pending.current = false;
      setBusy(false);
    }
  };
  const accept = () => run(async () => {
    await acceptRecommendation(session.sessionId);
    navigate(`/foods/${session.recommendation.id}`);
  });

  return (
    <div aria-busy={busy}>
      {error && <p className="request-status" role="alert">{error}</p>}
      {busy && <p className="request-status" role="status">Finding your next bite…</p>}
      {session?.stage === "AWAITING_ANSWER" && <Question question={session.question} disabled={busy}
        onAnswer={(answer) => run(() => answerQuestion(session.sessionId, answer))} />}
      {session?.stage === "AWAITING_FEEDBACK" && <Recommendation food={session.recommendation} disabled={busy}
        onAccept={accept} onReject={() => run(() => rejectRecommendation(session.sessionId, session.recommendation.id))} />}
      {session?.stage === "EXHAUSTED" && <section className="decider-question">
        <h2>No more matches</h2><p>Try again with different preferences.</p>
      </section>}
      <div className="decider-question__actions">
        <button className="decider-button decider-button--no" disabled={busy} onClick={onRestart}>Start over</button>
      </div>
    </div>
  );
}
