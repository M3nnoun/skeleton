import React from "react";
import SearchButton from "./searchButton";
function SearchForm({ query }: { query?: string }) {
 
  return (
    <>
      <form action="/" className="search-form">
        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="Search Startups"
        />
        <div className="flex gap-2">
          {query && <SearchButton />}
          <button type="submit" className="search-btn text-white">
            S
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
