import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  return <SearchForm key={query} initialQuery={query} />;
}

function SearchForm({ initialQuery }) {
  const [search, setSearch] = useState(initialQuery);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams(searchParams);
    const query = search.trim();

    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    params.delete("page");

    navigate({
      pathname: "/foods",
      search: params.toString() ? `?${params.toString()}` : "",
    });
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search foods by name..."
        aria-label="Search foods by name"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
