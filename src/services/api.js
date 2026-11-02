const API_BASE_URL = (import.meta.env?.VITE_API_BASE_URL || "/api").replace(/\/+$/, "");

export async function apiRequest(path, { method = "GET", body, signal } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    signal,
    headers: {
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) throw new Error("The request failed.");

  // Accepting a recommendation returns an empty successful response.
  const text = await response.text();
  if (!text) return null;
  const result = JSON.parse(text);
  if (result.code !== 1) throw new Error("The request failed.");
  return result.data;
}
