import { apiRequest } from "./api.js";

export function startDecision({ signal } = {}) {
  return apiRequest("/recommendation/decide/start", { method: "POST", signal });
}

export function answerQuestion(sessionId, answer) {
  return apiRequest("/recommendation/decide/answer", {
    method: "POST", body: { sessionId, answer },
  });
}

export function rejectRecommendation(sessionId, foodId) {
  return apiRequest("/recommendation/decide/reject", {
    method: "POST", body: { sessionId, foodId },
  });
}

export function acceptRecommendation(sessionId) {
  return apiRequest("/recommendation/decide/accept", {
    method: "POST", body: { sessionId },
  });
}
