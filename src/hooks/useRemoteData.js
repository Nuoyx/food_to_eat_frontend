import { useEffect, useState } from "react";

export function useRemoteData(loader) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    Promise.resolve().then(() => {
      if (!controller.signal.aborted) return loader({ signal: controller.signal });
    })
      .then((data) => {
        if (!controller.signal.aborted) setResult({ loader, attempt, data });
      })
      .catch((error) => {
        if (!controller.signal.aborted) setResult({ loader, attempt, error });
      });
    return () => controller.abort();
  }, [loader, attempt]);
  const current = result?.loader === loader && result?.attempt === attempt;
  return {
    loading: !current,
    data: current ? result.data : null,
    error: current ? result.error : null,
    retry: () => setAttempt((value) => value + 1),
  };
}
