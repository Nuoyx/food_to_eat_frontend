import "./FoodExplore.css";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { getFoods } from "../../services/foodService";
import { useRemoteData } from "../../hooks/useRemoteData";
import RequestStatus from "../../components/request-status/RequestStatus";
import SearchBar from "../../components/search-bar/SearchBar";
import FoodFilters from "./food-explore-components/FoodFilter";
import FoodResults from "./food-explore-components/FoodResults";

export default function FoodExplore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const load = useCallback((options) => getFoods(queryString, options), [queryString]);
  const request = useRemoteData(load);
  const requestedPage = Number(searchParams.get("page") || 1);
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const pages = Math.max(1, Math.ceil((request.data?.total || 0) / 20));
  const changePage = (nextPage) => setSearchParams((previous) => {
    const next = new URLSearchParams(previous);
    next.set("page", nextPage);
    return next;
  });
  return (
    <main className="food-explore">
      <h1>Explore All Foods</h1>
      <SearchBar />
      <section className="food-explore__browser">
        <FoodFilters />
        <div>
          <RequestStatus {...request} />
          {request.data && <>
            <FoodResults foods={request.data.records} total={request.data.total} />
            <nav className="food-pagination" aria-label="Food results pages">
              <button disabled={page <= 1} onClick={() => changePage(page - 1)}>Previous</button>
              <span role="status">Page {page} of {pages}</span>
              <button disabled={page >= pages} onClick={() => changePage(page + 1)}>Next</button>
            </nav>
          </>}
        </div>
      </section>
    </main>
  );
}
