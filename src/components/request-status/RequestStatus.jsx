export default function RequestStatus({ loading, error, retry }) {
  if (loading) return <p className="request-status" role="status">Loading…</p>;
  if (!error) return null;
  return <div className="request-status" role="alert">
    <p>We couldn’t load this. Please try again.</p>
    <button type="button" onClick={retry}>Retry</button>
  </div>;
}
