import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    console.log("Searching for:", search);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a food..."
        aria-label="Search for a food"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;