"use client";
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  useInstantSearch,
} from "react-instantsearch";
import SearchResult from "@/app/components/SearchResult";

function ExplorePage() {
  const searchClient = algoliasearch(
    "S1V0P8Z3CV",
    "f08d6472a8fbbbe0cb8cb60a2b837d9a"
  );

  function EmptyQueryBoundary({ children, fallback }) {
    const { indexUiState } = useInstantSearch();

    if (!indexUiState.query) {
      return fallback;
    }

    return children;
  }

  return (
    <div className="mt-12">
      <div>
        <InstantSearch searchClient={searchClient} indexName="ModulearnTitles">
          <SearchBox />
          <EmptyQueryBoundary fallback={null}>
            <Hits
              hitComponent={({ hit }) => <SearchResult id={hit.objectID} />}
            />
          </EmptyQueryBoundary>
        </InstantSearch>
      </div>
    </div>
  );
}

export default ExplorePage;
